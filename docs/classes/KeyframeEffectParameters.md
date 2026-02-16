[KeyframeKit.js](../documentation.md) / KeyframeEffectParameters

# Class: KeyframeEffectParameters

Defined in: [KeyframeKit.ts:232](https://github.com/benhatsor/KeyframeKit.js/blob/d121687e435a302da1e227579b366e6995408910/src/KeyframeKit.ts#L232)

## Contents

* [Constructors](#constructors)
* [Properties](#properties)
* [Methods](#methods)

## Constructors

### Constructor

> **new KeyframeEffectParameters**(`__namedParameters`): `KeyframeEffectParameters`

Defined in: [KeyframeKit.ts:237](https://github.com/benhatsor/KeyframeKit.js/blob/d121687e435a302da1e227579b366e6995408910/src/KeyframeKit.ts#L237)

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

Defined in: [KeyframeKit.ts:234](https://github.com/benhatsor/KeyframeKit.js/blob/d121687e435a302da1e227579b366e6995408910/src/KeyframeKit.ts#L234)

***

### options?

> `optional` **options**: `number` | `KeyframeEffectOptions`

Defined in: [KeyframeKit.ts:235](https://github.com/benhatsor/KeyframeKit.js/blob/d121687e435a302da1e227579b366e6995408910/src/KeyframeKit.ts#L235)

## Methods

### toAnimation()

> **toAnimation**(`__namedParameters`): [`Animation`](https://developer.mozilla.org/docs/Web/API/Animation)

Defined in: [KeyframeKit.ts:247](https://github.com/benhatsor/KeyframeKit.js/blob/d121687e435a302da1e227579b366e6995408910/src/KeyframeKit.ts#L247)

#### Parameters

##### \_\_namedParameters

###### target

[`Element`](https://developer.mozilla.org/docs/Web/API/Element) | `null`

###### timeline?

[`AnimationTimeline`](https://developer.mozilla.org/docs/Web/API/AnimationTimeline) = `document.timeline`

#### Returns

[`Animation`](https://developer.mozilla.org/docs/Web/API/Animation)
