[**KeyframeKit.js**](../../README.md)

***

[KeyframeKit.js](../../globals.md) / [\<internal\>](../README.md) / SVGTransform

# Interface: SVGTransform

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:29907

The **`SVGTransform`** interface reflects one of the component transformations within an SVGTransformList; thus, an `SVGTransform` object corresponds to a single component (e.g., `scale(…)` or `matrix(…)`) within a transform attribute.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/SVGTransform)

## Properties

### angle

> `readonly` **angle**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:29913

The **`angle`** read-only property of the SVGTransform interface represents the angle of the transformation in degrees.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/SVGTransform/angle)

***

### matrix

> `readonly` **matrix**: [`DOMMatrix`](DOMMatrix.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:29919

The **`matrix`** read-only property of the SVGTransform interface represents the transformation matrix that corresponds to the transformation `type`.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/SVGTransform/matrix)

***

### SVG\_TRANSFORM\_MATRIX

> `readonly` **SVG\_TRANSFORM\_MATRIX**: `1`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:29963

***

### SVG\_TRANSFORM\_ROTATE

> `readonly` **SVG\_TRANSFORM\_ROTATE**: `4`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:29966

***

### SVG\_TRANSFORM\_SCALE

> `readonly` **SVG\_TRANSFORM\_SCALE**: `3`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:29965

***

### SVG\_TRANSFORM\_SKEWX

> `readonly` **SVG\_TRANSFORM\_SKEWX**: `5`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:29967

***

### SVG\_TRANSFORM\_SKEWY

> `readonly` **SVG\_TRANSFORM\_SKEWY**: `6`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:29968

***

### SVG\_TRANSFORM\_TRANSLATE

> `readonly` **SVG\_TRANSFORM\_TRANSLATE**: `2`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:29964

***

### SVG\_TRANSFORM\_UNKNOWN

> `readonly` **SVG\_TRANSFORM\_UNKNOWN**: `0`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:29962

***

### type

> `readonly` **type**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:29925

The **`type`** read-only property of the SVGTransform interface represents the `type` of transformation applied, specified by one of the `SVG_TRANSFORM_*` constants defined on this interface.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/SVGTransform/type)

## Methods

### setMatrix()

> **setMatrix**(`matrix?`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:29931

The `setMatrix()` method of the SVGTransform interface sets the transform type to `SVG_TRANSFORM_MATRIX`, with parameter `matrix` defining the new transformation.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/SVGTransform/setMatrix)

#### Parameters

##### matrix?

[`DOMMatrix2DInit`](DOMMatrix2DInit.md)

#### Returns

`void`

***

### setRotate()

> **setRotate**(`angle`, `cx`, `cy`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:29937

The `setRotate()` method of the SVGTransform interface sets the transform type to `SVG_TRANSFORM_ROTATE`, with parameter `angle` defining the rotation angle and parameters `cx` and `cy` defining the optional center of rotation.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/SVGTransform/setRotate)

#### Parameters

##### angle

`number`

##### cx

`number`

##### cy

`number`

#### Returns

`void`

***

### setScale()

> **setScale**(`sx`, `sy`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:29943

The `setScale()` method of the SVGTransform interface sets the transform type to `SVG_TRANSFORM_SCALE`, with parameters `sx` and `sy` defining the scale amounts.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/SVGTransform/setScale)

#### Parameters

##### sx

`number`

##### sy

`number`

#### Returns

`void`

***

### setSkewX()

> **setSkewX**(`angle`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:29949

The `setSkewX()` method of the SVGTransform interface sets the transform type to `SVG_TRANSFORM_SKEWX`, with parameter `angle` defining the amount of skew along the X-axis.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/SVGTransform/setSkewX)

#### Parameters

##### angle

`number`

#### Returns

`void`

***

### setSkewY()

> **setSkewY**(`angle`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:29955

The `setSkewY()` method of the SVGTransform interface sets the transform type to `SVG_TRANSFORM_SKEWY`, with parameter `angle` defining the amount of skew along the Y-axis.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/SVGTransform/setSkewY)

#### Parameters

##### angle

`number`

#### Returns

`void`

***

### setTranslate()

> **setTranslate**(`tx`, `ty`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:29961

The `setTranslate()` method of the SVGTransform interface sets the transform type to `SVG_TRANSFORM_TRANSLATE`, with parameters `tx` and `ty` defining the translation amounts.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/SVGTransform/setTranslate)

#### Parameters

##### tx

`number`

##### ty

`number`

#### Returns

`void`
