[KeyframeKit](../index.md) / ParsedKeyframes

# Class: ParsedKeyframes

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

## Properties

### keyframes

```ts
keyframes: Keyframe[];
```

## Methods

### toKeyframeEffect()

```ts
toKeyframeEffect(options: number | KeyframeEffectOptions | null): KeyframeEffectParameters;
```

#### Parameters

##### options

[MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/KeyframeEffect/KeyframeEffect#options)

`number` | `KeyframeEffectOptions` | `null`

#### Returns

[`KeyframeEffectParameters`](KeyframeEffectParameters.md)
