[**KeyframeKit.js**](../../README.md)

***

[KeyframeKit.js](../../globals.md) / [\<internal\>](../README.md) / SVGLength

# Interface: SVGLength

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:28467

The **`SVGLength`** interface correspond to the \<length> basic data type.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/SVGLength)

## Properties

### SVG\_LENGTHTYPE\_CM

> `readonly` **SVG\_LENGTHTYPE\_CM**: `6`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:28510

***

### SVG\_LENGTHTYPE\_EMS

> `readonly` **SVG\_LENGTHTYPE\_EMS**: `3`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:28507

***

### SVG\_LENGTHTYPE\_EXS

> `readonly` **SVG\_LENGTHTYPE\_EXS**: `4`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:28508

***

### SVG\_LENGTHTYPE\_IN

> `readonly` **SVG\_LENGTHTYPE\_IN**: `8`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:28512

***

### SVG\_LENGTHTYPE\_MM

> `readonly` **SVG\_LENGTHTYPE\_MM**: `7`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:28511

***

### SVG\_LENGTHTYPE\_NUMBER

> `readonly` **SVG\_LENGTHTYPE\_NUMBER**: `1`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:28505

***

### SVG\_LENGTHTYPE\_PC

> `readonly` **SVG\_LENGTHTYPE\_PC**: `10`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:28514

***

### SVG\_LENGTHTYPE\_PERCENTAGE

> `readonly` **SVG\_LENGTHTYPE\_PERCENTAGE**: `2`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:28506

***

### SVG\_LENGTHTYPE\_PT

> `readonly` **SVG\_LENGTHTYPE\_PT**: `9`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:28513

***

### SVG\_LENGTHTYPE\_PX

> `readonly` **SVG\_LENGTHTYPE\_PX**: `5`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:28509

***

### SVG\_LENGTHTYPE\_UNKNOWN

> `readonly` **SVG\_LENGTHTYPE\_UNKNOWN**: `0`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:28504

***

### unitType

> `readonly` **unitType**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:28473

The **`unitType`** property of the SVGLength interface that represents type of the value as specified by one of the `SVG_LENGTHTYPE_*` constants defined on this interface.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/SVGLength/unitType)

***

### value

> **value**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:28479

The `value` property of the SVGLength interface represents the floating point value of the \<length> in user units.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/SVGLength/value)

***

### valueAsString

> **valueAsString**: `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:28485

The `valueAsString` property of the SVGLength interface represents the \<length>'s value as a string, in the units expressed by SVGLength.unitType.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/SVGLength/valueAsString)

***

### valueInSpecifiedUnits

> **valueInSpecifiedUnits**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:28491

The `valueInSpecifiedUnits` property of the SVGLength interface represents floating point value, in the units expressed by SVGLength.unitType.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/SVGLength/valueInSpecifiedUnits)

## Methods

### convertToSpecifiedUnits()

> **convertToSpecifiedUnits**(`unitType`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:28497

The `convertToSpecifiedUnits()` method of the SVGLength interface allows you to convert the length's value to the specified unit type.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/SVGLength/convertToSpecifiedUnits)

#### Parameters

##### unitType

`number`

#### Returns

`void`

***

### newValueSpecifiedUnits()

> **newValueSpecifiedUnits**(`unitType`, `valueInSpecifiedUnits`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:28503

The `newValueSpecifiedUnits()` method of the SVGLength interface resets the value as a number with an associated SVGLength.unitType, thereby replacing the values for all of the attributes on the object.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/SVGLength/newValueSpecifiedUnits)

#### Parameters

##### unitType

`number`

##### valueInSpecifiedUnits

`number`

#### Returns

`void`
