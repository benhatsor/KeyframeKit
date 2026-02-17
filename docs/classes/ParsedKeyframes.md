[KeyframeKit](../README.md) / ParsedKeyframes

# Class: ParsedKeyframes

Defined in: [KeyframeKit.ts:270](https://github.com/benhatsor/KeyframeKit.js/blob/63de9e3c098fc2a7857814040123ec007fb4425d/src/KeyframeKit.ts#L270)

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

Defined in: [KeyframeKit.ts:274](https://github.com/benhatsor/KeyframeKit.js/blob/63de9e3c098fc2a7857814040123ec007fb4425d/src/KeyframeKit.ts#L274)

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

Defined in: [KeyframeKit.ts:272](https://github.com/benhatsor/KeyframeKit.js/blob/63de9e3c098fc2a7857814040123ec007fb4425d/src/KeyframeKit.ts#L272)

## Methods

### toKeyframeEffect()

```ts
toKeyframeEffect(options: number | KeyframeEffectOptions | null): KeyframeEffectParameters;
```

Defined in: [KeyframeKit.ts:283](https://github.com/benhatsor/KeyframeKit.js/blob/63de9e3c098fc2a7857814040123ec007fb4425d/src/KeyframeKit.ts#L283)

#### Parameters

##### options

[MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/KeyframeEffect/KeyframeEffect#options)
[Specification](https://drafts.csswg.org/web-animations-1/#dom-keyframeeffect-keyframeeffect-target-keyframes-options-options)

`number` | `KeyframeEffectOptions` | `null`

#### Returns

[`KeyframeEffectParameters`](KeyframeEffectParameters.md)
