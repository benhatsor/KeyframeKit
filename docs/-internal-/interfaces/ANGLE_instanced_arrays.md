[**KeyframeKit.js**](../../README.md)

***

[KeyframeKit.js](../../globals.md) / [\<internal\>](../README.md) / ANGLE\_instanced\_arrays

# Interface: ANGLE\_instanced\_arrays

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:2583

The **`ANGLE_instanced_arrays`** extension is part of the WebGL API and allows to draw the same object, or groups of similar objects multiple times, if they share the same vertex data, primitive count and type.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/ANGLE_instanced_arrays)

## Properties

### VERTEX\_ATTRIB\_ARRAY\_DIVISOR\_ANGLE

> `readonly` **VERTEX\_ATTRIB\_ARRAY\_DIVISOR\_ANGLE**: `35070`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:2602

## Methods

### drawArraysInstancedANGLE()

> **drawArraysInstancedANGLE**(`mode`, `first`, `count`, `primcount`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:2589

The **`ANGLE_instanced_arrays.drawArraysInstancedANGLE()`** method of the WebGL API renders primitives from array data like the WebGLRenderingContext.drawArrays() method.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/ANGLE_instanced_arrays/drawArraysInstancedANGLE)

#### Parameters

##### mode

`number`

##### first

`number`

##### count

`number`

##### primcount

`number`

#### Returns

`void`

***

### drawElementsInstancedANGLE()

> **drawElementsInstancedANGLE**(`mode`, `count`, `type`, `offset`, `primcount`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:2595

The **`ANGLE_instanced_arrays.drawElementsInstancedANGLE()`** method of the WebGL API renders primitives from array data like the WebGLRenderingContext.drawElements() method.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/ANGLE_instanced_arrays/drawElementsInstancedANGLE)

#### Parameters

##### mode

`number`

##### count

`number`

##### type

`number`

##### offset

`number`

##### primcount

`number`

#### Returns

`void`

***

### vertexAttribDivisorANGLE()

> **vertexAttribDivisorANGLE**(`index`, `divisor`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:2601

The **ANGLE_instanced_arrays.vertexAttribDivisorANGLE()** method of the WebGL API modifies the rate at which generic vertex attributes advance when rendering multiple instances of primitives with ANGLE_instanced_arrays.drawArraysInstancedANGLE() and ANGLE_instanced_arrays.drawElementsInstancedANGLE().

[MDN Reference](https://developer.mozilla.org/docs/Web/API/ANGLE_instanced_arrays/vertexAttribDivisorANGLE)

#### Parameters

##### index

`number`

##### divisor

`number`

#### Returns

`void`
