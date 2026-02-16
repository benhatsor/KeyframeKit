[KeyframeKit](../wiki/Reference) / KeyframeEffectParameters

Defined in: [KeyframeKit.ts:232](https://github.com/benhatsor/KeyframeKit.js/blob/bd3c190bbce7e40f265986d7d43fd0735867194d/src/KeyframeKit.ts#L232)

## Constructors

### Constructor

```ts
new KeyframeEffectParameters(options: {
  keyframes: KeyframeArgument;
  options?: number | KeyframeEffectOptions;
}): KeyframeEffectParameters;
```

Defined in: [KeyframeKit.ts:237](https://github.com/benhatsor/KeyframeKit.js/blob/bd3c190bbce7e40f265986d7d43fd0735867194d/src/KeyframeKit.ts#L237)

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

`options`

</td>
<td>

{ `keyframes`: [`KeyframeArgument`](../wiki/TypeAlias.KeyframeArgument); `options?`: `number` | `KeyframeEffectOptions`; }

</td>
</tr>
<tr>
<td>

`options.keyframes`

</td>
<td>

[`KeyframeArgument`](../wiki/TypeAlias.KeyframeArgument)

</td>
</tr>
<tr>
<td>

`options.options?`

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
toAnimation(options: {
  target: Element | null;
  timeline?: AnimationTimeline;
}): Animation;
```

Defined in: [KeyframeKit.ts:247](https://github.com/benhatsor/KeyframeKit.js/blob/bd3c190bbce7e40f265986d7d43fd0735867194d/src/KeyframeKit.ts#L247)

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

`options`

</td>
<td>

{ `target`: [`Element`](https://developer.mozilla.org/docs/Web/API/Element) | `null`; `timeline?`: [`AnimationTimeline`](https://developer.mozilla.org/docs/Web/API/AnimationTimeline); }

</td>
</tr>
<tr>
<td>

`options.target`

</td>
<td>

[`Element`](https://developer.mozilla.org/docs/Web/API/Element) | `null`

</td>
</tr>
<tr>
<td>

`options.timeline?`

</td>
<td>

[`AnimationTimeline`](https://developer.mozilla.org/docs/Web/API/AnimationTimeline)

</td>
</tr>
</tbody>
</table>

#### Returns

[`Animation`](https://developer.mozilla.org/docs/Web/API/Animation)
