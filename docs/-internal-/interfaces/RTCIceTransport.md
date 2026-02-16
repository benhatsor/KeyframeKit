[**KeyframeKit.js**](../../README.md)

***

[KeyframeKit.js](../../globals.md) / [\<internal\>](../README.md) / RTCIceTransport

# Interface: RTCIceTransport

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:24922

The **`RTCIceTransport`** interface provides access to information about the ICE transport layer over which the data is being sent and received.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCIceTransport)

## Extends

- [`EventTarget`](EventTarget.md)

## Properties

### gatheringState

> `readonly` **gatheringState**: [`RTCIceGathererState`](../type-aliases/RTCIceGathererState.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:24928

The **`gatheringState`** read-only property of the RTCIceTransport interface returns a string that indicates the current gathering state of the ICE agent for this transport: `'new'`, `'gathering'`, or `'complete'`.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCIceTransport/gatheringState)

***

### ongatheringstatechange

> **ongatheringstatechange**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:24930

[MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCIceTransport/gatheringstatechange_event)

***

### onselectedcandidatepairchange

> **onselectedcandidatepairchange**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:24932

[MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCIceTransport/selectedcandidatepairchange_event)

***

### onstatechange

> **onstatechange**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:24934

[MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCIceTransport/statechange_event)

***

### state

> `readonly` **state**: [`RTCIceTransportState`](../type-aliases/RTCIceTransportState.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:24940

The **`state`** read-only property of the RTCIceTransport interface returns the current state of the ICE transport, so you can determine the state of ICE gathering in which the ICE agent currently is operating.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCIceTransport/state)

## Methods

### addEventListener()

#### Call Signature

> **addEventListener**\<`K`\>(`type`, `listener`, `options?`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:24947

The **`addEventListener()`** method of the EventTarget interface sets up a function that will be called whenever the specified event is delivered to the target.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener)

##### Type Parameters

###### K

`K` *extends* keyof [`RTCIceTransportEventMap`](RTCIceTransportEventMap.md)

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

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:24948

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

### getSelectedCandidatePair()

> **getSelectedCandidatePair**(): [`RTCIceCandidatePair`](RTCIceCandidatePair.md) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:24946

The **`getSelectedCandidatePair()`** method of the RTCIceTransport interface returns an RTCIceCandidatePair object containing the current best-choice pair of ICE candidates describing the configuration of the endpoints of the transport.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCIceTransport/getSelectedCandidatePair)

#### Returns

[`RTCIceCandidatePair`](RTCIceCandidatePair.md) \| `null`

***

### removeEventListener()

#### Call Signature

> **removeEventListener**\<`K`\>(`type`, `listener`, `options?`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:24949

The **`removeEventListener()`** method of the EventTarget interface removes an event listener previously registered with EventTarget.addEventListener() from the target.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/removeEventListener)

##### Type Parameters

###### K

`K` *extends* keyof [`RTCIceTransportEventMap`](RTCIceTransportEventMap.md)

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

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:24950

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
