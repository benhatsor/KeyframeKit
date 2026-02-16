[**KeyframeKit.js**](../../README.md)

***

[KeyframeKit.js](../../globals.md) / [\<internal\>](../README.md) / MediaKeys

# Interface: MediaKeys

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:20054

The **`MediaKeys`** interface of Encrypted Media Extensions API represents a set of keys that an associated HTMLMediaElement can use for decryption of media data during playback.
Available only in secure contexts.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/MediaKeys)

## Methods

### createSession()

> **createSession**(`sessionType?`): [`MediaKeySession`](MediaKeySession.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:20060

The `createSession()` method of the MediaKeys interface returns a new MediaKeySession object, which represents a context for message exchange with a content decryption module (CDM).

[MDN Reference](https://developer.mozilla.org/docs/Web/API/MediaKeys/createSession)

#### Parameters

##### sessionType?

[`MediaKeySessionType`](../type-aliases/MediaKeySessionType.md)

#### Returns

[`MediaKeySession`](MediaKeySession.md)

***

### getStatusForPolicy()

> **getStatusForPolicy**(`policy?`): `Promise`\<[`MediaKeyStatus`](../type-aliases/MediaKeyStatus.md)\>

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:20066

The `getStatusForPolicy()` method of the MediaKeys interface is used to check whether the Content Decryption Module (CDM) would allow the presentation of encrypted media data using the keys, based on the specified policy requirements.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/MediaKeys/getStatusForPolicy)

#### Parameters

##### policy?

[`MediaKeysPolicy`](MediaKeysPolicy.md)

#### Returns

`Promise`\<[`MediaKeyStatus`](../type-aliases/MediaKeyStatus.md)\>

***

### setServerCertificate()

> **setServerCertificate**(`serverCertificate`): `Promise`\<`boolean`\>

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:20072

The **`setServerCertificate()`** method of the MediaKeys interface provides a server certificate to be used to encrypt messages to the license server.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/MediaKeys/setServerCertificate)

#### Parameters

##### serverCertificate

[`BufferSource`](../type-aliases/BufferSource.md)

#### Returns

`Promise`\<`boolean`\>
