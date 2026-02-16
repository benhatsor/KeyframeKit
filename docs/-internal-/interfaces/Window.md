[**KeyframeKit.js**](../../README.md)

***

[KeyframeKit.js](../../globals.md) / [\<internal\>](../README.md) / Window

# Interface: Window

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36358

The **`Window`** interface represents a window containing a DOM document; the `document` property points to the DOM document loaded in that window.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window)

## Extends

- [`EventTarget`](EventTarget.md).[`AnimationFrameProvider`](AnimationFrameProvider.md).[`GlobalEventHandlers`](GlobalEventHandlers.md).[`WindowEventHandlers`](WindowEventHandlers.md).[`WindowLocalStorage`](WindowLocalStorage.md).[`WindowOrWorkerGlobalScope`](WindowOrWorkerGlobalScope.md).[`WindowSessionStorage`](WindowSessionStorage.md)

## Indexable

\[`index`: `number`\]: `Window`

## Properties

### caches

> `readonly` **caches**: [`CacheStorage`](CacheStorage.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36892

Available only in secure contexts.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/caches)

#### Inherited from

[`WindowOrWorkerGlobalScope`](WindowOrWorkerGlobalScope.md).[`caches`](WindowOrWorkerGlobalScope.md#caches)

***

### ~~clientInformation~~

> `readonly` **clientInformation**: `Navigator`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36364

#### Deprecated

This is a legacy alias of `navigator`.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/navigator)

***

### closed

> `readonly` **closed**: `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36370

The **`Window.closed`** read-only property indicates whether the referenced window is closed or not.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/closed)

***

### cookieStore

> `readonly` **cookieStore**: [`CookieStore`](CookieStore.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36376

The **`cookieStore`** read-only property of the Window interface returns a reference to the CookieStore object for the current document context.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/cookieStore)

***

### crossOriginIsolated

> `readonly` **crossOriginIsolated**: `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36894

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/crossOriginIsolated)

#### Inherited from

[`WindowOrWorkerGlobalScope`](WindowOrWorkerGlobalScope.md).[`crossOriginIsolated`](WindowOrWorkerGlobalScope.md#crossoriginisolated)

***

### crypto

> `readonly` **crypto**: [`Crypto`](Crypto.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36896

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/crypto)

#### Inherited from

[`WindowOrWorkerGlobalScope`](WindowOrWorkerGlobalScope.md).[`crypto`](WindowOrWorkerGlobalScope.md#crypto)

***

### customElements

> `readonly` **customElements**: [`CustomElementRegistry`](CustomElementRegistry.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36382

The **`customElements`** read-only property of the Window interface returns a reference to the CustomElementRegistry object, which can be used to register new custom elements and get information about previously registered custom elements.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/customElements)

***

### devicePixelRatio

> `readonly` **devicePixelRatio**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36388

The **`devicePixelRatio`** of Window interface returns the ratio of the resolution in _physical pixels_ to the resolution in _CSS pixels_ for the current display device.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/devicePixelRatio)

***

### document

> `readonly` **document**: [`Document`](Document.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36394

**`window.document`** returns a reference to the document contained in the window.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/document)

***

### ~~event~~

> `readonly` **event**: [`Event`](Event.md) \| `undefined`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36401

The read-only Window property **`event`** returns the Event which is currently being handled by the site's code.

#### Deprecated

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/event)

***

### ~~external~~

> `readonly` **external**: [`External`](External.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36408

The `external` property of the Window API returns an instance of the `External` interface, which was intended to contain functions related to adding external search providers to the browser.

#### Deprecated

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/external)

***

### frameElement

> `readonly` **frameElement**: [`Element`](Element.md) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36414

The **`Window.frameElement`** property returns the element (such as iframe or object) in which the window is embedded.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/frameElement)

***

### frames

> `readonly` **frames**: `Window`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36420

Returns the window itself, which is an array-like object, listing the direct sub-frames of the current window.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/frames)

***

### history

> `readonly` **history**: [`History`](History.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36426

The `Window.history` read-only property returns a reference to the History object, which provides an interface for manipulating the browser _session history_ (pages visited in the tab or frame that the current page is loaded in).

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/history)

***

### indexedDB

> `readonly` **indexedDB**: [`IDBFactory`](IDBFactory.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36898

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/indexedDB)

#### Inherited from

[`WindowOrWorkerGlobalScope`](WindowOrWorkerGlobalScope.md).[`indexedDB`](WindowOrWorkerGlobalScope.md#indexeddb)

***

### innerHeight

> `readonly` **innerHeight**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36432

The read-only **`innerHeight`** property of the including the height of the horizontal scroll bar, if present.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/innerHeight)

***

### innerWidth

> `readonly` **innerWidth**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36438

The read-only Window property **`innerWidth`** returns the interior width of the window in pixels (that is, the width of the window's layout viewport).

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/innerWidth)

***

### isSecureContext

> `readonly` **isSecureContext**: `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36900

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/isSecureContext)

#### Inherited from

[`WindowOrWorkerGlobalScope`](WindowOrWorkerGlobalScope.md).[`isSecureContext`](WindowOrWorkerGlobalScope.md#issecurecontext)

***

### length

> `readonly` **length**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36444

Returns the number of frames (either frame or A number.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/length)

***

### localStorage

> `readonly` **localStorage**: [`Storage`](Storage.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36883

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/localStorage)

#### Inherited from

[`WindowLocalStorage`](WindowLocalStorage.md).[`localStorage`](WindowLocalStorage.md#localstorage)

***

### locationbar

> `readonly` **locationbar**: [`BarProp`](BarProp.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36457

Returns the `locationbar` object.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/locationbar)

***

### menubar

> `readonly` **menubar**: [`BarProp`](BarProp.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36463

Returns the `menubar` object.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/menubar)

***

### name

> **name**: `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36469

The `Window.name` property gets/sets the name of the window's browsing context.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/name)

***

### navigator

> `readonly` **navigator**: `Navigator`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36475

The **`Window.navigator`** read-only property returns a reference to the Navigator object, which has methods and properties about the application running the script.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/navigator)

***

### onabort

> **onabort**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12743

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/abort_event)

#### Inherited from

[`GlobalEventHandlers`](GlobalEventHandlers.md).[`onabort`](GlobalEventHandlers.md#onabort)

***

### onafterprint

> **onafterprint**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36832

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/afterprint_event)

#### Inherited from

[`WindowEventHandlers`](WindowEventHandlers.md).[`onafterprint`](WindowEventHandlers.md#onafterprint)

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

### onbeforeprint

> **onbeforeprint**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36834

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/beforeprint_event)

#### Inherited from

[`WindowEventHandlers`](WindowEventHandlers.md).[`onbeforeprint`](WindowEventHandlers.md#onbeforeprint)

***

### onbeforetoggle

> **onbeforetoggle**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12759

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/beforetoggle_event)

#### Inherited from

[`GlobalEventHandlers`](GlobalEventHandlers.md).[`onbeforetoggle`](GlobalEventHandlers.md#onbeforetoggle)

***

### onbeforeunload

> **onbeforeunload**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36836

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/beforeunload_event)

#### Inherited from

[`WindowEventHandlers`](WindowEventHandlers.md).[`onbeforeunload`](WindowEventHandlers.md#onbeforeunload)

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

### ondevicemotion

> **ondevicemotion**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36481

Available only in secure contexts.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/devicemotion_event)

***

### ondeviceorientation

> **ondeviceorientation**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36487

Available only in secure contexts.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/deviceorientation_event)

***

### ondeviceorientationabsolute

> **ondeviceorientationabsolute**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36493

Available only in secure contexts.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/deviceorientationabsolute_event)

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

### ongamepadconnected

> **ongamepadconnected**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36838

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/gamepadconnected_event)

#### Inherited from

[`WindowEventHandlers`](WindowEventHandlers.md).[`ongamepadconnected`](WindowEventHandlers.md#ongamepadconnected)

***

### ongamepaddisconnected

> **ongamepaddisconnected**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36840

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/gamepaddisconnected_event)

#### Inherited from

[`WindowEventHandlers`](WindowEventHandlers.md).[`ongamepaddisconnected`](WindowEventHandlers.md#ongamepaddisconnected)

***

### ongotpointercapture

> **ongotpointercapture**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12815

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/gotpointercapture_event)

#### Inherited from

[`GlobalEventHandlers`](GlobalEventHandlers.md).[`ongotpointercapture`](GlobalEventHandlers.md#ongotpointercapture)

***

### onhashchange

> **onhashchange**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36842

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/hashchange_event)

#### Inherited from

[`WindowEventHandlers`](WindowEventHandlers.md).[`onhashchange`](WindowEventHandlers.md#onhashchange)

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

### onlanguagechange

> **onlanguagechange**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36844

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/languagechange_event)

#### Inherited from

[`WindowEventHandlers`](WindowEventHandlers.md).[`onlanguagechange`](WindowEventHandlers.md#onlanguagechange)

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

### onmessage

> **onmessage**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36846

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/message_event)

#### Inherited from

[`WindowEventHandlers`](WindowEventHandlers.md).[`onmessage`](WindowEventHandlers.md#onmessage)

***

### onmessageerror

> **onmessageerror**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36848

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/messageerror_event)

#### Inherited from

[`WindowEventHandlers`](WindowEventHandlers.md).[`onmessageerror`](WindowEventHandlers.md#onmessageerror)

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

### onoffline

> **onoffline**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36850

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/offline_event)

#### Inherited from

[`WindowEventHandlers`](WindowEventHandlers.md).[`onoffline`](WindowEventHandlers.md#onoffline)

***

### ononline

> **ononline**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36852

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/online_event)

#### Inherited from

[`WindowEventHandlers`](WindowEventHandlers.md).[`ononline`](WindowEventHandlers.md#ononline)

***

### ~~onorientationchange~~

> **onorientationchange**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36499

#### Deprecated

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/orientationchange_event)

***

### onpagehide

> **onpagehide**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36854

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/pagehide_event)

#### Inherited from

[`WindowEventHandlers`](WindowEventHandlers.md).[`onpagehide`](WindowEventHandlers.md#onpagehide)

***

### onpagereveal

> **onpagereveal**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36856

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/pagereveal_event)

#### Inherited from

[`WindowEventHandlers`](WindowEventHandlers.md).[`onpagereveal`](WindowEventHandlers.md#onpagereveal)

***

### onpageshow

> **onpageshow**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36858

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/pageshow_event)

#### Inherited from

[`WindowEventHandlers`](WindowEventHandlers.md).[`onpageshow`](WindowEventHandlers.md#onpageshow)

***

### onpageswap

> **onpageswap**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36860

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/pageswap_event)

#### Inherited from

[`WindowEventHandlers`](WindowEventHandlers.md).[`onpageswap`](WindowEventHandlers.md#onpageswap)

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

### onpopstate

> **onpopstate**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36862

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/popstate_event)

#### Inherited from

[`WindowEventHandlers`](WindowEventHandlers.md).[`onpopstate`](WindowEventHandlers.md#onpopstate)

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

### onrejectionhandled

> **onrejectionhandled**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36864

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/rejectionhandled_event)

#### Inherited from

[`WindowEventHandlers`](WindowEventHandlers.md).[`onrejectionhandled`](WindowEventHandlers.md#onrejectionhandled)

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

### onstorage

> **onstorage**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36866

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/storage_event)

#### Inherited from

[`WindowEventHandlers`](WindowEventHandlers.md).[`onstorage`](WindowEventHandlers.md#onstorage)

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

### onunhandledrejection

> **onunhandledrejection**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36868

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/unhandledrejection_event)

#### Inherited from

[`WindowEventHandlers`](WindowEventHandlers.md).[`onunhandledrejection`](WindowEventHandlers.md#onunhandledrejection)

***

### ~~onunload~~

> **onunload**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36874

#### Deprecated

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/unload_event)

#### Inherited from

[`WindowEventHandlers`](WindowEventHandlers.md).[`onunload`](WindowEventHandlers.md#onunload)

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

### opener

> **opener**: `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36505

The Window interface's **`opener`** property returns a reference to the window that opened the window, either with Window.open, or by navigating a link with a `target` attribute.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/opener)

***

### ~~orientation~~

> `readonly` **orientation**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36512

Returns the orientation in degrees (in 90-degree increments) of the viewport relative to the device's natural orientation.

#### Deprecated

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/orientation)

***

### origin

> `readonly` **origin**: `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36902

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/origin)

#### Inherited from

[`WindowOrWorkerGlobalScope`](WindowOrWorkerGlobalScope.md).[`origin`](WindowOrWorkerGlobalScope.md#origin)

***

### originAgentCluster

> `readonly` **originAgentCluster**: `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36518

The **`originAgentCluster`** read-only property of the Window interface returns `true` if this window belongs to an _origin-keyed agent cluster_: this means that the operating system has provided dedicated resources (for example an operating system process) to this window's origin that are not shared with windows from other origins.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/originAgentCluster)

***

### outerHeight

> `readonly` **outerHeight**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36524

The **`Window.outerHeight`** read-only property returns the height in pixels of the whole browser window, including any sidebar, window chrome, and window-resizing borders/handles.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/outerHeight)

***

### outerWidth

> `readonly` **outerWidth**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36530

**`Window.outerWidth`** read-only property returns the width of the outside of the browser window.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/outerWidth)

***

### pageXOffset

> `readonly` **pageXOffset**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36532

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/scrollX)

***

### pageYOffset

> `readonly` **pageYOffset**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36534

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/scrollY)

***

### parent

> `readonly` **parent**: `Window`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36540

The **`Window.parent`** property is a reference to the parent of the current window or subframe.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/parent)

***

### performance

> `readonly` **performance**: [`Performance`](Performance.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36904

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/performance)

#### Inherited from

[`WindowOrWorkerGlobalScope`](WindowOrWorkerGlobalScope.md).[`performance`](WindowOrWorkerGlobalScope.md#performance)

***

### personalbar

> `readonly` **personalbar**: [`BarProp`](BarProp.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36546

Returns the `personalbar` object.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/personalbar)

***

### screen

> `readonly` **screen**: [`Screen`](Screen.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36552

The Window property **`screen`** returns a reference to the screen object associated with the window.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/screen)

***

### screenLeft

> `readonly` **screenLeft**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36558

The **`Window.screenLeft`** read-only property returns the horizontal distance, in CSS pixels, from the left border of the user's browser viewport to the left side of the screen.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/screenLeft)

***

### screenTop

> `readonly` **screenTop**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36564

The **`Window.screenTop`** read-only property returns the vertical distance, in CSS pixels, from the top border of the user's browser viewport to the top side of the screen.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/screenTop)

***

### screenX

> `readonly` **screenX**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36570

The **`Window.screenX`** read-only property returns the horizontal distance, in CSS pixels, of the left border of the user's browser viewport to the left side of the screen.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/screenX)

***

### screenY

> `readonly` **screenY**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36576

The **`Window.screenY`** read-only property returns the vertical distance, in CSS pixels, of the top border of the user's browser viewport to the top edge of the screen.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/screenY)

***

### scrollbars

> `readonly` **scrollbars**: [`BarProp`](BarProp.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36594

Returns the `scrollbars` object.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/scrollbars)

***

### scrollX

> `readonly` **scrollX**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36582

The read-only **`scrollX`** property of the Window interface returns the number of pixels by which the document is currently scrolled horizontally.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/scrollX)

***

### scrollY

> `readonly` **scrollY**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36588

The read-only **`scrollY`** property of the Window interface returns the number of pixels by which the document is currently scrolled vertically.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/scrollY)

***

### self

> `readonly` **self**: `Window` & *typeof* `globalThis`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36600

The **`Window.self`** read-only property returns the window itself, as a WindowProxy.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/self)

***

### sessionStorage

> `readonly` **sessionStorage**: [`Storage`](Storage.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36932

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/sessionStorage)

#### Inherited from

[`WindowSessionStorage`](WindowSessionStorage.md).[`sessionStorage`](WindowSessionStorage.md#sessionstorage)

***

### speechSynthesis

> `readonly` **speechSynthesis**: [`SpeechSynthesis`](SpeechSynthesis.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36606

The `speechSynthesis` read-only property of the Window object returns a SpeechSynthesis object, which is the entry point into using Web Speech API speech synthesis functionality.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/speechSynthesis)

***

### ~~status~~

> **status**: `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36613

The **`status`** property of the bar at the bottom of the browser window.

#### Deprecated

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/status)

***

### statusbar

> `readonly` **statusbar**: [`BarProp`](BarProp.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36619

Returns the `statusbar` object.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/statusbar)

***

### toolbar

> `readonly` **toolbar**: [`BarProp`](BarProp.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36625

Returns the `toolbar` object.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/toolbar)

***

### top

> `readonly` **top**: `Window` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36631

Returns a reference to the topmost window in the window hierarchy.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/top)

***

### visualViewport

> `readonly` **visualViewport**: [`VisualViewport`](VisualViewport.md) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36637

The **`visualViewport`** read-only property of the Window interface returns a VisualViewport object representing the visual viewport for a given window, or `null` if current document is not fully active.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/visualViewport)

***

### window

> `readonly` **window**: `Window` & *typeof* `globalThis`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36643

The **`window`** property of a Window object points to the window object itself.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/window)

## Accessors

### location

#### Get Signature

> **get** **location**(): [`Location`](Location.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36450

The **`Window.location`** read-only property returns a Location object with information about the current location of the document.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/location)

##### Returns

[`Location`](Location.md)

#### Set Signature

> **set** **location**(`href`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36451

##### Parameters

###### href

`string`

##### Returns

`void`

## Methods

### addEventListener()

#### Call Signature

> **addEventListener**\<`K`\>(`type`, `listener`, `options?`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36795

The **`addEventListener()`** method of the EventTarget interface sets up a function that will be called whenever the specified event is delivered to the target.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener)

##### Type Parameters

###### K

`K` *extends* keyof [`WindowEventMap`](WindowEventMap.md)

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

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36796

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

### alert()

> **alert**(`message?`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36649

`window.alert()` instructs the browser to display a dialog with an optional message, and to wait until the user dismisses the dialog.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/alert)

#### Parameters

##### message?

`any`

#### Returns

`void`

***

### atob()

> **atob**(`data`): `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36906

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/atob)

#### Parameters

##### data

`string`

#### Returns

`string`

#### Inherited from

[`WindowOrWorkerGlobalScope`](WindowOrWorkerGlobalScope.md).[`atob`](WindowOrWorkerGlobalScope.md#atob)

***

### ~~blur()~~

> **blur**(): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36656

The **`Window.blur()`** method does nothing.

#### Returns

`void`

#### Deprecated

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/blur)

***

### btoa()

> **btoa**(`data`): `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36908

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/btoa)

#### Parameters

##### data

`string`

#### Returns

`string`

#### Inherited from

[`WindowOrWorkerGlobalScope`](WindowOrWorkerGlobalScope.md).[`btoa`](WindowOrWorkerGlobalScope.md#btoa)

***

### cancelAnimationFrame()

> **cancelAnimationFrame**(`handle`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:3133

[MDN Reference](https://developer.mozilla.org/docs/Web/API/DedicatedWorkerGlobalScope/cancelAnimationFrame)

#### Parameters

##### handle

`number`

#### Returns

`void`

#### Inherited from

[`AnimationFrameProvider`](AnimationFrameProvider.md).[`cancelAnimationFrame`](AnimationFrameProvider.md#cancelanimationframe)

***

### cancelIdleCallback()

> **cancelIdleCallback**(`handle`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36662

The **`window.cancelIdleCallback()`** method cancels a callback previously scheduled with window.requestIdleCallback().

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/cancelIdleCallback)

#### Parameters

##### handle

`number`

#### Returns

`void`

***

### ~~captureEvents()~~

> **captureEvents**(): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36669

The **`Window.captureEvents()`** method does nothing.

#### Returns

`void`

#### Deprecated

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/captureEvents)

***

### clearInterval()

> **clearInterval**(`id`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36910

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/clearInterval)

#### Parameters

##### id

`number` | `undefined`

#### Returns

`void`

#### Inherited from

[`WindowOrWorkerGlobalScope`](WindowOrWorkerGlobalScope.md).[`clearInterval`](WindowOrWorkerGlobalScope.md#clearinterval)

***

### clearTimeout()

> **clearTimeout**(`id`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36912

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/clearTimeout)

#### Parameters

##### id

`number` | `undefined`

#### Returns

`void`

#### Inherited from

[`WindowOrWorkerGlobalScope`](WindowOrWorkerGlobalScope.md).[`clearTimeout`](WindowOrWorkerGlobalScope.md#cleartimeout)

***

### close()

> **close**(): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36675

The **`Window.close()`** method closes the current window, or the window on which it was called.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/close)

#### Returns

`void`

***

### confirm()

> **confirm**(`message?`): `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36681

`window.confirm()` instructs the browser to display a dialog with an optional message, and to wait until the user either confirms or cancels the dialog.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/confirm)

#### Parameters

##### message?

`string`

#### Returns

`boolean`

***

### createImageBitmap()

#### Call Signature

> **createImageBitmap**(`image`, `options?`): `Promise`\<[`ImageBitmap`](ImageBitmap.md)\>

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36914

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/createImageBitmap)

##### Parameters

###### image

[`ImageBitmapSource`](../type-aliases/ImageBitmapSource.md)

###### options?

[`ImageBitmapOptions`](ImageBitmapOptions.md)

##### Returns

`Promise`\<[`ImageBitmap`](ImageBitmap.md)\>

##### Inherited from

[`WindowOrWorkerGlobalScope`](WindowOrWorkerGlobalScope.md).[`createImageBitmap`](WindowOrWorkerGlobalScope.md#createimagebitmap)

#### Call Signature

> **createImageBitmap**(`image`, `sx`, `sy`, `sw`, `sh`, `options?`): `Promise`\<[`ImageBitmap`](ImageBitmap.md)\>

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36915

##### Parameters

###### image

[`ImageBitmapSource`](../type-aliases/ImageBitmapSource.md)

###### sx

`number`

###### sy

`number`

###### sw

`number`

###### sh

`number`

###### options?

[`ImageBitmapOptions`](ImageBitmapOptions.md)

##### Returns

`Promise`\<[`ImageBitmap`](ImageBitmap.md)\>

##### Inherited from

[`WindowOrWorkerGlobalScope`](WindowOrWorkerGlobalScope.md).[`createImageBitmap`](WindowOrWorkerGlobalScope.md#createimagebitmap)

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

### fetch()

> **fetch**(`input`, `init?`): `Promise`\<[`Response`](Response.md)\>

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36917

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/fetch)

#### Parameters

##### input

[`URL`](URL.md) | [`RequestInfo`](../type-aliases/RequestInfo.md)

##### init?

[`RequestInit`](RequestInit.md)

#### Returns

`Promise`\<[`Response`](Response.md)\>

#### Inherited from

[`WindowOrWorkerGlobalScope`](WindowOrWorkerGlobalScope.md).[`fetch`](WindowOrWorkerGlobalScope.md#fetch)

***

### focus()

> **focus**(): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36687

Makes a request to bring the window to the front.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/focus)

#### Returns

`void`

***

### getComputedStyle()

> **getComputedStyle**(`elt`, `pseudoElt?`): `CSSStyleDeclaration`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36693

The **`Window.getComputedStyle()`** method returns an object containing the values of all CSS properties of an element, after applying active stylesheets and resolving any basic computation those values may contain.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/getComputedStyle)

#### Parameters

##### elt

[`Element`](Element.md)

##### pseudoElt?

`string` | `null`

#### Returns

`CSSStyleDeclaration`

***

### getSelection()

> **getSelection**(): [`Selection`](Selection.md) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36699

The **`getSelection()`** method of the Window interface returns the Selection object associated with the window's document, representing the range of text selected by the user or the current position of the caret.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/getSelection)

#### Returns

[`Selection`](Selection.md) \| `null`

***

### matchMedia()

> **matchMedia**(`query`): [`MediaQueryList`](MediaQueryList.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36705

The Window interface's **`matchMedia()`** method returns a new MediaQueryList object that can then be used to determine if the document matches the media query string, as well as to monitor the document to detect when it matches (or stops matching) that media query.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/matchMedia)

#### Parameters

##### query

`string`

#### Returns

[`MediaQueryList`](MediaQueryList.md)

***

### moveBy()

> **moveBy**(`x`, `y`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36711

The **`moveBy()`** method of the Window interface moves the current window by a specified amount.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/moveBy)

#### Parameters

##### x

`number`

##### y

`number`

#### Returns

`void`

***

### moveTo()

> **moveTo**(`x`, `y`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36717

The **`moveTo()`** method of the Window interface moves the current window to the specified coordinates.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/moveTo)

#### Parameters

##### x

`number`

##### y

`number`

#### Returns

`void`

***

### open()

> **open**(`url?`, `target?`, `features?`): `Window` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36723

The **`open()`** method of the `Window` interface loads a specified resource into a new or existing browsing context (that is, a tab, a window, or an iframe) under a specified name.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/open)

#### Parameters

##### url?

`string` | [`URL`](URL.md)

##### target?

`string`

##### features?

`string`

#### Returns

`Window` \| `null`

***

### postMessage()

#### Call Signature

> **postMessage**(`message`, `targetOrigin`, `transfer?`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36729

The **`window.postMessage()`** method safely enables cross-origin communication between Window objects; _e.g.,_ between a page and a pop-up that it spawned, or between a page and an iframe embedded within it.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/postMessage)

##### Parameters

###### message

`any`

###### targetOrigin

`string`

###### transfer?

[`Transferable`](../type-aliases/Transferable.md)[]

##### Returns

`void`

#### Call Signature

> **postMessage**(`message`, `options?`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36730

##### Parameters

###### message

`any`

###### options?

[`WindowPostMessageOptions`](WindowPostMessageOptions.md)

##### Returns

`void`

***

### print()

> **print**(): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36736

Opens the print dialog to print the current document.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/print)

#### Returns

`void`

***

### prompt()

> **prompt**(`message?`, `_default?`): `string` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36742

`window.prompt()` instructs the browser to display a dialog with an optional message prompting the user to input some text, and to wait until the user either submits the text or cancels the dialog.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/prompt)

#### Parameters

##### message?

`string`

##### \_default?

`string`

#### Returns

`string` \| `null`

***

### queueMicrotask()

> **queueMicrotask**(`callback`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36919

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/queueMicrotask)

#### Parameters

##### callback

[`VoidFunction`](VoidFunction.md)

#### Returns

`void`

#### Inherited from

[`WindowOrWorkerGlobalScope`](WindowOrWorkerGlobalScope.md).[`queueMicrotask`](WindowOrWorkerGlobalScope.md#queuemicrotask)

***

### ~~releaseEvents()~~

> **releaseEvents**(): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36749

Releases the window from trapping events of a specific type.

#### Returns

`void`

#### Deprecated

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/releaseEvents)

***

### removeEventListener()

#### Call Signature

> **removeEventListener**\<`K`\>(`type`, `listener`, `options?`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36797

The **`removeEventListener()`** method of the EventTarget interface removes an event listener previously registered with EventTarget.addEventListener() from the target.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/removeEventListener)

##### Type Parameters

###### K

`K` *extends* keyof [`WindowEventMap`](WindowEventMap.md)

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

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36798

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

### reportError()

> **reportError**(`e`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36921

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/reportError)

#### Parameters

##### e

`any`

#### Returns

`void`

#### Inherited from

[`WindowOrWorkerGlobalScope`](WindowOrWorkerGlobalScope.md).[`reportError`](WindowOrWorkerGlobalScope.md#reporterror)

***

### requestAnimationFrame()

> **requestAnimationFrame**(`callback`): `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:3135

[MDN Reference](https://developer.mozilla.org/docs/Web/API/DedicatedWorkerGlobalScope/requestAnimationFrame)

#### Parameters

##### callback

[`FrameRequestCallback`](FrameRequestCallback.md)

#### Returns

`number`

#### Inherited from

[`AnimationFrameProvider`](AnimationFrameProvider.md).[`requestAnimationFrame`](AnimationFrameProvider.md#requestanimationframe)

***

### requestIdleCallback()

> **requestIdleCallback**(`callback`, `options?`): `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36755

The **`window.requestIdleCallback()`** method queues a function to be called during a browser's idle periods.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/requestIdleCallback)

#### Parameters

##### callback

[`IdleRequestCallback`](IdleRequestCallback.md)

##### options?

[`IdleRequestOptions`](IdleRequestOptions.md)

#### Returns

`number`

***

### resizeBy()

> **resizeBy**(`x`, `y`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36761

The **`Window.resizeBy()`** method resizes the current window by a specified amount.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/resizeBy)

#### Parameters

##### x

`number`

##### y

`number`

#### Returns

`void`

***

### resizeTo()

> **resizeTo**(`width`, `height`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36767

The **`Window.resizeTo()`** method dynamically resizes the window.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/resizeTo)

#### Parameters

##### width

`number`

##### height

`number`

#### Returns

`void`

***

### scroll()

#### Call Signature

> **scroll**(`options?`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36773

The **`Window.scroll()`** method scrolls the window to a particular place in the document.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/scroll)

##### Parameters

###### options?

[`ScrollToOptions`](ScrollToOptions.md)

##### Returns

`void`

#### Call Signature

> **scroll**(`x`, `y`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36774

##### Parameters

###### x

`number`

###### y

`number`

##### Returns

`void`

***

### scrollBy()

#### Call Signature

> **scrollBy**(`options?`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36780

The **`Window.scrollBy()`** method scrolls the document in the window by the given amount.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/scrollBy)

##### Parameters

###### options?

[`ScrollToOptions`](ScrollToOptions.md)

##### Returns

`void`

#### Call Signature

> **scrollBy**(`x`, `y`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36781

##### Parameters

###### x

`number`

###### y

`number`

##### Returns

`void`

***

### scrollTo()

#### Call Signature

> **scrollTo**(`options?`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36787

**`Window.scrollTo()`** scrolls to a particular set of coordinates in the document.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/scrollTo)

##### Parameters

###### options?

[`ScrollToOptions`](ScrollToOptions.md)

##### Returns

`void`

#### Call Signature

> **scrollTo**(`x`, `y`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36788

##### Parameters

###### x

`number`

###### y

`number`

##### Returns

`void`

***

### setInterval()

> **setInterval**(`handler`, `timeout?`, ...`arguments`): `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36923

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/setInterval)

#### Parameters

##### handler

[`TimerHandler`](../type-aliases/TimerHandler.md)

##### timeout?

`number`

##### arguments

...`any`[]

#### Returns

`number`

#### Inherited from

[`WindowOrWorkerGlobalScope`](WindowOrWorkerGlobalScope.md).[`setInterval`](WindowOrWorkerGlobalScope.md#setinterval)

***

### setTimeout()

> **setTimeout**(`handler`, `timeout?`, ...`arguments`): `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36925

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/setTimeout)

#### Parameters

##### handler

[`TimerHandler`](../type-aliases/TimerHandler.md)

##### timeout?

`number`

##### arguments

...`any`[]

#### Returns

`number`

#### Inherited from

[`WindowOrWorkerGlobalScope`](WindowOrWorkerGlobalScope.md).[`setTimeout`](WindowOrWorkerGlobalScope.md#settimeout)

***

### stop()

> **stop**(): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36794

The **`window.stop()`** stops further resource loading in the current browsing context, equivalent to the stop button in the browser.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/stop)

#### Returns

`void`

***

### structuredClone()

> **structuredClone**\<`T`\>(`value`, `options?`): `T`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:36927

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/structuredClone)

#### Type Parameters

##### T

`T` = `any`

#### Parameters

##### value

`T`

##### options?

[`StructuredSerializeOptions`](StructuredSerializeOptions.md)

#### Returns

`T`

#### Inherited from

[`WindowOrWorkerGlobalScope`](WindowOrWorkerGlobalScope.md).[`structuredClone`](WindowOrWorkerGlobalScope.md#structuredclone)
