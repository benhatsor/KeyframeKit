[**KeyframeKit.js**](../../README.md)

***

[KeyframeKit.js](../../globals.md) / [\<internal\>](../README.md) / DOMImplementation

# Interface: DOMImplementation

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:8665

The **`DOMImplementation`** interface represents an object providing methods which are not dependent on any particular document.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMImplementation)

## Methods

### createDocument()

> **createDocument**(`namespace`, `qualifiedName`, `doctype?`): [`XMLDocument`](XMLDocument.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:8671

The **`DOMImplementation.createDocument()`** method creates and returns an XMLDocument.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMImplementation/createDocument)

#### Parameters

##### namespace

`string` | `null`

##### qualifiedName

`string` | `null`

##### doctype?

[`DocumentType`](DocumentType.md) | `null`

#### Returns

[`XMLDocument`](XMLDocument.md)

***

### createDocumentType()

> **createDocumentType**(`name`, `publicId`, `systemId`): [`DocumentType`](DocumentType.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:8677

The **`DOMImplementation.createDocumentType()`** method returns a DocumentType object which can either be used with into the document via methods like Node.insertBefore() or ```js-nolint createDocumentType(qualifiedNameStr, publicId, systemId) ``` - `qualifiedNameStr` - : A string containing the qualified name, like `svg:svg`.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMImplementation/createDocumentType)

#### Parameters

##### name

`string`

##### publicId

`string`

##### systemId

`string`

#### Returns

[`DocumentType`](DocumentType.md)

***

### createHTMLDocument()

> **createHTMLDocument**(`title?`): [`Document`](Document.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:8683

The **`DOMImplementation.createHTMLDocument()`** method creates a new HTML Document.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMImplementation/createHTMLDocument)

#### Parameters

##### title?

`string`

#### Returns

[`Document`](Document.md)

***

### ~~hasFeature()~~

> **hasFeature**(...`args`): `true`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:8690

The **`DOMImplementation.hasFeature()`** method returns a boolean flag indicating if a given feature is supported.

#### Parameters

##### args

...`any`[]

#### Returns

`true`

#### Deprecated

[MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMImplementation/hasFeature)
