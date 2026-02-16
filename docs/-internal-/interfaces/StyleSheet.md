[**KeyframeKit.js**](../../README.md)

***

[KeyframeKit.js](../../globals.md) / [\<internal\>](../README.md) / StyleSheet

# Interface: StyleSheet

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:31545

An object implementing the `StyleSheet` interface represents a single style sheet.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/StyleSheet)

## Extended by

- [`CSSStyleSheet`](CSSStyleSheet.md)

## Properties

### disabled

> **disabled**: `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:31551

The **`disabled`** property of the applying to the document.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/StyleSheet/disabled)

***

### href

> `readonly` **href**: `string` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:31557

The **`href`** property of the StyleSheet interface returns the location of the style sheet.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/StyleSheet/href)

***

### ownerNode

> `readonly` **ownerNode**: [`Element`](Element.md) \| [`ProcessingInstruction`](ProcessingInstruction.md) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:31570

The **`ownerNode`** property of the with the document.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/StyleSheet/ownerNode)

***

### parentStyleSheet

> `readonly` **parentStyleSheet**: [`CSSStyleSheet`](CSSStyleSheet.md) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:31576

The **`parentStyleSheet`** property of the the given style sheet.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/StyleSheet/parentStyleSheet)

***

### title

> `readonly` **title**: `string` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:31582

The **`title`** property of the StyleSheet interface returns the advisory title of the current style sheet.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/StyleSheet/title)

***

### type

> `readonly` **type**: `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:31588

The **`type`** property of the StyleSheet interface specifies the style sheet language for the given style sheet.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/StyleSheet/type)

## Accessors

### media

#### Get Signature

> **get** **media**(): `MediaList`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:31563

The **`media`** property of the StyleSheet interface specifies the intended destination media for style information.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/StyleSheet/media)

##### Returns

`MediaList`

#### Set Signature

> **set** **media**(`mediaText`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:31564

##### Parameters

###### mediaText

`string`

##### Returns

`void`
