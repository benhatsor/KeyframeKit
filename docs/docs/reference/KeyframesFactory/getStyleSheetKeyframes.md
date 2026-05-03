[KeyframeKit](../index.md) / [KeyframesFactory](../KeyframesFactory.md) / getStyleSheetKeyframes

# <div class="subheader"> Function</div> getStyleSheetKeyframes()

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

[`CSSStyleSheetSource`](CSSStyleSheetSource.md)

The stylesheet or stylesheet list where the rule resides.

#### of

`string`

The name of the `@keyframes` rule to get keyframes from.

## Returns

[`ParsedKeyframes`](ParsedKeyframes.md) \| `undefined`

## Throws

- [`KeyframesRuleNameTypeError`](KeyframesRuleNameTypeError.md) &nbsp;
   - Thrown if keyframes rule name is not a string.
 - [`SourceTypeError`](SourceTypeError.md) &nbsp;
   - Thrown if source is not a `CSSStyleSheet` or a `StyleSheetList`.

## See Also

### Referenced Here
- [KeyframesFactory.CSSStyleSheetSource](CSSStyleSheetSource.md)
- [KeyframesFactory.ParsedKeyframes](ParsedKeyframes.md)
