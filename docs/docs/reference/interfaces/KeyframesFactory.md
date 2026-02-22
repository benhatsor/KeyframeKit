[KeyframeKit](../index.md) / KeyframesFactory

# Interface: KeyframesFactory

## Properties

### Error

```ts
readonly Error: {
  KeyframesRuleNameTypeError: typeof KeyframesRuleNameTypeError;
  SourceTypeError: typeof SourceTypeError;
  StyleSheetImportError: typeof StyleSheetImportError;
};
```

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

#### Parameters

##### obj

###### rule

[`CSSKeyframesRule`](https://developer.mozilla.org/docs/Web/API/CSSKeyframesRule)

#### Returns

[`ParsedKeyframes`](../classes/ParsedKeyframes.md)
