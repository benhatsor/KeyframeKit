[**KeyframeKit.js**](../../README.md)

***

[KeyframeKit.js](../../globals.md) / [\<internal\>](../README.md) / StaticRange

# Interface: StaticRange

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:31294

The DOM **`StaticRange`** interface extends AbstractRange to provide a method to specify a range of content in the DOM whose contents don't update to reflect changes which occur within the DOM tree.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/StaticRange)

## Extends

- [`AbstractRange`](AbstractRange.md)

## Properties

### collapsed

> `readonly` **collapsed**: `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:2807

The read-only **`collapsed`** property of the AbstractRange interface returns `true` if the range's start position and end position are the same.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/AbstractRange/collapsed)

#### Inherited from

[`AbstractRange`](AbstractRange.md).[`collapsed`](AbstractRange.md#collapsed)

***

### endContainer

> `readonly` **endContainer**: [`Node`](Node.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:2813

The read-only **`endContainer`** property of the AbstractRange interface returns the Node in which the end of the range is located.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/AbstractRange/endContainer)

#### Inherited from

[`AbstractRange`](AbstractRange.md).[`endContainer`](AbstractRange.md#endcontainer)

***

### endOffset

> `readonly` **endOffset**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:2819

The **`endOffset`** property of the AbstractRange interface returns the offset into the end node of the range's end position.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/AbstractRange/endOffset)

#### Inherited from

[`AbstractRange`](AbstractRange.md).[`endOffset`](AbstractRange.md#endoffset)

***

### startContainer

> `readonly` **startContainer**: [`Node`](Node.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:2825

The read-only **`startContainer`** property of the AbstractRange interface returns the start Node for the range.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/AbstractRange/startContainer)

#### Inherited from

[`AbstractRange`](AbstractRange.md).[`startContainer`](AbstractRange.md#startcontainer)

***

### startOffset

> `readonly` **startOffset**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:2831

The read-only **`startOffset`** property of the AbstractRange interface returns the offset into the start node of the range's start position.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/AbstractRange/startOffset)

#### Inherited from

[`AbstractRange`](AbstractRange.md).[`startOffset`](AbstractRange.md#startoffset)
