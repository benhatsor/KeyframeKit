[KeyframeKit](../../../../index.md) / [KeyframesFactory](../index.md) / getStyleSheetKeyframes

# <div class="subheader"> Function</div>getStyleSheetKeyframes()

```ts
function getStyleSheetKeyframes(obj: {
  in: CSSStyleSheetSource;
  of: string;
}): ParsedKeyframes | undefined;
```

Gets a CSS keyframes rule from a stylesheet or stylesheet list,
then converts it to Web Animations API keyframes.

## Parameters

### obj

#### in

[`CSSStyleSheetSource`](../type-aliases/CSSStyleSheetSource.md)

The stylesheet or stylesheet list where the rule resides.

#### of

`string`

The name of the `@keyframes` rule to get keyframes from.

## Returns

[`ParsedKeyframes`](../classes/ParsedKeyframes.md) \| `undefined`

## Throws

- [`KeyframesRuleNameTypeError`](../classes/KeyframesRuleNameTypeError.md) &nbsp;
   - Thrown if keyframes rule name is not a string.
 - [`SourceTypeError`](../classes/SourceTypeError.md) &nbsp;
   - Thrown if source is not a `CSSStyleSheet` or a `StyleSheetList`.

## See Also

### Referenced Here
- [KeyframesFactory.CSSStyleSheetSource](../type-aliases/CSSStyleSheetSource.md)
- [KeyframesFactory.ParsedKeyframes](../classes/ParsedKeyframes.md)
