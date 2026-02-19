[KeyframeKit](../README.md) / KeyframeEffectParameters

# Class: KeyframeEffectParameters

Defined in: [KeyframeKit.ts:277](https://github.com/benhatsor/KeyframeKit.js/blob/4d4b43f56ee762a544471b854a9b8084549478cb/src/KeyframeKit.ts#L277)

https://drafts.csswg.org/web-animations-1/#the-keyframeeffect-interface

## Contents

* [Constructors](#constructors)
  * [Constructor](#constructor)
* [Properties](#properties)
  * [keyframes](#keyframes-1)
  * [options?](#options-1)
* [Methods](#methods)
  * [toAnimation()](#toanimation)

## Constructors

### Constructor

```ts
new KeyframeEffectParameters(__namedParameters: {
  keyframes: KeyframeArgument;
  options?: number | KeyframeEffectOptions;
}): KeyframeEffectParameters;
```

Defined in: [KeyframeKit.ts:282](https://github.com/benhatsor/KeyframeKit.js/blob/4d4b43f56ee762a544471b854a9b8084549478cb/src/KeyframeKit.ts#L282)

#### Parameters

##### \_\_namedParameters

###### keyframes

[`KeyframeArgument`](../type-aliases/KeyframeArgument.md)

###### options?

`number` | `KeyframeEffectOptions` = `{}`

#### Returns

`KeyframeEffectParameters`

## Properties

### keyframes

```ts
keyframes: KeyframeArgument;
```

Defined in: [KeyframeKit.ts:279](https://github.com/benhatsor/KeyframeKit.js/blob/4d4b43f56ee762a544471b854a9b8084549478cb/src/KeyframeKit.ts#L279)

***

### options?

```ts
optional options: number | KeyframeEffectOptions;
```

Defined in: [KeyframeKit.ts:280](https://github.com/benhatsor/KeyframeKit.js/blob/4d4b43f56ee762a544471b854a9b8084549478cb/src/KeyframeKit.ts#L280)

## Methods

### toAnimation()

```ts
toAnimation(__namedParameters: {
  target: Element | null;
  timeline?: AnimationTimeline;
}): Animation;
```

Defined in: [KeyframeKit.ts:292](https://github.com/benhatsor/KeyframeKit.js/blob/4d4b43f56ee762a544471b854a9b8084549478cb/src/KeyframeKit.ts#L292)

* https://drafts.csswg.org/web-animations-1/#the-keyframeeffect-interface
* https://drafts.csswg.org/web-animations-1/#the-animation-interface

#### Parameters

##### \_\_namedParameters

###### target

[`Element`](https://developer.mozilla.org/docs/Web/API/Element) | `null`

###### timeline?

[`AnimationTimeline`](https://developer.mozilla.org/docs/Web/API/AnimationTimeline) = `document.timeline`

#### Returns

[`Animation`](https://developer.mozilla.org/docs/Web/API/Animation)
