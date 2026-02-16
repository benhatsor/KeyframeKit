[**KeyframeKit.js**](../../README.md)

***

[KeyframeKit.js](../../globals.md) / [\<internal\>](../README.md) / TimeRanges

# Interface: TimeRanges

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:32188

When loading a media resource for use by an audio or video element, the **`TimeRanges`** interface is used for representing the time ranges of the media resource that have been buffered, the time ranges that have been played, and the time ranges that are seekable.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/TimeRanges)

## Properties

### length

> `readonly` **length**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:32194

The **`TimeRanges.length`** read-only property returns the number of ranges in the object.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/TimeRanges/length)

## Methods

### end()

> **end**(`index`): `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:32200

The **`end()`** method of the TimeRanges interface returns the time offset (in seconds) at which a specified time range ends.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/TimeRanges/end)

#### Parameters

##### index

`number`

#### Returns

`number`

***

### start()

> **start**(`index`): `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:32206

The **`start()`** method of the TimeRanges interface returns the time offset (in seconds) at which a specified time range begins.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/TimeRanges/start)

#### Parameters

##### index

`number`

#### Returns

`number`
