[**KeyframeKit.js**](../../README.md)

***

[KeyframeKit.js](../../globals.md) / [\<internal\>](../README.md) / TransformStream

# Interface: TransformStream\<I, O\>

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:32429

The **`TransformStream`** interface of the Streams API represents a concrete implementation of the pipe chain _transform stream_ concept.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/TransformStream)

## Type Parameters

### I

`I` = `any`

### O

`O` = `any`

## Properties

### readable

> `readonly` **readable**: `ReadableStream`\<`O`\>

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:32435

The **`readable`** read-only property of the TransformStream interface returns the ReadableStream instance controlled by this `TransformStream`.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/TransformStream/readable)

***

### writable

> `readonly` **writable**: [`WritableStream`](WritableStream.md)\<`I`\>

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:32441

The **`writable`** read-only property of the TransformStream interface returns the WritableStream instance controlled by this `TransformStream`.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/TransformStream/writable)
