[**KeyframeKit.js**](../../README.md)

***

[KeyframeKit.js](../../globals.md) / [\<internal\>](../README.md) / RTCDataChannel

# Interface: RTCDataChannel

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:24516

The **`RTCDataChannel`** interface represents a network channel which can be used for bidirectional peer-to-peer transfers of arbitrary data.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCDataChannel)

## Extends

- [`EventTarget`](EventTarget.md)

## Properties

### binaryType

> **binaryType**: [`BinaryType`](../type-aliases/BinaryType.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:24522

The property **`binaryType`** on the the type of object which should be used to represent binary data received on the RTCDataChannel.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCDataChannel/binaryType)

***

### bufferedAmount

> `readonly` **bufferedAmount**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:24528

The read-only `RTCDataChannel` property **`bufferedAmount`** returns the number of bytes of data currently queued to be sent over the data channel.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCDataChannel/bufferedAmount)

***

### bufferedAmountLowThreshold

> **bufferedAmountLowThreshold**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:24534

The `RTCDataChannel` property **`bufferedAmountLowThreshold`** is used to specify the number of bytes of buffered outgoing data that is considered 'low.' The default value is 0\.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCDataChannel/bufferedAmountLowThreshold)

***

### id

> `readonly` **id**: `number` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:24540

The read-only `RTCDataChannel` property **`id`** returns an ID number (between 0 and 65,534) which uniquely identifies the RTCDataChannel.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCDataChannel/id)

***

### label

> `readonly` **label**: `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:24546

The read-only `RTCDataChannel` property **`label`** returns a string containing a name describing the data channel.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCDataChannel/label)

***

### maxPacketLifeTime

> `readonly` **maxPacketLifeTime**: `number` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:24552

The read-only `RTCDataChannel` property **`maxPacketLifeTime`** returns the amount of time, in milliseconds, the browser is allowed to take to attempt to transmit a message, as set when the data channel was created, or `null`.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCDataChannel/maxPacketLifeTime)

***

### maxRetransmits

> `readonly` **maxRetransmits**: `number` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:24558

The read-only `RTCDataChannel` property **`maxRetransmits`** returns the maximum number of times the browser should try to retransmit a message before giving up, as set when the data channel was created, or `null`, which indicates that there is no maximum.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCDataChannel/maxRetransmits)

***

### negotiated

> `readonly` **negotiated**: `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:24564

The read-only `RTCDataChannel` property **`negotiated`** indicates whether the (`true`) or by the WebRTC layer (`false`).

[MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCDataChannel/negotiated)

***

### onbufferedamountlow

> **onbufferedamountlow**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:24566

[MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCDataChannel/bufferedamountlow_event)

***

### onclose

> **onclose**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:24568

[MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCDataChannel/close_event)

***

### onclosing

> **onclosing**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:24570

[MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCDataChannel/closing_event)

***

### onerror

> **onerror**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:24572

[MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCDataChannel/error_event)

***

### onmessage

> **onmessage**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:24574

[MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCDataChannel/message_event)

***

### onopen

> **onopen**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:24576

[MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCDataChannel/open_event)

***

### ordered

> `readonly` **ordered**: `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:24582

The read-only `RTCDataChannel` property **`ordered`** indicates whether or not the data channel guarantees in-order delivery of messages; the default is `true`, which indicates that the data channel is indeed ordered.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCDataChannel/ordered)

***

### protocol

> `readonly` **protocol**: `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:24588

The read-only `RTCDataChannel` property **`protocol`** returns a string containing the name of the subprotocol in use.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCDataChannel/protocol)

***

### readyState

> `readonly` **readyState**: [`RTCDataChannelState`](../type-aliases/RTCDataChannelState.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:24594

The read-only `RTCDataChannel` property **`readyState`** returns a string which indicates the state of the data channel's underlying data connection.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCDataChannel/readyState)

## Methods

### addEventListener()

#### Call Signature

> **addEventListener**\<`K`\>(`type`, `listener`, `options?`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:24610

The **`addEventListener()`** method of the EventTarget interface sets up a function that will be called whenever the specified event is delivered to the target.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener)

##### Type Parameters

###### K

`K` *extends* keyof [`RTCDataChannelEventMap`](RTCDataChannelEventMap.md)

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

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:24611

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

### close()

> **close**(): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:24600

The **`RTCDataChannel.close()`** method closes the closure of the channel.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCDataChannel/close)

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

### removeEventListener()

#### Call Signature

> **removeEventListener**\<`K`\>(`type`, `listener`, `options?`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:24612

The **`removeEventListener()`** method of the EventTarget interface removes an event listener previously registered with EventTarget.addEventListener() from the target.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/removeEventListener)

##### Type Parameters

###### K

`K` *extends* keyof [`RTCDataChannelEventMap`](RTCDataChannelEventMap.md)

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

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:24613

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

### send()

#### Call Signature

> **send**(`data`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:24606

The **`send()`** method of the remote peer.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCDataChannel/send)

##### Parameters

###### data

`string`

##### Returns

`void`

#### Call Signature

> **send**(`data`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:24607

##### Parameters

###### data

[`Blob`](Blob.md)

##### Returns

`void`

#### Call Signature

> **send**(`data`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:24608

##### Parameters

###### data

`ArrayBuffer`

##### Returns

`void`

#### Call Signature

> **send**(`data`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:24609

##### Parameters

###### data

[`ArrayBufferView`](ArrayBufferView.md)\<`ArrayBuffer`\>

##### Returns

`void`
