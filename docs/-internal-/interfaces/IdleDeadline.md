[**KeyframeKit.js**](../../README.md)

***

[KeyframeKit.js](../../globals.md) / [\<internal\>](../README.md) / IdleDeadline

# Interface: IdleDeadline

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:18595

The `IdleDeadline` interface is used as the data type of the input parameter to idle callbacks established by calling Window.requestIdleCallback().

[MDN Reference](https://developer.mozilla.org/docs/Web/API/IdleDeadline)

## Properties

### didTimeout

> `readonly` **didTimeout**: `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:18601

The read-only **`didTimeout`** property on the **IdleDeadline** interface is a Boolean value which indicates whether or not the idle callback is being invoked because the timeout interval specified when Window.requestIdleCallback() was called has expired.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/IdleDeadline/didTimeout)

## Methods

### timeRemaining()

> **timeRemaining**(): `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:18607

The **`timeRemaining()`** method on the IdleDeadline interface returns the estimated number of milliseconds remaining in the current idle period.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/IdleDeadline/timeRemaining)

#### Returns

`number`
