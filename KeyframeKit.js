//
// KeyframeKit.js
// Ben Hatsor
// 
// See README.md for usage.
//
const PERCENTAGE_CHAR = '%';
export default new class KeyframesFactory {
    static { this.KeyframesRuleNameTypeError = class KeyframesFactoryKeyframesRuleNameTypeError extends TypeError {
        constructor() {
            super(...arguments);
            this.message = `Keyframes rule name must be a string.`;
        }
    }; }
    static { this.SourceTypeError = class KeyframesFactorySourceTypeError extends TypeError {
        constructor() {
            super(...arguments);
            this.message = `Source must be either a Document, a ShadowRoot or a CSSStyleSheet instance.`;
        }
    }; }
    getStyleSheetKeyframes({ name, in: source = document }) {
        if (typeof name !== 'string') {
            throw new KeyframesFactory.KeyframesRuleNameTypeError();
        }
        if (source instanceof Document || source instanceof ShadowRoot) {
            return this.#getStyleSheetKeyframesInDocumentOrShadowRoot({
                name: name,
                documentOrShadowRoot: source
            });
        }
        else if (source instanceof CSSStyleSheet) {
            return this.#getStyleSheetKeyframesInStyleSheet({
                name: name,
                styleSheet: source
            });
        }
        else {
            throw new KeyframesFactory.SourceTypeError();
        }
    }
    #getStyleSheetKeyframesInDocumentOrShadowRoot({ name, documentOrShadowRoot }) {
        for (const styleSheet of documentOrShadowRoot.styleSheets) {
            const keyframesRule = this.#getStyleSheetKeyframesInStyleSheet({
                name: name,
                styleSheet: styleSheet
            });
            if (keyframesRule !== undefined) {
                return keyframesRule;
            }
        }
        return undefined;
    }
    #getStyleSheetKeyframesInStyleSheet({ name, styleSheet }) {
        for (const rule of styleSheet.cssRules) {
            if (!(rule instanceof CSSKeyframesRule)) {
                continue;
            }
            if (rule.name === name) {
                const keyframes = this.parseKeyframesRule({
                    rule: rule
                });
                return keyframes;
            }
        }
        return undefined;
    }
    getAllStyleSheetKeyframesRules({ in: source = document } = {}) {
        if (source instanceof Document || source instanceof ShadowRoot) {
            return this.#getAllStyleSheetKeyframesRulesInDocumentOrShadowRoot({
                documentOrShadowRoot: source
            });
        }
        else if (source instanceof CSSStyleSheet) {
            return this.#getAllStyleSheetKeyframesRulesInStyleSheet({
                styleSheet: source
            });
        }
        else {
            throw new KeyframesFactory.SourceTypeError();
        }
    }
    #getAllStyleSheetKeyframesRulesInDocumentOrShadowRoot({ documentOrShadowRoot }) {
        let keyframesRules = {};
        for (const styleSheet of documentOrShadowRoot.styleSheets) {
            const styleSheetKeyframesRules = this.#getAllStyleSheetKeyframesRulesInStyleSheet({
                styleSheet: styleSheet
            });
            keyframesRules = {
                ...keyframesRules,
                ...styleSheetKeyframesRules
            };
        }
        return keyframesRules;
    }
    #getAllStyleSheetKeyframesRulesInStyleSheet({ styleSheet }) {
        let keyframesRules = {};
        for (const rule of styleSheet.cssRules) {
            if (!(rule instanceof CSSKeyframesRule)) {
                continue;
            }
            const keyframes = this.parseKeyframesRule({
                rule: rule
            });
            keyframesRules[rule.name] = keyframes;
        }
        return keyframesRules;
    }
    parseKeyframesRule({ rule: keyframes }) {
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
        return parsedKeyframesInstance;
    }
};
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
        // convert (required) nullable to optional
        const optionalOptions = options === null ? undefined : options;
        const keyframeEffect = new KeyframeEffectParameters({
            keyframes: this.keyframes,
            options: optionalOptions
        });
        return keyframeEffect;
    }
}
// MARK: - Util
function removeSuffix({ of: string, suffix }) {
    return string.slice(0, -suffix.length);
}
