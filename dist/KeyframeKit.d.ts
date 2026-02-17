export type KeyframesFactorySource = DocumentOrShadowRoot | CSSStyleSheet;
declare const _default: {
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
    "__#private@#getStyleSheetKeyframesInDocumentOrShadowRoot"({ of: ruleName, documentOrShadowRoot }: {
        of: string;
        documentOrShadowRoot: DocumentOrShadowRoot;
    }): ParsedKeyframes | undefined;
    "__#private@#getStyleSheetKeyframesInStyleSheet"({ of: ruleName, styleSheet }: {
        of: string;
        styleSheet: CSSStyleSheet;
    }): ParsedKeyframes | undefined;
    getAllStyleSheetKeyframesRules({ in: source }?: {
        in?: KeyframesFactorySource;
    }): ParsedKeyframesRules;
    "__#private@#getAllStyleSheetKeyframesRulesInDocumentOrShadowRoot"({ documentOrShadowRoot }: {
        documentOrShadowRoot: DocumentOrShadowRoot;
    }): ParsedKeyframesRules;
    "__#private@#getAllStyleSheetKeyframesRulesInStyleSheet"({ styleSheet }: {
        styleSheet: CSSStyleSheet;
    }): ParsedKeyframesRules;
    parseKeyframesRule({ rule: keyframes }: {
        rule: CSSKeyframesRule;
    }): ParsedKeyframes;
};
export default _default;
export type KeyframeArgument = Keyframe[] | PropertyIndexedKeyframes;
/** https://drafts.csswg.org/web-animations-1/#the-keyframeeffect-interface */
export declare class KeyframeEffectParameters {
    keyframes: KeyframeArgument;
    options?: number | KeyframeEffectOptions;
    constructor({ keyframes, options }: {
        keyframes: KeyframeArgument;
        options?: number | KeyframeEffectOptions;
    });
    /**
     * https://drafts.csswg.org/web-animations-1/#the-keyframeeffect-interface
     * https://drafts.csswg.org/web-animations-1/#the-animation-interface
     */
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