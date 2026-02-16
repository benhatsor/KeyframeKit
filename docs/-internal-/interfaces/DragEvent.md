[**KeyframeKit.js**](../../README.md)

***

[KeyframeKit.js](../../globals.md) / [\<internal\>](../README.md) / DragEvent

# Interface: DragEvent

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10512

The **`DragEvent`** interface is a DOM event that represents a drag and drop interaction.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/DragEvent)

## Extends

- [`MouseEvent`](MouseEvent.md)

## Properties

### altKey

> `readonly` **altKey**: `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:20935

The **`MouseEvent.altKey`** read-only property is a boolean value that indicates whether the <kbd>alt</kbd> key was pressed or not when a given mouse event occurs.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/MouseEvent/altKey)

#### Inherited from

[`MouseEvent`](MouseEvent.md).[`altKey`](MouseEvent.md#altkey)

***

### AT\_TARGET

> `readonly` **AT\_TARGET**: `2`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11462

#### Inherited from

[`MouseEvent`](MouseEvent.md).[`AT_TARGET`](MouseEvent.md#at_target)

***

### bubbles

> `readonly` **bubbles**: `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11353

The **`bubbles`** read-only property of the Event interface indicates whether the event bubbles up through the DOM tree or not.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/bubbles)

#### Inherited from

[`MouseEvent`](MouseEvent.md).[`bubbles`](MouseEvent.md#bubbles)

***

### BUBBLING\_PHASE

> `readonly` **BUBBLING\_PHASE**: `3`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11463

#### Inherited from

[`MouseEvent`](MouseEvent.md).[`BUBBLING_PHASE`](MouseEvent.md#bubbling_phase)

***

### button

> `readonly` **button**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:20941

The **`MouseEvent.button`** read-only property indicates which button was pressed or released on the mouse to trigger the event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/MouseEvent/button)

#### Inherited from

[`MouseEvent`](MouseEvent.md).[`button`](MouseEvent.md#button)

***

### buttons

> `readonly` **buttons**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:20947

The **`MouseEvent.buttons`** read-only property indicates which buttons are pressed on the mouse (or other input device) when a mouse event is triggered.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/MouseEvent/buttons)

#### Inherited from

[`MouseEvent`](MouseEvent.md).[`buttons`](MouseEvent.md#buttons)

***

### cancelable

> `readonly` **cancelable**: `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11366

The **`cancelable`** read-only property of the Event interface indicates whether the event can be canceled, and therefore prevented as if the event never happened.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/cancelable)

#### Inherited from

[`MouseEvent`](MouseEvent.md).[`cancelable`](MouseEvent.md#cancelable)

***

### ~~cancelBubble~~

> **cancelBubble**: `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11360

The **`cancelBubble`** property of the Event interface is deprecated.

#### Deprecated

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/cancelBubble)

#### Inherited from

[`MouseEvent`](MouseEvent.md).[`cancelBubble`](MouseEvent.md#cancelbubble)

***

### CAPTURING\_PHASE

> `readonly` **CAPTURING\_PHASE**: `1`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11461

#### Inherited from

[`MouseEvent`](MouseEvent.md).[`CAPTURING_PHASE`](MouseEvent.md#capturing_phase)

***

### clientX

> `readonly` **clientX**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:20953

The **`clientX`** read-only property of the MouseEvent interface provides the horizontal coordinate within the application's viewport at which the event occurred (as opposed to the coordinate within the page).

[MDN Reference](https://developer.mozilla.org/docs/Web/API/MouseEvent/clientX)

#### Inherited from

[`MouseEvent`](MouseEvent.md).[`clientX`](MouseEvent.md#clientx)

***

### clientY

> `readonly` **clientY**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:20959

The **`clientY`** read-only property of the MouseEvent interface provides the vertical coordinate within the application's viewport at which the event occurred (as opposed to the coordinate within the page).

[MDN Reference](https://developer.mozilla.org/docs/Web/API/MouseEvent/clientY)

#### Inherited from

[`MouseEvent`](MouseEvent.md).[`clientY`](MouseEvent.md#clienty)

***

### composed

> `readonly` **composed**: `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11372

The read-only **`composed`** property of the or not the event will propagate across the shadow DOM boundary into the standard DOM.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/composed)

#### Inherited from

[`MouseEvent`](MouseEvent.md).[`composed`](MouseEvent.md#composed)

***

### ctrlKey

> `readonly` **ctrlKey**: `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:20965

The **`MouseEvent.ctrlKey`** read-only property is a boolean value that indicates whether the <kbd>ctrl</kbd> key was pressed or not when a given mouse event occurs.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/MouseEvent/ctrlKey)

#### Inherited from

[`MouseEvent`](MouseEvent.md).[`ctrlKey`](MouseEvent.md#ctrlkey)

***

### currentTarget

> `readonly` **currentTarget**: [`EventTarget`](EventTarget.md) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11378

The **`currentTarget`** read-only property of the Event interface identifies the element to which the event handler has been attached.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/currentTarget)

#### Inherited from

[`MouseEvent`](MouseEvent.md).[`currentTarget`](MouseEvent.md#currenttarget)

***

### dataTransfer

> `readonly` **dataTransfer**: [`DataTransfer`](DataTransfer.md) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10518

The **`DragEvent.dataTransfer`** read-only property holds the drag operation's data (as a DataTransfer object).

[MDN Reference](https://developer.mozilla.org/docs/Web/API/DragEvent/dataTransfer)

***

### defaultPrevented

> `readonly` **defaultPrevented**: `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11384

The **`defaultPrevented`** read-only property of the Event interface returns a boolean value indicating whether or not the call to Event.preventDefault() canceled the event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/defaultPrevented)

#### Inherited from

[`MouseEvent`](MouseEvent.md).[`defaultPrevented`](MouseEvent.md#defaultprevented)

***

### detail

> `readonly` **detail**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:32607

The **`UIEvent.detail`** read-only property, when non-zero, provides the current (or next, depending on the event) click count.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/UIEvent/detail)

#### Inherited from

[`MouseEvent`](MouseEvent.md).[`detail`](MouseEvent.md#detail)

***

### eventPhase

> `readonly` **eventPhase**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11390

The **`eventPhase`** read-only property of the being evaluated.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/eventPhase)

#### Inherited from

[`MouseEvent`](MouseEvent.md).[`eventPhase`](MouseEvent.md#eventphase)

***

### isTrusted

> `readonly` **isTrusted**: `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11396

The **`isTrusted`** read-only property of the when the event was generated by the user agent (including via user actions and programmatic methods such as HTMLElement.focus()), and `false` when the event was dispatched via The only exception is the `click` event, which initializes the `isTrusted` property to `false` in user agents.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/isTrusted)

#### Inherited from

[`MouseEvent`](MouseEvent.md).[`isTrusted`](MouseEvent.md#istrusted)

***

### layerX

> `readonly` **layerX**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:20971

The **`MouseEvent.layerX`** read-only property returns the horizontal coordinate of the event relative to the current layer.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/MouseEvent/layerX)

#### Inherited from

[`MouseEvent`](MouseEvent.md).[`layerX`](MouseEvent.md#layerx)

***

### layerY

> `readonly` **layerY**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:20977

The **`MouseEvent.layerY`** read-only property returns the vertical coordinate of the event relative to the current layer.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/MouseEvent/layerY)

#### Inherited from

[`MouseEvent`](MouseEvent.md).[`layerY`](MouseEvent.md#layery)

***

### metaKey

> `readonly` **metaKey**: `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:20983

The **`MouseEvent.metaKey`** read-only property is a boolean value that indicates whether the <kbd>meta</kbd> key was pressed or not when a given mouse event occurs.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/MouseEvent/metaKey)

#### Inherited from

[`MouseEvent`](MouseEvent.md).[`metaKey`](MouseEvent.md#metakey)

***

### movementX

> `readonly` **movementX**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:20989

The **`movementX`** read-only property of the MouseEvent interface provides the difference in the X coordinate of the mouse pointer between the given event and the previous Element/mousemove_event event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/MouseEvent/movementX)

#### Inherited from

[`MouseEvent`](MouseEvent.md).[`movementX`](MouseEvent.md#movementx)

***

### movementY

> `readonly` **movementY**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:20995

The **`movementY`** read-only property of the MouseEvent interface provides the difference in the Y coordinate of the mouse pointer between the given event and the previous Element/mousemove_event event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/MouseEvent/movementY)

#### Inherited from

[`MouseEvent`](MouseEvent.md).[`movementY`](MouseEvent.md#movementy)

***

### NONE

> `readonly` **NONE**: `0`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11460

#### Inherited from

[`MouseEvent`](MouseEvent.md).[`NONE`](MouseEvent.md#none)

***

### offsetX

> `readonly` **offsetX**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:21001

The **`offsetX`** read-only property of the MouseEvent interface provides the offset in the X coordinate of the mouse pointer between that event and the padding edge of the target node.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/MouseEvent/offsetX)

#### Inherited from

[`MouseEvent`](MouseEvent.md).[`offsetX`](MouseEvent.md#offsetx)

***

### offsetY

> `readonly` **offsetY**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:21007

The **`offsetY`** read-only property of the MouseEvent interface provides the offset in the Y coordinate of the mouse pointer between that event and the padding edge of the target node.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/MouseEvent/offsetY)

#### Inherited from

[`MouseEvent`](MouseEvent.md).[`offsetY`](MouseEvent.md#offsety)

***

### pageX

> `readonly` **pageX**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:21013

The **`pageX`** read-only property of the MouseEvent interface returns the X (horizontal) coordinate (in pixels) at which the mouse was clicked, relative to the left edge of the entire document.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/MouseEvent/pageX)

#### Inherited from

[`MouseEvent`](MouseEvent.md).[`pageX`](MouseEvent.md#pagex)

***

### pageY

> `readonly` **pageY**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:21019

The **`pageY`** read-only property of the MouseEvent interface returns the Y (vertical) coordinate (in pixels) at which the mouse was clicked, relative to the top edge of the entire document.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/MouseEvent/pageY)

#### Inherited from

[`MouseEvent`](MouseEvent.md).[`pageY`](MouseEvent.md#pagey)

***

### relatedTarget

> `readonly` **relatedTarget**: [`EventTarget`](EventTarget.md) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:21025

The **`MouseEvent.relatedTarget`** read-only property is the secondary target for the mouse event, if there is one.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/MouseEvent/relatedTarget)

#### Inherited from

[`MouseEvent`](MouseEvent.md).[`relatedTarget`](MouseEvent.md#relatedtarget)

***

### ~~returnValue~~

> **returnValue**: `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11403

The Event property **`returnValue`** indicates whether the default action for this event has been prevented or not.

#### Deprecated

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/returnValue)

#### Inherited from

[`MouseEvent`](MouseEvent.md).[`returnValue`](MouseEvent.md#returnvalue)

***

### screenX

> `readonly` **screenX**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:21031

The **`screenX`** read-only property of the MouseEvent interface provides the horizontal coordinate (offset) of the mouse pointer in screen coordinates.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/MouseEvent/screenX)

#### Inherited from

[`MouseEvent`](MouseEvent.md).[`screenX`](MouseEvent.md#screenx)

***

### screenY

> `readonly` **screenY**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:21037

The **`screenY`** read-only property of the MouseEvent interface provides the vertical coordinate (offset) of the mouse pointer in screen coordinates.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/MouseEvent/screenY)

#### Inherited from

[`MouseEvent`](MouseEvent.md).[`screenY`](MouseEvent.md#screeny)

***

### shiftKey

> `readonly` **shiftKey**: `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:21043

The **`MouseEvent.shiftKey`** read-only property is a boolean value that indicates whether the <kbd>shift</kbd> key was pressed or not when a given mouse event occurs.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/MouseEvent/shiftKey)

#### Inherited from

[`MouseEvent`](MouseEvent.md).[`shiftKey`](MouseEvent.md#shiftkey)

***

### ~~srcElement~~

> `readonly` **srcElement**: [`EventTarget`](EventTarget.md) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11410

The deprecated **`Event.srcElement`** is an alias for the Event.target property.

#### Deprecated

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/srcElement)

#### Inherited from

[`MouseEvent`](MouseEvent.md).[`srcElement`](MouseEvent.md#srcelement)

***

### target

> `readonly` **target**: [`EventTarget`](EventTarget.md) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11416

The read-only **`target`** property of the dispatched.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/target)

#### Inherited from

[`MouseEvent`](MouseEvent.md).[`target`](MouseEvent.md#target)

***

### timeStamp

> `readonly` **timeStamp**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11422

The **`timeStamp`** read-only property of the Event interface returns the time (in milliseconds) at which the event was created.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/timeStamp)

#### Inherited from

[`MouseEvent`](MouseEvent.md).[`timeStamp`](MouseEvent.md#timestamp)

***

### type

> `readonly` **type**: `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11428

The **`type`** read-only property of the Event interface returns a string containing the event's type.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/type)

#### Inherited from

[`MouseEvent`](MouseEvent.md).[`type`](MouseEvent.md#type)

***

### view

> `readonly` **view**: [`Window`](Window.md) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:32613

The **`UIEvent.view`** read-only property returns the is the Window object the event happened in.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/UIEvent/view)

#### Inherited from

[`MouseEvent`](MouseEvent.md).[`view`](MouseEvent.md#view)

***

### ~~which~~

> `readonly` **which**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:32620

The **`UIEvent.which`** read-only property of the UIEvent interface returns a number that indicates which button was pressed on the mouse, or the numeric `keyCode` or the character code (`charCode`) of the key pressed on the keyboard.

#### Deprecated

[MDN Reference](https://developer.mozilla.org/docs/Web/API/UIEvent/which)

#### Inherited from

[`MouseEvent`](MouseEvent.md).[`which`](MouseEvent.md#which)

***

### x

> `readonly` **x**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:21049

The **`MouseEvent.x`** property is an alias for the MouseEvent.clientX property.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/MouseEvent/x)

#### Inherited from

[`MouseEvent`](MouseEvent.md).[`x`](MouseEvent.md#x)

***

### y

> `readonly` **y**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:21055

The **`MouseEvent.y`** property is an alias for the MouseEvent.clientY property.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/MouseEvent/y)

#### Inherited from

[`MouseEvent`](MouseEvent.md).[`y`](MouseEvent.md#y)

## Methods

### composedPath()

> **composedPath**(): [`EventTarget`](EventTarget.md)[]

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11434

The **`composedPath()`** method of the Event interface returns the event's path which is an array of the objects on which listeners will be invoked.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/composedPath)

#### Returns

[`EventTarget`](EventTarget.md)[]

#### Inherited from

[`MouseEvent`](MouseEvent.md).[`composedPath`](MouseEvent.md#composedpath)

***

### getModifierState()

> **getModifierState**(`keyArg`): `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:21061

The **`MouseEvent.getModifierState()`** method returns the current state of the specified modifier key: `true` if the modifier is active (i.e., the modifier key is pressed or locked), otherwise, `false`.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/MouseEvent/getModifierState)

#### Parameters

##### keyArg

`string`

#### Returns

`boolean`

#### Inherited from

[`MouseEvent`](MouseEvent.md).[`getModifierState`](MouseEvent.md#getmodifierstate)

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

[`MouseEvent`](MouseEvent.md).[`initEvent`](MouseEvent.md#initevent)

***

### ~~initMouseEvent()~~

> **initMouseEvent**(`typeArg`, `canBubbleArg`, `cancelableArg`, `viewArg`, `detailArg`, `screenXArg`, `screenYArg`, `clientXArg`, `clientYArg`, `ctrlKeyArg`, `altKeyArg`, `shiftKeyArg`, `metaKeyArg`, `buttonArg`, `relatedTargetArg`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:21068

The **`MouseEvent.initMouseEvent()`** method initializes the value of a mouse event once it's been created (normally using the Document.createEvent() method).

#### Parameters

##### typeArg

`string`

##### canBubbleArg

`boolean`

##### cancelableArg

`boolean`

##### viewArg

[`Window`](Window.md)

##### detailArg

`number`

##### screenXArg

`number`

##### screenYArg

`number`

##### clientXArg

`number`

##### clientYArg

`number`

##### ctrlKeyArg

`boolean`

##### altKeyArg

`boolean`

##### shiftKeyArg

`boolean`

##### metaKeyArg

`boolean`

##### buttonArg

`number`

##### relatedTargetArg

[`EventTarget`](EventTarget.md) | `null`

#### Returns

`void`

#### Deprecated

[MDN Reference](https://developer.mozilla.org/docs/Web/API/MouseEvent/initMouseEvent)

#### Inherited from

[`MouseEvent`](MouseEvent.md).[`initMouseEvent`](MouseEvent.md#initmouseevent)

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

[`MouseEvent`](MouseEvent.md).[`initUIEvent`](MouseEvent.md#inituievent)

***

### preventDefault()

> **preventDefault**(): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11447

The **`preventDefault()`** method of the Event interface tells the user agent that if the event does not get explicitly handled, its default action should not be taken as it normally would be.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/preventDefault)

#### Returns

`void`

#### Inherited from

[`MouseEvent`](MouseEvent.md).[`preventDefault`](MouseEvent.md#preventdefault)

***

### stopImmediatePropagation()

> **stopImmediatePropagation**(): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11453

The **`stopImmediatePropagation()`** method of the If several listeners are attached to the same element for the same event type, they are called in the order in which they were added.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/stopImmediatePropagation)

#### Returns

`void`

#### Inherited from

[`MouseEvent`](MouseEvent.md).[`stopImmediatePropagation`](MouseEvent.md#stopimmediatepropagation)

***

### stopPropagation()

> **stopPropagation**(): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11459

The **`stopPropagation()`** method of the Event interface prevents further propagation of the current event in the capturing and bubbling phases.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/stopPropagation)

#### Returns

`void`

#### Inherited from

[`MouseEvent`](MouseEvent.md).[`stopPropagation`](MouseEvent.md#stoppropagation)
