declare const _default: {
    getStyleSheetKeyframes({ in: documentOrShadowRoot }?: {
        in?: DocumentOrShadowRoot;
    }): ParsedKeyframesDictionary;
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
export type ParsedKeyframesDictionary = {
    [animationName: string]: ParsedKeyframes;
};
