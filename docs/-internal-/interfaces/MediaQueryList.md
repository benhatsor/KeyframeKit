[**KeyframeKit.js**](../../README.md)

***

[KeyframeKit.js](../../globals.md) / [\<internal\>](../README.md) / MediaQueryList

# Interface: MediaQueryList

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:20171

A **`MediaQueryList`** object stores information on a media query applied to a document, with support for both immediate and event-driven matching against the state of the document.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/MediaQueryList)

## Extends

- [`EventTarget`](EventTarget.md)

## Properties

### matches

> `readonly` **matches**: `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:20177

The **`matches`** read-only property of the `true` if the document currently matches the media query list, or `false` if not.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/MediaQueryList/matches)

***

### media

> `readonly` **media**: `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:20183

The **`media`** read-only property of the serialized media query.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/MediaQueryList/media)

***

### onchange

> **onchange**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:20185

[MDN Reference](https://developer.mozilla.org/docs/Web/API/MediaQueryList/change_event)

## Methods

### addEventListener()

#### Call Signature

> **addEventListener**\<`K`\>(`type`, `listener`, `options?`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:20200

The **`addEventListener()`** method of the EventTarget interface sets up a function that will be called whenever the specified event is delivered to the target.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener)

##### Type Parameters

###### K

`K` *extends* `"change"`

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

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:20201

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

### ~~addListener()~~

> **addListener**(`callback`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:20192

The deprecated **`addListener()`** method of the `MediaQueryListener` that will run a custom callback function in response to the media query status changing.

#### Parameters

##### callback

(`this`, `ev`) => `any` | `null`

#### Returns

`void`

#### Deprecated

[MDN Reference](https://developer.mozilla.org/docs/Web/API/MediaQueryList/addListener)

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

### removeEventListener()

#### Call Signature

> **removeEventListener**\<`K`\>(`type`, `listener`, `options?`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:20202

The **`removeEventListener()`** method of the EventTarget interface removes an event listener previously registered with EventTarget.addEventListener() from the target.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/removeEventListener)

##### Type Parameters

###### K

`K` *extends* `"change"`

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

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:20203

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

***

### ~~removeListener()~~

> **removeListener**(`callback`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:20199

The **`removeListener()`** method of the `MediaQueryListener`.

#### Parameters

##### callback

(`this`, `ev`) => `any` | `null`

#### Returns

`void`

#### Deprecated

[MDN Reference](https://developer.mozilla.org/docs/Web/API/MediaQueryList/removeListener)
