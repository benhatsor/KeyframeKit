[**KeyframeKit.js**](../../README.md)

***

[KeyframeKit.js](../../globals.md) / [\<internal\>](../README.md) / WindowOrWorkerGlobalScope

# Interface: WindowOrWorkerGlobalScope

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36886

## Extended by

- [`Window`](Window.md)

## Properties

### caches

> `readonly` **caches**: [`CacheStorage`](CacheStorage.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36892

Available only in secure contexts.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/caches)

***

### crossOriginIsolated

> `readonly` **crossOriginIsolated**: `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36894

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/crossOriginIsolated)

***

### crypto

> `readonly` **crypto**: [`Crypto`](Crypto.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36896

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/crypto)

***

### indexedDB

> `readonly` **indexedDB**: [`IDBFactory`](IDBFactory.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36898

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/indexedDB)

***

### isSecureContext

> `readonly` **isSecureContext**: `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36900

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/isSecureContext)

***

### origin

> `readonly` **origin**: `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36902

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/origin)

***

### performance

> `readonly` **performance**: [`Performance`](Performance.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36904

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/performance)

## Methods

### atob()

> **atob**(`data`): `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36906

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/atob)

#### Parameters

##### data

`string`

#### Returns

`string`

***

### btoa()

> **btoa**(`data`): `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36908

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/btoa)

#### Parameters

##### data

`string`

#### Returns

`string`

***

### clearInterval()

> **clearInterval**(`id`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36910

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/clearInterval)

#### Parameters

##### id

`number` | `undefined`

#### Returns

`void`

***

### clearTimeout()

> **clearTimeout**(`id`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36912

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/clearTimeout)

#### Parameters

##### id

`number` | `undefined`

#### Returns

`void`

***

### createImageBitmap()

#### Call Signature

> **createImageBitmap**(`image`, `options?`): `Promise`\<[`ImageBitmap`](ImageBitmap.md)\>

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36914

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/createImageBitmap)

##### Parameters

###### image

[`ImageBitmapSource`](../type-aliases/ImageBitmapSource.md)

###### options?

[`ImageBitmapOptions`](ImageBitmapOptions.md)

##### Returns

`Promise`\<[`ImageBitmap`](ImageBitmap.md)\>

#### Call Signature

> **createImageBitmap**(`image`, `sx`, `sy`, `sw`, `sh`, `options?`): `Promise`\<[`ImageBitmap`](ImageBitmap.md)\>

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36915

##### Parameters

###### image

[`ImageBitmapSource`](../type-aliases/ImageBitmapSource.md)

###### sx

`number`

###### sy

`number`

###### sw

`number`

###### sh

`number`

###### options?

[`ImageBitmapOptions`](ImageBitmapOptions.md)

##### Returns

`Promise`\<[`ImageBitmap`](ImageBitmap.md)\>

***

### fetch()

> **fetch**(`input`, `init?`): `Promise`\<[`Response`](Response.md)\>

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36917

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/fetch)

#### Parameters

##### input

[`URL`](URL.md) | [`RequestInfo`](../type-aliases/RequestInfo.md)

##### init?

[`RequestInit`](RequestInit.md)

#### Returns

`Promise`\<[`Response`](Response.md)\>

***

### queueMicrotask()

> **queueMicrotask**(`callback`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36919

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/queueMicrotask)

#### Parameters

##### callback

[`VoidFunction`](VoidFunction.md)

#### Returns

`void`

***

### reportError()

> **reportError**(`e`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36921

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/reportError)

#### Parameters

##### e

`any`

#### Returns

`void`

***

### setInterval()

> **setInterval**(`handler`, `timeout?`, ...`arguments`): `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36923

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/setInterval)

#### Parameters

##### handler

[`TimerHandler`](../type-aliases/TimerHandler.md)

##### timeout?

`number`

##### arguments

...`any`[]

#### Returns

`number`

***

### setTimeout()

> **setTimeout**(`handler`, `timeout?`, ...`arguments`): `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36925

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/setTimeout)

#### Parameters

##### handler

[`TimerHandler`](../type-aliases/TimerHandler.md)

##### timeout?

`number`

##### arguments

...`any`[]

#### Returns

`number`

***

### structuredClone()

> **structuredClone**\<`T`\>(`value`, `options?`): `T`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36927

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/structuredClone)

#### Type Parameters

##### T

`T` = `any`

#### Parameters

##### value

`T`

##### options?

[`StructuredSerializeOptions`](StructuredSerializeOptions.md)

#### Returns

`T`
