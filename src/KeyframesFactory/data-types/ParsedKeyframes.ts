
import { KeyframeEffectParameters } from '../../KeyframeEffectParameters';


/** @group Data Types */
export class ParsedKeyframes {

  keyframes: Keyframe[];

  constructor(keyframes: Keyframe[]) {
    this.keyframes = keyframes;
  }

  /**
   * @param options Keyframe effect options.
   *  [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/KeyframeEffect/KeyframeEffect#options)
   */
  toKeyframeEffect(
    options: number | KeyframeEffectOptions | null
  ): KeyframeEffectParameters {

    let keyframeEffect: KeyframeEffectParameters;

    // convert (required) nullable to optional
    if (options !== null) {

      keyframeEffect = new KeyframeEffectParameters({
        keyframes: this.keyframes,
        options: options
      });

    } else {

      keyframeEffect = new KeyframeEffectParameters({
        keyframes: this.keyframes
      });

    }

    return keyframeEffect;

  }

}


/** @group Data Types */
export type ParsedKeyframesRules = {
  [ruleName: string]: ParsedKeyframes
};
