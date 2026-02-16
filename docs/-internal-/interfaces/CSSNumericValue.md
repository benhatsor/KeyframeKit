[**KeyframeKit.js**](../../README.md)

***

[KeyframeKit.js](../../globals.md) / [\<internal\>](../README.md) / CSSNumericValue

# Interface: CSSNumericValue

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:5345

The **`CSSNumericValue`** interface of the CSS Typed Object Model API represents operations that all numeric values can perform.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSNumericValue)

## Extends

- [`CSSStyleValue`](CSSStyleValue.md)

## Extended by

- [`CSSUnitValue`](CSSUnitValue.md)
- [`CSSMathValue`](CSSMathValue.md)

## Methods

### add()

> **add**(...`values`): `CSSNumericValue`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:5351

The **`add()`** method of the `CSSNumericValue`.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSNumericValue/add)

#### Parameters

##### values

...[`CSSNumberish`](../type-aliases/CSSNumberish.md)[]

#### Returns

`CSSNumericValue`

***

### div()

> **div**(...`values`): `CSSNumericValue`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:5357

The **`div()`** method of the supplied value.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSNumericValue/div)

#### Parameters

##### values

...[`CSSNumberish`](../type-aliases/CSSNumberish.md)[]

#### Returns

`CSSNumericValue`

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

***

### max()

> **max**(...`values`): `CSSNumericValue`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:5369

The **`max()`** method of the passed.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSNumericValue/max)

#### Parameters

##### values

...[`CSSNumberish`](../type-aliases/CSSNumberish.md)[]

#### Returns

`CSSNumericValue`

***

### min()

> **min**(...`values`): `CSSNumericValue`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:5375

The **`min()`** method of the values passed.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSNumericValue/min)

#### Parameters

##### values

...[`CSSNumberish`](../type-aliases/CSSNumberish.md)[]

#### Returns

`CSSNumericValue`

***

### mul()

> **mul**(...`values`): `CSSNumericValue`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:5381

The **`mul()`** method of the the supplied value.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSNumericValue/mul)

#### Parameters

##### values

...[`CSSNumberish`](../type-aliases/CSSNumberish.md)[]

#### Returns

`CSSNumericValue`

***

### sub()

> **sub**(...`values`): `CSSNumericValue`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:5387

The **`sub()`** method of the `CSSNumericValue`.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSNumericValue/sub)

#### Parameters

##### values

...[`CSSNumberish`](../type-aliases/CSSNumberish.md)[]

#### Returns

`CSSNumericValue`

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

***

### toString()

> **toString**(): `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:7227

#### Returns

`string`

#### Inherited from

[`CSSStyleValue`](CSSStyleValue.md).[`toString`](CSSStyleValue.md#tostring)

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

***

### type()

> **type**(): [`CSSNumericType`](CSSNumericType.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:5405

The **`type()`** method of the `CSSNumericValue`, one of `angle`, `flex`, `frequency`, `length`, `resolution`, `percent`, `percentHint`, or `time`.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSNumericValue/type)

#### Returns

[`CSSNumericType`](CSSNumericType.md)
