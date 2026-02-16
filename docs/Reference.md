## Classes

### KeyframeEffectParameters

Defined in: [KeyframeKit.ts:232](https://github.com/benhatsor/KeyframeKit.js/blob/be54f53f0971365aa2b2824a746dd1649a314a10/src/KeyframeKit.ts#L232)

#### Constructors

##### Constructor

```ts
new KeyframeEffectParameters(obj: {
  keyframes: KeyframeArgument;
  options?: number | KeyframeEffectOptions;
}): KeyframeEffectParameters;
```

Defined in: [KeyframeKit.ts:237](https://github.com/benhatsor/KeyframeKit.js/blob/be54f53f0971365aa2b2824a746dd1649a314a10/src/KeyframeKit.ts#L237)

###### Parameters

###### obj

###### keyframes

[`KeyframeArgument`](../wiki/#keyframeargument)

###### options?

`number` | `KeyframeEffectOptions` = `{}`

###### Returns

[`KeyframeEffectParameters`](../wiki/#keyframeeffectparameters)

#### Properties

##### keyframes

```ts
keyframes: KeyframeArgument;
```

Defined in: [KeyframeKit.ts:234](https://github.com/benhatsor/KeyframeKit.js/blob/be54f53f0971365aa2b2824a746dd1649a314a10/src/KeyframeKit.ts#L234)

##### options?

```ts
optional options: number | KeyframeEffectOptions;
```

Defined in: [KeyframeKit.ts:235](https://github.com/benhatsor/KeyframeKit.js/blob/be54f53f0971365aa2b2824a746dd1649a314a10/src/KeyframeKit.ts#L235)

#### Methods

##### toAnimation()

```ts
toAnimation(obj: {
  target: Element | null;
  timeline?: AnimationTimeline;
}): Animation;
```

Defined in: [KeyframeKit.ts:247](https://github.com/benhatsor/KeyframeKit.js/blob/be54f53f0971365aa2b2824a746dd1649a314a10/src/KeyframeKit.ts#L247)

###### Parameters

###### obj

###### target

[`Element`](https://developer.mozilla.org/docs/Web/API/Element) | `null`

###### timeline?

[`AnimationTimeline`](https://developer.mozilla.org/docs/Web/API/AnimationTimeline) = `document.timeline`

###### Returns

[`Animation`](https://developer.mozilla.org/docs/Web/API/Animation)

***

### KeyframesFactory

Defined in: [KeyframeKit.ts:14](https://github.com/benhatsor/KeyframeKit.js/blob/be54f53f0971365aa2b2824a746dd1649a314a10/src/KeyframeKit.ts#L14)

#### Properties

##### KeyframesRuleNameTypeError

```ts
readonly KeyframesRuleNameTypeError: typeof KeyframesFactoryKeyframesRuleNameTypeError;
```

Defined in: [KeyframeKit.ts:16](https://github.com/benhatsor/KeyframeKit.js/blob/be54f53f0971365aa2b2824a746dd1649a314a10/src/KeyframeKit.ts#L16)

##### SourceTypeError

```ts
readonly SourceTypeError: typeof KeyframesFactorySourceTypeError;
```

Defined in: [KeyframeKit.ts:20](https://github.com/benhatsor/KeyframeKit.js/blob/be54f53f0971365aa2b2824a746dd1649a314a10/src/KeyframeKit.ts#L20)

#### Methods

##### getAllStyleSheetKeyframesRules()

```ts
getAllStyleSheetKeyframesRules(obj?: {
  in?: KeyframesFactorySource;
}): ParsedKeyframesRules;
```

Defined in: [KeyframeKit.ts:102](https://github.com/benhatsor/KeyframeKit.js/blob/be54f53f0971365aa2b2824a746dd1649a314a10/src/KeyframeKit.ts#L102)

###### Parameters

###### obj?

###### in?

[`KeyframesFactorySource`](../wiki/#keyframesfactorysource) = `document`

###### Returns

[`ParsedKeyframesRules`](../wiki/#parsedkeyframesrules)

##### getStyleSheetKeyframes()

```ts
getStyleSheetKeyframes(obj: {
  in?: KeyframesFactorySource;
  of: string;
}): ParsedKeyframes | undefined;
```

Defined in: [KeyframeKit.ts:25](https://github.com/benhatsor/KeyframeKit.js/blob/be54f53f0971365aa2b2824a746dd1649a314a10/src/KeyframeKit.ts#L25)

###### Parameters

###### obj

###### in?

[`KeyframesFactorySource`](../wiki/#keyframesfactorysource) = `document`

###### of

`string`

###### Returns

[`ParsedKeyframes`](../wiki/#parsedkeyframes) | `undefined`

##### parseKeyframesRule()

```ts
parseKeyframesRule(obj: {
  rule: CSSKeyframesRule;
}): ParsedKeyframes;
```

Defined in: [KeyframeKit.ts:174](https://github.com/benhatsor/KeyframeKit.js/blob/be54f53f0971365aa2b2824a746dd1649a314a10/src/KeyframeKit.ts#L174)

###### Parameters

###### obj

###### rule

[`CSSKeyframesRule`](https://developer.mozilla.org/docs/Web/API/CSSKeyframesRule)

###### Returns

[`ParsedKeyframes`](../wiki/#parsedkeyframes)

***

### KeyframesFactoryKeyframesRuleNameTypeError

Defined in: [KeyframeKit.ts:16](https://github.com/benhatsor/KeyframeKit.js/blob/be54f53f0971365aa2b2824a746dd1649a314a10/src/KeyframeKit.ts#L16)

#### Properties

##### message

```ts
message: string;
```

Defined in: [KeyframeKit.ts:17](https://github.com/benhatsor/KeyframeKit.js/blob/be54f53f0971365aa2b2824a746dd1649a314a10/src/KeyframeKit.ts#L17)

***

### KeyframesFactorySourceTypeError

Defined in: [KeyframeKit.ts:20](https://github.com/benhatsor/KeyframeKit.js/blob/be54f53f0971365aa2b2824a746dd1649a314a10/src/KeyframeKit.ts#L20)

#### Properties

##### message

```ts
message: string;
```

Defined in: [KeyframeKit.ts:21](https://github.com/benhatsor/KeyframeKit.js/blob/be54f53f0971365aa2b2824a746dd1649a314a10/src/KeyframeKit.ts#L21)

***

### ParsedKeyframes

Defined in: [KeyframeKit.ts:270](https://github.com/benhatsor/KeyframeKit.js/blob/be54f53f0971365aa2b2824a746dd1649a314a10/src/KeyframeKit.ts#L270)

#### Constructors

##### Constructor

```ts
new ParsedKeyframes(keyframes: Keyframe[]): ParsedKeyframes;
```

Defined in: [KeyframeKit.ts:274](https://github.com/benhatsor/KeyframeKit.js/blob/be54f53f0971365aa2b2824a746dd1649a314a10/src/KeyframeKit.ts#L274)

###### Parameters

###### keyframes

`Keyframe`\[]

###### Returns

[`ParsedKeyframes`](../wiki/#parsedkeyframes)

#### Properties

##### keyframes

```ts
keyframes: Keyframe[];
```

Defined in: [KeyframeKit.ts:272](https://github.com/benhatsor/KeyframeKit.js/blob/be54f53f0971365aa2b2824a746dd1649a314a10/src/KeyframeKit.ts#L272)

#### Methods

##### toKeyframeEffect()

```ts
toKeyframeEffect(options: number | KeyframeEffectOptions | null): KeyframeEffectParameters;
```

Defined in: [KeyframeKit.ts:278](https://github.com/benhatsor/KeyframeKit.js/blob/be54f53f0971365aa2b2824a746dd1649a314a10/src/KeyframeKit.ts#L278)

###### Parameters

###### options

`number` | `KeyframeEffectOptions` | `null`

###### Returns

[`KeyframeEffectParameters`](../wiki/#keyframeeffectparameters)

## Type Aliases

### KeyframeArgument

```ts
type KeyframeArgument = Keyframe[] | PropertyIndexedKeyframes;
```

Defined in: [KeyframeKit.ts:228](https://github.com/benhatsor/KeyframeKit.js/blob/be54f53f0971365aa2b2824a746dd1649a314a10/src/KeyframeKit.ts#L228)

***

### KeyframesFactorySource

```ts
type KeyframesFactorySource = 
  | DocumentOrShadowRoot
  | CSSStyleSheet;
```

Defined in: [KeyframeKit.ts:12](https://github.com/benhatsor/KeyframeKit.js/blob/be54f53f0971365aa2b2824a746dd1649a314a10/src/KeyframeKit.ts#L12)

***

### ParsedKeyframesRules

```ts
type ParsedKeyframesRules = {
[ruleName: string]: ParsedKeyframes;
};
```

Defined in: [KeyframeKit.ts:307](https://github.com/benhatsor/KeyframeKit.js/blob/be54f53f0971365aa2b2824a746dd1649a314a10/src/KeyframeKit.ts#L307)

#### Index Signature

```ts
[ruleName: string]: ParsedKeyframes
```

## Variables

### default

```ts
default: KeyframesFactory;
```

Defined in: [KeyframeKit.ts:14](https://github.com/benhatsor/KeyframeKit.js/blob/be54f53f0971365aa2b2824a746dd1649a314a10/src/KeyframeKit.ts#L14)
