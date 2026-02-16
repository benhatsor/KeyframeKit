//
// KeyframeKit.js
// Ben Hatsor
// 
// See README.md for usage.
//
const PERCENTAGE_CHAR = '%';
export default new class KeyframesFactory {
    getStyleSheetKeyframes({ in: documentOrShadowRoot = document } = {}) {
        let keyframesDict = {};
        for (const styleSheet of documentOrShadowRoot.styleSheets) {
            for (const rule of styleSheet.cssRules) {
                if (!(rule instanceof CSSKeyframesRule)) {
                    continue;
                }
                const [animationName, keyframes] = parseKeyframesRule({
                    rule
                });
                keyframesDict[animationName] = keyframes;
            }
        }
        return keyframesDict;
    }
};
function parseKeyframesRule({ rule: keyframes }) {
    const animationName = keyframes.name;
    let parsedKeyframes = [];
    for (const keyframe of keyframes) {
        // remove trailing '%'
        /// https://drafts.csswg.org/css-animations/#dom-csskeyframerule-keytext
        const percentString = removeSuffix({
            of: keyframe.keyText,
            suffix: PERCENTAGE_CHAR
        });
        const percent = Number(percentString);
        const offset = percent / 100;
        let parsedProperties = {};
        for (const propertyName of keyframe.style) {
            /// https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration/getPropertyValue
            const propertyValue = keyframe.style.getPropertyValue(propertyName);
            parsedProperties[propertyName] = propertyValue;
        }
        const parsedKeyframe = {
            ...parsedProperties,
            offset: offset
        };
        parsedKeyframes.push(parsedKeyframe);
    }
    const parsedKeyframesInstance = new ParsedKeyframes(parsedKeyframes);
    return [animationName, parsedKeyframesInstance];
}
/// https://drafts.csswg.org/web-animations-1/#the-keyframeeffect-interface
export class KeyframeEffectParameters {
    constructor({ keyframes, options = {} }) {
        this.keyframes = keyframes;
        this.options = options;
    }
    /// https://drafts.csswg.org/web-animations-1/#the-keyframeeffect-interface
    /// https://drafts.csswg.org/web-animations-1/#the-animation-interface
    toAnimation({ target, timeline = document.timeline }) {
        const keyframeEffect = new KeyframeEffect(target, this.keyframes, this.options);
        const animation = new Animation(keyframeEffect, timeline);
        return animation;
    }
}
export class ParsedKeyframes {
    constructor(keyframes) {
        this.keyframes = keyframes;
    }
    toKeyframeEffect(options) {
        const keyframeEffect = new KeyframeEffectParameters({
            keyframes: this.keyframes,
            options: options ?? undefined
        });
        return keyframeEffect;
    }
}
// MARK: - Util
function removeSuffix({ of: string, suffix }) {
    return string.slice(0, -suffix.length);
}
