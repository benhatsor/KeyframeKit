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

Keyframes rule name must be a string.

#### SourceTypeError

```ts
readonly SourceTypeError: typeof SourceTypeError;
```

Source must be either a `CSSStyleSheet` or a `StyleSheetList`.

#### StyleSheetImportError

```ts
readonly StyleSheetImportError: typeof StyleSheetImportError;
```

The stylesheet could not be imported.

## Methods

### getAllStyleSheetKeyframesRules()

```ts
getAllStyleSheetKeyframesRules(obj: {
  in: CSSStyleSheetSource;
}): ParsedKeyframesRules;
```

Gets all the CSS keyframes rules in a stylesheet or stylesheet list,
then converts them to Web Animations API keyframes.

#### Parameters

##### obj

###### in

[`CSSStyleSheetSource`](../type-aliases/CSSStyleSheetSource.md)

The style sheet or style sheet list to get keyframes from.

#### Returns

[`ParsedKeyframesRules`](../type-aliases/ParsedKeyframesRules.md)

***

### getDocumentStyleSheetsOnLoad()

```ts
getDocumentStyleSheetsOnLoad(obj?: {
  document?: Document;
}): Promise<StyleSheetList>;
```

Gets a document's stylesheets when it loads,
or immediately returns them if it's already loaded.

#### Parameters

##### obj?

###### document?

[`Document`](https://developer.mozilla.org/docs/Web/API/Document) = `window.document`

The document to get stylesheets from.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`StyleSheetList`](https://developer.mozilla.org/docs/Web/API/StyleSheetList)\>

***

### getStyleSheetKeyframes()

```ts
getStyleSheetKeyframes(obj: {
  in: CSSStyleSheetSource;
  of: string;
}): ParsedKeyframes | undefined;
```

Gets a CSS keyframes rule from a stylesheet or stylesheet list,
then converts it to Web Animations API keyframes.

#### Parameters

##### obj

###### in

[`CSSStyleSheetSource`](../type-aliases/CSSStyleSheetSource.md)

The stylesheet or stylesheet list where the rule resides.

###### of

`string`

The name of the `@keyframes` rule to get keyframes from.

#### Returns

[`ParsedKeyframes`](../classes/ParsedKeyframes.md) \| `undefined`

***

### importStyleSheet()

```ts
importStyleSheet(url: string): Promise<CSSStyleSheet>;
```

Imports a stylesheet from a URL.

#### Parameters

##### url

`string`

The URL of the stylesheet to import.

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

Converts a CSS keyframes rule to Web Animations API keyframes.

#### Parameters

##### obj

###### rule

[`CSSKeyframesRule`](https://developer.mozilla.org/docs/Web/API/CSSKeyframesRule)

The rule to convert.

#### Returns

[`ParsedKeyframes`](../classes/ParsedKeyframes.md)
