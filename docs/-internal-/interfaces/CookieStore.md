[**KeyframeKit.js**](../../README.md)

***

[KeyframeKit.js](../../globals.md) / [\<internal\>](../README.md) / CookieStore

# Interface: CookieStore

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:8265

The **`CookieStore`** interface of the Cookie Store API provides methods for getting and setting cookies asynchronously from either a page or a service worker.
Available only in secure contexts.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/CookieStore)

## Extends

- [`EventTarget`](EventTarget.md)

## Properties

### onchange

> **onchange**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:8267

[MDN Reference](https://developer.mozilla.org/docs/Web/API/CookieStore/change_event)

## Methods

### addEventListener()

#### Call Signature

> **addEventListener**\<`K`\>(`type`, `listener`, `options?`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:8296

The **`addEventListener()`** method of the EventTarget interface sets up a function that will be called whenever the specified event is delivered to the target.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener)

##### Type Parameters

###### K

`K` *extends* `"change"`

##### Parameters

###### type

`K`

###### listener

(`this`, `ev`) => `any`

###### options?

`boolean` | [`AddEventListenerOptions`](AddEventListenerOptions.md)

##### Returns

`void`

##### Overrides

[`EventTarget`](EventTarget.md).[`addEventListener`](EventTarget.md#addeventlistener)

#### Call Signature

> **addEventListener**(`type`, `listener`, `options?`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:8297

The **`addEventListener()`** method of the EventTarget interface sets up a function that will be called whenever the specified event is delivered to the target.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener)

##### Parameters

###### type

`string`

###### listener

[`EventListenerOrEventListenerObject`](../type-aliases/EventListenerOrEventListenerObject.md)

###### options?

`boolean` | [`AddEventListenerOptions`](AddEventListenerOptions.md)

##### Returns

`void`

##### Overrides

`EventTarget.addEventListener`

***

### delete()

#### Call Signature

> **delete**(`name`): `Promise`\<`void`\>

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:8273

The **`delete()`** method of the CookieStore interface deletes a cookie that matches the given `name` or `options` object.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/CookieStore/delete)

##### Parameters

###### name

`string`

##### Returns

`Promise`\<`void`\>

#### Call Signature

> **delete**(`options`): `Promise`\<`void`\>

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:8274

##### Parameters

###### options

[`CookieStoreDeleteOptions`](CookieStoreDeleteOptions.md)

##### Returns

`Promise`\<`void`\>

***

### dispatchEvent()

> **dispatchEvent**(`event`): `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11575

The **`dispatchEvent()`** method of the EventTarget sends an Event to the object, (synchronously) invoking the affected event listeners in the appropriate order.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/dispatchEvent)

#### Parameters

##### event

[`Event`](Event.md)

#### Returns

`boolean`

#### Inherited from

[`EventTarget`](EventTarget.md).[`dispatchEvent`](EventTarget.md#dispatchevent)

***

### get()

#### Call Signature

> **get**(`name`): `Promise`\<[`CookieListItem`](CookieListItem.md) \| `null`\>

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:8280

The **`get()`** method of the CookieStore interface returns a Promise that resolves to a single cookie matching the given `name` or `options` object.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/CookieStore/get)

##### Parameters

###### name

`string`

##### Returns

`Promise`\<[`CookieListItem`](CookieListItem.md) \| `null`\>

#### Call Signature

> **get**(`options?`): `Promise`\<[`CookieListItem`](CookieListItem.md) \| `null`\>

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:8281

##### Parameters

###### options?

[`CookieStoreGetOptions`](CookieStoreGetOptions.md)

##### Returns

`Promise`\<[`CookieListItem`](CookieListItem.md) \| `null`\>

***

### getAll()

#### Call Signature

> **getAll**(`name`): `Promise`\<[`CookieList`](../type-aliases/CookieList.md)\>

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:8287

The **`getAll()`** method of the CookieStore interface returns a Promise that resolves as an array of cookies that match the `name` or `options` passed to it.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/CookieStore/getAll)

##### Parameters

###### name

`string`

##### Returns

`Promise`\<[`CookieList`](../type-aliases/CookieList.md)\>

#### Call Signature

> **getAll**(`options?`): `Promise`\<[`CookieList`](../type-aliases/CookieList.md)\>

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:8288

##### Parameters

###### options?

[`CookieStoreGetOptions`](CookieStoreGetOptions.md)

##### Returns

`Promise`\<[`CookieList`](../type-aliases/CookieList.md)\>

***

### removeEventListener()

#### Call Signature

> **removeEventListener**\<`K`\>(`type`, `listener`, `options?`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:8298

The **`removeEventListener()`** method of the EventTarget interface removes an event listener previously registered with EventTarget.addEventListener() from the target.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/removeEventListener)

##### Type Parameters

###### K

`K` *extends* `"change"`

##### Parameters

###### type

`K`

###### listener

(`this`, `ev`) => `any`

###### options?

`boolean` | [`EventListenerOptions`](EventListenerOptions.md)

##### Returns

`void`

##### Overrides

[`EventTarget`](EventTarget.md).[`removeEventListener`](EventTarget.md#removeeventlistener)

#### Call Signature

> **removeEventListener**(`type`, `listener`, `options?`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:8299

The **`removeEventListener()`** method of the EventTarget interface removes an event listener previously registered with EventTarget.addEventListener() from the target.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/removeEventListener)

##### Parameters

###### type

`string`

###### listener

[`EventListenerOrEventListenerObject`](../type-aliases/EventListenerOrEventListenerObject.md)

###### options?

`boolean` | [`EventListenerOptions`](EventListenerOptions.md)

##### Returns

`void`

##### Overrides

`EventTarget.removeEventListener`

***

### set()

#### Call Signature

> **set**(`name`, `value`): `Promise`\<`void`\>

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:8294

The **`set()`** method of the CookieStore interface sets a cookie with the given `name` and `value` or `options` object.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/CookieStore/set)

##### Parameters

###### name

`string`

###### value

`string`

##### Returns

`Promise`\<`void`\>

#### Call Signature

> **set**(`options`): `Promise`\<`void`\>

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:8295

##### Parameters

###### options

[`CookieInit`](CookieInit.md)

##### Returns

`Promise`\<`void`\>
