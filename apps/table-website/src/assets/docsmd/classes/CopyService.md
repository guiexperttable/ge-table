[@guiexpert/table](../README.md) / [Exports](../modules.md) / CopyService

# Class: CopyService

## Implements

- [`CopyServiceIf`](../interfaces/CopyServiceIf.md)

## Table of contents

### Constructors

- [constructor](CopyService.md#constructor)

### Properties

- [columnSeparatorChar](CopyService.md#columnseparatorchar)
- [rowSeparatorChar](CopyService.md#rowseparatorchar)

### Methods

- [copyContent](CopyService.md#copycontent)
- [copyToClipboard](CopyService.md#copytoclipboard)
- [createContent](CopyService.md#createcontent)
- [mergeRanges](CopyService.md#mergeranges)

## Constructors

### constructor

• **new CopyService**(): [`CopyService`](CopyService.md)

#### Returns

[`CopyService`](CopyService.md)

## Properties

### columnSeparatorChar

▪ `Static` **columnSeparatorChar**: `string` = `'\t'`

#### Defined in

[lib/table/service/copy-service.ts:10](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/service/copy-service.ts#L10)

___

### rowSeparatorChar

▪ `Static` **rowSeparatorChar**: `string` = `'\n'`

#### Defined in

[lib/table/service/copy-service.ts:11](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/service/copy-service.ts#L11)

## Methods

### copyContent

▸ **copyContent**(`content`): `Promise`\<`void`\>

Copy the provided content to the clipboard.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `content` | `string` | The content to be copied. |

#### Returns

`Promise`\<`void`\>

A promise that resolves when the content has been successfully copied to the clipboard.

#### Implementation of

[CopyServiceIf](../interfaces/CopyServiceIf.md).[copyContent](../interfaces/CopyServiceIf.md#copycontent)

#### Defined in

[lib/table/service/copy-service.ts:66](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/service/copy-service.ts#L66)

___

### copyToClipboard

▸ **copyToClipboard**(`tableModel`, `selectionModel`, `focusModel`): `Promise`\<`string`\>

Asynchronously copies the content of a table to the clipboard.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tableModel` | [`TableModelIf`](../interfaces/TableModelIf.md) | The table model to copy from. |
| `selectionModel` | [`SelectionModelIf`](../interfaces/SelectionModelIf.md) | The selection model of the table. |
| `focusModel` | [`FocusModelIf`](../interfaces/FocusModelIf.md) | The focus model of the table. |

#### Returns

`Promise`\<`string`\>

A promise that resolves with the copied text if successful, or rejects if an error occurs.

#### Implementation of

[CopyServiceIf](../interfaces/CopyServiceIf.md).[copyToClipboard](../interfaces/CopyServiceIf.md#copytoclipboard)

#### Defined in

[lib/table/service/copy-service.ts:78](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/service/copy-service.ts#L78)

___

### createContent

▸ **createContent**(`tableModel`, `selectionModel`, `focusModel`): `Promise`\<`string`\>

Returns the content to be copied based on the provided table model, selection model, and focus model.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tableModel` | [`TableModelIf`](../interfaces/TableModelIf.md) | The table model for data retrieval. |
| `selectionModel` | [`SelectionModelIf`](../interfaces/SelectionModelIf.md) | The selection model to determine the selected range. |
| `focusModel` | [`FocusModelIf`](../interfaces/FocusModelIf.md) | The focus model to determine the focused cell. |

#### Returns

`Promise`\<`string`\>

A promise that resolves to the copied content as a string.

**`Throws`**

Throws an error if neither selection nor focus is defined.

#### Implementation of

[CopyServiceIf](../interfaces/CopyServiceIf.md).[createContent](../interfaces/CopyServiceIf.md#createcontent)

#### Defined in

[lib/table/service/copy-service.ts:22](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/service/copy-service.ts#L22)

___

### mergeRanges

▸ **mergeRanges**(`ranges`): `undefined` \| [`CellRange`](CellRange.md)

Merges an array of CellRanges into a single merged CellRange.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ranges` | [`CellRange`](CellRange.md)[] | The array of CellRanges to be merged. |

#### Returns

`undefined` \| [`CellRange`](CellRange.md)

- The merged CellRange, or undefined if the ranges array is empty.

#### Defined in

[lib/table/service/copy-service.ts:114](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/service/copy-service.ts#L114)
