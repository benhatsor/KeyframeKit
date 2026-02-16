[**KeyframeKit.js**](../../README.md)

***

[KeyframeKit.js](../../globals.md) / [\<internal\>](../README.md) / MediaSource

# Interface: MediaSource

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:20400

The **`MediaSource`** interface of the Media Source Extensions API represents a source of media data for an HTMLMediaElement object.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/MediaSource)

## Extends

- [`EventTarget`](EventTarget.md)

## Properties

### activeSourceBuffers

> `readonly` **activeSourceBuffers**: `SourceBufferList`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:20406

The **`activeSourceBuffers`** read-only property of the containing a subset of the SourceBuffer objects contained within providing the selected video track, enabled audio tracks, and shown/hidden text tracks.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/MediaSource/activeSourceBuffers)

***

### duration

> **duration**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:20412

The **`duration`** property of the MediaSource interface gets and sets the duration of the current media being presented.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/MediaSource/duration)

***

### onsourceclose

> **onsourceclose**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:20413

***

### onsourceended

> **onsourceended**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:20414

***

### onsourceopen

> **onsourceopen**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:20415

***

### readyState

> `readonly` **readyState**: [`ReadyState`](../type-aliases/ReadyState.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:20421

The **`readyState`** read-only property of the current `MediaSource`.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/MediaSource/readyState)

***

### sourceBuffers

> `readonly` **sourceBuffers**: `SourceBufferList`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:20427

The **`sourceBuffers`** read-only property of the containing the list of SourceBuffer objects associated with this `MediaSource`.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/MediaSource/sourceBuffers)

## Methods

### addEventListener()

#### Call Signature

> **addEventListener**\<`K`\>(`type`, `listener`, `options?`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:20458

The **`addEventListener()`** method of the EventTarget interface sets up a function that will be called whenever the specified event is delivered to the target.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener)

##### Type Parameters

###### K

`K` *extends* keyof [`MediaSourceEventMap`](MediaSourceEventMap.md)

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

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:20459

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

### addSourceBuffer()

> **addSourceBuffer**(`type`): [`SourceBuffer`](SourceBuffer.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:20433

The **`addSourceBuffer()`** method of the given MIME type and adds it to the `MediaSource`'s `SourceBuffer` is also returned.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/MediaSource/addSourceBuffer)

#### Parameters

##### type

`string`

#### Returns

[`SourceBuffer`](SourceBuffer.md)

***

### clearLiveSeekableRange()

> **clearLiveSeekableRange**(): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:20439

The **`clearLiveSeekableRange()`** method of the to MediaSource.setLiveSeekableRange().

[MDN Reference](https://developer.mozilla.org/docs/Web/API/MediaSource/clearLiveSeekableRange)

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

### endOfStream()

> **endOfStream**(`error?`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:20445

The **`endOfStream()`** method of the ```js-nolint endOfStream() endOfStream(endOfStreamError) ``` - `endOfStreamError` MISSING: optional_inline] - : A string representing an error to throw when the end of the stream is reached.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/MediaSource/endOfStream)

#### Parameters

##### error?

[`EndOfStreamError`](../type-aliases/EndOfStreamError.md)

#### Returns

`void`

***

### removeEventListener()

#### Call Signature

> **removeEventListener**\<`K`\>(`type`, `listener`, `options?`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:20460

The **`removeEventListener()`** method of the EventTarget interface removes an event listener previously registered with EventTarget.addEventListener() from the target.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/removeEventListener)

##### Type Parameters

###### K

`K` *extends* keyof [`MediaSourceEventMap`](MediaSourceEventMap.md)

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

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:20461

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

### removeSourceBuffer()

> **removeSourceBuffer**(`sourceBuffer`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:20451

The **`removeSourceBuffer()`** method of the MediaSource interface removes the given SourceBuffer from the SourceBufferList associated with this `MediaSource` object.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/MediaSource/removeSourceBuffer)

#### Parameters

##### sourceBuffer

[`SourceBuffer`](SourceBuffer.md)

#### Returns

`void`

***

### setLiveSeekableRange()

> **setLiveSeekableRange**(`start`, `end`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:20457

The **`setLiveSeekableRange()`** method of the media element.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/MediaSource/setLiveSeekableRange)

#### Parameters

##### start

`number`

##### end

`number`

#### Returns

`void`
