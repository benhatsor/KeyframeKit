[**KeyframeKit.js**](../README.md)

***

[KeyframeKit.js](../globals.md) / KeyframesFactory

# Class: KeyframesFactory

Defined in: [KeyframeKit.ts:14](https://github.com/benhatsor/KeyframeKit.js/blob/fa923047318cff96d9b2b9d57d8e0832d694d155/src/KeyframeKit.ts#L14)

## Constructors

### Constructor

> **new KeyframesFactory**(): `KeyframesFactory`

#### Returns

`KeyframesFactory`

## Properties

### KeyframesRuleNameTypeError

> `readonly` **KeyframesRuleNameTypeError**: *typeof* `KeyframesFactoryKeyframesRuleNameTypeError`

Defined in: [KeyframeKit.ts:16](https://github.com/benhatsor/KeyframeKit.js/blob/fa923047318cff96d9b2b9d57d8e0832d694d155/src/KeyframeKit.ts#L16)

***

### SourceTypeError

> `readonly` **SourceTypeError**: *typeof* `KeyframesFactorySourceTypeError`

Defined in: [KeyframeKit.ts:20](https://github.com/benhatsor/KeyframeKit.js/blob/fa923047318cff96d9b2b9d57d8e0832d694d155/src/KeyframeKit.ts#L20)

## Methods

### getAllStyleSheetKeyframesRules()

> **getAllStyleSheetKeyframesRules**(`__namedParameters?`): [`ParsedKeyframesRules`](../type-aliases/ParsedKeyframesRules.md)

Defined in: [KeyframeKit.ts:102](https://github.com/benhatsor/KeyframeKit.js/blob/fa923047318cff96d9b2b9d57d8e0832d694d155/src/KeyframeKit.ts#L102)

#### Parameters

##### \_\_namedParameters?

###### in?

[`KeyframesFactorySource`](../type-aliases/KeyframesFactorySource.md) = `document`

#### Returns

[`ParsedKeyframesRules`](../type-aliases/ParsedKeyframesRules.md)

***

### getStyleSheetKeyframes()

> **getStyleSheetKeyframes**(`__namedParameters`): [`ParsedKeyframes`](ParsedKeyframes.md) \| `undefined`

Defined in: [KeyframeKit.ts:25](https://github.com/benhatsor/KeyframeKit.js/blob/fa923047318cff96d9b2b9d57d8e0832d694d155/src/KeyframeKit.ts#L25)

#### Parameters

##### \_\_namedParameters

###### in?

[`KeyframesFactorySource`](../type-aliases/KeyframesFactorySource.md) = `document`

###### of

`string`

#### Returns

[`ParsedKeyframes`](ParsedKeyframes.md) \| `undefined`

***

### parseKeyframesRule()

> **parseKeyframesRule**(`__namedParameters`): [`ParsedKeyframes`](ParsedKeyframes.md)

Defined in: [KeyframeKit.ts:174](https://github.com/benhatsor/KeyframeKit.js/blob/fa923047318cff96d9b2b9d57d8e0832d694d155/src/KeyframeKit.ts#L174)

#### Parameters

##### \_\_namedParameters

###### rule

`CSSKeyframesRule`

#### Returns

[`ParsedKeyframes`](ParsedKeyframes.md)
