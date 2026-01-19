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

Represents a constructor for a class.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `r1` | `number` | `undefined` | The value for r1. |
| `c1` | `number` | `undefined` | The value for c1. |
| `r2` | `number` | `undefined` | The value for r2. |
| `c2` | `number` | `undefined` | The value for c2. |
| `gammaRange?` | `boolean` | `false` | The value for gammaRange. Defaults to false. gammaRange will be used for AreaModelCellGroups, but it's not implemented yet! |

#### Returns

[`CellRange`](CellRange.md)

#### Defined in

[lib/table/data/common/cell-range.ts:13](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/common/cell-range.ts#L13)

## Properties

### c1

• **c1**: `number`

The value for c1.

#### Defined in

[lib/table/data/common/cell-range.ts:15](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/common/cell-range.ts#L15)

___

### c2

• **c2**: `number`

The value for c2.

#### Defined in

[lib/table/data/common/cell-range.ts:17](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/common/cell-range.ts#L17)

___

### gammaRange

• **gammaRange**: `boolean` = `false`

The value for gammaRange. Defaults to false. gammaRange will be used for AreaModelCellGroups, but it's not implemented yet!

#### Defined in

[lib/table/data/common/cell-range.ts:18](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/common/cell-range.ts#L18)

___

### r1

• **r1**: `number`

The value for r1.

#### Defined in

[lib/table/data/common/cell-range.ts:14](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/common/cell-range.ts#L14)

___

### r2

• **r2**: `number`

The value for r2.

#### Defined in

[lib/table/data/common/cell-range.ts:16](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/common/cell-range.ts#L16)

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

[lib/table/data/common/cell-range.ts:59](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/common/cell-range.ts#L59)

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

[lib/table/data/common/cell-range.ts:21](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/common/cell-range.ts#L21)

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

[lib/table/data/common/cell-range.ts:40](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/common/cell-range.ts#L40)

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

[lib/table/data/common/cell-range.ts:53](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/common/cell-range.ts#L53)

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

[lib/table/data/common/cell-range.ts:47](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/common/cell-range.ts#L47)
