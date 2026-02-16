[**KeyframeKit.js**](../../README.md)

***

[KeyframeKit.js](../../globals.md) / [\<internal\>](../README.md) / CSSMathValue

# Interface: CSSMathValue

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:5221

The **`CSSMathValue`** interface of the CSS Typed Object Model API a base class for classes representing complex numeric values.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSMathValue)

## Extends

- [`CSSNumericValue`](CSSNumericValue.md)

## Extended by

- [`CSSMathSum`](CSSMathSum.md)

## Properties

### operator

> `readonly` **operator**: [`CSSMathOperator`](../type-aliases/CSSMathOperator.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:5227

The **`CSSMathValue.operator`** read-only property of the CSSMathValue interface indicates the operator that the current subtype represents.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSMathValue/operator)

## Methods

### add()

> **add**(...`values`): [`CSSNumericValue`](CSSNumericValue.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:5351

The **`add()`** method of the `CSSNumericValue`.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSNumericValue/add)

#### Parameters

##### values

...[`CSSNumberish`](../type-aliases/CSSNumberish.md)[]

#### Returns

[`CSSNumericValue`](CSSNumericValue.md)

#### Inherited from

[`CSSNumericValue`](CSSNumericValue.md).[`add`](CSSNumericValue.md#add)

***

### div()

> **div**(...`values`): [`CSSNumericValue`](CSSNumericValue.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:5357

The **`div()`** method of the supplied value.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSNumericValue/div)

#### Parameters

##### values

...[`CSSNumberish`](../type-aliases/CSSNumberish.md)[]

#### Returns

[`CSSNumericValue`](CSSNumericValue.md)

#### Inherited from

[`CSSNumericValue`](CSSNumericValue.md).[`div`](CSSNumericValue.md#div)

***

### equals()

> **equals**(...`value`): `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:5363

The **`equals()`** method of the value are strictly equal.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSNumericValue/equals)

#### Parameters

##### value

...[`CSSNumberish`](../type-aliases/CSSNumberish.md)[]

#### Returns

`boolean`

#### Inherited from

[`CSSNumericValue`](CSSNumericValue.md).[`equals`](CSSNumericValue.md#equals)

***

### max()

> **max**(...`values`): [`CSSNumericValue`](CSSNumericValue.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:5369

The **`max()`** method of the passed.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSNumericValue/max)

#### Parameters

##### values

...[`CSSNumberish`](../type-aliases/CSSNumberish.md)[]

#### Returns

[`CSSNumericValue`](CSSNumericValue.md)

#### Inherited from

[`CSSNumericValue`](CSSNumericValue.md).[`max`](CSSNumericValue.md#max)

***

### min()

> **min**(...`values`): [`CSSNumericValue`](CSSNumericValue.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:5375

The **`min()`** method of the values passed.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSNumericValue/min)

#### Parameters

##### values

...[`CSSNumberish`](../type-aliases/CSSNumberish.md)[]

#### Returns

[`CSSNumericValue`](CSSNumericValue.md)

#### Inherited from

[`CSSNumericValue`](CSSNumericValue.md).[`min`](CSSNumericValue.md#min)

***

### mul()

> **mul**(...`values`): [`CSSNumericValue`](CSSNumericValue.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:5381

The **`mul()`** method of the the supplied value.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSNumericValue/mul)

#### Parameters

##### values

...[`CSSNumberish`](../type-aliases/CSSNumberish.md)[]

#### Returns

[`CSSNumericValue`](CSSNumericValue.md)

#### Inherited from

[`CSSNumericValue`](CSSNumericValue.md).[`mul`](CSSNumericValue.md#mul)

***

### sub()

> **sub**(...`values`): [`CSSNumericValue`](CSSNumericValue.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:5387

The **`sub()`** method of the `CSSNumericValue`.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSNumericValue/sub)

#### Parameters

##### values

...[`CSSNumberish`](../type-aliases/CSSNumberish.md)[]

#### Returns

[`CSSNumericValue`](CSSNumericValue.md)

#### Inherited from

[`CSSNumericValue`](CSSNumericValue.md).[`sub`](CSSNumericValue.md#sub)

***

### to()

> **to**(`unit`): [`CSSUnitValue`](CSSUnitValue.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:5393

The **`to()`** method of the another.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSNumericValue/to)

#### Parameters

##### unit

`string`

#### Returns

[`CSSUnitValue`](CSSUnitValue.md)

#### Inherited from

[`CSSNumericValue`](CSSNumericValue.md).[`to`](CSSNumericValue.md#to)

***

### toString()

> **toString**(): `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:7227

#### Returns

`string`

#### Inherited from

[`CSSNumericValue`](CSSNumericValue.md).[`toString`](CSSNumericValue.md#tostring)

***

### toSum()

> **toSum**(...`units`): [`CSSMathSum`](CSSMathSum.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:5399

The **`toSum()`** method of the ```js-nolint toSum(units) ``` - `units` - : The units to convert to.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSNumericValue/toSum)

#### Parameters

##### units

...`string`[]

#### Returns

[`CSSMathSum`](CSSMathSum.md)

#### Inherited from

[`CSSNumericValue`](CSSNumericValue.md).[`toSum`](CSSNumericValue.md#tosum)

***

### type()

> **type**(): [`CSSNumericType`](CSSNumericType.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:5405

The **`type()`** method of the `CSSNumericValue`, one of `angle`, `flex`, `frequency`, `length`, `resolution`, `percent`, `percentHint`, or `time`.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSNumericValue/type)

#### Returns

[`CSSNumericType`](CSSNumericType.md)

#### Inherited from

[`CSSNumericValue`](CSSNumericValue.md).[`type`](CSSNumericValue.md#type)
