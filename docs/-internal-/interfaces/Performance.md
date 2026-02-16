[**KeyframeKit.js**](../../README.md)

***

[KeyframeKit.js](../../globals.md) / [\<internal\>](../README.md) / Performance

# Interface: Performance

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:23061

The **`Performance`** interface provides access to performance-related information for the current page.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Performance)

## Extends

- [`EventTarget`](EventTarget.md)

## Properties

### eventCounts

> `readonly` **eventCounts**: `EventCounts`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:23067

The read-only `performance.eventCounts` property is an EventCounts map containing the number of events which have been dispatched per event type.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Performance/eventCounts)

***

### ~~navigation~~

> `readonly` **navigation**: [`PerformanceNavigation`](PerformanceNavigation.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:23074

The legacy **`Performance.navigation`** read-only property returns a PerformanceNavigation object representing the type of navigation that occurs in the given browsing context, such as the number of redirections needed to fetch the resource.

#### Deprecated

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Performance/navigation)

***

### onresourcetimingbufferfull

> **onresourcetimingbufferfull**: (`this`, `ev`) => `any` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:23076

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Performance/resourcetimingbufferfull_event)

***

### timeOrigin

> `readonly` **timeOrigin**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:23082

The **`timeOrigin`** read-only property of the Performance interface returns the high resolution timestamp that is used as the baseline for performance-related timestamps.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Performance/timeOrigin)

***

### ~~timing~~

> `readonly` **timing**: [`PerformanceTiming`](PerformanceTiming.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:23089

The legacy **`Performance.timing`** read-only property returns a PerformanceTiming object containing latency-related performance information.

#### Deprecated

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Performance/timing)

## Methods

### addEventListener()

#### Call Signature

> **addEventListener**\<`K`\>(`type`, `listener`, `options?`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:23156

The **`addEventListener()`** method of the EventTarget interface sets up a function that will be called whenever the specified event is delivered to the target.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener)

##### Type Parameters

###### K

`K` *extends* `"resourcetimingbufferfull"`

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

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:23157

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

### clearMarks()

> **clearMarks**(`markName?`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:23095

The **`clearMarks()`** method removes all or specific PerformanceMark objects from the browser's performance timeline.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Performance/clearMarks)

#### Parameters

##### markName?

`string`

#### Returns

`void`

***

### clearMeasures()

> **clearMeasures**(`measureName?`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:23101

The **`clearMeasures()`** method removes all or specific PerformanceMeasure objects from the browser's performance timeline.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Performance/clearMeasures)

#### Parameters

##### measureName?

`string`

#### Returns

`void`

***

### clearResourceTimings()

> **clearResourceTimings**(): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:23107

The **`clearResourceTimings()`** method removes all performance entries with an PerformanceEntry.entryType of `'resource'` from the browser's performance timeline and sets the size of the performance resource data buffer to zero.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Performance/clearResourceTimings)

#### Returns

`void`

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

### getEntries()

> **getEntries**(): [`PerformanceEntryList`](../type-aliases/PerformanceEntryList.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:23113

The **`getEntries()`** method returns an array of all PerformanceEntry objects currently present in the performance timeline.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Performance/getEntries)

#### Returns

[`PerformanceEntryList`](../type-aliases/PerformanceEntryList.md)

***

### getEntriesByName()

> **getEntriesByName**(`name`, `type?`): [`PerformanceEntryList`](../type-aliases/PerformanceEntryList.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:23119

The **`getEntriesByName()`** method returns an array of PerformanceEntry objects currently present in the performance timeline with the given _name_ and _type_.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Performance/getEntriesByName)

#### Parameters

##### name

`string`

##### type?

`string`

#### Returns

[`PerformanceEntryList`](../type-aliases/PerformanceEntryList.md)

***

### getEntriesByType()

> **getEntriesByType**(`type`): [`PerformanceEntryList`](../type-aliases/PerformanceEntryList.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:23125

The **`getEntriesByType()`** method returns an array of PerformanceEntry objects currently present in the performance timeline for a given _type_.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Performance/getEntriesByType)

#### Parameters

##### type

`string`

#### Returns

[`PerformanceEntryList`](../type-aliases/PerformanceEntryList.md)

***

### mark()

> **mark**(`markName`, `markOptions?`): [`PerformanceMark`](PerformanceMark.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:23131

The **`mark()`** method creates a named PerformanceMark object representing a high resolution timestamp marker in the browser's performance timeline.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Performance/mark)

#### Parameters

##### markName

`string`

##### markOptions?

[`PerformanceMarkOptions`](PerformanceMarkOptions.md)

#### Returns

[`PerformanceMark`](PerformanceMark.md)

***

### measure()

> **measure**(`measureName`, `startOrMeasureOptions?`, `endMark?`): [`PerformanceMeasure`](PerformanceMeasure.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:23137

The **`measure()`** method creates a named PerformanceMeasure object representing a time measurement between two marks in the browser's performance timeline.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Performance/measure)

#### Parameters

##### measureName

`string`

##### startOrMeasureOptions?

`string` | [`PerformanceMeasureOptions`](PerformanceMeasureOptions.md)

##### endMark?

`string`

#### Returns

[`PerformanceMeasure`](PerformanceMeasure.md)

***

### now()

> **now**(): `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:23143

The **`performance.now()`** method returns a high resolution timestamp in milliseconds.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Performance/now)

#### Returns

`number`

***

### removeEventListener()

#### Call Signature

> **removeEventListener**\<`K`\>(`type`, `listener`, `options?`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:23158

The **`removeEventListener()`** method of the EventTarget interface removes an event listener previously registered with EventTarget.addEventListener() from the target.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/removeEventListener)

##### Type Parameters

###### K

`K` *extends* `"resourcetimingbufferfull"`

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

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:23159

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

### setResourceTimingBufferSize()

> **setResourceTimingBufferSize**(`maxSize`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:23149

The **`setResourceTimingBufferSize()`** method sets the desired size of the browser's resource timing buffer which stores the `'resource'` performance entries.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Performance/setResourceTimingBufferSize)

#### Parameters

##### maxSize

`number`

#### Returns

`void`

***

### toJSON()

> **toJSON**(): `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:23155

The **`toJSON()`** method of the Performance interface is a Serialization; it returns a JSON representation of the Performance object.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Performance/toJSON)

#### Returns

`any`
