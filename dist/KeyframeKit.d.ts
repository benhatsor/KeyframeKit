export type KeyframesFactorySource = StyleSheetList | CSSStyleSheet;
declare namespace KeyframesFactoryError {
    class KeyframesRuleNameTypeError extends TypeError {
        message: string;
    }
    class SourceTypeError extends TypeError {
        message: string;
    }
    class StyleSheetImportError extends Error {
        message: string;
    }
}
declare class KeyframesFactory {
    #private;
    readonly Error: typeof KeyframesFactoryError;
    getDocumentStyleSheetsOnLoad({ document }?: {
        document?: Document;
    }): Promise<StyleSheetList>;
    /** @remarks
     *  Note: `@import` rules won't be resolved in imported stylesheets.
     *  See https://github.com/WICG/construct-stylesheets/issues/119#issuecomment-588352418. */
    importStyleSheet(url: string): Promise<CSSStyleSheet>;
    getStyleSheetKeyframes({ of: ruleName, in: source }: {
        of: string;
        in: KeyframesFactorySource;
    }): ParsedKeyframes | undefined;
    getAllStyleSheetKeyframesRules({ in: source }: {
        in: KeyframesFactorySource;
    }): ParsedKeyframesRules;
    parseKeyframesRule({ rule: keyframes }: {
        rule: CSSKeyframesRule;
    }): ParsedKeyframes;
}
declare const _default: KeyframesFactory;
export default _default;
export type { KeyframesFactory, KeyframesFactoryError };
/** https://drafts.csswg.org/web-animations-1/#processing-a-keyframes-argument */
export type KeyframeArgument = Keyframe[] | PropertyIndexedKeyframes;
/** https://drafts.csswg.org/web-animations-1/#the-keyframeeffect-interface */
export declare class KeyframeEffectParameters {
    #private;
    keyframes: KeyframeArgument;
    options: KeyframeEffectOptions;
    constructor({ keyframes, options }: {
        keyframes: KeyframeArgument;
        options?: number | KeyframeEffectOptions;
    });
    /**
     * @param obj.options
     * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/KeyframeEffect/KeyframeEffect#options)
     *
     * @see
     *   - https://drafts.csswg.org/web-animations-1/#the-keyframeeffect-interface
     *   - https://drafts.csswg.org/web-animations-1/#the-animation-interface
     */
    toAnimation({ target, options: additionalOptions, timeline }: {
        target: Element | null;
        options?: number | KeyframeEffectOptions;
        timeline?: AnimationTimeline;
    }): Animation;
}
export declare class ParsedKeyframes {
    keyframes: Keyframe[];
    constructor(keyframes: Keyframe[]);
    /**
     * @param options
     * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/KeyframeEffect/KeyframeEffect#options)
     */
    toKeyframeEffect(options: number | KeyframeEffectOptions | null): KeyframeEffectParameters;
}
export type ParsedKeyframesRules = {
    [ruleName: string]: ParsedKeyframes;
};
//# sourceMappingURL=KeyframeKit.d.ts.map