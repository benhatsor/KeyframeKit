[**KeyframeKit.js**](../../README.md)

***

[KeyframeKit.js](../../globals.md) / [\<internal\>](../README.md) / AbstractRange

# Interface: AbstractRange

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:2801

The **`AbstractRange`** abstract interface is the base class upon which all DOM range types are defined.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/AbstractRange)

## Extended by

- [`Range`](Range.md)
- [`StaticRange`](StaticRange.md)

## Properties

### collapsed

> `readonly` **collapsed**: `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:2807

The read-only **`collapsed`** property of the AbstractRange interface returns `true` if the range's start position and end position are the same.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/AbstractRange/collapsed)

***

### endContainer

> `readonly` **endContainer**: [`Node`](Node.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:2813

The read-only **`endContainer`** property of the AbstractRange interface returns the Node in which the end of the range is located.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/AbstractRange/endContainer)

***

### endOffset

> `readonly` **endOffset**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:2819

The **`endOffset`** property of the AbstractRange interface returns the offset into the end node of the range's end position.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/AbstractRange/endOffset)

***

### startContainer

> `readonly` **startContainer**: [`Node`](Node.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:2825

The read-only **`startContainer`** property of the AbstractRange interface returns the start Node for the range.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/AbstractRange/startContainer)

***

### startOffset

> `readonly` **startOffset**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:2831

The read-only **`startOffset`** property of the AbstractRange interface returns the offset into the start node of the range's start position.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/AbstractRange/startOffset)
