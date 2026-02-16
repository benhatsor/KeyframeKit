[**KeyframeKit.js**](../../README.md)

***

[KeyframeKit.js](../../globals.md) / [\<internal\>](../README.md) / PaymentMethodChangeEvent

# Interface: PaymentMethodChangeEvent

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:22839

The **`PaymentMethodChangeEvent`** interface of the Payment Request API describes the PaymentRequest/paymentmethodchange_event event which is fired by some payment handlers when the user switches payment instruments (e.g., a user selects a 'store' card to make a purchase while using Apple Pay).
Available only in secure contexts.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/PaymentMethodChangeEvent)

## Extends

- [`PaymentRequestUpdateEvent`](PaymentRequestUpdateEvent.md)

## Properties

### AT\_TARGET

> `readonly` **AT\_TARGET**: `2`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11462

#### Inherited from

[`PaymentRequestUpdateEvent`](PaymentRequestUpdateEvent.md).[`AT_TARGET`](PaymentRequestUpdateEvent.md#at_target)

***

### bubbles

> `readonly` **bubbles**: `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11353

The **`bubbles`** read-only property of the Event interface indicates whether the event bubbles up through the DOM tree or not.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/bubbles)

#### Inherited from

[`PaymentRequestUpdateEvent`](PaymentRequestUpdateEvent.md).[`bubbles`](PaymentRequestUpdateEvent.md#bubbles)

***

### BUBBLING\_PHASE

> `readonly` **BUBBLING\_PHASE**: `3`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11463

#### Inherited from

[`PaymentRequestUpdateEvent`](PaymentRequestUpdateEvent.md).[`BUBBLING_PHASE`](PaymentRequestUpdateEvent.md#bubbling_phase)

***

### cancelable

> `readonly` **cancelable**: `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11366

The **`cancelable`** read-only property of the Event interface indicates whether the event can be canceled, and therefore prevented as if the event never happened.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/cancelable)

#### Inherited from

[`PaymentRequestUpdateEvent`](PaymentRequestUpdateEvent.md).[`cancelable`](PaymentRequestUpdateEvent.md#cancelable)

***

### ~~cancelBubble~~

> **cancelBubble**: `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11360

The **`cancelBubble`** property of the Event interface is deprecated.

#### Deprecated

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/cancelBubble)

#### Inherited from

[`PaymentRequestUpdateEvent`](PaymentRequestUpdateEvent.md).[`cancelBubble`](PaymentRequestUpdateEvent.md#cancelbubble)

***

### CAPTURING\_PHASE

> `readonly` **CAPTURING\_PHASE**: `1`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11461

#### Inherited from

[`PaymentRequestUpdateEvent`](PaymentRequestUpdateEvent.md).[`CAPTURING_PHASE`](PaymentRequestUpdateEvent.md#capturing_phase)

***

### composed

> `readonly` **composed**: `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11372

The read-only **`composed`** property of the or not the event will propagate across the shadow DOM boundary into the standard DOM.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/composed)

#### Inherited from

[`PaymentRequestUpdateEvent`](PaymentRequestUpdateEvent.md).[`composed`](PaymentRequestUpdateEvent.md#composed)

***

### currentTarget

> `readonly` **currentTarget**: [`EventTarget`](EventTarget.md) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11378

The **`currentTarget`** read-only property of the Event interface identifies the element to which the event handler has been attached.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/currentTarget)

#### Inherited from

[`PaymentRequestUpdateEvent`](PaymentRequestUpdateEvent.md).[`currentTarget`](PaymentRequestUpdateEvent.md#currenttarget)

***

### defaultPrevented

> `readonly` **defaultPrevented**: `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11384

The **`defaultPrevented`** read-only property of the Event interface returns a boolean value indicating whether or not the call to Event.preventDefault() canceled the event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/defaultPrevented)

#### Inherited from

[`PaymentRequestUpdateEvent`](PaymentRequestUpdateEvent.md).[`defaultPrevented`](PaymentRequestUpdateEvent.md#defaultprevented)

***

### eventPhase

> `readonly` **eventPhase**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11390

The **`eventPhase`** read-only property of the being evaluated.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/eventPhase)

#### Inherited from

[`PaymentRequestUpdateEvent`](PaymentRequestUpdateEvent.md).[`eventPhase`](PaymentRequestUpdateEvent.md#eventphase)

***

### isTrusted

> `readonly` **isTrusted**: `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11396

The **`isTrusted`** read-only property of the when the event was generated by the user agent (including via user actions and programmatic methods such as HTMLElement.focus()), and `false` when the event was dispatched via The only exception is the `click` event, which initializes the `isTrusted` property to `false` in user agents.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/isTrusted)

#### Inherited from

[`PaymentRequestUpdateEvent`](PaymentRequestUpdateEvent.md).[`isTrusted`](PaymentRequestUpdateEvent.md#istrusted)

***

### methodDetails

> `readonly` **methodDetails**: `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:22845

The read-only **`methodDetails`** property of the PaymentMethodChangeEvent interface is an object containing any data the payment handler may provide to describe the change the user has made to their payment method.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/PaymentMethodChangeEvent/methodDetails)

***

### methodName

> `readonly` **methodName**: `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:22851

The read-only **`methodName`** property of the PaymentMethodChangeEvent interface is a string which uniquely identifies the payment handler currently selected by the user.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/PaymentMethodChangeEvent/methodName)

***

### NONE

> `readonly` **NONE**: `0`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11460

#### Inherited from

[`PaymentRequestUpdateEvent`](PaymentRequestUpdateEvent.md).[`NONE`](PaymentRequestUpdateEvent.md#none)

***

### ~~returnValue~~

> **returnValue**: `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11403

The Event property **`returnValue`** indicates whether the default action for this event has been prevented or not.

#### Deprecated

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/returnValue)

#### Inherited from

[`PaymentRequestUpdateEvent`](PaymentRequestUpdateEvent.md).[`returnValue`](PaymentRequestUpdateEvent.md#returnvalue)

***

### ~~srcElement~~

> `readonly` **srcElement**: [`EventTarget`](EventTarget.md) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11410

The deprecated **`Event.srcElement`** is an alias for the Event.target property.

#### Deprecated

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/srcElement)

#### Inherited from

[`PaymentRequestUpdateEvent`](PaymentRequestUpdateEvent.md).[`srcElement`](PaymentRequestUpdateEvent.md#srcelement)

***

### target

> `readonly` **target**: [`EventTarget`](EventTarget.md) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11416

The read-only **`target`** property of the dispatched.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/target)

#### Inherited from

[`PaymentRequestUpdateEvent`](PaymentRequestUpdateEvent.md).[`target`](PaymentRequestUpdateEvent.md#target)

***

### timeStamp

> `readonly` **timeStamp**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11422

The **`timeStamp`** read-only property of the Event interface returns the time (in milliseconds) at which the event was created.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/timeStamp)

#### Inherited from

[`PaymentRequestUpdateEvent`](PaymentRequestUpdateEvent.md).[`timeStamp`](PaymentRequestUpdateEvent.md#timestamp)

***

### type

> `readonly` **type**: `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11428

The **`type`** read-only property of the Event interface returns a string containing the event's type.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/type)

#### Inherited from

[`PaymentRequestUpdateEvent`](PaymentRequestUpdateEvent.md).[`type`](PaymentRequestUpdateEvent.md#type)

## Methods

### composedPath()

> **composedPath**(): [`EventTarget`](EventTarget.md)[]

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11434

The **`composedPath()`** method of the Event interface returns the event's path which is an array of the objects on which listeners will be invoked.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/composedPath)

#### Returns

[`EventTarget`](EventTarget.md)[]

#### Inherited from

[`PaymentRequestUpdateEvent`](PaymentRequestUpdateEvent.md).[`composedPath`](PaymentRequestUpdateEvent.md#composedpath)

***

### ~~initEvent()~~

> **initEvent**(`type`, `bubbles?`, `cancelable?`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11441

The **`Event.initEvent()`** method is used to initialize the value of an event created using Document.createEvent().

#### Parameters

##### type

`string`

##### bubbles?

`boolean`

##### cancelable?

`boolean`

#### Returns

`void`

#### Deprecated

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/initEvent)

#### Inherited from

[`PaymentRequestUpdateEvent`](PaymentRequestUpdateEvent.md).[`initEvent`](PaymentRequestUpdateEvent.md#initevent)

***

### preventDefault()

> **preventDefault**(): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11447

The **`preventDefault()`** method of the Event interface tells the user agent that if the event does not get explicitly handled, its default action should not be taken as it normally would be.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/preventDefault)

#### Returns

`void`

#### Inherited from

[`PaymentRequestUpdateEvent`](PaymentRequestUpdateEvent.md).[`preventDefault`](PaymentRequestUpdateEvent.md#preventdefault)

***

### stopImmediatePropagation()

> **stopImmediatePropagation**(): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11453

The **`stopImmediatePropagation()`** method of the If several listeners are attached to the same element for the same event type, they are called in the order in which they were added.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/stopImmediatePropagation)

#### Returns

`void`

#### Inherited from

[`PaymentRequestUpdateEvent`](PaymentRequestUpdateEvent.md).[`stopImmediatePropagation`](PaymentRequestUpdateEvent.md#stopimmediatepropagation)

***

### stopPropagation()

> **stopPropagation**(): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11459

The **`stopPropagation()`** method of the Event interface prevents further propagation of the current event in the capturing and bubbling phases.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/stopPropagation)

#### Returns

`void`

#### Inherited from

[`PaymentRequestUpdateEvent`](PaymentRequestUpdateEvent.md).[`stopPropagation`](PaymentRequestUpdateEvent.md#stoppropagation)

***

### updateWith()

> **updateWith**(`detailsPromise`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:22954

The **`updateWith()`** method of the ```js-nolint updateWith(details) ``` - `details` - : Either an object or a Promise that resolves to an object, specifying the changes applied to the payment request: - `displayItems` MISSING: optional_inline] - : An array of objects, each describing one line item for the payment request.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/PaymentRequestUpdateEvent/updateWith)

#### Parameters

##### detailsPromise

[`PaymentDetailsUpdate`](PaymentDetailsUpdate.md) | [`PromiseLike`](PromiseLike.md)\<[`PaymentDetailsUpdate`](PaymentDetailsUpdate.md)\>

#### Returns

`void`

#### Inherited from

[`PaymentRequestUpdateEvent`](PaymentRequestUpdateEvent.md).[`updateWith`](PaymentRequestUpdateEvent.md#updatewith)
