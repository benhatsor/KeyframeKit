[**KeyframeKit.js**](../../README.md)

***

[KeyframeKit.js](../../globals.md) / [\<internal\>](../README.md) / File

# Interface: File

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11608

The **`File`** interface provides information about files and allows JavaScript in a web page to access their content.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/File)

## Extends

- [`Blob`](Blob.md)

## Properties

### lastModified

> `readonly` **lastModified**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11614

The **`lastModified`** read-only property of the File interface provides the last modified date of the file as the number of milliseconds since the Unix epoch (January 1, 1970 at midnight).

[MDN Reference](https://developer.mozilla.org/docs/Web/API/File/lastModified)

***

### name

> `readonly` **name**: `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11620

The **`name`** read-only property of the File interface returns the name of the file represented by a File object.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/File/name)

***

### size

> `readonly` **size**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:4397

The **`size`** read-only property of the Blob interface returns the size of the Blob or File in bytes.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Blob/size)

#### Inherited from

[`Blob`](Blob.md).[`size`](Blob.md#size)

***

### type

> `readonly` **type**: `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:4403

The **`type`** read-only property of the Blob interface returns the MIME type of the file.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Blob/type)

#### Inherited from

[`Blob`](Blob.md).[`type`](Blob.md#type)

***

### webkitRelativePath

> `readonly` **webkitRelativePath**: `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11626

The **`webkitRelativePath`** read-only property of the File interface contains a string which specifies the file's path relative to the directory selected by the user in an input element with its `webkitdirectory` attribute set.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/File/webkitRelativePath)

## Methods

### arrayBuffer()

> **arrayBuffer**(): `Promise`\<`ArrayBuffer`\>

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:4409

The **`arrayBuffer()`** method of the Blob interface returns a Promise that resolves with the contents of the blob as binary data contained in an ArrayBuffer.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Blob/arrayBuffer)

#### Returns

`Promise`\<`ArrayBuffer`\>

#### Inherited from

[`Blob`](Blob.md).[`arrayBuffer`](Blob.md#arraybuffer)

***

### bytes()

> **bytes**(): `Promise`\<`Uint8Array`\<`ArrayBuffer`\>\>

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:4415

The **`bytes()`** method of the Blob interface returns a Promise that resolves with a Uint8Array containing the contents of the blob as an array of bytes.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Blob/bytes)

#### Returns

`Promise`\<`Uint8Array`\<`ArrayBuffer`\>\>

#### Inherited from

[`Blob`](Blob.md).[`bytes`](Blob.md#bytes)

***

### slice()

> **slice**(`start?`, `end?`, `contentType?`): [`Blob`](Blob.md)

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

[`Blob`](Blob.md)

#### Inherited from

[`Blob`](Blob.md).[`slice`](Blob.md#slice)

***

### stream()

> **stream**(): `ReadableStream`\<`Uint8Array`\<`ArrayBuffer`\>\>

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:4427

The **`stream()`** method of the Blob interface returns a ReadableStream which upon reading returns the data contained within the `Blob`.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Blob/stream)

#### Returns

`ReadableStream`\<`Uint8Array`\<`ArrayBuffer`\>\>

#### Inherited from

[`Blob`](Blob.md).[`stream`](Blob.md#stream)

***

### text()

> **text**(): `Promise`\<`string`\>

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:4433

The **`text()`** method of the string containing the contents of the blob, interpreted as UTF-8.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Blob/text)

#### Returns

`Promise`\<`string`\>

#### Inherited from

[`Blob`](Blob.md).[`text`](Blob.md#text)
