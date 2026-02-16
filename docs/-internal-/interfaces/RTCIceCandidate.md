[**KeyframeKit.js**](../../README.md)

***

[KeyframeKit.js](../../globals.md) / [\<internal\>](../README.md) / RTCIceCandidate

# Interface: RTCIceCandidate

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:24805

The **`RTCIceCandidate`** interface—part of the WebRTC API—represents a candidate Interactive Connectivity Establishment (ICE) configuration which may be used to establish an RTCPeerConnection.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCIceCandidate)

## Properties

### address

> `readonly` **address**: `string` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:24811

The **RTCIceCandidate** interface's read-only **`address`** property is a string providing the IP address of the device which is the source of the candidate.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCIceCandidate/address)

***

### candidate

> `readonly` **candidate**: `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:24817

The read-only property **`candidate`** on the RTCIceCandidate interface returns a string describing the candidate in detail.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCIceCandidate/candidate)

***

### component

> `readonly` **component**: [`RTCIceComponent`](../type-aliases/RTCIceComponent.md) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:24823

The read-only **`component`** property on the RTCIceCandidate interface is a string which indicates whether the candidate is an RTP or an RTCP candidate.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCIceCandidate/component)

***

### foundation

> `readonly` **foundation**: `string` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:24829

The **`foundation`** read-only property of the RTCIceCandidate interface is a string that allows correlation of candidates from a common network path on multiple RTCIceTransport objects.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCIceCandidate/foundation)

***

### port

> `readonly` **port**: `number` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:24835

The **RTCIceCandidate** interface's read-only **`port`** property contains the port number on the device at the address given by RTCIceCandidate.address at which the candidate's peer can be reached.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCIceCandidate/port)

***

### priority

> `readonly` **priority**: `number` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:24841

The **RTCIceCandidate** interface's read-only **`priority`** property specifies the candidate's priority according to the remote peer; the higher this value is, the better the remote peer considers the candidate to be.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCIceCandidate/priority)

***

### protocol

> `readonly` **protocol**: [`RTCIceProtocol`](../type-aliases/RTCIceProtocol.md) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:24847

The **RTCIceCandidate** interface's read-only **`protocol`** property is a string which indicates whether the candidate uses UDP or TCP as its transport protocol.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCIceCandidate/protocol)

***

### relatedAddress

> `readonly` **relatedAddress**: `string` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:24853

The **RTCIceCandidate** interface's read-only **`relatedAddress`** property is a string indicating the **related address** of a relay or reflexive candidate.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCIceCandidate/relatedAddress)

***

### relatedPort

> `readonly` **relatedPort**: `number` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:24859

The **RTCIceCandidate** interface's read-only **`relatedPort`** property indicates the port number of reflexive or relay candidates.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCIceCandidate/relatedPort)

***

### sdpMid

> `readonly` **sdpMid**: `string` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:24871

The read-only property **`sdpMid`** on the RTCIceCandidate interface returns a string specifying the media stream identification tag of the media component with which the candidate is associated.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCIceCandidate/sdpMid)

***

### sdpMLineIndex

> `readonly` **sdpMLineIndex**: `number` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:24865

The read-only **`sdpMLineIndex`** property on the RTCIceCandidate interface is a zero-based index of the m-line describing the media associated with the candidate.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCIceCandidate/sdpMLineIndex)

***

### tcpType

> `readonly` **tcpType**: [`RTCIceTcpCandidateType`](../type-aliases/RTCIceTcpCandidateType.md) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:24877

The **RTCIceCandidate** interface's read-only **`tcpType`** property is included on TCP candidates to provide additional details about the candidate type.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCIceCandidate/tcpType)

***

### type

> `readonly` **type**: [`RTCIceCandidateType`](../type-aliases/RTCIceCandidateType.md) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:24883

The **RTCIceCandidate** interface's read-only **`type`** specifies the type of candidate the object represents.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCIceCandidate/type)

***

### usernameFragment

> `readonly` **usernameFragment**: `string` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:24889

The read-only **`usernameFragment`** property on the RTCIceCandidate interface is a string indicating the username fragment ('ufrag') that uniquely identifies a single ICE interaction session.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCIceCandidate/usernameFragment)

## Methods

### toJSON()

> **toJSON**(): [`RTCIceCandidateInit`](RTCIceCandidateInit.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:24895

The RTCIceCandidate method **`toJSON()`** converts the `RTCIceCandidate` on which it's called into JSON.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCIceCandidate/toJSON)

#### Returns

[`RTCIceCandidateInit`](RTCIceCandidateInit.md)
