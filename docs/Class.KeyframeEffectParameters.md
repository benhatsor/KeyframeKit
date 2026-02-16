[KeyframeKit](../wiki/Reference) / KeyframeEffectParameters

# Class: KeyframeEffectParameters

Defined in: [KeyframeKit.ts:232](https://github.com/benhatsor/KeyframeKit.js/blob/4c19e678b381c7369a742d8e670501fe25269bae/src/KeyframeKit.ts#L232)

## Constructors

### Constructor

```ts
new KeyframeEffectParameters(__namedParameters: {
  keyframes: KeyframeArgument;
  options?: number | KeyframeEffectOptions;
}): KeyframeEffectParameters;
```

Defined in: [KeyframeKit.ts:237](https://github.com/benhatsor/KeyframeKit.js/blob/4c19e678b381c7369a742d8e670501fe25269bae/src/KeyframeKit.ts#L237)

#### Parameters

##### \_\_namedParameters

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

Defined in: [KeyframeKit.ts:234](https://github.com/benhatsor/KeyframeKit.js/blob/4c19e678b381c7369a742d8e670501fe25269bae/src/KeyframeKit.ts#L234)

***

### options?

```ts
optional options: number | KeyframeEffectOptions;
```

Defined in: [KeyframeKit.ts:235](https://github.com/benhatsor/KeyframeKit.js/blob/4c19e678b381c7369a742d8e670501fe25269bae/src/KeyframeKit.ts#L235)

## Methods

### toAnimation()

```ts
toAnimation(__namedParameters: {
  target: Element | null;
  timeline?: AnimationTimeline;
}): Animation;
```

Defined in: [KeyframeKit.ts:247](https://github.com/benhatsor/KeyframeKit.js/blob/4c19e678b381c7369a742d8e670501fe25269bae/src/KeyframeKit.ts#L247)

#### Parameters

##### \_\_namedParameters

###### target

[`Element`](https://developer.mozilla.org/docs/Web/API/Element) | `null`

###### timeline?

[`AnimationTimeline`](https://developer.mozilla.org/docs/Web/API/AnimationTimeline) = `document.timeline`

#### Returns

[`Animation`](https://developer.mozilla.org/docs/Web/API/Animation)
