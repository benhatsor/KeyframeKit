[**KeyframeKit.js**](../../README.md)

***

[KeyframeKit.js](../../globals.md) / [\<internal\>](../README.md) / Gamepad

# Interface: Gamepad

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12339

The **`Gamepad`** interface of the Gamepad API defines an individual gamepad or other controller, allowing access to information such as button presses, axis positions, and id.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Gamepad)

## Properties

### axes

> `readonly` **axes**: readonly `number`[]

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12345

The **`Gamepad.axes`** property of the Gamepad interface returns an array representing the controls with axes present on the device (e.g., analog thumb sticks).

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Gamepad/axes)

***

### buttons

> `readonly` **buttons**: readonly [`GamepadButton`](GamepadButton.md)[]

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12351

The **`buttons`** property of the Gamepad interface returns an array of GamepadButton objects representing the buttons present on the device.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Gamepad/buttons)

***

### connected

> `readonly` **connected**: `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12357

The **`Gamepad.connected`** property of the still connected to the system.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Gamepad/connected)

***

### id

> `readonly` **id**: `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12363

The **`Gamepad.id`** property of the Gamepad interface returns a string containing some information about the controller.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Gamepad/id)

***

### index

> `readonly` **index**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12369

The **`Gamepad.index`** property of the Gamepad interface returns an integer that is auto-incremented to be unique for each device currently connected to the system.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Gamepad/index)

***

### mapping

> `readonly` **mapping**: [`GamepadMappingType`](../type-aliases/GamepadMappingType.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12375

The **`Gamepad.mapping`** property of the remapped the controls on the device to a known layout.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Gamepad/mapping)

***

### timestamp

> `readonly` **timestamp**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12381

The **`Gamepad.timestamp`** property of the representing the last time the data for this gamepad was updated.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Gamepad/timestamp)

***

### vibrationActuator

> `readonly` **vibrationActuator**: [`GamepadHapticActuator`](GamepadHapticActuator.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12387

The **`vibrationActuator`** read-only property of the Gamepad interface returns a GamepadHapticActuator object, which represents haptic feedback hardware available on the controller.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Gamepad/vibrationActuator)
