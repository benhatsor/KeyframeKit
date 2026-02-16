export type KeyframesFactorySource = DocumentOrShadowRoot | CSSStyleSheet;
export declare class KeyframesFactory {
    #private;
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
export type KeyframeArgument = Keyframe[] | PropertyIndexedKeyframes;
export declare class KeyframeEffectParameters {
    keyframes: KeyframeArgument;
    options?: number | KeyframeEffectOptions;
    constructor({ keyframes, options }: {
        keyframes: KeyframeArgument;
        options?: number | KeyframeEffectOptions;
    });
    toAnimation({ target, timeline }: {
        target: Element | null;
        timeline?: AnimationTimeline;
    }): Animation;
}
export declare class ParsedKeyframes {
    keyframes: Keyframe[];
    constructor(keyframes: Keyframe[]);
    toKeyframeEffect(options: number | KeyframeEffectOptions | null): KeyframeEffectParameters;
}
export type ParsedKeyframesRules = {
    [ruleName: string]: ParsedKeyframes;
};
//# sourceMappingURL=KeyframeKit.d.ts.map