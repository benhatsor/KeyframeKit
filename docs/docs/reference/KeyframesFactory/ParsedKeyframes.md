[KeyframeKit](../index.md) / [KeyframesFactory](../KeyframesFactory.md) / ParsedKeyframes

# <div class="subheader"> Class</div> ParsedKeyframes

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

`number` \| `KeyframeEffectOptions` \| `null`

Keyframe effect options.
 [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/KeyframeEffect/KeyframeEffect#options)

#### Returns

[`KeyframeEffectParameters`](../KeyframeEffectParameters.md)

## Properties

### keyframes

```ts
keyframes: Keyframe[];
```

## See Also

### Referenced Here
- [KeyframeEffectParameters](../KeyframeEffectParameters.md)
### References This
- [KeyframesFactory.getStyleSheetKeyframes](getStyleSheetKeyframes.md)
- [KeyframesFactory.ParsedKeyframesRules](ParsedKeyframesRules.md)
- [KeyframesFactory.parseKeyframesRule](parseKeyframesRule.md)
