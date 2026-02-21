[KeyframeKit](../index.md) / KeyframeEffectParameters

# Class: KeyframeEffectParameters

Defined in: [KeyframeKit.ts:351](https://github.com/benhatsor/KeyframeKit.js/blob/f7f65a49c4ae03d4b23ba218a90f767884862ace/src/KeyframeKit.ts#L351)

https://drafts.csswg.org/web-animations-1/#the-keyframeeffect-interface

## Constructors

### Constructor

```ts
new KeyframeEffectParameters(obj: {
  keyframes: KeyframeArgument;
  options?: number | KeyframeEffectOptions;
}): KeyframeEffectParameters;
```

Defined in: [KeyframeKit.ts:356](https://github.com/benhatsor/KeyframeKit.js/blob/f7f65a49c4ae03d4b23ba218a90f767884862ace/src/KeyframeKit.ts#L356)

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

Defined in: [KeyframeKit.ts:353](https://github.com/benhatsor/KeyframeKit.js/blob/f7f65a49c4ae03d4b23ba218a90f767884862ace/src/KeyframeKit.ts#L353)

***

### options

```ts
options: KeyframeEffectOptions;
```

Defined in: [KeyframeKit.ts:354](https://github.com/benhatsor/KeyframeKit.js/blob/f7f65a49c4ae03d4b23ba218a90f767884862ace/src/KeyframeKit.ts#L354)

## Methods

### toAnimation()

```ts
toAnimation(obj: {
  options?: number | KeyframeEffectOptions;
  target: Element | null;
  timeline?: AnimationTimeline;
}): Animation;
```

Defined in: [KeyframeKit.ts:372](https://github.com/benhatsor/KeyframeKit.js/blob/f7f65a49c4ae03d4b23ba218a90f767884862ace/src/KeyframeKit.ts#L372)

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

Specifications:
- https://drafts.csswg.org/web-animations-1/#the-keyframeeffect-interface
- https://drafts.csswg.org/web-animations-1/#the-animation-interface
