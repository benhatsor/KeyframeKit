[KeyframeKit](../README.md) / ParsedKeyframes

# Class: ParsedKeyframes

Defined in: [KeyframeKit.ts:272](https://github.com/benhatsor/KeyframeKit.js/blob/45b3a115872178190784e427ff82cf28b32edf60/src/KeyframeKit.ts#L272)

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

Defined in: [KeyframeKit.ts:276](https://github.com/benhatsor/KeyframeKit.js/blob/45b3a115872178190784e427ff82cf28b32edf60/src/KeyframeKit.ts#L276)

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

Defined in: [KeyframeKit.ts:274](https://github.com/benhatsor/KeyframeKit.js/blob/45b3a115872178190784e427ff82cf28b32edf60/src/KeyframeKit.ts#L274)

## Methods

### toKeyframeEffect()

```ts
toKeyframeEffect(options: number | KeyframeEffectOptions | null): KeyframeEffectParameters;
```

Defined in: [KeyframeKit.ts:284](https://github.com/benhatsor/KeyframeKit.js/blob/45b3a115872178190784e427ff82cf28b32edf60/src/KeyframeKit.ts#L284)

#### Parameters

##### options

[MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/KeyframeEffect/KeyframeEffect#options)

`number` | `KeyframeEffectOptions` | `null`

#### Returns

[`KeyframeEffectParameters`](KeyframeEffectParameters.md)
