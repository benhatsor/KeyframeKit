[KeyframeKit](../wiki/Reference) / KeyframesFactory

# Class: KeyframesFactory

Defined in: [KeyframeKit.ts:14](https://github.com/benhatsor/KeyframeKit.js/blob/76d4fd921fc9e169276b761ec2420555f386a7fb/src/KeyframeKit.ts#L14)

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

[KeyframeKit.ts:16](https://github.com/benhatsor/KeyframeKit.js/blob/76d4fd921fc9e169276b761ec2420555f386a7fb/src/KeyframeKit.ts#L16)

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

[KeyframeKit.ts:20](https://github.com/benhatsor/KeyframeKit.js/blob/76d4fd921fc9e169276b761ec2420555f386a7fb/src/KeyframeKit.ts#L20)

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

Defined in: [KeyframeKit.ts:102](https://github.com/benhatsor/KeyframeKit.js/blob/76d4fd921fc9e169276b761ec2420555f386a7fb/src/KeyframeKit.ts#L102)

#### Parameters

##### \_\_namedParameters?

###### in?

[`KeyframesFactorySource`](../wiki/TypeAlias.KeyframesFactorySource) = `document`

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

Defined in: [KeyframeKit.ts:25](https://github.com/benhatsor/KeyframeKit.js/blob/76d4fd921fc9e169276b761ec2420555f386a7fb/src/KeyframeKit.ts#L25)

#### Parameters

##### \_\_namedParameters

###### in?

[`KeyframesFactorySource`](../wiki/TypeAlias.KeyframesFactorySource) = `document`

###### of

`string`

#### Returns

[`ParsedKeyframes`](../wiki/Class.ParsedKeyframes) | `undefined`

***

### parseKeyframesRule()

```ts
parseKeyframesRule(__namedParameters: {
  rule: CSSKeyframesRule;
}): ParsedKeyframes;
```

Defined in: [KeyframeKit.ts:174](https://github.com/benhatsor/KeyframeKit.js/blob/76d4fd921fc9e169276b761ec2420555f386a7fb/src/KeyframeKit.ts#L174)

#### Parameters

##### \_\_namedParameters

###### rule

[`CSSKeyframesRule`](https://developer.mozilla.org/docs/Web/API/CSSKeyframesRule)

#### Returns

[`ParsedKeyframes`](../wiki/Class.ParsedKeyframes)
