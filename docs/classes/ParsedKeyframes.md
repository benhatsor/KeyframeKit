[KeyframeKit](../README.md) / ParsedKeyframes

# Class: ParsedKeyframes

Defined in: [KeyframeKit.ts:273](https://github.com/benhatsor/KeyframeKit.js/blob/b40b13a5a39c5b7425db734a05dd287248581d5e/src/KeyframeKit.ts#L273)

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

Defined in: [KeyframeKit.ts:277](https://github.com/benhatsor/KeyframeKit.js/blob/b40b13a5a39c5b7425db734a05dd287248581d5e/src/KeyframeKit.ts#L277)

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

Defined in: [KeyframeKit.ts:275](https://github.com/benhatsor/KeyframeKit.js/blob/b40b13a5a39c5b7425db734a05dd287248581d5e/src/KeyframeKit.ts#L275)

## Methods

### toKeyframeEffect()

```ts
toKeyframeEffect(options: number | KeyframeEffectOptions | null): KeyframeEffectParameters;
```

Defined in: [KeyframeKit.ts:285](https://github.com/benhatsor/KeyframeKit.js/blob/b40b13a5a39c5b7425db734a05dd287248581d5e/src/KeyframeKit.ts#L285)

#### Parameters

##### options

[MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/KeyframeEffect/KeyframeEffect#options)

`number` | `KeyframeEffectOptions` | `null`

#### Returns

[`KeyframeEffectParameters`](KeyframeEffectParameters.md)
