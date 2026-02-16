[**KeyframeKit.js**](../../README.md)

***

[KeyframeKit.js](../../globals.md) / [\<internal\>](../README.md) / Event

# Interface: Event

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11347

The **`Event`** interface represents an event which takes place on an `EventTarget`.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event)

## Extended by

- [`AnimationPlaybackEvent`](AnimationPlaybackEvent.md)
- [`AnimationEvent`](AnimationEvent.md)
- [`AudioProcessingEvent`](AudioProcessingEvent.md)
- [`BeforeUnloadEvent`](BeforeUnloadEvent.md)
- [`BlobEvent`](BlobEvent.md)
- [`ClipboardEvent`](ClipboardEvent.md)
- [`CloseEvent`](CloseEvent.md)
- [`ContentVisibilityAutoStateChangeEvent`](ContentVisibilityAutoStateChangeEvent.md)
- [`CookieChangeEvent`](CookieChangeEvent.md)
- [`CustomEvent`](CustomEvent.md)
- [`DeviceMotionEvent`](DeviceMotionEvent.md)
- [`DeviceOrientationEvent`](DeviceOrientationEvent.md)
- [`ErrorEvent`](ErrorEvent.md)
- [`FontFaceSetLoadEvent`](FontFaceSetLoadEvent.md)
- [`FormDataEvent`](FormDataEvent.md)
- [`GamepadEvent`](GamepadEvent.md)
- [`HashChangeEvent`](HashChangeEvent.md)
- [`IDBVersionChangeEvent`](IDBVersionChangeEvent.md)
- [`MIDIConnectionEvent`](MIDIConnectionEvent.md)
- [`MIDIMessageEvent`](MIDIMessageEvent.md)
- [`MediaEncryptedEvent`](MediaEncryptedEvent.md)
- [`MediaKeyMessageEvent`](MediaKeyMessageEvent.md)
- [`MediaQueryListEvent`](MediaQueryListEvent.md)
- [`MediaStreamTrackEvent`](MediaStreamTrackEvent.md)
- [`OfflineAudioCompletionEvent`](OfflineAudioCompletionEvent.md)
- [`PageRevealEvent`](PageRevealEvent.md)
- [`PageSwapEvent`](PageSwapEvent.md)
- [`PageTransitionEvent`](PageTransitionEvent.md)
- [`PaymentRequestUpdateEvent`](PaymentRequestUpdateEvent.md)
- [`PictureInPictureEvent`](PictureInPictureEvent.md)
- [`PopStateEvent`](PopStateEvent.md)
- [`ProgressEvent`](ProgressEvent.md)
- [`PromiseRejectionEvent`](PromiseRejectionEvent.md)
- [`RTCDTMFToneChangeEvent`](RTCDTMFToneChangeEvent.md)
- [`RTCDataChannelEvent`](RTCDataChannelEvent.md)
- [`RTCErrorEvent`](RTCErrorEvent.md)
- [`RTCPeerConnectionIceErrorEvent`](RTCPeerConnectionIceErrorEvent.md)
- [`RTCPeerConnectionIceEvent`](RTCPeerConnectionIceEvent.md)
- [`RTCTrackEvent`](RTCTrackEvent.md)
- [`SecurityPolicyViolationEvent`](SecurityPolicyViolationEvent.md)
- [`SpeechSynthesisEvent`](SpeechSynthesisEvent.md)
- [`StorageEvent`](StorageEvent.md)
- [`SubmitEvent`](SubmitEvent.md)
- [`ToggleEvent`](ToggleEvent.md)
- [`TrackEvent`](TrackEvent.md)
- [`TransitionEvent`](TransitionEvent.md)
- [`UIEvent`](UIEvent.md)
- [`WebGLContextEvent`](WebGLContextEvent.md)

## Properties

### AT\_TARGET

> `readonly` **AT\_TARGET**: `2`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11462

***

### bubbles

> `readonly` **bubbles**: `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11353

The **`bubbles`** read-only property of the Event interface indicates whether the event bubbles up through the DOM tree or not.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/bubbles)

***

### BUBBLING\_PHASE

> `readonly` **BUBBLING\_PHASE**: `3`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11463

***

### cancelable

> `readonly` **cancelable**: `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11366

The **`cancelable`** read-only property of the Event interface indicates whether the event can be canceled, and therefore prevented as if the event never happened.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/cancelable)

***

### ~~cancelBubble~~

> **cancelBubble**: `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11360

The **`cancelBubble`** property of the Event interface is deprecated.

#### Deprecated

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/cancelBubble)

***

### CAPTURING\_PHASE

> `readonly` **CAPTURING\_PHASE**: `1`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11461

***

### composed

> `readonly` **composed**: `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11372

The read-only **`composed`** property of the or not the event will propagate across the shadow DOM boundary into the standard DOM.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/composed)

***

### currentTarget

> `readonly` **currentTarget**: [`EventTarget`](EventTarget.md) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11378

The **`currentTarget`** read-only property of the Event interface identifies the element to which the event handler has been attached.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/currentTarget)

***

### defaultPrevented

> `readonly` **defaultPrevented**: `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11384

The **`defaultPrevented`** read-only property of the Event interface returns a boolean value indicating whether or not the call to Event.preventDefault() canceled the event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/defaultPrevented)

***

### eventPhase

> `readonly` **eventPhase**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11390

The **`eventPhase`** read-only property of the being evaluated.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/eventPhase)

***

### isTrusted

> `readonly` **isTrusted**: `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11396

The **`isTrusted`** read-only property of the when the event was generated by the user agent (including via user actions and programmatic methods such as HTMLElement.focus()), and `false` when the event was dispatched via The only exception is the `click` event, which initializes the `isTrusted` property to `false` in user agents.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/isTrusted)

***

### NONE

> `readonly` **NONE**: `0`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11460

***

### ~~returnValue~~

> **returnValue**: `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11403

The Event property **`returnValue`** indicates whether the default action for this event has been prevented or not.

#### Deprecated

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/returnValue)

***

### ~~srcElement~~

> `readonly` **srcElement**: [`EventTarget`](EventTarget.md) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11410

The deprecated **`Event.srcElement`** is an alias for the Event.target property.

#### Deprecated

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/srcElement)

***

### target

> `readonly` **target**: [`EventTarget`](EventTarget.md) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11416

The read-only **`target`** property of the dispatched.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/target)

***

### timeStamp

> `readonly` **timeStamp**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11422

The **`timeStamp`** read-only property of the Event interface returns the time (in milliseconds) at which the event was created.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/timeStamp)

***

### type

> `readonly` **type**: `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11428

The **`type`** read-only property of the Event interface returns a string containing the event's type.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/type)

## Methods

### composedPath()

> **composedPath**(): [`EventTarget`](EventTarget.md)[]

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11434

The **`composedPath()`** method of the Event interface returns the event's path which is an array of the objects on which listeners will be invoked.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/composedPath)

#### Returns

[`EventTarget`](EventTarget.md)[]

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

***

### preventDefault()

> **preventDefault**(): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11447

The **`preventDefault()`** method of the Event interface tells the user agent that if the event does not get explicitly handled, its default action should not be taken as it normally would be.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/preventDefault)

#### Returns

`void`

***

### stopImmediatePropagation()

> **stopImmediatePropagation**(): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11453

The **`stopImmediatePropagation()`** method of the If several listeners are attached to the same element for the same event type, they are called in the order in which they were added.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/stopImmediatePropagation)

#### Returns

`void`

***

### stopPropagation()

> **stopPropagation**(): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11459

The **`stopPropagation()`** method of the Event interface prevents further propagation of the current event in the capturing and bubbling phases.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/stopPropagation)

#### Returns

`void`
