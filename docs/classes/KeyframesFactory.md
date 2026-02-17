[KeyframeKit](../README.md) / KeyframesFactory

# Class: KeyframesFactory

Defined in: [KeyframeKit.ts:14](https://github.com/benhatsor/KeyframeKit.js/blob/6b72c02c8a3deda076259ab587cc5fc89b489159/src/KeyframeKit.ts#L14)

## Contents

* [Constructors](#constructors)
  * [Constructor](#constructor)
* [Properties](#properties)
  * [KeyframesRuleNameTypeError](#keyframesrulenametypeerror)
  * [SourceTypeError](#sourcetypeerror)
* [Methods](#methods)
  * [getAllStyleSheetKeyframesRules()](#getallstylesheetkeyframesrules)
  * [getStyleSheetKeyframes()](#getstylesheetkeyframes)
  * [parseKeyframesRule()](#parsekeyframesrule)

## Constructors

### Constructor

```ts
new KeyframesFactory(): KeyframesFactory;
```

#### Returns

`KeyframesFactory`

## Properties

### KeyframesRuleNameTypeError

```ts
readonly KeyframesRuleNameTypeError: typeof KeyframesFactoryKeyframesRuleNameTypeError;
```

Defined in: [KeyframeKit.ts:16](https://github.com/benhatsor/KeyframeKit.js/blob/6b72c02c8a3deda076259ab587cc5fc89b489159/src/KeyframeKit.ts#L16)

***

### SourceTypeError

```ts
readonly SourceTypeError: typeof KeyframesFactorySourceTypeError;
```

Defined in: [KeyframeKit.ts:20](https://github.com/benhatsor/KeyframeKit.js/blob/6b72c02c8a3deda076259ab587cc5fc89b489159/src/KeyframeKit.ts#L20)

## Methods

### getAllStyleSheetKeyframesRules()

```ts
getAllStyleSheetKeyframesRules(__namedParameters?: {
  in?: KeyframesFactorySource;
}): ParsedKeyframesRules;
```

Defined in: [KeyframeKit.ts:103](https://github.com/benhatsor/KeyframeKit.js/blob/6b72c02c8a3deda076259ab587cc5fc89b489159/src/KeyframeKit.ts#L103)

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

Defined in: [KeyframeKit.ts:25](https://github.com/benhatsor/KeyframeKit.js/blob/6b72c02c8a3deda076259ab587cc5fc89b489159/src/KeyframeKit.ts#L25)

#### Parameters

##### \_\_namedParameters

###### in?

[`KeyframesFactorySource`](../type-aliases/KeyframesFactorySource.md) = `document`

###### of

`string`

#### Returns

[`ParsedKeyframes`](ParsedKeyframes.md) | `undefined`

***

### parseKeyframesRule()

```ts
parseKeyframesRule(__namedParameters: {
  rule: CSSKeyframesRule;
}): ParsedKeyframes;
```

Defined in: [KeyframeKit.ts:175](https://github.com/benhatsor/KeyframeKit.js/blob/6b72c02c8a3deda076259ab587cc5fc89b489159/src/KeyframeKit.ts#L175)

#### Parameters

##### \_\_namedParameters

###### rule

[`CSSKeyframesRule`](https://developer.mozilla.org/docs/Web/API/CSSKeyframesRule)

#### Returns

[`ParsedKeyframes`](ParsedKeyframes.md)
