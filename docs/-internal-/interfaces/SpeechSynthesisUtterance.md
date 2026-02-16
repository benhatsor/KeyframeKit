[**KeyframeKit.js**](../../README.md)

***

[KeyframeKit.js](../../globals.md) / [\<internal\>](../README.md) / SpeechSynthesisUtterance

# Interface: SpeechSynthesisUtterance

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:31184

The **`SpeechSynthesisUtterance`** interface of the Web Speech API represents a speech request.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/SpeechSynthesisUtterance)

## Extends

- [`EventTarget`](EventTarget.md)

## Properties

### lang

> **lang**: `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:31190

The **`lang`** property of the SpeechSynthesisUtterance interface gets and sets the language of the utterance.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/SpeechSynthesisUtterance/lang)

***

### onboundary

> **onboundary**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:31192

[MDN Reference](https://developer.mozilla.org/docs/Web/API/SpeechSynthesisUtterance/boundary_event)

***

### onend

> **onend**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:31194

[MDN Reference](https://developer.mozilla.org/docs/Web/API/SpeechSynthesisUtterance/end_event)

***

### onerror

> **onerror**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:31196

[MDN Reference](https://developer.mozilla.org/docs/Web/API/SpeechSynthesisUtterance/error_event)

***

### onmark

> **onmark**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:31198

[MDN Reference](https://developer.mozilla.org/docs/Web/API/SpeechSynthesisUtterance/mark_event)

***

### onpause

> **onpause**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:31200

[MDN Reference](https://developer.mozilla.org/docs/Web/API/SpeechSynthesisUtterance/pause_event)

***

### onresume

> **onresume**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:31202

[MDN Reference](https://developer.mozilla.org/docs/Web/API/SpeechSynthesisUtterance/resume_event)

***

### onstart

> **onstart**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:31204

[MDN Reference](https://developer.mozilla.org/docs/Web/API/SpeechSynthesisUtterance/start_event)

***

### pitch

> **pitch**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:31210

The **`pitch`** property of the SpeechSynthesisUtterance interface gets and sets the pitch at which the utterance will be spoken at.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/SpeechSynthesisUtterance/pitch)

***

### rate

> **rate**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:31216

The **`rate`** property of the SpeechSynthesisUtterance interface gets and sets the speed at which the utterance will be spoken at.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/SpeechSynthesisUtterance/rate)

***

### text

> **text**: `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:31222

The **`text`** property of the The text may be provided as plain text, or a well-formed SSML document.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/SpeechSynthesisUtterance/text)

***

### voice

> **voice**: [`SpeechSynthesisVoice`](SpeechSynthesisVoice.md) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:31228

The **`voice`** property of the SpeechSynthesisUtterance interface gets and sets the voice that will be used to speak the utterance.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/SpeechSynthesisUtterance/voice)

***

### volume

> **volume**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:31234

The **`volume`** property of the SpeechSynthesisUtterance interface gets and sets the volume that the utterance will be spoken at.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/SpeechSynthesisUtterance/volume)

## Methods

### addEventListener()

#### Call Signature

> **addEventListener**\<`K`\>(`type`, `listener`, `options?`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:31235

The **`addEventListener()`** method of the EventTarget interface sets up a function that will be called whenever the specified event is delivered to the target.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener)

##### Type Parameters

###### K

`K` *extends* keyof [`SpeechSynthesisUtteranceEventMap`](SpeechSynthesisUtteranceEventMap.md)

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

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:31236

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

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:31237

The **`removeEventListener()`** method of the EventTarget interface removes an event listener previously registered with EventTarget.addEventListener() from the target.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/removeEventListener)

##### Type Parameters

###### K

`K` *extends* keyof [`SpeechSynthesisUtteranceEventMap`](SpeechSynthesisUtteranceEventMap.md)

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

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:31238

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
