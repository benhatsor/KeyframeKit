[**KeyframeKit.js**](../../README.md)

***

[KeyframeKit.js](../../globals.md) / [\<internal\>](../README.md) / Response

# Interface: Response

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:26316

The **`Response`** interface of the Fetch API represents the response to a request.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Response)

## Extends

- [`Body`](Body.md)

## Properties

### body

> `readonly` **body**: `ReadableStream`\<`Uint8Array`\<`ArrayBuffer`\>\> \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:4468

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Request/body)

#### Inherited from

[`Body`](Body.md).[`body`](Body.md#body)

***

### bodyUsed

> `readonly` **bodyUsed**: `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:4470

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Request/bodyUsed)

#### Inherited from

[`Body`](Body.md).[`bodyUsed`](Body.md#bodyused)

***

### headers

> `readonly` **headers**: `Headers`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:26322

The **`headers`** read-only property of the with the response.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Response/headers)

***

### ok

> `readonly` **ok**: `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:26328

The **`ok`** read-only property of the Response interface contains a Boolean stating whether the response was successful (status in the range 200-299) or not.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Response/ok)

***

### redirected

> `readonly` **redirected**: `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:26334

The **`redirected`** read-only property of the Response interface indicates whether or not the response is the result of a request you made which was redirected.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Response/redirected)

***

### status

> `readonly` **status**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:26340

The **`status`** read-only property of the Response interface contains the HTTP status codes of the response.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Response/status)

***

### statusText

> `readonly` **statusText**: `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:26346

The **`statusText`** read-only property of the Response interface contains the status message corresponding to the HTTP status code in Response.status.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Response/statusText)

***

### type

> `readonly` **type**: [`ResponseType`](../type-aliases/ResponseType.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:26352

The **`type`** read-only property of the Response interface contains the type of the response.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Response/type)

***

### url

> `readonly` **url**: `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:26358

The **`url`** read-only property of the Response interface contains the URL of the response.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Response/url)

## Methods

### arrayBuffer()

> **arrayBuffer**(): `Promise`\<`ArrayBuffer`\>

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:4472

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Request/arrayBuffer)

#### Returns

`Promise`\<`ArrayBuffer`\>

#### Inherited from

[`Body`](Body.md).[`arrayBuffer`](Body.md#arraybuffer)

***

### blob()

> **blob**(): `Promise`\<[`Blob`](Blob.md)\>

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:4474

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Request/blob)

#### Returns

`Promise`\<[`Blob`](Blob.md)\>

#### Inherited from

[`Body`](Body.md).[`blob`](Body.md#blob)

***

### bytes()

> **bytes**(): `Promise`\<`Uint8Array`\<`ArrayBuffer`\>\>

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:4476

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Request/bytes)

#### Returns

`Promise`\<`Uint8Array`\<`ArrayBuffer`\>\>

#### Inherited from

[`Body`](Body.md).[`bytes`](Body.md#bytes)

***

### clone()

> **clone**(): `Response`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:26364

The **`clone()`** method of the Response interface creates a clone of a response object, identical in every way, but stored in a different variable.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Response/clone)

#### Returns

`Response`

***

### formData()

> **formData**(): `Promise`\<`FormData`\>

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:4478

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Request/formData)

#### Returns

`Promise`\<`FormData`\>

#### Inherited from

[`Body`](Body.md).[`formData`](Body.md#formdata)

***

### json()

> **json**(): `Promise`\<`any`\>

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:4480

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Request/json)

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`Body`](Body.md).[`json`](Body.md#json)

***

### text()

> **text**(): `Promise`\<`string`\>

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:4482

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Request/text)

#### Returns

`Promise`\<`string`\>

#### Inherited from

[`Body`](Body.md).[`text`](Body.md#text)
