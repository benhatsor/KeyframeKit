[KeyframeKit.js](../wiki/Reference) / KeyframeEffectParameters

# Class: KeyframeEffectParameters

Defined in: [KeyframeKit.ts:232](https://github.com/benhatsor/KeyframeKit.js/blob/ae43c8a2cad42e60885f2d15af16bfd8bfa399a4/src/KeyframeKit.ts#L232)

## Constructors

### Constructor

```ts
new KeyframeEffectParameters(__namedParameters: {
  keyframes: KeyframeArgument;
  options?: number | KeyframeEffectOptions;
}): KeyframeEffectParameters;
```

Defined in: [KeyframeKit.ts:237](https://github.com/benhatsor/KeyframeKit.js/blob/ae43c8a2cad42e60885f2d15af16bfd8bfa399a4/src/KeyframeKit.ts#L237)

#### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`__namedParameters`

</td>
<td>

{ `keyframes`: [`KeyframeArgument`](../wiki/TypeAlias.KeyframeArgument); `options?`: `number` | `KeyframeEffectOptions`; }

</td>
</tr>
<tr>
<td>

`__namedParameters.keyframes`

</td>
<td>

[`KeyframeArgument`](../wiki/TypeAlias.KeyframeArgument)

</td>
</tr>
<tr>
<td>

`__namedParameters.options?`

</td>
<td>

`number` | `KeyframeEffectOptions`

</td>
</tr>
</tbody>
</table>

#### Returns

`KeyframeEffectParameters`

## Properties

### keyframes

```ts
keyframes: KeyframeArgument;
```

Defined in: [KeyframeKit.ts:234](https://github.com/benhatsor/KeyframeKit.js/blob/ae43c8a2cad42e60885f2d15af16bfd8bfa399a4/src/KeyframeKit.ts#L234)

***

### options?

```ts
optional options: number | KeyframeEffectOptions;
```

Defined in: [KeyframeKit.ts:235](https://github.com/benhatsor/KeyframeKit.js/blob/ae43c8a2cad42e60885f2d15af16bfd8bfa399a4/src/KeyframeKit.ts#L235)

## Methods

### toAnimation()

```ts
toAnimation(__namedParameters: {
  target: Element | null;
  timeline?: AnimationTimeline;
}): Animation;
```

Defined in: [KeyframeKit.ts:247](https://github.com/benhatsor/KeyframeKit.js/blob/ae43c8a2cad42e60885f2d15af16bfd8bfa399a4/src/KeyframeKit.ts#L247)

#### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`__namedParameters`

</td>
<td>

{ `target`: [`Element`](https://developer.mozilla.org/docs/Web/API/Element) | `null`; `timeline?`: [`AnimationTimeline`](https://developer.mozilla.org/docs/Web/API/AnimationTimeline); }

</td>
</tr>
<tr>
<td>

`__namedParameters.target`

</td>
<td>

[`Element`](https://developer.mozilla.org/docs/Web/API/Element) | `null`

</td>
</tr>
<tr>
<td>

`__namedParameters.timeline?`

</td>
<td>

[`AnimationTimeline`](https://developer.mozilla.org/docs/Web/API/AnimationTimeline)

</td>
</tr>
</tbody>
</table>

#### Returns

[`Animation`](https://developer.mozilla.org/docs/Web/API/Animation)
