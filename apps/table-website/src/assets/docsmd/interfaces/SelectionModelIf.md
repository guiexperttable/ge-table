[@guiexpert/table](../README.md) / [Exports](../modules.md) / SelectionModelIf

# Interface: SelectionModelIf

## Implemented by

- [`SelectionModel`](../classes/SelectionModel.md)

## Table of contents

### Methods

- [addSelection](SelectionModelIf.md#addselection)
- [clear](SelectionModelIf.md#clear)
- [getRanges](SelectionModelIf.md#getranges)
- [getSelectionCount](SelectionModelIf.md#getselectioncount)
- [hasSelection](SelectionModelIf.md#hasselection)
- [removeSelection](SelectionModelIf.md#removeselection)
- [selectAll](SelectionModelIf.md#selectall)
- [togglePoint](SelectionModelIf.md#togglepoint)

## Methods

### addSelection

▸ **addSelection**(`range`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `range` | [`CellRange`](../classes/CellRange.md) |

#### Returns

`void`

#### Defined in

[lib/table/selection/selection-model.if.ts:13](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/selection/selection-model.if.ts#L13)

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Defined in

[lib/table/selection/selection-model.if.ts:9](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/selection/selection-model.if.ts#L9)

___

### getRanges

▸ **getRanges**(): [`CellRange`](../classes/CellRange.md)[]

#### Returns

[`CellRange`](../classes/CellRange.md)[]

#### Defined in

[lib/table/selection/selection-model.if.ts:7](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/selection/selection-model.if.ts#L7)

___

### getSelectionCount

▸ **getSelectionCount**(`rowIndex`, `columnIndex`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rowIndex` | `number` |
| `columnIndex` | `number` |

#### Returns

`number`

#### Defined in

[lib/table/selection/selection-model.if.ts:17](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/selection/selection-model.if.ts#L17)

___

### hasSelection

▸ **hasSelection**(): `boolean`

#### Returns

`boolean`

#### Defined in

[lib/table/selection/selection-model.if.ts:11](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/selection/selection-model.if.ts#L11)

___

### removeSelection

▸ **removeSelection**(`range`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `range` | [`CellRange`](../classes/CellRange.md) |

#### Returns

`void`

#### Defined in

[lib/table/selection/selection-model.if.ts:15](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/selection/selection-model.if.ts#L15)

___

### selectAll

▸ **selectAll**(): `void`

#### Returns

`void`

#### Defined in

[lib/table/selection/selection-model.if.ts:19](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/selection/selection-model.if.ts#L19)

___

### togglePoint

▸ **togglePoint**(`row`, `col`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `row` | `number` |
| `col` | `number` |

#### Returns

`void`

#### Defined in

[lib/table/selection/selection-model.if.ts:5](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/selection/selection-model.if.ts#L5)
