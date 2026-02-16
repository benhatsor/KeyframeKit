[**KeyframeKit.js**](../../README.md)

***

[KeyframeKit.js](../../globals.md) / [\<internal\>](../README.md) / AudioBuffer

# Interface: AudioBuffer

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:3247

The **`AudioBuffer`** interface represents a short audio asset residing in memory, created from an audio file using the BaseAudioContext/decodeAudioData method, or from raw data using BaseAudioContext/createBuffer.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/AudioBuffer)

## Properties

### duration

> `readonly` **duration**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:3253

The **`duration`** property of the AudioBuffer interface returns a double representing the duration, in seconds, of the PCM data stored in the buffer.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/AudioBuffer/duration)

***

### length

> `readonly` **length**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:3259

The **`length`** property of the AudioBuffer interface returns an integer representing the length, in sample-frames, of the PCM data stored in the buffer.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/AudioBuffer/length)

***

### numberOfChannels

> `readonly` **numberOfChannels**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:3265

The `numberOfChannels` property of the AudioBuffer interface returns an integer representing the number of discrete audio channels described by the PCM data stored in the buffer.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/AudioBuffer/numberOfChannels)

***

### sampleRate

> `readonly` **sampleRate**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:3271

The **`sampleRate`** property of the AudioBuffer interface returns a float representing the sample rate, in samples per second, of the PCM data stored in the buffer.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/AudioBuffer/sampleRate)

## Methods

### copyFromChannel()

> **copyFromChannel**(`destination`, `channelNumber`, `bufferOffset?`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:3277

The **`copyFromChannel()`** method of the channel of the `AudioBuffer` to a specified ```js-nolint copyFromChannel(destination, channelNumber, startInChannel) ``` - `destination` - : A Float32Array to copy the channel's samples to.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/AudioBuffer/copyFromChannel)

#### Parameters

##### destination

`Float32Array`\<`ArrayBuffer`\>

##### channelNumber

`number`

##### bufferOffset?

`number`

#### Returns

`void`

***

### copyToChannel()

> **copyToChannel**(`source`, `channelNumber`, `bufferOffset?`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:3283

The `copyToChannel()` method of the AudioBuffer interface copies the samples to the specified channel of the `AudioBuffer`, from the source array.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/AudioBuffer/copyToChannel)

#### Parameters

##### source

`Float32Array`\<`ArrayBuffer`\>

##### channelNumber

`number`

##### bufferOffset?

`number`

#### Returns

`void`

***

### getChannelData()

> **getChannelData**(`channel`): `Float32Array`\<`ArrayBuffer`\>

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:3289

The **`getChannelData()`** method of the AudioBuffer Interface returns a Float32Array containing the PCM data associated with the channel, defined by the channel parameter (with 0 representing the first channel).

[MDN Reference](https://developer.mozilla.org/docs/Web/API/AudioBuffer/getChannelData)

#### Parameters

##### channel

`number`

#### Returns

`Float32Array`\<`ArrayBuffer`\>
