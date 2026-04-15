/**
 * KeyframeKit
 * @license MIT
 */
/**
 * Thrown if keyframes rule name is not a string.
 * @group Errors
 */
class KeyframesRuleNameTypeError extends TypeError {
    message = `Keyframes rule name must be a string.`;
}
/**
 * Thrown if source is not a `CSSStyleSheet` or a `StyleSheetList`.
 * @group Errors
 */
class SourceTypeError extends TypeError {
    message = `Source must be either a CSSStyleSheet or a StyleSheetList.`;
}
/**
 * Thrown if the stylesheet could not be imported.
 * @group Errors
 */
class StyleSheetImportError extends Error {
    message = `The stylesheet could not be imported.`;
}

/**
 * Gets a document's stylesheets when it loads,
 * or immediately returns them if it's already loaded.
 * @param obj
 *  @param obj.document The document to get stylesheets from.
 * @group Sourcing Stylesheets
 */
async function getDocumentStyleSheetsOnLoad({ document = window.document } = {}) {
    await waitForDocumentLoad({
        document: document
    });
    return document.styleSheets;
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

/**
 * Imports a stylesheet from a URL.
 * @param url The URL of the stylesheet to import.
 * @throws
 *  - {@linkcode StyleSheetImportError} &nbsp;
 *    - Thrown if the stylesheet could not be imported.
 * @remarks
 *  Note: `@import` rules won't be resolved in imported stylesheets.
 *  [See here.](https://github.com/WICG/construct-stylesheets/issues/119#issuecomment-588352418.)
 * @group Sourcing Stylesheets
 */
async function importStyleSheet(url) {
    const resp = await fetch(url);
    if (!resp.ok) {
        throw new StyleSheetImportError();
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

/**
 * Provides a more convenient way to define animations than is offered natively.
 * @see
 *  [Web Animations Module Level 1 - The KeyframeEffect interface](https://drafts.csswg.org/web-animations-1/#the-keyframeeffect-interface)
 * @group Defining Animations
 */
class KeyframeEffectParameters {
    keyframes;
    options;
    /**
     * @param obj
     *  @param obj.keyframes A keyframes object.
     *   [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API/Keyframe_Formats)
     *  @param obj.options Keyframe effect options.
     *   [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/KeyframeEffect/KeyframeEffect#options)
     */
    constructor({ keyframes, options = {} }) {
        this.keyframes = keyframes;
        this.options = this.#parseOptionsArg(options);
    }
    /**
     * @param obj
     *  @param obj.target An element to attach the animation to.
     *  @param obj.options Additional keyframe effect options. Can override existing keys.
     *   [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/KeyframeEffect/KeyframeEffect#options)
     *  @param obj.timeline The timeline with which to associate the animation.
     *   [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/Animation/Animation#timeline)
     * @see
     *  - [Web Animations Module Level 1 - The KeyframeEffect interface](https://drafts.csswg.org/web-animations-1/#the-keyframeeffect-interface)
     *  - [Web Animations Module Level 1 - The Animation interface](https://drafts.csswg.org/web-animations-1/#the-animation-interface)
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
    /** - https://drafts.csswg.org/web-animations-1/#dom-keyframeeffect-keyframeeffect-target-keyframes-options-options
        - https://drafts.csswg.org/web-animations-1/#dom-effecttiming-duration */
    #parseOptionsArg(options) {
        if (typeof options === 'number') {
            return { duration: options };
        }
        return options;
    }
}

/** @group Data Types */
class ParsedKeyframes {
    keyframes;
    constructor(keyframes) {
        this.keyframes = keyframes;
    }
    /**
     * @param options Keyframe effect options.
     *  [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/KeyframeEffect/KeyframeEffect#options)
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

const CHARS = {
    PERCENT_SIGN: '%',
    HYPHEN_MINUS: '-',
    DOUBLE_HYPHEN_MINUS: '--',
    WEBKIT_PREFIX: '-webkit-'
};
/**
 * Converts a CSS keyframes rule to Web Animations API keyframes.
 * @param keyframesRule The rule to convert.
 * @group Parsing Stylesheet Keyframes
 */
function parseKeyframesRule(keyframesRule) {
    const keyframes = keyframesRule;
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
            const attributeName = animationPropertyNameToIDLAttributeName(propertyName);
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
function animationPropertyNameToIDLAttributeName(property) {
    if (isCustomPropertyName(property))
        return property;
    if (property === 'float')
        return 'cssFloat';
    if (property === 'offset')
        return 'cssOffset';
    // https://drafts.csswg.org/cssom/#ref-for-supported-css-property%E2%91%A2
    const lowercaseFirst = isWebkitCasedAttribute(property);
    return cssPropertyToIDLAttribute(property, lowercaseFirst);
}
/** https://drafts.csswg.org/cssom/#css-property-to-idl-attribute */
function cssPropertyToIDLAttribute(property, lowercaseFirst = false) {
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
function isCustomPropertyName(property) {
    return property.startsWith(CHARS.DOUBLE_HYPHEN_MINUS) &&
        property !== CHARS.DOUBLE_HYPHEN_MINUS;
}
/** https://drafts.csswg.org/cssom/#ref-for-supported-css-property%E2%91%A2 */
function isWebkitCasedAttribute(property) {
    return property.startsWith(CHARS.WEBKIT_PREFIX);
}
function removeSuffix({ of: string, suffix }) {
    return string.slice(0, -suffix.length);
}

/**
 * Gets a CSS keyframes rule from a stylesheet or stylesheet list,
 * then converts it to Web Animations API keyframes.
 * @param obj
 *  @param obj.of The name of the `@keyframes` rule to get keyframes from.
 *  @param obj.in The stylesheet or stylesheet list where the rule resides.
 * @throws
 *  - {@linkcode KeyframesRuleNameTypeError} &nbsp;
 *    - Thrown if keyframes rule name is not a string.
 *  - {@linkcode SourceTypeError} &nbsp;
 *    - Thrown if source is not a `CSSStyleSheet` or a `StyleSheetList`.
 * @group Parsing Stylesheet Keyframes
 */
function getStyleSheetKeyframes({ of: ruleName, in: source }) {
    if (typeof ruleName !== 'string') {
        throw new KeyframesRuleNameTypeError();
    }
    if (source instanceof StyleSheetList) {
        return getStyleSheetKeyframesInStyleSheetList({
            of: ruleName,
            styleSheetList: source
        });
    }
    else if (source instanceof CSSStyleSheet) {
        return getStyleSheetKeyframesInStyleSheet({
            of: ruleName,
            styleSheet: source
        });
    }
    else {
        throw new SourceTypeError();
    }
}
function getStyleSheetKeyframesInStyleSheetList({ of: ruleName, styleSheetList }) {
    for (const styleSheet of styleSheetList) {
        const keyframesRule = getStyleSheetKeyframesInStyleSheet({
            of: ruleName,
            styleSheet: styleSheet
        });
        if (keyframesRule !== undefined) {
            return keyframesRule;
        }
    }
}
function getStyleSheetKeyframesInStyleSheet({ of: ruleName, styleSheet }) {
    for (const rule of styleSheet.cssRules) {
        if (!(rule instanceof CSSKeyframesRule)) {
            continue;
        }
        if (rule.name === ruleName) {
            const keyframes = parseKeyframesRule(rule);
            return keyframes;
        }
    }
}

/**
 * Gets all the CSS keyframes rules in a stylesheet or stylesheet list,
 * then converts them to Web Animations API keyframes.
 * @param obj
 *  @param obj.in The style sheet or style sheet list to get keyframes from.
 * @throws
 *  - {@linkcode SourceTypeError} &nbsp;
 *    - Thrown if source is not a `CSSStyleSheet` or a `StyleSheetList`.
 * @group Parsing Stylesheet Keyframes
 */
function getAllStyleSheetKeyframesRules({ in: source }) {
    if (source instanceof StyleSheetList) {
        return getAllStyleSheetKeyframesRulesInStyleSheetList({
            styleSheetList: source
        });
    }
    else if (source instanceof CSSStyleSheet) {
        return getAllStyleSheetKeyframesRulesInStyleSheet({
            styleSheet: source
        });
    }
    else {
        throw new SourceTypeError();
    }
}
function getAllStyleSheetKeyframesRulesInStyleSheetList({ styleSheetList }) {
    let keyframesRules = {};
    for (const styleSheet of styleSheetList) {
        const styleSheetKeyframesRules = getAllStyleSheetKeyframesRulesInStyleSheet({
            styleSheet: styleSheet
        });
        keyframesRules = {
            ...keyframesRules,
            ...styleSheetKeyframesRules
        };
    }
    return keyframesRules;
}
function getAllStyleSheetKeyframesRulesInStyleSheet({ styleSheet }) {
    let keyframesRules = {};
    for (const rule of styleSheet.cssRules) {
        if (!(rule instanceof CSSKeyframesRule)) {
            continue;
        }
        const keyframes = parseKeyframesRule(rule);
        keyframesRules[rule.name] = keyframes;
    }
    return keyframesRules;
}

/**
 * @module KeyframesFactory
 * @group Default Export
 */

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    KeyframesRuleNameTypeError,
    ParsedKeyframes,
    SourceTypeError,
    StyleSheetImportError,
    getAllStyleSheetKeyframesRules,
    getDocumentStyleSheetsOnLoad,
    getStyleSheetKeyframes,
    importStyleSheet,
    parseKeyframesRule
}, Symbol.toStringTag, { value: 'Module' }));

export { KeyframeEffectParameters, index as default };
//# sourceMappingURL=index.js.map
