export type KeyframesFactorySource = DocumentOrShadowRoot | CSSStyleSheet;
declare const _default: {
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