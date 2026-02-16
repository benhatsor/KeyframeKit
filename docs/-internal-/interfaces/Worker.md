[**KeyframeKit.js**](../../README.md)

***

[KeyframeKit.js](../../globals.md) / [\<internal\>](../README.md) / Worker

# Interface: Worker

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36943

The **`Worker`** interface of the Web Workers API represents a background task that can be created via script, which can send messages back to its creator.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Worker)

## Extends

- [`EventTarget`](EventTarget.md).[`AbstractWorker`](AbstractWorker.md).[`MessageEventTarget`](MessageEventTarget.md)\<`Worker`\>

## Properties

### onerror

> **onerror**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:2845

[MDN Reference](https://developer.mozilla.org/docs/Web/API/ServiceWorker/error_event)

#### Inherited from

[`AbstractWorker`](AbstractWorker.md).[`onerror`](AbstractWorker.md#onerror)

***

### onmessage

> **onmessage**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:20817

[MDN Reference](https://developer.mozilla.org/docs/Web/API/DedicatedWorkerGlobalScope/message_event)

#### Inherited from

[`MessageEventTarget`](MessageEventTarget.md).[`onmessage`](MessageEventTarget.md#onmessage)

***

### onmessageerror

> **onmessageerror**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:20819

[MDN Reference](https://developer.mozilla.org/docs/Web/API/DedicatedWorkerGlobalScope/messageerror_event)

#### Inherited from

[`MessageEventTarget`](MessageEventTarget.md).[`onmessageerror`](MessageEventTarget.md#onmessageerror)

## Methods

### addEventListener()

#### Call Signature

> **addEventListener**\<`K`\>(`type`, `listener`, `options?`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36957

The **`addEventListener()`** method of the EventTarget interface sets up a function that will be called whenever the specified event is delivered to the target.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener)

##### Type Parameters

###### K

`K` *extends* keyof [`WorkerEventMap`](WorkerEventMap.md)

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

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36958

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

[`AbstractWorker`](AbstractWorker.md).[`addEventListener`](AbstractWorker.md#addeventlistener)

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

### postMessage()

#### Call Signature

> **postMessage**(`message`, `transfer`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36949

The **`postMessage()`** method of the Worker interface sends a message to the worker.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Worker/postMessage)

##### Parameters

###### message

`any`

###### transfer

[`Transferable`](../type-aliases/Transferable.md)[]

##### Returns

`void`

#### Call Signature

> **postMessage**(`message`, `options?`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36950

##### Parameters

###### message

`any`

###### options?

[`StructuredSerializeOptions`](StructuredSerializeOptions.md)

##### Returns

`void`

***

### removeEventListener()

#### Call Signature

> **removeEventListener**\<`K`\>(`type`, `listener`, `options?`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36959

The **`removeEventListener()`** method of the EventTarget interface removes an event listener previously registered with EventTarget.addEventListener() from the target.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/removeEventListener)

##### Type Parameters

###### K

`K` *extends* keyof [`WorkerEventMap`](WorkerEventMap.md)

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

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36960

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

[`AbstractWorker`](AbstractWorker.md).[`removeEventListener`](AbstractWorker.md#removeeventlistener)

***

### terminate()

> **terminate**(): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36956

The **`terminate()`** method of the Worker interface immediately terminates the Worker.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Worker/terminate)

#### Returns

`void`
