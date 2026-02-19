[KeyframeKit](../README.md) / ParsedKeyframes

# Class: ParsedKeyframes

Defined in: [KeyframeKit.ts:315](https://github.com/benhatsor/KeyframeKit.js/blob/4d4b43f56ee762a544471b854a9b8084549478cb/src/KeyframeKit.ts#L315)

## Contents

* [Constructors](#constructors)
  * [Constructor](#constructor)
* [Properties](#properties)
  * [keyframes](#keyframes-1)
* [Methods](#methods)
  * [toKeyframeEffect()](#tokeyframeeffect)

## Constructors

### Constructor

```ts
new ParsedKeyframes(keyframes: Keyframe[]): ParsedKeyframes;
```

Defined in: [KeyframeKit.ts:319](https://github.com/benhatsor/KeyframeKit.js/blob/4d4b43f56ee762a544471b854a9b8084549478cb/src/KeyframeKit.ts#L319)

#### Parameters

##### keyframes

`Keyframe`\[]

#### Returns

`ParsedKeyframes`

## Properties

### keyframes

```ts
keyframes: Keyframe[];
```

Defined in: [KeyframeKit.ts:317](https://github.com/benhatsor/KeyframeKit.js/blob/4d4b43f56ee762a544471b854a9b8084549478cb/src/KeyframeKit.ts#L317)

## Methods

### toKeyframeEffect()

```ts
toKeyframeEffect(options: number | KeyframeEffectOptions | null): KeyframeEffectParameters;
```

Defined in: [KeyframeKit.ts:327](https://github.com/benhatsor/KeyframeKit.js/blob/4d4b43f56ee762a544471b854a9b8084549478cb/src/KeyframeKit.ts#L327)

#### Parameters

##### options

[MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/KeyframeEffect/KeyframeEffect#options)

`number` | `KeyframeEffectOptions` | `null`

#### Returns

[`KeyframeEffectParameters`](KeyframeEffectParameters.md)
