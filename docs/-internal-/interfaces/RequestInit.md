[**KeyframeKit.js**](../../README.md)

***

[KeyframeKit.js](../../globals.md) / [\<internal\>](../README.md) / RequestInit

# Interface: RequestInit

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:2039

## Properties

### body?

> `optional` **body**: [`BodyInit`](../type-aliases/BodyInit.md) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:2041

A BodyInit object or null to set request's body.

***

### cache?

> `optional` **cache**: [`RequestCache`](../type-aliases/RequestCache.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:2043

A string indicating how the request will interact with the browser's cache to set request's cache.

***

### credentials?

> `optional` **credentials**: [`RequestCredentials`](../type-aliases/RequestCredentials.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:2045

A string indicating whether credentials will be sent with the request always, never, or only when sent to a same-origin URL. Sets request's credentials.

***

### headers?

> `optional` **headers**: [`HeadersInit`](../type-aliases/HeadersInit.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:2047

A Headers object, an object literal, or an array of two-item arrays to set request's headers.

***

### integrity?

> `optional` **integrity**: `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:2049

A cryptographic hash of the resource to be fetched by request. Sets request's integrity.

***

### keepalive?

> `optional` **keepalive**: `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:2051

A boolean to set request's keepalive.

***

### method?

> `optional` **method**: `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:2053

A string to set request's method.

***

### mode?

> `optional` **mode**: [`RequestMode`](../type-aliases/RequestMode.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:2055

A string to indicate whether the request will use CORS, or will be restricted to same-origin URLs. Sets request's mode.

***

### priority?

> `optional` **priority**: [`RequestPriority`](../type-aliases/RequestPriority.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:2056

***

### redirect?

> `optional` **redirect**: [`RequestRedirect`](../type-aliases/RequestRedirect.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:2058

A string indicating whether request follows redirects, results in an error upon encountering a redirect, or returns the redirect (in an opaque fashion). Sets request's redirect.

***

### referrer?

> `optional` **referrer**: `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:2060

A string whose value is a same-origin URL, "about:client", or the empty string, to set request's referrer.

***

### referrerPolicy?

> `optional` **referrerPolicy**: [`ReferrerPolicy`](../type-aliases/ReferrerPolicy.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:2062

A referrer policy to set request's referrerPolicy.

***

### signal?

> `optional` **signal**: [`AbortSignal`](AbortSignal.md) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:2064

An AbortSignal to set request's signal.

***

### window?

> `optional` **window**: `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:2066

Can only be null. Used to disassociate request from any Window.
