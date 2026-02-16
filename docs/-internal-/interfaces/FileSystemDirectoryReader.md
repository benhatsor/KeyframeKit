[**KeyframeKit.js**](../../README.md)

***

[KeyframeKit.js](../../globals.md) / [\<internal\>](../README.md) / FileSystemDirectoryReader

# Interface: FileSystemDirectoryReader

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11853

The `FileSystemDirectoryReader` interface of the File and Directory Entries API lets you access the FileSystemFileEntry-based objects (generally FileSystemFileEntry or FileSystemDirectoryEntry) representing each entry in a directory.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/FileSystemDirectoryReader)

## Methods

### readEntries()

> **readEntries**(`successCallback`, `errorCallback?`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11859

The FileSystemDirectoryReader interface's **`readEntries()`** method retrieves the directory entries within the directory being read and delivers them in an array to a provided callback function.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/FileSystemDirectoryReader/readEntries)

#### Parameters

##### successCallback

[`FileSystemEntriesCallback`](FileSystemEntriesCallback.md)

##### errorCallback?

[`ErrorCallback`](ErrorCallback.md)

#### Returns

`void`
