[**KeyframeKit.js**](../../README.md)

***

[KeyframeKit.js](../../globals.md) / [\<internal\>](../README.md) / CSSStyleValue

# Variable: CSSStyleValue

> **CSSStyleValue**: \{(): [`CSSStyleValue`](../interfaces/CSSStyleValue.md); `prototype`: [`CSSStyleValue`](../interfaces/CSSStyleValue.md); `parse`: [`CSSStyleValue`](../interfaces/CSSStyleValue.md); `parseAll`: [`CSSStyleValue`](../interfaces/CSSStyleValue.md)[]; \}

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:7226

## Type Declaration

## Returns

[`CSSStyleValue`](../interfaces/CSSStyleValue.md)

### prototype

> **prototype**: [`CSSStyleValue`](../interfaces/CSSStyleValue.md)

### parse()

> **parse**(`property`, `cssText`): [`CSSStyleValue`](../interfaces/CSSStyleValue.md)

The **`parse()`** static method of the CSSStyleValue interface sets a specific CSS property to the specified values and returns the first value as a CSSStyleValue object.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSStyleValue/parse_static)

#### Parameters

##### property

`string`

##### cssText

`string`

#### Returns

[`CSSStyleValue`](../interfaces/CSSStyleValue.md)

### parseAll()

> **parseAll**(`property`, `cssText`): [`CSSStyleValue`](../interfaces/CSSStyleValue.md)[]

The **`parseAll()`** static method of the CSSStyleValue interface sets all occurrences of a specific CSS property to the specified value and returns an array of CSSStyleValue objects, each containing one of the supplied values.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSStyleValue/parseAll_static)

#### Parameters

##### property

`string`

##### cssText

`string`

#### Returns

[`CSSStyleValue`](../interfaces/CSSStyleValue.md)[]
