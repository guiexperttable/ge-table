[@guiexpert/table](../README.md) / [Exports](../modules.md) / ColumnDefGenerator

# Class: ColumnDefGenerator

## Table of contents

### Constructors

- [constructor](ColumnDefGenerator.md#constructor)

### Properties

- [LABEL\_MAPPINGS](ColumnDefGenerator.md#label_mappings)
- [allowCustomRenderer](ColumnDefGenerator.md#allowcustomrenderer)
- [bufCustomRenderer](ColumnDefGenerator.md#bufcustomrenderer)
- [rootPropertyType](ColumnDefGenerator.md#rootpropertytype)

### Methods

- [getReadableColumnLabel](ColumnDefGenerator.md#getreadablecolumnlabel)
- [iteratePropertyItems](ColumnDefGenerator.md#iteratepropertyitems)
- [renderColumnDefs](ColumnDefGenerator.md#rendercolumndefs)
- [renderCumstomCellRenderer](ColumnDefGenerator.md#rendercumstomcellrenderer)
- [transformLabel](ColumnDefGenerator.md#transformlabel)

## Constructors

### constructor

• **new ColumnDefGenerator**(): [`ColumnDefGenerator`](ColumnDefGenerator.md)

#### Returns

[`ColumnDefGenerator`](ColumnDefGenerator.md)

## Properties

### LABEL\_MAPPINGS

• `Private` **LABEL\_MAPPINGS**: `Object`

#### Index signature

▪ [key: `string`]: `string`

#### Defined in

[lib/common/generator/column-def-generator-service.ts:109](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/common/generator/column-def-generator-service.ts#L109)

___

### allowCustomRenderer

• `Private` **allowCustomRenderer**: `boolean` = `true`

#### Defined in

[lib/common/generator/column-def-generator-service.ts:17](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/common/generator/column-def-generator-service.ts#L17)

___

### bufCustomRenderer

• `Private` **bufCustomRenderer**: `string`[] = `[]`

#### Defined in

[lib/common/generator/column-def-generator-service.ts:18](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/common/generator/column-def-generator-service.ts#L18)

___

### rootPropertyType

• **rootPropertyType**: ``null`` \| [`PropertyType`](../interfaces/PropertyType.md) = `null`

#### Defined in

[lib/common/generator/column-def-generator-service.ts:16](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/common/generator/column-def-generator-service.ts#L16)

## Methods

### getReadableColumnLabel

▸ **getReadableColumnLabel**(`columnId`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `columnId` | `string` |

#### Returns

`string`

#### Defined in

[lib/common/generator/column-def-generator-service.ts:132](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/common/generator/column-def-generator-service.ts#L132)

___

### iteratePropertyItems

▸ **iteratePropertyItems**(`buf`, `props`, `parentProperty?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `buf` | `string`[] | `undefined` |
| `props` | [`PropertyItem`](PropertyItem.md)[] | `undefined` |
| `parentProperty` | `string` | `''` |

#### Returns

`void`

#### Defined in

[lib/common/generator/column-def-generator-service.ts:46](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/common/generator/column-def-generator-service.ts#L46)

___

### renderColumnDefs

▸ **renderColumnDefs**(`rootPropertyType`, `allowCustomRenderer?`): `string`[]

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `rootPropertyType` | [`PropertyType`](../interfaces/PropertyType.md) | `undefined` |
| `allowCustomRenderer` | `boolean` | `true` |

#### Returns

`string`[]

#### Defined in

[lib/common/generator/column-def-generator-service.ts:20](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/common/generator/column-def-generator-service.ts#L20)

___

### renderCumstomCellRenderer

▸ **renderCumstomCellRenderer**(`arrayItemClassName`, `customRendererName`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `arrayItemClassName` | `string` |
| `customRendererName` | `string` |

#### Returns

`void`

#### Defined in

[lib/common/generator/column-def-generator-service.ts:148](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/common/generator/column-def-generator-service.ts#L148)

___

### transformLabel

▸ **transformLabel**(`label`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `label` | `string` |

#### Returns

`string`

#### Defined in

[lib/common/generator/column-def-generator-service.ts:128](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/common/generator/column-def-generator-service.ts#L128)
