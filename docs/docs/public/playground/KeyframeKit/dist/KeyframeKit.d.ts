export type KeyframesFactorySource = StyleSheetList | CSSStyleSheet;
declare class KeyframesFactory {
    #private;
    readonly Error: {
        readonly KeyframesRuleNameTypeError: {
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
        };
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
        };
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
    getDocumentStyleSheetsOnLoad({ document }?: {
        document?: Document;
    }): Promise<StyleSheetList>;
    /** @remarks
     *  Note: `@import` rules won't be resolved in imported stylesheets.
     *  See https://github.com/WICG/construct-stylesheets/issues/119#issuecomment-588352418. */
    importStyleSheet(url: string): Promise<CSSStyleSheet>;
    /** @param obj.of The name of the `@keyframes` rule to get keyframes from. */
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
export type { KeyframesFactory };
/** https://drafts.csswg.org/web-animations-1/#processing-a-keyframes-argument */
export type KeyframeArgument = Keyframe[] | PropertyIndexedKeyframes;
/** https://drafts.csswg.org/web-animations-1/#the-keyframeeffect-interface */
export declare class KeyframeEffectParameters {
    #private;
    keyframes: KeyframeArgument;
    options: KeyframeEffectOptions;
    /**
     * @param obj.keyframes [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API/Keyframe_Formats)
     * @param obj.options [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/KeyframeEffect/KeyframeEffect#options)
     */
    constructor({ keyframes, options }: {
        keyframes: KeyframeArgument;
        options?: number | KeyframeEffectOptions;
    });
    /**
     * @param obj.target An element to attach the animation to.
     * @param obj.options Additional keyframe effect options. Can override existing keys.
     * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/KeyframeEffect/KeyframeEffect#options)
     *
     * @see Specifications:
     * - https://drafts.csswg.org/web-animations-1/#the-keyframeeffect-interface
     * - https://drafts.csswg.org/web-animations-1/#the-animation-interface
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