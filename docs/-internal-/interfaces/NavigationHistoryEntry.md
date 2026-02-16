[**KeyframeKit.js**](../../README.md)

***

[KeyframeKit.js](../../globals.md) / [\<internal\>](../README.md) / NavigationHistoryEntry

# Interface: NavigationHistoryEntry

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:21276

The **`NavigationHistoryEntry`** interface of the Navigation API represents a single navigation history entry.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/NavigationHistoryEntry)

## Extends

- [`EventTarget`](EventTarget.md)

## Properties

### id

> `readonly` **id**: `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:21282

The **`id`** read-only property of the NavigationHistoryEntry interface returns the `id` of the history entry, or an empty string if current document is not fully active.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/NavigationHistoryEntry/id)

***

### index

> `readonly` **index**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:21288

The **`index`** read-only property of the NavigationHistoryEntry interface returns the index of the history entry in the history entries list (that is, the list returned by Navigation.entries()), or `-1` if the entry does not appear in the list or if current document is not fully active.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/NavigationHistoryEntry/index)

***

### key

> `readonly` **key**: `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:21294

The **`key`** read-only property of the NavigationHistoryEntry interface returns the `key` of the history entry, or an empty string if current document is not fully active.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/NavigationHistoryEntry/key)

***

### ondispose

> **ondispose**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:21296

[MDN Reference](https://developer.mozilla.org/docs/Web/API/NavigationHistoryEntry/dispose_event)

***

### sameDocument

> `readonly` **sameDocument**: `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:21302

The **`sameDocument`** read-only property of the NavigationHistoryEntry interface returns `true` if this history entry is for the same `document` as the current Document value and current document is fully active, or `false` otherwise.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/NavigationHistoryEntry/sameDocument)

***

### url

> `readonly` **url**: `string` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:21308

The **`url`** read-only property of the NavigationHistoryEntry interface returns the absolute URL of this history entry.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/NavigationHistoryEntry/url)

## Methods

### addEventListener()

#### Call Signature

> **addEventListener**\<`K`\>(`type`, `listener`, `options?`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:21315

The **`addEventListener()`** method of the EventTarget interface sets up a function that will be called whenever the specified event is delivered to the target.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener)

##### Type Parameters

###### K

`K` *extends* `"dispose"`

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

[`EventTarget`](EventTarget.md).[`addEventListener`](EventTarget.md#addeventlistener)

#### Call Signature

> **addEventListener**(`type`, `listener`, `options?`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:21316

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

`EventTarget.addEventListener`

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

[`EventTarget`](EventTarget.md).[`dispatchEvent`](EventTarget.md#dispatchevent)

***

### getState()

> **getState**(): `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:21314

The **`getState()`** method of the NavigationHistoryEntry interface returns a clone of the developer-supplied state associated with this history entry.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/NavigationHistoryEntry/getState)

#### Returns

`any`

***

### removeEventListener()

#### Call Signature

> **removeEventListener**\<`K`\>(`type`, `listener`, `options?`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:21317

The **`removeEventListener()`** method of the EventTarget interface removes an event listener previously registered with EventTarget.addEventListener() from the target.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/removeEventListener)

##### Type Parameters

###### K

`K` *extends* `"dispose"`

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

[`EventTarget`](EventTarget.md).[`removeEventListener`](EventTarget.md#removeeventlistener)

#### Call Signature

> **removeEventListener**(`type`, `listener`, `options?`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:21318

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

`EventTarget.removeEventListener`
