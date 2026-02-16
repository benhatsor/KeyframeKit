[KeyframeKit.js](../wiki/globals) / KeyframesFactory

# Class: KeyframesFactory

Defined in: [KeyframeKit.ts:14](https://github.com/benhatsor/KeyframeKit.js/blob/dc28995b097dfdd7a2581dcd7993f335ef6c90e5/src/KeyframeKit.ts#L14)

## Properties

### KeyframesRuleNameTypeError

> `readonly` **KeyframesRuleNameTypeError**: *typeof* [`KeyframesFactoryKeyframesRuleNameTypeError`](../wiki/Class.KeyframesFactoryKeyframesRuleNameTypeError)

Defined in: [KeyframeKit.ts:16](https://github.com/benhatsor/KeyframeKit.js/blob/dc28995b097dfdd7a2581dcd7993f335ef6c90e5/src/KeyframeKit.ts#L16)

***

### SourceTypeError

> `readonly` **SourceTypeError**: *typeof* [`KeyframesFactorySourceTypeError`](../wiki/Class.KeyframesFactorySourceTypeError)

Defined in: [KeyframeKit.ts:20](https://github.com/benhatsor/KeyframeKit.js/blob/dc28995b097dfdd7a2581dcd7993f335ef6c90e5/src/KeyframeKit.ts#L20)

## Methods

### getAllStyleSheetKeyframesRules()

> **getAllStyleSheetKeyframesRules**(`__namedParameters?`): [`ParsedKeyframesRules`](../wiki/TypeAlias.ParsedKeyframesRules)

Defined in: [KeyframeKit.ts:102](https://github.com/benhatsor/KeyframeKit.js/blob/dc28995b097dfdd7a2581dcd7993f335ef6c90e5/src/KeyframeKit.ts#L102)

#### Parameters

##### \_\_namedParameters?

###### in?

[`KeyframesFactorySource`](../wiki/TypeAlias.KeyframesFactorySource) = `document`

#### Returns

[`ParsedKeyframesRules`](../wiki/TypeAlias.ParsedKeyframesRules)

***

### getStyleSheetKeyframes()

> **getStyleSheetKeyframes**(`__namedParameters`): [`ParsedKeyframes`](../wiki/Class.ParsedKeyframes) \| `undefined`

Defined in: [KeyframeKit.ts:25](https://github.com/benhatsor/KeyframeKit.js/blob/dc28995b097dfdd7a2581dcd7993f335ef6c90e5/src/KeyframeKit.ts#L25)

#### Parameters

##### \_\_namedParameters

###### in?

[`KeyframesFactorySource`](../wiki/TypeAlias.KeyframesFactorySource) = `document`

###### of

`string`

#### Returns

[`ParsedKeyframes`](../wiki/Class.ParsedKeyframes) \| `undefined`

***

### parseKeyframesRule()

> **parseKeyframesRule**(`__namedParameters`): [`ParsedKeyframes`](../wiki/Class.ParsedKeyframes)

Defined in: [KeyframeKit.ts:174](https://github.com/benhatsor/KeyframeKit.js/blob/dc28995b097dfdd7a2581dcd7993f335ef6c90e5/src/KeyframeKit.ts#L174)

#### Parameters

##### \_\_namedParameters

###### rule

`CSSKeyframesRule`

#### Returns

[`ParsedKeyframes`](../wiki/Class.ParsedKeyframes)
