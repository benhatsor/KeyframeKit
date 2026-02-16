[**KeyframeKit.js**](../../README.md)

***

[KeyframeKit.js](../../globals.md) / [\<internal\>](../README.md) / StylePropertyMap

# Interface: StylePropertyMap

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:31470

The **`StylePropertyMap`** interface of the CSS Typed Object Model API provides a representation of a CSS declaration block that is an alternative to CSSStyleDeclaration.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/StylePropertyMap)

## Extends

- `StylePropertyMapReadOnly`

## Properties

### size

> `readonly` **size**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:31513

The **`size`** read-only property of the containing the size of the `StylePropertyMapReadOnly` object.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/StylePropertyMapReadOnly/size)

#### Inherited from

`StylePropertyMapReadOnly.size`

## Methods

### \[iterator\]()

> **\[iterator\]**(): [`StylePropertyMapReadOnlyIterator`](StylePropertyMapReadOnlyIterator.md)\<\[`string`, [`Iterable`](Iterable.md)\<[`CSSStyleValue`](CSSStyleValue.md), `any`, `any`\>\]\>

Defined in: node\_modules/typescript/lib/lib.dom.iterable.d.ts:361

#### Returns

[`StylePropertyMapReadOnlyIterator`](StylePropertyMapReadOnlyIterator.md)\<\[`string`, [`Iterable`](Iterable.md)\<[`CSSStyleValue`](CSSStyleValue.md), `any`, `any`\>\]\>

#### Inherited from

`StylePropertyMapReadOnly.[iterator]`

***

### append()

> **append**(`property`, ...`values`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:31476

The **`append()`** method of the `StylePropertyMap` with the given property.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/StylePropertyMap/append)

#### Parameters

##### property

`string`

##### values

...(`string` \| [`CSSStyleValue`](CSSStyleValue.md))[]

#### Returns

`void`

***

### clear()

> **clear**(): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:31482

The **`clear()`** method of the StylePropertyMap interface removes all declarations in the `StylePropertyMap`.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/StylePropertyMap/clear)

#### Returns

`void`

***

### delete()

> **delete**(`property`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:31488

The **`delete()`** method of the property.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/StylePropertyMap/delete)

#### Parameters

##### property

`string`

#### Returns

`void`

***

### entries()

> **entries**(): [`StylePropertyMapReadOnlyIterator`](StylePropertyMapReadOnlyIterator.md)\<\[`string`, [`Iterable`](Iterable.md)\<[`CSSStyleValue`](CSSStyleValue.md), `any`, `any`\>\]\>

Defined in: node\_modules/typescript/lib/lib.dom.iterable.d.ts:362

#### Returns

[`StylePropertyMapReadOnlyIterator`](StylePropertyMapReadOnlyIterator.md)\<\[`string`, [`Iterable`](Iterable.md)\<[`CSSStyleValue`](CSSStyleValue.md), `any`, `any`\>\]\>

#### Inherited from

`StylePropertyMapReadOnly.entries`

***

### forEach()

> **forEach**(`callbackfn`, `thisArg?`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:31532

#### Parameters

##### callbackfn

(`value`, `key`, `parent`) => `void`

##### thisArg?

`any`

#### Returns

`void`

#### Inherited from

`StylePropertyMapReadOnly.forEach`

***

### get()

> **get**(`property`): [`CSSStyleValue`](CSSStyleValue.md) \| `undefined`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:31519

The **`get()`** method of the object for the first value of the specified property.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/StylePropertyMapReadOnly/get)

#### Parameters

##### property

`string`

#### Returns

[`CSSStyleValue`](CSSStyleValue.md) \| `undefined`

#### Inherited from

`StylePropertyMapReadOnly.get`

***

### getAll()

> **getAll**(`property`): [`CSSStyleValue`](CSSStyleValue.md)[]

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:31525

The **`getAll()`** method of the ```js-nolint getAll(property) ``` - `property` - : The name of the property to retrieve all values of.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/StylePropertyMapReadOnly/getAll)

#### Parameters

##### property

`string`

#### Returns

[`CSSStyleValue`](CSSStyleValue.md)[]

#### Inherited from

`StylePropertyMapReadOnly.getAll`

***

### has()

> **has**(`property`): `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:31531

The **`has()`** method of the property is in the `StylePropertyMapReadOnly` object.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/StylePropertyMapReadOnly/has)

#### Parameters

##### property

`string`

#### Returns

`boolean`

#### Inherited from

`StylePropertyMapReadOnly.has`

***

### keys()

> **keys**(): [`StylePropertyMapReadOnlyIterator`](StylePropertyMapReadOnlyIterator.md)\<`string`\>

Defined in: node\_modules/typescript/lib/lib.dom.iterable.d.ts:363

#### Returns

[`StylePropertyMapReadOnlyIterator`](StylePropertyMapReadOnlyIterator.md)\<`string`\>

#### Inherited from

`StylePropertyMapReadOnly.keys`

***

### set()

> **set**(`property`, ...`values`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:31494

The **`set()`** method of the StylePropertyMap interface changes the CSS declaration with the given property.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/StylePropertyMap/set)

#### Parameters

##### property

`string`

##### values

...(`string` \| [`CSSStyleValue`](CSSStyleValue.md))[]

#### Returns

`void`

***

### values()

> **values**(): [`StylePropertyMapReadOnlyIterator`](StylePropertyMapReadOnlyIterator.md)\<[`Iterable`](Iterable.md)\<[`CSSStyleValue`](CSSStyleValue.md), `any`, `any`\>\>

Defined in: node\_modules/typescript/lib/lib.dom.iterable.d.ts:364

#### Returns

[`StylePropertyMapReadOnlyIterator`](StylePropertyMapReadOnlyIterator.md)\<[`Iterable`](Iterable.md)\<[`CSSStyleValue`](CSSStyleValue.md), `any`, `any`\>\>

#### Inherited from

`StylePropertyMapReadOnly.values`
