[**KeyframeKit.js**](../../README.md)

***

[KeyframeKit.js](../../globals.md) / [\<internal\>](../README.md) / RTCRtpReceiver

# Interface: RTCRtpReceiver

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:25242

The **`RTCRtpReceiver`** interface of the WebRTC API manages the reception and decoding of data for a MediaStreamTrack on an RTCPeerConnection.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCRtpReceiver)

## Properties

### jitterBufferTarget

> **jitterBufferTarget**: `number` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:25248

The **`jitterBufferTarget`** property of the RTCRtpReceiver interface is a DOMHighResTimeStamp that indicates the application's preferred duration, in milliseconds, for which the jitter buffer should hold media before playing it out.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCRtpReceiver/jitterBufferTarget)

***

### track

> `readonly` **track**: [`MediaStreamTrack`](MediaStreamTrack.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:25254

The **`track`** read-only property of the associated with the current RTCRtpReceiver instance.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCRtpReceiver/track)

***

### transform

> **transform**: [`RTCRtpScriptTransform`](RTCRtpScriptTransform.md) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:25260

The **`transform`** property of the RTCRtpReceiver object is used to insert a transform stream (TransformStream) running in a worker thread into the receiver pipeline.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCRtpReceiver/transform)

***

### transport

> `readonly` **transport**: [`RTCDtlsTransport`](RTCDtlsTransport.md) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:25266

The read-only **`transport`** property of an used to interact with the underlying transport over which the receiver is exchanging Real-time Transport Control Protocol (RTCP) packets.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCRtpReceiver/transport)

## Methods

### getContributingSources()

> **getContributingSources**(): [`RTCRtpContributingSource`](RTCRtpContributingSource.md)[]

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:25272

The **`getContributingSources()`** method of the RTCRtpReceiver interface returns an array of objects, each corresponding to one CSRC (contributing source) identifier received by the current `RTCRtpReceiver` in the last ten seconds.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCRtpReceiver/getContributingSources)

#### Returns

[`RTCRtpContributingSource`](RTCRtpContributingSource.md)[]

***

### getParameters()

> **getParameters**(): [`RTCRtpReceiveParameters`](RTCRtpReceiveParameters.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:25278

The **`getParameters()`** method of the RTCRtpReceiver interface returns an object describing the current configuration for how the receiver's RTCRtpReceiver.track is decoded.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCRtpReceiver/getParameters)

#### Returns

[`RTCRtpReceiveParameters`](RTCRtpReceiveParameters.md)

***

### getStats()

> **getStats**(): `Promise`\<`RTCStatsReport`\>

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:25284

The RTCRtpReceiver method **`getStats()`** asynchronously requests an RTCStatsReport object which provides statistics about incoming traffic on the owning RTCPeerConnection, returning a Promise whose fulfillment handler will be called once the results are available.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCRtpReceiver/getStats)

#### Returns

`Promise`\<`RTCStatsReport`\>

***

### getSynchronizationSources()

> **getSynchronizationSources**(): [`RTCRtpSynchronizationSource`](RTCRtpSynchronizationSource.md)[]

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:25290

The **`getSynchronizationSources()`** method of the RTCRtpReceiver interface returns an array of objects, each corresponding to one SSRC (synchronization source) identifier received by the current `RTCRtpReceiver` in the last ten seconds.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCRtpReceiver/getSynchronizationSources)

#### Returns

[`RTCRtpSynchronizationSource`](RTCRtpSynchronizationSource.md)[]
