[**KeyframeKit.js**](../../README.md)

***

[KeyframeKit.js](../../globals.md) / [\<internal\>](../README.md) / DOMException

# Interface: DOMException

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:8583

The **`DOMException`** interface represents an abnormal event (called an **exception**) that occurs as a result of calling a method or accessing a property of a web API.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMException)

## Extends

- `Error`

## Extended by

- [`RTCError`](RTCError.md)

## Properties

### ABORT\_ERR

> `readonly` **ABORT\_ERR**: `20`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:8622

***

### cause?

> `optional` **cause**: `unknown`

Defined in: node\_modules/typescript/lib/lib.es2022.error.d.ts:26

#### Inherited from

`Error.cause`

***

### ~~code~~

> `readonly` **code**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:8590

The **`code`** read-only property of the DOMException interface returns one of the legacy error code constants, or `0` if none match.

#### Deprecated

[MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMException/code)

***

### DATA\_CLONE\_ERR

> `readonly` **DATA\_CLONE\_ERR**: `25`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:8627

***

### DOMSTRING\_SIZE\_ERR

> `readonly` **DOMSTRING\_SIZE\_ERR**: `2`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:8604

***

### HIERARCHY\_REQUEST\_ERR

> `readonly` **HIERARCHY\_REQUEST\_ERR**: `3`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:8605

***

### INDEX\_SIZE\_ERR

> `readonly` **INDEX\_SIZE\_ERR**: `1`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:8603

***

### INUSE\_ATTRIBUTE\_ERR

> `readonly` **INUSE\_ATTRIBUTE\_ERR**: `10`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:8612

***

### INVALID\_ACCESS\_ERR

> `readonly` **INVALID\_ACCESS\_ERR**: `15`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:8617

***

### INVALID\_CHARACTER\_ERR

> `readonly` **INVALID\_CHARACTER\_ERR**: `5`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:8607

***

### INVALID\_MODIFICATION\_ERR

> `readonly` **INVALID\_MODIFICATION\_ERR**: `13`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:8615

***

### INVALID\_NODE\_TYPE\_ERR

> `readonly` **INVALID\_NODE\_TYPE\_ERR**: `24`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:8626

***

### INVALID\_STATE\_ERR

> `readonly` **INVALID\_STATE\_ERR**: `11`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:8613

***

### message

> `readonly` **message**: `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:8596

The **`message`** read-only property of the a message or description associated with the given error name.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMException/message)

#### Overrides

`Error.message`

***

### name

> `readonly` **name**: `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:8602

The **`name`** read-only property of the one of the strings associated with an error name.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMException/name)

#### Overrides

`Error.name`

***

### NAMESPACE\_ERR

> `readonly` **NAMESPACE\_ERR**: `14`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:8616

***

### NETWORK\_ERR

> `readonly` **NETWORK\_ERR**: `19`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:8621

***

### NO\_DATA\_ALLOWED\_ERR

> `readonly` **NO\_DATA\_ALLOWED\_ERR**: `6`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:8608

***

### NO\_MODIFICATION\_ALLOWED\_ERR

> `readonly` **NO\_MODIFICATION\_ALLOWED\_ERR**: `7`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:8609

***

### NOT\_FOUND\_ERR

> `readonly` **NOT\_FOUND\_ERR**: `8`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:8610

***

### NOT\_SUPPORTED\_ERR

> `readonly` **NOT\_SUPPORTED\_ERR**: `9`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:8611

***

### QUOTA\_EXCEEDED\_ERR

> `readonly` **QUOTA\_EXCEEDED\_ERR**: `22`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:8624

***

### SECURITY\_ERR

> `readonly` **SECURITY\_ERR**: `18`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:8620

***

### stack?

> `optional` **stack**: `string`

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1078

#### Inherited from

`Error.stack`

***

### SYNTAX\_ERR

> `readonly` **SYNTAX\_ERR**: `12`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:8614

***

### TIMEOUT\_ERR

> `readonly` **TIMEOUT\_ERR**: `23`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:8625

***

### TYPE\_MISMATCH\_ERR

> `readonly` **TYPE\_MISMATCH\_ERR**: `17`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:8619

***

### URL\_MISMATCH\_ERR

> `readonly` **URL\_MISMATCH\_ERR**: `21`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:8623

***

### VALIDATION\_ERR

> `readonly` **VALIDATION\_ERR**: `16`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:8618

***

### WRONG\_DOCUMENT\_ERR

> `readonly` **WRONG\_DOCUMENT\_ERR**: `4`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:8606
