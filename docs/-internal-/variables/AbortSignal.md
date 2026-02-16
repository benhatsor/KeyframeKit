[**KeyframeKit.js**](../../README.md)

***

[KeyframeKit.js](../../globals.md) / [\<internal\>](../README.md) / AbortSignal

# Variable: AbortSignal

> **AbortSignal**: \{(): [`AbortSignal`](../interfaces/AbortSignal.md); `prototype`: [`AbortSignal`](../interfaces/AbortSignal.md); `abort`: [`AbortSignal`](../interfaces/AbortSignal.md); `any`: [`AbortSignal`](../interfaces/AbortSignal.md); `timeout`: [`AbortSignal`](../interfaces/AbortSignal.md); \}

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:2746

## Type Declaration

## Returns

[`AbortSignal`](../interfaces/AbortSignal.md)

### prototype

> **prototype**: [`AbortSignal`](../interfaces/AbortSignal.md)

### abort()

> **abort**(`reason?`): [`AbortSignal`](../interfaces/AbortSignal.md)

The **`AbortSignal.abort()`** static method returns an AbortSignal that is already set as aborted (and which does not trigger an AbortSignal/abort_event event).

[MDN Reference](https://developer.mozilla.org/docs/Web/API/AbortSignal/abort_static)

#### Parameters

##### reason?

`any`

#### Returns

[`AbortSignal`](../interfaces/AbortSignal.md)

### any()

> **any**(`signals`): [`AbortSignal`](../interfaces/AbortSignal.md)

The **`AbortSignal.any()`** static method takes an iterable of abort signals and returns an AbortSignal.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/AbortSignal/any_static)

#### Parameters

##### signals

[`AbortSignal`](../interfaces/AbortSignal.md)[]

#### Returns

[`AbortSignal`](../interfaces/AbortSignal.md)

### timeout()

> **timeout**(`milliseconds`): [`AbortSignal`](../interfaces/AbortSignal.md)

The **`AbortSignal.timeout()`** static method returns an AbortSignal that will automatically abort after a specified time.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/AbortSignal/timeout_static)

#### Parameters

##### milliseconds

`number`

#### Returns

[`AbortSignal`](../interfaces/AbortSignal.md)
