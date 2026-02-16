[**KeyframeKit.js**](../../README.md)

***

[KeyframeKit.js](../../globals.md) / [\<internal\>](../README.md) / OVR\_multiview2

# Interface: OVR\_multiview2

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:22277

The `OVR_multiview2` extension is part of the WebGL API and adds support for rendering into multiple views simultaneously.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/OVR_multiview2)

## Properties

### FRAMEBUFFER\_ATTACHMENT\_TEXTURE\_BASE\_VIEW\_INDEX\_OVR

> `readonly` **FRAMEBUFFER\_ATTACHMENT\_TEXTURE\_BASE\_VIEW\_INDEX\_OVR**: `38450`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:22285

***

### FRAMEBUFFER\_ATTACHMENT\_TEXTURE\_NUM\_VIEWS\_OVR

> `readonly` **FRAMEBUFFER\_ATTACHMENT\_TEXTURE\_NUM\_VIEWS\_OVR**: `38448`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:22284

***

### FRAMEBUFFER\_INCOMPLETE\_VIEW\_TARGETS\_OVR

> `readonly` **FRAMEBUFFER\_INCOMPLETE\_VIEW\_TARGETS\_OVR**: `38451`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:22287

***

### MAX\_VIEWS\_OVR

> `readonly` **MAX\_VIEWS\_OVR**: `38449`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:22286

## Methods

### framebufferTextureMultiviewOVR()

> **framebufferTextureMultiviewOVR**(`target`, `attachment`, `texture`, `level`, `baseViewIndex`, `numViews`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:22283

The **`OVR_multiview2.framebufferTextureMultiviewOVR()`** method of the WebGL API attaches a multiview texture to a WebGLFramebuffer.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/OVR_multiview2/framebufferTextureMultiviewOVR)

#### Parameters

##### target

`number`

##### attachment

`number`

##### texture

[`WebGLTexture`](WebGLTexture.md) | `null`

##### level

`number`

##### baseViewIndex

`number`

##### numViews

`number`

#### Returns

`void`
