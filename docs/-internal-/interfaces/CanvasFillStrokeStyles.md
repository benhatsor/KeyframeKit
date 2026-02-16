[**KeyframeKit.js**](../../README.md)

***

[KeyframeKit.js](../../globals.md) / [\<internal\>](../README.md) / CanvasFillStrokeStyles

# Interface: CanvasFillStrokeStyles

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:7617

## Extended by

- [`CanvasRenderingContext2D`](CanvasRenderingContext2D.md)
- [`OffscreenCanvasRenderingContext2D`](OffscreenCanvasRenderingContext2D.md)

## Properties

### fillStyle

> **fillStyle**: `string` \| [`CanvasGradient`](CanvasGradient.md) \| [`CanvasPattern`](CanvasPattern.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:7619

[MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/fillStyle)

***

### strokeStyle

> **strokeStyle**: `string` \| [`CanvasGradient`](CanvasGradient.md) \| [`CanvasPattern`](CanvasPattern.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:7621

[MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/strokeStyle)

## Methods

### createConicGradient()

> **createConicGradient**(`startAngle`, `x`, `y`): [`CanvasGradient`](CanvasGradient.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:7623

[MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/createConicGradient)

#### Parameters

##### startAngle

`number`

##### x

`number`

##### y

`number`

#### Returns

[`CanvasGradient`](CanvasGradient.md)

***

### createLinearGradient()

> **createLinearGradient**(`x0`, `y0`, `x1`, `y1`): [`CanvasGradient`](CanvasGradient.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:7625

[MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/createLinearGradient)

#### Parameters

##### x0

`number`

##### y0

`number`

##### x1

`number`

##### y1

`number`

#### Returns

[`CanvasGradient`](CanvasGradient.md)

***

### createPattern()

> **createPattern**(`image`, `repetition`): [`CanvasPattern`](CanvasPattern.md) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:7627

[MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/createPattern)

#### Parameters

##### image

[`CanvasImageSource`](../type-aliases/CanvasImageSource.md)

##### repetition

`string` | `null`

#### Returns

[`CanvasPattern`](CanvasPattern.md) \| `null`

***

### createRadialGradient()

> **createRadialGradient**(`x0`, `y0`, `r0`, `x1`, `y1`, `r1`): [`CanvasGradient`](CanvasGradient.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:7629

[MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/createRadialGradient)

#### Parameters

##### x0

`number`

##### y0

`number`

##### r0

`number`

##### x1

`number`

##### y1

`number`

##### r1

`number`

#### Returns

[`CanvasGradient`](CanvasGradient.md)
