[**KeyframeKit.js**](../../README.md)

***

[KeyframeKit.js](../../globals.md) / [\<internal\>](../README.md) / SourceBuffer

# Interface: SourceBuffer

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:30842

The **`SourceBuffer`** interface represents a chunk of media to be passed into an HTMLMediaElement and played, via a MediaSource object.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/SourceBuffer)

## Extends

- [`EventTarget`](EventTarget.md)

## Properties

### appendWindowEnd

> **appendWindowEnd**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:30848

The **`appendWindowEnd`** property of the timestamp range that can be used to filter what media data is appended to the `SourceBuffer`.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/SourceBuffer/appendWindowEnd)

***

### appendWindowStart

> **appendWindowStart**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:30854

The **`appendWindowStart`** property of the timestamp range that can be used to filter what media data is appended to the `SourceBuffer`.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/SourceBuffer/appendWindowStart)

***

### buffered

> `readonly` **buffered**: [`TimeRanges`](TimeRanges.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:30860

The **`buffered`** read-only property of the buffered in the `SourceBuffer` as a normalized TimeRanges object.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/SourceBuffer/buffered)

***

### mode

> **mode**: [`AppendMode`](../type-aliases/AppendMode.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:30866

The **`mode`** property of the SourceBuffer interface controls whether media segments can be appended to the `SourceBuffer` in any order, or in a strict sequence.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/SourceBuffer/mode)

***

### onabort

> **onabort**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:30867

***

### onerror

> **onerror**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:30868

***

### onupdate

> **onupdate**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:30869

***

### onupdateend

> **onupdateend**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:30870

***

### onupdatestart

> **onupdatestart**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:30871

***

### timestampOffset

> **timestampOffset**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:30877

The **`timestampOffset`** property of the media segments that are appended to the `SourceBuffer`.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/SourceBuffer/timestampOffset)

***

### updating

> `readonly` **updating**: `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:30883

The **`updating`** read-only property of the currently being updated — i.e., whether an SourceBuffer.appendBuffer() or SourceBuffer.remove() operation is currently in progress.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/SourceBuffer/updating)

## Methods

### abort()

> **abort**(): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:30889

The **`abort()`** method of the SourceBuffer interface aborts the current segment and resets the segment parser.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/SourceBuffer/abort)

#### Returns

`void`

***

### addEventListener()

#### Call Signature

> **addEventListener**\<`K`\>(`type`, `listener`, `options?`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:30908

The **`addEventListener()`** method of the EventTarget interface sets up a function that will be called whenever the specified event is delivered to the target.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener)

##### Type Parameters

###### K

`K` *extends* keyof [`SourceBufferEventMap`](SourceBufferEventMap.md)

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

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:30909

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

### appendBuffer()

> **appendBuffer**(`data`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:30895

The **`appendBuffer()`** method of the to the `SourceBuffer`.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/SourceBuffer/appendBuffer)

#### Parameters

##### data

[`BufferSource`](../type-aliases/BufferSource.md)

#### Returns

`void`

***

### changeType()

> **changeType**(`type`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:30901

The **`changeType()`** method of the data to conform to.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/SourceBuffer/changeType)

#### Parameters

##### type

`string`

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

### remove()

> **remove**(`start`, `end`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:30907

The **`remove()`** method of the SourceBuffer interface removes media segments within a specific time range from the `SourceBuffer`.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/SourceBuffer/remove)

#### Parameters

##### start

`number`

##### end

`number`

#### Returns

`void`

***

### removeEventListener()

#### Call Signature

> **removeEventListener**\<`K`\>(`type`, `listener`, `options?`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:30910

The **`removeEventListener()`** method of the EventTarget interface removes an event listener previously registered with EventTarget.addEventListener() from the target.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/removeEventListener)

##### Type Parameters

###### K

`K` *extends* keyof [`SourceBufferEventMap`](SourceBufferEventMap.md)

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

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:30911

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
