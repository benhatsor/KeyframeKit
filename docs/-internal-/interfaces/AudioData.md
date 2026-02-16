[**KeyframeKit.js**](../../README.md)

***

[KeyframeKit.js](../../globals.md) / [\<internal\>](../README.md) / AudioData

# Interface: AudioData

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:3432

The **`AudioData`** interface of the WebCodecs API represents an audio sample.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/AudioData)

## Properties

### duration

> `readonly` **duration**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:3438

The **`duration`** read-only property of the AudioData interface returns the duration in microseconds of this `AudioData` object.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/AudioData/duration)

***

### format

> `readonly` **format**: [`AudioSampleFormat`](../type-aliases/AudioSampleFormat.md) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:3444

The **`format`** read-only property of the AudioData interface returns the sample format of the `AudioData` object.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/AudioData/format)

***

### numberOfChannels

> `readonly` **numberOfChannels**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:3450

The **`numberOfChannels`** read-only property of the AudioData interface returns the number of channels in the `AudioData` object.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/AudioData/numberOfChannels)

***

### numberOfFrames

> `readonly` **numberOfFrames**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:3456

The **`numberOfFrames`** read-only property of the AudioData interface returns the number of frames in the `AudioData` object.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/AudioData/numberOfFrames)

***

### sampleRate

> `readonly` **sampleRate**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:3462

The **`sampleRate`** read-only property of the AudioData interface returns the sample rate in Hz.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/AudioData/sampleRate)

***

### timestamp

> `readonly` **timestamp**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:3468

The **`timestamp`** read-only property of the AudioData interface returns the timestamp of this `AudioData` object.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/AudioData/timestamp)

## Methods

### allocationSize()

> **allocationSize**(`options`): `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:3474

The **`allocationSize()`** method of the AudioData interface returns the size in bytes required to hold the current sample as filtered by options passed into the method.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/AudioData/allocationSize)

#### Parameters

##### options

[`AudioDataCopyToOptions`](AudioDataCopyToOptions.md)

#### Returns

`number`

***

### clone()

> **clone**(): `AudioData`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:3480

The **`clone()`** method of the AudioData interface creates a new `AudioData` object with reference to the same media resource as the original.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/AudioData/clone)

#### Returns

`AudioData`

***

### close()

> **close**(): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:3486

The **`close()`** method of the AudioData interface clears all states and releases the reference to the media resource.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/AudioData/close)

#### Returns

`void`

***

### copyTo()

> **copyTo**(`destination`, `options`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:3492

The **`copyTo()`** method of the AudioData interface copies a plane of an `AudioData` object to a destination buffer.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/AudioData/copyTo)

#### Parameters

##### destination

[`AllowSharedBufferSource`](../type-aliases/AllowSharedBufferSource.md)

##### options

[`AudioDataCopyToOptions`](AudioDataCopyToOptions.md)

#### Returns

`void`
