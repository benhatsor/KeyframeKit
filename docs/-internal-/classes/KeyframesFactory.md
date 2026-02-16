[**KeyframeKit.js**](../../README.md)

***

[KeyframeKit.js](../../globals.md) / [\<internal\>](../README.md) / KeyframesFactory

# Class: KeyframesFactory

Defined in: [KeyframeKit.ts:14](https://github.com/benhatsor/KeyframeKit.js/blob/bcfeab93836eb3e2686a40ca426a30b4314cd0cf/src/KeyframeKit.ts#L14)

## Constructors

### Constructor

> **new KeyframesFactory**(): `KeyframesFactory`

#### Returns

`KeyframesFactory`

## Properties

### KeyframesRuleNameTypeError

> `readonly` **KeyframesRuleNameTypeError**: *typeof* [`KeyframesFactoryKeyframesRuleNameTypeError`](KeyframesFactoryKeyframesRuleNameTypeError.md)

Defined in: [KeyframeKit.ts:16](https://github.com/benhatsor/KeyframeKit.js/blob/bcfeab93836eb3e2686a40ca426a30b4314cd0cf/src/KeyframeKit.ts#L16)

***

### SourceTypeError

> `readonly` **SourceTypeError**: *typeof* [`KeyframesFactorySourceTypeError`](KeyframesFactorySourceTypeError.md)

Defined in: [KeyframeKit.ts:20](https://github.com/benhatsor/KeyframeKit.js/blob/bcfeab93836eb3e2686a40ca426a30b4314cd0cf/src/KeyframeKit.ts#L20)

## Methods

### getAllStyleSheetKeyframesRules()

> **getAllStyleSheetKeyframesRules**(`__namedParameters?`): [`ParsedKeyframesRules`](../../type-aliases/ParsedKeyframesRules.md)

Defined in: [KeyframeKit.ts:102](https://github.com/benhatsor/KeyframeKit.js/blob/bcfeab93836eb3e2686a40ca426a30b4314cd0cf/src/KeyframeKit.ts#L102)

#### Parameters

##### \_\_namedParameters?

###### in?

[`KeyframesFactorySource`](../../type-aliases/KeyframesFactorySource.md) = `document`

#### Returns

[`ParsedKeyframesRules`](../../type-aliases/ParsedKeyframesRules.md)

***

### getStyleSheetKeyframes()

> **getStyleSheetKeyframes**(`__namedParameters`): [`ParsedKeyframes`](../../classes/ParsedKeyframes.md) \| `undefined`

Defined in: [KeyframeKit.ts:25](https://github.com/benhatsor/KeyframeKit.js/blob/bcfeab93836eb3e2686a40ca426a30b4314cd0cf/src/KeyframeKit.ts#L25)

#### Parameters

##### \_\_namedParameters

###### in?

[`KeyframesFactorySource`](../../type-aliases/KeyframesFactorySource.md) = `document`

###### of

`string`

#### Returns

[`ParsedKeyframes`](../../classes/ParsedKeyframes.md) \| `undefined`

***

### parseKeyframesRule()

> **parseKeyframesRule**(`__namedParameters`): [`ParsedKeyframes`](../../classes/ParsedKeyframes.md)

Defined in: [KeyframeKit.ts:174](https://github.com/benhatsor/KeyframeKit.js/blob/bcfeab93836eb3e2686a40ca426a30b4314cd0cf/src/KeyframeKit.ts#L174)

#### Parameters

##### \_\_namedParameters

###### rule

`CSSKeyframesRule`

#### Returns

[`ParsedKeyframes`](../../classes/ParsedKeyframes.md)
