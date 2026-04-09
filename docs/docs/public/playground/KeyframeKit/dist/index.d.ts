/**
 * KeyframeKit
 * @license MIT
 */
//#region src/index.d.ts
type CSSStyleSheetSource = CSSStyleSheet | StyleSheetList;
declare class KeyframesFactory {
  #private;
  readonly Error: {
    /** Thrown if keyframes rule name is not a string. */readonly KeyframesRuleNameTypeError: {
      new (message?: string): {
        message: string;
        name: string;
        stack?: string;
        cause?: unknown;
      };
      new (message?: string, options?: ErrorOptions): {
        message: string;
        name: string;
        stack?: string;
        cause?: unknown;
      };
      new (message?: string): {
        message: string;
        name: string;
        stack?: string;
        cause?: unknown;
      };
      new (message?: string, options?: ErrorOptions): {
        message: string;
        name: string;
        stack?: string;
        cause?: unknown;
      };
      isError(error: unknown): error is Error;
    }; /** Thrown if source is not a `CSSStyleSheet` or a `StyleSheetList`. */
    readonly SourceTypeError: {
      new (message?: string): {
        message: string;
        name: string;
        stack?: string;
        cause?: unknown;
      };
      new (message?: string, options?: ErrorOptions): {
        message: string;
        name: string;
        stack?: string;
        cause?: unknown;
      };
      new (message?: string): {
        message: string;
        name: string;
        stack?: string;
        cause?: unknown;
      };
      new (message?: string, options?: ErrorOptions): {
        message: string;
        name: string;
        stack?: string;
        cause?: unknown;
      };
      isError(error: unknown): error is Error;
    }; /** Thrown if the stylesheet could not be imported. */
    readonly StyleSheetImportError: {
      new (message?: string): {
        message: string;
        name: string;
        stack?: string;
        cause?: unknown;
      };
      new (message?: string, options?: ErrorOptions): {
        message: string;
        name: string;
        stack?: string;
        cause?: unknown;
      };
      isError(error: unknown): error is Error;
    };
  };
  /**
   * Gets a document's stylesheets when it loads,
   * or immediately returns them if it's already loaded.
   * @param obj
   * @param obj.document The document to get stylesheets from.
   */
  getDocumentStyleSheetsOnLoad({
    document
  }?: {
    document?: Document;
  }): Promise<StyleSheetList>;
  /**
   * Imports a stylesheet from a URL.
   * @param url The URL of the stylesheet to import.
   * @remarks
   *  Note: `@import` rules won't be resolved in imported stylesheets.
   *  See https://github.com/WICG/construct-stylesheets/issues/119#issuecomment-588352418.
   */
  importStyleSheet(url: string): Promise<CSSStyleSheet>;
  /**
   * Gets a CSS keyframes rule from a stylesheet or stylesheet list,
   * then converts it to Web Animations API keyframes.
   * @param obj
   * @param obj.of The name of the `@keyframes` rule to get keyframes from.
   * @param obj.in The stylesheet or stylesheet list where the rule resides.
   */
  getStyleSheetKeyframes({
    of: ruleName,
    in: source
  }: {
    of: string;
    in: CSSStyleSheetSource;
  }): ParsedKeyframes | undefined;
  /**
   * Gets all the CSS keyframes rules in a stylesheet or stylesheet list,
   * then converts them to Web Animations API keyframes.
   * @param obj
   * @param obj.in The style sheet or style sheet list to get keyframes from.
   */
  getAllStyleSheetKeyframesRules({
    in: source
  }: {
    in: CSSStyleSheetSource;
  }): ParsedKeyframesRules;
  /**
   * Converts a CSS keyframes rule to Web Animations API keyframes.
   * @param obj
   * @param obj.rule The rule to convert.
   */
  parseKeyframesRule({
    rule: keyframes
  }: {
    rule: CSSKeyframesRule;
  }): ParsedKeyframes;
}
declare const _default: KeyframesFactory;
/** https://drafts.csswg.org/web-animations-1/#processing-a-keyframes-argument */
type KeyframeArgument = Keyframe[] | PropertyIndexedKeyframes;
/** https://drafts.csswg.org/web-animations-1/#the-keyframeeffect-interface */
declare class KeyframeEffectParameters {
  #private;
  keyframes: KeyframeArgument;
  options: KeyframeEffectOptions;
  /**
   * @param obj
   * @param obj.keyframes [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API/Keyframe_Formats)
   * @param obj.options [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/KeyframeEffect/KeyframeEffect#options)
   */
  constructor({
    keyframes,
    options
  }: {
    keyframes: KeyframeArgument;
    options?: number | KeyframeEffectOptions;
  });
  /**
   * @param obj
   * @param obj.target An element to attach the animation to.
   * @param obj.options Additional keyframe effect options. Can override existing keys.
   *  [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/KeyframeEffect/KeyframeEffect#options)
   * @param obj.timeline [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/Animation/Animation#timeline)
   *
   * @see Specifications:
   * - https://drafts.csswg.org/web-animations-1/#the-keyframeeffect-interface
   * - https://drafts.csswg.org/web-animations-1/#the-animation-interface
   */
  toAnimation({
    target,
    options: additionalOptions,
    timeline
  }: {
    target: Element | null;
    options?: number | KeyframeEffectOptions;
    timeline?: AnimationTimeline | null;
  }): Animation;
}
declare class ParsedKeyframes {
  keyframes: Keyframe[];
  constructor(keyframes: Keyframe[]);
  /**
   * @param options
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/KeyframeEffect/KeyframeEffect#options)
   */
  toKeyframeEffect(options: number | KeyframeEffectOptions | null): KeyframeEffectParameters;
}
type ParsedKeyframesRules = {
  [ruleName: string]: ParsedKeyframes;
};
//#endregion
export { CSSStyleSheetSource, KeyframeArgument, KeyframeEffectParameters, type KeyframesFactory, ParsedKeyframes, ParsedKeyframesRules, _default as default };
//# sourceMappingURL=index.d.ts.map