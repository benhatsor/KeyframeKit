[**KeyframeKit.js**](../../README.md)

***

[KeyframeKit.js](../../globals.md) / [\<internal\>](../README.md) / DOMPoint

# Interface: DOMPoint

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:9031

A **`DOMPoint`** object represents a 2D or 3D point in a coordinate system; it includes values for the coordinates in up to three dimensions, as well as an optional perspective value.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMPoint)

## Extends

- [`DOMPointReadOnly`](DOMPointReadOnly.md)

## Properties

### w

> **w**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:9037

The **`DOMPoint`** interface's **`w`** property holds the point's perspective value, w, for a point in space.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMPoint/w)

#### Overrides

[`DOMPointReadOnly`](DOMPointReadOnly.md).[`w`](DOMPointReadOnly.md#w)

***

### x

> **x**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:9043

The **`DOMPoint`** interface's **`x`** property holds the horizontal coordinate, x, for a point in space.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMPoint/x)

#### Overrides

[`DOMPointReadOnly`](DOMPointReadOnly.md).[`x`](DOMPointReadOnly.md#x)

***

### y

> **y**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:9049

The **`DOMPoint`** interface's **`y`** property holds the vertical coordinate, _y_, for a point in space.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMPoint/y)

#### Overrides

[`DOMPointReadOnly`](DOMPointReadOnly.md).[`y`](DOMPointReadOnly.md#y)

***

### z

> **z**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:9055

The **`DOMPoint`** interface's **`z`** property specifies the depth coordinate of a point in space.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMPoint/z)

#### Overrides

[`DOMPointReadOnly`](DOMPointReadOnly.md).[`z`](DOMPointReadOnly.md#z)

## Methods

### matrixTransform()

> **matrixTransform**(`matrix?`): `DOMPoint`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:9107

The **`matrixTransform()`** method of the DOMPointReadOnly interface applies a matrix transform specified as an object to the DOMPointReadOnly object, creating and returning a new `DOMPointReadOnly` object.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMPointReadOnly/matrixTransform)

#### Parameters

##### matrix?

[`DOMMatrixInit`](DOMMatrixInit.md)

#### Returns

`DOMPoint`

#### Inherited from

[`DOMPointReadOnly`](DOMPointReadOnly.md).[`matrixTransform`](DOMPointReadOnly.md#matrixtransform)

***

### toJSON()

> **toJSON**(): `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:9113

The DOMPointReadOnly method `toJSON()` returns an object giving the ```js-nolint toJSON() ``` None.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMPointReadOnly/toJSON)

#### Returns

`any`

#### Inherited from

[`DOMPointReadOnly`](DOMPointReadOnly.md).[`toJSON`](DOMPointReadOnly.md#tojson)
