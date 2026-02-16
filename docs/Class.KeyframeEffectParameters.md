[KeyframeKit](../wiki/Reference) / KeyframeEffectParameters

# Class: KeyframeEffectParameters

Defined in: [KeyframeKit.ts:232](https://github.com/benhatsor/KeyframeKit.js/blob/c4b67bcaa597971169b8527ab3956df5ff8309e6/src/KeyframeKit.ts#L232)

## Constructors

### Constructor

```ts
new KeyframeEffectParameters(__namedParameters: {
  keyframes: KeyframeArgument;
  options?: number | KeyframeEffectOptions;
}): KeyframeEffectParameters;
```

Defined in: [KeyframeKit.ts:237](https://github.com/benhatsor/KeyframeKit.js/blob/c4b67bcaa597971169b8527ab3956df5ff8309e6/src/KeyframeKit.ts#L237)

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

<table>
<thead>
<tr>
<th>Property</th>
<th>Type</th>
<th>Defined in</th>
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
<td>

[KeyframeKit.ts:234](https://github.com/benhatsor/KeyframeKit.js/blob/c4b67bcaa597971169b8527ab3956df5ff8309e6/src/KeyframeKit.ts#L234)

</td>
</tr>
<tr>
<td>

<a id="property-options"></a> `options?`

</td>
<td>

`number` | `KeyframeEffectOptions`

</td>
<td>

[KeyframeKit.ts:235](https://github.com/benhatsor/KeyframeKit.js/blob/c4b67bcaa597971169b8527ab3956df5ff8309e6/src/KeyframeKit.ts#L235)

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

Defined in: [KeyframeKit.ts:247](https://github.com/benhatsor/KeyframeKit.js/blob/c4b67bcaa597971169b8527ab3956df5ff8309e6/src/KeyframeKit.ts#L247)

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
