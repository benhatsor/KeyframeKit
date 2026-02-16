[**KeyframeKit.js**](../../README.md)

***

[KeyframeKit.js](../../globals.md) / [\<internal\>](../README.md) / SecurityPolicyViolationEvent

# Interface: SecurityPolicyViolationEvent

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:30282

The **`SecurityPolicyViolationEvent`** interface inherits from Event, and represents the event object of a `securitypolicyviolation` event sent on an Element/securitypolicyviolation_event, Document/securitypolicyviolation_event, or WorkerGlobalScope/securitypolicyviolation_event when its Content Security Policy (CSP) is violated.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/SecurityPolicyViolationEvent)

## Extends

- [`Event`](Event.md)

## Properties

### AT\_TARGET

> `readonly` **AT\_TARGET**: `2`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11462

#### Inherited from

[`Event`](Event.md).[`AT_TARGET`](Event.md#at_target)

***

### blockedURI

> `readonly` **blockedURI**: `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:30288

The **`blockedURI`** read-only property of the SecurityPolicyViolationEvent interface is a string representing the URI of the resource that was blocked because it violates a Content Security Policy (CSP).

[MDN Reference](https://developer.mozilla.org/docs/Web/API/SecurityPolicyViolationEvent/blockedURI)

***

### bubbles

> `readonly` **bubbles**: `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11353

The **`bubbles`** read-only property of the Event interface indicates whether the event bubbles up through the DOM tree or not.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/bubbles)

#### Inherited from

[`Event`](Event.md).[`bubbles`](Event.md#bubbles)

***

### BUBBLING\_PHASE

> `readonly` **BUBBLING\_PHASE**: `3`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11463

#### Inherited from

[`Event`](Event.md).[`BUBBLING_PHASE`](Event.md#bubbling_phase)

***

### cancelable

> `readonly` **cancelable**: `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11366

The **`cancelable`** read-only property of the Event interface indicates whether the event can be canceled, and therefore prevented as if the event never happened.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/cancelable)

#### Inherited from

[`Event`](Event.md).[`cancelable`](Event.md#cancelable)

***

### ~~cancelBubble~~

> **cancelBubble**: `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11360

The **`cancelBubble`** property of the Event interface is deprecated.

#### Deprecated

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/cancelBubble)

#### Inherited from

[`Event`](Event.md).[`cancelBubble`](Event.md#cancelbubble)

***

### CAPTURING\_PHASE

> `readonly` **CAPTURING\_PHASE**: `1`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11461

#### Inherited from

[`Event`](Event.md).[`CAPTURING_PHASE`](Event.md#capturing_phase)

***

### columnNumber

> `readonly` **columnNumber**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:30294

The **`columnNumber`** read-only property of the SecurityPolicyViolationEvent interface is the column number in the document or worker script at which the Content Security Policy (CSP) violation occurred.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/SecurityPolicyViolationEvent/columnNumber)

***

### composed

> `readonly` **composed**: `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11372

The read-only **`composed`** property of the or not the event will propagate across the shadow DOM boundary into the standard DOM.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/composed)

#### Inherited from

[`Event`](Event.md).[`composed`](Event.md#composed)

***

### currentTarget

> `readonly` **currentTarget**: [`EventTarget`](EventTarget.md) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11378

The **`currentTarget`** read-only property of the Event interface identifies the element to which the event handler has been attached.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/currentTarget)

#### Inherited from

[`Event`](Event.md).[`currentTarget`](Event.md#currenttarget)

***

### defaultPrevented

> `readonly` **defaultPrevented**: `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11384

The **`defaultPrevented`** read-only property of the Event interface returns a boolean value indicating whether or not the call to Event.preventDefault() canceled the event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/defaultPrevented)

#### Inherited from

[`Event`](Event.md).[`defaultPrevented`](Event.md#defaultprevented)

***

### disposition

> `readonly` **disposition**: [`SecurityPolicyViolationEventDisposition`](../type-aliases/SecurityPolicyViolationEventDisposition.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:30300

The **`disposition`** read-only property of the SecurityPolicyViolationEvent interface indicates how the violated Content Security Policy (CSP) is configured to be treated by the user agent.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/SecurityPolicyViolationEvent/disposition)

***

### documentURI

> `readonly` **documentURI**: `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:30306

The **`documentURI`** read-only property of the SecurityPolicyViolationEvent interface is a string representing the URI of the document or worker in which the Content Security Policy (CSP) violation occurred.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/SecurityPolicyViolationEvent/documentURI)

***

### effectiveDirective

> `readonly` **effectiveDirective**: `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:30312

The **`effectiveDirective`** read-only property of the SecurityPolicyViolationEvent interface is a string representing the Content Security Policy (CSP) directive that was violated.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/SecurityPolicyViolationEvent/effectiveDirective)

***

### eventPhase

> `readonly` **eventPhase**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11390

The **`eventPhase`** read-only property of the being evaluated.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/eventPhase)

#### Inherited from

[`Event`](Event.md).[`eventPhase`](Event.md#eventphase)

***

### isTrusted

> `readonly` **isTrusted**: `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11396

The **`isTrusted`** read-only property of the when the event was generated by the user agent (including via user actions and programmatic methods such as HTMLElement.focus()), and `false` when the event was dispatched via The only exception is the `click` event, which initializes the `isTrusted` property to `false` in user agents.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/isTrusted)

#### Inherited from

[`Event`](Event.md).[`isTrusted`](Event.md#istrusted)

***

### lineNumber

> `readonly` **lineNumber**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:30318

The **`lineNumber`** read-only property of the SecurityPolicyViolationEvent interface is the line number in the document or worker script at which the Content Security Policy (CSP) violation occurred.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/SecurityPolicyViolationEvent/lineNumber)

***

### NONE

> `readonly` **NONE**: `0`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11460

#### Inherited from

[`Event`](Event.md).[`NONE`](Event.md#none)

***

### originalPolicy

> `readonly` **originalPolicy**: `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:30324

The **`originalPolicy`** read-only property of the SecurityPolicyViolationEvent interface is a string containing the Content Security Policy (CSP) whose enforcement uncovered the violation.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/SecurityPolicyViolationEvent/originalPolicy)

***

### referrer

> `readonly` **referrer**: `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:30330

The **`referrer`** read-only property of the SecurityPolicyViolationEvent interface is a string representing the referrer for the resources whose Content Security Policy (CSP) was violated.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/SecurityPolicyViolationEvent/referrer)

***

### ~~returnValue~~

> **returnValue**: `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11403

The Event property **`returnValue`** indicates whether the default action for this event has been prevented or not.

#### Deprecated

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/returnValue)

#### Inherited from

[`Event`](Event.md).[`returnValue`](Event.md#returnvalue)

***

### sample

> `readonly` **sample**: `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:30336

The **`sample`** read-only property of the SecurityPolicyViolationEvent interface is a string representing a sample of the resource that caused the Content Security Policy (CSP) violation.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/SecurityPolicyViolationEvent/sample)

***

### sourceFile

> `readonly` **sourceFile**: `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:30342

The **`sourceFile`** read-only property of the SecurityPolicyViolationEvent interface is a string representing the URL of the script in which the Content Security Policy (CSP) violation occurred.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/SecurityPolicyViolationEvent/sourceFile)

***

### ~~srcElement~~

> `readonly` **srcElement**: [`EventTarget`](EventTarget.md) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11410

The deprecated **`Event.srcElement`** is an alias for the Event.target property.

#### Deprecated

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/srcElement)

#### Inherited from

[`Event`](Event.md).[`srcElement`](Event.md#srcelement)

***

### statusCode

> `readonly` **statusCode**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:30348

The **`statusCode`** read-only property of the SecurityPolicyViolationEvent interface is a number representing the HTTP status code of the window or worker in which the Content Security Policy (CSP) violation occurred.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/SecurityPolicyViolationEvent/statusCode)

***

### target

> `readonly` **target**: [`EventTarget`](EventTarget.md) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11416

The read-only **`target`** property of the dispatched.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/target)

#### Inherited from

[`Event`](Event.md).[`target`](Event.md#target)

***

### timeStamp

> `readonly` **timeStamp**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11422

The **`timeStamp`** read-only property of the Event interface returns the time (in milliseconds) at which the event was created.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/timeStamp)

#### Inherited from

[`Event`](Event.md).[`timeStamp`](Event.md#timestamp)

***

### type

> `readonly` **type**: `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11428

The **`type`** read-only property of the Event interface returns a string containing the event's type.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/type)

#### Inherited from

[`Event`](Event.md).[`type`](Event.md#type)

***

### violatedDirective

> `readonly` **violatedDirective**: `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:30354

The **`violatedDirective`** read-only property of the SecurityPolicyViolationEvent interface is a string representing the Content Security Policy (CSP) directive that was violated.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/SecurityPolicyViolationEvent/violatedDirective)

## Methods

### composedPath()

> **composedPath**(): [`EventTarget`](EventTarget.md)[]

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11434

The **`composedPath()`** method of the Event interface returns the event's path which is an array of the objects on which listeners will be invoked.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/composedPath)

#### Returns

[`EventTarget`](EventTarget.md)[]

#### Inherited from

[`Event`](Event.md).[`composedPath`](Event.md#composedpath)

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

[`Event`](Event.md).[`initEvent`](Event.md#initevent)

***

### preventDefault()

> **preventDefault**(): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11447

The **`preventDefault()`** method of the Event interface tells the user agent that if the event does not get explicitly handled, its default action should not be taken as it normally would be.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/preventDefault)

#### Returns

`void`

#### Inherited from

[`Event`](Event.md).[`preventDefault`](Event.md#preventdefault)

***

### stopImmediatePropagation()

> **stopImmediatePropagation**(): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11453

The **`stopImmediatePropagation()`** method of the If several listeners are attached to the same element for the same event type, they are called in the order in which they were added.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/stopImmediatePropagation)

#### Returns

`void`

#### Inherited from

[`Event`](Event.md).[`stopImmediatePropagation`](Event.md#stopimmediatepropagation)

***

### stopPropagation()

> **stopPropagation**(): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11459

The **`stopPropagation()`** method of the Event interface prevents further propagation of the current event in the capturing and bubbling phases.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/stopPropagation)

#### Returns

`void`

#### Inherited from

[`Event`](Event.md).[`stopPropagation`](Event.md#stoppropagation)
