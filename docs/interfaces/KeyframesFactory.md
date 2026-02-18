[KeyframeKit](../README.md) / KeyframesFactory

# Interface: KeyframesFactory

Defined in: [KeyframeKit.ts:14](https://github.com/benhatsor/KeyframeKit.js/blob/3d26ce02df4be3ce2ffa73c31d2b67adeb847037/src/KeyframeKit.ts#L14)

## Contents

* [Properties](#properties)
  * [Error](#error)
* [Methods](#methods)
  * [getAllStyleSheetKeyframesRules()](#getallstylesheetkeyframesrules)
  * [getStyleSheetKeyframes()](#getstylesheetkeyframes)
  * [parseKeyframesRule()](#parsekeyframesrule)

## Properties

### Error

```ts
readonly Error: {
  KeyframesRuleNameTypeError: typeof __class;
  SourceTypeError: typeof __class;
};
```

Defined in: [KeyframeKit.ts:16](https://github.com/benhatsor/KeyframeKit.js/blob/3d26ce02df4be3ce2ffa73c31d2b67adeb847037/src/KeyframeKit.ts#L16)

#### KeyframesRuleNameTypeError

```ts
readonly KeyframesRuleNameTypeError: typeof __class;
```

#### SourceTypeError

```ts
readonly SourceTypeError: typeof __class;
```

## Methods

### getAllStyleSheetKeyframesRules()

```ts
getAllStyleSheetKeyframesRules(__namedParameters?: {
  in?: KeyframesFactorySource;
}): ParsedKeyframesRules;
```

Defined in: [KeyframeKit.ts:104](https://github.com/benhatsor/KeyframeKit.js/blob/3d26ce02df4be3ce2ffa73c31d2b67adeb847037/src/KeyframeKit.ts#L104)

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

Defined in: [KeyframeKit.ts:26](https://github.com/benhatsor/KeyframeKit.js/blob/3d26ce02df4be3ce2ffa73c31d2b67adeb847037/src/KeyframeKit.ts#L26)

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

Defined in: [KeyframeKit.ts:176](https://github.com/benhatsor/KeyframeKit.js/blob/3d26ce02df4be3ce2ffa73c31d2b67adeb847037/src/KeyframeKit.ts#L176)

#### Parameters

##### \_\_namedParameters

###### rule

[`CSSKeyframesRule`](https://developer.mozilla.org/docs/Web/API/CSSKeyframesRule)

#### Returns

[`ParsedKeyframes`](../classes/ParsedKeyframes.md)
