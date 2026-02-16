[KeyframeKit.js](../documentation.md) / KeyframeEffectParameters

# Class: KeyframeEffectParameters

Defined in: [KeyframeKit.ts:232](https://github.com/benhatsor/KeyframeKit.js/blob/4289b5e92a9b8fd60763264becf9ff8027dd13bd/src/KeyframeKit.ts#L232)

## Contents

* [Constructors](#constructors)
* [Properties](#properties)
* [Methods](#methods)

## Constructors

### Constructor

> **new KeyframeEffectParameters**(`__namedParameters`: `object`): `KeyframeEffectParameters`

Defined in: [KeyframeKit.ts:237](https://github.com/benhatsor/KeyframeKit.js/blob/4289b5e92a9b8fd60763264becf9ff8027dd13bd/src/KeyframeKit.ts#L237)

#### Parameters

##### \_\_namedParameters

###### keyframes

[`KeyframeArgument`](../type-aliases/KeyframeArgument.md)

###### options?

`number` | `KeyframeEffectOptions` = `{}`

#### Returns

`KeyframeEffectParameters`

## Properties

### keyframes

> **keyframes**: [`KeyframeArgument`](../type-aliases/KeyframeArgument.md)

Defined in: [KeyframeKit.ts:234](https://github.com/benhatsor/KeyframeKit.js/blob/4289b5e92a9b8fd60763264becf9ff8027dd13bd/src/KeyframeKit.ts#L234)

***

### options?

> `optional` **options**: `number` | `KeyframeEffectOptions`

Defined in: [KeyframeKit.ts:235](https://github.com/benhatsor/KeyframeKit.js/blob/4289b5e92a9b8fd60763264becf9ff8027dd13bd/src/KeyframeKit.ts#L235)

## Methods

### toAnimation()

> **toAnimation**(`__namedParameters`: `object`): [`Animation`](https://developer.mozilla.org/docs/Web/API/Animation)

Defined in: [KeyframeKit.ts:247](https://github.com/benhatsor/KeyframeKit.js/blob/4289b5e92a9b8fd60763264becf9ff8027dd13bd/src/KeyframeKit.ts#L247)

#### Parameters

##### \_\_namedParameters

###### target

[`Element`](https://developer.mozilla.org/docs/Web/API/Element) | `null`

###### timeline?

[`AnimationTimeline`](https://developer.mozilla.org/docs/Web/API/AnimationTimeline) = `document.timeline`

#### Returns

[`Animation`](https://developer.mozilla.org/docs/Web/API/Animation)
