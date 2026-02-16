[**KeyframeKit.js**](../../README.md)

***

[KeyframeKit.js](../../globals.md) / [\<internal\>](../README.md) / TouchEvent

# Interface: TouchEvent

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:32329

The **`TouchEvent`** interface represents an UIEvent which is sent when the state of contacts with a touch-sensitive surface changes.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/TouchEvent)

## Extends

- [`UIEvent`](UIEvent.md)

## Properties

### altKey

> `readonly` **altKey**: `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:32335

The read-only **`altKey`** property of the TouchEvent interface returns a boolean value indicating whether or not the <kbd>alt</kbd> (Alternate) key is enabled when the touch event is created.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/TouchEvent/altKey)

***

### AT\_TARGET

> `readonly` **AT\_TARGET**: `2`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11462

#### Inherited from

[`UIEvent`](UIEvent.md).[`AT_TARGET`](UIEvent.md#at_target)

***

### bubbles

> `readonly` **bubbles**: `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11353

The **`bubbles`** read-only property of the Event interface indicates whether the event bubbles up through the DOM tree or not.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/bubbles)

#### Inherited from

[`UIEvent`](UIEvent.md).[`bubbles`](UIEvent.md#bubbles)

***

### BUBBLING\_PHASE

> `readonly` **BUBBLING\_PHASE**: `3`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11463

#### Inherited from

[`UIEvent`](UIEvent.md).[`BUBBLING_PHASE`](UIEvent.md#bubbling_phase)

***

### cancelable

> `readonly` **cancelable**: `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11366

The **`cancelable`** read-only property of the Event interface indicates whether the event can be canceled, and therefore prevented as if the event never happened.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/cancelable)

#### Inherited from

[`UIEvent`](UIEvent.md).[`cancelable`](UIEvent.md#cancelable)

***

### ~~cancelBubble~~

> **cancelBubble**: `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11360

The **`cancelBubble`** property of the Event interface is deprecated.

#### Deprecated

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/cancelBubble)

#### Inherited from

[`UIEvent`](UIEvent.md).[`cancelBubble`](UIEvent.md#cancelbubble)

***

### CAPTURING\_PHASE

> `readonly` **CAPTURING\_PHASE**: `1`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11461

#### Inherited from

[`UIEvent`](UIEvent.md).[`CAPTURING_PHASE`](UIEvent.md#capturing_phase)

***

### changedTouches

> `readonly` **changedTouches**: `TouchList`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:32341

The **`changedTouches`** read-only property is a TouchList whose touch points (Touch objects) varies depending on the event type, as follows: - For the Element/touchstart_event event, it is a list of the touch points that became active with the current event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/TouchEvent/changedTouches)

***

### composed

> `readonly` **composed**: `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11372

The read-only **`composed`** property of the or not the event will propagate across the shadow DOM boundary into the standard DOM.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/composed)

#### Inherited from

[`UIEvent`](UIEvent.md).[`composed`](UIEvent.md#composed)

***

### ctrlKey

> `readonly` **ctrlKey**: `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:32347

The read-only **`ctrlKey`** property of the TouchEvent interface returns a boolean value indicating whether the <kbd>control</kbd> (Control) key is enabled when the touch event is created.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/TouchEvent/ctrlKey)

***

### currentTarget

> `readonly` **currentTarget**: [`EventTarget`](EventTarget.md) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11378

The **`currentTarget`** read-only property of the Event interface identifies the element to which the event handler has been attached.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/currentTarget)

#### Inherited from

[`UIEvent`](UIEvent.md).[`currentTarget`](UIEvent.md#currenttarget)

***

### defaultPrevented

> `readonly` **defaultPrevented**: `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11384

The **`defaultPrevented`** read-only property of the Event interface returns a boolean value indicating whether or not the call to Event.preventDefault() canceled the event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/defaultPrevented)

#### Inherited from

[`UIEvent`](UIEvent.md).[`defaultPrevented`](UIEvent.md#defaultprevented)

***

### detail

> `readonly` **detail**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:32607

The **`UIEvent.detail`** read-only property, when non-zero, provides the current (or next, depending on the event) click count.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/UIEvent/detail)

#### Inherited from

[`UIEvent`](UIEvent.md).[`detail`](UIEvent.md#detail)

***

### eventPhase

> `readonly` **eventPhase**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11390

The **`eventPhase`** read-only property of the being evaluated.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/eventPhase)

#### Inherited from

[`UIEvent`](UIEvent.md).[`eventPhase`](UIEvent.md#eventphase)

***

### isTrusted

> `readonly` **isTrusted**: `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11396

The **`isTrusted`** read-only property of the when the event was generated by the user agent (including via user actions and programmatic methods such as HTMLElement.focus()), and `false` when the event was dispatched via The only exception is the `click` event, which initializes the `isTrusted` property to `false` in user agents.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/isTrusted)

#### Inherited from

[`UIEvent`](UIEvent.md).[`isTrusted`](UIEvent.md#istrusted)

***

### metaKey

> `readonly` **metaKey**: `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:32353

The read-only **`metaKey`** property of the TouchEvent interface returns a boolean value indicating whether or not the <kbd>Meta</kbd> key is enabled when the touch event is created.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/TouchEvent/metaKey)

***

### NONE

> `readonly` **NONE**: `0`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11460

#### Inherited from

[`UIEvent`](UIEvent.md).[`NONE`](UIEvent.md#none)

***

### ~~returnValue~~

> **returnValue**: `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11403

The Event property **`returnValue`** indicates whether the default action for this event has been prevented or not.

#### Deprecated

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/returnValue)

#### Inherited from

[`UIEvent`](UIEvent.md).[`returnValue`](UIEvent.md#returnvalue)

***

### shiftKey

> `readonly` **shiftKey**: `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:32359

The read-only **`shiftKey`** property of the `TouchEvent` interface returns a boolean value indicating whether or not the <kbd>shift</kbd> key is enabled when the touch event is created.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/TouchEvent/shiftKey)

***

### ~~srcElement~~

> `readonly` **srcElement**: [`EventTarget`](EventTarget.md) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11410

The deprecated **`Event.srcElement`** is an alias for the Event.target property.

#### Deprecated

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/srcElement)

#### Inherited from

[`UIEvent`](UIEvent.md).[`srcElement`](UIEvent.md#srcelement)

***

### target

> `readonly` **target**: [`EventTarget`](EventTarget.md) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11416

The read-only **`target`** property of the dispatched.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/target)

#### Inherited from

[`UIEvent`](UIEvent.md).[`target`](UIEvent.md#target)

***

### targetTouches

> `readonly` **targetTouches**: `TouchList`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:32365

The **`targetTouches`** read-only property is a TouchList listing all the Touch objects for touch points that are still in contact with the touch surface **and** whose Element/touchstart_event event occurred inside the same target element as the current target element.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/TouchEvent/targetTouches)

***

### timeStamp

> `readonly` **timeStamp**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11422

The **`timeStamp`** read-only property of the Event interface returns the time (in milliseconds) at which the event was created.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/timeStamp)

#### Inherited from

[`UIEvent`](UIEvent.md).[`timeStamp`](UIEvent.md#timestamp)

***

### touches

> `readonly` **touches**: `TouchList`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:32371

**`touches`** is a read-only TouchList listing all the Touch objects for touch points that are currently in contact with the touch surface, regardless of whether or not they've changed or what their target element was at Element/touchstart_event time.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/TouchEvent/touches)

***

### type

> `readonly` **type**: `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11428

The **`type`** read-only property of the Event interface returns a string containing the event's type.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/type)

#### Inherited from

[`UIEvent`](UIEvent.md).[`type`](UIEvent.md#type)

***

### view

> `readonly` **view**: [`Window`](Window.md) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:32613

The **`UIEvent.view`** read-only property returns the is the Window object the event happened in.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/UIEvent/view)

#### Inherited from

[`UIEvent`](UIEvent.md).[`view`](UIEvent.md#view)

***

### ~~which~~

> `readonly` **which**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:32620

The **`UIEvent.which`** read-only property of the UIEvent interface returns a number that indicates which button was pressed on the mouse, or the numeric `keyCode` or the character code (`charCode`) of the key pressed on the keyboard.

#### Deprecated

[MDN Reference](https://developer.mozilla.org/docs/Web/API/UIEvent/which)

#### Inherited from

[`UIEvent`](UIEvent.md).[`which`](UIEvent.md#which)

## Methods

### composedPath()

> **composedPath**(): [`EventTarget`](EventTarget.md)[]

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11434

The **`composedPath()`** method of the Event interface returns the event's path which is an array of the objects on which listeners will be invoked.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/composedPath)

#### Returns

[`EventTarget`](EventTarget.md)[]

#### Inherited from

[`UIEvent`](UIEvent.md).[`composedPath`](UIEvent.md#composedpath)

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

[`UIEvent`](UIEvent.md).[`initEvent`](UIEvent.md#initevent)

***

### ~~initUIEvent()~~

> **initUIEvent**(`typeArg`, `bubblesArg?`, `cancelableArg?`, `viewArg?`, `detailArg?`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:32627

The **`UIEvent.initUIEvent()`** method initializes a UI event once it's been created.

#### Parameters

##### typeArg

`string`

##### bubblesArg?

`boolean`

##### cancelableArg?

`boolean`

##### viewArg?

[`Window`](Window.md) | `null`

##### detailArg?

`number`

#### Returns

`void`

#### Deprecated

[MDN Reference](https://developer.mozilla.org/docs/Web/API/UIEvent/initUIEvent)

#### Inherited from

[`UIEvent`](UIEvent.md).[`initUIEvent`](UIEvent.md#inituievent)

***

### preventDefault()

> **preventDefault**(): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11447

The **`preventDefault()`** method of the Event interface tells the user agent that if the event does not get explicitly handled, its default action should not be taken as it normally would be.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/preventDefault)

#### Returns

`void`

#### Inherited from

[`UIEvent`](UIEvent.md).[`preventDefault`](UIEvent.md#preventdefault)

***

### stopImmediatePropagation()

> **stopImmediatePropagation**(): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11453

The **`stopImmediatePropagation()`** method of the If several listeners are attached to the same element for the same event type, they are called in the order in which they were added.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/stopImmediatePropagation)

#### Returns

`void`

#### Inherited from

[`UIEvent`](UIEvent.md).[`stopImmediatePropagation`](UIEvent.md#stopimmediatepropagation)

***

### stopPropagation()

> **stopPropagation**(): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11459

The **`stopPropagation()`** method of the Event interface prevents further propagation of the current event in the capturing and bubbling phases.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/stopPropagation)

#### Returns

`void`

#### Inherited from

[`UIEvent`](UIEvent.md).[`stopPropagation`](UIEvent.md#stoppropagation)
