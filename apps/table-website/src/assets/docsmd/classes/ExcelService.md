[@guiexpert/table](../README.md) / [Exports](../modules.md) / ExcelService

# Class: ExcelService

## Implements

- `ExcelServiceIf`

## Table of contents

### Constructors

- [constructor](ExcelService.md#constructor)

### Methods

- [createZip](ExcelService.md#createzip)
- [downloadExcel](ExcelService.md#downloadexcel)
- [escapeXml](ExcelService.md#escapexml)
- [generateBuffer](ExcelService.md#generatebuffer)
- [generateMap](ExcelService.md#generatemap)
- [getCellAddress](ExcelService.md#getcelladdress)
- [getX1WorksheetsSheet1Xml](ExcelService.md#getx1worksheetssheet1xml)

## Constructors

### constructor

• **new ExcelService**(): [`ExcelService`](ExcelService.md)

#### Returns

[`ExcelService`](ExcelService.md)

## Methods

### createZip

▸ **createZip**(`files`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `files` | `Map`\<`string`, `string`\> |

#### Returns

`Uint8Array`

#### Defined in

[lib/table/service/excel-service.ts:151](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/service/excel-service.ts#L151)

___

### downloadExcel

▸ **downloadExcel**(`matrix`, `filename?`, `author?`): `void`

Downloads a matrix data as an Excel file.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `matrix` | `any`[][] | `undefined` | A 2D array representing the data to be included in the Excel file. Each inner array corresponds to a row in the sheet. |
| `filename?` | `string` | `'file.xlsx'` | The name of the Excel file to be downloaded. Defaults to 'file.xlsx'. |
| `author?` | `string` | `''` | The author's name to include as metadata in the Excel file. Optional parameter. |

#### Returns

`void`

Does not return a value.

**`Throws`**

Throws an error if the input matrix is not a valid 2D array or if the filename is an empty string.

#### Implementation of

ExcelServiceIf.downloadExcel

#### Defined in

[lib/table/service/excel-service.ts:15](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/service/excel-service.ts#L15)

___

### escapeXml

▸ **escapeXml**(`value`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`string`

#### Defined in

[lib/table/service/excel-service.ts:129](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/service/excel-service.ts#L129)

___

### generateBuffer

▸ **generateBuffer**(`data`, `author?`): `Uint8Array`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `data` | `any`[][] | `undefined` |
| `author` | `string` | `''` |

#### Returns

`Uint8Array`

#### Defined in

[lib/table/service/excel-service.ts:251](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/service/excel-service.ts#L251)

___

### generateMap

▸ **generateMap**(`data`, `author?`): `Map`\<`string`, `string`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `data` | `any`[][] | `undefined` |
| `author` | `string` | `''` |

#### Returns

`Map`\<`string`, `string`\>

#### Defined in

[lib/table/service/excel-service.ts:48](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/service/excel-service.ts#L48)

___

### getCellAddress

▸ **getCellAddress**(`row`, `col`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `row` | `number` |
| `col` | `number` |

#### Returns

`string`

#### Defined in

[lib/table/service/excel-service.ts:139](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/service/excel-service.ts#L139)

___

### getX1WorksheetsSheet1Xml

▸ **getX1WorksheetsSheet1Xml**(`data`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any`[][] |

#### Returns

`string`

#### Defined in

[lib/table/service/excel-service.ts:91](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/service/excel-service.ts#L91)
