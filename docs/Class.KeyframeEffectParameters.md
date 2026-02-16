[KeyframeKit](../wiki/Reference) / KeyframeEffectParameters

Defined in: [KeyframeKit.ts:232](https://github.com/benhatsor/KeyframeKit.js/blob/1966e0ac7224d0c2d7294acb5806c377e037d0d6/src/KeyframeKit.ts#L232)

## Constructors

### Constructor

```ts
new KeyframeEffectParameters(__namedParameters: {
  keyframes: KeyframeArgument;
  options?: number | KeyframeEffectOptions;
}): KeyframeEffectParameters;
```

Defined in: [KeyframeKit.ts:237](https://github.com/benhatsor/KeyframeKit.js/blob/1966e0ac7224d0c2d7294acb5806c377e037d0d6/src/KeyframeKit.ts#L237)

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
toAnimation(__namedParameters: {
  target: Element | null;
  timeline?: AnimationTimeline;
}): Animation;
```

Defined in: [KeyframeKit.ts:247](https://github.com/benhatsor/KeyframeKit.js/blob/1966e0ac7224d0c2d7294acb5806c377e037d0d6/src/KeyframeKit.ts#L247)

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
