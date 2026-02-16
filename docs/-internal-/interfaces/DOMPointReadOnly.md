[**KeyframeKit.js**](../../README.md)

***

[KeyframeKit.js](../../globals.md) / [\<internal\>](../README.md) / DOMPointReadOnly

# Interface: DOMPointReadOnly

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:9077

The **`DOMPointReadOnly`** interface specifies the coordinate and perspective fields used by DOMPoint to define a 2D or 3D point in a coordinate system.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMPointReadOnly)

## Extended by

- [`DOMPoint`](DOMPoint.md)

## Properties

### w

> `readonly` **w**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:9083

The **`DOMPointReadOnly`** interface's **`w`** property holds the point's perspective value, `w`, for a read-only point in space.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMPointReadOnly/w)

***

### x

> `readonly` **x**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:9089

The **`DOMPointReadOnly`** interface's **`x`** property holds the horizontal coordinate, x, for a read-only point in space.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMPointReadOnly/x)

***

### y

> `readonly` **y**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:9095

The **`DOMPointReadOnly`** interface's **`y`** property holds the vertical coordinate, y, for a read-only point in space.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMPointReadOnly/y)

***

### z

> `readonly` **z**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:9101

The **`DOMPointReadOnly`** interface's **`z`** property holds the depth coordinate, z, for a read-only point in space.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMPointReadOnly/z)

## Methods

### matrixTransform()

> **matrixTransform**(`matrix?`): [`DOMPoint`](DOMPoint.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:9107

The **`matrixTransform()`** method of the DOMPointReadOnly interface applies a matrix transform specified as an object to the DOMPointReadOnly object, creating and returning a new `DOMPointReadOnly` object.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMPointReadOnly/matrixTransform)

#### Parameters

##### matrix?

[`DOMMatrixInit`](DOMMatrixInit.md)

#### Returns

[`DOMPoint`](DOMPoint.md)

***

### toJSON()

> **toJSON**(): `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:9113

The DOMPointReadOnly method `toJSON()` returns an object giving the ```js-nolint toJSON() ``` None.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMPointReadOnly/toJSON)

#### Returns

`any`
