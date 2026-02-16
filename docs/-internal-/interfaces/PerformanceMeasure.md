[**KeyframeKit.js**](../../README.md)

***

[KeyframeKit.js](../../globals.md) / [\<internal\>](../README.md) / PerformanceMeasure

# Interface: PerformanceMeasure

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:23277

**`PerformanceMeasure`** is an _abstract_ interface for PerformanceEntry objects with an PerformanceEntry.entryType of `'measure'`.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceMeasure)

## Extends

- [`PerformanceEntry`](PerformanceEntry.md)

## Properties

### detail

> `readonly` **detail**: `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:23283

The read-only **`detail`** property returns arbitrary metadata that was included in the mark upon construction (when using Performance.measure.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceMeasure/detail)

***

### duration

> `readonly` **duration**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:23178

The read-only **`duration`** property returns a DOMHighResTimeStamp that is the duration of the PerformanceEntry.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceEntry/duration)

#### Inherited from

[`PerformanceEntry`](PerformanceEntry.md).[`duration`](PerformanceEntry.md#duration)

***

### entryType

> `readonly` **entryType**: `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:23184

The read-only **`entryType`** property returns a string representing the type of performance metric that this entry represents.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceEntry/entryType)

#### Inherited from

[`PerformanceEntry`](PerformanceEntry.md).[`entryType`](PerformanceEntry.md#entrytype)

***

### name

> `readonly` **name**: `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:23190

The read-only **`name`** property of the PerformanceEntry interface is a string representing the name for a performance entry.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceEntry/name)

#### Inherited from

[`PerformanceEntry`](PerformanceEntry.md).[`name`](PerformanceEntry.md#name)

***

### startTime

> `readonly` **startTime**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:23196

The read-only **`startTime`** property returns the first DOMHighResTimeStamp recorded for this PerformanceEntry.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceEntry/startTime)

#### Inherited from

[`PerformanceEntry`](PerformanceEntry.md).[`startTime`](PerformanceEntry.md#starttime)

## Methods

### toJSON()

> **toJSON**(): `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:23202

The **`toJSON()`** method is a Serialization; it returns a JSON representation of the PerformanceEntry object.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceEntry/toJSON)

#### Returns

`any`

#### Inherited from

[`PerformanceEntry`](PerformanceEntry.md).[`toJSON`](PerformanceEntry.md#tojson)
