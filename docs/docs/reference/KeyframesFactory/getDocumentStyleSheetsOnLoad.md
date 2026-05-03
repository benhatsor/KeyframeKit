[KeyframeKit](../index.md) / [KeyframesFactory](../KeyframesFactory.md) / getDocumentStyleSheetsOnLoad

# <div class="subheader"> Function</div> getDocumentStyleSheetsOnLoad()

```ts
function getDocumentStyleSheetsOnLoad(obj?: {
  document?: Document;
}): Promise<StyleSheetList>;
```

Gets a document's stylesheets when it loads,
or immediately returns them if it's already loaded.

## Parameters

### obj?

#### document?

[`Document`](https://developer.mozilla.org/docs/Web/API/Document) = `window.document`

The document to get stylesheets from.

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`StyleSheetList`](https://developer.mozilla.org/docs/Web/API/StyleSheetList)\>
