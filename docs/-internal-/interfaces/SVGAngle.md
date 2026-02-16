[**KeyframeKit.js**](../../README.md)

***

[KeyframeKit.js](../../globals.md) / [\<internal\>](../README.md) / SVGAngle

# Interface: SVGAngle

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:26421

The `SVGAngle` interface is used to represent a value that can be an &lt;angle&gt; or &lt;number&gt; value.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/SVGAngle)

## Properties

### SVG\_ANGLETYPE\_DEG

> `readonly` **SVG\_ANGLETYPE\_DEG**: `2`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:26460

***

### SVG\_ANGLETYPE\_GRAD

> `readonly` **SVG\_ANGLETYPE\_GRAD**: `4`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:26462

***

### SVG\_ANGLETYPE\_RAD

> `readonly` **SVG\_ANGLETYPE\_RAD**: `3`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:26461

***

### SVG\_ANGLETYPE\_UNKNOWN

> `readonly` **SVG\_ANGLETYPE\_UNKNOWN**: `0`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:26458

***

### SVG\_ANGLETYPE\_UNSPECIFIED

> `readonly` **SVG\_ANGLETYPE\_UNSPECIFIED**: `1`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:26459

***

### unitType

> `readonly` **unitType**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:26427

The **`unitType`** property of the SVGAngle interface is one of the unit type constants and represents the units in which this angle's value is expressed.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/SVGAngle/unitType)

***

### value

> **value**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:26433

The `value` property of the SVGAngle interface represents the floating point value of the `<angle>` in degrees.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/SVGAngle/value)

***

### valueAsString

> **valueAsString**: `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:26439

The `valueAsString` property of the SVGAngle interface represents the angle's value as a string, in the units expressed by SVGAngle.unitType.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/SVGAngle/valueAsString)

***

### valueInSpecifiedUnits

> **valueInSpecifiedUnits**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:26445

The `valueInSpecifiedUnits` property of the SVGAngle interface represents the value of this angle as a number, in the units expressed by the angle's SVGAngle.unitType.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/SVGAngle/valueInSpecifiedUnits)

## Methods

### convertToSpecifiedUnits()

> **convertToSpecifiedUnits**(`unitType`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:26451

The `convertToSpecifiedUnits()` method of the SVGAngle interface allows you to convert the angle's value to the specified unit type.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/SVGAngle/convertToSpecifiedUnits)

#### Parameters

##### unitType

`number`

#### Returns

`void`

***

### newValueSpecifiedUnits()

> **newValueSpecifiedUnits**(`unitType`, `valueInSpecifiedUnits`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:26457

The `newValueSpecifiedUnits()` method of the SVGAngle interface sets the value to a number with an associated SVGAngle.unitType, thereby replacing the values for all of the attributes on the object.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/SVGAngle/newValueSpecifiedUnits)

#### Parameters

##### unitType

`number`

##### valueInSpecifiedUnits

`number`

#### Returns

`void`
