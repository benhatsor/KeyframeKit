[KeyframeKit](../index.md) / KeyframeEffectParameters

# Class: KeyframeEffectParameters

https://drafts.csswg.org/web-animations-1/#the-keyframeeffect-interface

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

[`KeyframeArgument`](../type-aliases/KeyframeArgument.md)

[MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API/Keyframe_Formats)

###### options?

`number` \| `KeyframeEffectOptions` = `{}`

[MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/KeyframeEffect/KeyframeEffect#options)

#### Returns

`KeyframeEffectParameters`

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

## Methods

### toAnimation()

```ts
toAnimation(obj: {
  options?: number | KeyframeEffectOptions;
  target: Element | null;
  timeline?: AnimationTimeline;
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

###### timeline?

[`AnimationTimeline`](https://developer.mozilla.org/docs/Web/API/AnimationTimeline) = `document.timeline`

#### Returns

[`Animation`](https://developer.mozilla.org/docs/Web/API/Animation)

#### See

Specifications:
- https://drafts.csswg.org/web-animations-1/#the-keyframeeffect-interface
- https://drafts.csswg.org/web-animations-1/#the-animation-interface
