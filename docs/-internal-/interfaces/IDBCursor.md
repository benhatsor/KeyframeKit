[**KeyframeKit.js**](../../README.md)

***

[KeyframeKit.js](../../globals.md) / [\<internal\>](../README.md) / IDBCursor

# Interface: IDBCursor

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:17912

The **`IDBCursor`** interface of the IndexedDB API represents a cursor for traversing or iterating over multiple records in a database.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBCursor)

## Extended by

- [`IDBCursorWithValue`](IDBCursorWithValue.md)

## Properties

### direction

> `readonly` **direction**: [`IDBCursorDirection`](../type-aliases/IDBCursorDirection.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:17918

The **`direction`** read-only property of the direction of traversal of the cursor (set using section below for possible values.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBCursor/direction)

***

### key

> `readonly` **key**: [`IDBValidKey`](../type-aliases/IDBValidKey.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:17924

The **`key`** read-only property of the position.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBCursor/key)

***

### primaryKey

> `readonly` **primaryKey**: [`IDBValidKey`](../type-aliases/IDBValidKey.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:17930

The **`primaryKey`** read-only property of the cursor is currently being iterated or has iterated outside its range, this is set to undefined.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBCursor/primaryKey)

***

### request

> `readonly` **request**: [`IDBRequest`](IDBRequest.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:17936

The **`request`** read-only property of the IDBCursor interface returns the IDBRequest used to obtain the cursor.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBCursor/request)

***

### source

> `readonly` **source**: `IDBObjectStore` \| [`IDBIndex`](IDBIndex.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:17942

The **`source`** read-only property of the null or throws an exception, even if the cursor is currently being iterated, has iterated past its end, or its transaction is not active.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBCursor/source)

## Methods

### advance()

> **advance**(`count`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:17948

The **`advance()`** method of the IDBCursor interface sets the number of times a cursor should move its position forward.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBCursor/advance)

#### Parameters

##### count

`number`

#### Returns

`void`

***

### continue()

> **continue**(`key?`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:17954

The **`continue()`** method of the IDBCursor interface advances the cursor to the next position along its direction, to the item whose key matches the optional key parameter.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBCursor/continue)

#### Parameters

##### key?

[`IDBValidKey`](../type-aliases/IDBValidKey.md)

#### Returns

`void`

***

### continuePrimaryKey()

> **continuePrimaryKey**(`key`, `primaryKey`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:17960

The **`continuePrimaryKey()`** method of the matches the key parameter as well as whose primary key matches the primary key parameter.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBCursor/continuePrimaryKey)

#### Parameters

##### key

[`IDBValidKey`](../type-aliases/IDBValidKey.md)

##### primaryKey

[`IDBValidKey`](../type-aliases/IDBValidKey.md)

#### Returns

`void`

***

### delete()

> **delete**(): [`IDBRequest`](IDBRequest.md)\<`undefined`\>

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:17966

The **`delete()`** method of the IDBCursor interface returns an IDBRequest object, and, in a separate thread, deletes the record at the cursor's position, without changing the cursor's position.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBCursor/delete)

#### Returns

[`IDBRequest`](IDBRequest.md)\<`undefined`\>

***

### update()

> **update**(`value`): [`IDBRequest`](IDBRequest.md)\<[`IDBValidKey`](../type-aliases/IDBValidKey.md)\>

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:17972

The **`update()`** method of the IDBCursor interface returns an IDBRequest object, and, in a separate thread, updates the value at the current position of the cursor in the object store.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBCursor/update)

#### Parameters

##### value

`any`

#### Returns

[`IDBRequest`](IDBRequest.md)\<[`IDBValidKey`](../type-aliases/IDBValidKey.md)\>
