[**KeyframeKit.js**](../../README.md)

***

[KeyframeKit.js](../../globals.md) / [\<internal\>](../README.md) / IDBKeyRange

# Interface: IDBKeyRange

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:18198

The **`IDBKeyRange`** interface of the IndexedDB API represents a continuous interval over some data type that is used for keys.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBKeyRange)

## Properties

### lower

> `readonly` **lower**: `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:18204

The **`lower`** read-only property of the The lower bound of the key range (can be any type.) The following example illustrates how you'd use a key range.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBKeyRange/lower)

***

### lowerOpen

> `readonly` **lowerOpen**: `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:18210

The **`lowerOpen`** read-only property of the lower-bound value is included in the key range.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBKeyRange/lowerOpen)

***

### upper

> `readonly` **upper**: `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:18216

The **`upper`** read-only property of the The upper bound of the key range (can be any type.) The following example illustrates how you'd use a key range.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBKeyRange/upper)

***

### upperOpen

> `readonly` **upperOpen**: `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:18222

The **`upperOpen`** read-only property of the upper-bound value is included in the key range.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBKeyRange/upperOpen)

## Methods

### includes()

> **includes**(`key`): `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:18228

The `includes()` method of the IDBKeyRange interface returns a boolean indicating whether a specified key is inside the key range.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBKeyRange/includes)

#### Parameters

##### key

`any`

#### Returns

`boolean`
