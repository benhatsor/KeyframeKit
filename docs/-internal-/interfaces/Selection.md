[**KeyframeKit.js**](../../README.md)

***

[KeyframeKit.js](../../globals.md) / [\<internal\>](../README.md) / Selection

# Interface: Selection

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:30367

A **`Selection`** object represents the range of text selected by the user or the current position of the caret.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Selection)

## Properties

### anchorNode

> `readonly` **anchorNode**: [`Node`](Node.md) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:30373

The **`Selection.anchorNode`** read-only property returns the Node in which the selection begins.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Selection/anchorNode)

***

### anchorOffset

> `readonly` **anchorOffset**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:30379

The **`Selection.anchorOffset`** read-only property returns the number of characters that the selection's anchor is offset within the In the case of Selection.anchorNode being another type of node, **`Selection.anchorOffset`** returns the number of Node.childNodes the selection's anchor is offset within the Selection.anchorNode.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Selection/anchorOffset)

***

### direction

> `readonly` **direction**: `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:30385

The **`direction`** read-only property of the Selection interface is a string that provides the direction of the current selection.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Selection/direction)

***

### focusNode

> `readonly` **focusNode**: [`Node`](Node.md) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:30391

The **`Selection.focusNode`** read-only property returns the Node in which the selection ends.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Selection/focusNode)

***

### focusOffset

> `readonly` **focusOffset**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:30397

The **`Selection.focusOffset`** read-only property returns the number of characters that the selection's focus is offset within the In the case of Selection.focusNode being another type of node, **`Selection.focusOffset`** returns the number of Node.childNodes the selection's focus is offset within the Selection.focusNode.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Selection/focusOffset)

***

### isCollapsed

> `readonly` **isCollapsed**: `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:30403

The **`Selection.isCollapsed`** read-only property returns a boolean value which indicates whether or not there is currently any text selected.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Selection/isCollapsed)

***

### rangeCount

> `readonly` **rangeCount**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:30409

The **`Selection.rangeCount`** read-only property returns the number of ranges in the selection.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Selection/rangeCount)

***

### type

> `readonly` **type**: `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:30415

The **`type`** read-only property of the type of the current selection.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Selection/type)

## Methods

### addRange()

> **addRange**(`range`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:30421

The **`Selection.addRange()`** method adds a ```js-nolint addRange(range) ``` - `range` - : A Range object that will be added to the Selection.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Selection/addRange)

#### Parameters

##### range

[`Range`](Range.md)

#### Returns

`void`

***

### collapse()

> **collapse**(`node`, `offset?`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:30427

The **`Selection.collapse()`** method collapses the current selection to a single point.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Selection/collapse)

#### Parameters

##### node

[`Node`](Node.md) | `null`

##### offset?

`number`

#### Returns

`void`

***

### collapseToEnd()

> **collapseToEnd**(): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:30433

The **`Selection.collapseToEnd()`** method collapses the selection to the end of the last range in the selection.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Selection/collapseToEnd)

#### Returns

`void`

***

### collapseToStart()

> **collapseToStart**(): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:30439

The **`Selection.collapseToStart()`** method collapses the selection to the start of the first range in the selection.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Selection/collapseToStart)

#### Returns

`void`

***

### containsNode()

> **containsNode**(`node`, `allowPartialContainment?`): `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:30445

The **`Selection.containsNode()`** method indicates whether a specified node is part of the selection.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Selection/containsNode)

#### Parameters

##### node

[`Node`](Node.md)

##### allowPartialContainment?

`boolean`

#### Returns

`boolean`

***

### deleteFromDocument()

> **deleteFromDocument**(): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:30451

The **`deleteFromDocument()`** method of the ```js-nolint deleteFromDocument() ``` None.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Selection/deleteFromDocument)

#### Returns

`void`

***

### empty()

> **empty**(): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:30457

The **`Selection.empty()`** method removes all ranges from the selection, leaving the Selection.anchorNode and Selection.focusNode properties equal to `null` and nothing selected.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Selection/empty)

#### Returns

`void`

***

### extend()

> **extend**(`node`, `offset?`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:30463

The **`Selection.extend()`** method moves the focus of the selection to a specified point.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Selection/extend)

#### Parameters

##### node

[`Node`](Node.md)

##### offset?

`number`

#### Returns

`void`

***

### getComposedRanges()

> **getComposedRanges**(`options?`): [`StaticRange`](StaticRange.md)[]

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:30469

The **`Selection.getComposedRanges()`** method returns an array of StaticRange objects representing the current selection ranges, and can return ranges that potentially cross shadow boundaries.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Selection/getComposedRanges)

#### Parameters

##### options?

[`GetComposedRangesOptions`](GetComposedRangesOptions.md)

#### Returns

[`StaticRange`](StaticRange.md)[]

***

### getRangeAt()

> **getRangeAt**(`index`): [`Range`](Range.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:30475

The **`getRangeAt()`** method of the Selection interface returns a range object representing a currently selected range.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Selection/getRangeAt)

#### Parameters

##### index

`number`

#### Returns

[`Range`](Range.md)

***

### modify()

> **modify**(`alter?`, `direction?`, `granularity?`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:30481

The **`Selection.modify()`** method applies a change to the current selection or cursor position, using simple textual commands.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Selection/modify)

#### Parameters

##### alter?

`string`

##### direction?

`string`

##### granularity?

`string`

#### Returns

`void`

***

### removeAllRanges()

> **removeAllRanges**(): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:30487

The **`Selection.removeAllRanges()`** method removes all ranges from the selection, leaving the Selection.anchorNode and Selection.focusNode properties equal to `null` and nothing selected.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Selection/removeAllRanges)

#### Returns

`void`

***

### removeRange()

> **removeRange**(`range`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:30493

The **`Selection.removeRange()`** method removes a range from a selection.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Selection/removeRange)

#### Parameters

##### range

[`Range`](Range.md)

#### Returns

`void`

***

### selectAllChildren()

> **selectAllChildren**(`node`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:30499

The **`Selection.selectAllChildren()`** method adds all the children of the specified node to the selection.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Selection/selectAllChildren)

#### Parameters

##### node

[`Node`](Node.md)

#### Returns

`void`

***

### setBaseAndExtent()

> **setBaseAndExtent**(`anchorNode`, `anchorOffset`, `focusNode`, `focusOffset`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:30505

The **`setBaseAndExtent()`** method of the Selection interface sets the selection to be a range including all or parts of two specified DOM nodes, and any content located between them.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Selection/setBaseAndExtent)

#### Parameters

##### anchorNode

[`Node`](Node.md)

##### anchorOffset

`number`

##### focusNode

[`Node`](Node.md)

##### focusOffset

`number`

#### Returns

`void`

***

### setPosition()

> **setPosition**(`node`, `offset?`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:30511

The **`Selection.setPosition()`** method collapses the current selection to a single point.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Selection/setPosition)

#### Parameters

##### node

[`Node`](Node.md) | `null`

##### offset?

`number`

#### Returns

`void`

***

### toString()

> **toString**(): `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:30512

#### Returns

`string`
