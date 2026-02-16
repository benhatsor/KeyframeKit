[**KeyframeKit.js**](../../README.md)

***

[KeyframeKit.js](../../globals.md) / [\<internal\>](../README.md) / DocumentFragment

# Interface: DocumentFragment

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10416

The **`DocumentFragment`** interface represents a minimal document object that has no parent.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/DocumentFragment)

## Extends

- [`Node`](Node.md).[`NonElementParentNode`](NonElementParentNode.md).[`ParentNode`](ParentNode.md)

## Extended by

- [`ShadowRoot`](ShadowRoot.md)

## Properties

### ATTRIBUTE\_NODE

> `readonly` **ATTRIBUTE\_NODE**: `2`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:21835

#### Inherited from

[`Node`](Node.md).[`ATTRIBUTE_NODE`](Node.md#attribute_node)

***

### baseURI

> `readonly` **baseURI**: `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:21664

The read-only **`baseURI`** property of the Node interface returns the absolute base URL of the document containing the node.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/baseURI)

#### Inherited from

[`Node`](Node.md).[`baseURI`](Node.md#baseuri)

***

### CDATA\_SECTION\_NODE

> `readonly` **CDATA\_SECTION\_NODE**: `4`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:21839

node is a CDATASection node.

#### Inherited from

[`Node`](Node.md).[`CDATA_SECTION_NODE`](Node.md#cdata_section_node)

***

### childElementCount

> `readonly` **childElementCount**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:22668

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/childElementCount)

#### Inherited from

[`ParentNode`](ParentNode.md).[`childElementCount`](ParentNode.md#childelementcount)

***

### childNodes

> `readonly` **childNodes**: `NodeListOf`\<[`ChildNode`](ChildNode.md)\>

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:21670

The read-only **`childNodes`** property of the Node interface returns a live the first child node is assigned index `0`.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/childNodes)

#### Inherited from

[`Node`](Node.md).[`childNodes`](Node.md#childnodes)

***

### children

> `readonly` **children**: [`HTMLCollection`](HTMLCollection.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:22674

Returns the child elements.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/children)

#### Inherited from

[`ParentNode`](ParentNode.md).[`children`](ParentNode.md#children)

***

### COMMENT\_NODE

> `readonly` **COMMENT\_NODE**: `8`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:21845

node is a Comment node.

#### Inherited from

[`Node`](Node.md).[`COMMENT_NODE`](Node.md#comment_node)

***

### DOCUMENT\_FRAGMENT\_NODE

> `readonly` **DOCUMENT\_FRAGMENT\_NODE**: `11`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:21851

node is a DocumentFragment node.

#### Inherited from

[`Node`](Node.md).[`DOCUMENT_FRAGMENT_NODE`](Node.md#document_fragment_node)

***

### DOCUMENT\_NODE

> `readonly` **DOCUMENT\_NODE**: `9`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:21847

node is a document.

#### Inherited from

[`Node`](Node.md).[`DOCUMENT_NODE`](Node.md#document_node)

***

### DOCUMENT\_POSITION\_CONTAINED\_BY

> `readonly` **DOCUMENT\_POSITION\_CONTAINED\_BY**: `16`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:21862

Set when other is a descendant of node.

#### Inherited from

[`Node`](Node.md).[`DOCUMENT_POSITION_CONTAINED_BY`](Node.md#document_position_contained_by)

***

### DOCUMENT\_POSITION\_CONTAINS

> `readonly` **DOCUMENT\_POSITION\_CONTAINS**: `8`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:21860

Set when other is an ancestor of node.

#### Inherited from

[`Node`](Node.md).[`DOCUMENT_POSITION_CONTAINS`](Node.md#document_position_contains)

***

### DOCUMENT\_POSITION\_DISCONNECTED

> `readonly` **DOCUMENT\_POSITION\_DISCONNECTED**: `1`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:21854

Set when node and other are not in the same tree.

#### Inherited from

[`Node`](Node.md).[`DOCUMENT_POSITION_DISCONNECTED`](Node.md#document_position_disconnected)

***

### DOCUMENT\_POSITION\_FOLLOWING

> `readonly` **DOCUMENT\_POSITION\_FOLLOWING**: `4`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:21858

Set when other is following node.

#### Inherited from

[`Node`](Node.md).[`DOCUMENT_POSITION_FOLLOWING`](Node.md#document_position_following)

***

### DOCUMENT\_POSITION\_IMPLEMENTATION\_SPECIFIC

> `readonly` **DOCUMENT\_POSITION\_IMPLEMENTATION\_SPECIFIC**: `32`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:21863

#### Inherited from

[`Node`](Node.md).[`DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC`](Node.md#document_position_implementation_specific)

***

### DOCUMENT\_POSITION\_PRECEDING

> `readonly` **DOCUMENT\_POSITION\_PRECEDING**: `2`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:21856

Set when other is preceding node.

#### Inherited from

[`Node`](Node.md).[`DOCUMENT_POSITION_PRECEDING`](Node.md#document_position_preceding)

***

### DOCUMENT\_TYPE\_NODE

> `readonly` **DOCUMENT\_TYPE\_NODE**: `10`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:21849

node is a doctype.

#### Inherited from

[`Node`](Node.md).[`DOCUMENT_TYPE_NODE`](Node.md#document_type_node)

***

### ELEMENT\_NODE

> `readonly` **ELEMENT\_NODE**: `1`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:21834

node is an element.

#### Inherited from

[`Node`](Node.md).[`ELEMENT_NODE`](Node.md#element_node)

***

### ENTITY\_NODE

> `readonly` **ENTITY\_NODE**: `6`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:21841

#### Inherited from

[`Node`](Node.md).[`ENTITY_NODE`](Node.md#entity_node)

***

### ENTITY\_REFERENCE\_NODE

> `readonly` **ENTITY\_REFERENCE\_NODE**: `5`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:21840

#### Inherited from

[`Node`](Node.md).[`ENTITY_REFERENCE_NODE`](Node.md#entity_reference_node)

***

### firstChild

> `readonly` **firstChild**: [`ChildNode`](ChildNode.md) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:21676

The read-only **`firstChild`** property of the Node interface returns the node's first child in the tree, or `null` if the node has no children.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/firstChild)

#### Inherited from

[`Node`](Node.md).[`firstChild`](Node.md#firstchild)

***

### firstElementChild

> `readonly` **firstElementChild**: [`Element`](Element.md) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:22680

Returns the first child that is an element, and null otherwise.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/firstElementChild)

#### Inherited from

[`ParentNode`](ParentNode.md).[`firstElementChild`](ParentNode.md#firstelementchild)

***

### isConnected

> `readonly` **isConnected**: `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:21682

The read-only **`isConnected`** property of the Node interface returns a boolean indicating whether the node is connected (directly or indirectly) to a Document object.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/isConnected)

#### Inherited from

[`Node`](Node.md).[`isConnected`](Node.md#isconnected)

***

### lastChild

> `readonly` **lastChild**: [`ChildNode`](ChildNode.md) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:21688

The read-only **`lastChild`** property of the Node interface returns the last child of the node, or `null` if there are no child nodes.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/lastChild)

#### Inherited from

[`Node`](Node.md).[`lastChild`](Node.md#lastchild)

***

### lastElementChild

> `readonly` **lastElementChild**: [`Element`](Element.md) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:22686

Returns the last child that is an element, and null otherwise.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/lastElementChild)

#### Inherited from

[`ParentNode`](ParentNode.md).[`lastElementChild`](ParentNode.md#lastelementchild)

***

### nextSibling

> `readonly` **nextSibling**: [`ChildNode`](ChildNode.md) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:21694

The read-only **`nextSibling`** property of the Node interface returns the node immediately following the specified one in their parent's Node.childNodes, or returns `null` if the specified node is the last child in the parent element.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/nextSibling)

#### Inherited from

[`Node`](Node.md).[`nextSibling`](Node.md#nextsibling)

***

### nodeName

> `readonly` **nodeName**: `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:21700

The read-only **`nodeName`** property of Node returns the name of the current node as a string.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/nodeName)

#### Inherited from

[`Node`](Node.md).[`nodeName`](Node.md#nodename)

***

### nodeType

> `readonly` **nodeType**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:21706

The read-only **`nodeType`** property of a Node interface is an integer that identifies what the node is.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/nodeType)

#### Inherited from

[`Node`](Node.md).[`nodeType`](Node.md#nodetype)

***

### nodeValue

> **nodeValue**: `string` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:21712

The **`nodeValue`** property of the Node interface returns or sets the value of the current node.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/nodeValue)

#### Inherited from

[`Node`](Node.md).[`nodeValue`](Node.md#nodevalue)

***

### NOTATION\_NODE

> `readonly` **NOTATION\_NODE**: `12`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:21852

#### Inherited from

[`Node`](Node.md).[`NOTATION_NODE`](Node.md#notation_node)

***

### ownerDocument

> `readonly` **ownerDocument**: [`Document`](Document.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10417

The read-only **`ownerDocument`** property of the Node interface returns the top-level document object of the node.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/ownerDocument)

#### Overrides

[`Node`](Node.md).[`ownerDocument`](Node.md#ownerdocument)

***

### parentElement

> `readonly` **parentElement**: [`HTMLElement`](HTMLElement.md) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:21724

The read-only **`parentElement`** property of Node interface returns the DOM node's parent Element, or `null` if the node either has no parent, or its parent isn't a DOM Element.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/parentElement)

#### Inherited from

[`Node`](Node.md).[`parentElement`](Node.md#parentelement)

***

### parentNode

> `readonly` **parentNode**: [`ParentNode`](ParentNode.md) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:21730

The read-only **`parentNode`** property of the Node interface returns the parent of the specified node in the DOM tree.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/parentNode)

#### Inherited from

[`Node`](Node.md).[`parentNode`](Node.md#parentnode)

***

### previousSibling

> `readonly` **previousSibling**: [`ChildNode`](ChildNode.md) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:21736

The read-only **`previousSibling`** property of the Node interface returns the node immediately preceding the specified one in its parent's or `null` if the specified node is the first in that list.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/previousSibling)

#### Inherited from

[`Node`](Node.md).[`previousSibling`](Node.md#previoussibling)

***

### PROCESSING\_INSTRUCTION\_NODE

> `readonly` **PROCESSING\_INSTRUCTION\_NODE**: `7`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:21843

node is a ProcessingInstruction node.

#### Inherited from

[`Node`](Node.md).[`PROCESSING_INSTRUCTION_NODE`](Node.md#processing_instruction_node)

***

### TEXT\_NODE

> `readonly` **TEXT\_NODE**: `3`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:21837

node is a Text node.

#### Inherited from

[`Node`](Node.md).[`TEXT_NODE`](Node.md#text_node)

## Accessors

### textContent

#### Get Signature

> **get** **textContent**(): `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10420

[MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent)

##### Returns

`string`

#### Set Signature

> **set** **textContent**(`value`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10421

The **`textContent`** property of the Node interface represents the text content of the node and its descendants.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/textContent)

##### Parameters

###### value

`string` | `null`

##### Returns

`void`

The **`textContent`** property of the Node interface represents the text content of the node and its descendants.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/textContent)

#### Overrides

[`Node`](Node.md).[`textContent`](Node.md#textcontent)

## Methods

### addEventListener()

> **addEventListener**(`type`, `callback`, `options?`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11569

The **`addEventListener()`** method of the EventTarget interface sets up a function that will be called whenever the specified event is delivered to the target.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener)

#### Parameters

##### type

`string`

##### callback

[`EventListenerOrEventListenerObject`](../type-aliases/EventListenerOrEventListenerObject.md) | `null`

##### options?

`boolean` | [`AddEventListenerOptions`](AddEventListenerOptions.md)

#### Returns

`void`

#### Inherited from

[`Node`](Node.md).[`addEventListener`](Node.md#addeventlistener)

***

### append()

> **append**(...`nodes`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:22694

Inserts nodes after the last child of node, while replacing strings in nodes with equivalent Text nodes.

Throws a "HierarchyRequestError" DOMException if the constraints of the node tree are violated.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/append)

#### Parameters

##### nodes

...(`string` \| [`Node`](Node.md))[]

#### Returns

`void`

#### Inherited from

[`ParentNode`](ParentNode.md).[`append`](ParentNode.md#append)

***

### appendChild()

> **appendChild**\<`T`\>(`node`): `T`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:21748

The **`appendChild()`** method of the Node interface adds a node to the end of the list of children of a specified parent node.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/appendChild)

#### Type Parameters

##### T

`T` *extends* [`Node`](Node.md)

#### Parameters

##### node

`T`

#### Returns

`T`

#### Inherited from

[`Node`](Node.md).[`appendChild`](Node.md#appendchild)

***

### cloneNode()

> **cloneNode**(`subtree?`): [`Node`](Node.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:21754

The **`cloneNode()`** method of the Node interface returns a duplicate of the node on which this method was called.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/cloneNode)

#### Parameters

##### subtree?

`boolean`

#### Returns

[`Node`](Node.md)

#### Inherited from

[`Node`](Node.md).[`cloneNode`](Node.md#clonenode)

***

### compareDocumentPosition()

> **compareDocumentPosition**(`other`): `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:21760

The **`compareDocumentPosition()`** method of the Node interface reports the position of its argument node relative to the node on which it is called.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/compareDocumentPosition)

#### Parameters

##### other

[`Node`](Node.md)

#### Returns

`number`

#### Inherited from

[`Node`](Node.md).[`compareDocumentPosition`](Node.md#comparedocumentposition)

***

### contains()

> **contains**(`other`): `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:21766

The **`contains()`** method of the Node interface returns a boolean value indicating whether a node is a descendant of a given node, that is the node itself, one of its direct children (Node.childNodes), one of the children's direct children, and so on.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/contains)

#### Parameters

##### other

[`Node`](Node.md) | `null`

#### Returns

`boolean`

#### Inherited from

[`Node`](Node.md).[`contains`](Node.md#contains)

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

[`Node`](Node.md).[`dispatchEvent`](Node.md#dispatchevent)

***

### getElementById()

> **getElementById**(`elementId`): [`HTMLElement`](HTMLElement.md) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10418

Returns the first element within node's descendants whose ID is elementId.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/getElementById)

#### Parameters

##### elementId

`string`

#### Returns

[`HTMLElement`](HTMLElement.md) \| `null`

#### Overrides

[`NonElementParentNode`](NonElementParentNode.md).[`getElementById`](NonElementParentNode.md#getelementbyid)

***

### getRootNode()

> **getRootNode**(`options?`): [`Node`](Node.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:21772

The **`getRootNode()`** method of the Node interface returns the context object's root, which optionally includes the shadow root if it is available.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/getRootNode)

#### Parameters

##### options?

[`GetRootNodeOptions`](GetRootNodeOptions.md)

#### Returns

[`Node`](Node.md)

#### Inherited from

[`Node`](Node.md).[`getRootNode`](Node.md#getrootnode)

***

### hasChildNodes()

> **hasChildNodes**(): `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:21778

The **`hasChildNodes()`** method of the Node interface returns a boolean value indicating whether the given Node has child nodes or not.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/hasChildNodes)

#### Returns

`boolean`

#### Inherited from

[`Node`](Node.md).[`hasChildNodes`](Node.md#haschildnodes)

***

### insertBefore()

> **insertBefore**\<`T`\>(`node`, `child`): `T`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:21784

The **`insertBefore()`** method of the Node interface inserts a node before a _reference node_ as a child of a specified _parent node_.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/insertBefore)

#### Type Parameters

##### T

`T` *extends* [`Node`](Node.md)

#### Parameters

##### node

`T`

##### child

[`Node`](Node.md) | `null`

#### Returns

`T`

#### Inherited from

[`Node`](Node.md).[`insertBefore`](Node.md#insertbefore)

***

### isDefaultNamespace()

> **isDefaultNamespace**(`namespace`): `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:21790

The **`isDefaultNamespace()`** method of the Node interface accepts a namespace URI as an argument.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/isDefaultNamespace)

#### Parameters

##### namespace

`string` | `null`

#### Returns

`boolean`

#### Inherited from

[`Node`](Node.md).[`isDefaultNamespace`](Node.md#isdefaultnamespace)

***

### isEqualNode()

> **isEqualNode**(`otherNode`): `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:21796

The **`isEqualNode()`** method of the Node interface tests whether two nodes are equal.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/isEqualNode)

#### Parameters

##### otherNode

[`Node`](Node.md) | `null`

#### Returns

`boolean`

#### Inherited from

[`Node`](Node.md).[`isEqualNode`](Node.md#isequalnode)

***

### isSameNode()

> **isSameNode**(`otherNode`): `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:21802

The **`isSameNode()`** method of the Node interface is a legacy alias the for the `===` strict equality operator.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/isSameNode)

#### Parameters

##### otherNode

[`Node`](Node.md) | `null`

#### Returns

`boolean`

#### Inherited from

[`Node`](Node.md).[`isSameNode`](Node.md#issamenode)

***

### lookupNamespaceURI()

> **lookupNamespaceURI**(`prefix`): `string` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:21808

The **`lookupNamespaceURI()`** method of the Node interface takes a prefix as parameter and returns the namespace URI associated with it on the given node if found (and `null` if not).

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/lookupNamespaceURI)

#### Parameters

##### prefix

`string` | `null`

#### Returns

`string` \| `null`

#### Inherited from

[`Node`](Node.md).[`lookupNamespaceURI`](Node.md#lookupnamespaceuri)

***

### lookupPrefix()

> **lookupPrefix**(`namespace`): `string` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:21814

The **`lookupPrefix()`** method of the Node interface returns a string containing the prefix for a given namespace URI, if present, and `null` if not.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/lookupPrefix)

#### Parameters

##### namespace

`string` | `null`

#### Returns

`string` \| `null`

#### Inherited from

[`Node`](Node.md).[`lookupPrefix`](Node.md#lookupprefix)

***

### normalize()

> **normalize**(): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:21820

The **`normalize()`** method of the Node interface puts the specified node and all of its sub-tree into a _normalized_ form.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/normalize)

#### Returns

`void`

#### Inherited from

[`Node`](Node.md).[`normalize`](Node.md#normalize)

***

### prepend()

> **prepend**(...`nodes`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:22702

Inserts nodes before the first child of node, while replacing strings in nodes with equivalent Text nodes.

Throws a "HierarchyRequestError" DOMException if the constraints of the node tree are violated.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/prepend)

#### Parameters

##### nodes

...(`string` \| [`Node`](Node.md))[]

#### Returns

`void`

#### Inherited from

[`ParentNode`](ParentNode.md).[`prepend`](ParentNode.md#prepend)

***

### querySelector()

#### Call Signature

> **querySelector**\<`K`\>(`selectors`): [`HTMLElementTagNameMap`](HTMLElementTagNameMap.md)\[`K`\] \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:22708

Returns the first element that is a descendant of node that matches selectors.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/querySelector)

##### Type Parameters

###### K

`K` *extends* keyof [`HTMLElementTagNameMap`](HTMLElementTagNameMap.md)

##### Parameters

###### selectors

`K`

##### Returns

[`HTMLElementTagNameMap`](HTMLElementTagNameMap.md)\[`K`\] \| `null`

##### Inherited from

[`ParentNode`](ParentNode.md).[`querySelector`](ParentNode.md#queryselector)

#### Call Signature

> **querySelector**\<`K`\>(`selectors`): [`SVGElementTagNameMap`](SVGElementTagNameMap.md)\[`K`\] \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:22709

##### Type Parameters

###### K

`K` *extends* keyof [`SVGElementTagNameMap`](SVGElementTagNameMap.md)

##### Parameters

###### selectors

`K`

##### Returns

[`SVGElementTagNameMap`](SVGElementTagNameMap.md)\[`K`\] \| `null`

##### Inherited from

[`ParentNode`](ParentNode.md).[`querySelector`](ParentNode.md#queryselector)

#### Call Signature

> **querySelector**\<`K`\>(`selectors`): [`MathMLElementTagNameMap`](MathMLElementTagNameMap.md)\[`K`\] \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:22710

##### Type Parameters

###### K

`K` *extends* keyof [`MathMLElementTagNameMap`](MathMLElementTagNameMap.md)

##### Parameters

###### selectors

`K`

##### Returns

[`MathMLElementTagNameMap`](MathMLElementTagNameMap.md)\[`K`\] \| `null`

##### Inherited from

[`ParentNode`](ParentNode.md).[`querySelector`](ParentNode.md#queryselector)

#### Call Signature

> **querySelector**\<`K`\>(`selectors`): [`HTMLElementDeprecatedTagNameMap`](HTMLElementDeprecatedTagNameMap.md)\[`K`\] \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:22712

##### Type Parameters

###### K

`K` *extends* keyof [`HTMLElementDeprecatedTagNameMap`](HTMLElementDeprecatedTagNameMap.md)

##### Parameters

###### selectors

`K`

##### Returns

[`HTMLElementDeprecatedTagNameMap`](HTMLElementDeprecatedTagNameMap.md)\[`K`\] \| `null`

##### Deprecated

##### Inherited from

[`ParentNode`](ParentNode.md).[`querySelector`](ParentNode.md#queryselector)

#### Call Signature

> **querySelector**\<`E`\>(`selectors`): `E` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:22713

##### Type Parameters

###### E

`E` *extends* [`Element`](Element.md) = [`Element`](Element.md)

##### Parameters

###### selectors

`string`

##### Returns

`E` \| `null`

##### Inherited from

[`ParentNode`](ParentNode.md).[`querySelector`](ParentNode.md#queryselector)

***

### querySelectorAll()

#### Call Signature

> **querySelectorAll**\<`K`\>(`selectors`): `NodeListOf`\<[`HTMLElementTagNameMap`](HTMLElementTagNameMap.md)\[`K`\]\>

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:22719

Returns all element descendants of node that match selectors.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/querySelectorAll)

##### Type Parameters

###### K

`K` *extends* keyof [`HTMLElementTagNameMap`](HTMLElementTagNameMap.md)

##### Parameters

###### selectors

`K`

##### Returns

`NodeListOf`\<[`HTMLElementTagNameMap`](HTMLElementTagNameMap.md)\[`K`\]\>

##### Inherited from

[`ParentNode`](ParentNode.md).[`querySelectorAll`](ParentNode.md#queryselectorall)

#### Call Signature

> **querySelectorAll**\<`K`\>(`selectors`): `NodeListOf`\<[`SVGElementTagNameMap`](SVGElementTagNameMap.md)\[`K`\]\>

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:22720

##### Type Parameters

###### K

`K` *extends* keyof [`SVGElementTagNameMap`](SVGElementTagNameMap.md)

##### Parameters

###### selectors

`K`

##### Returns

`NodeListOf`\<[`SVGElementTagNameMap`](SVGElementTagNameMap.md)\[`K`\]\>

##### Inherited from

[`ParentNode`](ParentNode.md).[`querySelectorAll`](ParentNode.md#queryselectorall)

#### Call Signature

> **querySelectorAll**\<`K`\>(`selectors`): `NodeListOf`\<[`MathMLElementTagNameMap`](MathMLElementTagNameMap.md)\[`K`\]\>

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:22721

##### Type Parameters

###### K

`K` *extends* keyof [`MathMLElementTagNameMap`](MathMLElementTagNameMap.md)

##### Parameters

###### selectors

`K`

##### Returns

`NodeListOf`\<[`MathMLElementTagNameMap`](MathMLElementTagNameMap.md)\[`K`\]\>

##### Inherited from

[`ParentNode`](ParentNode.md).[`querySelectorAll`](ParentNode.md#queryselectorall)

#### Call Signature

> **querySelectorAll**\<`K`\>(`selectors`): `NodeListOf`\<[`HTMLElementDeprecatedTagNameMap`](HTMLElementDeprecatedTagNameMap.md)\[`K`\]\>

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:22723

##### Type Parameters

###### K

`K` *extends* keyof [`HTMLElementDeprecatedTagNameMap`](HTMLElementDeprecatedTagNameMap.md)

##### Parameters

###### selectors

`K`

##### Returns

`NodeListOf`\<[`HTMLElementDeprecatedTagNameMap`](HTMLElementDeprecatedTagNameMap.md)\[`K`\]\>

##### Deprecated

##### Inherited from

[`ParentNode`](ParentNode.md).[`querySelectorAll`](ParentNode.md#queryselectorall)

#### Call Signature

> **querySelectorAll**\<`E`\>(`selectors`): `NodeListOf`\<`E`\>

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:22724

##### Type Parameters

###### E

`E` *extends* [`Element`](Element.md) = [`Element`](Element.md)

##### Parameters

###### selectors

`string`

##### Returns

`NodeListOf`\<`E`\>

##### Inherited from

[`ParentNode`](ParentNode.md).[`querySelectorAll`](ParentNode.md#queryselectorall)

***

### removeChild()

> **removeChild**\<`T`\>(`child`): `T`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:21826

The **`removeChild()`** method of the Node interface removes a child node from the DOM and returns the removed node.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/removeChild)

#### Type Parameters

##### T

`T` *extends* [`Node`](Node.md)

#### Parameters

##### child

`T`

#### Returns

`T`

#### Inherited from

[`Node`](Node.md).[`removeChild`](Node.md#removechild)

***

### removeEventListener()

> **removeEventListener**(`type`, `callback`, `options?`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11581

The **`removeEventListener()`** method of the EventTarget interface removes an event listener previously registered with EventTarget.addEventListener() from the target.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/removeEventListener)

#### Parameters

##### type

`string`

##### callback

[`EventListenerOrEventListenerObject`](../type-aliases/EventListenerOrEventListenerObject.md) | `null`

##### options?

`boolean` | [`EventListenerOptions`](EventListenerOptions.md)

#### Returns

`void`

#### Inherited from

[`Node`](Node.md).[`removeEventListener`](Node.md#removeeventlistener)

***

### replaceChild()

> **replaceChild**\<`T`\>(`node`, `child`): `T`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:21832

The **`replaceChild()`** method of the Node interface replaces a child node within the given (parent) node.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/replaceChild)

#### Type Parameters

##### T

`T` *extends* [`Node`](Node.md)

#### Parameters

##### node

[`Node`](Node.md)

##### child

`T`

#### Returns

`T`

#### Inherited from

[`Node`](Node.md).[`replaceChild`](Node.md#replacechild)

***

### replaceChildren()

> **replaceChildren**(...`nodes`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:22732

Replace all children of node with nodes, while replacing strings in nodes with equivalent Text nodes.

Throws a "HierarchyRequestError" DOMException if the constraints of the node tree are violated.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/replaceChildren)

#### Parameters

##### nodes

...(`string` \| [`Node`](Node.md))[]

#### Returns

`void`

#### Inherited from

[`ParentNode`](ParentNode.md).[`replaceChildren`](ParentNode.md#replacechildren)
