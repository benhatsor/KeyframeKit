[KeyframeKit.js](../wiki/globals) / KeyframeEffectParameters

# Class: KeyframeEffectParameters

Defined in: [KeyframeKit.ts:234](https://github.com/benhatsor/KeyframeKit.js/blob/cebab2269fa729b92627cb850aaf52023c63d249/src/KeyframeKit.ts#L234)

## Constructors

### Constructor

> **new KeyframeEffectParameters**(`__namedParameters`): `KeyframeEffectParameters`

Defined in: [KeyframeKit.ts:239](https://github.com/benhatsor/KeyframeKit.js/blob/cebab2269fa729b92627cb850aaf52023c63d249/src/KeyframeKit.ts#L239)

#### Parameters

##### \_\_namedParameters

###### keyframes

[`KeyframeArgument`](../wiki/TypeAlias.KeyframeArgument)

###### options?

`number` \| `KeyframeEffectOptions` = `{}`

#### Returns

`KeyframeEffectParameters`

## Properties

### keyframes

> **keyframes**: [`KeyframeArgument`](../wiki/TypeAlias.KeyframeArgument)

Defined in: [KeyframeKit.ts:236](https://github.com/benhatsor/KeyframeKit.js/blob/cebab2269fa729b92627cb850aaf52023c63d249/src/KeyframeKit.ts#L236)

***

### options?

> `optional` **options**: `number` \| `KeyframeEffectOptions`

Defined in: [KeyframeKit.ts:237](https://github.com/benhatsor/KeyframeKit.js/blob/cebab2269fa729b92627cb850aaf52023c63d249/src/KeyframeKit.ts#L237)

## Methods

### toAnimation()

> **toAnimation**(`__namedParameters`): `Animation`

Defined in: [KeyframeKit.ts:249](https://github.com/benhatsor/KeyframeKit.js/blob/cebab2269fa729b92627cb850aaf52023c63d249/src/KeyframeKit.ts#L249)

#### Parameters

##### \_\_namedParameters

###### target

`Element` \| `null`

###### timeline?

`AnimationTimeline` = `document.timeline`

#### Returns

`Animation`
