[KeyframeKit](../README.md) / KeyframesFactory

# Interface: KeyframesFactory

Defined in: [KeyframeKit.ts:14](https://github.com/benhatsor/KeyframeKit.js/blob/b40b13a5a39c5b7425db734a05dd287248581d5e/src/KeyframeKit.ts#L14)

## Contents

* [Properties](#properties)
  * [KeyframesRuleNameTypeError](#keyframesrulenametypeerror)
  * [SourceTypeError](#sourcetypeerror)
* [Methods](#methods)
  * [getAllStyleSheetKeyframesRules()](#getallstylesheetkeyframesrules)
  * [getStyleSheetKeyframes()](#getstylesheetkeyframes)
  * [parseKeyframesRule()](#parsekeyframesrule)

## Properties

### KeyframesRuleNameTypeError

```ts
readonly KeyframesRuleNameTypeError: typeof KeyframesFactoryKeyframesRuleNameTypeError;
```

Defined in: [KeyframeKit.ts:16](https://github.com/benhatsor/KeyframeKit.js/blob/b40b13a5a39c5b7425db734a05dd287248581d5e/src/KeyframeKit.ts#L16)

***

### SourceTypeError

```ts
readonly SourceTypeError: typeof KeyframesFactorySourceTypeError;
```

Defined in: [KeyframeKit.ts:20](https://github.com/benhatsor/KeyframeKit.js/blob/b40b13a5a39c5b7425db734a05dd287248581d5e/src/KeyframeKit.ts#L20)

## Methods

### getAllStyleSheetKeyframesRules()

```ts
getAllStyleSheetKeyframesRules(__namedParameters?: {
  in?: KeyframesFactorySource;
}): ParsedKeyframesRules;
```

Defined in: [KeyframeKit.ts:103](https://github.com/benhatsor/KeyframeKit.js/blob/b40b13a5a39c5b7425db734a05dd287248581d5e/src/KeyframeKit.ts#L103)

#### Parameters

##### \_\_namedParameters?

###### in?

[`KeyframesFactorySource`](../type-aliases/KeyframesFactorySource.md) = `document`

#### Returns

[`ParsedKeyframesRules`](../type-aliases/ParsedKeyframesRules.md)

***

### getStyleSheetKeyframes()

```ts
getStyleSheetKeyframes(__namedParameters: {
  in?: KeyframesFactorySource;
  of: string;
}): ParsedKeyframes | undefined;
```

Defined in: [KeyframeKit.ts:25](https://github.com/benhatsor/KeyframeKit.js/blob/b40b13a5a39c5b7425db734a05dd287248581d5e/src/KeyframeKit.ts#L25)

#### Parameters

##### \_\_namedParameters

###### in?

[`KeyframesFactorySource`](../type-aliases/KeyframesFactorySource.md) = `document`

###### of

`string`

#### Returns

[`ParsedKeyframes`](../classes/ParsedKeyframes.md) | `undefined`

***

### parseKeyframesRule()

```ts
parseKeyframesRule(__namedParameters: {
  rule: CSSKeyframesRule;
}): ParsedKeyframes;
```

Defined in: [KeyframeKit.ts:175](https://github.com/benhatsor/KeyframeKit.js/blob/b40b13a5a39c5b7425db734a05dd287248581d5e/src/KeyframeKit.ts#L175)

#### Parameters

##### \_\_namedParameters

###### rule

[`CSSKeyframesRule`](https://developer.mozilla.org/docs/Web/API/CSSKeyframesRule)

#### Returns

[`ParsedKeyframes`](../classes/ParsedKeyframes.md)
