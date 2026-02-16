[**KeyframeKit.js**](../../README.md)

***

[KeyframeKit.js](../../globals.md) / [\<internal\>](../README.md) / MediaStream

# Interface: MediaStream

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:20504

The **`MediaStream`** interface of the Media Capture and Streams API represents a stream of media content.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/MediaStream)

## Extends

- [`EventTarget`](EventTarget.md)

## Properties

### active

> `readonly` **active**: `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:20510

The **`active`** read-only property of the `true` if the stream is currently active; otherwise, it returns `false`.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/MediaStream/active)

***

### id

> `readonly` **id**: `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:20516

The **`id`** read-only property of the MediaStream interface is a string containing 36 characters denoting a unique identifier (GUID) for the object.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/MediaStream/id)

***

### onaddtrack

> **onaddtrack**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:20518

[MDN Reference](https://developer.mozilla.org/docs/Web/API/MediaStream/addtrack_event)

***

### onremovetrack

> **onremovetrack**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:20520

[MDN Reference](https://developer.mozilla.org/docs/Web/API/MediaStream/removetrack_event)

## Methods

### addEventListener()

#### Call Signature

> **addEventListener**\<`K`\>(`type`, `listener`, `options?`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:20563

The **`addEventListener()`** method of the EventTarget interface sets up a function that will be called whenever the specified event is delivered to the target.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener)

##### Type Parameters

###### K

`K` *extends* keyof [`MediaStreamEventMap`](MediaStreamEventMap.md)

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

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:20564

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

### addTrack()

> **addTrack**(`track`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:20526

The **`addTrack()`** method of the MediaStream interface adds a new track to the stream.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/MediaStream/addTrack)

#### Parameters

##### track

[`MediaStreamTrack`](MediaStreamTrack.md)

#### Returns

`void`

***

### clone()

> **clone**(): `MediaStream`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:20532

The **`clone()`** method of the MediaStream interface creates a duplicate of the `MediaStream`.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/MediaStream/clone)

#### Returns

`MediaStream`

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

### getAudioTracks()

> **getAudioTracks**(): [`MediaStreamTrack`](MediaStreamTrack.md)[]

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:20538

The **`getAudioTracks()`** method of the stream's track set where MediaStreamTrack.kind is `audio`.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/MediaStream/getAudioTracks)

#### Returns

[`MediaStreamTrack`](MediaStreamTrack.md)[]

***

### getTrackById()

> **getTrackById**(`trackId`): [`MediaStreamTrack`](MediaStreamTrack.md) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:20544

The **`getTrackById()`** method of the MediaStream interface returns a MediaStreamTrack object representing the track with the specified ID string.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/MediaStream/getTrackById)

#### Parameters

##### trackId

`string`

#### Returns

[`MediaStreamTrack`](MediaStreamTrack.md) \| `null`

***

### getTracks()

> **getTracks**(): [`MediaStreamTrack`](MediaStreamTrack.md)[]

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:20550

The **`getTracks()`** method of the stream's track set, regardless of MediaStreamTrack.kind.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/MediaStream/getTracks)

#### Returns

[`MediaStreamTrack`](MediaStreamTrack.md)[]

***

### getVideoTracks()

> **getVideoTracks**(): [`MediaStreamTrack`](MediaStreamTrack.md)[]

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:20556

The **`getVideoTracks()`** method of the ```js-nolint getVideoTracks() ``` None.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/MediaStream/getVideoTracks)

#### Returns

[`MediaStreamTrack`](MediaStreamTrack.md)[]

***

### removeEventListener()

#### Call Signature

> **removeEventListener**\<`K`\>(`type`, `listener`, `options?`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:20565

The **`removeEventListener()`** method of the EventTarget interface removes an event listener previously registered with EventTarget.addEventListener() from the target.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/removeEventListener)

##### Type Parameters

###### K

`K` *extends* keyof [`MediaStreamEventMap`](MediaStreamEventMap.md)

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

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:20566

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

### removeTrack()

> **removeTrack**(`track`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:20562

The **`removeTrack()`** method of the MediaStream interface removes a ```js-nolint removeTrack(track) ``` - `track` - : A MediaStreamTrack that will be removed from the stream.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/MediaStream/removeTrack)

#### Parameters

##### track

[`MediaStreamTrack`](MediaStreamTrack.md)

#### Returns

`void`
