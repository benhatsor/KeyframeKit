[**KeyframeKit.js**](../../README.md)

***

[KeyframeKit.js](../../globals.md) / [\<internal\>](../README.md) / WindowEventHandlers

# Interface: WindowEventHandlers

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36830

## Extended by

- [`Window`](Window.md)
- [`SVGSVGElement`](SVGSVGElement.md)
- [`HTMLBodyElement`](HTMLBodyElement.md)
- [`HTMLFrameSetElement`](HTMLFrameSetElement.md)

## Properties

### onafterprint

> **onafterprint**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36832

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/afterprint_event)

***

### onbeforeprint

> **onbeforeprint**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36834

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/beforeprint_event)

***

### onbeforeunload

> **onbeforeunload**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36836

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/beforeunload_event)

***

### ongamepadconnected

> **ongamepadconnected**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36838

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/gamepadconnected_event)

***

### ongamepaddisconnected

> **ongamepaddisconnected**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36840

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/gamepaddisconnected_event)

***

### onhashchange

> **onhashchange**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36842

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/hashchange_event)

***

### onlanguagechange

> **onlanguagechange**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36844

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/languagechange_event)

***

### onmessage

> **onmessage**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36846

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/message_event)

***

### onmessageerror

> **onmessageerror**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36848

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/messageerror_event)

***

### onoffline

> **onoffline**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36850

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/offline_event)

***

### ononline

> **ononline**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36852

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/online_event)

***

### onpagehide

> **onpagehide**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36854

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/pagehide_event)

***

### onpagereveal

> **onpagereveal**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36856

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/pagereveal_event)

***

### onpageshow

> **onpageshow**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36858

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/pageshow_event)

***

### onpageswap

> **onpageswap**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36860

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/pageswap_event)

***

### onpopstate

> **onpopstate**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36862

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/popstate_event)

***

### onrejectionhandled

> **onrejectionhandled**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36864

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/rejectionhandled_event)

***

### onstorage

> **onstorage**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36866

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/storage_event)

***

### onunhandledrejection

> **onunhandledrejection**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36868

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/unhandledrejection_event)

***

### ~~onunload~~

> **onunload**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36874

#### Deprecated

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/unload_event)

## Methods

### addEventListener()

#### Call Signature

> **addEventListener**\<`K`\>(`type`, `listener`, `options?`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36875

##### Type Parameters

###### K

`K` *extends* keyof [`WindowEventHandlersEventMap`](WindowEventHandlersEventMap.md)

##### Parameters

###### type

`K`

###### listener

(`this`, `ev`) => `any`

###### options?

`boolean` | [`AddEventListenerOptions`](AddEventListenerOptions.md)

##### Returns

`void`

#### Call Signature

> **addEventListener**(`type`, `listener`, `options?`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36876

##### Parameters

###### type

`string`

###### listener

[`EventListenerOrEventListenerObject`](../type-aliases/EventListenerOrEventListenerObject.md)

###### options?

`boolean` | [`AddEventListenerOptions`](AddEventListenerOptions.md)

##### Returns

`void`

***

### removeEventListener()

#### Call Signature

> **removeEventListener**\<`K`\>(`type`, `listener`, `options?`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36877

##### Type Parameters

###### K

`K` *extends* keyof [`WindowEventHandlersEventMap`](WindowEventHandlersEventMap.md)

##### Parameters

###### type

`K`

###### listener

(`this`, `ev`) => `any`

###### options?

`boolean` | [`EventListenerOptions`](EventListenerOptions.md)

##### Returns

`void`

#### Call Signature

> **removeEventListener**(`type`, `listener`, `options?`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36878

##### Parameters

###### type

`string`

###### listener

[`EventListenerOrEventListenerObject`](../type-aliases/EventListenerOrEventListenerObject.md)

###### options?

`boolean` | [`EventListenerOptions`](EventListenerOptions.md)

##### Returns

`void`
