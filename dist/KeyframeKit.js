//
// KeyframeKit.js
// Ben Hatsor
// 
// See README.md for usage.
//
const PERCENTAGE_CHAR = '%';
export class KeyframesFactory {
    KeyframesRuleNameTypeError = class KeyframesFactoryKeyframesRuleNameTypeError extends TypeError {
        message = `Keyframes rule name must be a string.`;
    };
    SourceTypeError = class KeyframesFactorySourceTypeError extends TypeError {
        message = `Source must be either a Document, a ShadowRoot or a CSSStyleSheet instance.`;
    };
    getStyleSheetKeyframes({ of: ruleName, in: source = document }) {
        if (typeof ruleName !== 'string') {
            throw new this.KeyframesRuleNameTypeError();
        }
        if (source instanceof Document || source instanceof ShadowRoot) {
            return this.getStyleSheetKeyframesInDocumentOrShadowRoot({
                of: ruleName,
                documentOrShadowRoot: source
            });
        }
        else if (source instanceof CSSStyleSheet) {
            return this.getStyleSheetKeyframesInStyleSheet({
                of: ruleName,
                styleSheet: source
            });
        }
        else {
            throw new this.SourceTypeError();
        }
    }
    getStyleSheetKeyframesInDocumentOrShadowRoot({ of: ruleName, documentOrShadowRoot }) {
        for (const styleSheet of documentOrShadowRoot.styleSheets) {
            const keyframesRule = this.getStyleSheetKeyframesInStyleSheet({
                of: ruleName,
                styleSheet: styleSheet
            });
            if (keyframesRule !== undefined) {
                return keyframesRule;
            }
        }
    }
    getStyleSheetKeyframesInStyleSheet({ of: ruleName, styleSheet }) {
        for (const rule of styleSheet.cssRules) {
            if (!(rule instanceof CSSKeyframesRule)) {
                continue;
            }
            if (rule.name === ruleName) {
                const keyframes = this.parseKeyframesRule({
                    rule: rule
                });
                return keyframes;
            }
        }
    }
    getAllStyleSheetKeyframesRules({ in: source = document } = {}) {
        if (source instanceof Document || source instanceof ShadowRoot) {
            return this.getAllStyleSheetKeyframesRulesInDocumentOrShadowRoot({
                documentOrShadowRoot: source
            });
        }
        else if (source instanceof CSSStyleSheet) {
            return this.getAllStyleSheetKeyframesRulesInStyleSheet({
                styleSheet: source
            });
        }
        else {
            throw new this.SourceTypeError();
        }
    }
    getAllStyleSheetKeyframesRulesInDocumentOrShadowRoot({ documentOrShadowRoot }) {
        let keyframesRules = {};
        for (const styleSheet of documentOrShadowRoot.styleSheets) {
            const styleSheetKeyframesRules = this.getAllStyleSheetKeyframesRulesInStyleSheet({
                styleSheet: styleSheet
            });
            keyframesRules = {
                ...keyframesRules,
                ...styleSheetKeyframesRules
            };
        }
        return keyframesRules;
    }
    getAllStyleSheetKeyframesRulesInStyleSheet({ styleSheet }) {
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
}
export default new KeyframesFactory();
/// https://drafts.csswg.org/web-animations-1/#the-keyframeeffect-interface
export class KeyframeEffectParameters {
    keyframes;
    options;
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
    keyframes;
    constructor(keyframes) {
        this.keyframes = keyframes;
    }
    toKeyframeEffect(options) {
        let keyframeEffect;
        // convert (required) nullable to optional
        if (options !== null) {
            keyframeEffect = new KeyframeEffectParameters({
                keyframes: this.keyframes,
                options: options
            });
        }
        else {
            keyframeEffect = new KeyframeEffectParameters({
                keyframes: this.keyframes
            });
        }
        return keyframeEffect;
    }
}
// MARK: - Util
function removeSuffix({ of: string, suffix }) {
    return string.slice(0, -suffix.length);
}
//# sourceMappingURL=KeyframeKit.js.map