[**keyframekit**](../README.md)

***

[keyframekit](../globals.md) / KeyframeEffectParameters

# Class: KeyframeEffectParameters

Defined in: [KeyframeKit.ts:234](https://github.com/benhatsor/KeyframeKit.js/blob/4069fb98a5d95a545073dd048b6ca08d6b761e49/src/KeyframeKit.ts#L234)

## Constructors

### Constructor

> **new KeyframeEffectParameters**(`__namedParameters`): `KeyframeEffectParameters`

Defined in: [KeyframeKit.ts:239](https://github.com/benhatsor/KeyframeKit.js/blob/4069fb98a5d95a545073dd048b6ca08d6b761e49/src/KeyframeKit.ts#L239)

#### Parameters

##### \_\_namedParameters

###### keyframes

[`KeyframeArgument`](../type-aliases/KeyframeArgument.md)

###### options?

`number` \| `KeyframeEffectOptions` = `{}`

#### Returns

`KeyframeEffectParameters`

## Properties

### keyframes

> **keyframes**: [`KeyframeArgument`](../type-aliases/KeyframeArgument.md)

Defined in: [KeyframeKit.ts:236](https://github.com/benhatsor/KeyframeKit.js/blob/4069fb98a5d95a545073dd048b6ca08d6b761e49/src/KeyframeKit.ts#L236)

***

### options?

> `optional` **options**: `number` \| `KeyframeEffectOptions`

Defined in: [KeyframeKit.ts:237](https://github.com/benhatsor/KeyframeKit.js/blob/4069fb98a5d95a545073dd048b6ca08d6b761e49/src/KeyframeKit.ts#L237)

## Methods

### toAnimation()

> **toAnimation**(`__namedParameters`): `Animation`

Defined in: [KeyframeKit.ts:249](https://github.com/benhatsor/KeyframeKit.js/blob/4069fb98a5d95a545073dd048b6ca08d6b761e49/src/KeyframeKit.ts#L249)

#### Parameters

##### \_\_namedParameters

###### target

`Element` \| `null`

###### timeline?

`AnimationTimeline` = `document.timeline`

#### Returns

`Animation`
