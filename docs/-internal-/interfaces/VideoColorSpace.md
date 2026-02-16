[**KeyframeKit.js**](../../README.md)

***

[KeyframeKit.js](../../globals.md) / [\<internal\>](../README.md) / VideoColorSpace

# Interface: VideoColorSpace

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:33030

The **`VideoColorSpace`** interface of the WebCodecs API represents the color space of a video.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/VideoColorSpace)

## Properties

### fullRange

> `readonly` **fullRange**: `boolean` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:33036

The **`fullRange`** read-only property of the VideoColorSpace interface returns `true` if full-range color values are used.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/VideoColorSpace/fullRange)

***

### matrix

> `readonly` **matrix**: [`VideoMatrixCoefficients`](../type-aliases/VideoMatrixCoefficients.md) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:33042

The **`matrix`** read-only property of the VideoColorSpace interface returns the matrix coefficient of the video.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/VideoColorSpace/matrix)

***

### primaries

> `readonly` **primaries**: [`VideoColorPrimaries`](../type-aliases/VideoColorPrimaries.md) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:33048

The **`primaries`** read-only property of the VideoColorSpace interface returns the color gamut of the video.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/VideoColorSpace/primaries)

***

### transfer

> `readonly` **transfer**: [`VideoTransferCharacteristics`](../type-aliases/VideoTransferCharacteristics.md) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:33054

The **`transfer`** read-only property of the VideoColorSpace interface returns the opto-electronic transfer characteristics of the video.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/VideoColorSpace/transfer)

## Methods

### toJSON()

> **toJSON**(): [`VideoColorSpaceInit`](VideoColorSpaceInit.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:33060

The **`toJSON()`** method of the VideoColorSpace interface is a _serializer_ that returns a JSON representation of the `VideoColorSpace` object.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/VideoColorSpace/toJSON)

#### Returns

[`VideoColorSpaceInit`](VideoColorSpaceInit.md)
