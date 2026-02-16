[**KeyframeKit.js**](../../README.md)

***

[KeyframeKit.js](../../globals.md) / [\<internal\>](../README.md) / Path2D

# Interface: Path2D

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:22740

The **`Path2D`** interface of the Canvas 2D API is used to declare a path that can then be used on a CanvasRenderingContext2D object.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Path2D)

## Extends

- `CanvasPath`

## Methods

### addPath()

> **addPath**(`path`, `transform?`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:22746

The **`Path2D.addPath()`** method of the Canvas 2D API adds one Path2D object to another `Path2D` object.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Path2D/addPath)

#### Parameters

##### path

`Path2D`

##### transform?

[`DOMMatrix2DInit`](DOMMatrix2DInit.md)

#### Returns

`void`

***

### arc()

> **arc**(`x`, `y`, `radius`, `startAngle`, `endAngle`, `counterclockwise?`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:7676

[MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/arc)

#### Parameters

##### x

`number`

##### y

`number`

##### radius

`number`

##### startAngle

`number`

##### endAngle

`number`

##### counterclockwise?

`boolean`

#### Returns

`void`

#### Inherited from

`CanvasPath.arc`

***

### arcTo()

> **arcTo**(`x1`, `y1`, `x2`, `y2`, `radius`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:7678

[MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/arcTo)

#### Parameters

##### x1

`number`

##### y1

`number`

##### x2

`number`

##### y2

`number`

##### radius

`number`

#### Returns

`void`

#### Inherited from

`CanvasPath.arcTo`

***

### bezierCurveTo()

> **bezierCurveTo**(`cp1x`, `cp1y`, `cp2x`, `cp2y`, `x`, `y`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:7680

[MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/bezierCurveTo)

#### Parameters

##### cp1x

`number`

##### cp1y

`number`

##### cp2x

`number`

##### cp2y

`number`

##### x

`number`

##### y

`number`

#### Returns

`void`

#### Inherited from

`CanvasPath.bezierCurveTo`

***

### closePath()

> **closePath**(): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:7682

[MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/closePath)

#### Returns

`void`

#### Inherited from

`CanvasPath.closePath`

***

### ellipse()

> **ellipse**(`x`, `y`, `radiusX`, `radiusY`, `rotation`, `startAngle`, `endAngle`, `counterclockwise?`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:7684

[MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/ellipse)

#### Parameters

##### x

`number`

##### y

`number`

##### radiusX

`number`

##### radiusY

`number`

##### rotation

`number`

##### startAngle

`number`

##### endAngle

`number`

##### counterclockwise?

`boolean`

#### Returns

`void`

#### Inherited from

`CanvasPath.ellipse`

***

### lineTo()

> **lineTo**(`x`, `y`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:7686

[MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/lineTo)

#### Parameters

##### x

`number`

##### y

`number`

#### Returns

`void`

#### Inherited from

`CanvasPath.lineTo`

***

### moveTo()

> **moveTo**(`x`, `y`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:7688

[MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/moveTo)

#### Parameters

##### x

`number`

##### y

`number`

#### Returns

`void`

#### Inherited from

`CanvasPath.moveTo`

***

### quadraticCurveTo()

> **quadraticCurveTo**(`cpx`, `cpy`, `x`, `y`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:7690

[MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/quadraticCurveTo)

#### Parameters

##### cpx

`number`

##### cpy

`number`

##### x

`number`

##### y

`number`

#### Returns

`void`

#### Inherited from

`CanvasPath.quadraticCurveTo`

***

### rect()

> **rect**(`x`, `y`, `w`, `h`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:7692

[MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/rect)

#### Parameters

##### x

`number`

##### y

`number`

##### w

`number`

##### h

`number`

#### Returns

`void`

#### Inherited from

`CanvasPath.rect`

***

### roundRect()

#### Call Signature

> **roundRect**(`x`, `y`, `w`, `h`, `radii?`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:7694

[MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/roundRect)

##### Parameters

###### x

`number`

###### y

`number`

###### w

`number`

###### h

`number`

###### radii?

`number` | [`DOMPointInit`](DOMPointInit.md) | (`number` \| [`DOMPointInit`](DOMPointInit.md))[]

##### Returns

`void`

##### Inherited from

`CanvasPath.roundRect`

#### Call Signature

> **roundRect**(`x`, `y`, `w`, `h`, `radii?`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.iterable.d.ts:94

[MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/roundRect)

##### Parameters

###### x

`number`

###### y

`number`

###### w

`number`

###### h

`number`

###### radii?

`number` | [`DOMPointInit`](DOMPointInit.md) | [`Iterable`](Iterable.md)\<`number` \| [`DOMPointInit`](DOMPointInit.md), `any`, `any`\>

##### Returns

`void`

##### Inherited from

`CanvasPath.roundRect`
