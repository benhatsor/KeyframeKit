[**KeyframeKit.js**](../../README.md)

***

[KeyframeKit.js](../../globals.md) / [\<internal\>](../README.md) / SpeechSynthesisErrorEvent

# Interface: SpeechSynthesisErrorEvent

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:31112

The **`SpeechSynthesisErrorEvent`** interface of the Web Speech API contains information about any errors that occur while processing SpeechSynthesisUtterance objects in the speech service.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/SpeechSynthesisErrorEvent)

## Extends

- [`SpeechSynthesisEvent`](SpeechSynthesisEvent.md)

## Properties

### AT\_TARGET

> `readonly` **AT\_TARGET**: `2`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11462

#### Inherited from

[`SpeechSynthesisEvent`](SpeechSynthesisEvent.md).[`AT_TARGET`](SpeechSynthesisEvent.md#at_target)

***

### bubbles

> `readonly` **bubbles**: `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11353

The **`bubbles`** read-only property of the Event interface indicates whether the event bubbles up through the DOM tree or not.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/bubbles)

#### Inherited from

[`SpeechSynthesisEvent`](SpeechSynthesisEvent.md).[`bubbles`](SpeechSynthesisEvent.md#bubbles)

***

### BUBBLING\_PHASE

> `readonly` **BUBBLING\_PHASE**: `3`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11463

#### Inherited from

[`SpeechSynthesisEvent`](SpeechSynthesisEvent.md).[`BUBBLING_PHASE`](SpeechSynthesisEvent.md#bubbling_phase)

***

### cancelable

> `readonly` **cancelable**: `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11366

The **`cancelable`** read-only property of the Event interface indicates whether the event can be canceled, and therefore prevented as if the event never happened.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/cancelable)

#### Inherited from

[`SpeechSynthesisEvent`](SpeechSynthesisEvent.md).[`cancelable`](SpeechSynthesisEvent.md#cancelable)

***

### ~~cancelBubble~~

> **cancelBubble**: `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11360

The **`cancelBubble`** property of the Event interface is deprecated.

#### Deprecated

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/cancelBubble)

#### Inherited from

[`SpeechSynthesisEvent`](SpeechSynthesisEvent.md).[`cancelBubble`](SpeechSynthesisEvent.md#cancelbubble)

***

### CAPTURING\_PHASE

> `readonly` **CAPTURING\_PHASE**: `1`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11461

#### Inherited from

[`SpeechSynthesisEvent`](SpeechSynthesisEvent.md).[`CAPTURING_PHASE`](SpeechSynthesisEvent.md#capturing_phase)

***

### charIndex

> `readonly` **charIndex**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:31137

The **`charIndex`** read-only property of the SpeechSynthesisUtterance interface returns the index position of the character in SpeechSynthesisUtterance.text that was being spoken when the event was triggered.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/SpeechSynthesisEvent/charIndex)

#### Inherited from

[`SpeechSynthesisEvent`](SpeechSynthesisEvent.md).[`charIndex`](SpeechSynthesisEvent.md#charindex)

***

### charLength

> `readonly` **charLength**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:31143

The read-only **`charLength`** property of the SpeechSynthesisEvent interface returns the number of characters left to be spoken after the character at the SpeechSynthesisEvent.charIndex position.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/SpeechSynthesisEvent/charLength)

#### Inherited from

[`SpeechSynthesisEvent`](SpeechSynthesisEvent.md).[`charLength`](SpeechSynthesisEvent.md#charlength)

***

### composed

> `readonly` **composed**: `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11372

The read-only **`composed`** property of the or not the event will propagate across the shadow DOM boundary into the standard DOM.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/composed)

#### Inherited from

[`SpeechSynthesisEvent`](SpeechSynthesisEvent.md).[`composed`](SpeechSynthesisEvent.md#composed)

***

### currentTarget

> `readonly` **currentTarget**: [`EventTarget`](EventTarget.md) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11378

The **`currentTarget`** read-only property of the Event interface identifies the element to which the event handler has been attached.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/currentTarget)

#### Inherited from

[`SpeechSynthesisEvent`](SpeechSynthesisEvent.md).[`currentTarget`](SpeechSynthesisEvent.md#currenttarget)

***

### defaultPrevented

> `readonly` **defaultPrevented**: `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11384

The **`defaultPrevented`** read-only property of the Event interface returns a boolean value indicating whether or not the call to Event.preventDefault() canceled the event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/defaultPrevented)

#### Inherited from

[`SpeechSynthesisEvent`](SpeechSynthesisEvent.md).[`defaultPrevented`](SpeechSynthesisEvent.md#defaultprevented)

***

### elapsedTime

> `readonly` **elapsedTime**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:31149

The **`elapsedTime`** read-only property of the SpeechSynthesisEvent returns the elapsed time in seconds, after the SpeechSynthesisUtterance.text started being spoken, at which the event was triggered.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/SpeechSynthesisEvent/elapsedTime)

#### Inherited from

[`SpeechSynthesisEvent`](SpeechSynthesisEvent.md).[`elapsedTime`](SpeechSynthesisEvent.md#elapsedtime)

***

### error

> `readonly` **error**: [`SpeechSynthesisErrorCode`](../type-aliases/SpeechSynthesisErrorCode.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:31118

The **`error`** property of the A string containing the error reason.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/SpeechSynthesisErrorEvent/error)

***

### eventPhase

> `readonly` **eventPhase**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11390

The **`eventPhase`** read-only property of the being evaluated.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/eventPhase)

#### Inherited from

[`SpeechSynthesisEvent`](SpeechSynthesisEvent.md).[`eventPhase`](SpeechSynthesisEvent.md#eventphase)

***

### isTrusted

> `readonly` **isTrusted**: `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11396

The **`isTrusted`** read-only property of the when the event was generated by the user agent (including via user actions and programmatic methods such as HTMLElement.focus()), and `false` when the event was dispatched via The only exception is the `click` event, which initializes the `isTrusted` property to `false` in user agents.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/isTrusted)

#### Inherited from

[`SpeechSynthesisEvent`](SpeechSynthesisEvent.md).[`isTrusted`](SpeechSynthesisEvent.md#istrusted)

***

### name

> `readonly` **name**: `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:31155

The **`name`** read-only property of the SpeechSynthesisUtterance interface returns the name associated with certain types of events occurring as the SpeechSynthesisUtterance.text is being spoken: the name of the SSML marker reached in the case of a SpeechSynthesisUtterance.mark_event event, or the type of boundary reached in the case of a SpeechSynthesisUtterance.boundary_event event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/SpeechSynthesisEvent/name)

#### Inherited from

[`SpeechSynthesisEvent`](SpeechSynthesisEvent.md).[`name`](SpeechSynthesisEvent.md#name)

***

### NONE

> `readonly` **NONE**: `0`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11460

#### Inherited from

[`SpeechSynthesisEvent`](SpeechSynthesisEvent.md).[`NONE`](SpeechSynthesisEvent.md#none)

***

### ~~returnValue~~

> **returnValue**: `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11403

The Event property **`returnValue`** indicates whether the default action for this event has been prevented or not.

#### Deprecated

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/returnValue)

#### Inherited from

[`SpeechSynthesisEvent`](SpeechSynthesisEvent.md).[`returnValue`](SpeechSynthesisEvent.md#returnvalue)

***

### ~~srcElement~~

> `readonly` **srcElement**: [`EventTarget`](EventTarget.md) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11410

The deprecated **`Event.srcElement`** is an alias for the Event.target property.

#### Deprecated

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/srcElement)

#### Inherited from

[`SpeechSynthesisEvent`](SpeechSynthesisEvent.md).[`srcElement`](SpeechSynthesisEvent.md#srcelement)

***

### target

> `readonly` **target**: [`EventTarget`](EventTarget.md) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11416

The read-only **`target`** property of the dispatched.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/target)

#### Inherited from

[`SpeechSynthesisEvent`](SpeechSynthesisEvent.md).[`target`](SpeechSynthesisEvent.md#target)

***

### timeStamp

> `readonly` **timeStamp**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11422

The **`timeStamp`** read-only property of the Event interface returns the time (in milliseconds) at which the event was created.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/timeStamp)

#### Inherited from

[`SpeechSynthesisEvent`](SpeechSynthesisEvent.md).[`timeStamp`](SpeechSynthesisEvent.md#timestamp)

***

### type

> `readonly` **type**: `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11428

The **`type`** read-only property of the Event interface returns a string containing the event's type.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/type)

#### Inherited from

[`SpeechSynthesisEvent`](SpeechSynthesisEvent.md).[`type`](SpeechSynthesisEvent.md#type)

***

### utterance

> `readonly` **utterance**: [`SpeechSynthesisUtterance`](SpeechSynthesisUtterance.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:31161

The **`utterance`** read-only property of the SpeechSynthesisUtterance interface returns the SpeechSynthesisUtterance instance that the event was triggered on.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/SpeechSynthesisEvent/utterance)

#### Inherited from

[`SpeechSynthesisEvent`](SpeechSynthesisEvent.md).[`utterance`](SpeechSynthesisEvent.md#utterance)

## Methods

### composedPath()

> **composedPath**(): [`EventTarget`](EventTarget.md)[]

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11434

The **`composedPath()`** method of the Event interface returns the event's path which is an array of the objects on which listeners will be invoked.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/composedPath)

#### Returns

[`EventTarget`](EventTarget.md)[]

#### Inherited from

[`SpeechSynthesisEvent`](SpeechSynthesisEvent.md).[`composedPath`](SpeechSynthesisEvent.md#composedpath)

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

[`SpeechSynthesisEvent`](SpeechSynthesisEvent.md).[`initEvent`](SpeechSynthesisEvent.md#initevent)

***

### preventDefault()

> **preventDefault**(): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11447

The **`preventDefault()`** method of the Event interface tells the user agent that if the event does not get explicitly handled, its default action should not be taken as it normally would be.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/preventDefault)

#### Returns

`void`

#### Inherited from

[`SpeechSynthesisEvent`](SpeechSynthesisEvent.md).[`preventDefault`](SpeechSynthesisEvent.md#preventdefault)

***

### stopImmediatePropagation()

> **stopImmediatePropagation**(): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11453

The **`stopImmediatePropagation()`** method of the If several listeners are attached to the same element for the same event type, they are called in the order in which they were added.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/stopImmediatePropagation)

#### Returns

`void`

#### Inherited from

[`SpeechSynthesisEvent`](SpeechSynthesisEvent.md).[`stopImmediatePropagation`](SpeechSynthesisEvent.md#stopimmediatepropagation)

***

### stopPropagation()

> **stopPropagation**(): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11459

The **`stopPropagation()`** method of the Event interface prevents further propagation of the current event in the capturing and bubbling phases.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/stopPropagation)

#### Returns

`void`

#### Inherited from

[`SpeechSynthesisEvent`](SpeechSynthesisEvent.md).[`stopPropagation`](SpeechSynthesisEvent.md#stoppropagation)
