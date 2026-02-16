[**KeyframeKit.js**](../../README.md)

***

[KeyframeKit.js](../../globals.md) / [\<internal\>](../README.md) / XPathEvaluatorBase

# Interface: XPathEvaluatorBase

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:37347

## Extended by

- [`Document`](Document.md)

## Methods

### createExpression()

> **createExpression**(`expression`, `resolver?`): [`XPathExpression`](XPathExpression.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:37349

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/createExpression)

#### Parameters

##### expression

`string`

##### resolver?

[`XPathNSResolver`](../type-aliases/XPathNSResolver.md) | `null`

#### Returns

[`XPathExpression`](XPathExpression.md)

***

### ~~createNSResolver()~~

> **createNSResolver**(`nodeResolver`): [`Node`](Node.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:37355

#### Parameters

##### nodeResolver

[`Node`](Node.md)

#### Returns

[`Node`](Node.md)

#### Deprecated

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/createNSResolver)

***

### evaluate()

> **evaluate**(`expression`, `contextNode`, `resolver?`, `type?`, `result?`): [`XPathResult`](XPathResult.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:37357

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/evaluate)

#### Parameters

##### expression

`string`

##### contextNode

[`Node`](Node.md)

##### resolver?

[`XPathNSResolver`](../type-aliases/XPathNSResolver.md) | `null`

##### type?

`number`

##### result?

[`XPathResult`](XPathResult.md) | `null`

#### Returns

[`XPathResult`](XPathResult.md)
