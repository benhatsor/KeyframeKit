[**KeyframeKit.js**](../../README.md)

***

[KeyframeKit.js](../../globals.md) / [\<internal\>](../README.md) / MediaError

# Interface: MediaError

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:19848

The **`MediaError`** interface represents an error which occurred while handling media in an HTML media element based on HTMLMediaElement, such as audio or video.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/MediaError)

## Properties

### code

> `readonly` **code**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:19854

The read-only property **`MediaError.code`** returns a numeric value which represents the kind of error that occurred on a media element.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/MediaError/code)

***

### MEDIA\_ERR\_ABORTED

> `readonly` **MEDIA\_ERR\_ABORTED**: `1`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:19861

***

### MEDIA\_ERR\_DECODE

> `readonly` **MEDIA\_ERR\_DECODE**: `3`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:19863

***

### MEDIA\_ERR\_NETWORK

> `readonly` **MEDIA\_ERR\_NETWORK**: `2`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:19862

***

### MEDIA\_ERR\_SRC\_NOT\_SUPPORTED

> `readonly` **MEDIA\_ERR\_SRC\_NOT\_SUPPORTED**: `4`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:19864

***

### message

> `readonly` **message**: `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:19860

The read-only property **`MediaError.message`** returns a human-readable string offering specific diagnostic details related to the error described by the `MediaError` object, or an empty string (`''`) if no diagnostic information can be determined or provided.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/MediaError/message)
