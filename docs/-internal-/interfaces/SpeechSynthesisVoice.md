[**KeyframeKit.js**](../../README.md)

***

[KeyframeKit.js](../../globals.md) / [\<internal\>](../README.md) / SpeechSynthesisVoice

# Interface: SpeechSynthesisVoice

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:31251

The **`SpeechSynthesisVoice`** interface of the Web Speech API represents a voice that the system supports.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/SpeechSynthesisVoice)

## Properties

### default

> `readonly` **default**: `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:31257

The **`default`** read-only property of the indicating whether the voice is the default voice for the current app (`true`), or not (`false`.) A boolean value.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/SpeechSynthesisVoice/default)

***

### lang

> `readonly` **lang**: `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:31263

The **`lang`** read-only property of the SpeechSynthesisVoice interface returns a BCP 47 language tag indicating the language of the voice.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/SpeechSynthesisVoice/lang)

***

### localService

> `readonly` **localService**: `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:31269

The **`localService`** read-only property of the indicating whether the voice is supplied by a local speech synthesizer service (`true`), or a remote speech synthesizer service (`false`.) This property is provided to allow differentiation in the case that some voice options are provided by a remote service; it is possible that remote voices might have extra latency, bandwidth or cost associated with them, so such distinction may be useful.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/SpeechSynthesisVoice/localService)

***

### name

> `readonly` **name**: `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:31275

The **`name`** read-only property of the represents the voice.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/SpeechSynthesisVoice/name)

***

### voiceURI

> `readonly` **voiceURI**: `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:31281

The **`voiceURI`** read-only property of the the speech synthesis service for this voice.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/SpeechSynthesisVoice/voiceURI)
