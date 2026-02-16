[KeyframeKit](../wiki/Reference) / KeyframeEffectParameters

Defined in: [KeyframeKit.ts:232](https://github.com/benhatsor/KeyframeKit.js/blob/b329d23518c12defe9876b16dc59422de069b1fe/src/KeyframeKit.ts#L232)

## Contents

<details><summary>Open Contents</summary>

* [Constructors](#constructors)
  * [Constructor](#constructor)
    * [Parameters](#parameters)
      * [obj](#obj)
        * [keyframes](#keyframes)
        * [options?](#options)
    * [Returns](#returns)
* [Properties](#properties)
  * [keyframes](#keyframes-1)
  * [options?](#options-1)
* [Methods](#methods)
  * [toAnimation()](#toanimation)
    * [Parameters](#parameters-1)
      * [obj](#obj-1)
        * [target](#target)
        * [timeline?](#timeline)
    * [Returns](#returns-1)

</details>

## Constructors

### Constructor

```ts
new KeyframeEffectParameters(obj: {
  keyframes: KeyframeArgument;
  options?: number | KeyframeEffectOptions;
}): KeyframeEffectParameters;
```

Defined in: [KeyframeKit.ts:237](https://github.com/benhatsor/KeyframeKit.js/blob/b329d23518c12defe9876b16dc59422de069b1fe/src/KeyframeKit.ts#L237)

#### Parameters

##### obj

###### keyframes

[`KeyframeArgument`](../wiki/TypeAlias.KeyframeArgument)

###### options?

`number` | `KeyframeEffectOptions` = `{}`

#### Returns

`KeyframeEffectParameters`

## Properties

### keyframes

```ts
keyframes: KeyframeArgument;
```

Defined in: [KeyframeKit.ts:234](https://github.com/benhatsor/KeyframeKit.js/blob/b329d23518c12defe9876b16dc59422de069b1fe/src/KeyframeKit.ts#L234)

***

### options?

```ts
optional options: number | KeyframeEffectOptions;
```

Defined in: [KeyframeKit.ts:235](https://github.com/benhatsor/KeyframeKit.js/blob/b329d23518c12defe9876b16dc59422de069b1fe/src/KeyframeKit.ts#L235)

## Methods

### toAnimation()

```ts
toAnimation(obj: {
  target: Element | null;
  timeline?: AnimationTimeline;
}): Animation;
```

Defined in: [KeyframeKit.ts:247](https://github.com/benhatsor/KeyframeKit.js/blob/b329d23518c12defe9876b16dc59422de069b1fe/src/KeyframeKit.ts#L247)

#### Parameters

##### obj

###### target

[`Element`](https://developer.mozilla.org/docs/Web/API/Element) | `null`

###### timeline?

[`AnimationTimeline`](https://developer.mozilla.org/docs/Web/API/AnimationTimeline) = `document.timeline`

#### Returns

[`Animation`](https://developer.mozilla.org/docs/Web/API/Animation)
