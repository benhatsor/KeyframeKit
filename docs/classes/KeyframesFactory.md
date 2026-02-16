[KeyframeKit](../Reference.md) / KeyframesFactory

Defined in: [KeyframeKit.ts:14](https://github.com/benhatsor/KeyframeKit.js/blob/398aae49f35972ba97a6d5b395863214c00b54eb/src/KeyframeKit.ts#L14)

## Properties

### KeyframesRuleNameTypeError

```ts
readonly KeyframesRuleNameTypeError: typeof KeyframesFactoryKeyframesRuleNameTypeError;
```

Defined in: [KeyframeKit.ts:16](https://github.com/benhatsor/KeyframeKit.js/blob/398aae49f35972ba97a6d5b395863214c00b54eb/src/KeyframeKit.ts#L16)

***

### SourceTypeError

```ts
readonly SourceTypeError: typeof KeyframesFactorySourceTypeError;
```

Defined in: [KeyframeKit.ts:20](https://github.com/benhatsor/KeyframeKit.js/blob/398aae49f35972ba97a6d5b395863214c00b54eb/src/KeyframeKit.ts#L20)

## Methods

### getAllStyleSheetKeyframesRules()

```ts
getAllStyleSheetKeyframesRules(obj?: {
  in?: KeyframesFactorySource;
}): ParsedKeyframesRules;
```

Defined in: [KeyframeKit.ts:102](https://github.com/benhatsor/KeyframeKit.js/blob/398aae49f35972ba97a6d5b395863214c00b54eb/src/KeyframeKit.ts#L102)

#### Parameters

##### obj?

###### in?

[`KeyframesFactorySource`](../type-aliases/KeyframesFactorySource.md) = `document`

#### Returns

[`ParsedKeyframesRules`](../type-aliases/ParsedKeyframesRules.md)

***

### getStyleSheetKeyframes()

```ts
getStyleSheetKeyframes(obj: {
  in?: KeyframesFactorySource;
  of: string;
}): ParsedKeyframes | undefined;
```

Defined in: [KeyframeKit.ts:25](https://github.com/benhatsor/KeyframeKit.js/blob/398aae49f35972ba97a6d5b395863214c00b54eb/src/KeyframeKit.ts#L25)

#### Parameters

##### obj

###### in?

[`KeyframesFactorySource`](../type-aliases/KeyframesFactorySource.md) = `document`

###### of

`string`

#### Returns

[`ParsedKeyframes`](../wiki/ParsedKeyframes) | `undefined`

***

### parseKeyframesRule()

```ts
parseKeyframesRule(obj: {
  rule: CSSKeyframesRule;
}): ParsedKeyframes;
```

Defined in: [KeyframeKit.ts:174](https://github.com/benhatsor/KeyframeKit.js/blob/398aae49f35972ba97a6d5b395863214c00b54eb/src/KeyframeKit.ts#L174)

#### Parameters

##### obj

###### rule

[`CSSKeyframesRule`](https://developer.mozilla.org/docs/Web/API/CSSKeyframesRule)

#### Returns

[`ParsedKeyframes`](../wiki/ParsedKeyframes)
