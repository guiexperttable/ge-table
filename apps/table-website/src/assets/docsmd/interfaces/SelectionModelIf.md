[@guiexpert/table](../README.md) / [Exports](../modules.md) / SelectionModelIf

# Interface: SelectionModelIf

## Implemented by

- [`SelectionModel`](../classes/SelectionModel.md)

## Table of contents

### Methods

- [addEventSelectionChangedListener](SelectionModelIf.md#addeventselectionchangedlistener)
- [addSelection](SelectionModelIf.md#addselection)
- [clear](SelectionModelIf.md#clear)
- [firstClick](SelectionModelIf.md#firstclick)
- [getEventSelectionChangedListeners](SelectionModelIf.md#geteventselectionchangedlisteners)
- [getMergedRowIndices](SelectionModelIf.md#getmergedrowindices)
- [getRanges](SelectionModelIf.md#getranges)
- [getSelectionCount](SelectionModelIf.md#getselectioncount)
- [hasNoSelection](SelectionModelIf.md#hasnoselection)
- [hasSelection](SelectionModelIf.md#hasselection)
- [isAllSelected](SelectionModelIf.md#isallselected)
- [isSelected](SelectionModelIf.md#isselected)
- [removeEventSelectionChangedListener](SelectionModelIf.md#removeeventselectionchangedlistener)
- [removeSelection](SelectionModelIf.md#removeselection)
- [selectAll](SelectionModelIf.md#selectall)
- [togglePoint](SelectionModelIf.md#togglepoint)

## Methods

### addEventSelectionChangedListener

▸ **addEventSelectionChangedListener**(`listener`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | [`EventSelectionChangedListenerIf`](EventSelectionChangedListenerIf.md) |

#### Returns

`void`

#### Defined in

[lib/table/selection/selection-model.if.ts:7](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/selection/selection-model.if.ts#L7)

___

### addSelection

▸ **addSelection**(`range`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `range` | [`CellRange`](../classes/CellRange.md) |

#### Returns

`void`

#### Defined in

[lib/table/selection/selection-model.if.ts:45](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/selection/selection-model.if.ts#L45)

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Defined in

[lib/table/selection/selection-model.if.ts:39](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/selection/selection-model.if.ts#L39)

___

### firstClick

▸ **firstClick**(`rowIndex`, `columnIndex`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rowIndex` | `number` |
| `columnIndex` | `number` |

#### Returns

`void`

#### Defined in

[lib/table/selection/selection-model.if.ts:55](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/selection/selection-model.if.ts#L55)

___

### getEventSelectionChangedListeners

▸ **getEventSelectionChangedListeners**(): [`EventSelectionChangedListenerIf`](EventSelectionChangedListenerIf.md)[]

#### Returns

[`EventSelectionChangedListenerIf`](EventSelectionChangedListenerIf.md)[]

#### Defined in

[lib/table/selection/selection-model.if.ts:6](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/selection/selection-model.if.ts#L6)

___

### getMergedRowIndices

▸ **getMergedRowIndices**(): `number`[]

#### Returns

`number`[]

#### Defined in

[lib/table/selection/selection-model.if.ts:37](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/selection/selection-model.if.ts#L37)

___

### getRanges

▸ **getRanges**(): [`CellRange`](../classes/CellRange.md)[]

Returns an array of CellRange objects representing the selections.

#### Returns

[`CellRange`](../classes/CellRange.md)[]

Array of CellRange objects representing the ranges.

#### Defined in

[lib/table/selection/selection-model.if.ts:35](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/selection/selection-model.if.ts#L35)

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

[lib/table/selection/selection-model.if.ts:49](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/selection/selection-model.if.ts#L49)

___

### hasNoSelection

▸ **hasNoSelection**(): `boolean`

#### Returns

`boolean`

#### Defined in

[lib/table/selection/selection-model.if.ts:43](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/selection/selection-model.if.ts#L43)

___

### hasSelection

▸ **hasSelection**(): `boolean`

#### Returns

`boolean`

#### Defined in

[lib/table/selection/selection-model.if.ts:41](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/selection/selection-model.if.ts#L41)

___

### isAllSelected

▸ **isAllSelected**(): `boolean`

#### Returns

`boolean`

#### Defined in

[lib/table/selection/selection-model.if.ts:53](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/selection/selection-model.if.ts#L53)

___

### isSelected

▸ **isSelected**(`row`, `col`): `boolean`

Checks if a specific cell in a grid is selected.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `row` | `number` | The row index of the cell to check. |
| `col` | `number` | The column index of the cell to check. |

#### Returns

`boolean`

- Returns true if the cell is selected, otherwise false.

#### Defined in

[lib/table/selection/selection-model.if.ts:28](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/selection/selection-model.if.ts#L28)

___

### removeEventSelectionChangedListener

▸ **removeEventSelectionChangedListener**(`listener`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | [`EventSelectionChangedListenerIf`](EventSelectionChangedListenerIf.md) |

#### Returns

`void`

#### Defined in

[lib/table/selection/selection-model.if.ts:8](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/selection/selection-model.if.ts#L8)

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

[lib/table/selection/selection-model.if.ts:47](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/selection/selection-model.if.ts#L47)

___

### selectAll

▸ **selectAll**(): `void`

#### Returns

`void`

#### Defined in

[lib/table/selection/selection-model.if.ts:51](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/selection/selection-model.if.ts#L51)

___

### togglePoint

▸ **togglePoint**(`row`, `col`): `void`

Toggles the selection state of a point at the specified row and column in a grid.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `row` | `number` | The row index of the point to toggle. |
| `col` | `number` | The column index of the point to toggle. |

#### Returns

`void`

#### Defined in

[lib/table/selection/selection-model.if.ts:19](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/selection/selection-model.if.ts#L19)
