[KeyframeKit.js](../wiki/modules) / KeyframesFactory

# Class: KeyframesFactory

Defined in: [KeyframeKit.ts:14](https://github.com/benhatsor/KeyframeKit.js/blob/03f97afd728c6389250122b9ea49ad180b421e66/src/KeyframeKit.ts#L14)

## Properties

### KeyframesRuleNameTypeError

> `readonly` **KeyframesRuleNameTypeError**: *typeof* [`KeyframesFactoryKeyframesRuleNameTypeError`](../wiki/KeyframesFactoryKeyframesRuleNameTypeError)

Defined in: [KeyframeKit.ts:16](https://github.com/benhatsor/KeyframeKit.js/blob/03f97afd728c6389250122b9ea49ad180b421e66/src/KeyframeKit.ts#L16)

***

### SourceTypeError

> `readonly` **SourceTypeError**: *typeof* [`KeyframesFactorySourceTypeError`](../wiki/KeyframesFactorySourceTypeError)

Defined in: [KeyframeKit.ts:20](https://github.com/benhatsor/KeyframeKit.js/blob/03f97afd728c6389250122b9ea49ad180b421e66/src/KeyframeKit.ts#L20)

## Methods

### getAllStyleSheetKeyframesRules()

> **getAllStyleSheetKeyframesRules**(`__namedParameters?`): [`ParsedKeyframesRules`](../wiki/ParsedKeyframesRules)

Defined in: [KeyframeKit.ts:102](https://github.com/benhatsor/KeyframeKit.js/blob/03f97afd728c6389250122b9ea49ad180b421e66/src/KeyframeKit.ts#L102)

#### Parameters

##### \_\_namedParameters?

###### in?

[`KeyframesFactorySource`](../wiki/KeyframesFactorySource) = `document`

#### Returns

[`ParsedKeyframesRules`](../wiki/ParsedKeyframesRules)

***

### getStyleSheetKeyframes()

> **getStyleSheetKeyframes**(`__namedParameters`): [`ParsedKeyframes`](../wiki/ParsedKeyframes) \| `undefined`

Defined in: [KeyframeKit.ts:25](https://github.com/benhatsor/KeyframeKit.js/blob/03f97afd728c6389250122b9ea49ad180b421e66/src/KeyframeKit.ts#L25)

#### Parameters

##### \_\_namedParameters

###### in?

[`KeyframesFactorySource`](../wiki/KeyframesFactorySource) = `document`

###### of

`string`

#### Returns

[`ParsedKeyframes`](../wiki/ParsedKeyframes) \| `undefined`

***

### parseKeyframesRule()

> **parseKeyframesRule**(`__namedParameters`): [`ParsedKeyframes`](../wiki/ParsedKeyframes)

Defined in: [KeyframeKit.ts:174](https://github.com/benhatsor/KeyframeKit.js/blob/03f97afd728c6389250122b9ea49ad180b421e66/src/KeyframeKit.ts#L174)

#### Parameters

##### \_\_namedParameters

###### rule

`CSSKeyframesRule`

#### Returns

[`ParsedKeyframes`](../wiki/ParsedKeyframes)
