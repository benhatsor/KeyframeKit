[**KeyframeKit.js**](../../README.md)

***

[KeyframeKit.js](../../globals.md) / [\<internal\>](../README.md) / ValidityState

# Interface: ValidityState

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:32951

The **`ValidityState`** interface represents the _validity states_ that an element can be in, with respect to constraint validation.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/ValidityState)

## Properties

### badInput

> `readonly` **badInput**: `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:32957

The read-only **`badInput`** property of the ValidityState interface indicates if the user has provided input that the browser is unable to convert.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/ValidityState/badInput)

***

### customError

> `readonly` **customError**: `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:32963

The read-only **`customError`** property of the `ValidityState` interface returns `true` if an element doesn't meet the validation required in the custom validity set by the element's HTMLInputElement.setCustomValidity method.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/ValidityState/customError)

***

### patternMismatch

> `readonly` **patternMismatch**: `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:32969

The read-only **`patternMismatch`** property of the `ValidityState` interface indicates if the value of an input, after having been edited by the user, does not conform to the constraints set by the element's `pattern` attribute.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/ValidityState/patternMismatch)

***

### rangeOverflow

> `readonly` **rangeOverflow**: `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:32975

The read-only **`rangeOverflow`** property of the `ValidityState` interface indicates if the value of an input, after having been edited by the user, does not conform to the constraints set by the element's `max` attribute.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/ValidityState/rangeOverflow)

***

### rangeUnderflow

> `readonly` **rangeUnderflow**: `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:32981

The read-only **`rangeUnderflow`** property of the `ValidityState` interface indicates if the value of an input, after having been edited by the user, does not conform to the constraints set by the element's `min` attribute.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/ValidityState/rangeUnderflow)

***

### stepMismatch

> `readonly` **stepMismatch**: `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:32987

The read-only **`stepMismatch`** property of the `ValidityState` interface indicates if the value of an input, after having been edited by the user, does not conform to the constraints set by the element's `step` attribute.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/ValidityState/stepMismatch)

***

### tooLong

> `readonly` **tooLong**: `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:32993

The read-only **`tooLong`** property of the `ValidityState` interface indicates if the value of an input or textarea, after having been edited by the user, exceeds the maximum code-unit length established by the element's `maxlength` attribute.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/ValidityState/tooLong)

***

### tooShort

> `readonly` **tooShort**: `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:32999

The read-only **`tooShort`** property of the `ValidityState` interface indicates if the value of an input, button, select, output, fieldset or textarea, after having been edited by the user, is less than the minimum code-unit length established by the element's `minlength` attribute.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/ValidityState/tooShort)

***

### typeMismatch

> `readonly` **typeMismatch**: `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:33005

The read-only **`typeMismatch`** property of the `ValidityState` interface indicates if the value of an input, after having been edited by the user, does not conform to the constraints set by the element's `type` attribute.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/ValidityState/typeMismatch)

***

### valid

> `readonly` **valid**: `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:33011

The read-only **`valid`** property of the `ValidityState` interface indicates if the value of an input element meets all its validation constraints, and is therefore considered to be valid.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/ValidityState/valid)

***

### valueMissing

> `readonly` **valueMissing**: `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:33017

The read-only **`valueMissing`** property of the `ValidityState` interface indicates if a `required` control, such as an input, select, or textarea, has an empty value.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/ValidityState/valueMissing)
