[KeyframeKit](../README.md) / KeyframeEffectParameters

# Class: KeyframeEffectParameters

Defined in: [KeyframeKit.ts:231](https://github.com/benhatsor/KeyframeKit.js/blob/7824231db913ca6c3fef365b318e18d1603ab7b9/src/KeyframeKit.ts#L231)

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

Defined in: [KeyframeKit.ts:236](https://github.com/benhatsor/KeyframeKit.js/blob/7824231db913ca6c3fef365b318e18d1603ab7b9/src/KeyframeKit.ts#L236)

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

Defined in: [KeyframeKit.ts:233](https://github.com/benhatsor/KeyframeKit.js/blob/7824231db913ca6c3fef365b318e18d1603ab7b9/src/KeyframeKit.ts#L233)

***

### options?

```ts
optional options: number | KeyframeEffectOptions;
```

Defined in: [KeyframeKit.ts:234](https://github.com/benhatsor/KeyframeKit.js/blob/7824231db913ca6c3fef365b318e18d1603ab7b9/src/KeyframeKit.ts#L234)

## Methods

### toAnimation()

```ts
toAnimation(__namedParameters: {
  target: Element | null;
  timeline?: AnimationTimeline;
}): Animation;
```

Defined in: [KeyframeKit.ts:246](https://github.com/benhatsor/KeyframeKit.js/blob/7824231db913ca6c3fef365b318e18d1603ab7b9/src/KeyframeKit.ts#L246)

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
