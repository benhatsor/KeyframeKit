[**KeyframeKit.js**](../../README.md)

***

[KeyframeKit.js](../../globals.md) / [\<internal\>](../README.md) / OffscreenCanvas

# Interface: OffscreenCanvas

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:22367

When using the canvas element or the Canvas API, rendering, animation, and user interaction usually happen on the main execution thread of a web application.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/OffscreenCanvas)

## Extends

- [`EventTarget`](EventTarget.md)

## Properties

### height

> **height**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:22373

The **`height`** property returns and sets the height of an OffscreenCanvas object.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/OffscreenCanvas/height)

***

### oncontextlost

> **oncontextlost**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:22375

[MDN Reference](https://developer.mozilla.org/docs/Web/API/OffscreenCanvas/contextlost_event)

***

### oncontextrestored

> **oncontextrestored**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:22377

[MDN Reference](https://developer.mozilla.org/docs/Web/API/OffscreenCanvas/contextrestored_event)

***

### width

> **width**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:22383

The **`width`** property returns and sets the width of an OffscreenCanvas object.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/OffscreenCanvas/width)

## Methods

### addEventListener()

#### Call Signature

> **addEventListener**\<`K`\>(`type`, `listener`, `options?`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:22406

The **`addEventListener()`** method of the EventTarget interface sets up a function that will be called whenever the specified event is delivered to the target.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener)

##### Type Parameters

###### K

`K` *extends* keyof [`OffscreenCanvasEventMap`](OffscreenCanvasEventMap.md)

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

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:22407

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

### convertToBlob()

> **convertToBlob**(`options?`): `Promise`\<[`Blob`](Blob.md)\>

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:22389

The **`OffscreenCanvas.convertToBlob()`** method creates a Blob object representing the image contained in the canvas.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/OffscreenCanvas/convertToBlob)

#### Parameters

##### options?

[`ImageEncodeOptions`](ImageEncodeOptions.md)

#### Returns

`Promise`\<[`Blob`](Blob.md)\>

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

### getContext()

#### Call Signature

> **getContext**(`contextId`, `options?`): [`OffscreenCanvasRenderingContext2D`](OffscreenCanvasRenderingContext2D.md) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:22395

The **`OffscreenCanvas.getContext()`** method returns a drawing context for an offscreen canvas, or `null` if the context identifier is not supported, or the offscreen canvas has already been set to a different context mode.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/OffscreenCanvas/getContext)

##### Parameters

###### contextId

`"2d"`

###### options?

`any`

##### Returns

[`OffscreenCanvasRenderingContext2D`](OffscreenCanvasRenderingContext2D.md) \| `null`

#### Call Signature

> **getContext**(`contextId`, `options?`): [`ImageBitmapRenderingContext`](ImageBitmapRenderingContext.md) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:22396

##### Parameters

###### contextId

`"bitmaprenderer"`

###### options?

`any`

##### Returns

[`ImageBitmapRenderingContext`](ImageBitmapRenderingContext.md) \| `null`

#### Call Signature

> **getContext**(`contextId`, `options?`): [`WebGLRenderingContext`](WebGLRenderingContext.md) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:22397

##### Parameters

###### contextId

`"webgl"`

###### options?

`any`

##### Returns

[`WebGLRenderingContext`](WebGLRenderingContext.md) \| `null`

#### Call Signature

> **getContext**(`contextId`, `options?`): [`WebGL2RenderingContext`](WebGL2RenderingContext.md) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:22398

##### Parameters

###### contextId

`"webgl2"`

###### options?

`any`

##### Returns

[`WebGL2RenderingContext`](WebGL2RenderingContext.md) \| `null`

#### Call Signature

> **getContext**(`contextId`, `options?`): [`OffscreenRenderingContext`](../type-aliases/OffscreenRenderingContext.md) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:22399

##### Parameters

###### contextId

[`OffscreenRenderingContextId`](../type-aliases/OffscreenRenderingContextId.md)

###### options?

`any`

##### Returns

[`OffscreenRenderingContext`](../type-aliases/OffscreenRenderingContext.md) \| `null`

***

### removeEventListener()

#### Call Signature

> **removeEventListener**\<`K`\>(`type`, `listener`, `options?`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:22408

The **`removeEventListener()`** method of the EventTarget interface removes an event listener previously registered with EventTarget.addEventListener() from the target.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/removeEventListener)

##### Type Parameters

###### K

`K` *extends* keyof [`OffscreenCanvasEventMap`](OffscreenCanvasEventMap.md)

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

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:22409

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

***

### transferToImageBitmap()

> **transferToImageBitmap**(): [`ImageBitmap`](ImageBitmap.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:22405

The **`OffscreenCanvas.transferToImageBitmap()`** method creates an ImageBitmap object from the most recently rendered image of the `OffscreenCanvas`.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/OffscreenCanvas/transferToImageBitmap)

#### Returns

[`ImageBitmap`](ImageBitmap.md)
