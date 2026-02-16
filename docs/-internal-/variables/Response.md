[**KeyframeKit.js**](../../README.md)

***

[KeyframeKit.js](../../globals.md) / [\<internal\>](../README.md) / Response

# Variable: Response

> **Response**: \{(`body?`, `init?`): [`Response`](../interfaces/Response.md); `prototype`: [`Response`](../interfaces/Response.md); `error`: [`Response`](../interfaces/Response.md); `json`: [`Response`](../interfaces/Response.md); `redirect`: [`Response`](../interfaces/Response.md); \}

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:26316

## Type Declaration

## Parameters

### body?

[`BodyInit`](../type-aliases/BodyInit.md) | `null`

### init?

[`ResponseInit`](../interfaces/ResponseInit.md)

## Returns

[`Response`](../interfaces/Response.md)

### prototype

> **prototype**: [`Response`](../interfaces/Response.md)

### error()

> **error**(): [`Response`](../interfaces/Response.md)

The **`error()`** static method of the Response interface returns a new `Response` object associated with a network error.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Response/error_static)

#### Returns

[`Response`](../interfaces/Response.md)

### json()

> **json**(`data`, `init?`): [`Response`](../interfaces/Response.md)

The **`json()`** static method of the Response interface returns a `Response` that contains the provided JSON data as body, and a Content-Type header which is set to `application/json`.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Response/json_static)

#### Parameters

##### data

`any`

##### init?

[`ResponseInit`](../interfaces/ResponseInit.md)

#### Returns

[`Response`](../interfaces/Response.md)

### redirect()

> **redirect**(`url`, `status?`): [`Response`](../interfaces/Response.md)

The **`redirect()`** static method of the Response interface returns a `Response` resulting in a redirect to the specified URL.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Response/redirect_static)

#### Parameters

##### url

`string` | [`URL`](../interfaces/URL.md)

##### status?

`number`

#### Returns

[`Response`](../interfaces/Response.md)
