[**KeyframeKit.js**](../../README.md)

***

[KeyframeKit.js](../../globals.md) / [\<internal\>](../README.md) / TreeWalker

# Interface: TreeWalker

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:32522

The **`TreeWalker`** object represents the nodes of a document subtree and a position within them.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/TreeWalker)

## Properties

### currentNode

> **currentNode**: [`Node`](Node.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:32528

The **`TreeWalker.currentNode`** property represents the A Node.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/TreeWalker/currentNode)

***

### filter

> `readonly` **filter**: [`NodeFilter`](../type-aliases/NodeFilter.md) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:32534

The **`TreeWalker.filter`** read-only property returns the `NodeFilter` associated with the TreeWalker.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/TreeWalker/filter)

***

### root

> `readonly` **root**: [`Node`](Node.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:32540

The **`TreeWalker.root`** read-only property returns the root Node that the TreeWalker traverses.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/TreeWalker/root)

***

### whatToShow

> `readonly` **whatToShow**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:32546

The **`TreeWalker.whatToShow`** read-only property returns a bitmask that indicates the types of nodes to show.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/TreeWalker/whatToShow)

## Methods

### firstChild()

> **firstChild**(): [`Node`](Node.md) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:32552

The **`TreeWalker.firstChild()`** method moves the current the found child.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/TreeWalker/firstChild)

#### Returns

[`Node`](Node.md) \| `null`

***

### lastChild()

> **lastChild**(): [`Node`](Node.md) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:32558

The **`TreeWalker.lastChild()`** method moves the current the found child.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/TreeWalker/lastChild)

#### Returns

[`Node`](Node.md) \| `null`

***

### nextNode()

> **nextNode**(): [`Node`](Node.md) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:32564

The **`TreeWalker.nextNode()`** method moves the current the found node.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/TreeWalker/nextNode)

#### Returns

[`Node`](Node.md) \| `null`

***

### nextSibling()

> **nextSibling**(): [`Node`](Node.md) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:32570

The **`TreeWalker.nextSibling()`** method moves the current is no such node, it returns `null` and the current node is not changed.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/TreeWalker/nextSibling)

#### Returns

[`Node`](Node.md) \| `null`

***

### parentNode()

> **parentNode**(): [`Node`](Node.md) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:32576

The **`TreeWalker.parentNode()`** method moves the current and returns the found node.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/TreeWalker/parentNode)

#### Returns

[`Node`](Node.md) \| `null`

***

### previousNode()

> **previousNode**(): [`Node`](Node.md) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:32582

The **`TreeWalker.previousNode()`** method moves the current returns the found node.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/TreeWalker/previousNode)

#### Returns

[`Node`](Node.md) \| `null`

***

### previousSibling()

> **previousSibling**(): [`Node`](Node.md) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:32588

The **`TreeWalker.previousSibling()`** method moves the current there is no such node, it returns `null` and the current node is not changed.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/TreeWalker/previousSibling)

#### Returns

[`Node`](Node.md) \| `null`
