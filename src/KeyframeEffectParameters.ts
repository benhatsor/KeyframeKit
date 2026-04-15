
/**
 * @see
 *  [Web Animations Module Level 1 - Processing a keyframes argument](https://drafts.csswg.org/web-animations-1/#processing-a-keyframes-argument)
 * @group Defining Animations
 */
export type KeyframeArgument = Keyframe[] | PropertyIndexedKeyframes;

/**
 * Provides a more convenient way to define animations than is offered natively.
 * @see
 *  [Web Animations Module Level 1 - The KeyframeEffect interface](https://drafts.csswg.org/web-animations-1/#the-keyframeeffect-interface)
 * @group Defining Animations
 */
export class KeyframeEffectParameters {

  keyframes: KeyframeArgument;
  options: KeyframeEffectOptions;

  /**
   * @param obj
   *  @param obj.keyframes A keyframes object.
   *   [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API/Keyframe_Formats)
   *  @param obj.options Keyframe effect options.
   *   [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/KeyframeEffect/KeyframeEffect#options)
   */
  constructor({ keyframes, options = {} }: {
    keyframes: KeyframeArgument,
    options?: number | KeyframeEffectOptions
  }) {
    this.keyframes = keyframes;
    this.options = this.#parseOptionsArg(options);
  }

  /**
   * @param obj
   *  @param obj.target An element to attach the animation to.
   *  @param obj.options Additional keyframe effect options. Can override existing keys.
   *   [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/KeyframeEffect/KeyframeEffect#options)
   *  @param obj.timeline The timeline with which to associate the animation.
   *   [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/Animation/Animation#timeline)
   * @see
   *  - [Web Animations Module Level 1 - The KeyframeEffect interface](https://drafts.csswg.org/web-animations-1/#the-keyframeeffect-interface)
   *  - [Web Animations Module Level 1 - The Animation interface](https://drafts.csswg.org/web-animations-1/#the-animation-interface)
   */
  toAnimation({ target, options: additionalOptions = {}, timeline = document.timeline }: {
    target: Element | null,
    options?: number | KeyframeEffectOptions,
    timeline?: AnimationTimeline | null
  }): Animation {

    additionalOptions = this.#parseOptionsArg(additionalOptions);

    // override existing option keys with additional options
    const options: KeyframeEffectOptions = {
      ...this.options, ...additionalOptions
    };


    const keyframeEffect = new KeyframeEffect(
      target,
      this.keyframes,
      options
    );

    const animation = new Animation(
      keyframeEffect,
      timeline
    );

    return animation;

  }

  /** - https://drafts.csswg.org/web-animations-1/#dom-keyframeeffect-keyframeeffect-target-keyframes-options-options
      - https://drafts.csswg.org/web-animations-1/#dom-effecttiming-duration */
  #parseOptionsArg(options: number | KeyframeEffectOptions) {

    if (typeof options === 'number') {
      return { duration: options };
    }

    return options;

  }

}
