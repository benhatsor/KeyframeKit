[KeyframeKit](../wiki/Reference) / ParsedKeyframes

Defined in: [KeyframeKit.ts:270](https://github.com/benhatsor/KeyframeKit.js/blob/b329d23518c12defe9876b16dc59422de069b1fe/src/KeyframeKit.ts#L270)

## Contents

<details><summary>Open Contents</summary>

* [Constructors](#constructors)
  * [Constructor](#constructor)
    * [Parameters](#parameters)
      * [keyframes](#keyframes)
    * [Returns](#returns)
* [Properties](#properties)
  * [keyframes](#keyframes-1)
* [Methods](#methods)
  * [toKeyframeEffect()](#tokeyframeeffect)
    * [Parameters](#parameters-1)
      * [options](#options)
    * [Returns](#returns-1)

</details>

## Constructors

### Constructor

```ts
new ParsedKeyframes(keyframes: Keyframe[]): ParsedKeyframes;
```

Defined in: [KeyframeKit.ts:274](https://github.com/benhatsor/KeyframeKit.js/blob/b329d23518c12defe9876b16dc59422de069b1fe/src/KeyframeKit.ts#L274)

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

Defined in: [KeyframeKit.ts:272](https://github.com/benhatsor/KeyframeKit.js/blob/b329d23518c12defe9876b16dc59422de069b1fe/src/KeyframeKit.ts#L272)

## Methods

### toKeyframeEffect()

```ts
toKeyframeEffect(options: number | KeyframeEffectOptions | null): KeyframeEffectParameters;
```

Defined in: [KeyframeKit.ts:278](https://github.com/benhatsor/KeyframeKit.js/blob/b329d23518c12defe9876b16dc59422de069b1fe/src/KeyframeKit.ts#L278)

#### Parameters

##### options

`number` | `KeyframeEffectOptions` | `null`

#### Returns

[`KeyframeEffectParameters`](../wiki/Class.KeyframeEffectParameters)
