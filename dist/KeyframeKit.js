//
// KeyframeKit
// Ben Hatsor
// 
// See README.md for usage.
//
const CHARS = {
    PERCENT_SIGN: '%',
    HYPHEN_MINUS: '-',
    DOUBLE_HYPHEN_MINUS: '--',
    WEBKIT_PREFIX: '-webkit-'
};
class KeyframesFactory {
    Error = {
        KeyframesRuleNameTypeError: class KeyframesRuleNameTypeError extends TypeError {
            message = `Keyframes rule name must be a string.`;
        },
        SourceTypeError: class SourceTypeError extends TypeError {
            message = `Source must be either a Document, a ShadowRoot or a CSSStyleSheet instance.`;
        },
        StyleSheetImportError: class StyleSheetImportError extends Error {
            message = `The stylesheet could not be imported.`;
        }
    };
    async getDocumentStyleSheetsOnLoad({ document = window.document } = {}) {
        await waitForDocumentLoad({
            document: document
        });
        return document.styleSheets;
    }
    /** @remarks
     *  Note: `@import` rules won't be resolved in imported stylesheets.
     *  See https://github.com/WICG/construct-stylesheets/issues/119#issuecomment-588352418. */
    async importStyleSheet(url) {
        const resp = await fetch(url);
        if (!resp.ok) {
            throw new this.Error.StyleSheetImportError();
        }
        const respText = await resp.text();
        // remove file name from URL to get base URL
        const baseURL = url.split('/').slice(0, -1).join('/');
        const styleSheet = new CSSStyleSheet({
            baseURL: baseURL
        });
        await styleSheet.replace(respText);
        return styleSheet;
    }
    getStyleSheetKeyframes({ of: ruleName, in: source }) {
        if (typeof ruleName !== 'string') {
            throw new this.Error.KeyframesRuleNameTypeError();
        }
        if (source instanceof StyleSheetList) {
            return this.#getStyleSheetKeyframesInStyleSheetList({
                of: ruleName,
                styleSheetList: source
            });
        }
        else if (source instanceof CSSStyleSheet) {
            return this.#getStyleSheetKeyframesInStyleSheet({
                of: ruleName,
                styleSheet: source
            });
        }
        else {
            throw new this.Error.SourceTypeError();
        }
    }
    #getStyleSheetKeyframesInStyleSheetList({ of: ruleName, styleSheetList }) {
        for (const styleSheet of styleSheetList) {
            const keyframesRule = this.#getStyleSheetKeyframesInStyleSheet({
                of: ruleName,
                styleSheet: styleSheet
            });
            if (keyframesRule !== undefined) {
                return keyframesRule;
            }
        }
    }
    #getStyleSheetKeyframesInStyleSheet({ of: ruleName, styleSheet }) {
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
    getAllStyleSheetKeyframesRules({ in: source }) {
        if (source instanceof StyleSheetList) {
            return this.#getAllStyleSheetKeyframesRulesInStyleSheetList({
                styleSheetList: source
            });
        }
        else if (source instanceof CSSStyleSheet) {
            return this.#getAllStyleSheetKeyframesRulesInStyleSheet({
                styleSheet: source
            });
        }
        else {
            throw new this.Error.SourceTypeError();
        }
    }
    #getAllStyleSheetKeyframesRulesInStyleSheetList({ styleSheetList }) {
        let keyframesRules = {};
        for (const styleSheet of styleSheetList) {
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
                suffix: CHARS.PERCENT_SIGN
            });
            const percent = Number(percentString);
            const offset = percent / 100;
            let parsedProperties = {};
            for (const propertyName of keyframe.style) {
                /// https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration/getPropertyValue
                const propertyValue = keyframe.style.getPropertyValue(propertyName);
                /// https://drafts.csswg.org/web-animations-1/#ref-for-animation-property-name-to-idl-attribute-name%E2%91%A0
                const attributeName = this.#animationPropertyNameToIDLAttributeName(propertyName);
                parsedProperties[attributeName] = propertyValue;
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
    /** https://drafts.csswg.org/web-animations-1/#animation-property-name-to-idl-attribute-name */
    #animationPropertyNameToIDLAttributeName(property) {
        if (this.#isCustomPropertyName(property))
            return property;
        if (property === 'float')
            return 'cssFloat';
        if (property === 'offset')
            return 'cssOffset';
        // https://drafts.csswg.org/cssom/#ref-for-supported-css-property%E2%91%A2
        const lowercaseFirst = this.#isWebkitCasedAttribute(property);
        return this.#cssPropertyToIDLAttribute(property, lowercaseFirst);
    }
    /** https://drafts.csswg.org/cssom/#css-property-to-idl-attribute */
    #cssPropertyToIDLAttribute(property, lowercaseFirst = false) {
        let output = '';
        let uppercaseNext = false;
        if (lowercaseFirst) {
            property = property.slice(1);
        }
        for (const c of property) {
            if (c === CHARS.HYPHEN_MINUS) {
                uppercaseNext = true;
            }
            else if (uppercaseNext) {
                uppercaseNext = false;
                output += c.toUpperCase();
            }
            else {
                output += c;
            }
        }
        return output;
    }
    /** https://drafts.csswg.org/css-variables-2/#typedef-custom-property-name */
    #isCustomPropertyName(property) {
        return property.startsWith(CHARS.DOUBLE_HYPHEN_MINUS) &&
            property !== CHARS.DOUBLE_HYPHEN_MINUS;
    }
    /** https://drafts.csswg.org/cssom/#ref-for-supported-css-property%E2%91%A2 */
    #isWebkitCasedAttribute(property) {
        return property.startsWith(CHARS.WEBKIT_PREFIX);
    }
}
export default new KeyframesFactory();
/** https://drafts.csswg.org/web-animations-1/#the-keyframeeffect-interface */
export class KeyframeEffectParameters {
    keyframes;
    options;
    /**
     * @param obj.keyframes [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API/Keyframe_Formats)
     * @param obj.options [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/KeyframeEffect/KeyframeEffect#options)
     */
    constructor({ keyframes, options = {} }) {
        this.keyframes = keyframes;
        this.options = this.#parseOptionsArg(options);
    }
    /**
     * @param obj.options Additional keyframe effect options. Can override existing keys.
     * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/KeyframeEffect/KeyframeEffect#options)
     *
     * @see Specifications:
     * - https://drafts.csswg.org/web-animations-1/#the-keyframeeffect-interface
     * - https://drafts.csswg.org/web-animations-1/#the-animation-interface
     */
    toAnimation({ target, options: additionalOptions = {}, timeline = document.timeline }) {
        additionalOptions = this.#parseOptionsArg(additionalOptions);
        // override existing option keys with additional options
        const options = {
            ...this.options, ...additionalOptions
        };
        const keyframeEffect = new KeyframeEffect(target, this.keyframes, options);
        const animation = new Animation(keyframeEffect, timeline);
        return animation;
    }
    /** https://drafts.csswg.org/web-animations-1/#dom-keyframeeffect-keyframeeffect-target-keyframes-options-options
        https://drafts.csswg.org/web-animations-1/#dom-effecttiming-duration */
    #parseOptionsArg(options) {
        if (typeof options === 'number') {
            return { duration: options };
        }
        return options;
    }
}
export class ParsedKeyframes {
    keyframes;
    constructor(keyframes) {
        this.keyframes = keyframes;
    }
    /**
     * @param options
     * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/KeyframeEffect/KeyframeEffect#options)
     */
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
async function waitForDocumentLoad({ document }) {
    if (document.readyState === 'complete') {
        return;
    }
    const { promise, resolve } = Promise.withResolvers();
    function onReadyStateChange() {
        if (document.readyState === 'complete') {
            resolve(null);
        }
    }
    const listener = [
        'readystatechange',
        onReadyStateChange
    ];
    document.addEventListener(...listener);
    await promise;
    document.removeEventListener(...listener);
}
//# sourceMappingURL=KeyframeKit.js.map