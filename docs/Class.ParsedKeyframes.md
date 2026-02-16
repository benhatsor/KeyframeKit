[KeyframeKit](../wiki/Home) / ParsedKeyframes

Defined in: [KeyframeKit.ts:270](https://github.com/benhatsor/KeyframeKit.js/blob/85cd685c31c0b74c0fdbe6e715332583b7a3ebce/src/KeyframeKit.ts#L270)

## Contents

* [Constructors](#constructors)
  * [Constructor](#constructor)
* [Properties](#properties)
  * [keyframes](#keyframes)
* [Methods](#methods)
  * [toKeyframeEffect()](#tokeyframeeffect)

## Constructors

### Constructor

```ts
new ParsedKeyframes(keyframes: Keyframe[]): ParsedKeyframes;
```

Defined in: [KeyframeKit.ts:274](https://github.com/benhatsor/KeyframeKit.js/blob/85cd685c31c0b74c0fdbe6e715332583b7a3ebce/src/KeyframeKit.ts#L274)

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

Defined in: [KeyframeKit.ts:272](https://github.com/benhatsor/KeyframeKit.js/blob/85cd685c31c0b74c0fdbe6e715332583b7a3ebce/src/KeyframeKit.ts#L272)

## Methods

### toKeyframeEffect()

```ts
toKeyframeEffect(options: number | KeyframeEffectOptions | null): KeyframeEffectParameters;
```

Defined in: [KeyframeKit.ts:278](https://github.com/benhatsor/KeyframeKit.js/blob/85cd685c31c0b74c0fdbe6e715332583b7a3ebce/src/KeyframeKit.ts#L278)

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
