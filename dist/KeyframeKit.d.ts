export type KeyframesFactorySource = DocumentOrShadowRoot | CSSStyleSheet;
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
    };
    getStyleSheetKeyframes({ of: ruleName, in: source }: {
        of: string;
        in?: KeyframesFactorySource;
    }): ParsedKeyframes | undefined;
    getAllStyleSheetKeyframesRules({ in: source }?: {
        in?: KeyframesFactorySource;
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
    keyframes: KeyframeArgument;
    options?: number | KeyframeEffectOptions;
    constructor({ keyframes, options }: {
        keyframes: KeyframeArgument;
        options?: number | KeyframeEffectOptions;
    });
    /** - https://drafts.csswg.org/web-animations-1/#the-keyframeeffect-interface
     *  - https://drafts.csswg.org/web-animations-1/#the-animation-interface */
    toAnimation({ target, timeline }: {
        target: Element | null;
        timeline?: AnimationTimeline;
    }): Animation;
}
export declare class ParsedKeyframes {
    keyframes: Keyframe[];
    constructor(keyframes: Keyframe[]);
    /**
     * @param options
     * {@link https://developer.mozilla.org/en-US/docs/Web/API/KeyframeEffect/KeyframeEffect#options MDN Reference}
     */
    toKeyframeEffect(options: number | KeyframeEffectOptions | null): KeyframeEffectParameters;
}
export type ParsedKeyframesRules = {
    [ruleName: string]: ParsedKeyframes;
};
//# sourceMappingURL=KeyframeKit.d.ts.map