[KeyframeKit](../README.md) / ParsedKeyframes

# Class: ParsedKeyframes

Defined in: [KeyframeKit.ts:274](https://github.com/benhatsor/KeyframeKit.js/blob/3b0eec5e8fd500c32386417aa5a75a5b38197e76/src/KeyframeKit.ts#L274)

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

Defined in: [KeyframeKit.ts:278](https://github.com/benhatsor/KeyframeKit.js/blob/3b0eec5e8fd500c32386417aa5a75a5b38197e76/src/KeyframeKit.ts#L278)

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

Defined in: [KeyframeKit.ts:276](https://github.com/benhatsor/KeyframeKit.js/blob/3b0eec5e8fd500c32386417aa5a75a5b38197e76/src/KeyframeKit.ts#L276)

## Methods

### toKeyframeEffect()

```ts
toKeyframeEffect(options: number | KeyframeEffectOptions | null): KeyframeEffectParameters;
```

Defined in: [KeyframeKit.ts:286](https://github.com/benhatsor/KeyframeKit.js/blob/3b0eec5e8fd500c32386417aa5a75a5b38197e76/src/KeyframeKit.ts#L286)

#### Parameters

##### options

[MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/KeyframeEffect/KeyframeEffect#options)

`number` | `KeyframeEffectOptions` | `null`

#### Returns

[`KeyframeEffectParameters`](KeyframeEffectParameters.md)
