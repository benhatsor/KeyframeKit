[**KeyframeKit.js**](../../README.md)

***

[KeyframeKit.js](../../globals.md) / [\<internal\>](../README.md) / PerformanceEntry

# Interface: PerformanceEntry

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:23172

The **`PerformanceEntry`** object encapsulates a single performance metric that is part of the browser's performance timeline.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceEntry)

## Extended by

- [`PerformanceMark`](PerformanceMark.md)
- [`PerformanceMeasure`](PerformanceMeasure.md)

## Properties

### duration

> `readonly` **duration**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:23178

The read-only **`duration`** property returns a DOMHighResTimeStamp that is the duration of the PerformanceEntry.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceEntry/duration)

***

### entryType

> `readonly` **entryType**: `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:23184

The read-only **`entryType`** property returns a string representing the type of performance metric that this entry represents.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceEntry/entryType)

***

### name

> `readonly` **name**: `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:23190

The read-only **`name`** property of the PerformanceEntry interface is a string representing the name for a performance entry.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceEntry/name)

***

### startTime

> `readonly` **startTime**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:23196

The read-only **`startTime`** property returns the first DOMHighResTimeStamp recorded for this PerformanceEntry.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceEntry/startTime)

## Methods

### toJSON()

> **toJSON**(): `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:23202

The **`toJSON()`** method is a Serialization; it returns a JSON representation of the PerformanceEntry object.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceEntry/toJSON)

#### Returns

`any`
