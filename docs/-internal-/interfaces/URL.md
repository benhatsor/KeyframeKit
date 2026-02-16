[**KeyframeKit.js**](../../README.md)

***

[KeyframeKit.js](../../globals.md) / [\<internal\>](../README.md) / URL

# Interface: URL

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:32640

The **`URL`** interface is used to parse, construct, normalize, and encode URL.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/URL)

## Properties

### hash

> **hash**: `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:32646

The **`hash`** property of the URL interface is a string containing a `'#'` followed by the fragment identifier of the URL.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/URL/hash)

***

### host

> **host**: `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:32652

The **`host`** property of the URL interface is a string containing the host, which is the URL.hostname, and then, if the port of the URL is nonempty, a `':'`, followed by the URL.port of the URL.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/URL/host)

***

### hostname

> **hostname**: `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:32658

The **`hostname`** property of the URL interface is a string containing either the domain name or IP address of the URL.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/URL/hostname)

***

### href

> **href**: `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:32664

The **`href`** property of the URL interface is a string containing the whole URL.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/URL/href)

***

### origin

> `readonly` **origin**: `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:32671

The **`origin`** read-only property of the URL interface returns a string containing the Unicode serialization of the origin of the represented URL.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/URL/origin)

***

### password

> **password**: `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:32677

The **`password`** property of the URL interface is a string containing the password component of the URL.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/URL/password)

***

### pathname

> **pathname**: `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:32683

The **`pathname`** property of the URL interface represents a location in a hierarchical structure.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/URL/pathname)

***

### port

> **port**: `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:32689

The **`port`** property of the URL interface is a string containing the port number of the URL.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/URL/port)

***

### protocol

> **protocol**: `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:32695

The **`protocol`** property of the URL interface is a string containing the protocol or scheme of the URL, including the final `':'`.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/URL/protocol)

***

### search

> **search**: `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:32701

The **`search`** property of the URL interface is a search string, also called a _query string_, that is a string containing a `'?'` followed by the parameters of the URL.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/URL/search)

***

### searchParams

> `readonly` **searchParams**: `URLSearchParams`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:32707

The **`searchParams`** read-only property of the access to the [MISSING: httpmethod('GET')] decoded query arguments contained in the URL.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/URL/searchParams)

***

### username

> **username**: `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:32713

The **`username`** property of the URL interface is a string containing the username component of the URL.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/URL/username)

## Methods

### toJSON()

> **toJSON**(): `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:32719

The **`toJSON()`** method of the URL interface returns a string containing a serialized version of the URL, although in practice it seems to have the same effect as ```js-nolint toJSON() ``` None.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/URL/toJSON)

#### Returns

`string`

***

### toString()

> **toString**(): `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:32665

#### Returns

`string`
