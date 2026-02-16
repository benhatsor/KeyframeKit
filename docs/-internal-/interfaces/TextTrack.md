[**KeyframeKit.js**](../../README.md)

***

[KeyframeKit.js](../../globals.md) / [\<internal\>](../README.md) / TextTrack

# Interface: TextTrack

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:31985

The **`TextTrack`** interface of the WebVTT API represents a text track associated with a media element.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/TextTrack)

## Extends

- [`EventTarget`](EventTarget.md)

## Properties

### activeCues

> `readonly` **activeCues**: `TextTrackCueList` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:31991

The **`activeCues`** read-only property of the TextTrack interface returns a TextTrackCueList object listing the currently active cues.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/TextTrack/activeCues)

***

### cues

> `readonly` **cues**: `TextTrackCueList` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:31997

The **`cues`** read-only property of the TextTrack interface returns a TextTrackCueList object containing all of the track's cues.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/TextTrack/cues)

***

### id

> `readonly` **id**: `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:32003

The **`id`** read-only property of the TextTrack interface returns the ID of the track if it has one.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/TextTrack/id)

***

### inBandMetadataTrackDispatchType

> `readonly` **inBandMetadataTrackDispatchType**: `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:32009

The **`inBandMetadataTrackDispatchType`** read-only property of the TextTrack interface returns the text track's in-band metadata dispatch type of the text track represented by the TextTrack object.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/TextTrack/inBandMetadataTrackDispatchType)

***

### kind

> `readonly` **kind**: [`TextTrackKind`](../type-aliases/TextTrackKind.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:32015

The **`kind`** read-only property of the TextTrack interface returns the kind of text track this object represents.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/TextTrack/kind)

***

### label

> `readonly` **label**: `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:32021

The **`label`** read-only property of the TextTrack interface returns a human-readable label for the text track, if it is available.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/TextTrack/label)

***

### language

> `readonly` **language**: `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:32027

The **`language`** read-only property of the TextTrack interface returns the language of the text track.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/TextTrack/language)

***

### mode

> **mode**: [`TextTrackMode`](../type-aliases/TextTrackMode.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:32033

The TextTrack interface's **`mode`** property is a string specifying and controlling the text track's mode: `disabled`, `hidden`, or `showing`.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/TextTrack/mode)

***

### oncuechange

> **oncuechange**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:32035

[MDN Reference](https://developer.mozilla.org/docs/Web/API/TextTrack/cuechange_event)

## Methods

### addCue()

> **addCue**(`cue`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:32041

The **`addCue()`** method of the TextTrack interface adds a new cue to the list of cues.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/TextTrack/addCue)

#### Parameters

##### cue

[`TextTrackCue`](TextTrackCue.md)

#### Returns

`void`

***

### addEventListener()

#### Call Signature

> **addEventListener**\<`K`\>(`type`, `listener`, `options?`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:32048

The **`addEventListener()`** method of the EventTarget interface sets up a function that will be called whenever the specified event is delivered to the target.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener)

##### Type Parameters

###### K

`K` *extends* `"cuechange"`

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

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:32049

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

### removeCue()

> **removeCue**(`cue`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:32047

The **`removeCue()`** method of the TextTrack interface removes a cue from the list of cues.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/TextTrack/removeCue)

#### Parameters

##### cue

[`TextTrackCue`](TextTrackCue.md)

#### Returns

`void`

***

### removeEventListener()

#### Call Signature

> **removeEventListener**\<`K`\>(`type`, `listener`, `options?`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:32050

The **`removeEventListener()`** method of the EventTarget interface removes an event listener previously registered with EventTarget.addEventListener() from the target.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/removeEventListener)

##### Type Parameters

###### K

`K` *extends* `"cuechange"`

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

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:32051

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
