[**KeyframeKit.js**](../../README.md)

***

[KeyframeKit.js](../../globals.md) / [\<internal\>](../README.md) / CSSMathSum

# Interface: CSSMathSum

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:5202

The **`CSSMathSum`** interface of the CSS Typed Object Model API represents the result obtained by calling CSSNumericValue.add, CSSNumericValue.sub, or CSSNumericValue.toSum on CSSNumericValue.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSMathSum)

## Extends

- [`CSSMathValue`](CSSMathValue.md)

## Properties

### operator

> `readonly` **operator**: [`CSSMathOperator`](../type-aliases/CSSMathOperator.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:5227

The **`CSSMathValue.operator`** read-only property of the CSSMathValue interface indicates the operator that the current subtype represents.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSMathValue/operator)

#### Inherited from

[`CSSMathValue`](CSSMathValue.md).[`operator`](CSSMathValue.md#operator)

***

### values

> `readonly` **values**: `CSSNumericArray`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:5208

The **`CSSMathSum.values`** read-only property of the CSSMathSum interface returns a CSSNumericArray object which contains one or more CSSNumericValue objects.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSMathSum/values)

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

[`CSSMathValue`](CSSMathValue.md).[`add`](CSSMathValue.md#add)

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

[`CSSMathValue`](CSSMathValue.md).[`div`](CSSMathValue.md#div)

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

[`CSSMathValue`](CSSMathValue.md).[`equals`](CSSMathValue.md#equals)

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

[`CSSMathValue`](CSSMathValue.md).[`max`](CSSMathValue.md#max)

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

[`CSSMathValue`](CSSMathValue.md).[`min`](CSSMathValue.md#min)

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

[`CSSMathValue`](CSSMathValue.md).[`mul`](CSSMathValue.md#mul)

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

[`CSSMathValue`](CSSMathValue.md).[`sub`](CSSMathValue.md#sub)

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

[`CSSMathValue`](CSSMathValue.md).[`to`](CSSMathValue.md#to)

***

### toString()

> **toString**(): `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:7227

#### Returns

`string`

#### Inherited from

[`CSSMathValue`](CSSMathValue.md).[`toString`](CSSMathValue.md#tostring)

***

### toSum()

> **toSum**(...`units`): `CSSMathSum`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:5399

The **`toSum()`** method of the ```js-nolint toSum(units) ``` - `units` - : The units to convert to.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSNumericValue/toSum)

#### Parameters

##### units

...`string`[]

#### Returns

`CSSMathSum`

#### Inherited from

[`CSSMathValue`](CSSMathValue.md).[`toSum`](CSSMathValue.md#tosum)

***

### type()

> **type**(): [`CSSNumericType`](CSSNumericType.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:5405

The **`type()`** method of the `CSSNumericValue`, one of `angle`, `flex`, `frequency`, `length`, `resolution`, `percent`, `percentHint`, or `time`.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSNumericValue/type)

#### Returns

[`CSSNumericType`](CSSNumericType.md)

#### Inherited from

[`CSSMathValue`](CSSMathValue.md).[`type`](CSSMathValue.md#type)
