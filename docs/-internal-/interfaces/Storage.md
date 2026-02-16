[**KeyframeKit.js**](../../README.md)

***

[KeyframeKit.js](../../globals.md) / [\<internal\>](../README.md) / Storage

# Interface: Storage

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:31326

The **`Storage`** interface of the Web Storage API provides access to a particular domain's session or local storage.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Storage)

## Indexable

\[`name`: `string`\]: `any`

## Properties

### length

> `readonly` **length**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:31332

The **`length`** read-only property of the `Storage` object.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Storage/length)

## Methods

### clear()

> **clear**(): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:31338

The **`clear()`** method of the Storage interface clears all keys stored in a given `Storage` object.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Storage/clear)

#### Returns

`void`

***

### getItem()

> **getItem**(`key`): `string` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:31344

The **`getItem()`** method of the Storage interface, when passed a key name, will return that key's value, or `null` if the key does not exist, in the given `Storage` object.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Storage/getItem)

#### Parameters

##### key

`string`

#### Returns

`string` \| `null`

***

### key()

> **key**(`index`): `string` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:31350

The **`key()`** method of the Storage interface, when passed a number n, returns the name of the nth key in a given `Storage` object.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Storage/key)

#### Parameters

##### index

`number`

#### Returns

`string` \| `null`

***

### removeItem()

> **removeItem**(`key`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:31356

The **`removeItem()`** method of the Storage interface, when passed a key name, will remove that key from the given `Storage` object if it exists.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Storage/removeItem)

#### Parameters

##### key

`string`

#### Returns

`void`

***

### setItem()

> **setItem**(`key`, `value`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:31362

The **`setItem()`** method of the Storage interface, when passed a key name and value, will add that key to the given `Storage` object, or update that key's value if it already exists.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Storage/setItem)

#### Parameters

##### key

`string`

##### value

`string`

#### Returns

`void`
