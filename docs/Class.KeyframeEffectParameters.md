[KeyframeKit.js](../wiki/Reference) / KeyframeEffectParameters

# Class: KeyframeEffectParameters

Defined in: [KeyframeKit.ts:232](https://github.com/benhatsor/KeyframeKit.js/blob/a60ab03ab1367590cbd9a23b8b88f7341f334fe4/src/KeyframeKit.ts#L232)

## Constructors

### Constructor

> **new KeyframeEffectParameters**(`__namedParameters`: `object`): `KeyframeEffectParameters`

Defined in: [KeyframeKit.ts:237](https://github.com/benhatsor/KeyframeKit.js/blob/a60ab03ab1367590cbd9a23b8b88f7341f334fe4/src/KeyframeKit.ts#L237)

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

> **keyframes**: [`KeyframeArgument`](../wiki/TypeAlias.KeyframeArgument)

Defined in: [KeyframeKit.ts:234](https://github.com/benhatsor/KeyframeKit.js/blob/a60ab03ab1367590cbd9a23b8b88f7341f334fe4/src/KeyframeKit.ts#L234)

***

### options?

> `optional` **options**: `number` | `KeyframeEffectOptions`

Defined in: [KeyframeKit.ts:235](https://github.com/benhatsor/KeyframeKit.js/blob/a60ab03ab1367590cbd9a23b8b88f7341f334fe4/src/KeyframeKit.ts#L235)

## Methods

### toAnimation()

> **toAnimation**(`__namedParameters`: `object`): [`Animation`](https://developer.mozilla.org/docs/Web/API/Animation)

Defined in: [KeyframeKit.ts:247](https://github.com/benhatsor/KeyframeKit.js/blob/a60ab03ab1367590cbd9a23b8b88f7341f334fe4/src/KeyframeKit.ts#L247)

#### Parameters

##### \_\_namedParameters

###### target

[`Element`](https://developer.mozilla.org/docs/Web/API/Element) | `null`

###### timeline?

[`AnimationTimeline`](https://developer.mozilla.org/docs/Web/API/AnimationTimeline) = `document.timeline`

#### Returns

[`Animation`](https://developer.mozilla.org/docs/Web/API/Animation)
