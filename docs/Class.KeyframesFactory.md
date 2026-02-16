[KeyframeKit](../wiki/Reference) / KeyframesFactory

Defined in: [KeyframeKit.ts:14](https://github.com/benhatsor/KeyframeKit.js/blob/b919793e785cf52aa1e6318a4040566efdf97fae/src/KeyframeKit.ts#L14)

## Properties

### KeyframesRuleNameTypeError

```ts
readonly KeyframesRuleNameTypeError: typeof KeyframesFactoryKeyframesRuleNameTypeError;
```

Defined in: [KeyframeKit.ts:16](https://github.com/benhatsor/KeyframeKit.js/blob/b919793e785cf52aa1e6318a4040566efdf97fae/src/KeyframeKit.ts#L16)

***

### SourceTypeError

```ts
readonly SourceTypeError: typeof KeyframesFactorySourceTypeError;
```

Defined in: [KeyframeKit.ts:20](https://github.com/benhatsor/KeyframeKit.js/blob/b919793e785cf52aa1e6318a4040566efdf97fae/src/KeyframeKit.ts#L20)

## Methods

### getAllStyleSheetKeyframesRules()

```ts
getAllStyleSheetKeyframesRules(obj?: {
  in?: KeyframesFactorySource;
}): ParsedKeyframesRules;
```

Defined in: [KeyframeKit.ts:102](https://github.com/benhatsor/KeyframeKit.js/blob/b919793e785cf52aa1e6318a4040566efdf97fae/src/KeyframeKit.ts#L102)

#### Parameters

<table>
<thead>
<tr>
<th align="left">Parameter</th>
<th align="left">Type</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`obj`

</td>
<td>

{ `in?`: [`KeyframesFactorySource`](../wiki/TypeAlias.KeyframesFactorySource); }

</td>
</tr>
<tr>
<td>

`obj.in?`

</td>
<td>

[`KeyframesFactorySource`](../wiki/TypeAlias.KeyframesFactorySource)

</td>
</tr>
</tbody>
</table>

#### Returns

[`ParsedKeyframesRules`](../wiki/TypeAlias.ParsedKeyframesRules)

***

### getStyleSheetKeyframes()

```ts
getStyleSheetKeyframes(obj: {
  in?: KeyframesFactorySource;
  of: string;
}): ParsedKeyframes | undefined;
```

Defined in: [KeyframeKit.ts:25](https://github.com/benhatsor/KeyframeKit.js/blob/b919793e785cf52aa1e6318a4040566efdf97fae/src/KeyframeKit.ts#L25)

#### Parameters

<table>
<thead>
<tr>
<th align="left">Parameter</th>
<th align="left">Type</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`obj`

</td>
<td>

{ `in?`: [`KeyframesFactorySource`](../wiki/TypeAlias.KeyframesFactorySource); `of`: `string`; }

</td>
</tr>
<tr>
<td>

`obj.in?`

</td>
<td>

[`KeyframesFactorySource`](../wiki/TypeAlias.KeyframesFactorySource)

</td>
</tr>
<tr>
<td>

`obj.of`

</td>
<td>

`string`

</td>
</tr>
</tbody>
</table>

#### Returns

[`ParsedKeyframes`](../wiki/Class.ParsedKeyframes) | `undefined`

***

### parseKeyframesRule()

```ts
parseKeyframesRule(obj: {
  rule: CSSKeyframesRule;
}): ParsedKeyframes;
```

Defined in: [KeyframeKit.ts:174](https://github.com/benhatsor/KeyframeKit.js/blob/b919793e785cf52aa1e6318a4040566efdf97fae/src/KeyframeKit.ts#L174)

#### Parameters

<table>
<thead>
<tr>
<th align="left">Parameter</th>
<th align="left">Type</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`obj`

</td>
<td>

{ `rule`: [`CSSKeyframesRule`](https://developer.mozilla.org/docs/Web/API/CSSKeyframesRule); }

</td>
</tr>
<tr>
<td>

`obj.rule`

</td>
<td>

[`CSSKeyframesRule`](https://developer.mozilla.org/docs/Web/API/CSSKeyframesRule)

</td>
</tr>
</tbody>
</table>

#### Returns

[`ParsedKeyframes`](../wiki/Class.ParsedKeyframes)
