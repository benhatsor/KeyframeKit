[**KeyframeKit.js**](../../README.md)

***

[KeyframeKit.js](../../globals.md) / [\<internal\>](../README.md) / DataTransfer

# Interface: DataTransfer

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:9444

The **`DataTransfer`** object is used to hold any data transferred between contexts, such as a drag and drop operation, or clipboard read/write.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/DataTransfer)

## Properties

### dropEffect

> **dropEffect**: `"none"` \| `"link"` \| `"copy"` \| `"move"`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:9450

The **`DataTransfer.dropEffect`** property controls the feedback (typically visual) the user is given during a drag and drop operation.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/DataTransfer/dropEffect)

***

### effectAllowed

> **effectAllowed**: `"none"` \| `"link"` \| `"copy"` \| `"move"` \| `"copyLink"` \| `"copyMove"` \| `"linkMove"` \| `"all"` \| `"uninitialized"`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:9456

The **`DataTransfer.effectAllowed`** property specifies the effect that is allowed for a drag operation.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/DataTransfer/effectAllowed)

***

### files

> `readonly` **files**: `FileList`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:9462

The **`files`** read-only property of `DataTransfer` objects is a list of the files in the drag operation.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/DataTransfer/files)

***

### items

> `readonly` **items**: `DataTransferItemList`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:9468

The read-only `items` property of the DataTransfer interface is a A DataTransferItemList object containing DataTransferItem objects representing the items being dragged in a drag operation, one list item for each object being dragged.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/DataTransfer/items)

***

### types

> `readonly` **types**: readonly `string`[]

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:9474

The **`DataTransfer.types`** read-only property returns the available types that exist in the DataTransfer.items.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/DataTransfer/types)

## Methods

### clearData()

> **clearData**(`format?`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:9480

The **`DataTransfer.clearData()`** method removes the drag operation's drag data for the given type.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/DataTransfer/clearData)

#### Parameters

##### format?

`string`

#### Returns

`void`

***

### getData()

> **getData**(`format`): `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:9486

The **`DataTransfer.getData()`** method retrieves drag data (as a string) for the specified type.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/DataTransfer/getData)

#### Parameters

##### format

`string`

#### Returns

`string`

***

### setData()

> **setData**(`format`, `data`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:9492

The **`DataTransfer.setData()`** method sets the drag operation's drag data to the specified data and type.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/DataTransfer/setData)

#### Parameters

##### format

`string`

##### data

`string`

#### Returns

`void`

***

### setDragImage()

> **setDragImage**(`image`, `x`, `y`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:9498

When a drag occurs, a translucent image is generated from the drag target (the element the HTMLElement/dragstart_event event is fired at), and follows the mouse pointer during the drag.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/DataTransfer/setDragImage)

#### Parameters

##### image

[`Element`](Element.md)

##### x

`number`

##### y

`number`

#### Returns

`void`
