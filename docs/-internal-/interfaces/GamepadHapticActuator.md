[**KeyframeKit.js**](../../README.md)

***

[KeyframeKit.js](../../globals.md) / [\<internal\>](../README.md) / GamepadHapticActuator

# Interface: GamepadHapticActuator

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12450

The **`GamepadHapticActuator`** interface of the Gamepad API represents hardware in the controller designed to provide haptic feedback to the user (if available), most commonly vibration hardware.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/GamepadHapticActuator)

## Methods

### playEffect()

> **playEffect**(`type`, `params?`): `Promise`\<[`GamepadHapticsResult`](../type-aliases/GamepadHapticsResult.md)\>

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12456

The **`playEffect()`** method of the GamepadHapticActuator interface causes the hardware to play a specific vibration effect.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/GamepadHapticActuator/playEffect)

#### Parameters

##### type

[`GamepadHapticEffectType`](../type-aliases/GamepadHapticEffectType.md)

##### params?

[`GamepadEffectParameters`](GamepadEffectParameters.md)

#### Returns

`Promise`\<[`GamepadHapticsResult`](../type-aliases/GamepadHapticsResult.md)\>

***

### reset()

> **reset**(): `Promise`\<[`GamepadHapticsResult`](../type-aliases/GamepadHapticsResult.md)\>

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:12462

The **`reset()`** method of the GamepadHapticActuator interface stops the hardware from playing an active vibration effect.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/GamepadHapticActuator/reset)

#### Returns

`Promise`\<[`GamepadHapticsResult`](../type-aliases/GamepadHapticsResult.md)\>
