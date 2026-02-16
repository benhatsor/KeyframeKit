[**KeyframeKit.js**](../../README.md)

***

[KeyframeKit.js](../../globals.md) / [\<internal\>](../README.md) / Location

# Interface: Location

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:19284

The **`Location`** interface represents the location (URL) of the object it is linked to.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Location)

## Properties

### ancestorOrigins

> `readonly` **ancestorOrigins**: `DOMStringList`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:19290

The **`ancestorOrigins`** read-only property of the Location interface is a static browsing contexts of the document associated with the given Location object.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Location/ancestorOrigins)

***

### hash

> **hash**: `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:19296

The **`hash`** property of the Location interface is a string containing a `'#'` followed by the fragment identifier of the location URL.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Location/hash)

***

### host

> **host**: `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:19302

The **`host`** property of the Location interface is a string containing the host, which is the Location.hostname, and then, if the port of the URL is nonempty, a `':'`, followed by the Location.port of the URL.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Location/host)

***

### hostname

> **hostname**: `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:19308

The **`hostname`** property of the Location interface is a string containing either the domain name or IP address of the location URL.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Location/hostname)

***

### href

> **href**: `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:19314

The **`href`** property of the Location interface is a stringifier that returns a string containing the whole URL, and allows the href to be updated.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Location/href)

***

### origin

> `readonly` **origin**: `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:19321

The **`origin`** read-only property of the Location interface returns a string containing the Unicode serialization of the origin of the location's URL.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Location/origin)

***

### pathname

> **pathname**: `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:19327

The **`pathname`** property of the Location interface is a string containing the path of the URL for the location.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Location/pathname)

***

### port

> **port**: `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:19333

The **`port`** property of the Location interface is a string containing the port number of the location's URL.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Location/port)

***

### protocol

> **protocol**: `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:19339

The **`protocol`** property of the Location interface is a string containing the protocol or scheme of the location's URL, including the final `':'`.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Location/protocol)

***

### search

> **search**: `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:19345

The **`search`** property of the Location interface is a search string, also called a _query string_, that is a string containing a `'?'` followed by the parameters of the location's URL.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Location/search)

## Methods

### assign()

> **assign**(`url`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:19351

The **`assign()`** method of the Location interface causes the window to load and display the document at the URL specified.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Location/assign)

#### Parameters

##### url

`string` | [`URL`](URL.md)

#### Returns

`void`

***

### reload()

> **reload**(): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:19357

The **`reload()`** method of the Location interface reloads the current URL, like the Refresh button.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Location/reload)

#### Returns

`void`

***

### replace()

> **replace**(`url`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:19363

The **`replace()`** method of the Location interface replaces the current resource with the one at the provided URL.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Location/replace)

#### Parameters

##### url

`string` | [`URL`](URL.md)

#### Returns

`void`

***

### toString()

> **toString**(): `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:19315

#### Returns

`string`
