/**
 * KeyframeKit
 * @license MIT
 */
/**
 * Thrown if keyframes rule name is not a string.
 * @group Errors
 */
declare class KeyframesRuleNameTypeError extends TypeError {
    message: string;
}
/**
 * Thrown if source is not a `CSSStyleSheet` or a `StyleSheetList`.
 * @group Errors
 */
declare class SourceTypeError extends TypeError {
    message: string;
}
/**
 * Thrown if the stylesheet could not be imported.
 * @group Errors
 */
declare class StyleSheetImportError extends Error {
    message: string;
}

/**
 * Gets a document's stylesheets when it loads,
 * or immediately returns them if it's already loaded.
 * @param obj
 *  @param obj.document The document to get stylesheets from.
 * @group Sourcing Stylesheets
 */
declare function getDocumentStyleSheetsOnLoad({ document }?: {
    document?: Document;
}): Promise<StyleSheetList>;

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
declare function importStyleSheet(url: string): Promise<CSSStyleSheet>;

/**
 * @see
 *  [Web Animations Module Level 1 - Processing a keyframes argument](https://drafts.csswg.org/web-animations-1/#processing-a-keyframes-argument)
 * @group Defining Animations
 */
type KeyframeArgument = Keyframe[] | PropertyIndexedKeyframes;
/**
 * Provides a more convenient way to define animations than is offered natively.
 * @see
 *  [Web Animations Module Level 1 - The KeyframeEffect interface](https://drafts.csswg.org/web-animations-1/#the-keyframeeffect-interface)
 * @group Defining Animations
 */
declare class KeyframeEffectParameters {
    #private;
    keyframes: KeyframeArgument;
    options: KeyframeEffectOptions;
    /**
     * @param obj
     *  @param obj.keyframes A keyframes object.
     *   [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API/Keyframe_Formats)
     *  @param obj.options Keyframe effect options.
     *   [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/KeyframeEffect/KeyframeEffect#options)
     */
    constructor({ keyframes, options }: {
        keyframes: KeyframeArgument;
        options?: number | KeyframeEffectOptions;
    });
    /**
     * @param obj
     *  @param obj.target An element to attach the animation to.
     *  @param obj.options Additional keyframe effect options. Can override existing keys.
     *   [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/KeyframeEffect/KeyframeEffect#options)
     *  @param obj.timeline The timeline with which to associate the animation.
     *   [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/Animation/Animation#timeline)
     *
     * @see
     *  - [Web Animations Module Level 1 - The KeyframeEffect interface](https://drafts.csswg.org/web-animations-1/#the-keyframeeffect-interface)
     *  - [Web Animations Module Level 1 - The Animation interface](https://drafts.csswg.org/web-animations-1/#the-animation-interface)
     */
    toAnimation({ target, options: additionalOptions, timeline }: {
        target: Element | null;
        options?: number | KeyframeEffectOptions;
        timeline?: AnimationTimeline | null;
    }): Animation;
}

/** @group Data Types */
declare class ParsedKeyframes {
    keyframes: Keyframe[];
    constructor(keyframes: Keyframe[]);
    /**
     * @param options Keyframe effect options.
     *  [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/KeyframeEffect/KeyframeEffect#options)
     */
    toKeyframeEffect(options: number | KeyframeEffectOptions | null): KeyframeEffectParameters;
}
/** @group Data Types */
type ParsedKeyframesRules = {
    [ruleName: string]: ParsedKeyframes;
};

/** @group Data Types */
type CSSStyleSheetSource = CSSStyleSheet | StyleSheetList;

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
declare function getStyleSheetKeyframes({ of: ruleName, in: source }: {
    of: string;
    in: CSSStyleSheetSource;
}): ParsedKeyframes | undefined;

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
declare function getAllStyleSheetKeyframesRules({ in: source }: {
    in: CSSStyleSheetSource;
}): ParsedKeyframesRules;

/**
 * Converts a CSS keyframes rule to Web Animations API keyframes.
 * @param obj
 *  @param obj.rule The rule to convert.
 * @group Parsing Stylesheet Keyframes
 */
declare function parseKeyframesRule({ rule: keyframes }: {
    rule: CSSKeyframesRule;
}): ParsedKeyframes;

/**
 * @module KeyframesFactory
 * @group Default Export
 */

type index_CSSStyleSheetSource = CSSStyleSheetSource;
type index_KeyframesRuleNameTypeError = KeyframesRuleNameTypeError;
declare const index_KeyframesRuleNameTypeError: typeof KeyframesRuleNameTypeError;
type index_ParsedKeyframes = ParsedKeyframes;
declare const index_ParsedKeyframes: typeof ParsedKeyframes;
type index_ParsedKeyframesRules = ParsedKeyframesRules;
type index_SourceTypeError = SourceTypeError;
declare const index_SourceTypeError: typeof SourceTypeError;
type index_StyleSheetImportError = StyleSheetImportError;
declare const index_StyleSheetImportError: typeof StyleSheetImportError;
declare const index_getAllStyleSheetKeyframesRules: typeof getAllStyleSheetKeyframesRules;
declare const index_getDocumentStyleSheetsOnLoad: typeof getDocumentStyleSheetsOnLoad;
declare const index_getStyleSheetKeyframes: typeof getStyleSheetKeyframes;
declare const index_importStyleSheet: typeof importStyleSheet;
declare const index_parseKeyframesRule: typeof parseKeyframesRule;
declare namespace index {
  export { index_KeyframesRuleNameTypeError as KeyframesRuleNameTypeError, index_ParsedKeyframes as ParsedKeyframes, index_SourceTypeError as SourceTypeError, index_StyleSheetImportError as StyleSheetImportError, index_getAllStyleSheetKeyframesRules as getAllStyleSheetKeyframesRules, index_getDocumentStyleSheetsOnLoad as getDocumentStyleSheetsOnLoad, index_getStyleSheetKeyframes as getStyleSheetKeyframes, index_importStyleSheet as importStyleSheet, index_parseKeyframesRule as parseKeyframesRule };
  export type { index_CSSStyleSheetSource as CSSStyleSheetSource, index_ParsedKeyframesRules as ParsedKeyframesRules };
}

export { KeyframeEffectParameters, index as default };
export type { KeyframeArgument };
