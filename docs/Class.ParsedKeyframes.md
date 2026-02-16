[KeyframeKit](../wiki/Reference) / ParsedKeyframes

# Class: ParsedKeyframes

Defined in: [KeyframeKit.ts:270](https://github.com/benhatsor/KeyframeKit.js/blob/8592bb943735ad64c24f75549600434a76fd2ee2/src/KeyframeKit.ts#L270)

## Constructors

### Constructor

```ts
new ParsedKeyframes(keyframes: Keyframe[]): ParsedKeyframes;
```

Defined in: [KeyframeKit.ts:274](https://github.com/benhatsor/KeyframeKit.js/blob/8592bb943735ad64c24f75549600434a76fd2ee2/src/KeyframeKit.ts#L274)

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

### keyframes

```ts
keyframes: Keyframe[];
```

Defined in: [KeyframeKit.ts:272](https://github.com/benhatsor/KeyframeKit.js/blob/8592bb943735ad64c24f75549600434a76fd2ee2/src/KeyframeKit.ts#L272)

## Methods

### toKeyframeEffect()

```ts
toKeyframeEffect(options: number | KeyframeEffectOptions | null): KeyframeEffectParameters;
```

Defined in: [KeyframeKit.ts:278](https://github.com/benhatsor/KeyframeKit.js/blob/8592bb943735ad64c24f75549600434a76fd2ee2/src/KeyframeKit.ts#L278)

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
