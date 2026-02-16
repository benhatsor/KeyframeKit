[**KeyframeKit.js**](../../README.md)

***

[KeyframeKit.js](../../globals.md) / [\<internal\>](../README.md) / NodeIterator

# Interface: NodeIterator

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:21907

The **`NodeIterator`** interface represents an iterator to traverse nodes of a DOM subtree in document order.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/NodeIterator)

## Properties

### filter

> `readonly` **filter**: [`NodeFilter`](../type-aliases/NodeFilter.md) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:21913

The **`NodeIterator.filter`** read-only property returns a `NodeFilter` object, that is an object which implements an `acceptNode(node)` method, used to screen nodes.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/NodeIterator/filter)

***

### pointerBeforeReferenceNode

> `readonly` **pointerBeforeReferenceNode**: `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:21919

The **`NodeIterator.pointerBeforeReferenceNode`** read-only property returns a boolean flag that indicates whether the `NodeFilter` is anchored before (if this value is `true`) or after (if this value is `false`) the anchor node indicated by the A boolean.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/NodeIterator/pointerBeforeReferenceNode)

***

### referenceNode

> `readonly` **referenceNode**: [`Node`](Node.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:21925

The **`NodeIterator.referenceNode`** read-only property returns the iterator remains anchored to the reference node as specified by this property.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/NodeIterator/referenceNode)

***

### root

> `readonly` **root**: [`Node`](Node.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:21931

The **`NodeIterator.root`** read-only property represents the traverses.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/NodeIterator/root)

***

### whatToShow

> `readonly` **whatToShow**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:21937

The **`NodeIterator.whatToShow`** read-only property represents an `unsigned integer` representing a bitmask signifying what types of nodes should be returned by the NodeIterator.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/NodeIterator/whatToShow)

## Methods

### ~~detach()~~

> **detach**(): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:21944

The **`NodeIterator.detach()`** method is a no-op, kept for backward compatibility only.

#### Returns

`void`

#### Deprecated

[MDN Reference](https://developer.mozilla.org/docs/Web/API/NodeIterator/detach)

***

### nextNode()

> **nextNode**(): [`Node`](Node.md) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:21950

The **`NodeIterator.nextNode()`** method returns the next node in the set represented by the NodeIterator and advances the position of the iterator within the set.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/NodeIterator/nextNode)

#### Returns

[`Node`](Node.md) \| `null`

***

### previousNode()

> **previousNode**(): [`Node`](Node.md) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:21956

The **`NodeIterator.previousNode()`** method returns the previous node in the set represented by the NodeIterator and moves the position of the iterator backwards within the set.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/NodeIterator/previousNode)

#### Returns

[`Node`](Node.md) \| `null`
