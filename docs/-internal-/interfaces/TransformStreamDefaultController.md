[**KeyframeKit.js**](../../README.md)

***

[KeyframeKit.js](../../globals.md) / [\<internal\>](../README.md) / TransformStreamDefaultController

# Interface: TransformStreamDefaultController\<O\>

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:32454

The **`TransformStreamDefaultController`** interface of the Streams API provides methods to manipulate the associated ReadableStream and WritableStream.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/TransformStreamDefaultController)

## Type Parameters

### O

`O` = `any`

## Properties

### desiredSize

> `readonly` **desiredSize**: `number` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:32460

The **`desiredSize`** read-only property of the TransformStreamDefaultController interface returns the desired size to fill the queue of the associated ReadableStream.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/TransformStreamDefaultController/desiredSize)

## Methods

### enqueue()

> **enqueue**(`chunk?`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:32466

The **`enqueue()`** method of the TransformStreamDefaultController interface enqueues the given chunk in the readable side of the stream.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/TransformStreamDefaultController/enqueue)

#### Parameters

##### chunk?

`O`

#### Returns

`void`

***

### error()

> **error**(`reason?`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:32472

The **`error()`** method of the TransformStreamDefaultController interface errors both sides of the stream.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/TransformStreamDefaultController/error)

#### Parameters

##### reason?

`any`

#### Returns

`void`

***

### terminate()

> **terminate**(): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:32478

The **`terminate()`** method of the TransformStreamDefaultController interface closes the readable side and errors the writable side of the stream.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/TransformStreamDefaultController/terminate)

#### Returns

`void`
