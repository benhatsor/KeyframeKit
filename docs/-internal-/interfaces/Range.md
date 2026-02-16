[**KeyframeKit.js**](../../README.md)

***

[KeyframeKit.js](../../globals.md) / [\<internal\>](../README.md) / Range

# Interface: Range

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:25598

The **`Range`** interface represents a fragment of a document that can contain nodes and parts of text nodes.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Range)

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

### commonAncestorContainer

> `readonly` **commonAncestorContainer**: [`Node`](Node.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:25604

The **`Range.commonAncestorContainer`** read-only property returns the deepest — or furthest down the document tree — Node that contains both boundary points of the Range.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Range/commonAncestorContainer)

***

### END\_TO\_END

> `readonly` **END\_TO\_END**: `2`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:25746

***

### END\_TO\_START

> `readonly` **END\_TO\_START**: `3`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:25747

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

### START\_TO\_END

> `readonly` **START\_TO\_END**: `1`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:25745

***

### START\_TO\_START

> `readonly` **START\_TO\_START**: `0`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:25744

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

## Methods

### cloneContents()

> **cloneContents**(): [`DocumentFragment`](DocumentFragment.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:25610

The **`cloneContents()`** method of the Range interface copies the selected Node children of the range's Range/commonAncestorContainer and puts them in a new DocumentFragment object.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Range/cloneContents)

#### Returns

[`DocumentFragment`](DocumentFragment.md)

***

### cloneRange()

> **cloneRange**(): `Range`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:25616

The **`Range.cloneRange()`** method returns a The returned clone is copied by value, not reference, so a change in either ```js-nolint cloneRange() ``` None.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Range/cloneRange)

#### Returns

`Range`

***

### collapse()

> **collapse**(`toStart?`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:25622

The **`collapse()`** method of the Range interface collapses the A collapsed Range is empty, containing no content, specifying a single-point in a DOM tree.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Range/collapse)

#### Parameters

##### toStart?

`boolean`

#### Returns

`void`

***

### compareBoundaryPoints()

> **compareBoundaryPoints**(`how`, `sourceRange`): `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:25628

The **`compareBoundaryPoints()`** method of the Range interface compares the boundary points of the Range with those of another range.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Range/compareBoundaryPoints)

#### Parameters

##### how

`number`

##### sourceRange

`Range`

#### Returns

`number`

***

### comparePoint()

> **comparePoint**(`node`, `offset`): `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:25634

The **`comparePoint()`** method of the Range interface determines whether a specified point is before, within, or after the Range.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Range/comparePoint)

#### Parameters

##### node

[`Node`](Node.md)

##### offset

`number`

#### Returns

`number`

***

### createContextualFragment()

> **createContextualFragment**(`string`): [`DocumentFragment`](DocumentFragment.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:25640

The **`Range.createContextualFragment()`** method returns a XML fragment parsing algorithm with the start of the range (the _parent_ of the selected node) as the context node.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Range/createContextualFragment)

#### Parameters

##### string

`string`

#### Returns

[`DocumentFragment`](DocumentFragment.md)

***

### deleteContents()

> **deleteContents**(): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:25646

The **`Range.deleteContents()`** method removes all completely-selected Node within this range from the document.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Range/deleteContents)

#### Returns

`void`

***

### detach()

> **detach**(): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:25652

The **`Range.detach()`** method does nothing.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Range/detach)

#### Returns

`void`

***

### extractContents()

> **extractContents**(): [`DocumentFragment`](DocumentFragment.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:25658

The **`extractContents()`** method of the Range interface is similar to a combination of Range.cloneContents() and Range.deleteContents().

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Range/extractContents)

#### Returns

[`DocumentFragment`](DocumentFragment.md)

***

### getBoundingClientRect()

> **getBoundingClientRect**(): [`DOMRect`](DOMRect.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:25664

The **`Range.getBoundingClientRect()`** method returns a DOMRect object that bounds the contents of the range; this is a rectangle enclosing the union of the bounding rectangles for all the elements in the range.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Range/getBoundingClientRect)

#### Returns

[`DOMRect`](DOMRect.md)

***

### getClientRects()

> **getClientRects**(): `DOMRectList`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:25670

The **`Range.getClientRects()`** method returns a list of DOMRect objects representing the area of the screen occupied by the range.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Range/getClientRects)

#### Returns

`DOMRectList`

***

### insertNode()

> **insertNode**(`node`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:25676

The **`Range.insertNode()`** method inserts a node at the start of the Range.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Range/insertNode)

#### Parameters

##### node

[`Node`](Node.md)

#### Returns

`void`

***

### intersectsNode()

> **intersectsNode**(`node`): `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:25682

The **`Range.intersectsNode()`** method returns a boolean indicating whether the given Node intersects the Range.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Range/intersectsNode)

#### Parameters

##### node

[`Node`](Node.md)

#### Returns

`boolean`

***

### isPointInRange()

> **isPointInRange**(`node`, `offset`): `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:25688

The **`isPointInRange()`** method of the Range interface determines whether a specified point is within the Range.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Range/isPointInRange)

#### Parameters

##### node

[`Node`](Node.md)

##### offset

`number`

#### Returns

`boolean`

***

### selectNode()

> **selectNode**(`node`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:25694

The **`Range.selectNode()`** method sets the the parent of the _referenceNode_.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Range/selectNode)

#### Parameters

##### node

[`Node`](Node.md)

#### Returns

`void`

***

### selectNodeContents()

> **selectNodeContents**(`node`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:25700

The **`Range.selectNodeContents()`** method sets the Range to contain the contents of a Node.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Range/selectNodeContents)

#### Parameters

##### node

[`Node`](Node.md)

#### Returns

`void`

***

### setEnd()

> **setEnd**(`node`, `offset`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:25706

The **`Range.setEnd()`** method sets the end position of a Range to be located at the given offset into the specified node.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Range/setEnd)

#### Parameters

##### node

[`Node`](Node.md)

##### offset

`number`

#### Returns

`void`

***

### setEndAfter()

> **setEndAfter**(`node`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:25712

The **`Range.setEndAfter()`** method sets the end position of a `Node` of end of the `Range` will be the same as that for the `referenceNode`.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Range/setEndAfter)

#### Parameters

##### node

[`Node`](Node.md)

#### Returns

`void`

***

### setEndBefore()

> **setEndBefore**(`node`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:25718

The **`Range.setEndBefore()`** method sets the end position of a `Range` relative to another Node.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Range/setEndBefore)

#### Parameters

##### node

[`Node`](Node.md)

#### Returns

`void`

***

### setStart()

> **setStart**(`node`, `offset`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:25724

The **`Range.setStart()`** method sets the start position of a If the `startNode` is a Node of type Text, the number of characters from the start of `startNode`.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Range/setStart)

#### Parameters

##### node

[`Node`](Node.md)

##### offset

`number`

#### Returns

`void`

***

### setStartAfter()

> **setStartAfter**(`node`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:25730

The **`Range.setStartAfter()`** method sets the start position of a Range relative to a Node.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Range/setStartAfter)

#### Parameters

##### node

[`Node`](Node.md)

#### Returns

`void`

***

### setStartBefore()

> **setStartBefore**(`node`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:25736

The **`Range.setStartBefore()`** method sets the start position of a Range relative to another Node.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Range/setStartBefore)

#### Parameters

##### node

[`Node`](Node.md)

#### Returns

`void`

***

### surroundContents()

> **surroundContents**(`newParent`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:25742

The **`surroundContents()`** method of the Range interface surrounds the selected content by a provided node.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Range/surroundContents)

#### Parameters

##### newParent

[`Node`](Node.md)

#### Returns

`void`

***

### toString()

> **toString**(): `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:25743

Returns a string representation of an object.

#### Returns

`string`
