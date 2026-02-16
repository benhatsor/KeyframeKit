[**KeyframeKit.js**](../../README.md)

***

[KeyframeKit.js](../../globals.md) / [\<internal\>](../README.md) / TextTrackCue

# Interface: TextTrackCue

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:32069

The **`TextTrackCue`** interface of the WebVTT API is the abstract base class for the various derived cue types, such as VTTCue; you will work with these derived types rather than the base class.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/TextTrackCue)

## Extends

- [`EventTarget`](EventTarget.md)

## Properties

### endTime

> **endTime**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:32075

The **`endTime`** property of the TextTrackCue interface returns and sets the end time of the cue.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/TextTrackCue/endTime)

***

### id

> **id**: `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:32081

The **`id`** property of the TextTrackCue interface returns and sets the identifier for this cue.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/TextTrackCue/id)

***

### onenter

> **onenter**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:32083

[MDN Reference](https://developer.mozilla.org/docs/Web/API/TextTrackCue/enter_event)

***

### onexit

> **onexit**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:32085

[MDN Reference](https://developer.mozilla.org/docs/Web/API/TextTrackCue/exit_event)

***

### pauseOnExit

> **pauseOnExit**: `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:32091

The **`pauseOnExit`** property of the TextTrackCue interface returns or sets the flag indicating whether playback of the media should pause when the end of the range to which this cue applies is reached.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/TextTrackCue/pauseOnExit)

***

### startTime

> **startTime**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:32097

The **`startTime`** property of the TextTrackCue interface returns and sets the start time of the cue.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/TextTrackCue/startTime)

***

### track

> `readonly` **track**: [`TextTrack`](TextTrack.md) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:32103

The **`track`** read-only property of the TextTrackCue interface returns the TextTrack object that this cue belongs to.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/TextTrackCue/track)

## Methods

### addEventListener()

#### Call Signature

> **addEventListener**\<`K`\>(`type`, `listener`, `options?`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:32104

The **`addEventListener()`** method of the EventTarget interface sets up a function that will be called whenever the specified event is delivered to the target.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener)

##### Type Parameters

###### K

`K` *extends* keyof [`TextTrackCueEventMap`](TextTrackCueEventMap.md)

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

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:32105

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

### removeEventListener()

#### Call Signature

> **removeEventListener**\<`K`\>(`type`, `listener`, `options?`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:32106

The **`removeEventListener()`** method of the EventTarget interface removes an event listener previously registered with EventTarget.addEventListener() from the target.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/removeEventListener)

##### Type Parameters

###### K

`K` *extends* keyof [`TextTrackCueEventMap`](TextTrackCueEventMap.md)

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

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:32107

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
