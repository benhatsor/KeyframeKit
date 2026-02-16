[**KeyframeKit.js**](../../README.md)

***

[KeyframeKit.js](../../globals.md) / [\<internal\>](../README.md) / CustomElementRegistry

# Interface: CustomElementRegistry

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:8500

The **`CustomElementRegistry`** interface provides methods for registering custom elements and querying registered elements.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/CustomElementRegistry)

## Methods

### define()

> **define**(`name`, `constructor`, `options?`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:8506

The **`define()`** method of the CustomElementRegistry interface adds a definition for a custom element to the custom element registry, mapping its name to the constructor which will be used to create it.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/CustomElementRegistry/define)

#### Parameters

##### name

`string`

##### constructor

[`CustomElementConstructor`](CustomElementConstructor.md)

##### options?

[`ElementDefinitionOptions`](ElementDefinitionOptions.md)

#### Returns

`void`

***

### get()

> **get**(`name`): [`CustomElementConstructor`](CustomElementConstructor.md) \| `undefined`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:8512

The **`get()`** method of the previously-defined custom element.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/CustomElementRegistry/get)

#### Parameters

##### name

`string`

#### Returns

[`CustomElementConstructor`](CustomElementConstructor.md) \| `undefined`

***

### getName()

> **getName**(`constructor`): `string` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:8518

The **`getName()`** method of the previously-defined custom element.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/CustomElementRegistry/getName)

#### Parameters

##### constructor

[`CustomElementConstructor`](CustomElementConstructor.md)

#### Returns

`string` \| `null`

***

### upgrade()

> **upgrade**(`root`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:8524

The **`upgrade()`** method of the elements in a Node subtree, even before they are connected to the main document.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/CustomElementRegistry/upgrade)

#### Parameters

##### root

[`Node`](Node.md)

#### Returns

`void`

***

### whenDefined()

> **whenDefined**(`name`): `Promise`\<[`CustomElementConstructor`](CustomElementConstructor.md)\>

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:8530

The **`whenDefined()`** method of the resolves when the named element is defined.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/CustomElementRegistry/whenDefined)

#### Parameters

##### name

`string`

#### Returns

`Promise`\<[`CustomElementConstructor`](CustomElementConstructor.md)\>
