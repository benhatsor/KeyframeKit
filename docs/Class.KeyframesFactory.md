[KeyframeKit](../wiki/Reference) / KeyframesFactory

# Class: KeyframesFactory

Defined in: [KeyframeKit.ts:14](https://github.com/benhatsor/KeyframeKit.js/blob/c4b67bcaa597971169b8527ab3956df5ff8309e6/src/KeyframeKit.ts#L14)

## Properties

<table>
<thead>
<tr>
<th>Property</th>
<th>Modifier</th>
<th>Type</th>
<th>Defined in</th>
</tr>
</thead>
<tbody>
<tr>
<td>

<a id="property-keyframesrulenametypeerror"></a> `KeyframesRuleNameTypeError`

</td>
<td>

`readonly`

</td>
<td>

*typeof* [`KeyframesFactoryKeyframesRuleNameTypeError`](../wiki/Class.KeyframesFactoryKeyframesRuleNameTypeError)

</td>
<td>

[KeyframeKit.ts:16](https://github.com/benhatsor/KeyframeKit.js/blob/c4b67bcaa597971169b8527ab3956df5ff8309e6/src/KeyframeKit.ts#L16)

</td>
</tr>
<tr>
<td>

<a id="property-sourcetypeerror"></a> `SourceTypeError`

</td>
<td>

`readonly`

</td>
<td>

*typeof* [`KeyframesFactorySourceTypeError`](../wiki/Class.KeyframesFactorySourceTypeError)

</td>
<td>

[KeyframeKit.ts:20](https://github.com/benhatsor/KeyframeKit.js/blob/c4b67bcaa597971169b8527ab3956df5ff8309e6/src/KeyframeKit.ts#L20)

</td>
</tr>
</tbody>
</table>

## Methods

### getAllStyleSheetKeyframesRules()

```ts
getAllStyleSheetKeyframesRules(__namedParameters?: {
  in?: KeyframesFactorySource;
}): ParsedKeyframesRules;
```

Defined in: [KeyframeKit.ts:102](https://github.com/benhatsor/KeyframeKit.js/blob/c4b67bcaa597971169b8527ab3956df5ff8309e6/src/KeyframeKit.ts#L102)

#### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`__namedParameters`

</td>
<td>

{ `in?`: [`KeyframesFactorySource`](../wiki/TypeAlias.KeyframesFactorySource); }

</td>
</tr>
<tr>
<td>

`__namedParameters.in?`

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
getStyleSheetKeyframes(__namedParameters: {
  in?: KeyframesFactorySource;
  of: string;
}): ParsedKeyframes | undefined;
```

Defined in: [KeyframeKit.ts:25](https://github.com/benhatsor/KeyframeKit.js/blob/c4b67bcaa597971169b8527ab3956df5ff8309e6/src/KeyframeKit.ts#L25)

#### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`__namedParameters`

</td>
<td>

{ `in?`: [`KeyframesFactorySource`](../wiki/TypeAlias.KeyframesFactorySource); `of`: `string`; }

</td>
</tr>
<tr>
<td>

`__namedParameters.in?`

</td>
<td>

[`KeyframesFactorySource`](../wiki/TypeAlias.KeyframesFactorySource)

</td>
</tr>
<tr>
<td>

`__namedParameters.of`

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
parseKeyframesRule(__namedParameters: {
  rule: CSSKeyframesRule;
}): ParsedKeyframes;
```

Defined in: [KeyframeKit.ts:174](https://github.com/benhatsor/KeyframeKit.js/blob/c4b67bcaa597971169b8527ab3956df5ff8309e6/src/KeyframeKit.ts#L174)

#### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`__namedParameters`

</td>
<td>

{ `rule`: [`CSSKeyframesRule`](https://developer.mozilla.org/docs/Web/API/CSSKeyframesRule); }

</td>
</tr>
<tr>
<td>

`__namedParameters.rule`

</td>
<td>

[`CSSKeyframesRule`](https://developer.mozilla.org/docs/Web/API/CSSKeyframesRule)

</td>
</tr>
</tbody>
</table>

#### Returns

[`ParsedKeyframes`](../wiki/Class.ParsedKeyframes)
