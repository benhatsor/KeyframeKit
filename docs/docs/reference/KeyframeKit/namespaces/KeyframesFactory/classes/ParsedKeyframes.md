[KeyframeKit](../../../../index.md) / [KeyframesFactory](../index.md) / ParsedKeyframes

# <div class="subheader"> Class</div>ParsedKeyframes

## Constructors

### Constructor

```ts
new ParsedKeyframes(keyframes: Keyframe[]): ParsedKeyframes;
```

#### Parameters

##### keyframes

`Keyframe`[]

#### Returns

`ParsedKeyframes`

## Methods

### toKeyframeEffect()

```ts
toKeyframeEffect(options: number | KeyframeEffectOptions | null): KeyframeEffectParameters;
```

#### Parameters

##### options

Keyframe effect options.
 [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/KeyframeEffect/KeyframeEffect#options)

`number` | `KeyframeEffectOptions` | `null`

#### Returns

[`KeyframeEffectParameters`](../../../../classes/KeyframeEffectParameters.md)

## Properties

### keyframes

```ts
keyframes: Keyframe[];
```

## See Also

### Referenced Here
- [KeyframeEffectParameters](../../../../classes/KeyframeEffectParameters.md)
### References This
- [KeyframesFactory.getStyleSheetKeyframes](../functions/getStyleSheetKeyframes.md)
- [KeyframesFactory.ParsedKeyframesRules](../type-aliases/ParsedKeyframesRules.md)
- [KeyframesFactory.parseKeyframesRule](../functions/parseKeyframesRule.md)
