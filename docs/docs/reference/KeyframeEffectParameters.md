[KeyframeKit](index.md) / KeyframeEffectParameters

# <div class="subheader"> Class</div> KeyframeEffectParameters

Provides a more convenient way to define animations than is offered natively.

## See

[Web Animations Module Level 1 - The KeyframeEffect interface](https://drafts.csswg.org/web-animations-1/#the-keyframeeffect-interface)

## Constructors

### Constructor

```ts
new KeyframeEffectParameters(obj: {
  keyframes: KeyframeArgument;
  options?: number | KeyframeEffectOptions;
}): KeyframeEffectParameters;
```

#### Parameters

##### obj

###### keyframes

[`KeyframeArgument`](KeyframeArgument.md)

A keyframes object.
  [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API/Keyframe_Formats)

###### options?

`number` \| `KeyframeEffectOptions` = `{}`

Keyframe effect options.
  [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/KeyframeEffect/KeyframeEffect#options)

#### Returns

`KeyframeEffectParameters`

## Methods

### toAnimation()

```ts
toAnimation(obj: {
  options?: number | KeyframeEffectOptions;
  target: Element | null;
  timeline?: AnimationTimeline | null;
}): Animation;
```

#### Parameters

##### obj

###### options?

`number` \| `KeyframeEffectOptions` = `{}`

Additional keyframe effect options. Can override existing keys.
  [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/KeyframeEffect/KeyframeEffect#options)

###### target

[`Element`](https://developer.mozilla.org/docs/Web/API/Element) \| `null`

An element to attach the animation to.

###### timeline?

[`AnimationTimeline`](https://developer.mozilla.org/docs/Web/API/AnimationTimeline) \| `null` = `document.timeline`

The timeline with which to associate the animation.
  [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/Animation/Animation#timeline)

#### Returns

[`Animation`](https://developer.mozilla.org/docs/Web/API/Animation)

#### See

- [Web Animations Module Level 1 - The KeyframeEffect interface](https://drafts.csswg.org/web-animations-1/#the-keyframeeffect-interface)
 - [Web Animations Module Level 1 - The Animation interface](https://drafts.csswg.org/web-animations-1/#the-animation-interface)

## Properties

### keyframes

```ts
keyframes: KeyframeArgument;
```

***

### options

```ts
options: KeyframeEffectOptions;
```

## See Also

### Referenced Here
- [KeyframeArgument](KeyframeArgument.md)
### References This
- [KeyframesFactory.ParsedKeyframes.toKeyframeEffect](KeyframesFactory/ParsedKeyframes.md#tokeyframeeffect)
