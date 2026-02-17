[KeyframeKit](../README.md) / KeyframeEffectParameters

# Class: KeyframeEffectParameters

Defined in: [KeyframeKit.ts:235](https://github.com/benhatsor/KeyframeKit.js/blob/b40b13a5a39c5b7425db734a05dd287248581d5e/src/KeyframeKit.ts#L235)

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

Defined in: [KeyframeKit.ts:240](https://github.com/benhatsor/KeyframeKit.js/blob/b40b13a5a39c5b7425db734a05dd287248581d5e/src/KeyframeKit.ts#L240)

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

Defined in: [KeyframeKit.ts:237](https://github.com/benhatsor/KeyframeKit.js/blob/b40b13a5a39c5b7425db734a05dd287248581d5e/src/KeyframeKit.ts#L237)

***

### options?

```ts
optional options: number | KeyframeEffectOptions;
```

Defined in: [KeyframeKit.ts:238](https://github.com/benhatsor/KeyframeKit.js/blob/b40b13a5a39c5b7425db734a05dd287248581d5e/src/KeyframeKit.ts#L238)

## Methods

### toAnimation()

```ts
toAnimation(__namedParameters: {
  target: Element | null;
  timeline?: AnimationTimeline;
}): Animation;
```

Defined in: [KeyframeKit.ts:250](https://github.com/benhatsor/KeyframeKit.js/blob/b40b13a5a39c5b7425db734a05dd287248581d5e/src/KeyframeKit.ts#L250)

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
