[@guiexpert/table](../README.md) / [Exports](../modules.md) / CopyServiceIf

# Interface: CopyServiceIf

## Implemented by

- [`CopyService`](../classes/CopyService.md)

## Table of contents

### Methods

- [copyContent](CopyServiceIf.md#copycontent)
- [copyToClipboard](CopyServiceIf.md#copytoclipboard)
- [createContent](CopyServiceIf.md#createcontent)

## Methods

### copyContent

▸ **copyContent**(`content`): `Promise`\<`void`\>

Copies the content to a specified location.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `content` | `string` | The content to be copied. |

#### Returns

`Promise`\<`void`\>

- A Promise that resolves when the content is successfully copied.

#### Defined in

[lib/table/service/copy-service.if.ts:44](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/service/copy-service.if.ts#L44)

___

### copyToClipboard

▸ **copyToClipboard**(`tableModel`, `selectionModel`, `focusModel`): `Promise`\<`string`\>

Copies the selected data from the table to the clipboard.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tableModel` | [`TableModelIf`](TableModelIf.md) | The table model containing the data. |
| `selectionModel` | `undefined` \| [`SelectionModelIf`](SelectionModelIf.md) | The selection model containing the selected rows/columns. |
| `focusModel` | `undefined` \| [`FocusModelIf`](FocusModelIf.md) | The focus model containing the focused cell. |

#### Returns

`Promise`\<`string`\>

- A promise that resolves with the copied data as a string.

#### Defined in

[lib/table/service/copy-service.if.ts:17](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/service/copy-service.if.ts#L17)

___

### createContent

▸ **createContent**(`tableModel`, `selectionModel`, `focusModel`): `Promise`\<`string`\>

Creates content based on the provided table model, selection model, and focus model.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tableModel` | [`TableModelIf`](TableModelIf.md) | The table model representing the data. |
| `selectionModel` | `undefined` \| [`SelectionModelIf`](SelectionModelIf.md) | The selection model for the table. |
| `focusModel` | `undefined` \| [`FocusModelIf`](FocusModelIf.md) | The focus model for the table. |

#### Returns

`Promise`\<`string`\>

- A promise that resolves to the generated content as a string.

#### Defined in

[lib/table/service/copy-service.if.ts:32](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/service/copy-service.if.ts#L32)
