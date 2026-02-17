[KeyframeKit](../wiki/Home) / KeyframeEffectParameters

Defined in: [KeyframeKit.ts:235](https://github.com/benhatsor/KeyframeKit.js/blob/1837a6c78f2977c685502de143878235c74a0022/src/KeyframeKit.ts#L235)

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

Defined in: [KeyframeKit.ts:240](https://github.com/benhatsor/KeyframeKit.js/blob/1837a6c78f2977c685502de143878235c74a0022/src/KeyframeKit.ts#L240)

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

Defined in: [KeyframeKit.ts:237](https://github.com/benhatsor/KeyframeKit.js/blob/1837a6c78f2977c685502de143878235c74a0022/src/KeyframeKit.ts#L237)

***

### options?

```ts
optional options: number | KeyframeEffectOptions;
```

Defined in: [KeyframeKit.ts:238](https://github.com/benhatsor/KeyframeKit.js/blob/1837a6c78f2977c685502de143878235c74a0022/src/KeyframeKit.ts#L238)

## Methods

### toAnimation()

```ts
toAnimation(obj: {
  target: Element | null;
  timeline?: AnimationTimeline;
}): Animation;
```

Defined in: [KeyframeKit.ts:250](https://github.com/benhatsor/KeyframeKit.js/blob/1837a6c78f2977c685502de143878235c74a0022/src/KeyframeKit.ts#L250)

#### Parameters

##### obj

###### target

[`Element`](https://developer.mozilla.org/docs/Web/API/Element) | `null`

###### timeline?

[`AnimationTimeline`](https://developer.mozilla.org/docs/Web/API/AnimationTimeline) = `document.timeline`

#### Returns

[`Animation`](https://developer.mozilla.org/docs/Web/API/Animation)
