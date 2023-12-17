[@guiexpert/table](../README.md) / [Exports](../modules.md) / ColAndRowspanModel

# Class: ColAndRowspanModel

Represents a model for handling colspan and rowspan in a table.

## Table of contents

### Constructors

- [constructor](ColAndRowspanModel.md#constructor)

### Properties

- [areaModel](ColAndRowspanModel.md#areamodel)
- [colAndRowspanRanges](ColAndRowspanModel.md#colandrowspanranges)
- [tableModel](ColAndRowspanModel.md#tablemodel)

### Methods

- [getRanges](ColAndRowspanModel.md#getranges)
- [init](ColAndRowspanModel.md#init)
- [isInRange](ColAndRowspanModel.md#isinrange)

## Constructors

### constructor

• **new ColAndRowspanModel**(`tableModel`, `areaModel`): [`ColAndRowspanModel`](ColAndRowspanModel.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `tableModel` | [`TableModelIf`](../interfaces/TableModelIf.md) |
| `areaModel` | [`AreaModelIf`](../interfaces/AreaModelIf.md) |

#### Returns

[`ColAndRowspanModel`](ColAndRowspanModel.md)

#### Defined in

[lib/table/data/tablemodel/areamodel/col-and-rowspan-model.ts:12](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/tablemodel/areamodel/col-and-rowspan-model.ts#L12)

## Properties

### areaModel

• `Protected` **areaModel**: [`AreaModelIf`](../interfaces/AreaModelIf.md)

#### Defined in

[lib/table/data/tablemodel/areamodel/col-and-rowspan-model.ts:14](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/tablemodel/areamodel/col-and-rowspan-model.ts#L14)

___

### colAndRowspanRanges

• `Protected` **colAndRowspanRanges**: `undefined` \| [`CellRange`](CellRange.md)[] = `undefined`

#### Defined in

[lib/table/data/tablemodel/areamodel/col-and-rowspan-model.ts:10](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/tablemodel/areamodel/col-and-rowspan-model.ts#L10)

___

### tableModel

• `Protected` **tableModel**: [`TableModelIf`](../interfaces/TableModelIf.md)

#### Defined in

[lib/table/data/tablemodel/areamodel/col-and-rowspan-model.ts:13](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/tablemodel/areamodel/col-and-rowspan-model.ts#L13)

## Methods

### getRanges

▸ **getRanges**(): [`CellRange`](CellRange.md)[]

#### Returns

[`CellRange`](CellRange.md)[]

#### Defined in

[lib/table/data/tablemodel/areamodel/col-and-rowspan-model.ts:46](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/tablemodel/areamodel/col-and-rowspan-model.ts#L46)

___

### init

▸ **init**(): `void`

#### Returns

`void`

#### Defined in

[lib/table/data/tablemodel/areamodel/col-and-rowspan-model.ts:18](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/tablemodel/areamodel/col-and-rowspan-model.ts#L18)

___

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

[lib/table/data/tablemodel/areamodel/col-and-rowspan-model.ts:53](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/tablemodel/areamodel/col-and-rowspan-model.ts#L53)
