[**KeyframeKit.js**](../../README.md)

***

[KeyframeKit.js](../../globals.md) / [\<internal\>](../README.md) / IDBIndex

# Interface: IDBIndex

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:18113

`IDBIndex` interface of the IndexedDB API provides asynchronous access to an index in a database.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBIndex)

## Properties

### keyPath

> `readonly` **keyPath**: `string` \| `string`[]

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:18119

The **`keyPath`** property of the IDBIndex interface returns the key path of the current index.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBIndex/keyPath)

***

### multiEntry

> `readonly` **multiEntry**: `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:18125

The **`multiEntry`** read-only property of the behaves when the result of evaluating the index's key path yields an array.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBIndex/multiEntry)

***

### name

> **name**: `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:18131

The **`name`** property of the IDBIndex interface contains a string which names the index.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBIndex/name)

***

### objectStore

> `readonly` **objectStore**: `IDBObjectStore`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:18137

The **`objectStore`** property of the IDBIndex interface returns the object store referenced by the current index.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBIndex/objectStore)

***

### unique

> `readonly` **unique**: `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:18143

The **`unique`** read-only property returns a boolean that states whether the index allows duplicate keys.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBIndex/unique)

## Methods

### count()

> **count**(`query?`): [`IDBRequest`](IDBRequest.md)\<`number`\>

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:18149

The **`count()`** method of the IDBIndex interface returns an IDBRequest object, and in a separate thread, returns the number of records within a key range.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBIndex/count)

#### Parameters

##### query?

[`IDBValidKey`](../type-aliases/IDBValidKey.md) | [`IDBKeyRange`](IDBKeyRange.md)

#### Returns

[`IDBRequest`](IDBRequest.md)\<`number`\>

***

### get()

> **get**(`query`): [`IDBRequest`](IDBRequest.md)\<`any`\>

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:18155

The **`get()`** method of the IDBIndex interface returns an IDBRequest object, and, in a separate thread, finds either the value in the referenced object store that corresponds to the given key or the first corresponding value, if `key` is set to an If a value is found, then a structured clone of it is created and set as the `result` of the request object: this returns the record the key is associated with.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBIndex/get)

#### Parameters

##### query

[`IDBValidKey`](../type-aliases/IDBValidKey.md) | [`IDBKeyRange`](IDBKeyRange.md)

#### Returns

[`IDBRequest`](IDBRequest.md)\<`any`\>

***

### getAll()

> **getAll**(`query?`, `count?`): [`IDBRequest`](IDBRequest.md)\<`any`[]\>

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:18161

The **`getAll()`** method of the IDBIndex interface retrieves all objects that are inside the index.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBIndex/getAll)

#### Parameters

##### query?

[`IDBValidKey`](../type-aliases/IDBValidKey.md) | [`IDBKeyRange`](IDBKeyRange.md) | `null`

##### count?

`number`

#### Returns

[`IDBRequest`](IDBRequest.md)\<`any`[]\>

***

### getAllKeys()

> **getAllKeys**(`query?`, `count?`): [`IDBRequest`](IDBRequest.md)\<[`IDBValidKey`](../type-aliases/IDBValidKey.md)[]\>

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:18167

The **`getAllKeys()`** method of the IDBIndex interface asynchronously retrieves the primary keys of all objects inside the index, setting them as the `result` of the request object.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBIndex/getAllKeys)

#### Parameters

##### query?

[`IDBValidKey`](../type-aliases/IDBValidKey.md) | [`IDBKeyRange`](IDBKeyRange.md) | `null`

##### count?

`number`

#### Returns

[`IDBRequest`](IDBRequest.md)\<[`IDBValidKey`](../type-aliases/IDBValidKey.md)[]\>

***

### getKey()

> **getKey**(`query`): [`IDBRequest`](IDBRequest.md)\<[`IDBValidKey`](../type-aliases/IDBValidKey.md) \| `undefined`\>

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:18173

The **`getKey()`** method of the IDBIndex interface returns an IDBRequest object, and, in a separate thread, finds either the primary key that corresponds to the given key in this index or the first corresponding primary key, if `key` is set to an If a primary key is found, it is set as the `result` of the request object.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBIndex/getKey)

#### Parameters

##### query

[`IDBValidKey`](../type-aliases/IDBValidKey.md) | [`IDBKeyRange`](IDBKeyRange.md)

#### Returns

[`IDBRequest`](IDBRequest.md)\<[`IDBValidKey`](../type-aliases/IDBValidKey.md) \| `undefined`\>

***

### openCursor()

> **openCursor**(`query?`, `direction?`): [`IDBRequest`](IDBRequest.md)\<[`IDBCursorWithValue`](IDBCursorWithValue.md) \| `null`\>

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:18179

The **`openCursor()`** method of the IDBIndex interface returns an IDBRequest object, and, in a separate thread, creates a cursor over the specified key range.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBIndex/openCursor)

#### Parameters

##### query?

[`IDBValidKey`](../type-aliases/IDBValidKey.md) | [`IDBKeyRange`](IDBKeyRange.md) | `null`

##### direction?

[`IDBCursorDirection`](../type-aliases/IDBCursorDirection.md)

#### Returns

[`IDBRequest`](IDBRequest.md)\<[`IDBCursorWithValue`](IDBCursorWithValue.md) \| `null`\>

***

### openKeyCursor()

> **openKeyCursor**(`query?`, `direction?`): [`IDBRequest`](IDBRequest.md)\<[`IDBCursor`](IDBCursor.md) \| `null`\>

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:18185

The **`openKeyCursor()`** method of the a separate thread, creates a cursor over the specified key range, as arranged by this index.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBIndex/openKeyCursor)

#### Parameters

##### query?

[`IDBValidKey`](../type-aliases/IDBValidKey.md) | [`IDBKeyRange`](IDBKeyRange.md) | `null`

##### direction?

[`IDBCursorDirection`](../type-aliases/IDBCursorDirection.md)

#### Returns

[`IDBRequest`](IDBRequest.md)\<[`IDBCursor`](IDBCursor.md) \| `null`\>
