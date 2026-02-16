[KeyframeKit](../wiki/Reference) / KeyframeEffectParameters

Defined in: [KeyframeKit.ts:232](https://github.com/benhatsor/KeyframeKit.js/blob/886792e1530f55d27efcd793747b20129341d83c/src/KeyframeKit.ts#L232)

## Constructors

### Constructor

```ts
new KeyframeEffectParameters(obj: {
  keyframes: KeyframeArgument;
  options?: number | KeyframeEffectOptions;
}): KeyframeEffectParameters;
```

Defined in: [KeyframeKit.ts:237](https://github.com/benhatsor/KeyframeKit.js/blob/886792e1530f55d27efcd793747b20129341d83c/src/KeyframeKit.ts#L237)

#### Parameters

<table>
<thead>
<tr>
<th align="left">Parameter</th>
<th align="left">Type</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`obj`

</td>
<td>

{ `keyframes`: [`KeyframeArgument`](../wiki/TypeAlias.KeyframeArgument); `options?`: `number` | `KeyframeEffectOptions`; }

</td>
</tr>
<tr>
<td>

`obj.keyframes`

</td>
<td>

[`KeyframeArgument`](../wiki/TypeAlias.KeyframeArgument)

</td>
</tr>
<tr>
<td>

`obj.options?`

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

<table>
<thead>
<tr>
<th align="left">Property</th>
<th align="left">Type</th>
</tr>
</thead>
<tbody>
<tr>
<td>

<a id="property-keyframes"></a> `keyframes`

</td>
<td>

[`KeyframeArgument`](../wiki/TypeAlias.KeyframeArgument)

</td>
</tr>
<tr>
<td>

<a id="property-options"></a> `options?`

</td>
<td>

`number` | `KeyframeEffectOptions`

</td>
</tr>
</tbody>
</table>

## Methods

### toAnimation()

```ts
toAnimation(obj: {
  target: Element | null;
  timeline?: AnimationTimeline;
}): Animation;
```

Defined in: [KeyframeKit.ts:247](https://github.com/benhatsor/KeyframeKit.js/blob/886792e1530f55d27efcd793747b20129341d83c/src/KeyframeKit.ts#L247)

#### Parameters

<table>
<thead>
<tr>
<th align="left">Parameter</th>
<th align="left">Type</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`obj`

</td>
<td>

{ `target`: [`Element`](https://developer.mozilla.org/docs/Web/API/Element) | `null`; `timeline?`: [`AnimationTimeline`](https://developer.mozilla.org/docs/Web/API/AnimationTimeline); }

</td>
</tr>
<tr>
<td>

`obj.target`

</td>
<td>

[`Element`](https://developer.mozilla.org/docs/Web/API/Element) | `null`

</td>
</tr>
<tr>
<td>

`obj.timeline?`

</td>
<td>

[`AnimationTimeline`](https://developer.mozilla.org/docs/Web/API/AnimationTimeline)

</td>
</tr>
</tbody>
</table>

#### Returns

[`Animation`](https://developer.mozilla.org/docs/Web/API/Animation)
