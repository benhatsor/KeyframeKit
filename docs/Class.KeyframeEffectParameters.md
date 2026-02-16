[KeyframeKit](../wiki/Reference) / KeyframeEffectParameters

# Class: KeyframeEffectParameters

Defined in: [KeyframeKit.ts:232](https://github.com/benhatsor/KeyframeKit.js/blob/d453212ae1c25ce652a06b754932631af89eaa6c/src/KeyframeKit.ts#L232)

## Constructors

### Constructor

```ts
new KeyframeEffectParameters(__namedParameters: {
  keyframes: KeyframeArgument;
  options?: number | KeyframeEffectOptions;
}): KeyframeEffectParameters;
```

Defined in: [KeyframeKit.ts:237](https://github.com/benhatsor/KeyframeKit.js/blob/d453212ae1c25ce652a06b754932631af89eaa6c/src/KeyframeKit.ts#L237)

#### Parameters

##### \_\_namedParameters

###### keyframes

[`KeyframeArgument`](../wiki/TypeAlias.KeyframeArgument)

###### options?

`number` | `KeyframeEffectOptions` = `{}`

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

[KeyframeKit.ts:234](https://github.com/benhatsor/KeyframeKit.js/blob/d453212ae1c25ce652a06b754932631af89eaa6c/src/KeyframeKit.ts#L234)

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

[KeyframeKit.ts:235](https://github.com/benhatsor/KeyframeKit.js/blob/d453212ae1c25ce652a06b754932631af89eaa6c/src/KeyframeKit.ts#L235)

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

Defined in: [KeyframeKit.ts:247](https://github.com/benhatsor/KeyframeKit.js/blob/d453212ae1c25ce652a06b754932631af89eaa6c/src/KeyframeKit.ts#L247)

#### Parameters

##### \_\_namedParameters

###### target

[`Element`](https://developer.mozilla.org/docs/Web/API/Element) | `null`

###### timeline?

[`AnimationTimeline`](https://developer.mozilla.org/docs/Web/API/AnimationTimeline) = `document.timeline`

#### Returns

[`Animation`](https://developer.mozilla.org/docs/Web/API/Animation)
