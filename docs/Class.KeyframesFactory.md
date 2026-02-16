[KeyframeKit](../wiki/Reference) / KeyframesFactory

Defined in: [KeyframeKit.ts:14](https://github.com/benhatsor/KeyframeKit.js/blob/bd3c190bbce7e40f265986d7d43fd0735867194d/src/KeyframeKit.ts#L14)

## Properties

<table>
<thead>
<tr>
<th align="left">Property</th>
<th align="left">Type</th>
</tr>
</thead>
<tbody>
<tr>
<td>

<a id="property-keyframesrulenametypeerror"></a> `KeyframesRuleNameTypeError`

</td>
<td>

*typeof* [`KeyframesFactoryKeyframesRuleNameTypeError`](../wiki/Class.KeyframesFactoryKeyframesRuleNameTypeError)

</td>
</tr>
<tr>
<td>

<a id="property-sourcetypeerror"></a> `SourceTypeError`

</td>
<td>

*typeof* [`KeyframesFactorySourceTypeError`](../wiki/Class.KeyframesFactorySourceTypeError)

</td>
</tr>
</tbody>
</table>

## Methods

### getAllStyleSheetKeyframesRules()

```ts
getAllStyleSheetKeyframesRules(options?: {
  in?: KeyframesFactorySource;
}): ParsedKeyframesRules;
```

Defined in: [KeyframeKit.ts:102](https://github.com/benhatsor/KeyframeKit.js/blob/bd3c190bbce7e40f265986d7d43fd0735867194d/src/KeyframeKit.ts#L102)

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

`options`

</td>
<td>

{ `in?`: [`KeyframesFactorySource`](../wiki/TypeAlias.KeyframesFactorySource); }

</td>
</tr>
<tr>
<td>

`options.in?`

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
getStyleSheetKeyframes(options: {
  in?: KeyframesFactorySource;
  of: string;
}): ParsedKeyframes | undefined;
```

Defined in: [KeyframeKit.ts:25](https://github.com/benhatsor/KeyframeKit.js/blob/bd3c190bbce7e40f265986d7d43fd0735867194d/src/KeyframeKit.ts#L25)

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

`options`

</td>
<td>

{ `in?`: [`KeyframesFactorySource`](../wiki/TypeAlias.KeyframesFactorySource); `of`: `string`; }

</td>
</tr>
<tr>
<td>

`options.in?`

</td>
<td>

[`KeyframesFactorySource`](../wiki/TypeAlias.KeyframesFactorySource)

</td>
</tr>
<tr>
<td>

`options.of`

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
parseKeyframesRule(options: {
  rule: CSSKeyframesRule;
}): ParsedKeyframes;
```

Defined in: [KeyframeKit.ts:174](https://github.com/benhatsor/KeyframeKit.js/blob/bd3c190bbce7e40f265986d7d43fd0735867194d/src/KeyframeKit.ts#L174)

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

`options`

</td>
<td>

{ `rule`: [`CSSKeyframesRule`](https://developer.mozilla.org/docs/Web/API/CSSKeyframesRule); }

</td>
</tr>
<tr>
<td>

`options.rule`

</td>
<td>

[`CSSKeyframesRule`](https://developer.mozilla.org/docs/Web/API/CSSKeyframesRule)

</td>
</tr>
</tbody>
</table>

#### Returns

[`ParsedKeyframes`](../wiki/Class.ParsedKeyframes)
