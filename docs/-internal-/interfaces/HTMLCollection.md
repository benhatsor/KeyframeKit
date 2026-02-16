[**KeyframeKit.js**](../../README.md)

***

[KeyframeKit.js](../../globals.md) / [\<internal\>](../README.md) / HTMLCollection

# Interface: HTMLCollection

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:13460

## Extends

- `HTMLCollectionBase`

## Indexable

\[`index`: `number`\]: [`Element`](Element.md)

## Properties

### length

> `readonly` **length**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:13450

The **`HTMLCollection.length`** property returns the number of items in a HTMLCollection.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLCollection/length)

#### Inherited from

`HTMLCollectionBase.length`

## Methods

### \[iterator\]()

> **\[iterator\]**(): [`ArrayIterator`](ArrayIterator.md)\<[`Element`](Element.md)\>

Defined in: node\_modules/typescript/lib/lib.dom.iterable.d.ts:168

#### Returns

[`ArrayIterator`](ArrayIterator.md)\<[`Element`](Element.md)\>

#### Inherited from

`HTMLCollectionBase.[iterator]`

***

### item()

> **item**(`index`): [`Element`](Element.md) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:13456

The HTMLCollection method `item()` returns the element located at the specified offset into the collection.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLCollection/item)

#### Parameters

##### index

`number`

#### Returns

[`Element`](Element.md) \| `null`

#### Inherited from

`HTMLCollectionBase.item`

***

### namedItem()

> **namedItem**(`name`): [`Element`](Element.md) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:13466

The **`namedItem()`** method of the HTMLCollection interface returns the first Element in the collection whose `id` or `name` attribute match the specified name, or `null` if no element matches.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLCollection/namedItem)

#### Parameters

##### name

`string`

#### Returns

[`Element`](Element.md) \| `null`
