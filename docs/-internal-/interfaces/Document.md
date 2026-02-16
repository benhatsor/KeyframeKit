[**KeyframeKit.js**](../../README.md)

***

[KeyframeKit.js](../../globals.md) / [\<internal\>](../README.md) / Document

# Interface: Document

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:9767

The **`Document`** interface represents any web page loaded in the browser and serves as an entry point into the web page's content, which is the DOM tree.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document)

## Extends

- [`Node`](Node.md).[`DocumentOrShadowRoot`](DocumentOrShadowRoot.md).[`FontFaceSource`](FontFaceSource.md).[`GlobalEventHandlers`](GlobalEventHandlers.md).[`NonElementParentNode`](NonElementParentNode.md).[`ParentNode`](ParentNode.md).[`XPathEvaluatorBase`](XPathEvaluatorBase.md)

## Extended by

- [`XMLDocument`](XMLDocument.md)

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

### ~~alinkColor~~

> **alinkColor**: `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:9780

Returns or sets the color of an active link in the document body.

#### Deprecated

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/alinkColor)

***

### ~~all~~

> `readonly` **all**: `HTMLAllCollection`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:9787

The Document interface's read-only **`all`** property returns an HTMLAllCollection rooted at the document node.

#### Deprecated

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/all)

***

### ~~anchors~~

> `readonly` **anchors**: `HTMLCollectionOf`\<[`HTMLAnchorElement`](HTMLAnchorElement.md)\>

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:9794

The **`anchors`** read-only property of the An HTMLCollection.

#### Deprecated

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/anchors)

***

### ~~applets~~

> `readonly` **applets**: [`HTMLCollection`](HTMLCollection.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:9801

The **`applets`** property of the Document returns an empty HTMLCollection.

#### Deprecated

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/applets)

***

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

### ~~bgColor~~

> **bgColor**: `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:9808

The deprecated `bgColor` property gets or sets the background color of the current document.

#### Deprecated

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/bgColor)

***

### body

> **body**: [`HTMLElement`](HTMLElement.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:9814

The **`Document.body`** property represents the `null` if no such element exists.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/body)

***

### CDATA\_SECTION\_NODE

> `readonly` **CDATA\_SECTION\_NODE**: `4`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:21839

node is a CDATASection node.

#### Inherited from

[`Node`](Node.md).[`CDATA_SECTION_NODE`](Node.md#cdata_section_node)

***

### characterSet

> `readonly` **characterSet**: `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:9820

The **`Document.characterSet`** read-only property returns the character encoding of the document that it's currently rendered with.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/characterSet)

***

### ~~charset~~

> `readonly` **charset**: `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:9826

#### Deprecated

This is a legacy alias of `characterSet`.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/characterSet)

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

### compatMode

> `readonly` **compatMode**: `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:9832

The **`Document.compatMode`** read-only property indicates whether the document is rendered in Quirks mode or Standards mode.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/compatMode)

***

### contentType

> `readonly` **contentType**: `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:9838

The **`Document.contentType`** read-only property returns the MIME type that the document is being rendered as.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/contentType)

***

### cookie

> **cookie**: `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:9844

The Document property `cookie` lets you read and write cookies associated with the document.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/cookie)

***

### currentScript

> `readonly` **currentScript**: [`HTMLOrSVGScriptElement`](../type-aliases/HTMLOrSVGScriptElement.md) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:9850

The **`Document.currentScript`** property returns the script element whose script is currently being processed and isn't a JavaScript module.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/currentScript)

***

### defaultView

> `readonly` **defaultView**: [`Window`](Window.md) & *typeof* `globalThis` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:9856

In browsers, **`document.defaultView`** returns the This property is read-only.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/defaultView)

***

### designMode

> **designMode**: `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:9862

**`document.designMode`** controls whether the entire document is editable.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/designMode)

***

### dir

> **dir**: `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:9868

The **`Document.dir`** property is a string representing the directionality of the text of the document, whether left to right (default) or right to left.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/dir)

***

### doctype

> `readonly` **doctype**: [`DocumentType`](DocumentType.md) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:9874

The **`doctype`** read-only property of the Document interface is a DocumentType object representing the Doctype associated with the current document.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/doctype)

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

### documentElement

> `readonly` **documentElement**: [`HTMLElement`](HTMLElement.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:9880

The **`documentElement`** read-only property of the Document interface returns the example, the html element for HTML documents).

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/documentElement)

***

### documentURI

> `readonly` **documentURI**: `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:9886

The **`documentURI`** read-only property of the A string.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/documentURI)

***

### ~~domain~~

> **domain**: `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:9893

The **`domain`** property of the Document interface gets/sets the domain portion of the origin of the current document, as used by the same-origin policy.

#### Deprecated

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/domain)

***

### ELEMENT\_NODE

> `readonly` **ELEMENT\_NODE**: `1`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:21834

node is an element.

#### Inherited from

[`Node`](Node.md).[`ELEMENT_NODE`](Node.md#element_node)

***

### embeds

> `readonly` **embeds**: `HTMLCollectionOf`\<[`HTMLEmbedElement`](HTMLEmbedElement.md)\>

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:9899

The **`embeds`** read-only property of the An HTMLCollection.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/embeds)

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

### ~~fgColor~~

> **fgColor**: `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:9906

**`fgColor`** gets/sets the foreground color, or text color, of the current document.

#### Deprecated

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/fgColor)

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

### fonts

> `readonly` **fonts**: `FontFaceSet`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12211

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/fonts)

#### Inherited from

[`FontFaceSource`](FontFaceSource.md).[`fonts`](FontFaceSource.md#fonts)

***

### forms

> `readonly` **forms**: `HTMLCollectionOf`\<`HTMLFormElement`\>

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:9912

The **`forms`** read-only property of the Document interface returns an HTMLCollection listing all the form elements contained in the document.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/forms)

***

### fragmentDirective

> `readonly` **fragmentDirective**: [`FragmentDirective`](FragmentDirective.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:9918

The **`fragmentDirective`** read-only property of the Document interface returns the FragmentDirective for the current document.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/fragmentDirective)

***

### ~~fullscreen~~

> `readonly` **fullscreen**: `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:9925

The obsolete Document interface's **`fullscreen`** read-only property reports whether or not the document is currently displaying content in fullscreen mode.

#### Deprecated

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/fullscreen)

***

### fullscreenElement

> `readonly` **fullscreenElement**: [`Element`](Element.md) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10447

Returns document's fullscreen element.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/fullscreenElement)

#### Inherited from

[`DocumentOrShadowRoot`](DocumentOrShadowRoot.md).[`fullscreenElement`](DocumentOrShadowRoot.md#fullscreenelement)

***

### fullscreenEnabled

> `readonly` **fullscreenEnabled**: `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:9931

The read-only **`fullscreenEnabled`** property on the Document interface indicates whether or not fullscreen mode is available.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/fullscreenEnabled)

***

### head

> `readonly` **head**: [`HTMLHeadElement`](HTMLHeadElement.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:9937

The **`head`** read-only property of the Document interface returns the head element of the current document.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/head)

***

### hidden

> `readonly` **hidden**: `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:9943

The **`Document.hidden`** read-only property returns a Boolean value indicating if the page is considered hidden or not.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/hidden)

***

### images

> `readonly` **images**: `HTMLCollectionOf`\<[`HTMLImageElement`](HTMLImageElement.md)\>

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:9949

The **`images`** read-only property of the Document interface returns a collection of the images in the current HTML document.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/images)

***

### implementation

> `readonly` **implementation**: [`DOMImplementation`](DOMImplementation.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:9955

The **`Document.implementation`** property returns a A DOMImplementation object.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/implementation)

***

### ~~inputEncoding~~

> `readonly` **inputEncoding**: `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:9961

#### Deprecated

This is a legacy alias of `characterSet`.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/characterSet)

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

### lastModified

> `readonly` **lastModified**: `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:9967

The **`lastModified`** property of the Document interface returns a string containing the date and local time on which the current document was last modified.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/lastModified)

***

### ~~linkColor~~

> **linkColor**: `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:9974

The **`Document.linkColor`** property gets/sets the color of links within the document.

#### Deprecated

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/linkColor)

***

### links

> `readonly` **links**: `HTMLCollectionOf`\<[`HTMLAnchorElement`](HTMLAnchorElement.md) \| [`HTMLAreaElement`](HTMLAreaElement.md)\>

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:9980

The **`links`** read-only property of the Document interface returns a collection of all area elements and a elements in a document with a value for the href attribute.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/links)

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

### onabort

> **onabort**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12743

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/abort_event)

#### Inherited from

[`GlobalEventHandlers`](GlobalEventHandlers.md).[`onabort`](GlobalEventHandlers.md#onabort)

***

### onanimationcancel

> **onanimationcancel**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12745

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/animationcancel_event)

#### Inherited from

[`GlobalEventHandlers`](GlobalEventHandlers.md).[`onanimationcancel`](GlobalEventHandlers.md#onanimationcancel)

***

### onanimationend

> **onanimationend**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12747

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/animationend_event)

#### Inherited from

[`GlobalEventHandlers`](GlobalEventHandlers.md).[`onanimationend`](GlobalEventHandlers.md#onanimationend)

***

### onanimationiteration

> **onanimationiteration**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12749

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/animationiteration_event)

#### Inherited from

[`GlobalEventHandlers`](GlobalEventHandlers.md).[`onanimationiteration`](GlobalEventHandlers.md#onanimationiteration)

***

### onanimationstart

> **onanimationstart**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12751

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/animationstart_event)

#### Inherited from

[`GlobalEventHandlers`](GlobalEventHandlers.md).[`onanimationstart`](GlobalEventHandlers.md#onanimationstart)

***

### onauxclick

> **onauxclick**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12753

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/auxclick_event)

#### Inherited from

[`GlobalEventHandlers`](GlobalEventHandlers.md).[`onauxclick`](GlobalEventHandlers.md#onauxclick)

***

### onbeforeinput

> **onbeforeinput**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12755

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/beforeinput_event)

#### Inherited from

[`GlobalEventHandlers`](GlobalEventHandlers.md).[`onbeforeinput`](GlobalEventHandlers.md#onbeforeinput)

***

### onbeforematch

> **onbeforematch**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12757

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/beforematch_event)

#### Inherited from

[`GlobalEventHandlers`](GlobalEventHandlers.md).[`onbeforematch`](GlobalEventHandlers.md#onbeforematch)

***

### onbeforetoggle

> **onbeforetoggle**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12759

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/beforetoggle_event)

#### Inherited from

[`GlobalEventHandlers`](GlobalEventHandlers.md).[`onbeforetoggle`](GlobalEventHandlers.md#onbeforetoggle)

***

### onblur

> **onblur**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12761

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/blur_event)

#### Inherited from

[`GlobalEventHandlers`](GlobalEventHandlers.md).[`onblur`](GlobalEventHandlers.md#onblur)

***

### oncancel

> **oncancel**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12763

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLDialogElement/cancel_event)

#### Inherited from

[`GlobalEventHandlers`](GlobalEventHandlers.md).[`oncancel`](GlobalEventHandlers.md#oncancel)

***

### oncanplay

> **oncanplay**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12765

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/canplay_event)

#### Inherited from

[`GlobalEventHandlers`](GlobalEventHandlers.md).[`oncanplay`](GlobalEventHandlers.md#oncanplay)

***

### oncanplaythrough

> **oncanplaythrough**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12767

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/canplaythrough_event)

#### Inherited from

[`GlobalEventHandlers`](GlobalEventHandlers.md).[`oncanplaythrough`](GlobalEventHandlers.md#oncanplaythrough)

***

### onchange

> **onchange**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12769

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/change_event)

#### Inherited from

[`GlobalEventHandlers`](GlobalEventHandlers.md).[`onchange`](GlobalEventHandlers.md#onchange)

***

### onclick

> **onclick**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12771

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/click_event)

#### Inherited from

[`GlobalEventHandlers`](GlobalEventHandlers.md).[`onclick`](GlobalEventHandlers.md#onclick)

***

### onclose

> **onclose**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12773

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLDialogElement/close_event)

#### Inherited from

[`GlobalEventHandlers`](GlobalEventHandlers.md).[`onclose`](GlobalEventHandlers.md#onclose)

***

### oncontextlost

> **oncontextlost**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12775

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLCanvasElement/contextlost_event)

#### Inherited from

[`GlobalEventHandlers`](GlobalEventHandlers.md).[`oncontextlost`](GlobalEventHandlers.md#oncontextlost)

***

### oncontextmenu

> **oncontextmenu**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12777

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/contextmenu_event)

#### Inherited from

[`GlobalEventHandlers`](GlobalEventHandlers.md).[`oncontextmenu`](GlobalEventHandlers.md#oncontextmenu)

***

### oncontextrestored

> **oncontextrestored**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12779

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLCanvasElement/contextrestored_event)

#### Inherited from

[`GlobalEventHandlers`](GlobalEventHandlers.md).[`oncontextrestored`](GlobalEventHandlers.md#oncontextrestored)

***

### oncopy

> **oncopy**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12781

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/copy_event)

#### Inherited from

[`GlobalEventHandlers`](GlobalEventHandlers.md).[`oncopy`](GlobalEventHandlers.md#oncopy)

***

### oncuechange

> **oncuechange**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12783

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLTrackElement/cuechange_event)

#### Inherited from

[`GlobalEventHandlers`](GlobalEventHandlers.md).[`oncuechange`](GlobalEventHandlers.md#oncuechange)

***

### oncut

> **oncut**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12785

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/cut_event)

#### Inherited from

[`GlobalEventHandlers`](GlobalEventHandlers.md).[`oncut`](GlobalEventHandlers.md#oncut)

***

### ondblclick

> **ondblclick**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12787

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/dblclick_event)

#### Inherited from

[`GlobalEventHandlers`](GlobalEventHandlers.md).[`ondblclick`](GlobalEventHandlers.md#ondblclick)

***

### ondrag

> **ondrag**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12789

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/drag_event)

#### Inherited from

[`GlobalEventHandlers`](GlobalEventHandlers.md).[`ondrag`](GlobalEventHandlers.md#ondrag)

***

### ondragend

> **ondragend**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12791

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/dragend_event)

#### Inherited from

[`GlobalEventHandlers`](GlobalEventHandlers.md).[`ondragend`](GlobalEventHandlers.md#ondragend)

***

### ondragenter

> **ondragenter**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12793

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/dragenter_event)

#### Inherited from

[`GlobalEventHandlers`](GlobalEventHandlers.md).[`ondragenter`](GlobalEventHandlers.md#ondragenter)

***

### ondragleave

> **ondragleave**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12795

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/dragleave_event)

#### Inherited from

[`GlobalEventHandlers`](GlobalEventHandlers.md).[`ondragleave`](GlobalEventHandlers.md#ondragleave)

***

### ondragover

> **ondragover**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12797

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/dragover_event)

#### Inherited from

[`GlobalEventHandlers`](GlobalEventHandlers.md).[`ondragover`](GlobalEventHandlers.md#ondragover)

***

### ondragstart

> **ondragstart**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12799

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/dragstart_event)

#### Inherited from

[`GlobalEventHandlers`](GlobalEventHandlers.md).[`ondragstart`](GlobalEventHandlers.md#ondragstart)

***

### ondrop

> **ondrop**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12801

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/drop_event)

#### Inherited from

[`GlobalEventHandlers`](GlobalEventHandlers.md).[`ondrop`](GlobalEventHandlers.md#ondrop)

***

### ondurationchange

> **ondurationchange**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12803

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/durationchange_event)

#### Inherited from

[`GlobalEventHandlers`](GlobalEventHandlers.md).[`ondurationchange`](GlobalEventHandlers.md#ondurationchange)

***

### onemptied

> **onemptied**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12805

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/emptied_event)

#### Inherited from

[`GlobalEventHandlers`](GlobalEventHandlers.md).[`onemptied`](GlobalEventHandlers.md#onemptied)

***

### onended

> **onended**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12807

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/ended_event)

#### Inherited from

[`GlobalEventHandlers`](GlobalEventHandlers.md).[`onended`](GlobalEventHandlers.md#onended)

***

### onerror

> **onerror**: [`OnErrorEventHandler`](../type-aliases/OnErrorEventHandler.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12809

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/error_event)

#### Inherited from

[`GlobalEventHandlers`](GlobalEventHandlers.md).[`onerror`](GlobalEventHandlers.md#onerror)

***

### onfocus

> **onfocus**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12811

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/focus_event)

#### Inherited from

[`GlobalEventHandlers`](GlobalEventHandlers.md).[`onfocus`](GlobalEventHandlers.md#onfocus)

***

### onformdata

> **onformdata**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12813

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLFormElement/formdata_event)

#### Inherited from

[`GlobalEventHandlers`](GlobalEventHandlers.md).[`onformdata`](GlobalEventHandlers.md#onformdata)

***

### onfullscreenchange

> **onfullscreenchange**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:9989

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/fullscreenchange_event)

***

### onfullscreenerror

> **onfullscreenerror**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:9991

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/fullscreenerror_event)

***

### ongotpointercapture

> **ongotpointercapture**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12815

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/gotpointercapture_event)

#### Inherited from

[`GlobalEventHandlers`](GlobalEventHandlers.md).[`ongotpointercapture`](GlobalEventHandlers.md#ongotpointercapture)

***

### oninput

> **oninput**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12817

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/input_event)

#### Inherited from

[`GlobalEventHandlers`](GlobalEventHandlers.md).[`oninput`](GlobalEventHandlers.md#oninput)

***

### oninvalid

> **oninvalid**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12819

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLInputElement/invalid_event)

#### Inherited from

[`GlobalEventHandlers`](GlobalEventHandlers.md).[`oninvalid`](GlobalEventHandlers.md#oninvalid)

***

### onkeydown

> **onkeydown**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12821

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/keydown_event)

#### Inherited from

[`GlobalEventHandlers`](GlobalEventHandlers.md).[`onkeydown`](GlobalEventHandlers.md#onkeydown)

***

### ~~onkeypress~~

> **onkeypress**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12827

#### Deprecated

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/keypress_event)

#### Inherited from

[`GlobalEventHandlers`](GlobalEventHandlers.md).[`onkeypress`](GlobalEventHandlers.md#onkeypress)

***

### onkeyup

> **onkeyup**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12829

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/keyup_event)

#### Inherited from

[`GlobalEventHandlers`](GlobalEventHandlers.md).[`onkeyup`](GlobalEventHandlers.md#onkeyup)

***

### onload

> **onload**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12831

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/load_event)

#### Inherited from

[`GlobalEventHandlers`](GlobalEventHandlers.md).[`onload`](GlobalEventHandlers.md#onload)

***

### onloadeddata

> **onloadeddata**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12833

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/loadeddata_event)

#### Inherited from

[`GlobalEventHandlers`](GlobalEventHandlers.md).[`onloadeddata`](GlobalEventHandlers.md#onloadeddata)

***

### onloadedmetadata

> **onloadedmetadata**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12835

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/loadedmetadata_event)

#### Inherited from

[`GlobalEventHandlers`](GlobalEventHandlers.md).[`onloadedmetadata`](GlobalEventHandlers.md#onloadedmetadata)

***

### onloadstart

> **onloadstart**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12837

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/loadstart_event)

#### Inherited from

[`GlobalEventHandlers`](GlobalEventHandlers.md).[`onloadstart`](GlobalEventHandlers.md#onloadstart)

***

### onlostpointercapture

> **onlostpointercapture**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12839

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/lostpointercapture_event)

#### Inherited from

[`GlobalEventHandlers`](GlobalEventHandlers.md).[`onlostpointercapture`](GlobalEventHandlers.md#onlostpointercapture)

***

### onmousedown

> **onmousedown**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12841

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/mousedown_event)

#### Inherited from

[`GlobalEventHandlers`](GlobalEventHandlers.md).[`onmousedown`](GlobalEventHandlers.md#onmousedown)

***

### onmouseenter

> **onmouseenter**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12843

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/mouseenter_event)

#### Inherited from

[`GlobalEventHandlers`](GlobalEventHandlers.md).[`onmouseenter`](GlobalEventHandlers.md#onmouseenter)

***

### onmouseleave

> **onmouseleave**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12845

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/mouseleave_event)

#### Inherited from

[`GlobalEventHandlers`](GlobalEventHandlers.md).[`onmouseleave`](GlobalEventHandlers.md#onmouseleave)

***

### onmousemove

> **onmousemove**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12847

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/mousemove_event)

#### Inherited from

[`GlobalEventHandlers`](GlobalEventHandlers.md).[`onmousemove`](GlobalEventHandlers.md#onmousemove)

***

### onmouseout

> **onmouseout**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12849

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/mouseout_event)

#### Inherited from

[`GlobalEventHandlers`](GlobalEventHandlers.md).[`onmouseout`](GlobalEventHandlers.md#onmouseout)

***

### onmouseover

> **onmouseover**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12851

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/mouseover_event)

#### Inherited from

[`GlobalEventHandlers`](GlobalEventHandlers.md).[`onmouseover`](GlobalEventHandlers.md#onmouseover)

***

### onmouseup

> **onmouseup**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12853

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/mouseup_event)

#### Inherited from

[`GlobalEventHandlers`](GlobalEventHandlers.md).[`onmouseup`](GlobalEventHandlers.md#onmouseup)

***

### onpaste

> **onpaste**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12855

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/paste_event)

#### Inherited from

[`GlobalEventHandlers`](GlobalEventHandlers.md).[`onpaste`](GlobalEventHandlers.md#onpaste)

***

### onpause

> **onpause**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12857

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/pause_event)

#### Inherited from

[`GlobalEventHandlers`](GlobalEventHandlers.md).[`onpause`](GlobalEventHandlers.md#onpause)

***

### onplay

> **onplay**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12859

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/play_event)

#### Inherited from

[`GlobalEventHandlers`](GlobalEventHandlers.md).[`onplay`](GlobalEventHandlers.md#onplay)

***

### onplaying

> **onplaying**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12861

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/playing_event)

#### Inherited from

[`GlobalEventHandlers`](GlobalEventHandlers.md).[`onplaying`](GlobalEventHandlers.md#onplaying)

***

### onpointercancel

> **onpointercancel**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12863

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/pointercancel_event)

#### Inherited from

[`GlobalEventHandlers`](GlobalEventHandlers.md).[`onpointercancel`](GlobalEventHandlers.md#onpointercancel)

***

### onpointerdown

> **onpointerdown**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12865

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/pointerdown_event)

#### Inherited from

[`GlobalEventHandlers`](GlobalEventHandlers.md).[`onpointerdown`](GlobalEventHandlers.md#onpointerdown)

***

### onpointerenter

> **onpointerenter**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12867

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/pointerenter_event)

#### Inherited from

[`GlobalEventHandlers`](GlobalEventHandlers.md).[`onpointerenter`](GlobalEventHandlers.md#onpointerenter)

***

### onpointerleave

> **onpointerleave**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12869

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/pointerleave_event)

#### Inherited from

[`GlobalEventHandlers`](GlobalEventHandlers.md).[`onpointerleave`](GlobalEventHandlers.md#onpointerleave)

***

### onpointerlockchange

> **onpointerlockchange**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:9993

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/pointerlockchange_event)

***

### onpointerlockerror

> **onpointerlockerror**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:9995

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/pointerlockerror_event)

***

### onpointermove

> **onpointermove**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12871

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/pointermove_event)

#### Inherited from

[`GlobalEventHandlers`](GlobalEventHandlers.md).[`onpointermove`](GlobalEventHandlers.md#onpointermove)

***

### onpointerout

> **onpointerout**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12873

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/pointerout_event)

#### Inherited from

[`GlobalEventHandlers`](GlobalEventHandlers.md).[`onpointerout`](GlobalEventHandlers.md#onpointerout)

***

### onpointerover

> **onpointerover**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12875

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/pointerover_event)

#### Inherited from

[`GlobalEventHandlers`](GlobalEventHandlers.md).[`onpointerover`](GlobalEventHandlers.md#onpointerover)

***

### onpointerrawupdate

> **onpointerrawupdate**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12881

Available only in secure contexts.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/pointerrawupdate_event)

#### Inherited from

[`GlobalEventHandlers`](GlobalEventHandlers.md).[`onpointerrawupdate`](GlobalEventHandlers.md#onpointerrawupdate)

***

### onpointerup

> **onpointerup**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12883

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/pointerup_event)

#### Inherited from

[`GlobalEventHandlers`](GlobalEventHandlers.md).[`onpointerup`](GlobalEventHandlers.md#onpointerup)

***

### onprogress

> **onprogress**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12885

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/progress_event)

#### Inherited from

[`GlobalEventHandlers`](GlobalEventHandlers.md).[`onprogress`](GlobalEventHandlers.md#onprogress)

***

### onratechange

> **onratechange**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12887

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/ratechange_event)

#### Inherited from

[`GlobalEventHandlers`](GlobalEventHandlers.md).[`onratechange`](GlobalEventHandlers.md#onratechange)

***

### onreadystatechange

> **onreadystatechange**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:9997

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/readystatechange_event)

***

### onreset

> **onreset**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12889

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLFormElement/reset_event)

#### Inherited from

[`GlobalEventHandlers`](GlobalEventHandlers.md).[`onreset`](GlobalEventHandlers.md#onreset)

***

### onresize

> **onresize**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12891

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLVideoElement/resize_event)

#### Inherited from

[`GlobalEventHandlers`](GlobalEventHandlers.md).[`onresize`](GlobalEventHandlers.md#onresize)

***

### onscroll

> **onscroll**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12893

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/scroll_event)

#### Inherited from

[`GlobalEventHandlers`](GlobalEventHandlers.md).[`onscroll`](GlobalEventHandlers.md#onscroll)

***

### onscrollend

> **onscrollend**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12895

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/scrollend_event)

#### Inherited from

[`GlobalEventHandlers`](GlobalEventHandlers.md).[`onscrollend`](GlobalEventHandlers.md#onscrollend)

***

### onsecuritypolicyviolation

> **onsecuritypolicyviolation**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12897

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/securitypolicyviolation_event)

#### Inherited from

[`GlobalEventHandlers`](GlobalEventHandlers.md).[`onsecuritypolicyviolation`](GlobalEventHandlers.md#onsecuritypolicyviolation)

***

### onseeked

> **onseeked**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12899

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/seeked_event)

#### Inherited from

[`GlobalEventHandlers`](GlobalEventHandlers.md).[`onseeked`](GlobalEventHandlers.md#onseeked)

***

### onseeking

> **onseeking**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12901

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/seeking_event)

#### Inherited from

[`GlobalEventHandlers`](GlobalEventHandlers.md).[`onseeking`](GlobalEventHandlers.md#onseeking)

***

### onselect

> **onselect**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12903

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLInputElement/select_event)

#### Inherited from

[`GlobalEventHandlers`](GlobalEventHandlers.md).[`onselect`](GlobalEventHandlers.md#onselect)

***

### onselectionchange

> **onselectionchange**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12905

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/selectionchange_event)

#### Inherited from

[`GlobalEventHandlers`](GlobalEventHandlers.md).[`onselectionchange`](GlobalEventHandlers.md#onselectionchange)

***

### onselectstart

> **onselectstart**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12907

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/selectstart_event)

#### Inherited from

[`GlobalEventHandlers`](GlobalEventHandlers.md).[`onselectstart`](GlobalEventHandlers.md#onselectstart)

***

### onslotchange

> **onslotchange**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12909

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLSlotElement/slotchange_event)

#### Inherited from

[`GlobalEventHandlers`](GlobalEventHandlers.md).[`onslotchange`](GlobalEventHandlers.md#onslotchange)

***

### onstalled

> **onstalled**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12911

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/stalled_event)

#### Inherited from

[`GlobalEventHandlers`](GlobalEventHandlers.md).[`onstalled`](GlobalEventHandlers.md#onstalled)

***

### onsubmit

> **onsubmit**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12913

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLFormElement/submit_event)

#### Inherited from

[`GlobalEventHandlers`](GlobalEventHandlers.md).[`onsubmit`](GlobalEventHandlers.md#onsubmit)

***

### onsuspend

> **onsuspend**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12915

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/suspend_event)

#### Inherited from

[`GlobalEventHandlers`](GlobalEventHandlers.md).[`onsuspend`](GlobalEventHandlers.md#onsuspend)

***

### ontimeupdate

> **ontimeupdate**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12917

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/timeupdate_event)

#### Inherited from

[`GlobalEventHandlers`](GlobalEventHandlers.md).[`ontimeupdate`](GlobalEventHandlers.md#ontimeupdate)

***

### ontoggle

> **ontoggle**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12919

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/toggle_event)

#### Inherited from

[`GlobalEventHandlers`](GlobalEventHandlers.md).[`ontoggle`](GlobalEventHandlers.md#ontoggle)

***

### ontouchcancel?

> `optional` **ontouchcancel**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12921

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/touchcancel_event)

#### Inherited from

[`GlobalEventHandlers`](GlobalEventHandlers.md).[`ontouchcancel`](GlobalEventHandlers.md#ontouchcancel)

***

### ontouchend?

> `optional` **ontouchend**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12923

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/touchend_event)

#### Inherited from

[`GlobalEventHandlers`](GlobalEventHandlers.md).[`ontouchend`](GlobalEventHandlers.md#ontouchend)

***

### ontouchmove?

> `optional` **ontouchmove**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12925

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/touchmove_event)

#### Inherited from

[`GlobalEventHandlers`](GlobalEventHandlers.md).[`ontouchmove`](GlobalEventHandlers.md#ontouchmove)

***

### ontouchstart?

> `optional` **ontouchstart**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12927

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/touchstart_event)

#### Inherited from

[`GlobalEventHandlers`](GlobalEventHandlers.md).[`ontouchstart`](GlobalEventHandlers.md#ontouchstart)

***

### ontransitioncancel

> **ontransitioncancel**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12929

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/transitioncancel_event)

#### Inherited from

[`GlobalEventHandlers`](GlobalEventHandlers.md).[`ontransitioncancel`](GlobalEventHandlers.md#ontransitioncancel)

***

### ontransitionend

> **ontransitionend**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12931

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/transitionend_event)

#### Inherited from

[`GlobalEventHandlers`](GlobalEventHandlers.md).[`ontransitionend`](GlobalEventHandlers.md#ontransitionend)

***

### ontransitionrun

> **ontransitionrun**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12933

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/transitionrun_event)

#### Inherited from

[`GlobalEventHandlers`](GlobalEventHandlers.md).[`ontransitionrun`](GlobalEventHandlers.md#ontransitionrun)

***

### ontransitionstart

> **ontransitionstart**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12935

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/transitionstart_event)

#### Inherited from

[`GlobalEventHandlers`](GlobalEventHandlers.md).[`ontransitionstart`](GlobalEventHandlers.md#ontransitionstart)

***

### onvisibilitychange

> **onvisibilitychange**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:9999

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/visibilitychange_event)

***

### onvolumechange

> **onvolumechange**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12937

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/volumechange_event)

#### Inherited from

[`GlobalEventHandlers`](GlobalEventHandlers.md).[`onvolumechange`](GlobalEventHandlers.md#onvolumechange)

***

### onwaiting

> **onwaiting**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12939

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/waiting_event)

#### Inherited from

[`GlobalEventHandlers`](GlobalEventHandlers.md).[`onwaiting`](GlobalEventHandlers.md#onwaiting)

***

### ~~onwebkitanimationend~~

> **onwebkitanimationend**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12945

#### Deprecated

This is a legacy alias of `onanimationend`.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/animationend_event)

#### Inherited from

[`GlobalEventHandlers`](GlobalEventHandlers.md).[`onwebkitanimationend`](GlobalEventHandlers.md#onwebkitanimationend)

***

### ~~onwebkitanimationiteration~~

> **onwebkitanimationiteration**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12951

#### Deprecated

This is a legacy alias of `onanimationiteration`.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/animationiteration_event)

#### Inherited from

[`GlobalEventHandlers`](GlobalEventHandlers.md).[`onwebkitanimationiteration`](GlobalEventHandlers.md#onwebkitanimationiteration)

***

### ~~onwebkitanimationstart~~

> **onwebkitanimationstart**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12957

#### Deprecated

This is a legacy alias of `onanimationstart`.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/animationstart_event)

#### Inherited from

[`GlobalEventHandlers`](GlobalEventHandlers.md).[`onwebkitanimationstart`](GlobalEventHandlers.md#onwebkitanimationstart)

***

### ~~onwebkittransitionend~~

> **onwebkittransitionend**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12963

#### Deprecated

This is a legacy alias of `ontransitionend`.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/transitionend_event)

#### Inherited from

[`GlobalEventHandlers`](GlobalEventHandlers.md).[`onwebkittransitionend`](GlobalEventHandlers.md#onwebkittransitionend)

***

### onwheel

> **onwheel**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12965

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/wheel_event)

#### Inherited from

[`GlobalEventHandlers`](GlobalEventHandlers.md).[`onwheel`](GlobalEventHandlers.md#onwheel)

***

### ownerDocument

> `readonly` **ownerDocument**: `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10000

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

### pictureInPictureElement

> `readonly` **pictureInPictureElement**: [`Element`](Element.md) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10449

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/pictureInPictureElement)

#### Inherited from

[`DocumentOrShadowRoot`](DocumentOrShadowRoot.md).[`pictureInPictureElement`](DocumentOrShadowRoot.md#pictureinpictureelement)

***

### pictureInPictureEnabled

> `readonly` **pictureInPictureEnabled**: `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10006

The read-only **`pictureInPictureEnabled`** property of the available.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/pictureInPictureEnabled)

***

### plugins

> `readonly` **plugins**: `HTMLCollectionOf`\<[`HTMLEmbedElement`](HTMLEmbedElement.md)\>

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10012

The **`plugins`** read-only property of the containing one or more HTMLEmbedElements representing the An HTMLCollection.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/plugins)

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

[`Node`](Node.md).[`previousSibling`](Node.md#previoussibling)

***

### PROCESSING\_INSTRUCTION\_NODE

> `readonly` **PROCESSING\_INSTRUCTION\_NODE**: `7`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:21843

node is a ProcessingInstruction node.

#### Inherited from

[`Node`](Node.md).[`PROCESSING_INSTRUCTION_NODE`](Node.md#processing_instruction_node)

***

### readyState

> `readonly` **readyState**: [`DocumentReadyState`](../type-aliases/DocumentReadyState.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10018

The **`Document.readyState`** property describes the loading state of the document.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/readyState)

***

### referrer

> `readonly` **referrer**: `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10024

The **`Document.referrer`** property returns the URI of the page that linked to this page.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/referrer)

***

### ~~rootElement~~

> `readonly` **rootElement**: [`SVGSVGElement`](SVGSVGElement.md) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10031

**`Document.rootElement`** returns the Element that is the root element of the document if it is an documents.

#### Deprecated

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/rootElement)

***

### scripts

> `readonly` **scripts**: `HTMLCollectionOf`\<[`HTMLScriptElement`](HTMLScriptElement.md)\>

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10037

The **`scripts`** property of the Document interface returns a list of the script elements in the document.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/scripts)

***

### scrollingElement

> `readonly` **scrollingElement**: [`Element`](Element.md) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10043

The **`scrollingElement`** read-only property of the scrolls the document.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/scrollingElement)

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

[`Node`](Node.md).[`TEXT_NODE`](Node.md#text_node)

***

### timeline

> `readonly` **timeline**: [`DocumentTimeline`](DocumentTimeline.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10049

The `timeline` readonly property of the Document interface represents the default timeline of the current document.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/timeline)

***

### title

> **title**: `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10055

The **`document.title`** property gets or sets the current title of the document.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/title)

***

### URL

> `readonly` **URL**: `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:9773

The **`URL`** read-only property of the Document interface returns the document location as a string.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/URL)

***

### visibilityState

> `readonly` **visibilityState**: [`DocumentVisibilityState`](../type-aliases/DocumentVisibilityState.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10061

The **`Document.visibilityState`** read-only property returns the visibility of the document.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/visibilityState)

***

### ~~vlinkColor~~

> **vlinkColor**: `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10068

The **`Document.vlinkColor`** property gets/sets the color of links that the user has visited in the document.

#### Deprecated

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/vlinkColor)

## Accessors

### location

#### Get Signature

> **get** **location**(): [`Location`](Location.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:9986

The **`Document.location`** read-only property returns a and provides methods for changing that URL and loading another URL.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/location)

##### Returns

[`Location`](Location.md)

#### Set Signature

> **set** **location**(`href`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:9987

##### Parameters

###### href

`string`

##### Returns

`void`

***

### textContent

#### Get Signature

> **get** **textContent**(): `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10393

[MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent)

##### Returns

`null`

The **`textContent`** property of the Node interface represents the text content of the node and its descendants.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/textContent)

#### Overrides

[`Node`](Node.md).[`textContent`](Node.md#textcontent)

## Methods

### addEventListener()

#### Call Signature

> **addEventListener**\<`K`\>(`type`, `listener`, `options?`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10394

The **`addEventListener()`** method of the EventTarget interface sets up a function that will be called whenever the specified event is delivered to the target.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener)

##### Type Parameters

###### K

`K` *extends* keyof [`DocumentEventMap`](DocumentEventMap.md)

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

[`Node`](Node.md).[`addEventListener`](Node.md#addeventlistener)

#### Call Signature

> **addEventListener**(`type`, `listener`, `options?`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10395

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

[`GlobalEventHandlers`](GlobalEventHandlers.md).[`addEventListener`](GlobalEventHandlers.md#addeventlistener)

***

### adoptNode()

> **adoptNode**\<`T`\>(`node`): `T`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10074

**`Document.adoptNode()`** transfers a node/dom from another Document into the method's document.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/adoptNode)

#### Type Parameters

##### T

`T` *extends* [`Node`](Node.md)

#### Parameters

##### node

`T`

#### Returns

`T`

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

### ~~captureEvents()~~

> **captureEvents**(): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10076

#### Returns

`void`

#### Deprecated

***

### caretPositionFromPoint()

> **caretPositionFromPoint**(`x`, `y`, `options?`): [`CaretPosition`](CaretPosition.md) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10082

The **`caretPositionFromPoint()`** method of the Document interface returns a CaretPosition object, containing the DOM node, along with the caret and caret's character offset within that node.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/caretPositionFromPoint)

#### Parameters

##### x

`number`

##### y

`number`

##### options?

[`CaretPositionFromPointOptions`](CaretPositionFromPointOptions.md)

#### Returns

[`CaretPosition`](CaretPosition.md) \| `null`

***

### ~~caretRangeFromPoint()~~

> **caretRangeFromPoint**(`x`, `y`): [`Range`](Range.md) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10084

#### Parameters

##### x

`number`

##### y

`number`

#### Returns

[`Range`](Range.md) \| `null`

#### Deprecated

***

### ~~clear()~~

> **clear**(): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10091

The **`Document.clear()`** method does nothing, but doesn't raise any error.

#### Returns

`void`

#### Deprecated

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/clear)

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

### close()

> **close**(): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10097

The **`Document.close()`** method finishes writing to a document, opened with Document.open().

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/close)

#### Returns

`void`

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

### createAttribute()

> **createAttribute**(`localName`): [`Attr`](Attr.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10103

The **`Document.createAttribute()`** method creates a new attribute node, and returns it.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/createAttribute)

#### Parameters

##### localName

`string`

#### Returns

[`Attr`](Attr.md)

***

### createAttributeNS()

> **createAttributeNS**(`namespace`, `qualifiedName`): [`Attr`](Attr.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10109

The **`Document.createAttributeNS()`** method creates a new attribute node with the specified namespace URI and qualified name, and returns it.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/createAttributeNS)

#### Parameters

##### namespace

`string` | `null`

##### qualifiedName

`string`

#### Returns

[`Attr`](Attr.md)

***

### createCDATASection()

> **createCDATASection**(`data`): [`CDATASection`](CDATASection.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10115

**`createCDATASection()`** creates a new CDATA section node, and returns it.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/createCDATASection)

#### Parameters

##### data

`string`

#### Returns

[`CDATASection`](CDATASection.md)

***

### createComment()

> **createComment**(`data`): [`Comment`](Comment.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10121

**`createComment()`** creates a new comment node, and returns it.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/createComment)

#### Parameters

##### data

`string`

#### Returns

[`Comment`](Comment.md)

***

### createDocumentFragment()

> **createDocumentFragment**(): [`DocumentFragment`](DocumentFragment.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10127

Creates a new empty DocumentFragment into which DOM nodes can be added to build an offscreen DOM tree.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/createDocumentFragment)

#### Returns

[`DocumentFragment`](DocumentFragment.md)

***

### createElement()

#### Call Signature

> **createElement**\<`K`\>(`tagName`, `options?`): [`HTMLElementTagNameMap`](HTMLElementTagNameMap.md)\[`K`\]

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10133

In an HTML document, the **`document.createElement()`** method creates the HTML element specified by `localName`, or an HTMLUnknownElement if `localName` isn't recognized.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/createElement)

##### Type Parameters

###### K

`K` *extends* keyof [`HTMLElementTagNameMap`](HTMLElementTagNameMap.md)

##### Parameters

###### tagName

`K`

###### options?

[`ElementCreationOptions`](ElementCreationOptions.md)

##### Returns

[`HTMLElementTagNameMap`](HTMLElementTagNameMap.md)\[`K`\]

#### Call Signature

> **createElement**\<`K`\>(`tagName`, `options?`): [`HTMLElementDeprecatedTagNameMap`](HTMLElementDeprecatedTagNameMap.md)\[`K`\]

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10135

##### Type Parameters

###### K

`K` *extends* keyof [`HTMLElementDeprecatedTagNameMap`](HTMLElementDeprecatedTagNameMap.md)

##### Parameters

###### tagName

`K`

###### options?

[`ElementCreationOptions`](ElementCreationOptions.md)

##### Returns

[`HTMLElementDeprecatedTagNameMap`](HTMLElementDeprecatedTagNameMap.md)\[`K`\]

##### Deprecated

#### Call Signature

> **createElement**(`tagName`, `options?`): [`HTMLElement`](HTMLElement.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10136

##### Parameters

###### tagName

`string`

###### options?

[`ElementCreationOptions`](ElementCreationOptions.md)

##### Returns

[`HTMLElement`](HTMLElement.md)

***

### createElementNS()

#### Call Signature

> **createElementNS**(`namespaceURI`, `qualifiedName`): [`HTMLElement`](HTMLElement.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10142

Creates an element with the specified namespace URI and qualified name.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/createElementNS)

##### Parameters

###### namespaceURI

`"http://www.w3.org/1999/xhtml"`

###### qualifiedName

`string`

##### Returns

[`HTMLElement`](HTMLElement.md)

#### Call Signature

> **createElementNS**\<`K`\>(`namespaceURI`, `qualifiedName`): [`SVGElementTagNameMap`](SVGElementTagNameMap.md)\[`K`\]

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10143

##### Type Parameters

###### K

`K` *extends* keyof [`SVGElementTagNameMap`](SVGElementTagNameMap.md)

##### Parameters

###### namespaceURI

`"http://www.w3.org/2000/svg"`

###### qualifiedName

`K`

##### Returns

[`SVGElementTagNameMap`](SVGElementTagNameMap.md)\[`K`\]

#### Call Signature

> **createElementNS**(`namespaceURI`, `qualifiedName`): [`SVGElement`](SVGElement.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10144

##### Parameters

###### namespaceURI

`"http://www.w3.org/2000/svg"`

###### qualifiedName

`string`

##### Returns

[`SVGElement`](SVGElement.md)

#### Call Signature

> **createElementNS**\<`K`\>(`namespaceURI`, `qualifiedName`): [`MathMLElementTagNameMap`](MathMLElementTagNameMap.md)\[`K`\]

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10145

##### Type Parameters

###### K

`K` *extends* keyof [`MathMLElementTagNameMap`](MathMLElementTagNameMap.md)

##### Parameters

###### namespaceURI

`"http://www.w3.org/1998/Math/MathML"`

###### qualifiedName

`K`

##### Returns

[`MathMLElementTagNameMap`](MathMLElementTagNameMap.md)\[`K`\]

#### Call Signature

> **createElementNS**(`namespaceURI`, `qualifiedName`): [`MathMLElement`](MathMLElement.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10146

##### Parameters

###### namespaceURI

`"http://www.w3.org/1998/Math/MathML"`

###### qualifiedName

`string`

##### Returns

[`MathMLElement`](MathMLElement.md)

#### Call Signature

> **createElementNS**(`namespaceURI`, `qualifiedName`, `options?`): [`Element`](Element.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10147

##### Parameters

###### namespaceURI

`string` | `null`

###### qualifiedName

`string`

###### options?

[`ElementCreationOptions`](ElementCreationOptions.md)

##### Returns

[`Element`](Element.md)

#### Call Signature

> **createElementNS**(`namespace`, `qualifiedName`, `options?`): [`Element`](Element.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10148

##### Parameters

###### namespace

`string` | `null`

###### qualifiedName

`string`

###### options?

`string` | [`ElementCreationOptions`](ElementCreationOptions.md)

##### Returns

[`Element`](Element.md)

***

### createEvent()

#### Call Signature

> **createEvent**(`eventInterface`): [`AnimationEvent`](AnimationEvent.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10155

Creates an event of the type specified.

##### Parameters

###### eventInterface

`"AnimationEvent"`

##### Returns

[`AnimationEvent`](AnimationEvent.md)

##### Deprecated

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/createEvent)

#### Call Signature

> **createEvent**(`eventInterface`): [`AnimationPlaybackEvent`](AnimationPlaybackEvent.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10156

##### Parameters

###### eventInterface

`"AnimationPlaybackEvent"`

##### Returns

[`AnimationPlaybackEvent`](AnimationPlaybackEvent.md)

#### Call Signature

> **createEvent**(`eventInterface`): [`AudioProcessingEvent`](AudioProcessingEvent.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10157

##### Parameters

###### eventInterface

`"AudioProcessingEvent"`

##### Returns

[`AudioProcessingEvent`](AudioProcessingEvent.md)

#### Call Signature

> **createEvent**(`eventInterface`): [`BeforeUnloadEvent`](BeforeUnloadEvent.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10158

##### Parameters

###### eventInterface

`"BeforeUnloadEvent"`

##### Returns

[`BeforeUnloadEvent`](BeforeUnloadEvent.md)

#### Call Signature

> **createEvent**(`eventInterface`): [`BlobEvent`](BlobEvent.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10159

##### Parameters

###### eventInterface

`"BlobEvent"`

##### Returns

[`BlobEvent`](BlobEvent.md)

#### Call Signature

> **createEvent**(`eventInterface`): [`ClipboardEvent`](ClipboardEvent.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10160

##### Parameters

###### eventInterface

`"ClipboardEvent"`

##### Returns

[`ClipboardEvent`](ClipboardEvent.md)

#### Call Signature

> **createEvent**(`eventInterface`): [`CloseEvent`](CloseEvent.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10161

##### Parameters

###### eventInterface

`"CloseEvent"`

##### Returns

[`CloseEvent`](CloseEvent.md)

#### Call Signature

> **createEvent**(`eventInterface`): [`CompositionEvent`](CompositionEvent.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10162

##### Parameters

###### eventInterface

`"CompositionEvent"`

##### Returns

[`CompositionEvent`](CompositionEvent.md)

#### Call Signature

> **createEvent**(`eventInterface`): [`ContentVisibilityAutoStateChangeEvent`](ContentVisibilityAutoStateChangeEvent.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10163

##### Parameters

###### eventInterface

`"ContentVisibilityAutoStateChangeEvent"`

##### Returns

[`ContentVisibilityAutoStateChangeEvent`](ContentVisibilityAutoStateChangeEvent.md)

#### Call Signature

> **createEvent**(`eventInterface`): [`CookieChangeEvent`](CookieChangeEvent.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10164

##### Parameters

###### eventInterface

`"CookieChangeEvent"`

##### Returns

[`CookieChangeEvent`](CookieChangeEvent.md)

#### Call Signature

> **createEvent**(`eventInterface`): [`CustomEvent`](CustomEvent.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10165

##### Parameters

###### eventInterface

`"CustomEvent"`

##### Returns

[`CustomEvent`](CustomEvent.md)

#### Call Signature

> **createEvent**(`eventInterface`): [`DeviceMotionEvent`](DeviceMotionEvent.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10166

##### Parameters

###### eventInterface

`"DeviceMotionEvent"`

##### Returns

[`DeviceMotionEvent`](DeviceMotionEvent.md)

#### Call Signature

> **createEvent**(`eventInterface`): [`DeviceOrientationEvent`](DeviceOrientationEvent.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10167

##### Parameters

###### eventInterface

`"DeviceOrientationEvent"`

##### Returns

[`DeviceOrientationEvent`](DeviceOrientationEvent.md)

#### Call Signature

> **createEvent**(`eventInterface`): [`DragEvent`](DragEvent.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10168

##### Parameters

###### eventInterface

`"DragEvent"`

##### Returns

[`DragEvent`](DragEvent.md)

#### Call Signature

> **createEvent**(`eventInterface`): [`ErrorEvent`](ErrorEvent.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10169

##### Parameters

###### eventInterface

`"ErrorEvent"`

##### Returns

[`ErrorEvent`](ErrorEvent.md)

#### Call Signature

> **createEvent**(`eventInterface`): [`Event`](Event.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10170

##### Parameters

###### eventInterface

`"Event"`

##### Returns

[`Event`](Event.md)

#### Call Signature

> **createEvent**(`eventInterface`): [`Event`](Event.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10171

##### Parameters

###### eventInterface

`"Events"`

##### Returns

[`Event`](Event.md)

#### Call Signature

> **createEvent**(`eventInterface`): [`FocusEvent`](FocusEvent.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10172

##### Parameters

###### eventInterface

`"FocusEvent"`

##### Returns

[`FocusEvent`](FocusEvent.md)

#### Call Signature

> **createEvent**(`eventInterface`): [`FontFaceSetLoadEvent`](FontFaceSetLoadEvent.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10173

##### Parameters

###### eventInterface

`"FontFaceSetLoadEvent"`

##### Returns

[`FontFaceSetLoadEvent`](FontFaceSetLoadEvent.md)

#### Call Signature

> **createEvent**(`eventInterface`): [`FormDataEvent`](FormDataEvent.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10174

##### Parameters

###### eventInterface

`"FormDataEvent"`

##### Returns

[`FormDataEvent`](FormDataEvent.md)

#### Call Signature

> **createEvent**(`eventInterface`): [`GamepadEvent`](GamepadEvent.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10175

##### Parameters

###### eventInterface

`"GamepadEvent"`

##### Returns

[`GamepadEvent`](GamepadEvent.md)

#### Call Signature

> **createEvent**(`eventInterface`): [`HashChangeEvent`](HashChangeEvent.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10176

##### Parameters

###### eventInterface

`"HashChangeEvent"`

##### Returns

[`HashChangeEvent`](HashChangeEvent.md)

#### Call Signature

> **createEvent**(`eventInterface`): [`IDBVersionChangeEvent`](IDBVersionChangeEvent.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10177

##### Parameters

###### eventInterface

`"IDBVersionChangeEvent"`

##### Returns

[`IDBVersionChangeEvent`](IDBVersionChangeEvent.md)

#### Call Signature

> **createEvent**(`eventInterface`): [`InputEvent`](InputEvent.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10178

##### Parameters

###### eventInterface

`"InputEvent"`

##### Returns

[`InputEvent`](InputEvent.md)

#### Call Signature

> **createEvent**(`eventInterface`): [`KeyboardEvent`](KeyboardEvent.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10179

##### Parameters

###### eventInterface

`"KeyboardEvent"`

##### Returns

[`KeyboardEvent`](KeyboardEvent.md)

#### Call Signature

> **createEvent**(`eventInterface`): [`MIDIConnectionEvent`](MIDIConnectionEvent.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10180

##### Parameters

###### eventInterface

`"MIDIConnectionEvent"`

##### Returns

[`MIDIConnectionEvent`](MIDIConnectionEvent.md)

#### Call Signature

> **createEvent**(`eventInterface`): [`MIDIMessageEvent`](MIDIMessageEvent.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10181

##### Parameters

###### eventInterface

`"MIDIMessageEvent"`

##### Returns

[`MIDIMessageEvent`](MIDIMessageEvent.md)

#### Call Signature

> **createEvent**(`eventInterface`): [`MediaEncryptedEvent`](MediaEncryptedEvent.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10182

##### Parameters

###### eventInterface

`"MediaEncryptedEvent"`

##### Returns

[`MediaEncryptedEvent`](MediaEncryptedEvent.md)

#### Call Signature

> **createEvent**(`eventInterface`): [`MediaKeyMessageEvent`](MediaKeyMessageEvent.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10183

##### Parameters

###### eventInterface

`"MediaKeyMessageEvent"`

##### Returns

[`MediaKeyMessageEvent`](MediaKeyMessageEvent.md)

#### Call Signature

> **createEvent**(`eventInterface`): [`MediaQueryListEvent`](MediaQueryListEvent.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10184

##### Parameters

###### eventInterface

`"MediaQueryListEvent"`

##### Returns

[`MediaQueryListEvent`](MediaQueryListEvent.md)

#### Call Signature

> **createEvent**(`eventInterface`): [`MediaStreamTrackEvent`](MediaStreamTrackEvent.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10185

##### Parameters

###### eventInterface

`"MediaStreamTrackEvent"`

##### Returns

[`MediaStreamTrackEvent`](MediaStreamTrackEvent.md)

#### Call Signature

> **createEvent**(`eventInterface`): `MessageEvent`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10186

##### Parameters

###### eventInterface

`"MessageEvent"`

##### Returns

`MessageEvent`

#### Call Signature

> **createEvent**(`eventInterface`): [`MouseEvent`](MouseEvent.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10187

##### Parameters

###### eventInterface

`"MouseEvent"`

##### Returns

[`MouseEvent`](MouseEvent.md)

#### Call Signature

> **createEvent**(`eventInterface`): [`MouseEvent`](MouseEvent.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10188

##### Parameters

###### eventInterface

`"MouseEvents"`

##### Returns

[`MouseEvent`](MouseEvent.md)

#### Call Signature

> **createEvent**(`eventInterface`): [`OfflineAudioCompletionEvent`](OfflineAudioCompletionEvent.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10189

##### Parameters

###### eventInterface

`"OfflineAudioCompletionEvent"`

##### Returns

[`OfflineAudioCompletionEvent`](OfflineAudioCompletionEvent.md)

#### Call Signature

> **createEvent**(`eventInterface`): [`PageRevealEvent`](PageRevealEvent.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10190

##### Parameters

###### eventInterface

`"PageRevealEvent"`

##### Returns

[`PageRevealEvent`](PageRevealEvent.md)

#### Call Signature

> **createEvent**(`eventInterface`): [`PageSwapEvent`](PageSwapEvent.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10191

##### Parameters

###### eventInterface

`"PageSwapEvent"`

##### Returns

[`PageSwapEvent`](PageSwapEvent.md)

#### Call Signature

> **createEvent**(`eventInterface`): [`PageTransitionEvent`](PageTransitionEvent.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10192

##### Parameters

###### eventInterface

`"PageTransitionEvent"`

##### Returns

[`PageTransitionEvent`](PageTransitionEvent.md)

#### Call Signature

> **createEvent**(`eventInterface`): [`PaymentMethodChangeEvent`](PaymentMethodChangeEvent.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10193

##### Parameters

###### eventInterface

`"PaymentMethodChangeEvent"`

##### Returns

[`PaymentMethodChangeEvent`](PaymentMethodChangeEvent.md)

#### Call Signature

> **createEvent**(`eventInterface`): [`PaymentRequestUpdateEvent`](PaymentRequestUpdateEvent.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10194

##### Parameters

###### eventInterface

`"PaymentRequestUpdateEvent"`

##### Returns

[`PaymentRequestUpdateEvent`](PaymentRequestUpdateEvent.md)

#### Call Signature

> **createEvent**(`eventInterface`): [`PictureInPictureEvent`](PictureInPictureEvent.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10195

##### Parameters

###### eventInterface

`"PictureInPictureEvent"`

##### Returns

[`PictureInPictureEvent`](PictureInPictureEvent.md)

#### Call Signature

> **createEvent**(`eventInterface`): [`PointerEvent`](PointerEvent.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10196

##### Parameters

###### eventInterface

`"PointerEvent"`

##### Returns

[`PointerEvent`](PointerEvent.md)

#### Call Signature

> **createEvent**(`eventInterface`): [`PopStateEvent`](PopStateEvent.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10197

##### Parameters

###### eventInterface

`"PopStateEvent"`

##### Returns

[`PopStateEvent`](PopStateEvent.md)

#### Call Signature

> **createEvent**(`eventInterface`): [`ProgressEvent`](ProgressEvent.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10198

##### Parameters

###### eventInterface

`"ProgressEvent"`

##### Returns

[`ProgressEvent`](ProgressEvent.md)

#### Call Signature

> **createEvent**(`eventInterface`): [`PromiseRejectionEvent`](PromiseRejectionEvent.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10199

##### Parameters

###### eventInterface

`"PromiseRejectionEvent"`

##### Returns

[`PromiseRejectionEvent`](PromiseRejectionEvent.md)

#### Call Signature

> **createEvent**(`eventInterface`): [`RTCDTMFToneChangeEvent`](RTCDTMFToneChangeEvent.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10200

##### Parameters

###### eventInterface

`"RTCDTMFToneChangeEvent"`

##### Returns

[`RTCDTMFToneChangeEvent`](RTCDTMFToneChangeEvent.md)

#### Call Signature

> **createEvent**(`eventInterface`): [`RTCDataChannelEvent`](RTCDataChannelEvent.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10201

##### Parameters

###### eventInterface

`"RTCDataChannelEvent"`

##### Returns

[`RTCDataChannelEvent`](RTCDataChannelEvent.md)

#### Call Signature

> **createEvent**(`eventInterface`): [`RTCErrorEvent`](RTCErrorEvent.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10202

##### Parameters

###### eventInterface

`"RTCErrorEvent"`

##### Returns

[`RTCErrorEvent`](RTCErrorEvent.md)

#### Call Signature

> **createEvent**(`eventInterface`): [`RTCPeerConnectionIceErrorEvent`](RTCPeerConnectionIceErrorEvent.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10203

##### Parameters

###### eventInterface

`"RTCPeerConnectionIceErrorEvent"`

##### Returns

[`RTCPeerConnectionIceErrorEvent`](RTCPeerConnectionIceErrorEvent.md)

#### Call Signature

> **createEvent**(`eventInterface`): [`RTCPeerConnectionIceEvent`](RTCPeerConnectionIceEvent.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10204

##### Parameters

###### eventInterface

`"RTCPeerConnectionIceEvent"`

##### Returns

[`RTCPeerConnectionIceEvent`](RTCPeerConnectionIceEvent.md)

#### Call Signature

> **createEvent**(`eventInterface`): [`RTCTrackEvent`](RTCTrackEvent.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10205

##### Parameters

###### eventInterface

`"RTCTrackEvent"`

##### Returns

[`RTCTrackEvent`](RTCTrackEvent.md)

#### Call Signature

> **createEvent**(`eventInterface`): [`SecurityPolicyViolationEvent`](SecurityPolicyViolationEvent.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10206

##### Parameters

###### eventInterface

`"SecurityPolicyViolationEvent"`

##### Returns

[`SecurityPolicyViolationEvent`](SecurityPolicyViolationEvent.md)

#### Call Signature

> **createEvent**(`eventInterface`): [`SpeechSynthesisErrorEvent`](SpeechSynthesisErrorEvent.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10207

##### Parameters

###### eventInterface

`"SpeechSynthesisErrorEvent"`

##### Returns

[`SpeechSynthesisErrorEvent`](SpeechSynthesisErrorEvent.md)

#### Call Signature

> **createEvent**(`eventInterface`): [`SpeechSynthesisEvent`](SpeechSynthesisEvent.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10208

##### Parameters

###### eventInterface

`"SpeechSynthesisEvent"`

##### Returns

[`SpeechSynthesisEvent`](SpeechSynthesisEvent.md)

#### Call Signature

> **createEvent**(`eventInterface`): [`StorageEvent`](StorageEvent.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10209

##### Parameters

###### eventInterface

`"StorageEvent"`

##### Returns

[`StorageEvent`](StorageEvent.md)

#### Call Signature

> **createEvent**(`eventInterface`): [`SubmitEvent`](SubmitEvent.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10210

##### Parameters

###### eventInterface

`"SubmitEvent"`

##### Returns

[`SubmitEvent`](SubmitEvent.md)

#### Call Signature

> **createEvent**(`eventInterface`): [`TextEvent`](TextEvent.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10211

##### Parameters

###### eventInterface

`"TextEvent"`

##### Returns

[`TextEvent`](TextEvent.md)

#### Call Signature

> **createEvent**(`eventInterface`): [`ToggleEvent`](ToggleEvent.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10212

##### Parameters

###### eventInterface

`"ToggleEvent"`

##### Returns

[`ToggleEvent`](ToggleEvent.md)

#### Call Signature

> **createEvent**(`eventInterface`): [`TouchEvent`](TouchEvent.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10213

##### Parameters

###### eventInterface

`"TouchEvent"`

##### Returns

[`TouchEvent`](TouchEvent.md)

#### Call Signature

> **createEvent**(`eventInterface`): [`TrackEvent`](TrackEvent.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10214

##### Parameters

###### eventInterface

`"TrackEvent"`

##### Returns

[`TrackEvent`](TrackEvent.md)

#### Call Signature

> **createEvent**(`eventInterface`): [`TransitionEvent`](TransitionEvent.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10215

##### Parameters

###### eventInterface

`"TransitionEvent"`

##### Returns

[`TransitionEvent`](TransitionEvent.md)

#### Call Signature

> **createEvent**(`eventInterface`): [`UIEvent`](UIEvent.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10216

##### Parameters

###### eventInterface

`"UIEvent"`

##### Returns

[`UIEvent`](UIEvent.md)

#### Call Signature

> **createEvent**(`eventInterface`): [`UIEvent`](UIEvent.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10217

##### Parameters

###### eventInterface

`"UIEvents"`

##### Returns

[`UIEvent`](UIEvent.md)

#### Call Signature

> **createEvent**(`eventInterface`): [`WebGLContextEvent`](WebGLContextEvent.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10218

##### Parameters

###### eventInterface

`"WebGLContextEvent"`

##### Returns

[`WebGLContextEvent`](WebGLContextEvent.md)

#### Call Signature

> **createEvent**(`eventInterface`): [`WheelEvent`](WheelEvent.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10219

##### Parameters

###### eventInterface

`"WheelEvent"`

##### Returns

[`WheelEvent`](WheelEvent.md)

#### Call Signature

> **createEvent**(`eventInterface`): [`Event`](Event.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10220

##### Parameters

###### eventInterface

`string`

##### Returns

[`Event`](Event.md)

***

### createExpression()

> **createExpression**(`expression`, `resolver?`): [`XPathExpression`](XPathExpression.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:37349

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/createExpression)

#### Parameters

##### expression

`string`

##### resolver?

[`XPathNSResolver`](../type-aliases/XPathNSResolver.md) | `null`

#### Returns

[`XPathExpression`](XPathExpression.md)

#### Inherited from

[`XPathEvaluatorBase`](XPathEvaluatorBase.md).[`createExpression`](XPathEvaluatorBase.md#createexpression)

***

### createNodeIterator()

> **createNodeIterator**(`root`, `whatToShow?`, `filter?`): [`NodeIterator`](NodeIterator.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10226

The **`Document.createNodeIterator()`** method returns a new `NodeIterator` object.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/createNodeIterator)

#### Parameters

##### root

[`Node`](Node.md)

##### whatToShow?

`number`

##### filter?

[`NodeFilter`](../type-aliases/NodeFilter.md) | `null`

#### Returns

[`NodeIterator`](NodeIterator.md)

***

### ~~createNSResolver()~~

> **createNSResolver**(`nodeResolver`): [`Node`](Node.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:37355

#### Parameters

##### nodeResolver

[`Node`](Node.md)

#### Returns

[`Node`](Node.md)

#### Deprecated

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/createNSResolver)

#### Inherited from

[`XPathEvaluatorBase`](XPathEvaluatorBase.md).[`createNSResolver`](XPathEvaluatorBase.md#creatensresolver)

***

### createProcessingInstruction()

> **createProcessingInstruction**(`target`, `data`): [`ProcessingInstruction`](ProcessingInstruction.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10232

`createProcessingInstruction()` generates a new processing instruction node and returns it.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/createProcessingInstruction)

#### Parameters

##### target

`string`

##### data

`string`

#### Returns

[`ProcessingInstruction`](ProcessingInstruction.md)

***

### createRange()

> **createRange**(): [`Range`](Range.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10238

The **`Document.createRange()`** method returns a new ```js-nolint createRange() ``` None.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/createRange)

#### Returns

[`Range`](Range.md)

***

### createTextNode()

> **createTextNode**(`data`): [`Text`](Text.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10244

Creates a new Text node.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/createTextNode)

#### Parameters

##### data

`string`

#### Returns

[`Text`](Text.md)

***

### createTreeWalker()

> **createTreeWalker**(`root`, `whatToShow?`, `filter?`): [`TreeWalker`](TreeWalker.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10250

The **`Document.createTreeWalker()`** creator method returns a newly created TreeWalker object.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/createTreeWalker)

#### Parameters

##### root

[`Node`](Node.md)

##### whatToShow?

`number`

##### filter?

[`NodeFilter`](../type-aliases/NodeFilter.md) | `null`

#### Returns

[`TreeWalker`](TreeWalker.md)

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

### evaluate()

> **evaluate**(`expression`, `contextNode`, `resolver?`, `type?`, `result?`): [`XPathResult`](XPathResult.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:37357

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/evaluate)

#### Parameters

##### expression

`string`

##### contextNode

[`Node`](Node.md)

##### resolver?

[`XPathNSResolver`](../type-aliases/XPathNSResolver.md) | `null`

##### type?

`number`

##### result?

[`XPathResult`](XPathResult.md) | `null`

#### Returns

[`XPathResult`](XPathResult.md)

#### Inherited from

[`XPathEvaluatorBase`](XPathEvaluatorBase.md).[`evaluate`](XPathEvaluatorBase.md#evaluate)

***

### ~~execCommand()~~

> **execCommand**(`commandId`, `showUI?`, `value?`): `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10257

The **`execCommand`** method implements multiple different commands.

#### Parameters

##### commandId

`string`

##### showUI?

`boolean`

##### value?

`string`

#### Returns

`boolean`

#### Deprecated

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/execCommand)

***

### exitFullscreen()

> **exitFullscreen**(): `Promise`\<`void`\>

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10263

The Document method **`exitFullscreen()`** requests that the element on this document which is currently being presented in fullscreen mode be taken out of fullscreen mode, restoring the previous state of the screen.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/exitFullscreen)

#### Returns

`Promise`\<`void`\>

***

### exitPictureInPicture()

> **exitPictureInPicture**(): `Promise`\<`void`\>

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10269

The **`exitPictureInPicture()`** method of the Document interface requests that a video contained in this document, which is currently floating, be taken out of picture-in-picture mode, restoring the previous state of the screen.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/exitPictureInPicture)

#### Returns

`Promise`\<`void`\>

***

### exitPointerLock()

> **exitPointerLock**(): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10275

The **`exitPointerLock()`** method of the Document interface asynchronously releases a pointer lock previously requested through Element.requestPointerLock.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/exitPointerLock)

#### Returns

`void`

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

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10276

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

### getElementsByClassName()

> **getElementsByClassName**(`classNames`): `HTMLCollectionOf`\<[`Element`](Element.md)\>

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10282

The **`getElementsByClassName`** method of of all child elements which have all of the given class name(s).

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/getElementsByClassName)

#### Parameters

##### classNames

`string`

#### Returns

`HTMLCollectionOf`\<[`Element`](Element.md)\>

***

### getElementsByName()

> **getElementsByName**(`elementName`): `NodeListOf`\<[`HTMLElement`](HTMLElement.md)\>

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10288

The **`getElementsByName()`** method of the Document object returns a NodeList Collection of elements with a given `name` attribute in the document.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/getElementsByName)

#### Parameters

##### elementName

`string`

#### Returns

`NodeListOf`\<[`HTMLElement`](HTMLElement.md)\>

***

### getElementsByTagName()

#### Call Signature

> **getElementsByTagName**\<`K`\>(`qualifiedName`): `HTMLCollectionOf`\<[`HTMLElementTagNameMap`](HTMLElementTagNameMap.md)\[`K`\]\>

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10294

The **`getElementsByTagName`** method of The complete document is searched, including the root node.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/getElementsByTagName)

##### Type Parameters

###### K

`K` *extends* keyof [`HTMLElementTagNameMap`](HTMLElementTagNameMap.md)

##### Parameters

###### qualifiedName

`K`

##### Returns

`HTMLCollectionOf`\<[`HTMLElementTagNameMap`](HTMLElementTagNameMap.md)\[`K`\]\>

#### Call Signature

> **getElementsByTagName**\<`K`\>(`qualifiedName`): `HTMLCollectionOf`\<[`SVGElementTagNameMap`](SVGElementTagNameMap.md)\[`K`\]\>

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10295

##### Type Parameters

###### K

`K` *extends* keyof [`SVGElementTagNameMap`](SVGElementTagNameMap.md)

##### Parameters

###### qualifiedName

`K`

##### Returns

`HTMLCollectionOf`\<[`SVGElementTagNameMap`](SVGElementTagNameMap.md)\[`K`\]\>

#### Call Signature

> **getElementsByTagName**\<`K`\>(`qualifiedName`): `HTMLCollectionOf`\<[`MathMLElementTagNameMap`](MathMLElementTagNameMap.md)\[`K`\]\>

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10296

##### Type Parameters

###### K

`K` *extends* keyof [`MathMLElementTagNameMap`](MathMLElementTagNameMap.md)

##### Parameters

###### qualifiedName

`K`

##### Returns

`HTMLCollectionOf`\<[`MathMLElementTagNameMap`](MathMLElementTagNameMap.md)\[`K`\]\>

#### Call Signature

> **getElementsByTagName**\<`K`\>(`qualifiedName`): `HTMLCollectionOf`\<[`HTMLElementDeprecatedTagNameMap`](HTMLElementDeprecatedTagNameMap.md)\[`K`\]\>

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10298

##### Type Parameters

###### K

`K` *extends* keyof [`HTMLElementDeprecatedTagNameMap`](HTMLElementDeprecatedTagNameMap.md)

##### Parameters

###### qualifiedName

`K`

##### Returns

`HTMLCollectionOf`\<[`HTMLElementDeprecatedTagNameMap`](HTMLElementDeprecatedTagNameMap.md)\[`K`\]\>

##### Deprecated

#### Call Signature

> **getElementsByTagName**(`qualifiedName`): `HTMLCollectionOf`\<[`Element`](Element.md)\>

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10299

##### Parameters

###### qualifiedName

`string`

##### Returns

`HTMLCollectionOf`\<[`Element`](Element.md)\>

***

### getElementsByTagNameNS()

#### Call Signature

> **getElementsByTagNameNS**(`namespaceURI`, `localName`): `HTMLCollectionOf`\<[`HTMLElement`](HTMLElement.md)\>

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10305

Returns a list of elements with the given tag name belonging to the given namespace.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/getElementsByTagNameNS)

##### Parameters

###### namespaceURI

`"http://www.w3.org/1999/xhtml"`

###### localName

`string`

##### Returns

`HTMLCollectionOf`\<[`HTMLElement`](HTMLElement.md)\>

#### Call Signature

> **getElementsByTagNameNS**(`namespaceURI`, `localName`): `HTMLCollectionOf`\<[`SVGElement`](SVGElement.md)\>

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10306

##### Parameters

###### namespaceURI

`"http://www.w3.org/2000/svg"`

###### localName

`string`

##### Returns

`HTMLCollectionOf`\<[`SVGElement`](SVGElement.md)\>

#### Call Signature

> **getElementsByTagNameNS**(`namespaceURI`, `localName`): `HTMLCollectionOf`\<[`MathMLElement`](MathMLElement.md)\>

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10307

##### Parameters

###### namespaceURI

`"http://www.w3.org/1998/Math/MathML"`

###### localName

`string`

##### Returns

`HTMLCollectionOf`\<[`MathMLElement`](MathMLElement.md)\>

#### Call Signature

> **getElementsByTagNameNS**(`namespace`, `localName`): `HTMLCollectionOf`\<[`Element`](Element.md)\>

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10308

##### Parameters

###### namespace

`string` | `null`

###### localName

`string`

##### Returns

`HTMLCollectionOf`\<[`Element`](Element.md)\>

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

### getSelection()

> **getSelection**(): [`Selection`](Selection.md) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10314

The **`getSelection()`** method of the Document interface returns the Selection object associated with this document, representing the range of text selected by the user, or the current position of the caret.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/getSelection)

#### Returns

[`Selection`](Selection.md) \| `null`

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

### hasFocus()

> **hasFocus**(): `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10320

The **`hasFocus()`** method of the Document interface returns a boolean value indicating whether the document or any element inside the document has focus.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/hasFocus)

#### Returns

`boolean`

***

### hasStorageAccess()

> **hasStorageAccess**(): `Promise`\<`boolean`\>

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10326

The **`hasStorageAccess()`** method of the Document interface returns a Promise that resolves with a boolean value indicating whether the document has access to third-party, unpartitioned cookies.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/hasStorageAccess)

#### Returns

`Promise`\<`boolean`\>

***

### importNode()

> **importNode**\<`T`\>(`node`, `options?`): `T`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10332

The Document object's **`importNode()`** method creates a copy of a inserted into the current document later.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/importNode)

#### Type Parameters

##### T

`T` *extends* [`Node`](Node.md)

#### Parameters

##### node

`T`

##### options?

`boolean` | [`ImportNodeOptions`](ImportNodeOptions.md)

#### Returns

`T`

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

### open()

#### Call Signature

> **open**(`unused1?`, `unused2?`): `Document`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10338

The **`Document.open()`** method opens a document for This does come with some side effects.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/open)

##### Parameters

###### unused1?

`string`

###### unused2?

`string`

##### Returns

`Document`

#### Call Signature

> **open**(`url`, `name`, `features`): [`Window`](Window.md) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10339

##### Parameters

###### url

`string` | [`URL`](URL.md)

###### name

`string`

###### features

`string`

##### Returns

[`Window`](Window.md) \| `null`

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

### ~~queryCommandEnabled()~~

> **queryCommandEnabled**(`commandId`): `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10346

The **`Document.queryCommandEnabled()`** method reports whether or not the specified editor command is enabled by the browser.

#### Parameters

##### commandId

`string`

#### Returns

`boolean`

#### Deprecated

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/queryCommandEnabled)

***

### ~~queryCommandIndeterm()~~

> **queryCommandIndeterm**(`commandId`): `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10348

#### Parameters

##### commandId

`string`

#### Returns

`boolean`

#### Deprecated

***

### ~~queryCommandState()~~

> **queryCommandState**(`commandId`): `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10355

The **`queryCommandState()`** method will tell you if the current selection has a certain Document.execCommand() command applied.

#### Parameters

##### commandId

`string`

#### Returns

`boolean`

#### Deprecated

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/queryCommandState)

***

### ~~queryCommandSupported()~~

> **queryCommandSupported**(`commandId`): `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10362

The **`Document.queryCommandSupported()`** method reports whether or not the specified editor command is supported by the browser.

#### Parameters

##### commandId

`string`

#### Returns

`boolean`

#### Deprecated

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/queryCommandSupported)

***

### ~~queryCommandValue()~~

> **queryCommandValue**(`commandId`): `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10364

#### Parameters

##### commandId

`string`

#### Returns

`string`

#### Deprecated

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

### ~~releaseEvents()~~

> **releaseEvents**(): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10366

#### Returns

`void`

#### Deprecated

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

#### Call Signature

> **removeEventListener**\<`K`\>(`type`, `listener`, `options?`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10396

The **`removeEventListener()`** method of the EventTarget interface removes an event listener previously registered with EventTarget.addEventListener() from the target.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/removeEventListener)

##### Type Parameters

###### K

`K` *extends* keyof [`DocumentEventMap`](DocumentEventMap.md)

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

[`Node`](Node.md).[`removeEventListener`](Node.md#removeeventlistener)

#### Call Signature

> **removeEventListener**(`type`, `listener`, `options?`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10397

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

[`GlobalEventHandlers`](GlobalEventHandlers.md).[`removeEventListener`](GlobalEventHandlers.md#removeeventlistener)

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

***

### requestStorageAccess()

> **requestStorageAccess**(): `Promise`\<`void`\>

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10372

The **`requestStorageAccess()`** method of the Document interface allows content loaded in a third-party context (i.e., embedded in an iframe) to request access to third-party cookies and unpartitioned state.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/requestStorageAccess)

#### Returns

`Promise`\<`void`\>

***

### startViewTransition()

> **startViewTransition**(`callbackOptions?`): [`ViewTransition`](ViewTransition.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10378

The **`startViewTransition()`** method of the Document interface starts a new same-document (SPA) view transition and returns a ViewTransition object to represent it.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/startViewTransition)

#### Parameters

##### callbackOptions?

[`ViewTransitionUpdateCallback`](ViewTransitionUpdateCallback.md) | [`StartViewTransitionOptions`](StartViewTransitionOptions.md)

#### Returns

[`ViewTransition`](ViewTransition.md)

***

### ~~write()~~

> **write**(...`text`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10385

The **`write()`** method of the Document interface writes text in one or more TrustedHTML or string parameters to a document stream opened by document.open().

#### Parameters

##### text

...`string`[]

#### Returns

`void`

#### Deprecated

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/write)

***

### writeln()

> **writeln**(...`text`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:10391

The **`writeln()`** method of the Document interface writes text in one or more TrustedHTML or string parameters to a document stream opened by document.open(), followed by a newline character.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/writeln)

#### Parameters

##### text

...`string`[]

#### Returns

`void`
