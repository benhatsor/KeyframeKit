[KeyframeKit](../index.md) / KeyframesFactory

# Interface: KeyframesFactory

Defined in: [KeyframeKit.ts:19](https://github.com/benhatsor/KeyframeKit.js/blob/6eb91e80bdc11ce3dba295a38e10c62fc9ad9528/src/KeyframeKit.ts#L19)

## Properties

### Error

```ts
readonly Error: {
  KeyframesRuleNameTypeError: typeof KeyframesRuleNameTypeError;
  SourceTypeError: typeof SourceTypeError;
  StyleSheetImportError: typeof StyleSheetImportError;
};
```

Defined in: [KeyframeKit.ts:21](https://github.com/benhatsor/KeyframeKit.js/blob/6eb91e80bdc11ce3dba295a38e10c62fc9ad9528/src/KeyframeKit.ts#L21)

#### KeyframesRuleNameTypeError

```ts
readonly KeyframesRuleNameTypeError: typeof KeyframesRuleNameTypeError;
```

#### SourceTypeError

```ts
readonly SourceTypeError: typeof SourceTypeError;
```

#### StyleSheetImportError

```ts
readonly StyleSheetImportError: typeof StyleSheetImportError;
```

## Methods

### getAllStyleSheetKeyframesRules()

```ts
getAllStyleSheetKeyframesRules(obj: {
  in: KeyframesFactorySource;
}): ParsedKeyframesRules;
```

Defined in: [KeyframeKit.ts:151](https://github.com/benhatsor/KeyframeKit.js/blob/6eb91e80bdc11ce3dba295a38e10c62fc9ad9528/src/KeyframeKit.ts#L151)

#### Parameters

##### obj

###### in

[`KeyframesFactorySource`](../type-aliases/KeyframesFactorySource.md)

#### Returns

[`ParsedKeyframesRules`](../type-aliases/ParsedKeyframesRules.md)

***

### getDocumentStyleSheetsOnLoad()

```ts
getDocumentStyleSheetsOnLoad(obj?: {
  document?: Document;
}): Promise<StyleSheetList>;
```

Defined in: [KeyframeKit.ts:34](https://github.com/benhatsor/KeyframeKit.js/blob/6eb91e80bdc11ce3dba295a38e10c62fc9ad9528/src/KeyframeKit.ts#L34)

#### Parameters

##### obj?

###### document?

[`Document`](https://developer.mozilla.org/docs/Web/API/Document) = `window.document`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`StyleSheetList`](https://developer.mozilla.org/docs/Web/API/StyleSheetList)\>

***

### getStyleSheetKeyframes()

```ts
getStyleSheetKeyframes(obj: {
  in: KeyframesFactorySource;
  of: string;
}): ParsedKeyframes | undefined;
```

Defined in: [KeyframeKit.ts:74](https://github.com/benhatsor/KeyframeKit.js/blob/6eb91e80bdc11ce3dba295a38e10c62fc9ad9528/src/KeyframeKit.ts#L74)

#### Parameters

##### obj

###### in

[`KeyframesFactorySource`](../type-aliases/KeyframesFactorySource.md)

###### of

`string`

#### Returns

[`ParsedKeyframes`](../classes/ParsedKeyframes.md) \| `undefined`

***

### importStyleSheet()

```ts
importStyleSheet(url: string): Promise<CSSStyleSheet>;
```

Defined in: [KeyframeKit.ts:50](https://github.com/benhatsor/KeyframeKit.js/blob/6eb91e80bdc11ce3dba295a38e10c62fc9ad9528/src/KeyframeKit.ts#L50)

#### Parameters

##### url

`string`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`CSSStyleSheet`](https://developer.mozilla.org/docs/Web/API/CSSStyleSheet)\>

#### Remarks

Note: `@import` rules won't be resolved in imported stylesheets.  
 See https://github.com/WICG/construct-stylesheets/issues/119#issuecomment-588352418.

***

### parseKeyframesRule()

```ts
parseKeyframesRule(obj: {
  rule: CSSKeyframesRule;
}): ParsedKeyframes;
```

Defined in: [KeyframeKit.ts:223](https://github.com/benhatsor/KeyframeKit.js/blob/6eb91e80bdc11ce3dba295a38e10c62fc9ad9528/src/KeyframeKit.ts#L223)

#### Parameters

##### obj

###### rule

[`CSSKeyframesRule`](https://developer.mozilla.org/docs/Web/API/CSSKeyframesRule)

#### Returns

[`ParsedKeyframes`](../classes/ParsedKeyframes.md)
