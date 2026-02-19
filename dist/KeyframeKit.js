//
// KeyframeKit.js
// Ben Hatsor
// 
// See README.md for usage.
//
const PERCENTAGE_CHAR = '%';
class KeyframesFactory {
    Error = {
        KeyframesRuleNameTypeError: class extends TypeError {
            message = `Keyframes rule name must be a string.`;
        },
        SourceTypeError: class extends TypeError {
            message = `Source must be either a Document, a ShadowRoot or a CSSStyleSheet instance.`;
        },
        StyleSheetImportError: class extends Error {
            message = `The stylesheet could not be imported.`;
        }
    };
    async getDocumentStyleSheetsOnLoad({ document = window.document } = {}) {
        await waitForDocumentLoad({
            document: document
        });
        return document.styleSheets;
    }
    /** - Note: `@import` rules won't be resolved in imported stylesheets.
     *    See https://github.com/WICG/construct-stylesheets/issues/119#issuecomment-588352418. */
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
/** https://drafts.csswg.org/web-animations-1/#the-keyframeeffect-interface */
export class KeyframeEffectParameters {
    keyframes;
    options;
    constructor({ keyframes, options = {} }) {
        this.keyframes = keyframes;
        this.options = options;
    }
    /** - https://drafts.csswg.org/web-animations-1/#the-keyframeeffect-interface
     *  - https://drafts.csswg.org/web-animations-1/#the-animation-interface */
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
    /**
     * @param options
     * {@link https://developer.mozilla.org/en-US/docs/Web/API/KeyframeEffect/KeyframeEffect#options MDN Reference}
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
    if (document.readyState === 'complete')
        return;
    const { promise, resolve } = Promise.withResolvers();
    function onReadyStateChange() {
        if (document.readyState === 'complete') {
            resolve(null);
        }
    }
    document.addEventListener('readystatechange', onReadyStateChange);
    await promise;
    document.removeEventListener('readystatechange', onReadyStateChange);
}
//# sourceMappingURL=KeyframeKit.js.map