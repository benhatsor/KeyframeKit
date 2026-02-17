[KeyframeKit](../wiki/Home) / [\<internal>](../wiki/%3Cinternal%3E) / KeyframesFactory

Defined in: [KeyframeKit.ts:14](https://github.com/benhatsor/KeyframeKit.js/blob/dba76bcf59626866e96d407682764bcd7ee6e8fb/src/KeyframeKit.ts#L14)

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

Defined in: [KeyframeKit.ts:16](https://github.com/benhatsor/KeyframeKit.js/blob/dba76bcf59626866e96d407682764bcd7ee6e8fb/src/KeyframeKit.ts#L16)

***

### SourceTypeError

```ts
readonly SourceTypeError: typeof KeyframesFactorySourceTypeError;
```

Defined in: [KeyframeKit.ts:20](https://github.com/benhatsor/KeyframeKit.js/blob/dba76bcf59626866e96d407682764bcd7ee6e8fb/src/KeyframeKit.ts#L20)

## Methods

### getAllStyleSheetKeyframesRules()

```ts
getAllStyleSheetKeyframesRules(obj?: {
  in?: KeyframesFactorySource;
}): ParsedKeyframesRules;
```

Defined in: [KeyframeKit.ts:102](https://github.com/benhatsor/KeyframeKit.js/blob/dba76bcf59626866e96d407682764bcd7ee6e8fb/src/KeyframeKit.ts#L102)

#### Parameters

##### obj?

###### in?

[`KeyframesFactorySource`](../wiki/TypeAlias.KeyframesFactorySource) = `document`

#### Returns

[`ParsedKeyframesRules`](../wiki/TypeAlias.ParsedKeyframesRules)

***

### getStyleSheetKeyframes()

```ts
getStyleSheetKeyframes(obj: {
  in?: KeyframesFactorySource;
  of: string;
}): ParsedKeyframes | undefined;
```

Defined in: [KeyframeKit.ts:25](https://github.com/benhatsor/KeyframeKit.js/blob/dba76bcf59626866e96d407682764bcd7ee6e8fb/src/KeyframeKit.ts#L25)

#### Parameters

##### obj

###### in?

[`KeyframesFactorySource`](../wiki/TypeAlias.KeyframesFactorySource) = `document`

###### of

`string`

#### Returns

[`ParsedKeyframes`](../wiki/Class.ParsedKeyframes) | `undefined`

***

### parseKeyframesRule()

```ts
parseKeyframesRule(obj: {
  rule: CSSKeyframesRule;
}): ParsedKeyframes;
```

Defined in: [KeyframeKit.ts:174](https://github.com/benhatsor/KeyframeKit.js/blob/dba76bcf59626866e96d407682764bcd7ee6e8fb/src/KeyframeKit.ts#L174)

#### Parameters

##### obj

###### rule

[`CSSKeyframesRule`](https://developer.mozilla.org/docs/Web/API/CSSKeyframesRule)

#### Returns

[`ParsedKeyframes`](../wiki/Class.ParsedKeyframes)
