[**KeyframeKit.js**](../../README.md)

***

[KeyframeKit.js](../../globals.md) / [\<internal\>](../README.md) / TextMetrics

# Interface: TextMetrics

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:31896

The **`TextMetrics`** interface represents the dimensions of a piece of text in the canvas; a `TextMetrics` instance can be retrieved using the CanvasRenderingContext2D.measureText() method.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/TextMetrics)

## Properties

### actualBoundingBoxAscent

> `readonly` **actualBoundingBoxAscent**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:31902

The read-only **`actualBoundingBoxAscent`** property of the TextMetrics interface is a `double` giving the distance from the horizontal line indicated by the CanvasRenderingContext2D.textBaseline attribute to the top of the bounding rectangle used to render the text, in CSS pixels.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/TextMetrics/actualBoundingBoxAscent)

***

### actualBoundingBoxDescent

> `readonly` **actualBoundingBoxDescent**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:31908

The read-only `actualBoundingBoxDescent` property of the TextMetrics interface is a `double` giving the distance from the horizontal line indicated by the CanvasRenderingContext2D.textBaseline attribute to the bottom of the bounding rectangle used to render the text, in CSS pixels.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/TextMetrics/actualBoundingBoxDescent)

***

### actualBoundingBoxLeft

> `readonly` **actualBoundingBoxLeft**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:31914

The read-only `actualBoundingBoxLeft` property of the TextMetrics interface is a `double` giving the distance parallel to the baseline from the alignment point given by the CanvasRenderingContext2D.textAlign property to the left side of the bounding rectangle of the given text, in CSS pixels; positive numbers indicating a distance going left from the given alignment point.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/TextMetrics/actualBoundingBoxLeft)

***

### actualBoundingBoxRight

> `readonly` **actualBoundingBoxRight**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:31920

The read-only `actualBoundingBoxRight` property of the TextMetrics interface is a `double` giving the distance parallel to the baseline from the alignment point given by the CanvasRenderingContext2D.textAlign property to the right side of the bounding rectangle of the given text, in CSS pixels.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/TextMetrics/actualBoundingBoxRight)

***

### alphabeticBaseline

> `readonly` **alphabeticBaseline**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:31926

The read-only `alphabeticBaseline` property of the TextMetrics interface is a `double` giving the distance from the horizontal line indicated by the CanvasRenderingContext2D.textBaseline property to the alphabetic baseline of the line box, in CSS pixels.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/TextMetrics/alphabeticBaseline)

***

### emHeightAscent

> `readonly` **emHeightAscent**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:31932

The read-only `emHeightAscent` property of the TextMetrics interface returns the distance from the horizontal line indicated by the CanvasRenderingContext2D.textBaseline property to the top of the _em_ square in the line box, in CSS pixels.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/TextMetrics/emHeightAscent)

***

### emHeightDescent

> `readonly` **emHeightDescent**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:31938

The read-only `emHeightDescent` property of the TextMetrics interface returns the distance from the horizontal line indicated by the CanvasRenderingContext2D.textBaseline property to the bottom of the _em_ square in the line box, in CSS pixels.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/TextMetrics/emHeightDescent)

***

### fontBoundingBoxAscent

> `readonly` **fontBoundingBoxAscent**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:31944

The read-only `fontBoundingBoxAscent` property of the TextMetrics interface returns the distance from the horizontal line indicated by the CanvasRenderingContext2D.textBaseline attribute, to the top of the highest bounding rectangle of all the fonts used to render the text, in CSS pixels.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/TextMetrics/fontBoundingBoxAscent)

***

### fontBoundingBoxDescent

> `readonly` **fontBoundingBoxDescent**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:31950

The read-only `fontBoundingBoxDescent` property of the TextMetrics interface returns the distance from the horizontal line indicated by the CanvasRenderingContext2D.textBaseline attribute to the bottom of the bounding rectangle of all the fonts used to render the text, in CSS pixels.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/TextMetrics/fontBoundingBoxDescent)

***

### hangingBaseline

> `readonly` **hangingBaseline**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:31956

The read-only `hangingBaseline` property of the TextMetrics interface is a `double` giving the distance from the horizontal line indicated by the CanvasRenderingContext2D.textBaseline property to the hanging baseline of the line box, in CSS pixels.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/TextMetrics/hangingBaseline)

***

### ideographicBaseline

> `readonly` **ideographicBaseline**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:31962

The read-only `ideographicBaseline` property of the TextMetrics interface is a `double` giving the distance from the horizontal line indicated by the CanvasRenderingContext2D.textBaseline property to the ideographic baseline of the line box, in CSS pixels.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/TextMetrics/ideographicBaseline)

***

### width

> `readonly` **width**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:31968

The read-only **`width`** property of the TextMetrics interface contains the text's advance width (the width of that inline box) in CSS pixels.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/TextMetrics/width)
