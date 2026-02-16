[**KeyframeKit.js**](../README.md)

***

[KeyframeKit.js](../globals.md) / KeyframeEffectParameters

# Class: KeyframeEffectParameters

Defined in: [src/KeyframeKit.ts:234](https://github.com/benhatsor/KeyframeKit.js/blob/9bbef71b1c2a8ef2d3cb4df1e0813b40c9f2eb47/src/KeyframeKit.ts#L234)

## Constructors

### Constructor

> **new KeyframeEffectParameters**(`__namedParameters`): `KeyframeEffectParameters`

Defined in: [src/KeyframeKit.ts:239](https://github.com/benhatsor/KeyframeKit.js/blob/9bbef71b1c2a8ef2d3cb4df1e0813b40c9f2eb47/src/KeyframeKit.ts#L239)

#### Parameters

##### \_\_namedParameters

###### keyframes

[`KeyframeArgument`](../type-aliases/KeyframeArgument.md)

###### options?

`number` \| [`KeyframeEffectOptions`](../-internal-/interfaces/KeyframeEffectOptions.md) = `{}`

#### Returns

`KeyframeEffectParameters`

## Properties

### keyframes

> **keyframes**: [`KeyframeArgument`](../type-aliases/KeyframeArgument.md)

Defined in: [src/KeyframeKit.ts:236](https://github.com/benhatsor/KeyframeKit.js/blob/9bbef71b1c2a8ef2d3cb4df1e0813b40c9f2eb47/src/KeyframeKit.ts#L236)

***

### options?

> `optional` **options**: `number` \| [`KeyframeEffectOptions`](../-internal-/interfaces/KeyframeEffectOptions.md)

Defined in: [src/KeyframeKit.ts:237](https://github.com/benhatsor/KeyframeKit.js/blob/9bbef71b1c2a8ef2d3cb4df1e0813b40c9f2eb47/src/KeyframeKit.ts#L237)

## Methods

### toAnimation()

> **toAnimation**(`__namedParameters`): [`Animation`](../-internal-/interfaces/Animation.md)

Defined in: [src/KeyframeKit.ts:249](https://github.com/benhatsor/KeyframeKit.js/blob/9bbef71b1c2a8ef2d3cb4df1e0813b40c9f2eb47/src/KeyframeKit.ts#L249)

#### Parameters

##### \_\_namedParameters

###### target

[`Element`](../-internal-/interfaces/Element.md) \| `null`

###### timeline?

[`AnimationTimeline`](../-internal-/interfaces/AnimationTimeline.md) = `document.timeline`

#### Returns

[`Animation`](../-internal-/interfaces/Animation.md)
