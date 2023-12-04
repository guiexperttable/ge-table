[@guiexpert/table](../README.md) / [Exports](../modules.md) / ColAndRowspanModel

# Class: ColAndRowspanModel

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

[lib/table/data/tablemodel/areamodel/col-and-rowspan-model.ts:9](https://github.com/guiexperttable/ge-table/blob/7d8ffe2/libs/table/src/lib/table/data/tablemodel/areamodel/col-and-rowspan-model.ts#L9)

## Properties

### areaModel

• `Protected` **areaModel**: [`AreaModelIf`](../interfaces/AreaModelIf.md)

#### Defined in

[lib/table/data/tablemodel/areamodel/col-and-rowspan-model.ts:11](https://github.com/guiexperttable/ge-table/blob/7d8ffe2/libs/table/src/lib/table/data/tablemodel/areamodel/col-and-rowspan-model.ts#L11)

___

### colAndRowspanRanges

• `Protected` **colAndRowspanRanges**: `undefined` \| [`CellRange`](CellRange.md)[] = `undefined`

#### Defined in

[lib/table/data/tablemodel/areamodel/col-and-rowspan-model.ts:7](https://github.com/guiexperttable/ge-table/blob/7d8ffe2/libs/table/src/lib/table/data/tablemodel/areamodel/col-and-rowspan-model.ts#L7)

___

### tableModel

• `Protected` **tableModel**: [`TableModelIf`](../interfaces/TableModelIf.md)

#### Defined in

[lib/table/data/tablemodel/areamodel/col-and-rowspan-model.ts:10](https://github.com/guiexperttable/ge-table/blob/7d8ffe2/libs/table/src/lib/table/data/tablemodel/areamodel/col-and-rowspan-model.ts#L10)

## Methods

### getRanges

▸ **getRanges**(): [`CellRange`](CellRange.md)[]

#### Returns

[`CellRange`](CellRange.md)[]

#### Defined in

[lib/table/data/tablemodel/areamodel/col-and-rowspan-model.ts:43](https://github.com/guiexperttable/ge-table/blob/7d8ffe2/libs/table/src/lib/table/data/tablemodel/areamodel/col-and-rowspan-model.ts#L43)

___

### init

▸ **init**(): `void`

#### Returns

`void`

#### Defined in

[lib/table/data/tablemodel/areamodel/col-and-rowspan-model.ts:15](https://github.com/guiexperttable/ge-table/blob/7d8ffe2/libs/table/src/lib/table/data/tablemodel/areamodel/col-and-rowspan-model.ts#L15)

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

[lib/table/data/tablemodel/areamodel/col-and-rowspan-model.ts:50](https://github.com/guiexperttable/ge-table/blob/7d8ffe2/libs/table/src/lib/table/data/tablemodel/areamodel/col-and-rowspan-model.ts#L50)
