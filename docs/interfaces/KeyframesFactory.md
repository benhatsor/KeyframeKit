[KeyframeKit](../README.md) / KeyframesFactory

# Interface: KeyframesFactory

Defined in: [KeyframeKit.ts:14](https://github.com/benhatsor/KeyframeKit.js/blob/4d4b43f56ee762a544471b854a9b8084549478cb/src/KeyframeKit.ts#L14)

## Contents

* [Properties](#properties)
  * [Error](#error)
* [Methods](#methods)
  * [getAllStyleSheetKeyframesRules()](#getallstylesheetkeyframesrules)
  * [getDocumentStyleSheetsOnLoad()](#getdocumentstylesheetsonload)
  * [getStyleSheetKeyframes()](#getstylesheetkeyframes)
  * [importStyleSheet()](#importstylesheet)
  * [parseKeyframesRule()](#parsekeyframesrule)

## Properties

### Error

```ts
readonly Error: {
  KeyframesRuleNameTypeError: typeof __class;
  SourceTypeError: typeof __class;
  StyleSheetImportError: typeof __class;
};
```

Defined in: [KeyframeKit.ts:16](https://github.com/benhatsor/KeyframeKit.js/blob/4d4b43f56ee762a544471b854a9b8084549478cb/src/KeyframeKit.ts#L16)

#### KeyframesRuleNameTypeError

```ts
readonly KeyframesRuleNameTypeError: typeof __class;
```

#### SourceTypeError

```ts
readonly SourceTypeError: typeof __class;
```

#### StyleSheetImportError

```ts
readonly StyleSheetImportError: typeof __class;
```

## Methods

### getAllStyleSheetKeyframesRules()

```ts
getAllStyleSheetKeyframesRules(__namedParameters: {
  in: KeyframesFactorySource;
}): ParsedKeyframesRules;
```

Defined in: [KeyframeKit.ts:145](https://github.com/benhatsor/KeyframeKit.js/blob/4d4b43f56ee762a544471b854a9b8084549478cb/src/KeyframeKit.ts#L145)

#### Parameters

##### \_\_namedParameters

###### in

[`KeyframesFactorySource`](../type-aliases/KeyframesFactorySource.md)

#### Returns

[`ParsedKeyframesRules`](../type-aliases/ParsedKeyframesRules.md)

***

### getDocumentStyleSheetsOnLoad()

```ts
getDocumentStyleSheetsOnLoad(__namedParameters?: {
  document?: Document;
}): Promise<StyleSheetList>;
```

Defined in: [KeyframeKit.ts:29](https://github.com/benhatsor/KeyframeKit.js/blob/4d4b43f56ee762a544471b854a9b8084549478cb/src/KeyframeKit.ts#L29)

#### Parameters

##### \_\_namedParameters?

###### document?

[`Document`](https://developer.mozilla.org/docs/Web/API/Document) = `window.document`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<[`StyleSheetList`](https://developer.mozilla.org/docs/Web/API/StyleSheetList)>

***

### getStyleSheetKeyframes()

```ts
getStyleSheetKeyframes(__namedParameters: {
  in: KeyframesFactorySource;
  of: string;
}): ParsedKeyframes | undefined;
```

Defined in: [KeyframeKit.ts:68](https://github.com/benhatsor/KeyframeKit.js/blob/4d4b43f56ee762a544471b854a9b8084549478cb/src/KeyframeKit.ts#L68)

#### Parameters

##### \_\_namedParameters

###### in

[`KeyframesFactorySource`](../type-aliases/KeyframesFactorySource.md)

###### of

`string`

#### Returns

[`ParsedKeyframes`](../classes/ParsedKeyframes.md) | `undefined`

***

### importStyleSheet()

```ts
importStyleSheet(url: string): Promise<CSSStyleSheet>;
```

Defined in: [KeyframeKit.ts:44](https://github.com/benhatsor/KeyframeKit.js/blob/4d4b43f56ee762a544471b854a9b8084549478cb/src/KeyframeKit.ts#L44)

* Note: `@import` rules won't be resolved in imported stylesheets.\
  See https://github.com/WICG/construct-stylesheets/issues/119#issuecomment-588352418.

#### Parameters

##### url

`string`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<[`CSSStyleSheet`](https://developer.mozilla.org/docs/Web/API/CSSStyleSheet)>

***

### parseKeyframesRule()

```ts
parseKeyframesRule(__namedParameters: {
  rule: CSSKeyframesRule;
}): ParsedKeyframes;
```

Defined in: [KeyframeKit.ts:217](https://github.com/benhatsor/KeyframeKit.js/blob/4d4b43f56ee762a544471b854a9b8084549478cb/src/KeyframeKit.ts#L217)

#### Parameters

##### \_\_namedParameters

###### rule

[`CSSKeyframesRule`](https://developer.mozilla.org/docs/Web/API/CSSKeyframesRule)

#### Returns

[`ParsedKeyframes`](../classes/ParsedKeyframes.md)
