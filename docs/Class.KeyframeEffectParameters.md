[KeyframeKit](../wiki/Home) / KeyframeEffectParameters

Defined in: [KeyframeKit.ts:232](https://github.com/benhatsor/KeyframeKit.js/blob/441cd0956cd2a4fdf0bfc65afe11a8ac320f8657/src/KeyframeKit.ts#L232)

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

Defined in: [KeyframeKit.ts:237](https://github.com/benhatsor/KeyframeKit.js/blob/441cd0956cd2a4fdf0bfc65afe11a8ac320f8657/src/KeyframeKit.ts#L237)

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

Defined in: [KeyframeKit.ts:234](https://github.com/benhatsor/KeyframeKit.js/blob/441cd0956cd2a4fdf0bfc65afe11a8ac320f8657/src/KeyframeKit.ts#L234)

***

### options?

```ts
optional options: number | KeyframeEffectOptions;
```

Defined in: [KeyframeKit.ts:235](https://github.com/benhatsor/KeyframeKit.js/blob/441cd0956cd2a4fdf0bfc65afe11a8ac320f8657/src/KeyframeKit.ts#L235)

## Methods

### toAnimation()

```ts
toAnimation(obj: {
  target: Element | null;
  timeline?: AnimationTimeline;
}): Animation;
```

Defined in: [KeyframeKit.ts:247](https://github.com/benhatsor/KeyframeKit.js/blob/441cd0956cd2a4fdf0bfc65afe11a8ac320f8657/src/KeyframeKit.ts#L247)

#### Parameters

##### obj

###### target

[`Element`](https://developer.mozilla.org/docs/Web/API/Element) | `null`

###### timeline?

[`AnimationTimeline`](https://developer.mozilla.org/docs/Web/API/AnimationTimeline) = `document.timeline`

#### Returns

[`Animation`](https://developer.mozilla.org/docs/Web/API/Animation)
