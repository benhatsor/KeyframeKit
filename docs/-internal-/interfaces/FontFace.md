[**KeyframeKit.js**](../../README.md)

***

[KeyframeKit.js](../../globals.md) / [\<internal\>](../README.md) / FontFace

# Interface: FontFace

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12050

The **`FontFace`** interface of the CSS Font Loading API represents a single usable font face.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/FontFace)

## Properties

### ascentOverride

> **ascentOverride**: `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12056

The **`ascentOverride`** property of the FontFace interface returns and sets the ascent metric for the font, the height above the baseline that CSS uses to lay out line boxes in an inline formatting context.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/FontFace/ascentOverride)

***

### descentOverride

> **descentOverride**: `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12062

The **`descentOverride`** property of the FontFace interface returns and sets the value of the @font-face/descent-override descriptor.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/FontFace/descentOverride)

***

### display

> **display**: [`FontDisplay`](../type-aliases/FontDisplay.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12068

The **`display`** property of the FontFace interface determines how a font face is displayed based on whether and when it is downloaded and ready to use.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/FontFace/display)

***

### family

> **family**: `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12074

The **`FontFace.family`** property allows the author to get or set the font family of a FontFace object.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/FontFace/family)

***

### featureSettings

> **featureSettings**: `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12080

The **`featureSettings`** property of the FontFace interface retrieves or sets infrequently used font features that are not available from a font's variant properties.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/FontFace/featureSettings)

***

### lineGapOverride

> **lineGapOverride**: `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12086

The **`lineGapOverride`** property of the FontFace interface returns and sets the value of the @font-face/line-gap-override descriptor.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/FontFace/lineGapOverride)

***

### loaded

> `readonly` **loaded**: `Promise`\<`FontFace`\>

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12092

The **`loaded`** read-only property of the FontFace interface returns a Promise that resolves with the current `FontFace` object when the font specified in the object's constructor is done loading or rejects with a `SyntaxError`.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/FontFace/loaded)

***

### status

> `readonly` **status**: [`FontFaceLoadStatus`](../type-aliases/FontFaceLoadStatus.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12098

The **`status`** read-only property of the FontFace interface returns an enumerated value indicating the status of the font, one of `'unloaded'`, `'loading'`, `'loaded'`, or `'error'`.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/FontFace/status)

***

### stretch

> **stretch**: `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12104

The **`stretch`** property of the FontFace interface retrieves or sets how the font stretches.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/FontFace/stretch)

***

### style

> **style**: `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12110

The **`style`** property of the FontFace interface retrieves or sets the font's style.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/FontFace/style)

***

### unicodeRange

> **unicodeRange**: `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12116

The **`unicodeRange`** property of the FontFace interface retrieves or sets the range of unicode code points encompassing the font.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/FontFace/unicodeRange)

***

### weight

> **weight**: `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12122

The **`weight`** property of the FontFace interface retrieves or sets the weight of the font.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/FontFace/weight)

## Methods

### load()

> **load**(): `Promise`\<`FontFace`\>

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12128

The **`load()`** method of the FontFace interface requests and loads a font whose `source` was specified as a URL.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/FontFace/load)

#### Returns

`Promise`\<`FontFace`\>
