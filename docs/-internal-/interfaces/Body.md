[**KeyframeKit.js**](../../README.md)

***

[KeyframeKit.js](../../globals.md) / [\<internal\>](../README.md) / Body

# Interface: Body

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:4466

## Extended by

- [`Response`](Response.md)
- [`Request`](Request.md)

## Properties

### body

> `readonly` **body**: `ReadableStream`\<`Uint8Array`\<`ArrayBuffer`\>\> \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:4468

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Request/body)

***

### bodyUsed

> `readonly` **bodyUsed**: `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:4470

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Request/bodyUsed)

## Methods

### arrayBuffer()

> **arrayBuffer**(): `Promise`\<`ArrayBuffer`\>

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:4472

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Request/arrayBuffer)

#### Returns

`Promise`\<`ArrayBuffer`\>

***

### blob()

> **blob**(): `Promise`\<[`Blob`](Blob.md)\>

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:4474

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Request/blob)

#### Returns

`Promise`\<[`Blob`](Blob.md)\>

***

### bytes()

> **bytes**(): `Promise`\<`Uint8Array`\<`ArrayBuffer`\>\>

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:4476

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Request/bytes)

#### Returns

`Promise`\<`Uint8Array`\<`ArrayBuffer`\>\>

***

### formData()

> **formData**(): `Promise`\<`FormData`\>

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:4478

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Request/formData)

#### Returns

`Promise`\<`FormData`\>

***

### json()

> **json**(): `Promise`\<`any`\>

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:4480

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Request/json)

#### Returns

`Promise`\<`any`\>

***

### text()

> **text**(): `Promise`\<`string`\>

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:4482

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Request/text)

#### Returns

`Promise`\<`string`\>
