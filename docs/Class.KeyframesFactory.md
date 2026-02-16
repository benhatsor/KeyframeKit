[KeyframeKit](../wiki/Reference) / KeyframesFactory

Defined in: [KeyframeKit.ts:14](https://github.com/benhatsor/KeyframeKit.js/blob/b329d23518c12defe9876b16dc59422de069b1fe/src/KeyframeKit.ts#L14)

## Contents

<details><summary>Open Contents</summary>

* [Properties](#properties)
  * [KeyframesRuleNameTypeError](#keyframesrulenametypeerror)
  * [SourceTypeError](#sourcetypeerror)
* [Methods](#methods)
  * [getAllStyleSheetKeyframesRules()](#getallstylesheetkeyframesrules)
    * [Parameters](#parameters)
      * [obj?](#obj)
        * [in?](#in)
    * [Returns](#returns)
  * [getStyleSheetKeyframes()](#getstylesheetkeyframes)
    * [Parameters](#parameters-1)
      * [obj](#obj-1)
        * [in?](#in-1)
        * [of](#of)
    * [Returns](#returns-1)
  * [parseKeyframesRule()](#parsekeyframesrule)
    * [Parameters](#parameters-2)
      * [obj](#obj-2)
        * [rule](#rule)
    * [Returns](#returns-2)

</details>

## Properties

### KeyframesRuleNameTypeError

```ts
readonly KeyframesRuleNameTypeError: typeof KeyframesFactoryKeyframesRuleNameTypeError;
```

Defined in: [KeyframeKit.ts:16](https://github.com/benhatsor/KeyframeKit.js/blob/b329d23518c12defe9876b16dc59422de069b1fe/src/KeyframeKit.ts#L16)

***

### SourceTypeError

```ts
readonly SourceTypeError: typeof KeyframesFactorySourceTypeError;
```

Defined in: [KeyframeKit.ts:20](https://github.com/benhatsor/KeyframeKit.js/blob/b329d23518c12defe9876b16dc59422de069b1fe/src/KeyframeKit.ts#L20)

## Methods

### getAllStyleSheetKeyframesRules()

```ts
getAllStyleSheetKeyframesRules(obj?: {
  in?: KeyframesFactorySource;
}): ParsedKeyframesRules;
```

Defined in: [KeyframeKit.ts:102](https://github.com/benhatsor/KeyframeKit.js/blob/b329d23518c12defe9876b16dc59422de069b1fe/src/KeyframeKit.ts#L102)

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

Defined in: [KeyframeKit.ts:25](https://github.com/benhatsor/KeyframeKit.js/blob/b329d23518c12defe9876b16dc59422de069b1fe/src/KeyframeKit.ts#L25)

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

Defined in: [KeyframeKit.ts:174](https://github.com/benhatsor/KeyframeKit.js/blob/b329d23518c12defe9876b16dc59422de069b1fe/src/KeyframeKit.ts#L174)

#### Parameters

##### obj

###### rule

[`CSSKeyframesRule`](https://developer.mozilla.org/docs/Web/API/CSSKeyframesRule)

#### Returns

[`ParsedKeyframes`](../wiki/Class.ParsedKeyframes)
