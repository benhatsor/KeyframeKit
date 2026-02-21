[KeyframeKit](../../../../index.md) / [KeyframesFactoryError](../README.md) / StyleSheetImportError

# Class: StyleSheetImportError

Defined in: [src/KeyframeKit.ts:26](https://github.com/benhatsor/KeyframeKit.js/blob/bcee9f4f13a98aa8f2cd08c5503f1b3da83077c1/src/KeyframeKit.ts#L26)

## Extends

- [`Error`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error)

## Constructors

### Constructor

```ts
new StyleSheetImportError(message?: string): StyleSheetImportError;
```

Defined in: docs/node\_modules/typescript/lib/lib.es5.d.ts:1082

#### Parameters

##### message?

`string`

#### Returns

`StyleSheetImportError`

#### Inherited from

```ts
Error.constructor
```

### Constructor

```ts
new StyleSheetImportError(message?: string, options?: ErrorOptions): StyleSheetImportError;
```

Defined in: docs/node\_modules/typescript/lib/lib.es5.d.ts:1082

#### Parameters

##### message?

`string`

##### options?

`ErrorOptions`

#### Returns

`StyleSheetImportError`

#### Inherited from

```ts
Error.constructor
```

## Properties

### cause?

```ts
optional cause: unknown;
```

Defined in: docs/node\_modules/typescript/lib/lib.es2022.error.d.ts:26

#### Inherited from

```ts
Error.cause
```

***

### message

```ts
message: string;
```

Defined in: [src/KeyframeKit.ts:27](https://github.com/benhatsor/KeyframeKit.js/blob/bcee9f4f13a98aa8f2cd08c5503f1b3da83077c1/src/KeyframeKit.ts#L27)

#### Overrides

```ts
Error.message
```

***

### name

```ts
name: string;
```

Defined in: docs/node\_modules/typescript/lib/lib.es5.d.ts:1076

#### Inherited from

```ts
Error.name
```

***

### stack?

```ts
optional stack: string;
```

Defined in: docs/node\_modules/typescript/lib/lib.es5.d.ts:1078

#### Inherited from

```ts
Error.stack
```

## Methods

### isError()

```ts
static isError(error: unknown): error is Error;
```

Defined in: docs/node\_modules/typescript/lib/lib.esnext.error.d.ts:23

Indicates whether the argument provided is a built-in Error instance or not.

#### Parameters

##### error

`unknown`

#### Returns

`error is Error`

#### Inherited from

```ts
Error.isError
```
