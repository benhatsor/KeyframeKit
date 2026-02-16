[**KeyframeKit.js**](../../README.md)

***

[KeyframeKit.js](../../globals.md) / [\<internal\>](../README.md) / MessagePort

# Interface: MessagePort

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:20836

The **`MessagePort`** interface of the Channel Messaging API represents one of the two ports of a MessageChannel, allowing messages to be sent from one port and listening out for them arriving at the other.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/MessagePort)

## Extends

- [`EventTarget`](EventTarget.md).[`MessageEventTarget`](MessageEventTarget.md)\<`MessagePort`\>

## Properties

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

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:20856

The **`addEventListener()`** method of the EventTarget interface sets up a function that will be called whenever the specified event is delivered to the target.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener)

##### Type Parameters

###### K

`K` *extends* keyof [`MessagePortEventMap`](MessagePortEventMap.md)

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

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:20857

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

[`MessageEventTarget`](MessageEventTarget.md).[`addEventListener`](MessageEventTarget.md#addeventlistener)

***

### close()

> **close**(): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:20842

The **`close()`** method of the MessagePort interface disconnects the port, so it is no longer active.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/MessagePort/close)

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

### postMessage()

#### Call Signature

> **postMessage**(`message`, `transfer`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:20848

The **`postMessage()`** method of the transfers ownership of objects to other browsing contexts.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/MessagePort/postMessage)

##### Parameters

###### message

`any`

###### transfer

[`Transferable`](../type-aliases/Transferable.md)[]

##### Returns

`void`

#### Call Signature

> **postMessage**(`message`, `options?`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:20849

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

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:20858

The **`removeEventListener()`** method of the EventTarget interface removes an event listener previously registered with EventTarget.addEventListener() from the target.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/removeEventListener)

##### Type Parameters

###### K

`K` *extends* keyof [`MessagePortEventMap`](MessagePortEventMap.md)

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

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:20859

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

[`MessageEventTarget`](MessageEventTarget.md).[`removeEventListener`](MessageEventTarget.md#removeeventlistener)

***

### start()

> **start**(): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:20855

The **`start()`** method of the MessagePort interface starts the sending of messages queued on the port.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/MessagePort/start)

#### Returns

`void`
