[**KeyframeKit.js**](../../README.md)

***

[KeyframeKit.js](../../globals.md) / [\<internal\>](../README.md) / CacheStorage

# Interface: CacheStorage

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:7516

The **`CacheStorage`** interface represents the storage for Cache objects.
Available only in secure contexts.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/CacheStorage)

## Methods

### delete()

> **delete**(`cacheName`): `Promise`\<`boolean`\>

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:7522

The **`delete()`** method of the CacheStorage interface finds the Cache object matching the `cacheName`, and if found, deletes the Cache object and returns a Promise that resolves to `true`.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/CacheStorage/delete)

#### Parameters

##### cacheName

`string`

#### Returns

`Promise`\<`boolean`\>

***

### has()

> **has**(`cacheName`): `Promise`\<`boolean`\>

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:7528

The **`has()`** method of the CacheStorage interface returns a Promise that resolves to `true` if a You can access `CacheStorage` through the Window.caches property in windows or through the WorkerGlobalScope.caches property in workers.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/CacheStorage/has)

#### Parameters

##### cacheName

`string`

#### Returns

`Promise`\<`boolean`\>

***

### keys()

> **keys**(): `Promise`\<`string`[]\>

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:7534

The **`keys()`** method of the CacheStorage interface returns a Promise that will resolve with an array containing strings corresponding to all of the named Cache objects tracked by the CacheStorage object in the order they were created.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/CacheStorage/keys)

#### Returns

`Promise`\<`string`[]\>

***

### match()

> **match**(`request`, `options?`): `Promise`\<[`Response`](Response.md) \| `undefined`\>

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:7540

The **`match()`** method of the CacheStorage interface checks if a given Request or URL string is a key for a stored Response.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/CacheStorage/match)

#### Parameters

##### request

[`URL`](URL.md) | [`RequestInfo`](../type-aliases/RequestInfo.md)

##### options?

[`MultiCacheQueryOptions`](MultiCacheQueryOptions.md)

#### Returns

`Promise`\<[`Response`](Response.md) \| `undefined`\>

***

### open()

> **open**(`cacheName`): `Promise`\<`Cache`\>

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:7546

The **`open()`** method of the the Cache object matching the `cacheName`.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/CacheStorage/open)

#### Parameters

##### cacheName

`string`

#### Returns

`Promise`\<`Cache`\>
