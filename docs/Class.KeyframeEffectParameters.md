[KeyframeKit](../wiki/Home) / KeyframeEffectParameters

Defined in: [KeyframeKit.ts:234](https://github.com/benhatsor/KeyframeKit.js/blob/26f96086b04729d15d7184caa46fc39ea50cc180/src/KeyframeKit.ts#L234)

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
new KeyframeEffectParameters(obj: {
  keyframes: KeyframeArgument;
  options?: number | KeyframeEffectOptions;
}): KeyframeEffectParameters;
```

Defined in: [KeyframeKit.ts:239](https://github.com/benhatsor/KeyframeKit.js/blob/26f96086b04729d15d7184caa46fc39ea50cc180/src/KeyframeKit.ts#L239)

#### Parameters

##### obj

###### keyframes

[`KeyframeArgument`](../wiki/TypeAlias.KeyframeArgument)

###### options?

`number` | `KeyframeEffectOptions` = `{}`

#### Returns

`KeyframeEffectParameters`

## Properties

### keyframes

```ts
keyframes: KeyframeArgument;
```

Defined in: [KeyframeKit.ts:236](https://github.com/benhatsor/KeyframeKit.js/blob/26f96086b04729d15d7184caa46fc39ea50cc180/src/KeyframeKit.ts#L236)

***

### options?

```ts
optional options: number | KeyframeEffectOptions;
```

Defined in: [KeyframeKit.ts:237](https://github.com/benhatsor/KeyframeKit.js/blob/26f96086b04729d15d7184caa46fc39ea50cc180/src/KeyframeKit.ts#L237)

## Methods

### toAnimation()

```ts
toAnimation(obj: {
  target: Element | null;
  timeline?: AnimationTimeline;
}): Animation;
```

Defined in: [KeyframeKit.ts:249](https://github.com/benhatsor/KeyframeKit.js/blob/26f96086b04729d15d7184caa46fc39ea50cc180/src/KeyframeKit.ts#L249)

#### Parameters

##### obj

###### target

[`Element`](https://developer.mozilla.org/docs/Web/API/Element) | `null`

###### timeline?

[`AnimationTimeline`](https://developer.mozilla.org/docs/Web/API/AnimationTimeline) = `document.timeline`

#### Returns

[`Animation`](https://developer.mozilla.org/docs/Web/API/Animation)
