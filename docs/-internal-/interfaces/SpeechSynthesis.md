[**KeyframeKit.js**](../../README.md)

***

[KeyframeKit.js](../../globals.md) / [\<internal\>](../README.md) / SpeechSynthesis

# Interface: SpeechSynthesis

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:31045

The **`SpeechSynthesis`** interface of the Web Speech API is the controller interface for the speech service; this can be used to retrieve information about the synthesis voices available on the device, start and pause speech, and other commands besides.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/SpeechSynthesis)

## Extends

- [`EventTarget`](EventTarget.md)

## Properties

### onvoiceschanged

> **onvoiceschanged**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:31047

[MDN Reference](https://developer.mozilla.org/docs/Web/API/SpeechSynthesis/voiceschanged_event)

***

### paused

> `readonly` **paused**: `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:31053

The **`paused`** read-only property of the `true` if the `SpeechSynthesis` object is in a paused state, or `false` if not.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/SpeechSynthesis/paused)

***

### pending

> `readonly` **pending**: `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:31059

The **`pending`** read-only property of the `true` if the utterance queue contains as-yet-unspoken utterances.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/SpeechSynthesis/pending)

***

### speaking

> `readonly` **speaking**: `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:31065

The **`speaking`** read-only property of the `true` if an utterance is currently in the process of being spoken — even if `SpeechSynthesis` is in a A boolean value.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/SpeechSynthesis/speaking)

## Methods

### addEventListener()

#### Call Signature

> **addEventListener**\<`K`\>(`type`, `listener`, `options?`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:31096

The **`addEventListener()`** method of the EventTarget interface sets up a function that will be called whenever the specified event is delivered to the target.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener)

##### Type Parameters

###### K

`K` *extends* `"voiceschanged"`

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

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:31097

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

### cancel()

> **cancel**(): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:31071

The **`cancel()`** method of the SpeechSynthesis interface removes all utterances from the utterance queue.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/SpeechSynthesis/cancel)

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

### getVoices()

> **getVoices**(): [`SpeechSynthesisVoice`](SpeechSynthesisVoice.md)[]

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:31077

The **`getVoices()`** method of the current device.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/SpeechSynthesis/getVoices)

#### Returns

[`SpeechSynthesisVoice`](SpeechSynthesisVoice.md)[]

***

### pause()

> **pause**(): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:31083

The **`pause()`** method of the SpeechSynthesis interface puts the `SpeechSynthesis` object into a paused state.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/SpeechSynthesis/pause)

#### Returns

`void`

***

### removeEventListener()

#### Call Signature

> **removeEventListener**\<`K`\>(`type`, `listener`, `options?`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:31098

The **`removeEventListener()`** method of the EventTarget interface removes an event listener previously registered with EventTarget.addEventListener() from the target.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/removeEventListener)

##### Type Parameters

###### K

`K` *extends* `"voiceschanged"`

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

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:31099

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

### resume()

> **resume**(): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:31089

The **`resume()`** method of the SpeechSynthesis interface puts the `SpeechSynthesis` object into a non-paused state: resumes it if it was already paused.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/SpeechSynthesis/resume)

#### Returns

`void`

***

### speak()

> **speak**(`utterance`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:31095

The **`speak()`** method of the SpeechSynthesis interface adds an SpeechSynthesisUtterance to the utterance queue; it will be spoken when any other utterances queued before it have been spoken.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/SpeechSynthesis/speak)

#### Parameters

##### utterance

[`SpeechSynthesisUtterance`](SpeechSynthesisUtterance.md)

#### Returns

`void`
