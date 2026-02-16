[**KeyframeKit.js**](../../README.md)

***

[KeyframeKit.js](../../globals.md) / [\<internal\>](../README.md) / ViewTransition

# Interface: ViewTransition

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:33353

The **`ViewTransition`** interface of the View Transition API represents an active view transition, and provides functionality to react to the transition reaching different states (e.g., ready to run the animation, or animation finished) or skip the transition altogether.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/ViewTransition)

## Properties

### finished

> `readonly` **finished**: `Promise`\<`void`\>

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:33359

The **`finished`** read-only property of the `finished` will only reject in the case of a same-document (SPA) transition, if the callback passed to Document.startViewTransition() throws or returns a promise that rejects.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/ViewTransition/finished)

***

### ready

> `readonly` **ready**: `Promise`\<`void`\>

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:33365

The **`ready`** read-only property of the `ready` will reject if the transition cannot begin.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/ViewTransition/ready)

***

### types

> **types**: `ViewTransitionTypeSet`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:33366

***

### updateCallbackDone

> `readonly` **updateCallbackDone**: `Promise`\<`void`\>

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:33372

The **`updateCallbackDone`** read-only property of the `updateCallbackDone` is useful when you don't care about the success/failure of a same-document (SPA) view transition animation, and just want to know if and when the DOM is updated.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/ViewTransition/updateCallbackDone)

## Methods

### skipTransition()

> **skipTransition**(): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:33378

The **`skipTransition()`** method of the ```js-nolint skipTransition() ``` None.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/ViewTransition/skipTransition)

#### Returns

`void`
