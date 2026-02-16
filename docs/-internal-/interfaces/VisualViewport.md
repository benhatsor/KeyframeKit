[**KeyframeKit.js**](../../README.md)

***

[KeyframeKit.js](../../globals.md) / [\<internal\>](../README.md) / VisualViewport

# Interface: VisualViewport

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:33405

The **`VisualViewport`** interface of the Visual Viewport API represents the visual viewport for a given window.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/VisualViewport)

## Extends

- [`EventTarget`](EventTarget.md)

## Properties

### height

> `readonly` **height**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:33411

The **`height`** read-only property of the VisualViewport interface returns the height of the visual viewport, in CSS pixels, or `0` if current document is not fully active.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/VisualViewport/height)

***

### offsetLeft

> `readonly` **offsetLeft**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:33417

The **`offsetLeft`** read-only property of the VisualViewport interface returns the offset of the left edge of the visual viewport from the left edge of the layout viewport in CSS pixels, or `0` if current document is not fully active.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/VisualViewport/offsetLeft)

***

### offsetTop

> `readonly` **offsetTop**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:33423

The **`offsetTop`** read-only property of the VisualViewport interface returns the offset of the top edge of the visual viewport from the top edge of the layout viewport in CSS pixels, or `0` if current document is not fully active.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/VisualViewport/offsetTop)

***

### onresize

> **onresize**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:33425

[MDN Reference](https://developer.mozilla.org/docs/Web/API/VisualViewport/resize_event)

***

### onscroll

> **onscroll**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:33427

[MDN Reference](https://developer.mozilla.org/docs/Web/API/VisualViewport/scroll_event)

***

### pageLeft

> `readonly` **pageLeft**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:33433

The **`pageLeft`** read-only property of the VisualViewport interface returns the x coordinate of the left edge of the visual viewport relative to the initial containing block origin, in CSS pixels, or `0` if current document is not fully active.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/VisualViewport/pageLeft)

***

### pageTop

> `readonly` **pageTop**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:33439

The **`pageTop`** read-only property of the VisualViewport interface returns the y coordinate of the top edge of the visual viewport relative to the initial containing block origin, in CSS pixels, or `0` if current document is not fully active.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/VisualViewport/pageTop)

***

### scale

> `readonly` **scale**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:33445

The **`scale`** read-only property of the VisualViewport interface returns the pinch-zoom scaling factor applied to the visual viewport, or `0` if current document is not fully active, or `1` if there is no output device.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/VisualViewport/scale)

***

### width

> `readonly` **width**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:33451

The **`width`** read-only property of the VisualViewport interface returns the width of the visual viewport, in CSS pixels, or `0` if current document is not fully active.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/VisualViewport/width)

## Methods

### addEventListener()

#### Call Signature

> **addEventListener**\<`K`\>(`type`, `listener`, `options?`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:33452

The **`addEventListener()`** method of the EventTarget interface sets up a function that will be called whenever the specified event is delivered to the target.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener)

##### Type Parameters

###### K

`K` *extends* keyof [`VisualViewportEventMap`](VisualViewportEventMap.md)

##### Parameters

###### type

`K`

###### listener

(`this`, `ev`) => `any`

###### options?

`boolean` | [`AddEventListenerOptions`](AddEventListenerOptions.md)

##### Returns

`void`

##### Overrides

[`EventTarget`](EventTarget.md).[`addEventListener`](EventTarget.md#addeventlistener)

#### Call Signature

> **addEventListener**(`type`, `listener`, `options?`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:33453

The **`addEventListener()`** method of the EventTarget interface sets up a function that will be called whenever the specified event is delivered to the target.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener)

##### Parameters

###### type

`string`

###### listener

[`EventListenerOrEventListenerObject`](../type-aliases/EventListenerOrEventListenerObject.md)

###### options?

`boolean` | [`AddEventListenerOptions`](AddEventListenerOptions.md)

##### Returns

`void`

##### Overrides

`EventTarget.addEventListener`

***

### dispatchEvent()

> **dispatchEvent**(`event`): `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11575

The **`dispatchEvent()`** method of the EventTarget sends an Event to the object, (synchronously) invoking the affected event listeners in the appropriate order.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/dispatchEvent)

#### Parameters

##### event

[`Event`](Event.md)

#### Returns

`boolean`

#### Inherited from

[`EventTarget`](EventTarget.md).[`dispatchEvent`](EventTarget.md#dispatchevent)

***

### removeEventListener()

#### Call Signature

> **removeEventListener**\<`K`\>(`type`, `listener`, `options?`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:33454

The **`removeEventListener()`** method of the EventTarget interface removes an event listener previously registered with EventTarget.addEventListener() from the target.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/removeEventListener)

##### Type Parameters

###### K

`K` *extends* keyof [`VisualViewportEventMap`](VisualViewportEventMap.md)

##### Parameters

###### type

`K`

###### listener

(`this`, `ev`) => `any`

###### options?

`boolean` | [`EventListenerOptions`](EventListenerOptions.md)

##### Returns

`void`

##### Overrides

[`EventTarget`](EventTarget.md).[`removeEventListener`](EventTarget.md#removeeventlistener)

#### Call Signature

> **removeEventListener**(`type`, `listener`, `options?`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:33455

The **`removeEventListener()`** method of the EventTarget interface removes an event listener previously registered with EventTarget.addEventListener() from the target.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/removeEventListener)

##### Parameters

###### type

`string`

###### listener

[`EventListenerOrEventListenerObject`](../type-aliases/EventListenerOrEventListenerObject.md)

###### options?

`boolean` | [`EventListenerOptions`](EventListenerOptions.md)

##### Returns

`void`

##### Overrides

`EventTarget.removeEventListener`
