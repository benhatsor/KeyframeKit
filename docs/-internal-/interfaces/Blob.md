[**KeyframeKit.js**](../../README.md)

***

[KeyframeKit.js](../../globals.md) / [\<internal\>](../README.md) / Blob

# Interface: Blob

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:4391

The **`Blob`** interface represents a blob, which is a file-like object of immutable, raw data; they can be read as text or binary data, or converted into a ReadableStream so its methods can be used for processing the data.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Blob)

## Extended by

- [`File`](File.md)

## Properties

### size

> `readonly` **size**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:4397

The **`size`** read-only property of the Blob interface returns the size of the Blob or File in bytes.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Blob/size)

***

### type

> `readonly` **type**: `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:4403

The **`type`** read-only property of the Blob interface returns the MIME type of the file.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Blob/type)

## Methods

### arrayBuffer()

> **arrayBuffer**(): `Promise`\<`ArrayBuffer`\>

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:4409

The **`arrayBuffer()`** method of the Blob interface returns a Promise that resolves with the contents of the blob as binary data contained in an ArrayBuffer.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Blob/arrayBuffer)

#### Returns

`Promise`\<`ArrayBuffer`\>

***

### bytes()

> **bytes**(): `Promise`\<`Uint8Array`\<`ArrayBuffer`\>\>

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:4415

The **`bytes()`** method of the Blob interface returns a Promise that resolves with a Uint8Array containing the contents of the blob as an array of bytes.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Blob/bytes)

#### Returns

`Promise`\<`Uint8Array`\<`ArrayBuffer`\>\>

***

### slice()

> **slice**(`start?`, `end?`, `contentType?`): `Blob`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:4421

The **`slice()`** method of the Blob interface creates and returns a new `Blob` object which contains data from a subset of the blob on which it's called.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Blob/slice)

#### Parameters

##### start?

`number`

##### end?

`number`

##### contentType?

`string`

#### Returns

`Blob`

***

### stream()

> **stream**(): `ReadableStream`\<`Uint8Array`\<`ArrayBuffer`\>\>

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:4427

The **`stream()`** method of the Blob interface returns a ReadableStream which upon reading returns the data contained within the `Blob`.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Blob/stream)

#### Returns

`ReadableStream`\<`Uint8Array`\<`ArrayBuffer`\>\>

***

### text()

> **text**(): `Promise`\<`string`\>

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:4433

The **`text()`** method of the string containing the contents of the blob, interpreted as UTF-8.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Blob/text)

#### Returns

`Promise`\<`string`\>
