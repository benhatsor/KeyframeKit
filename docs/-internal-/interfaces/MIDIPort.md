[**KeyframeKit.js**](../../README.md)

***

[KeyframeKit.js](../../globals.md) / [\<internal\>](../README.md) / MIDIPort

# Interface: MIDIPort

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:19594

The **`MIDIPort`** interface of the Web MIDI API represents a MIDI input or output port.
Available only in secure contexts.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/MIDIPort)

## Extends

- [`EventTarget`](EventTarget.md)

## Properties

### connection

> `readonly` **connection**: [`MIDIPortConnectionState`](../type-aliases/MIDIPortConnectionState.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:19600

The **`connection`** read-only property of the MIDIPort interface returns the connection state of the port.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/MIDIPort/connection)

***

### id

> `readonly` **id**: `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:19606

The **`id`** read-only property of the MIDIPort interface returns the unique ID of the port.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/MIDIPort/id)

***

### manufacturer

> `readonly` **manufacturer**: `string` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:19612

The **`manufacturer`** read-only property of the MIDIPort interface returns the manufacturer of the port.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/MIDIPort/manufacturer)

***

### name

> `readonly` **name**: `string` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:19618

The **`name`** read-only property of the MIDIPort interface returns the system name of the port.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/MIDIPort/name)

***

### onstatechange

> **onstatechange**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:19620

[MDN Reference](https://developer.mozilla.org/docs/Web/API/MIDIPort/statechange_event)

***

### state

> `readonly` **state**: [`MIDIPortDeviceState`](../type-aliases/MIDIPortDeviceState.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:19626

The **`state`** read-only property of the MIDIPort interface returns the state of the port.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/MIDIPort/state)

***

### type

> `readonly` **type**: [`MIDIPortType`](../type-aliases/MIDIPortType.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:19632

The **`type`** read-only property of the MIDIPort interface returns the type of the port, indicating whether this is an input or output MIDI port.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/MIDIPort/type)

***

### version

> `readonly` **version**: `string` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:19638

The **`version`** read-only property of the MIDIPort interface returns the version of the port.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/MIDIPort/version)

## Methods

### addEventListener()

#### Call Signature

> **addEventListener**\<`K`\>(`type`, `listener`, `options?`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:19651

The **`addEventListener()`** method of the EventTarget interface sets up a function that will be called whenever the specified event is delivered to the target.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener)

##### Type Parameters

###### K

`K` *extends* `"statechange"`

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

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:19652

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

### close()

> **close**(): `Promise`\<`MIDIPort`\>

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:19644

The **`close()`** method of the MIDIPort interface makes the access to the MIDI device connected to this `MIDIPort` unavailable.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/MIDIPort/close)

#### Returns

`Promise`\<`MIDIPort`\>

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

### open()

> **open**(): `Promise`\<`MIDIPort`\>

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:19650

The **`open()`** method of the MIDIPort interface makes the MIDI device connected to this `MIDIPort` explicitly available.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/MIDIPort/open)

#### Returns

`Promise`\<`MIDIPort`\>

***

### removeEventListener()

#### Call Signature

> **removeEventListener**\<`K`\>(`type`, `listener`, `options?`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:19653

The **`removeEventListener()`** method of the EventTarget interface removes an event listener previously registered with EventTarget.addEventListener() from the target.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/removeEventListener)

##### Type Parameters

###### K

`K` *extends* `"statechange"`

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

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:19654

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
