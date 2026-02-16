[**KeyframeKit.js**](../../README.md)

***

[KeyframeKit.js](../../globals.md) / [\<internal\>](../README.md) / WritableStream

# Interface: WritableStream\<W\>

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36993

The **`WritableStream`** interface of the Streams API provides a standard abstraction for writing streaming data to a destination, known as a sink.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/WritableStream)

## Type Parameters

### W

`W` = `any`

## Properties

### locked

> `readonly` **locked**: `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36999

The **`locked`** read-only property of the WritableStream interface returns a boolean indicating whether the `WritableStream` is locked to a writer.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/WritableStream/locked)

## Methods

### abort()

> **abort**(`reason?`): `Promise`\<`void`\>

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:37005

The **`abort()`** method of the WritableStream interface aborts the stream, signaling that the producer can no longer successfully write to the stream and it is to be immediately moved to an error state, with any queued writes discarded.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/WritableStream/abort)

#### Parameters

##### reason?

`any`

#### Returns

`Promise`\<`void`\>

***

### close()

> **close**(): `Promise`\<`void`\>

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:37011

The **`close()`** method of the WritableStream interface closes the associated stream.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/WritableStream/close)

#### Returns

`Promise`\<`void`\>

***

### getWriter()

> **getWriter**(): [`WritableStreamDefaultWriter`](WritableStreamDefaultWriter.md)\<`W`\>

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:37017

The **`getWriter()`** method of the WritableStream interface returns a new instance of WritableStreamDefaultWriter and locks the stream to that instance.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/WritableStream/getWriter)

#### Returns

[`WritableStreamDefaultWriter`](WritableStreamDefaultWriter.md)\<`W`\>
