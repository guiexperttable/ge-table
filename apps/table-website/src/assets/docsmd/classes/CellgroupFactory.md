[@guiexpert/table](../README.md) / [Exports](../modules.md) / CellgroupFactory

# Class: CellgroupFactory

## Table of contents

### Constructors

- [constructor](CellgroupFactory.md#constructor)

### Methods

- [buildArrayOfArrays](CellgroupFactory.md#buildarrayofarrays)
- [buildColumnDefs](CellgroupFactory.md#buildcolumndefs)
- [buildGroupExts](CellgroupFactory.md#buildgroupexts)
- [flattenGroupExts](CellgroupFactory.md#flattengroupexts)
- [iterateThrowColumns](CellgroupFactory.md#iteratethrowcolumns)

## Constructors

### constructor

• **new CellgroupFactory**(): [`CellgroupFactory`](CellgroupFactory.md)

#### Returns

[`CellgroupFactory`](CellgroupFactory.md)

## Methods

### buildArrayOfArrays

▸ **buildArrayOfArrays**(`flatten`, `arrs`): (`undefined` \| ``null`` \| [`CellGroupExt`](CellGroupExt.md))[][]

#### Parameters

| Name | Type |
| :------ | :------ |
| `flatten` | [`CellGroupExt`](CellGroupExt.md)[] |
| `arrs` | (`undefined` \| ``null`` \| [`CellGroupExt`](CellGroupExt.md))[][] |

#### Returns

(`undefined` \| ``null`` \| [`CellGroupExt`](CellGroupExt.md))[][]

#### Defined in

[lib/table/data/tablemodel/cellgroup/cellgroup-factory.ts:102](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/data/tablemodel/cellgroup/cellgroup-factory.ts#L102)

___

### buildColumnDefs

▸ **buildColumnDefs**(`cellGroups`, `ret?`): [`ColumnDefIf`](../interfaces/ColumnDefIf.md)[]

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `cellGroups` | [`CellGroupIf`](../interfaces/CellGroupIf.md)[] | `undefined` |
| `ret` | [`ColumnDefIf`](../interfaces/ColumnDefIf.md)[] | `[]` |

#### Returns

[`ColumnDefIf`](../interfaces/ColumnDefIf.md)[]

#### Defined in

[lib/table/data/tablemodel/cellgroup/cellgroup-factory.ts:9](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/data/tablemodel/cellgroup/cellgroup-factory.ts#L9)

___

### buildGroupExts

▸ **buildGroupExts**(`cellGroups`, `ret?`, `deep?`, `parent?`): [`CellGroupExt`](CellGroupExt.md)[]

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `cellGroups` | [`CellGroupIf`](../interfaces/CellGroupIf.md)[] | `undefined` |
| `ret` | [`CellGroupExt`](CellGroupExt.md)[] | `[]` |
| `deep` | `number` | `0` |
| `parent?` | [`CellGroupExt`](CellGroupExt.md) | `undefined` |

#### Returns

[`CellGroupExt`](CellGroupExt.md)[]

#### Defined in

[lib/table/data/tablemodel/cellgroup/cellgroup-factory.ts:54](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/data/tablemodel/cellgroup/cellgroup-factory.ts#L54)

___

### flattenGroupExts

▸ **flattenGroupExts**(`cellGroups`, `ret?`): [`CellGroupExt`](CellGroupExt.md)[]

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `cellGroups` | [`CellGroupExt`](CellGroupExt.md)[] | `undefined` |
| `ret` | [`CellGroupExt`](CellGroupExt.md)[] | `[]` |

#### Returns

[`CellGroupExt`](CellGroupExt.md)[]

#### Defined in

[lib/table/data/tablemodel/cellgroup/cellgroup-factory.ts:80](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/data/tablemodel/cellgroup/cellgroup-factory.ts#L80)

___

### iterateThrowColumns

▸ **iterateThrowColumns**(`sb?`, `cellGroups`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `sb` | `string`[] | `[]` |
| `cellGroups` | [`CellGroupExt`](CellGroupExt.md)[] | `undefined` |

#### Returns

`void`

#### Defined in

[lib/table/data/tablemodel/cellgroup/cellgroup-factory.ts:134](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/data/tablemodel/cellgroup/cellgroup-factory.ts#L134)
