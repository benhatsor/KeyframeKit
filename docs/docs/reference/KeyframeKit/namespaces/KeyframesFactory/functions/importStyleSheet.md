[KeyframeKit](../../../../index.md) / [KeyframesFactory](../index.md) / importStyleSheet

# <div class="subheader"> Function</div> importStyleSheet()

```ts
function importStyleSheet(url: string): Promise<CSSStyleSheet>;
```

Imports a stylesheet from a URL.

## Parameters

### url

`string`

The URL of the stylesheet to import.

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`CSSStyleSheet`](https://developer.mozilla.org/docs/Web/API/CSSStyleSheet)\>

## Throws

- [`StyleSheetImportError`](../classes/StyleSheetImportError.md) &nbsp;
   - Thrown if the stylesheet could not be imported.

## Remarks

Note: `@import` rules won't be resolved in imported stylesheets.
 [See more.](https://github.com/WICG/construct-stylesheets/issues/119#issuecomment-588352418)
