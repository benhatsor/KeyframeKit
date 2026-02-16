[KeyframeKit](../wiki/Reference) / ParsedKeyframes

Defined in: [KeyframeKit.ts:270](https://github.com/benhatsor/KeyframeKit.js/blob/886792e1530f55d27efcd793747b20129341d83c/src/KeyframeKit.ts#L270)

## Constructors

### Constructor

```ts
new ParsedKeyframes(keyframes: Keyframe[]): ParsedKeyframes;
```

Defined in: [KeyframeKit.ts:274](https://github.com/benhatsor/KeyframeKit.js/blob/886792e1530f55d27efcd793747b20129341d83c/src/KeyframeKit.ts#L274)

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

`keyframes`

</td>
<td>

`Keyframe`\[]

</td>
</tr>
</tbody>
</table>

#### Returns

`ParsedKeyframes`

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

`Keyframe`\[]

</td>
</tr>
</tbody>
</table>

## Methods

### toKeyframeEffect()

```ts
toKeyframeEffect(options: number | KeyframeEffectOptions | null): KeyframeEffectParameters;
```

Defined in: [KeyframeKit.ts:278](https://github.com/benhatsor/KeyframeKit.js/blob/886792e1530f55d27efcd793747b20129341d83c/src/KeyframeKit.ts#L278)

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

`number` | `KeyframeEffectOptions` | `null`

</td>
</tr>
</tbody>
</table>

#### Returns

[`KeyframeEffectParameters`](../wiki/Class.KeyframeEffectParameters)
