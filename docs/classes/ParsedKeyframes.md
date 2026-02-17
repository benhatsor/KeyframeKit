[KeyframeKit](../README.md) / ParsedKeyframes

# Class: ParsedKeyframes

Defined in: [KeyframeKit.ts:269](https://github.com/benhatsor/KeyframeKit.js/blob/23587b0a29702105ecacc5df4be2eeca7929de6a/src/KeyframeKit.ts#L269)

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

Defined in: [KeyframeKit.ts:273](https://github.com/benhatsor/KeyframeKit.js/blob/23587b0a29702105ecacc5df4be2eeca7929de6a/src/KeyframeKit.ts#L273)

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

Defined in: [KeyframeKit.ts:271](https://github.com/benhatsor/KeyframeKit.js/blob/23587b0a29702105ecacc5df4be2eeca7929de6a/src/KeyframeKit.ts#L271)

## Methods

### toKeyframeEffect()

```ts
toKeyframeEffect(options: number | KeyframeEffectOptions | null): KeyframeEffectParameters;
```

Defined in: [KeyframeKit.ts:277](https://github.com/benhatsor/KeyframeKit.js/blob/23587b0a29702105ecacc5df4be2eeca7929de6a/src/KeyframeKit.ts#L277)

#### Parameters

##### options

`number` | `KeyframeEffectOptions` | `null`

#### Returns

[`KeyframeEffectParameters`](KeyframeEffectParameters.md)
