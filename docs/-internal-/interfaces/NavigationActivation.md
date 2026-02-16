[**KeyframeKit.js**](../../README.md)

***

[KeyframeKit.js](../../globals.md) / [\<internal\>](../README.md) / NavigationActivation

# Interface: NavigationActivation

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:21241

The **`NavigationActivation`** interface of the Navigation API represents a recent cross-document navigation.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/NavigationActivation)

## Properties

### entry

> `readonly` **entry**: [`NavigationHistoryEntry`](NavigationHistoryEntry.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:21247

The **`entry`** read-only property of the NavigationActivation interface contains a NavigationHistoryEntry object representing the history entry for the inbound ('to') document in the navigation.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/NavigationActivation/entry)

***

### from

> `readonly` **from**: [`NavigationHistoryEntry`](NavigationHistoryEntry.md) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:21253

The **`from`** read-only property of the NavigationActivation interface contains a NavigationHistoryEntry object representing the history entry for the outgoing ('from') document in the navigation.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/NavigationActivation/from)

***

### navigationType

> `readonly` **navigationType**: [`NavigationType`](../type-aliases/NavigationType.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:21259

The **`navigationType`** read-only property of the NavigationActivation interface contains a string indicating the type of navigation.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/NavigationActivation/navigationType)
