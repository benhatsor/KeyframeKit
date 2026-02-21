[KeyframeKit](../index.md) / KeyframesFactory

# Interface: KeyframesFactory

Defined in: [src/KeyframeKit.ts:31](https://github.com/benhatsor/KeyframeKit.js/blob/bcee9f4f13a98aa8f2cd08c5503f1b3da83077c1/src/KeyframeKit.ts#L31)

## Properties

### Error

```ts
readonly Error: typeof KeyframesFactoryError = KeyframesFactoryError;
```

Defined in: [src/KeyframeKit.ts:33](https://github.com/benhatsor/KeyframeKit.js/blob/bcee9f4f13a98aa8f2cd08c5503f1b3da83077c1/src/KeyframeKit.ts#L33)

## Methods

### getAllStyleSheetKeyframesRules()

```ts
getAllStyleSheetKeyframesRules(obj: {
  in: KeyframesFactorySource;
}): ParsedKeyframesRules;
```

Defined in: [src/KeyframeKit.ts:153](https://github.com/benhatsor/KeyframeKit.js/blob/bcee9f4f13a98aa8f2cd08c5503f1b3da83077c1/src/KeyframeKit.ts#L153)

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

Defined in: [src/KeyframeKit.ts:36](https://github.com/benhatsor/KeyframeKit.js/blob/bcee9f4f13a98aa8f2cd08c5503f1b3da83077c1/src/KeyframeKit.ts#L36)

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

Defined in: [src/KeyframeKit.ts:76](https://github.com/benhatsor/KeyframeKit.js/blob/bcee9f4f13a98aa8f2cd08c5503f1b3da83077c1/src/KeyframeKit.ts#L76)

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

Defined in: [src/KeyframeKit.ts:52](https://github.com/benhatsor/KeyframeKit.js/blob/bcee9f4f13a98aa8f2cd08c5503f1b3da83077c1/src/KeyframeKit.ts#L52)

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

Defined in: [src/KeyframeKit.ts:225](https://github.com/benhatsor/KeyframeKit.js/blob/bcee9f4f13a98aa8f2cd08c5503f1b3da83077c1/src/KeyframeKit.ts#L225)

#### Parameters

##### obj

###### rule

[`CSSKeyframesRule`](https://developer.mozilla.org/docs/Web/API/CSSKeyframesRule)

#### Returns

[`ParsedKeyframes`](../classes/ParsedKeyframes.md)
