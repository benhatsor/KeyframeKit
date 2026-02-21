[KeyframeKit](../index.md) / KeyframeEffectParameters

# Class: KeyframeEffectParameters

Defined in: [src/KeyframeKit.ts:353](https://github.com/benhatsor/KeyframeKit.js/blob/bcee9f4f13a98aa8f2cd08c5503f1b3da83077c1/src/KeyframeKit.ts#L353)

https://drafts.csswg.org/web-animations-1/#the-keyframeeffect-interface

## Constructors

### Constructor

```ts
new KeyframeEffectParameters(obj: {
  keyframes: KeyframeArgument;
  options?: number | KeyframeEffectOptions;
}): KeyframeEffectParameters;
```

Defined in: [src/KeyframeKit.ts:358](https://github.com/benhatsor/KeyframeKit.js/blob/bcee9f4f13a98aa8f2cd08c5503f1b3da83077c1/src/KeyframeKit.ts#L358)

#### Parameters

##### obj

###### keyframes

[`KeyframeArgument`](../type-aliases/KeyframeArgument.md)

###### options?

`number` \| `KeyframeEffectOptions` = `{}`

#### Returns

`KeyframeEffectParameters`

## Properties

### keyframes

```ts
keyframes: KeyframeArgument;
```

Defined in: [src/KeyframeKit.ts:355](https://github.com/benhatsor/KeyframeKit.js/blob/bcee9f4f13a98aa8f2cd08c5503f1b3da83077c1/src/KeyframeKit.ts#L355)

***

### options

```ts
options: KeyframeEffectOptions;
```

Defined in: [src/KeyframeKit.ts:356](https://github.com/benhatsor/KeyframeKit.js/blob/bcee9f4f13a98aa8f2cd08c5503f1b3da83077c1/src/KeyframeKit.ts#L356)

## Methods

### toAnimation()

```ts
toAnimation(obj: {
  options?: number | KeyframeEffectOptions;
  target: Element | null;
  timeline?: AnimationTimeline;
}): Animation;
```

Defined in: [src/KeyframeKit.ts:374](https://github.com/benhatsor/KeyframeKit.js/blob/bcee9f4f13a98aa8f2cd08c5503f1b3da83077c1/src/KeyframeKit.ts#L374)

#### Parameters

##### obj

###### options?

`number` \| `KeyframeEffectOptions` = `{}`

[MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/KeyframeEffect/KeyframeEffect#options)

###### target

[`Element`](https://developer.mozilla.org/docs/Web/API/Element) \| `null`

###### timeline?

[`AnimationTimeline`](https://developer.mozilla.org/docs/Web/API/AnimationTimeline) = `document.timeline`

#### Returns

[`Animation`](https://developer.mozilla.org/docs/Web/API/Animation)

#### See

- https://drafts.csswg.org/web-animations-1/#the-keyframeeffect-interface  
  - https://drafts.csswg.org/web-animations-1/#the-animation-interface
