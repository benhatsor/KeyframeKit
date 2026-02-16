[**KeyframeKit.js**](../../README.md)

***

[KeyframeKit.js](../../globals.md) / [\<internal\>](../README.md) / IDBKeyRange

# Variable: IDBKeyRange

> **IDBKeyRange**: \{(): [`IDBKeyRange`](../interfaces/IDBKeyRange.md); `prototype`: [`IDBKeyRange`](../interfaces/IDBKeyRange.md); `bound`: [`IDBKeyRange`](../interfaces/IDBKeyRange.md); `lowerBound`: [`IDBKeyRange`](../interfaces/IDBKeyRange.md); `only`: [`IDBKeyRange`](../interfaces/IDBKeyRange.md); `upperBound`: [`IDBKeyRange`](../interfaces/IDBKeyRange.md); \}

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:18198

## Type Declaration

## Returns

[`IDBKeyRange`](../interfaces/IDBKeyRange.md)

### prototype

> **prototype**: [`IDBKeyRange`](../interfaces/IDBKeyRange.md)

### bound()

> **bound**(`lower`, `upper`, `lowerOpen?`, `upperOpen?`): [`IDBKeyRange`](../interfaces/IDBKeyRange.md)

The **`bound()`** static method of the IDBKeyRange interface creates a new key range with the specified upper and lower bounds.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBKeyRange/bound_static)

#### Parameters

##### lower

`any`

##### upper

`any`

##### lowerOpen?

`boolean`

##### upperOpen?

`boolean`

#### Returns

[`IDBKeyRange`](../interfaces/IDBKeyRange.md)

### lowerBound()

> **lowerBound**(`lower`, `open?`): [`IDBKeyRange`](../interfaces/IDBKeyRange.md)

The **`lowerBound()`** static method of the By default, it includes the lower endpoint value and is closed.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBKeyRange/lowerBound_static)

#### Parameters

##### lower

`any`

##### open?

`boolean`

#### Returns

[`IDBKeyRange`](../interfaces/IDBKeyRange.md)

### only()

> **only**(`value`): [`IDBKeyRange`](../interfaces/IDBKeyRange.md)

The **`only()`** static method of the IDBKeyRange interface creates a new key range containing a single value.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBKeyRange/only_static)

#### Parameters

##### value

`any`

#### Returns

[`IDBKeyRange`](../interfaces/IDBKeyRange.md)

### upperBound()

> **upperBound**(`upper`, `open?`): [`IDBKeyRange`](../interfaces/IDBKeyRange.md)

The **`upperBound()`** static method of the it includes the upper endpoint value and is closed.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBKeyRange/upperBound_static)

#### Parameters

##### upper

`any`

##### open?

`boolean`

#### Returns

[`IDBKeyRange`](../interfaces/IDBKeyRange.md)
