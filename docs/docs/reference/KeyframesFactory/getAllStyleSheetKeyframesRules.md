[KeyframeKit](../index.md) / [KeyframesFactory](../KeyframesFactory.md) / getAllStyleSheetKeyframesRules

# <div class="subheader"> Function</div> getAllStyleSheetKeyframesRules()

```ts
function getAllStyleSheetKeyframesRules(obj: {
  in: CSSStyleSheetSource;
}): ParsedKeyframesRules;
```

Gets all the CSS keyframes rules in a stylesheet or stylesheet list,
then converts them to Web Animations API keyframes.

## Parameters

### obj

#### in

[`CSSStyleSheetSource`](CSSStyleSheetSource.md)

The style sheet or style sheet list to get keyframes from.

## Returns

[`ParsedKeyframesRules`](ParsedKeyframesRules.md)

## Throws

- [`SourceTypeError`](SourceTypeError.md) &nbsp;
   - Thrown if source is not a `CSSStyleSheet` or a `StyleSheetList`.

## See Also

### Referenced Here
- [KeyframesFactory.CSSStyleSheetSource](CSSStyleSheetSource.md)
- [KeyframesFactory.ParsedKeyframesRules](ParsedKeyframesRules.md)
