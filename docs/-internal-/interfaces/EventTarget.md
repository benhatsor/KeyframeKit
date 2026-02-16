[**KeyframeKit.js**](../../README.md)

***

[KeyframeKit.js](../../globals.md) / [\<internal\>](../README.md) / EventTarget

# Interface: EventTarget

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11563

The **`EventTarget`** interface is implemented by objects that can receive events and may have listeners for them.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget)

## Extended by

- [`Animation`](Animation.md)
- [`Node`](Node.md)
- [`Window`](Window.md)
- [`AbortSignal`](AbortSignal.md)
- [`CookieStore`](CookieStore.md)
- [`SpeechSynthesis`](SpeechSynthesis.md)
- [`VisualViewport`](VisualViewport.md)
- [`MediaQueryList`](MediaQueryList.md)
- [`Performance`](Performance.md)
- [`MIDIPort`](MIDIPort.md)
- [`MediaStreamTrack`](MediaStreamTrack.md)
- [`PictureInPictureWindow`](PictureInPictureWindow.md)
- [`RTCDataChannel`](RTCDataChannel.md)
- [`MediaStream`](MediaStream.md)
- [`SpeechSynthesisUtterance`](SpeechSynthesisUtterance.md)
- [`TextTrack`](TextTrack.md)
- [`MediaSource`](MediaSource.md)
- [`RemotePlayback`](RemotePlayback.md)
- [`OffscreenCanvas`](OffscreenCanvas.md)
- [`ScreenOrientation`](ScreenOrientation.md)
- [`MessagePort`](MessagePort.md)
- [`NavigationHistoryEntry`](NavigationHistoryEntry.md)
- [`RTCDtlsTransport`](RTCDtlsTransport.md)
- [`TextTrackCue`](TextTrackCue.md)
- [`SourceBuffer`](SourceBuffer.md)
- [`MediaKeySession`](MediaKeySession.md)
- [`IDBRequest`](IDBRequest.md)
- [`IDBTransaction`](IDBTransaction.md)
- [`Worker`](Worker.md)
- [`RTCIceTransport`](RTCIceTransport.md)

## Methods

### addEventListener()

> **addEventListener**(`type`, `callback`, `options?`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11569

The **`addEventListener()`** method of the EventTarget interface sets up a function that will be called whenever the specified event is delivered to the target.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener)

#### Parameters

##### type

`string`

##### callback

[`EventListenerOrEventListenerObject`](../type-aliases/EventListenerOrEventListenerObject.md) | `null`

##### options?

`boolean` | [`AddEventListenerOptions`](AddEventListenerOptions.md)

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

***

### removeEventListener()

> **removeEventListener**(`type`, `callback`, `options?`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11581

The **`removeEventListener()`** method of the EventTarget interface removes an event listener previously registered with EventTarget.addEventListener() from the target.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/removeEventListener)

#### Parameters

##### type

`string`

##### callback

[`EventListenerOrEventListenerObject`](../type-aliases/EventListenerOrEventListenerObject.md) | `null`

##### options?

`boolean` | [`EventListenerOptions`](EventListenerOptions.md)

#### Returns

`void`
