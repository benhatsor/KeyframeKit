[**KeyframeKit.js**](../../README.md)

***

[KeyframeKit.js](../../globals.md) / [\<internal\>](../README.md) / IDBFactory

# Interface: IDBFactory

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:18076

The **`IDBFactory`** interface of the IndexedDB API lets applications asynchronously access the indexed databases.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBFactory)

## Methods

### cmp()

> **cmp**(`first`, `second`): `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:18082

The **`cmp()`** method of the IDBFactory interface compares two values as keys to determine equality and ordering for IndexedDB operations, such as storing and iterating.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBFactory/cmp)

#### Parameters

##### first

`any`

##### second

`any`

#### Returns

`number`

***

### databases()

> **databases**(): `Promise`\<[`IDBDatabaseInfo`](IDBDatabaseInfo.md)[]\>

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:18088

The **`databases`** method of the IDBFactory interface returns a Promise that fulfills with an array of objects containing the name and version of all the available databases.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBFactory/databases)

#### Returns

`Promise`\<[`IDBDatabaseInfo`](IDBDatabaseInfo.md)[]\>

***

### deleteDatabase()

> **deleteDatabase**(`name`): [`IDBOpenDBRequest`](IDBOpenDBRequest.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:18094

The **`deleteDatabase()`** method of the returns an IDBOpenDBRequest object immediately, and performs the deletion operation asynchronously.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBFactory/deleteDatabase)

#### Parameters

##### name

`string`

#### Returns

[`IDBOpenDBRequest`](IDBOpenDBRequest.md)

***

### open()

> **open**(`name`, `version?`): [`IDBOpenDBRequest`](IDBOpenDBRequest.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:18100

The **`open()`** method of the IDBFactory interface requests opening a connection to a database.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBFactory/open)

#### Parameters

##### name

`string`

##### version?

`number`

#### Returns

[`IDBOpenDBRequest`](IDBOpenDBRequest.md)
