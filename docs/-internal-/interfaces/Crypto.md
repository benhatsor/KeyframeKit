[**KeyframeKit.js**](../../README.md)

***

[KeyframeKit.js](../../globals.md) / [\<internal\>](../README.md) / Crypto

# Interface: Crypto

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:8429

The **`Crypto`** interface represents basic cryptography features available in the current context.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Crypto)

## Properties

### subtle

> `readonly` **subtle**: `SubtleCrypto`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:8436

The **`Crypto.subtle`** read-only property returns a cryptographic operations.
Available only in secure contexts.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Crypto/subtle)

## Methods

### getRandomValues()

> **getRandomValues**\<`T`\>(`array`): `T`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:8442

The **`Crypto.getRandomValues()`** method lets you get cryptographically strong random values.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Crypto/getRandomValues)

#### Type Parameters

##### T

`T` *extends* [`ArrayBufferView`](ArrayBufferView.md)\<[`ArrayBufferLike`](../type-aliases/ArrayBufferLike.md)\>

#### Parameters

##### array

`T`

#### Returns

`T`

***

### randomUUID()

> **randomUUID**(): `` `${string}-${string}-${string}-${string}-${string}` ``

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:8449

The **`randomUUID()`** method of the Crypto interface is used to generate a v4 UUID using a cryptographically secure random number generator.
Available only in secure contexts.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Crypto/randomUUID)

#### Returns

`` `${string}-${string}-${string}-${string}-${string}` ``
