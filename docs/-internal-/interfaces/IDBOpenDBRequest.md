[**KeyframeKit.js**](../../README.md)

***

[KeyframeKit.js](../../globals.md) / [\<internal\>](../README.md) / IDBOpenDBRequest

# Interface: IDBOpenDBRequest

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:18397

The **`IDBOpenDBRequest`** interface of the IndexedDB API provides access to the results of requests to open or delete databases (performed using IDBFactory.open and IDBFactory.deleteDatabase), using specific event handler attributes.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBOpenDBRequest)

## Extends

- [`IDBRequest`](IDBRequest.md)\<`IDBDatabase`\>

## Properties

### error

> `readonly` **error**: [`DOMException`](DOMException.md) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:18429

The **`error`** read-only property of the request.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBRequest/error)

#### Inherited from

[`IDBRequest`](IDBRequest.md).[`error`](IDBRequest.md#error)

***

### onblocked

> **onblocked**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:18399

[MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBOpenDBRequest/blocked_event)

***

### onerror

> **onerror**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:18431

[MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBRequest/error_event)

#### Inherited from

[`IDBRequest`](IDBRequest.md).[`onerror`](IDBRequest.md#onerror)

***

### onsuccess

> **onsuccess**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:18433

[MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBRequest/success_event)

#### Inherited from

[`IDBRequest`](IDBRequest.md).[`onsuccess`](IDBRequest.md#onsuccess)

***

### onupgradeneeded

> **onupgradeneeded**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:18401

[MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBOpenDBRequest/upgradeneeded_event)

***

### readyState

> `readonly` **readyState**: [`IDBRequestReadyState`](../type-aliases/IDBRequestReadyState.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:18439

The **`readyState`** read-only property of the Every request starts in the `pending` state.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBRequest/readyState)

#### Inherited from

[`IDBRequest`](IDBRequest.md).[`readyState`](IDBRequest.md#readystate)

***

### result

> `readonly` **result**: `IDBDatabase`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:18445

The **`result`** read-only property of the any - `InvalidStateError` DOMException - : Thrown when attempting to access the property if the request is not completed, and therefore the result is not available.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBRequest/result)

#### Inherited from

[`IDBRequest`](IDBRequest.md).[`result`](IDBRequest.md#result)

***

### source

> `readonly` **source**: `IDBObjectStore` \| [`IDBIndex`](IDBIndex.md) \| [`IDBCursor`](IDBCursor.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:18451

The **`source`** read-only property of the Index or an object store.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBRequest/source)

#### Inherited from

[`IDBRequest`](IDBRequest.md).[`source`](IDBRequest.md#source)

***

### transaction

> `readonly` **transaction**: [`IDBTransaction`](IDBTransaction.md) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:18457

The **`transaction`** read-only property of the IDBRequest interface returns the transaction for the request, that is, the transaction the request is being made inside.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBRequest/transaction)

#### Inherited from

[`IDBRequest`](IDBRequest.md).[`transaction`](IDBRequest.md#transaction)

## Methods

### addEventListener()

#### Call Signature

> **addEventListener**\<`K`\>(`type`, `listener`, `options?`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:18402

The **`addEventListener()`** method of the EventTarget interface sets up a function that will be called whenever the specified event is delivered to the target.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener)

##### Type Parameters

###### K

`K` *extends* keyof [`IDBOpenDBRequestEventMap`](IDBOpenDBRequestEventMap.md)

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

[`IDBRequest`](IDBRequest.md).[`addEventListener`](IDBRequest.md#addeventlistener)

#### Call Signature

> **addEventListener**(`type`, `listener`, `options?`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:18403

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

[`IDBRequest`](IDBRequest.md).[`addEventListener`](IDBRequest.md#addeventlistener)

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

[`IDBRequest`](IDBRequest.md).[`dispatchEvent`](IDBRequest.md#dispatchevent)

***

### removeEventListener()

#### Call Signature

> **removeEventListener**\<`K`\>(`type`, `listener`, `options?`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:18404

The **`removeEventListener()`** method of the EventTarget interface removes an event listener previously registered with EventTarget.addEventListener() from the target.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/removeEventListener)

##### Type Parameters

###### K

`K` *extends* keyof [`IDBOpenDBRequestEventMap`](IDBOpenDBRequestEventMap.md)

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

[`IDBRequest`](IDBRequest.md).[`removeEventListener`](IDBRequest.md#removeeventlistener)

#### Call Signature

> **removeEventListener**(`type`, `listener`, `options?`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:18405

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

[`IDBRequest`](IDBRequest.md).[`removeEventListener`](IDBRequest.md#removeeventlistener)
