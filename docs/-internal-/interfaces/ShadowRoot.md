[**KeyframeKit.js**](../../README.md)

***

[KeyframeKit.js](../../globals.md) / [\<internal\>](../README.md) / ShadowRoot

# Interface: ShadowRoot

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:30734

The **`ShadowRoot`** interface of the Shadow DOM API is the root node of a DOM subtree that is rendered separately from a document's main DOM tree.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/ShadowRoot)

## Extends

- [`DocumentFragment`](DocumentFragment.md).[`DocumentOrShadowRoot`](DocumentOrShadowRoot.md)

## Properties

### activeElement

> `readonly` **activeElement**: [`Element`](Element.md) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10439

Returns the deepest element in the document through which or to which key events are being routed. This is, roughly speaking, the focused element in the document.

For the purposes of this API, when a child browsing context is focused, its container is focused in the parent browsing context. For example, if the user moves the focus to a text control in an iframe, the iframe is the element returned by the activeElement API in the iframe's node document.

Similarly, when the focused element is in a different node tree than documentOrShadowRoot, the element returned will be the host that's located in the same node tree as documentOrShadowRoot if documentOrShadowRoot is a shadow-including inclusive ancestor of the focused element, and null if not.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/activeElement)

#### Inherited from

[`DocumentOrShadowRoot`](DocumentOrShadowRoot.md).[`activeElement`](DocumentOrShadowRoot.md#activeelement)

***

### adoptedStyleSheets

> **adoptedStyleSheets**: [`CSSStyleSheet`](CSSStyleSheet.md)[]

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10441

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/adoptedStyleSheets)

#### Inherited from

[`DocumentOrShadowRoot`](DocumentOrShadowRoot.md).[`adoptedStyleSheets`](DocumentOrShadowRoot.md#adoptedstylesheets)

***

### ATTRIBUTE\_NODE

> `readonly` **ATTRIBUTE\_NODE**: `2`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:21835

#### Inherited from

[`DocumentFragment`](DocumentFragment.md).[`ATTRIBUTE_NODE`](DocumentFragment.md#attribute_node)

***

### baseURI

> `readonly` **baseURI**: `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:21664

The read-only **`baseURI`** property of the Node interface returns the absolute base URL of the document containing the node.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/baseURI)

#### Inherited from

[`DocumentFragment`](DocumentFragment.md).[`baseURI`](DocumentFragment.md#baseuri)

***

### CDATA\_SECTION\_NODE

> `readonly` **CDATA\_SECTION\_NODE**: `4`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:21839

node is a CDATASection node.

#### Inherited from

[`DocumentFragment`](DocumentFragment.md).[`CDATA_SECTION_NODE`](DocumentFragment.md#cdata_section_node)

***

### childElementCount

> `readonly` **childElementCount**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:22668

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/childElementCount)

#### Inherited from

[`DocumentFragment`](DocumentFragment.md).[`childElementCount`](DocumentFragment.md#childelementcount)

***

### childNodes

> `readonly` **childNodes**: `NodeListOf`\<[`ChildNode`](ChildNode.md)\>

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:21670

The read-only **`childNodes`** property of the Node interface returns a live the first child node is assigned index `0`.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/childNodes)

#### Inherited from

[`DocumentFragment`](DocumentFragment.md).[`childNodes`](DocumentFragment.md#childnodes)

***

### children

> `readonly` **children**: [`HTMLCollection`](HTMLCollection.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:22674

Returns the child elements.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/children)

#### Inherited from

[`DocumentFragment`](DocumentFragment.md).[`children`](DocumentFragment.md#children)

***

### clonable

> `readonly` **clonable**: `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:30740

The **`clonable`** read-only property of the ShadowRoot interface returns `true` if the shadow root is clonable, and `false` otherwise.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/ShadowRoot/clonable)

***

### COMMENT\_NODE

> `readonly` **COMMENT\_NODE**: `8`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:21845

node is a Comment node.

#### Inherited from

[`DocumentFragment`](DocumentFragment.md).[`COMMENT_NODE`](DocumentFragment.md#comment_node)

***

### delegatesFocus

> `readonly` **delegatesFocus**: `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:30746

The **`delegatesFocus`** read-only property of the ShadowRoot interface returns `true` if the shadow root delegates focus, and `false` otherwise.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/ShadowRoot/delegatesFocus)

***

### DOCUMENT\_FRAGMENT\_NODE

> `readonly` **DOCUMENT\_FRAGMENT\_NODE**: `11`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:21851

node is a DocumentFragment node.

#### Inherited from

[`DocumentFragment`](DocumentFragment.md).[`DOCUMENT_FRAGMENT_NODE`](DocumentFragment.md#document_fragment_node)

***

### DOCUMENT\_NODE

> `readonly` **DOCUMENT\_NODE**: `9`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:21847

node is a document.

#### Inherited from

[`DocumentFragment`](DocumentFragment.md).[`DOCUMENT_NODE`](DocumentFragment.md#document_node)

***

### DOCUMENT\_POSITION\_CONTAINED\_BY

> `readonly` **DOCUMENT\_POSITION\_CONTAINED\_BY**: `16`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:21862

Set when other is a descendant of node.

#### Inherited from

[`DocumentFragment`](DocumentFragment.md).[`DOCUMENT_POSITION_CONTAINED_BY`](DocumentFragment.md#document_position_contained_by)

***

### DOCUMENT\_POSITION\_CONTAINS

> `readonly` **DOCUMENT\_POSITION\_CONTAINS**: `8`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:21860

Set when other is an ancestor of node.

#### Inherited from

[`DocumentFragment`](DocumentFragment.md).[`DOCUMENT_POSITION_CONTAINS`](DocumentFragment.md#document_position_contains)

***

### DOCUMENT\_POSITION\_DISCONNECTED

> `readonly` **DOCUMENT\_POSITION\_DISCONNECTED**: `1`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:21854

Set when node and other are not in the same tree.

#### Inherited from

[`DocumentFragment`](DocumentFragment.md).[`DOCUMENT_POSITION_DISCONNECTED`](DocumentFragment.md#document_position_disconnected)

***

### DOCUMENT\_POSITION\_FOLLOWING

> `readonly` **DOCUMENT\_POSITION\_FOLLOWING**: `4`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:21858

Set when other is following node.

#### Inherited from

[`DocumentFragment`](DocumentFragment.md).[`DOCUMENT_POSITION_FOLLOWING`](DocumentFragment.md#document_position_following)

***

### DOCUMENT\_POSITION\_IMPLEMENTATION\_SPECIFIC

> `readonly` **DOCUMENT\_POSITION\_IMPLEMENTATION\_SPECIFIC**: `32`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:21863

#### Inherited from

[`DocumentFragment`](DocumentFragment.md).[`DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC`](DocumentFragment.md#document_position_implementation_specific)

***

### DOCUMENT\_POSITION\_PRECEDING

> `readonly` **DOCUMENT\_POSITION\_PRECEDING**: `2`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:21856

Set when other is preceding node.

#### Inherited from

[`DocumentFragment`](DocumentFragment.md).[`DOCUMENT_POSITION_PRECEDING`](DocumentFragment.md#document_position_preceding)

***

### DOCUMENT\_TYPE\_NODE

> `readonly` **DOCUMENT\_TYPE\_NODE**: `10`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:21849

node is a doctype.

#### Inherited from

[`DocumentFragment`](DocumentFragment.md).[`DOCUMENT_TYPE_NODE`](DocumentFragment.md#document_type_node)

***

### ELEMENT\_NODE

> `readonly` **ELEMENT\_NODE**: `1`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:21834

node is an element.

#### Inherited from

[`DocumentFragment`](DocumentFragment.md).[`ELEMENT_NODE`](DocumentFragment.md#element_node)

***

### ENTITY\_NODE

> `readonly` **ENTITY\_NODE**: `6`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:21841

#### Inherited from

[`DocumentFragment`](DocumentFragment.md).[`ENTITY_NODE`](DocumentFragment.md#entity_node)

***

### ENTITY\_REFERENCE\_NODE

> `readonly` **ENTITY\_REFERENCE\_NODE**: `5`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:21840

#### Inherited from

[`DocumentFragment`](DocumentFragment.md).[`ENTITY_REFERENCE_NODE`](DocumentFragment.md#entity_reference_node)

***

### firstChild

> `readonly` **firstChild**: [`ChildNode`](ChildNode.md) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:21676

The read-only **`firstChild`** property of the Node interface returns the node's first child in the tree, or `null` if the node has no children.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/firstChild)

#### Inherited from

[`DocumentFragment`](DocumentFragment.md).[`firstChild`](DocumentFragment.md#firstchild)

***

### firstElementChild

> `readonly` **firstElementChild**: [`Element`](Element.md) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:22680

Returns the first child that is an element, and null otherwise.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/firstElementChild)

#### Inherited from

[`DocumentFragment`](DocumentFragment.md).[`firstElementChild`](DocumentFragment.md#firstelementchild)

***

### fullscreenElement

> `readonly` **fullscreenElement**: [`Element`](Element.md) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10447

Returns document's fullscreen element.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/fullscreenElement)

#### Inherited from

[`DocumentOrShadowRoot`](DocumentOrShadowRoot.md).[`fullscreenElement`](DocumentOrShadowRoot.md#fullscreenelement)

***

### host

> `readonly` **host**: [`Element`](Element.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:30752

The **`host`** read-only property of the ShadowRoot returns a reference to the DOM element the `ShadowRoot` is attached to.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/ShadowRoot/host)

***

### innerHTML

> **innerHTML**: `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:30758

The **`innerHTML`** property of the ShadowRoot interface sets gets or sets the HTML markup to the DOM tree inside the `ShadowRoot`.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/ShadowRoot/innerHTML)

***

### isConnected

> `readonly` **isConnected**: `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:21682

The read-only **`isConnected`** property of the Node interface returns a boolean indicating whether the node is connected (directly or indirectly) to a Document object.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/isConnected)

#### Inherited from

[`DocumentFragment`](DocumentFragment.md).[`isConnected`](DocumentFragment.md#isconnected)

***

### lastChild

> `readonly` **lastChild**: [`ChildNode`](ChildNode.md) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:21688

The read-only **`lastChild`** property of the Node interface returns the last child of the node, or `null` if there are no child nodes.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/lastChild)

#### Inherited from

[`DocumentFragment`](DocumentFragment.md).[`lastChild`](DocumentFragment.md#lastchild)

***

### lastElementChild

> `readonly` **lastElementChild**: [`Element`](Element.md) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:22686

Returns the last child that is an element, and null otherwise.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/lastElementChild)

#### Inherited from

[`DocumentFragment`](DocumentFragment.md).[`lastElementChild`](DocumentFragment.md#lastelementchild)

***

### mode

> `readonly` **mode**: [`ShadowRootMode`](../type-aliases/ShadowRootMode.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:30764

The **`mode`** read-only property of the ShadowRoot specifies its mode — either `open` or `closed`.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/ShadowRoot/mode)

***

### nextSibling

> `readonly` **nextSibling**: [`ChildNode`](ChildNode.md) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:21694

The read-only **`nextSibling`** property of the Node interface returns the node immediately following the specified one in their parent's Node.childNodes, or returns `null` if the specified node is the last child in the parent element.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/nextSibling)

#### Inherited from

[`DocumentFragment`](DocumentFragment.md).[`nextSibling`](DocumentFragment.md#nextsibling)

***

### nodeName

> `readonly` **nodeName**: `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:21700

The read-only **`nodeName`** property of Node returns the name of the current node as a string.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/nodeName)

#### Inherited from

[`DocumentFragment`](DocumentFragment.md).[`nodeName`](DocumentFragment.md#nodename)

***

### nodeType

> `readonly` **nodeType**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:21706

The read-only **`nodeType`** property of a Node interface is an integer that identifies what the node is.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/nodeType)

#### Inherited from

[`DocumentFragment`](DocumentFragment.md).[`nodeType`](DocumentFragment.md#nodetype)

***

### nodeValue

> **nodeValue**: `string` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:21712

The **`nodeValue`** property of the Node interface returns or sets the value of the current node.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/nodeValue)

#### Inherited from

[`DocumentFragment`](DocumentFragment.md).[`nodeValue`](DocumentFragment.md#nodevalue)

***

### NOTATION\_NODE

> `readonly` **NOTATION\_NODE**: `12`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:21852

#### Inherited from

[`DocumentFragment`](DocumentFragment.md).[`NOTATION_NODE`](DocumentFragment.md#notation_node)

***

### onslotchange

> **onslotchange**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:30765

***

### ownerDocument

> `readonly` **ownerDocument**: [`Document`](Document.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10417

The read-only **`ownerDocument`** property of the Node interface returns the top-level document object of the node.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/ownerDocument)

#### Inherited from

[`DocumentFragment`](DocumentFragment.md).[`ownerDocument`](DocumentFragment.md#ownerdocument)

***

### parentElement

> `readonly` **parentElement**: [`HTMLElement`](HTMLElement.md) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:21724

The read-only **`parentElement`** property of Node interface returns the DOM node's parent Element, or `null` if the node either has no parent, or its parent isn't a DOM Element.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/parentElement)

#### Inherited from

[`DocumentFragment`](DocumentFragment.md).[`parentElement`](DocumentFragment.md#parentelement)

***

### parentNode

> `readonly` **parentNode**: [`ParentNode`](ParentNode.md) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:21730

The read-only **`parentNode`** property of the Node interface returns the parent of the specified node in the DOM tree.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/parentNode)

#### Inherited from

[`DocumentFragment`](DocumentFragment.md).[`parentNode`](DocumentFragment.md#parentnode)

***

### pictureInPictureElement

> `readonly` **pictureInPictureElement**: [`Element`](Element.md) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10449

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/pictureInPictureElement)

#### Inherited from

[`DocumentOrShadowRoot`](DocumentOrShadowRoot.md).[`pictureInPictureElement`](DocumentOrShadowRoot.md#pictureinpictureelement)

***

### pointerLockElement

> `readonly` **pointerLockElement**: [`Element`](Element.md) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10451

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/pointerLockElement)

#### Inherited from

[`DocumentOrShadowRoot`](DocumentOrShadowRoot.md).[`pointerLockElement`](DocumentOrShadowRoot.md#pointerlockelement)

***

### previousSibling

> `readonly` **previousSibling**: [`ChildNode`](ChildNode.md) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:21736

The read-only **`previousSibling`** property of the Node interface returns the node immediately preceding the specified one in its parent's or `null` if the specified node is the first in that list.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/previousSibling)

#### Inherited from

[`DocumentFragment`](DocumentFragment.md).[`previousSibling`](DocumentFragment.md#previoussibling)

***

### PROCESSING\_INSTRUCTION\_NODE

> `readonly` **PROCESSING\_INSTRUCTION\_NODE**: `7`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:21843

node is a ProcessingInstruction node.

#### Inherited from

[`DocumentFragment`](DocumentFragment.md).[`PROCESSING_INSTRUCTION_NODE`](DocumentFragment.md#processing_instruction_node)

***

### serializable

> `readonly` **serializable**: `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:30771

The **`serializable`** read-only property of the ShadowRoot interface returns `true` if the shadow root is serializable.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/ShadowRoot/serializable)

***

### slotAssignment

> `readonly` **slotAssignment**: [`SlotAssignmentMode`](../type-aliases/SlotAssignmentMode.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:30777

The read-only **`slotAssignment`** property of the ShadowRoot interface returns the _slot assignment mode_ for the shadow DOM tree.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/ShadowRoot/slotAssignment)

***

### styleSheets

> `readonly` **styleSheets**: `StyleSheetList`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10453

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/styleSheets)

#### Inherited from

[`DocumentOrShadowRoot`](DocumentOrShadowRoot.md).[`styleSheets`](DocumentOrShadowRoot.md#stylesheets)

***

### TEXT\_NODE

> `readonly` **TEXT\_NODE**: `3`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:21837

node is a Text node.

#### Inherited from

[`DocumentFragment`](DocumentFragment.md).[`TEXT_NODE`](DocumentFragment.md#text_node)

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

#### Inherited from

[`DocumentFragment`](DocumentFragment.md).[`textContent`](DocumentFragment.md#textcontent)

## Methods

### addEventListener()

#### Call Signature

> **addEventListener**\<`K`\>(`type`, `listener`, `options?`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:30790

The **`addEventListener()`** method of the EventTarget interface sets up a function that will be called whenever the specified event is delivered to the target.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener)

##### Type Parameters

###### K

`K` *extends* `"slotchange"`

##### Parameters

###### type

`K`

###### listener

(`this`, `ev`) => `any`

###### options?

`boolean` | [`AddEventListenerOptions`](AddEventListenerOptions.md)

##### Returns

`void`

##### Overrides

[`DocumentFragment`](DocumentFragment.md).[`addEventListener`](DocumentFragment.md#addeventlistener)

#### Call Signature

> **addEventListener**(`type`, `listener`, `options?`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:30791

The **`addEventListener()`** method of the EventTarget interface sets up a function that will be called whenever the specified event is delivered to the target.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener)

##### Parameters

###### type

`string`

###### listener

[`EventListenerOrEventListenerObject`](../type-aliases/EventListenerOrEventListenerObject.md)

###### options?

`boolean` | [`AddEventListenerOptions`](AddEventListenerOptions.md)

##### Returns

`void`

##### Overrides

`DocumentFragment.addEventListener`

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

[`DocumentFragment`](DocumentFragment.md).[`append`](DocumentFragment.md#append)

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

[`DocumentFragment`](DocumentFragment.md).[`appendChild`](DocumentFragment.md#appendchild)

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

[`DocumentFragment`](DocumentFragment.md).[`cloneNode`](DocumentFragment.md#clonenode)

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

[`DocumentFragment`](DocumentFragment.md).[`compareDocumentPosition`](DocumentFragment.md#comparedocumentposition)

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

[`DocumentFragment`](DocumentFragment.md).[`contains`](DocumentFragment.md#contains)

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

[`DocumentFragment`](DocumentFragment.md).[`dispatchEvent`](DocumentFragment.md#dispatchevent)

***

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

#### Inherited from

[`DocumentOrShadowRoot`](DocumentOrShadowRoot.md).[`elementFromPoint`](DocumentOrShadowRoot.md#elementfrompoint)

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

#### Inherited from

[`DocumentOrShadowRoot`](DocumentOrShadowRoot.md).[`elementsFromPoint`](DocumentOrShadowRoot.md#elementsfrompoint)

***

### getAnimations()

> **getAnimations**(): [`Animation`](Animation.md)[]

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10457

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/getAnimations)

#### Returns

[`Animation`](Animation.md)[]

#### Inherited from

[`DocumentOrShadowRoot`](DocumentOrShadowRoot.md).[`getAnimations`](DocumentOrShadowRoot.md#getanimations)

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

#### Inherited from

[`DocumentFragment`](DocumentFragment.md).[`getElementById`](DocumentFragment.md#getelementbyid)

***

### getHTML()

> **getHTML**(`options?`): `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:30783

The **`getHTML()`** method of the ShadowRoot interface is used to serialize a shadow root's DOM to an HTML string.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/ShadowRoot/getHTML)

#### Parameters

##### options?

[`GetHTMLOptions`](GetHTMLOptions.md)

#### Returns

`string`

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

[`DocumentFragment`](DocumentFragment.md).[`getRootNode`](DocumentFragment.md#getrootnode)

***

### hasChildNodes()

> **hasChildNodes**(): `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:21778

The **`hasChildNodes()`** method of the Node interface returns a boolean value indicating whether the given Node has child nodes or not.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/hasChildNodes)

#### Returns

`boolean`

#### Inherited from

[`DocumentFragment`](DocumentFragment.md).[`hasChildNodes`](DocumentFragment.md#haschildnodes)

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

[`DocumentFragment`](DocumentFragment.md).[`insertBefore`](DocumentFragment.md#insertbefore)

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

[`DocumentFragment`](DocumentFragment.md).[`isDefaultNamespace`](DocumentFragment.md#isdefaultnamespace)

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

[`DocumentFragment`](DocumentFragment.md).[`isEqualNode`](DocumentFragment.md#isequalnode)

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

[`DocumentFragment`](DocumentFragment.md).[`isSameNode`](DocumentFragment.md#issamenode)

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

[`DocumentFragment`](DocumentFragment.md).[`lookupNamespaceURI`](DocumentFragment.md#lookupnamespaceuri)

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

[`DocumentFragment`](DocumentFragment.md).[`lookupPrefix`](DocumentFragment.md#lookupprefix)

***

### normalize()

> **normalize**(): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:21820

The **`normalize()`** method of the Node interface puts the specified node and all of its sub-tree into a _normalized_ form.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/normalize)

#### Returns

`void`

#### Inherited from

[`DocumentFragment`](DocumentFragment.md).[`normalize`](DocumentFragment.md#normalize)

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

[`DocumentFragment`](DocumentFragment.md).[`prepend`](DocumentFragment.md#prepend)

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

[`DocumentFragment`](DocumentFragment.md).[`querySelector`](DocumentFragment.md#queryselector)

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

[`DocumentFragment`](DocumentFragment.md).[`querySelector`](DocumentFragment.md#queryselector)

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

[`DocumentFragment`](DocumentFragment.md).[`querySelector`](DocumentFragment.md#queryselector)

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

[`DocumentFragment`](DocumentFragment.md).[`querySelector`](DocumentFragment.md#queryselector)

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

[`DocumentFragment`](DocumentFragment.md).[`querySelector`](DocumentFragment.md#queryselector)

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

[`DocumentFragment`](DocumentFragment.md).[`querySelectorAll`](DocumentFragment.md#queryselectorall)

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

[`DocumentFragment`](DocumentFragment.md).[`querySelectorAll`](DocumentFragment.md#queryselectorall)

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

[`DocumentFragment`](DocumentFragment.md).[`querySelectorAll`](DocumentFragment.md#queryselectorall)

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

[`DocumentFragment`](DocumentFragment.md).[`querySelectorAll`](DocumentFragment.md#queryselectorall)

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

[`DocumentFragment`](DocumentFragment.md).[`querySelectorAll`](DocumentFragment.md#queryselectorall)

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

[`DocumentFragment`](DocumentFragment.md).[`removeChild`](DocumentFragment.md#removechild)

***

### removeEventListener()

#### Call Signature

> **removeEventListener**\<`K`\>(`type`, `listener`, `options?`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:30792

The **`removeEventListener()`** method of the EventTarget interface removes an event listener previously registered with EventTarget.addEventListener() from the target.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/removeEventListener)

##### Type Parameters

###### K

`K` *extends* `"slotchange"`

##### Parameters

###### type

`K`

###### listener

(`this`, `ev`) => `any`

###### options?

`boolean` | [`EventListenerOptions`](EventListenerOptions.md)

##### Returns

`void`

##### Overrides

[`DocumentFragment`](DocumentFragment.md).[`removeEventListener`](DocumentFragment.md#removeeventlistener)

#### Call Signature

> **removeEventListener**(`type`, `listener`, `options?`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:30793

The **`removeEventListener()`** method of the EventTarget interface removes an event listener previously registered with EventTarget.addEventListener() from the target.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/removeEventListener)

##### Parameters

###### type

`string`

###### listener

[`EventListenerOrEventListenerObject`](../type-aliases/EventListenerOrEventListenerObject.md)

###### options?

`boolean` | [`EventListenerOptions`](EventListenerOptions.md)

##### Returns

`void`

##### Overrides

`DocumentFragment.removeEventListener`

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

[`DocumentFragment`](DocumentFragment.md).[`replaceChild`](DocumentFragment.md#replacechild)

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

[`DocumentFragment`](DocumentFragment.md).[`replaceChildren`](DocumentFragment.md#replacechildren)

***

### setHTMLUnsafe()

> **setHTMLUnsafe**(`html`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:30789

The **`setHTMLUnsafe()`** method of the ShadowRoot interface can be used to parse a string of HTML into a DocumentFragment, optionally filtering out unwanted elements and attributes, and then use it to replace the existing tree in the Shadow DOM.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/ShadowRoot/setHTMLUnsafe)

#### Parameters

##### html

`string`

#### Returns

`void`
