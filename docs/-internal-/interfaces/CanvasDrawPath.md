[**KeyframeKit.js**](../../README.md)

***

[KeyframeKit.js](../../globals.md) / [\<internal\>](../README.md) / CanvasDrawPath

# Interface: CanvasDrawPath

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:7597

## Extended by

- [`CanvasRenderingContext2D`](CanvasRenderingContext2D.md)
- [`OffscreenCanvasRenderingContext2D`](OffscreenCanvasRenderingContext2D.md)

## Methods

### beginPath()

> **beginPath**(): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:7599

[MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/beginPath)

#### Returns

`void`

***

### clip()

#### Call Signature

> **clip**(`fillRule?`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:7601

[MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/clip)

##### Parameters

###### fillRule?

[`CanvasFillRule`](../type-aliases/CanvasFillRule.md)

##### Returns

`void`

#### Call Signature

> **clip**(`path`, `fillRule?`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:7602

##### Parameters

###### path

[`Path2D`](Path2D.md)

###### fillRule?

[`CanvasFillRule`](../type-aliases/CanvasFillRule.md)

##### Returns

`void`

***

### fill()

#### Call Signature

> **fill**(`fillRule?`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:7604

[MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/fill)

##### Parameters

###### fillRule?

[`CanvasFillRule`](../type-aliases/CanvasFillRule.md)

##### Returns

`void`

#### Call Signature

> **fill**(`path`, `fillRule?`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:7605

##### Parameters

###### path

[`Path2D`](Path2D.md)

###### fillRule?

[`CanvasFillRule`](../type-aliases/CanvasFillRule.md)

##### Returns

`void`

***

### isPointInPath()

#### Call Signature

> **isPointInPath**(`x`, `y`, `fillRule?`): `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:7607

[MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/isPointInPath)

##### Parameters

###### x

`number`

###### y

`number`

###### fillRule?

[`CanvasFillRule`](../type-aliases/CanvasFillRule.md)

##### Returns

`boolean`

#### Call Signature

> **isPointInPath**(`path`, `x`, `y`, `fillRule?`): `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:7608

##### Parameters

###### path

[`Path2D`](Path2D.md)

###### x

`number`

###### y

`number`

###### fillRule?

[`CanvasFillRule`](../type-aliases/CanvasFillRule.md)

##### Returns

`boolean`

***

### isPointInStroke()

#### Call Signature

> **isPointInStroke**(`x`, `y`): `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:7610

[MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/isPointInStroke)

##### Parameters

###### x

`number`

###### y

`number`

##### Returns

`boolean`

#### Call Signature

> **isPointInStroke**(`path`, `x`, `y`): `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:7611

##### Parameters

###### path

[`Path2D`](Path2D.md)

###### x

`number`

###### y

`number`

##### Returns

`boolean`

***

### stroke()

#### Call Signature

> **stroke**(): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:7613

[MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/stroke)

##### Returns

`void`

#### Call Signature

> **stroke**(`path`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:7614

##### Parameters

###### path

[`Path2D`](Path2D.md)

##### Returns

`void`
