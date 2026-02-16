[**KeyframeKit.js**](../../README.md)

***

[KeyframeKit.js](../../globals.md) / [\<internal\>](../README.md) / DocumentOrShadowRoot

# Interface: DocumentOrShadowRoot

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10429

## Extended by

- [`Document`](Document.md)
- [`ShadowRoot`](ShadowRoot.md)

## Properties

### activeElement

> `readonly` **activeElement**: [`Element`](Element.md) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10439

Returns the deepest element in the document through which or to which key events are being routed. This is, roughly speaking, the focused element in the document.

For the purposes of this API, when a child browsing context is focused, its container is focused in the parent browsing context. For example, if the user moves the focus to a text control in an iframe, the iframe is the element returned by the activeElement API in the iframe's node document.

Similarly, when the focused element is in a different node tree than documentOrShadowRoot, the element returned will be the host that's located in the same node tree as documentOrShadowRoot if documentOrShadowRoot is a shadow-including inclusive ancestor of the focused element, and null if not.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/activeElement)

***

### adoptedStyleSheets

> **adoptedStyleSheets**: [`CSSStyleSheet`](CSSStyleSheet.md)[]

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10441

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/adoptedStyleSheets)

***

### fullscreenElement

> `readonly` **fullscreenElement**: [`Element`](Element.md) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10447

Returns document's fullscreen element.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/fullscreenElement)

***

### pictureInPictureElement

> `readonly` **pictureInPictureElement**: [`Element`](Element.md) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10449

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/pictureInPictureElement)

***

### pointerLockElement

> `readonly` **pointerLockElement**: [`Element`](Element.md) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10451

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/pointerLockElement)

***

### styleSheets

> `readonly` **styleSheets**: `StyleSheetList`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10453

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/styleSheets)

## Methods

### elementFromPoint()

> **elementFromPoint**(`x`, `y`): [`Element`](Element.md) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10454

#### Parameters

##### x

`number`

##### y

`number`

#### Returns

[`Element`](Element.md) \| `null`

***

### elementsFromPoint()

> **elementsFromPoint**(`x`, `y`): [`Element`](Element.md)[]

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10455

#### Parameters

##### x

`number`

##### y

`number`

#### Returns

[`Element`](Element.md)[]

***

### getAnimations()

> **getAnimations**(): [`Animation`](Animation.md)[]

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10457

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/getAnimations)

#### Returns

[`Animation`](Animation.md)[]
