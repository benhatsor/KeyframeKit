[**KeyframeKit.js**](../../README.md)

***

[KeyframeKit.js](../../globals.md) / [\<internal\>](../README.md) / Request

# Interface: Request

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:26120

The **`Request`** interface of the Fetch API represents a resource request.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Request)

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

### cache

> `readonly` **cache**: [`RequestCache`](../type-aliases/RequestCache.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:26126

The **`cache`** read-only property of the Request interface contains the cache mode of the request.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Request/cache)

***

### credentials

> `readonly` **credentials**: [`RequestCredentials`](../type-aliases/RequestCredentials.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:26132

The **`credentials`** read-only property of the Request interface reflects the value given to the Request.Request() constructor in the `credentials` option.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Request/credentials)

***

### destination

> `readonly` **destination**: [`RequestDestination`](../type-aliases/RequestDestination.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:26138

The **`destination`** read-only property of the **Request** interface returns a string describing the type of content being requested.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Request/destination)

***

### headers

> `readonly` **headers**: `Headers`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:26144

The **`headers`** read-only property of the with the request.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Request/headers)

***

### integrity

> `readonly` **integrity**: `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:26150

The **`integrity`** read-only property of the Request interface contains the subresource integrity value of the request.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Request/integrity)

***

### keepalive

> `readonly` **keepalive**: `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:26156

The **`keepalive`** read-only property of the Request interface contains the request's `keepalive` setting (`true` or `false`), which indicates whether the browser will keep the associated request alive if the page that initiated it is unloaded before the request is complete.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Request/keepalive)

***

### method

> `readonly` **method**: `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:26162

The **`method`** read-only property of the `POST`, etc.) A String indicating the method of the request.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Request/method)

***

### mode

> `readonly` **mode**: [`RequestMode`](../type-aliases/RequestMode.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:26168

The **`mode`** read-only property of the Request interface contains the mode of the request (e.g., `cors`, `no-cors`, `same-origin`, or `navigate`.) This is used to determine if cross-origin requests lead to valid responses, and which properties of the response are readable.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Request/mode)

***

### redirect

> `readonly` **redirect**: [`RequestRedirect`](../type-aliases/RequestRedirect.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:26174

The **`redirect`** read-only property of the Request interface contains the mode for how redirects are handled.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Request/redirect)

***

### referrer

> `readonly` **referrer**: `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:26180

The **`referrer`** read-only property of the Request.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Request/referrer)

***

### referrerPolicy

> `readonly` **referrerPolicy**: [`ReferrerPolicy`](../type-aliases/ReferrerPolicy.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:26186

The **`referrerPolicy`** read-only property of the referrer information, sent in the Referer header, should be included with the request.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Request/referrerPolicy)

***

### signal

> `readonly` **signal**: [`AbortSignal`](AbortSignal.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:26192

The read-only **`signal`** property of the Request interface returns the AbortSignal associated with the request.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Request/signal)

***

### url

> `readonly` **url**: `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:26198

The **`url`** read-only property of the Request interface contains the URL of the request.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Request/url)

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

> **clone**(): `Request`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:26204

The **`clone()`** method of the Request interface creates a copy of the current `Request` object.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Request/clone)

#### Returns

`Request`

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
