[**KeyframeKit.js**](../../README.md)

***

[KeyframeKit.js](../../globals.md) / [\<internal\>](../README.md) / RemotePlayback

# Interface: RemotePlayback

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:25991

The **`RemotePlayback`** interface of the Remote Playback API allows the page to detect availability of remote playback devices, then connect to and control playing on these devices.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/RemotePlayback)

## Extends

- [`EventTarget`](EventTarget.md)

## Properties

### onconnect

> **onconnect**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:25993

[MDN Reference](https://developer.mozilla.org/docs/Web/API/RemotePlayback/connect_event)

***

### onconnecting

> **onconnecting**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:25995

[MDN Reference](https://developer.mozilla.org/docs/Web/API/RemotePlayback/connecting_event)

***

### ondisconnect

> **ondisconnect**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:25997

[MDN Reference](https://developer.mozilla.org/docs/Web/API/RemotePlayback/disconnect_event)

***

### state

> `readonly` **state**: [`RemotePlaybackState`](../type-aliases/RemotePlaybackState.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:26003

The **`state`** read-only property of the RemotePlayback interface returns the current state of the `RemotePlayback` connection.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/RemotePlayback/state)

## Methods

### addEventListener()

#### Call Signature

> **addEventListener**\<`K`\>(`type`, `listener`, `options?`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:26022

The **`addEventListener()`** method of the EventTarget interface sets up a function that will be called whenever the specified event is delivered to the target.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener)

##### Type Parameters

###### K

`K` *extends* keyof [`RemotePlaybackEventMap`](RemotePlaybackEventMap.md)

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

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:26023

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

### cancelWatchAvailability()

> **cancelWatchAvailability**(`id?`): `Promise`\<`void`\>

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:26009

The **`cancelWatchAvailability()`** method of the RemotePlayback interface cancels the request to watch for one or all available devices.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/RemotePlayback/cancelWatchAvailability)

#### Parameters

##### id?

`number`

#### Returns

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

### prompt()

> **prompt**(): `Promise`\<`void`\>

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:26015

The **`prompt()`** method of the RemotePlayback interface prompts the user to select an available remote playback device and give permission for the current media to be played using that device.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/RemotePlayback/prompt)

#### Returns

`Promise`\<`void`\>

***

### removeEventListener()

#### Call Signature

> **removeEventListener**\<`K`\>(`type`, `listener`, `options?`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:26024

The **`removeEventListener()`** method of the EventTarget interface removes an event listener previously registered with EventTarget.addEventListener() from the target.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/removeEventListener)

##### Type Parameters

###### K

`K` *extends* keyof [`RemotePlaybackEventMap`](RemotePlaybackEventMap.md)

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

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:26025

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

### watchAvailability()

> **watchAvailability**(`callback`): `Promise`\<`number`\>

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:26021

The **`watchAvailability()`** method of the RemotePlayback interface watches the list of available remote playback devices and returns a Promise that resolves with the `callbackId` of a remote playback device.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/RemotePlayback/watchAvailability)

#### Parameters

##### callback

[`RemotePlaybackAvailabilityCallback`](RemotePlaybackAvailabilityCallback.md)

#### Returns

`Promise`\<`number`\>
