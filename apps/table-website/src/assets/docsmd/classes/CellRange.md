[@guiexpert/table](../README.md) / [Exports](../modules.md) / CellRange

# Class: CellRange

## Table of contents

### Constructors

- [constructor](CellRange.md#constructor)

### Properties

- [c1](CellRange.md#c1)
- [c2](CellRange.md#c2)
- [gammaRange](CellRange.md#gammarange)
- [r1](CellRange.md#r1)
- [r2](CellRange.md#r2)

### Methods

- [isInRange](CellRange.md#isinrange)
- [create](CellRange.md#create)
- [singleCell](CellRange.md#singlecell)
- [singleColumn](CellRange.md#singlecolumn)
- [singleRow](CellRange.md#singlerow)

## Constructors

### constructor

• **new CellRange**(`r1`, `c1`, `r2`, `c2`, `gammaRange?`): [`CellRange`](CellRange.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `r1` | `number` | `undefined` |
| `c1` | `number` | `undefined` |
| `r2` | `number` | `undefined` |
| `c2` | `number` | `undefined` |
| `gammaRange` | `boolean` | `false` |

#### Returns

[`CellRange`](CellRange.md)

#### Defined in

[lib/table/data/common/cell-range.ts:4](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/data/common/cell-range.ts#L4)

## Properties

### c1

• **c1**: `number`

#### Defined in

[lib/table/data/common/cell-range.ts:6](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/data/common/cell-range.ts#L6)

___

### c2

• **c2**: `number`

#### Defined in

[lib/table/data/common/cell-range.ts:8](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/data/common/cell-range.ts#L8)

___

### gammaRange

• **gammaRange**: `boolean` = `false`

#### Defined in

[lib/table/data/common/cell-range.ts:9](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/data/common/cell-range.ts#L9)

___

### r1

• **r1**: `number`

#### Defined in

[lib/table/data/common/cell-range.ts:5](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/data/common/cell-range.ts#L5)

___

### r2

• **r2**: `number`

#### Defined in

[lib/table/data/common/cell-range.ts:7](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/data/common/cell-range.ts#L7)

## Methods

### isInRange

▸ **isInRange**(`rowIndex`, `columnIndex`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rowIndex` | `number` |
| `columnIndex` | `number` |

#### Returns

`boolean`

#### Defined in

[lib/table/data/common/cell-range.ts:50](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/data/common/cell-range.ts#L50)

___

### create

▸ **create**(`params`): [`CellRange`](CellRange.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `Object` |
| `params.columnIndex1` | `number` |
| `params.columnIndex2` | `number` |
| `params.gammaRange?` | `boolean` |
| `params.rowIndex1` | `number` |
| `params.rowIndex2` | `number` |

#### Returns

[`CellRange`](CellRange.md)

#### Defined in

[lib/table/data/common/cell-range.ts:12](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/data/common/cell-range.ts#L12)

___

### singleCell

▸ **singleCell**(`rowIndex`, `columnIndex`): [`CellRange`](CellRange.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `rowIndex` | `number` |
| `columnIndex` | `number` |

#### Returns

[`CellRange`](CellRange.md)

#### Defined in

[lib/table/data/common/cell-range.ts:31](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/data/common/cell-range.ts#L31)

___

### singleColumn

▸ **singleColumn**(`columnIndex`): [`CellRange`](CellRange.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `columnIndex` | `number` |

#### Returns

[`CellRange`](CellRange.md)

#### Defined in

[lib/table/data/common/cell-range.ts:44](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/data/common/cell-range.ts#L44)

___

### singleRow

▸ **singleRow**(`rowIndex`): [`CellRange`](CellRange.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `rowIndex` | `number` |

#### Returns

[`CellRange`](CellRange.md)

#### Defined in

[lib/table/data/common/cell-range.ts:38](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/data/common/cell-range.ts#L38)
