[**KeyframeKit.js**](../../README.md)

***

[KeyframeKit.js](../../globals.md) / [\<internal\>](../README.md) / PerformanceTiming

# ~~Interface: PerformanceTiming~~

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:23671

The **`PerformanceTiming`** interface is a legacy interface kept for backwards compatibility and contains properties that offer performance timing information for various events which occur during the loading and use of the current page.

## Deprecated

This interface is deprecated in the Navigation Timing Level 2 specification. Please use the PerformanceNavigationTiming interface instead.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceTiming)

## Properties

### ~~connectEnd~~

> `readonly` **connectEnd**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:23678

The legacy **`PerformanceTiming.connectEnd`** read-only property returns an `unsigned long long` representing the moment, in milliseconds since the UNIX epoch, where the connection is opened network.

#### Deprecated

[MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceTiming/connectEnd)

***

### ~~connectStart~~

> `readonly` **connectStart**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:23685

The legacy **`PerformanceTiming.connectStart`** read-only property returns an `unsigned long long` representing the moment, in milliseconds since the UNIX epoch, where the request to open a connection is sent to the network.

#### Deprecated

[MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceTiming/connectStart)

***

### ~~domainLookupEnd~~

> `readonly` **domainLookupEnd**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:23727

The legacy **`PerformanceTiming.domainLookupEnd`** read-only property returns an `unsigned long long` representing the moment, in milliseconds since the UNIX epoch, where the domain lookup is finished.

#### Deprecated

[MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceTiming/domainLookupEnd)

***

### ~~domainLookupStart~~

> `readonly` **domainLookupStart**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:23734

The legacy **`PerformanceTiming.domainLookupStart`** read-only property returns an `unsigned long long` representing the moment, in milliseconds since the UNIX epoch, where the domain lookup starts.

#### Deprecated

[MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceTiming/domainLookupStart)

***

### ~~domComplete~~

> `readonly` **domComplete**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:23692

The legacy **`PerformanceTiming.domComplete`** read-only property returns an `unsigned long long` representing the moment, in milliseconds since the UNIX epoch, when the parser finished its work on the main document, that is when its Document.readyState changes to `'complete'` and the corresponding Document/readystatechange_event event is thrown.

#### Deprecated

[MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceTiming/domComplete)

***

### ~~domContentLoadedEventEnd~~

> `readonly` **domContentLoadedEventEnd**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:23699

The legacy **`PerformanceTiming.domContentLoadedEventEnd`** read-only property returns an `unsigned long long` representing the moment, in milliseconds since the UNIX epoch, right after all the scripts that need to be executed as soon as possible, in order or not, has been executed.

#### Deprecated

[MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceTiming/domContentLoadedEventEnd)

***

### ~~domContentLoadedEventStart~~

> `readonly` **domContentLoadedEventStart**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:23706

The legacy **`PerformanceTiming.domContentLoadedEventStart`** read-only property returns an `unsigned long long` representing the moment, in milliseconds since the UNIX epoch, right before the parser sent the executed right after parsing has been executed.

#### Deprecated

[MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceTiming/domContentLoadedEventStart)

***

### ~~domInteractive~~

> `readonly` **domInteractive**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:23713

The legacy **`PerformanceTiming.domInteractive`** read-only property returns an `unsigned long long` representing the moment, in milliseconds since the UNIX epoch, when the parser finished its work on the main document, that is when its Document.readyState changes to `'interactive'` and the corresponding Document/readystatechange_event event is thrown.

#### Deprecated

[MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceTiming/domInteractive)

***

### ~~domLoading~~

> `readonly` **domLoading**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:23720

The legacy **`PerformanceTiming.domLoading`** read-only property returns an `unsigned long long` representing the moment, in milliseconds since the UNIX epoch, when the parser started its work, that is when its corresponding Document/readystatechange_event event is thrown.

#### Deprecated

[MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceTiming/domLoading)

***

### ~~fetchStart~~

> `readonly` **fetchStart**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:23741

The legacy **`PerformanceTiming.fetchStart`** read-only property returns an `unsigned long long` representing the moment, in milliseconds since the UNIX epoch, the browser is ready to fetch the document using an HTTP request.

#### Deprecated

[MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceTiming/fetchStart)

***

### ~~loadEventEnd~~

> `readonly` **loadEventEnd**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:23748

The legacy **`PerformanceTiming.loadEventEnd`** read-only property returns an `unsigned long long` representing the moment, in milliseconds since the UNIX epoch, when the Window/load_event event handler terminated, that is when the load event is completed.

#### Deprecated

[MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceTiming/loadEventEnd)

***

### ~~loadEventStart~~

> `readonly` **loadEventStart**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:23755

The legacy **`PerformanceTiming.loadEventStart`** read-only property returns an `unsigned long long` representing the moment, in milliseconds since the UNIX epoch, when the Window/load_event event was sent for the current document.

#### Deprecated

[MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceTiming/loadEventStart)

***

### ~~navigationStart~~

> `readonly` **navigationStart**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:23762

The legacy **`PerformanceTiming.navigationStart`** read-only property returns an `unsigned long long` representing the moment, in milliseconds since the UNIX epoch, right after the prompt for unload terminates on the previous document in the same browsing context.

#### Deprecated

[MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceTiming/navigationStart)

***

### ~~redirectEnd~~

> `readonly` **redirectEnd**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:23769

The legacy **`PerformanceTiming.redirectEnd`** read-only property returns an `unsigned long long` representing the moment, in milliseconds since the UNIX epoch, the last HTTP redirect is completed, that is when the last byte of the HTTP response has been received.

#### Deprecated

[MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceTiming/redirectEnd)

***

### ~~redirectStart~~

> `readonly` **redirectStart**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:23776

The legacy **`PerformanceTiming.redirectStart`** read-only property returns an `unsigned long long` representing the moment, in milliseconds since the UNIX epoch, the first HTTP redirect starts.

#### Deprecated

[MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceTiming/redirectStart)

***

### ~~requestStart~~

> `readonly` **requestStart**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:23783

The legacy **`PerformanceTiming.requestStart`** read-only property returns an `unsigned long long` representing the moment, in milliseconds since the UNIX epoch, when the browser sent the request to obtain the actual document, from the server or from a cache.

#### Deprecated

[MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceTiming/requestStart)

***

### ~~responseEnd~~

> `readonly` **responseEnd**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:23790

The legacy **`PerformanceTiming.responseEnd`** read-only property returns an `unsigned long long` representing the moment, in milliseconds since the UNIX epoch, when the browser received the last byte of the response, or when the connection is closed if this happened first, from the server from a cache or from a local resource.

#### Deprecated

[MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceTiming/responseEnd)

***

### ~~responseStart~~

> `readonly` **responseStart**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:23797

The legacy **`PerformanceTiming.responseStart`** read-only property returns an `unsigned long long` representing the moment in time (in milliseconds since the UNIX epoch) when the browser received the first byte of the response from the server, cache, or local resource.

#### Deprecated

[MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceTiming/responseStart)

***

### ~~secureConnectionStart~~

> `readonly` **secureConnectionStart**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:23804

The legacy **`PerformanceTiming.secureConnectionStart`** read-only property returns an `unsigned long long` representing the moment, in milliseconds since the UNIX epoch, where the secure connection handshake starts.

#### Deprecated

[MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceTiming/secureConnectionStart)

***

### ~~unloadEventEnd~~

> `readonly` **unloadEventEnd**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:23811

The legacy **`PerformanceTiming.unloadEventEnd`** read-only property returns an `unsigned long long` representing the moment, in milliseconds since the UNIX epoch, the Window/unload_event event handler finishes.

#### Deprecated

[MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceTiming/unloadEventEnd)

***

### ~~unloadEventStart~~

> `readonly` **unloadEventStart**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:23818

The legacy **`PerformanceTiming.unloadEventStart`** read-only property returns an `unsigned long long` representing the moment, in milliseconds since the UNIX epoch, the Window/unload_event event has been thrown.

#### Deprecated

[MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceTiming/unloadEventStart)

## Methods

### ~~toJSON()~~

> **toJSON**(): `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:23825

The legacy **`toJSON()`** method of the PerformanceTiming interface is a Serialization; it returns a JSON representation of the PerformanceTiming object.

#### Returns

`any`

#### Deprecated

[MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceTiming/toJSON)
