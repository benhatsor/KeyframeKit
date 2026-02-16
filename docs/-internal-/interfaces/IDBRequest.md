[**KeyframeKit.js**](../../README.md)

***

[KeyframeKit.js](../../globals.md) / [\<internal\>](../README.md) / IDBRequest

# Interface: IDBRequest\<T\>

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:18423

The **`IDBRequest`** interface of the IndexedDB API provides access to results of asynchronous requests to databases and database objects using event handler attributes.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBRequest)

## Extends

- [`EventTarget`](EventTarget.md)

## Extended by

- [`IDBOpenDBRequest`](IDBOpenDBRequest.md)

## Type Parameters

### T

`T` = `any`

## Properties

### error

> `readonly` **error**: [`DOMException`](DOMException.md) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:18429

The **`error`** read-only property of the request.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBRequest/error)

***

### onerror

> **onerror**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:18431

[MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBRequest/error_event)

***

### onsuccess

> **onsuccess**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:18433

[MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBRequest/success_event)

***

### readyState

> `readonly` **readyState**: [`IDBRequestReadyState`](../type-aliases/IDBRequestReadyState.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:18439

The **`readyState`** read-only property of the Every request starts in the `pending` state.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBRequest/readyState)

***

### result

> `readonly` **result**: `T`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:18445

The **`result`** read-only property of the any - `InvalidStateError` DOMException - : Thrown when attempting to access the property if the request is not completed, and therefore the result is not available.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBRequest/result)

***

### source

> `readonly` **source**: `IDBObjectStore` \| [`IDBIndex`](IDBIndex.md) \| [`IDBCursor`](IDBCursor.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:18451

The **`source`** read-only property of the Index or an object store.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBRequest/source)

***

### transaction

> `readonly` **transaction**: [`IDBTransaction`](IDBTransaction.md) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:18457

The **`transaction`** read-only property of the IDBRequest interface returns the transaction for the request, that is, the transaction the request is being made inside.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBRequest/transaction)

## Methods

### addEventListener()

#### Call Signature

> **addEventListener**\<`K`\>(`type`, `listener`, `options?`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:18458

The **`addEventListener()`** method of the EventTarget interface sets up a function that will be called whenever the specified event is delivered to the target.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener)

##### Type Parameters

###### K

`K` *extends* keyof [`IDBRequestEventMap`](IDBRequestEventMap.md)

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

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:18459

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

### removeEventListener()

#### Call Signature

> **removeEventListener**\<`K`\>(`type`, `listener`, `options?`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:18460

The **`removeEventListener()`** method of the EventTarget interface removes an event listener previously registered with EventTarget.addEventListener() from the target.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/removeEventListener)

##### Type Parameters

###### K

`K` *extends* keyof [`IDBRequestEventMap`](IDBRequestEventMap.md)

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

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:18461

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
