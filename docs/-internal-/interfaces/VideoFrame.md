[**KeyframeKit.js**](../../README.md)

***

[KeyframeKit.js](../../globals.md) / [\<internal\>](../README.md) / VideoFrame

# Interface: VideoFrame

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:33217

The **`VideoFrame`** interface of the Web Codecs API represents a frame of a video.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/VideoFrame)

## Properties

### codedHeight

> `readonly` **codedHeight**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:33223

The **`codedHeight`** property of the VideoFrame interface returns the height of the VideoFrame in pixels, potentially including non-visible padding, and prior to considering potential ratio adjustments.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/VideoFrame/codedHeight)

***

### codedRect

> `readonly` **codedRect**: [`DOMRectReadOnly`](DOMRectReadOnly.md) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:33229

The **`codedRect`** property of the VideoFrame interface returns a DOMRectReadOnly with the width and height matching VideoFrame.codedWidth and VideoFrame.codedHeight.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/VideoFrame/codedRect)

***

### codedWidth

> `readonly` **codedWidth**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:33235

The **`codedWidth`** property of the VideoFrame interface returns the width of the `VideoFrame` in pixels, potentially including non-visible padding, and prior to considering potential ratio adjustments.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/VideoFrame/codedWidth)

***

### colorSpace

> `readonly` **colorSpace**: [`VideoColorSpace`](VideoColorSpace.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:33241

The **`colorSpace`** property of the VideoFrame interface returns a VideoColorSpace object representing the color space of the video.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/VideoFrame/colorSpace)

***

### displayHeight

> `readonly` **displayHeight**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:33247

The **`displayHeight`** property of the VideoFrame interface returns the height of the `VideoFrame` after applying aspect ratio adjustments.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/VideoFrame/displayHeight)

***

### displayWidth

> `readonly` **displayWidth**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:33253

The **`displayWidth`** property of the VideoFrame interface returns the width of the `VideoFrame` after applying aspect ratio adjustments.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/VideoFrame/displayWidth)

***

### duration

> `readonly` **duration**: `number` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:33259

The **`duration`** property of the VideoFrame interface returns an integer indicating the duration of the video in microseconds.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/VideoFrame/duration)

***

### format

> `readonly` **format**: [`VideoPixelFormat`](../type-aliases/VideoPixelFormat.md) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:33265

The **`format`** property of the VideoFrame interface returns the pixel format of the `VideoFrame`.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/VideoFrame/format)

***

### timestamp

> `readonly` **timestamp**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:33271

The **`timestamp`** property of the VideoFrame interface returns an integer indicating the timestamp of the video in microseconds.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/VideoFrame/timestamp)

***

### visibleRect

> `readonly` **visibleRect**: [`DOMRectReadOnly`](DOMRectReadOnly.md) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:33277

The **`visibleRect`** property of the VideoFrame interface returns a DOMRectReadOnly describing the visible rectangle of pixels for this `VideoFrame`.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/VideoFrame/visibleRect)

## Methods

### allocationSize()

> **allocationSize**(`options?`): `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:33283

The **`allocationSize()`** method of the VideoFrame interface returns the number of bytes required to hold the video as filtered by options passed into the method.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/VideoFrame/allocationSize)

#### Parameters

##### options?

[`VideoFrameCopyToOptions`](VideoFrameCopyToOptions.md)

#### Returns

`number`

***

### clone()

> **clone**(): `VideoFrame`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:33289

The **`clone()`** method of the VideoFrame interface creates a new `VideoFrame` object referencing the same media resource as the original.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/VideoFrame/clone)

#### Returns

`VideoFrame`

***

### close()

> **close**(): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:33295

The **`close()`** method of the VideoFrame interface clears all states and releases the reference to the media resource.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/VideoFrame/close)

#### Returns

`void`

***

### copyTo()

> **copyTo**(`destination`, `options?`): `Promise`\<[`PlaneLayout`](PlaneLayout.md)[]\>

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:33301

The **`copyTo()`** method of the VideoFrame interface copies the contents of the `VideoFrame` to an `ArrayBuffer`.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/VideoFrame/copyTo)

#### Parameters

##### destination

[`AllowSharedBufferSource`](../type-aliases/AllowSharedBufferSource.md)

##### options?

[`VideoFrameCopyToOptions`](VideoFrameCopyToOptions.md)

#### Returns

`Promise`\<[`PlaneLayout`](PlaneLayout.md)[]\>
