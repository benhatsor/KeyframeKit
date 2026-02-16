[**KeyframeKit.js**](../../README.md)

***

[KeyframeKit.js](../../globals.md) / [\<internal\>](../README.md) / MediaSource

# Variable: MediaSource

> **MediaSource**: \{(): [`MediaSource`](../interfaces/MediaSource.md); `canConstructInDedicatedWorker`: `boolean`; `prototype`: [`MediaSource`](../interfaces/MediaSource.md); `isTypeSupported`: `boolean`; \}

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:20400

## Type Declaration

## Returns

[`MediaSource`](../interfaces/MediaSource.md)

### canConstructInDedicatedWorker

> `readonly` **canConstructInDedicatedWorker**: `boolean`

The **`canConstructInDedicatedWorker`** static property of the MediaSource interface returns `true` if `MediaSource` worker support is implemented, providing a low-latency feature detection mechanism.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/MediaSource/canConstructInDedicatedWorker_static)

### prototype

> **prototype**: [`MediaSource`](../interfaces/MediaSource.md)

### isTypeSupported()

> **isTypeSupported**(`type`): `boolean`

The **`MediaSource.isTypeSupported()`** static method returns a boolean value which is `true` if the given MIME type and (optional) codec are _likely_ to be supported by the current user agent.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/MediaSource/isTypeSupported_static)

#### Parameters

##### type

`string`

#### Returns

`boolean`
