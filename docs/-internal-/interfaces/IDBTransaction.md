[**KeyframeKit.js**](../../README.md)

***

[KeyframeKit.js](../../globals.md) / [\<internal\>](../README.md) / IDBTransaction

# Interface: IDBTransaction

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:18480

The **`IDBTransaction`** interface of the IndexedDB API provides a static, asynchronous transaction on a database using event handler attributes.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBTransaction)

## Extends

- [`EventTarget`](EventTarget.md)

## Properties

### db

> `readonly` **db**: `IDBDatabase`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:18486

The **`db`** read-only property of the IDBTransaction interface returns the database connection with which this transaction is associated.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBTransaction/db)

***

### durability

> `readonly` **durability**: [`IDBTransactionDurability`](../type-aliases/IDBTransactionDurability.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:18492

The **`durability`** read-only property of the IDBTransaction interface returns the durability hint the transaction was created with.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBTransaction/durability)

***

### error

> `readonly` **error**: [`DOMException`](DOMException.md) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:18498

The **`IDBTransaction.error`** property of the IDBTransaction interface returns the type of error when there is an unsuccessful transaction.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBTransaction/error)

***

### mode

> `readonly` **mode**: [`IDBTransactionMode`](../type-aliases/IDBTransactionMode.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:18504

The **`mode`** read-only property of the data in the object stores in the scope of the transaction (i.e., is the mode to be read-only, or do you want to write to the object stores?) The default value is `readonly`.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBTransaction/mode)

***

### objectStoreNames

> `readonly` **objectStoreNames**: `DOMStringList`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:18510

The **`objectStoreNames`** read-only property of the of IDBObjectStore objects.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBTransaction/objectStoreNames)

***

### onabort

> **onabort**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:18512

[MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBTransaction/abort_event)

***

### oncomplete

> **oncomplete**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:18514

[MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBTransaction/complete_event)

***

### onerror

> **onerror**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:18516

[MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBTransaction/error_event)

## Methods

### abort()

> **abort**(): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:18522

The **`abort()`** method of the IDBTransaction interface rolls back all the changes to objects in the database associated with this transaction.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBTransaction/abort)

#### Returns

`void`

***

### addEventListener()

#### Call Signature

> **addEventListener**\<`K`\>(`type`, `listener`, `options?`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:18535

The **`addEventListener()`** method of the EventTarget interface sets up a function that will be called whenever the specified event is delivered to the target.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener)

##### Type Parameters

###### K

`K` *extends* keyof [`IDBTransactionEventMap`](IDBTransactionEventMap.md)

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

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:18536

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

### commit()

> **commit**(): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:18528

The **`commit()`** method of the IDBTransaction interface commits the transaction if it is called on an active transaction.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBTransaction/commit)

#### Returns

`void`

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

### objectStore()

> **objectStore**(`name`): `IDBObjectStore`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:18534

The **`objectStore()`** method of the added to the scope of this transaction.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBTransaction/objectStore)

#### Parameters

##### name

`string`

#### Returns

`IDBObjectStore`

***

### removeEventListener()

#### Call Signature

> **removeEventListener**\<`K`\>(`type`, `listener`, `options?`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:18537

The **`removeEventListener()`** method of the EventTarget interface removes an event listener previously registered with EventTarget.addEventListener() from the target.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/removeEventListener)

##### Type Parameters

###### K

`K` *extends* keyof [`IDBTransactionEventMap`](IDBTransactionEventMap.md)

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

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:18538

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
