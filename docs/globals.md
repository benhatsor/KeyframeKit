# KeyframeKit.js

## Classes

### KeyframeEffectParameters

Defined in: [KeyframeKit.ts:232](https://github.com/benhatsor/KeyframeKit.js/blob/0db1a18843ed681284a92c6b22be85343adb765e/src/KeyframeKit.ts#L232)

#### Constructors

##### Constructor

> **new KeyframeEffectParameters**(`__namedParameters`): [`KeyframeEffectParameters`](../wiki/#keyframeeffectparameters)

Defined in: [KeyframeKit.ts:237](https://github.com/benhatsor/KeyframeKit.js/blob/0db1a18843ed681284a92c6b22be85343adb765e/src/KeyframeKit.ts#L237)

###### Parameters

###### \_\_namedParameters

###### keyframes

[`KeyframeArgument`](../wiki/#keyframeargument)

###### options?

`number` \| `KeyframeEffectOptions` = `{}`

###### Returns

[`KeyframeEffectParameters`](../wiki/#keyframeeffectparameters)

#### Properties

##### keyframes

> **keyframes**: [`KeyframeArgument`](../wiki/#keyframeargument)

Defined in: [KeyframeKit.ts:234](https://github.com/benhatsor/KeyframeKit.js/blob/0db1a18843ed681284a92c6b22be85343adb765e/src/KeyframeKit.ts#L234)

##### options?

> `optional` **options**: `number` \| `KeyframeEffectOptions`

Defined in: [KeyframeKit.ts:235](https://github.com/benhatsor/KeyframeKit.js/blob/0db1a18843ed681284a92c6b22be85343adb765e/src/KeyframeKit.ts#L235)

#### Methods

##### toAnimation()

> **toAnimation**(`__namedParameters`): `Animation`

Defined in: [KeyframeKit.ts:247](https://github.com/benhatsor/KeyframeKit.js/blob/0db1a18843ed681284a92c6b22be85343adb765e/src/KeyframeKit.ts#L247)

###### Parameters

###### \_\_namedParameters

###### target

`Element` \| `null`

###### timeline?

`AnimationTimeline` = `document.timeline`

###### Returns

`Animation`

***

### ParsedKeyframes

Defined in: [KeyframeKit.ts:270](https://github.com/benhatsor/KeyframeKit.js/blob/0db1a18843ed681284a92c6b22be85343adb765e/src/KeyframeKit.ts#L270)

#### Constructors

##### Constructor

> **new ParsedKeyframes**(`keyframes`): [`ParsedKeyframes`](../wiki/#parsedkeyframes)

Defined in: [KeyframeKit.ts:274](https://github.com/benhatsor/KeyframeKit.js/blob/0db1a18843ed681284a92c6b22be85343adb765e/src/KeyframeKit.ts#L274)

###### Parameters

###### keyframes

`Keyframe`[]

###### Returns

[`ParsedKeyframes`](../wiki/#parsedkeyframes)

#### Properties

##### keyframes

> **keyframes**: `Keyframe`[]

Defined in: [KeyframeKit.ts:272](https://github.com/benhatsor/KeyframeKit.js/blob/0db1a18843ed681284a92c6b22be85343adb765e/src/KeyframeKit.ts#L272)

#### Methods

##### toKeyframeEffect()

> **toKeyframeEffect**(`options`): [`KeyframeEffectParameters`](../wiki/#keyframeeffectparameters)

Defined in: [KeyframeKit.ts:278](https://github.com/benhatsor/KeyframeKit.js/blob/0db1a18843ed681284a92c6b22be85343adb765e/src/KeyframeKit.ts#L278)

###### Parameters

###### options

`number` | `KeyframeEffectOptions` | `null`

###### Returns

[`KeyframeEffectParameters`](../wiki/#keyframeeffectparameters)

## Type Aliases

### KeyframeArgument

> **KeyframeArgument** = `Keyframe`[] \| `PropertyIndexedKeyframes`

Defined in: [KeyframeKit.ts:228](https://github.com/benhatsor/KeyframeKit.js/blob/0db1a18843ed681284a92c6b22be85343adb765e/src/KeyframeKit.ts#L228)

***

### KeyframesFactorySource

> **KeyframesFactorySource** = `DocumentOrShadowRoot` \| `CSSStyleSheet`

Defined in: [KeyframeKit.ts:12](https://github.com/benhatsor/KeyframeKit.js/blob/0db1a18843ed681284a92c6b22be85343adb765e/src/KeyframeKit.ts#L12)

***

### ParsedKeyframesRules

> **ParsedKeyframesRules** = `object`

Defined in: [KeyframeKit.ts:307](https://github.com/benhatsor/KeyframeKit.js/blob/0db1a18843ed681284a92c6b22be85343adb765e/src/KeyframeKit.ts#L307)

#### Index Signature

\[`ruleName`: `string`\]: [`ParsedKeyframes`](../wiki/#parsedkeyframes)

## Variables

### default

> **default**: `KeyframesFactory`

Defined in: [KeyframeKit.ts:14](https://github.com/benhatsor/KeyframeKit.js/blob/0db1a18843ed681284a92c6b22be85343adb765e/src/KeyframeKit.ts#L14)
