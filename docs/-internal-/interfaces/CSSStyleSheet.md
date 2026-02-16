[**KeyframeKit.js**](../../README.md)

***

[KeyframeKit.js](../../globals.md) / [\<internal\>](../README.md) / CSSStyleSheet

# Interface: CSSStyleSheet

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:7156

The **`CSSStyleSheet`** interface represents a single CSS stylesheet, and lets you inspect and modify the list of rules contained in the stylesheet.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSStyleSheet)

## Extends

- [`StyleSheet`](StyleSheet.md)

## Properties

### cssRules

> `readonly` **cssRules**: `CSSRuleList`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:7162

The read-only CSSStyleSheet property **`cssRules`** returns a live CSSRuleList which provides a real-time, up-to-date list of every CSS rule which comprises the stylesheet.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSStyleSheet/cssRules)

***

### disabled

> **disabled**: `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:31551

The **`disabled`** property of the applying to the document.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/StyleSheet/disabled)

#### Inherited from

[`StyleSheet`](StyleSheet.md).[`disabled`](StyleSheet.md#disabled)

***

### href

> `readonly` **href**: `string` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:31557

The **`href`** property of the StyleSheet interface returns the location of the style sheet.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/StyleSheet/href)

#### Inherited from

[`StyleSheet`](StyleSheet.md).[`href`](StyleSheet.md#href)

***

### ownerNode

> `readonly` **ownerNode**: [`Element`](Element.md) \| [`ProcessingInstruction`](ProcessingInstruction.md) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:31570

The **`ownerNode`** property of the with the document.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/StyleSheet/ownerNode)

#### Inherited from

[`StyleSheet`](StyleSheet.md).[`ownerNode`](StyleSheet.md#ownernode)

***

### ownerRule

> `readonly` **ownerRule**: [`CSSRule`](CSSRule.md) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:7168

***

### parentStyleSheet

> `readonly` **parentStyleSheet**: `CSSStyleSheet` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:31576

The **`parentStyleSheet`** property of the the given style sheet.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/StyleSheet/parentStyleSheet)

#### Inherited from

[`StyleSheet`](StyleSheet.md).[`parentStyleSheet`](StyleSheet.md#parentstylesheet)

***

### ~~rules~~

> `readonly` **rules**: `CSSRuleList`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:7175

**`rules`** is a _deprecated_ _legacy property_ of the CSSStyleSheet interface.

#### Deprecated

[MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSStyleSheet/rules)

***

### title

> `readonly` **title**: `string` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:31582

The **`title`** property of the StyleSheet interface returns the advisory title of the current style sheet.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/StyleSheet/title)

#### Inherited from

[`StyleSheet`](StyleSheet.md).[`title`](StyleSheet.md#title)

***

### type

> `readonly` **type**: `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:31588

The **`type`** property of the StyleSheet interface specifies the style sheet language for the given style sheet.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/StyleSheet/type)

#### Inherited from

[`StyleSheet`](StyleSheet.md).[`type`](StyleSheet.md#type)

## Accessors

### media

#### Get Signature

> **get** **media**(): `MediaList`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:31563

The **`media`** property of the StyleSheet interface specifies the intended destination media for style information.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/StyleSheet/media)

##### Returns

`MediaList`

#### Set Signature

> **set** **media**(`mediaText`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:31564

##### Parameters

###### mediaText

`string`

##### Returns

`void`

#### Inherited from

[`StyleSheet`](StyleSheet.md).[`media`](StyleSheet.md#media)

## Methods

### ~~addRule()~~

> **addRule**(`selector?`, `style?`, `index?`): `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:7182

The obsolete CSSStyleSheet interface's **`addRule()`** _legacy method_ adds a new rule to the stylesheet.

#### Parameters

##### selector?

`string`

##### style?

`string`

##### index?

`number`

#### Returns

`number`

#### Deprecated

[MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSStyleSheet/addRule)

***

### deleteRule()

> **deleteRule**(`index`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:7188

The CSSStyleSheet method **`deleteRule()`** removes a rule from the stylesheet object.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSStyleSheet/deleteRule)

#### Parameters

##### index

`number`

#### Returns

`void`

***

### insertRule()

> **insertRule**(`rule`, `index?`): `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:7194

The **`CSSStyleSheet.insertRule()`** method inserts a new CSS rule into the current style sheet.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSStyleSheet/insertRule)

#### Parameters

##### rule

`string`

##### index?

`number`

#### Returns

`number`

***

### ~~removeRule()~~

> **removeRule**(`index?`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:7201

The obsolete CSSStyleSheet method **`removeRule()`** removes a rule from the stylesheet object.

#### Parameters

##### index?

`number`

#### Returns

`void`

#### Deprecated

[MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSStyleSheet/removeRule)

***

### replace()

> **replace**(`text`): `Promise`\<`CSSStyleSheet`\>

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:7207

The **`replace()`** method of the CSSStyleSheet interface asynchronously replaces the content of the stylesheet with the content passed into it.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSStyleSheet/replace)

#### Parameters

##### text

`string`

#### Returns

`Promise`\<`CSSStyleSheet`\>

***

### replaceSync()

> **replaceSync**(`text`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:7213

The **`replaceSync()`** method of the CSSStyleSheet interface synchronously replaces the content of the stylesheet with the content passed into it.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSStyleSheet/replaceSync)

#### Parameters

##### text

`string`

#### Returns

`void`
