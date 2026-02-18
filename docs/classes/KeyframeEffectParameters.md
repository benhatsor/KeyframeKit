[KeyframeKit](../README.md) / KeyframeEffectParameters

# Class: KeyframeEffectParameters

Defined in: [KeyframeKit.ts:236](https://github.com/benhatsor/KeyframeKit.js/blob/3d26ce02df4be3ce2ffa73c31d2b67adeb847037/src/KeyframeKit.ts#L236)

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

Defined in: [KeyframeKit.ts:241](https://github.com/benhatsor/KeyframeKit.js/blob/3d26ce02df4be3ce2ffa73c31d2b67adeb847037/src/KeyframeKit.ts#L241)

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

Defined in: [KeyframeKit.ts:238](https://github.com/benhatsor/KeyframeKit.js/blob/3d26ce02df4be3ce2ffa73c31d2b67adeb847037/src/KeyframeKit.ts#L238)

***

### options?

```ts
optional options: number | KeyframeEffectOptions;
```

Defined in: [KeyframeKit.ts:239](https://github.com/benhatsor/KeyframeKit.js/blob/3d26ce02df4be3ce2ffa73c31d2b67adeb847037/src/KeyframeKit.ts#L239)

## Methods

### toAnimation()

```ts
toAnimation(__namedParameters: {
  target: Element | null;
  timeline?: AnimationTimeline;
}): Animation;
```

Defined in: [KeyframeKit.ts:251](https://github.com/benhatsor/KeyframeKit.js/blob/3d26ce02df4be3ce2ffa73c31d2b67adeb847037/src/KeyframeKit.ts#L251)

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
