[**KeyframeKit.js**](../../README.md)

***

[KeyframeKit.js](../../globals.md) / [\<internal\>](../README.md) / FileSystemDirectoryEntry

# Interface: FileSystemDirectoryEntry

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11783

The **`FileSystemDirectoryEntry`** interface of the File and Directory Entries API represents a directory in a file system.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/FileSystemDirectoryEntry)

## Extends

- [`FileSystemEntry`](FileSystemEntry.md)

## Properties

### filesystem

> `readonly` **filesystem**: [`FileSystem`](FileSystem.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11878

The read-only **`filesystem`** property of the FileSystemEntry interface contains a resides.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/FileSystemEntry/filesystem)

#### Inherited from

[`FileSystemEntry`](FileSystemEntry.md).[`filesystem`](FileSystemEntry.md#filesystem)

***

### fullPath

> `readonly` **fullPath**: `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11884

The read-only **`fullPath`** property of the FileSystemEntry interface returns a string specifying the full, absolute path from the file system's root to the file represented by the entry.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/FileSystemEntry/fullPath)

#### Inherited from

[`FileSystemEntry`](FileSystemEntry.md).[`fullPath`](FileSystemEntry.md#fullpath)

***

### isDirectory

> `readonly` **isDirectory**: `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11890

The read-only **`isDirectory`** property of the FileSystemEntry interface is `true` if the entry represents a directory (meaning it's a FileSystemDirectoryEntry) and `false` if it's not.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/FileSystemEntry/isDirectory)

#### Inherited from

[`FileSystemEntry`](FileSystemEntry.md).[`isDirectory`](FileSystemEntry.md#isdirectory)

***

### isFile

> `readonly` **isFile**: `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11896

The read-only **`isFile`** property of the FileSystemEntry interface is `true` if the entry represents a file (meaning it's a FileSystemFileEntry) and `false` if it's not.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/FileSystemEntry/isFile)

#### Inherited from

[`FileSystemEntry`](FileSystemEntry.md).[`isFile`](FileSystemEntry.md#isfile)

***

### name

> `readonly` **name**: `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11902

The read-only **`name`** property of the FileSystemEntry interface returns a string specifying the entry's name; this is the entry within its parent directory (the last component of the path as indicated by the FileSystemEntry.fullPath property).

[MDN Reference](https://developer.mozilla.org/docs/Web/API/FileSystemEntry/name)

#### Inherited from

[`FileSystemEntry`](FileSystemEntry.md).[`name`](FileSystemEntry.md#name)

## Methods

### createReader()

> **createReader**(): [`FileSystemDirectoryReader`](FileSystemDirectoryReader.md)

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11789

The FileSystemDirectoryEntry interface's method **`createReader()`** returns a the directory.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/FileSystemDirectoryEntry/createReader)

#### Returns

[`FileSystemDirectoryReader`](FileSystemDirectoryReader.md)

***

### getDirectory()

> **getDirectory**(`path?`, `options?`, `successCallback?`, `errorCallback?`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11795

The FileSystemDirectoryEntry interface's method **`getDirectory()`** returns a somewhere within the directory subtree rooted at the directory on which it's called.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/FileSystemDirectoryEntry/getDirectory)

#### Parameters

##### path?

`string` | `null`

##### options?

[`FileSystemFlags`](FileSystemFlags.md)

##### successCallback?

[`FileSystemEntryCallback`](FileSystemEntryCallback.md)

##### errorCallback?

[`ErrorCallback`](ErrorCallback.md)

#### Returns

`void`

***

### getFile()

> **getFile**(`path?`, `options?`, `successCallback?`, `errorCallback?`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11801

The FileSystemDirectoryEntry interface's method **`getFile()`** returns a within the directory subtree rooted at the directory on which it's called.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/FileSystemDirectoryEntry/getFile)

#### Parameters

##### path?

`string` | `null`

##### options?

[`FileSystemFlags`](FileSystemFlags.md)

##### successCallback?

[`FileSystemEntryCallback`](FileSystemEntryCallback.md)

##### errorCallback?

[`ErrorCallback`](ErrorCallback.md)

#### Returns

`void`

***

### getParent()

> **getParent**(`successCallback?`, `errorCallback?`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11908

The FileSystemEntry interface's method **`getParent()`** obtains a ```js-nolint getParent(successCallback, errorCallback) getParent(successCallback) ``` - `successCallback` - : A function which is called when the parent directory entry has been retrieved.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/FileSystemEntry/getParent)

#### Parameters

##### successCallback?

[`FileSystemEntryCallback`](FileSystemEntryCallback.md)

##### errorCallback?

[`ErrorCallback`](ErrorCallback.md)

#### Returns

`void`

#### Inherited from

[`FileSystemEntry`](FileSystemEntry.md).[`getParent`](FileSystemEntry.md#getparent)
