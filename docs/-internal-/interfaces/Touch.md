[**KeyframeKit.js**](../../README.md)

***

[KeyframeKit.js](../../globals.md) / [\<internal\>](../README.md) / Touch

# Interface: Touch

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:32244

The **`Touch`** interface represents a single contact point on a touch-sensitive device.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Touch)

## Properties

### clientX

> `readonly` **clientX**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:32250

The `Touch.clientX` read-only property returns the X coordinate of the touch point relative to the viewport, not including any scroll offset.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Touch/clientX)

***

### clientY

> `readonly` **clientY**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:32256

The **`Touch.clientY`** read-only property returns the Y coordinate of the touch point relative to the browser's viewport, not including any scroll offset.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Touch/clientY)

***

### force

> `readonly` **force**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:32262

The **`Touch.force`** read-only property returns the amount of pressure the user is applying to the touch surface for a Touch point.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Touch/force)

***

### identifier

> `readonly` **identifier**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:32268

The **`Touch.identifier`** returns a value uniquely identifying this point of contact with the touch surface.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Touch/identifier)

***

### pageX

> `readonly` **pageX**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:32274

The **`Touch.pageX`** read-only property returns the X coordinate of the touch point relative to the viewport, including any scroll offset.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Touch/pageX)

***

### pageY

> `readonly` **pageY**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:32280

The **`Touch.pageY`** read-only property returns the Y coordinate of the touch point relative to the viewport, including any scroll offset.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Touch/pageY)

***

### radiusX

> `readonly` **radiusX**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:32286

The **`radiusX`** read-only property of the Touch interface returns the X radius of the ellipse that most closely circumscribes the area of contact with the touch surface.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Touch/radiusX)

***

### radiusY

> `readonly` **radiusY**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:32292

The **`radiusY`** read-only property of the Touch interface returns the Y radius of the ellipse that most closely circumscribes the area of contact with the touch surface.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Touch/radiusY)

***

### rotationAngle

> `readonly` **rotationAngle**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:32298

The **`rotationAngle`** read-only property of the Touch interface returns the rotation angle, in degrees, of the contact area ellipse defined by Touch.radiusX and Touch.radiusY.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Touch/rotationAngle)

***

### screenX

> `readonly` **screenX**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:32304

Returns the X coordinate of the touch point relative to the screen, not including any scroll offset.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Touch/screenX)

***

### screenY

> `readonly` **screenY**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:32310

Returns the Y coordinate of the touch point relative to the screen, not including any scroll offset.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Touch/screenY)

***

### target

> `readonly` **target**: [`EventTarget`](EventTarget.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:32316

The read-only **`target`** property of the `Touch` interface returns the (EventTarget) on which the touch contact started when it was first placed on the surface, even if the touch point has since moved outside the interactive area of that element or even been removed from the document.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Touch/target)
