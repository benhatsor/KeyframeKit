[**KeyframeKit.js**](../../README.md)

***

[KeyframeKit.js](../../globals.md) / [\<internal\>](../README.md) / WritableStreamDefaultWriter

# Interface: WritableStreamDefaultWriter\<W\>

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:37055

The **`WritableStreamDefaultWriter`** interface of the Streams API is the object returned by WritableStream.getWriter() and once created locks the writer to the `WritableStream` ensuring that no other streams can write to the underlying sink.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/WritableStreamDefaultWriter)

## Type Parameters

### W

`W` = `any`

## Properties

### closed

> `readonly` **closed**: `Promise`\<`void`\>

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:37061

The **`closed`** read-only property of the the stream errors or the writer's lock is released.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/WritableStreamDefaultWriter/closed)

***

### desiredSize

> `readonly` **desiredSize**: `number` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:37067

The **`desiredSize`** read-only property of the to fill the stream's internal queue.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/WritableStreamDefaultWriter/desiredSize)

***

### ready

> `readonly` **ready**: `Promise`\<`void`\>

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:37073

The **`ready`** read-only property of the that resolves when the desired size of the stream's internal queue transitions from non-positive to positive, signaling that it is no longer applying backpressure.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/WritableStreamDefaultWriter/ready)

## Methods

### abort()

> **abort**(`reason?`): `Promise`\<`void`\>

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:37079

The **`abort()`** method of the the producer can no longer successfully write to the stream and it is to be immediately moved to an error state, with any queued writes discarded.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/WritableStreamDefaultWriter/abort)

#### Parameters

##### reason?

`any`

#### Returns

`Promise`\<`void`\>

***

### close()

> **close**(): `Promise`\<`void`\>

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:37085

The **`close()`** method of the stream.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/WritableStreamDefaultWriter/close)

#### Returns

`Promise`\<`void`\>

***

### releaseLock()

> **releaseLock**(): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:37091

The **`releaseLock()`** method of the corresponding stream.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/WritableStreamDefaultWriter/releaseLock)

#### Returns

`void`

***

### write()

> **write**(`chunk?`): `Promise`\<`void`\>

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:37097

The **`write()`** method of the operation.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/WritableStreamDefaultWriter/write)

#### Parameters

##### chunk?

`W`

#### Returns

`Promise`\<`void`\>
