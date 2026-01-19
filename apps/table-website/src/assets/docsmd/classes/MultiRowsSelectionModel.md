[@guiexpert/table](../README.md) / [Exports](../modules.md) / MultiRowsSelectionModel

# Class: MultiRowsSelectionModel\<T\>

Class representing a multi-row selection model.

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`SelectionModel`](SelectionModel.md)

  ↳ **`MultiRowsSelectionModel`**

## Table of contents

### Constructors

- [constructor](MultiRowsSelectionModel.md#constructor)

### Properties

- [allSelected](MultiRowsSelectionModel.md#allselected)
- [model](MultiRowsSelectionModel.md#model)
- [negativeRanges](MultiRowsSelectionModel.md#negativeranges)
- [ranges](MultiRowsSelectionModel.md#ranges)
- [selectionMode](MultiRowsSelectionModel.md#selectionmode)
- [selectionType](MultiRowsSelectionModel.md#selectiontype)
- [silent](MultiRowsSelectionModel.md#silent)

### Methods

- [addEventSelectionChangedListener](MultiRowsSelectionModel.md#addeventselectionchangedlistener)
- [addRange](MultiRowsSelectionModel.md#addrange)
- [addSelection](MultiRowsSelectionModel.md#addselection)
- [clear](MultiRowsSelectionModel.md#clear)
- [fireChangeEvent](MultiRowsSelectionModel.md#firechangeevent)
- [firstClick](MultiRowsSelectionModel.md#firstclick)
- [getEventSelectionChangedListeners](MultiRowsSelectionModel.md#geteventselectionchangedlisteners)
- [getMergedRowIndices](MultiRowsSelectionModel.md#getmergedrowindices)
- [getRanges](MultiRowsSelectionModel.md#getranges)
- [getSelectedRowItems](MultiRowsSelectionModel.md#getselectedrowitems)
- [getSelectionCount](MultiRowsSelectionModel.md#getselectioncount)
- [hasNoSelection](MultiRowsSelectionModel.md#hasnoselection)
- [hasSelection](MultiRowsSelectionModel.md#hasselection)
- [isAllSelected](MultiRowsSelectionModel.md#isallselected)
- [isInNegativeRange](MultiRowsSelectionModel.md#isinnegativerange)
- [isSelected](MultiRowsSelectionModel.md#isselected)
- [removeEventSelectionChangedListener](MultiRowsSelectionModel.md#removeeventselectionchangedlistener)
- [removeSelection](MultiRowsSelectionModel.md#removeselection)
- [selectAll](MultiRowsSelectionModel.md#selectall)
- [selectRow](MultiRowsSelectionModel.md#selectrow)
- [toggleFilteredRowsSelection](MultiRowsSelectionModel.md#togglefilteredrowsselection)
- [togglePoint](MultiRowsSelectionModel.md#togglepoint)
- [toggleRow](MultiRowsSelectionModel.md#togglerow)
- [toggleSelection](MultiRowsSelectionModel.md#toggleselection)
- [unselectRow](MultiRowsSelectionModel.md#unselectrow)

## Constructors

### constructor

• **new MultiRowsSelectionModel**\<`T`\>(`model`): [`MultiRowsSelectionModel`](MultiRowsSelectionModel.md)\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `model` | [`ObjectArrayHolderIf`](../interfaces/ObjectArrayHolderIf.md)\<`T`\> |

#### Returns

[`MultiRowsSelectionModel`](MultiRowsSelectionModel.md)\<`T`\>

#### Overrides

[SelectionModel](SelectionModel.md).[constructor](SelectionModel.md#constructor)

#### Defined in

[lib/table/selection/multi-rows-selection-model.ts:12](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/selection/multi-rows-selection-model.ts#L12)

## Properties

### allSelected

• `Protected` **allSelected**: `boolean` = `false`

This is a flag to indicate whether all cells in the grid are selected or not.

#### Inherited from

[SelectionModel](SelectionModel.md).[allSelected](SelectionModel.md#allselected)

#### Defined in

[lib/table/selection/selection-model.ts:48](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/selection/selection-model.ts#L48)

___

### model

• **model**: [`ObjectArrayHolderIf`](../interfaces/ObjectArrayHolderIf.md)\<`T`\>

#### Defined in

[lib/table/selection/multi-rows-selection-model.ts:13](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/selection/multi-rows-selection-model.ts#L13)

___

### negativeRanges

• `Protected` **negativeRanges**: [`CellRange`](CellRange.md)[] = `[]`

This contains all the current negative cell ranges in the grid.

#### Inherited from

[SelectionModel](SelectionModel.md).[negativeRanges](SelectionModel.md#negativeranges)

#### Defined in

[lib/table/selection/selection-model.ts:47](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/selection/selection-model.ts#L47)

___

### ranges

• `Protected` **ranges**: [`CellRange`](CellRange.md)[] = `[]`

This contains all the current selected cell ranges in the grid.

#### Inherited from

[SelectionModel](SelectionModel.md).[ranges](SelectionModel.md#ranges)

#### Defined in

[lib/table/selection/selection-model.ts:46](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/selection/selection-model.ts#L46)

___

### selectionMode

• **selectionMode**: [`SelectionMode`](../modules.md#selectionmode) = `"single"`

The mode of selection being used. It's of type SelectionMode. Default: "single"

#### Inherited from

[SelectionModel](SelectionModel.md).[selectionMode](SelectionModel.md#selectionmode)

#### Defined in

[lib/table/selection/selection-model.ts:56](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/selection/selection-model.ts#L56)

___

### selectionType

• **selectionType**: [`ExtendedSelectionType`](../modules.md#extendedselectiontype) = `"none"`

The type of selection being used. It's of type ExtendedSelectionType. Default: "none"

#### Inherited from

[SelectionModel](SelectionModel.md).[selectionType](SelectionModel.md#selectiontype)

#### Defined in

[lib/table/selection/selection-model.ts:55](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/selection/selection-model.ts#L55)

___

### silent

• `Protected` **silent**: `boolean` = `false`

This is a flag to suppress the firing of selection change events.

#### Inherited from

[SelectionModel](SelectionModel.md).[silent](SelectionModel.md#silent)

#### Defined in

[lib/table/selection/selection-model.ts:50](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/selection/selection-model.ts#L50)

## Methods

### addEventSelectionChangedListener

▸ **addEventSelectionChangedListener**(`listener`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | [`EventSelectionChangedListenerIf`](../interfaces/EventSelectionChangedListenerIf.md) |

#### Returns

`void`

#### Inherited from

[SelectionModel](SelectionModel.md).[addEventSelectionChangedListener](SelectionModel.md#addeventselectionchangedlistener)

#### Defined in

[lib/table/selection/selection-model.ts:64](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/selection/selection-model.ts#L64)

___

### addRange

▸ **addRange**(`range`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `range` | [`CellRange`](CellRange.md) |

#### Returns

`void`

#### Inherited from

[SelectionModel](SelectionModel.md).[addRange](SelectionModel.md#addrange)

#### Defined in

[lib/table/selection/selection-model.ts:194](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/selection/selection-model.ts#L194)

___

### addSelection

▸ **addSelection**(`range`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `range` | [`CellRange`](CellRange.md) |

#### Returns

`void`

#### Inherited from

[SelectionModel](SelectionModel.md).[addSelection](SelectionModel.md#addselection)

#### Defined in

[lib/table/selection/selection-model.ts:162](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/selection/selection-model.ts#L162)

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Inherited from

[SelectionModel](SelectionModel.md).[clear](SelectionModel.md#clear)

#### Defined in

[lib/table/selection/selection-model.ts:121](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/selection/selection-model.ts#L121)

___

### fireChangeEvent

▸ **fireChangeEvent**(): `void`

#### Returns

`void`

#### Inherited from

[SelectionModel](SelectionModel.md).[fireChangeEvent](SelectionModel.md#firechangeevent)

#### Defined in

[lib/table/selection/selection-model.ts:78](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/selection/selection-model.ts#L78)

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

#### Inherited from

[SelectionModel](SelectionModel.md).[firstClick](SelectionModel.md#firstclick)

#### Defined in

[lib/table/selection/selection-model.ts:84](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/selection/selection-model.ts#L84)

___

### getEventSelectionChangedListeners

▸ **getEventSelectionChangedListeners**(): [`EventSelectionChangedListenerIf`](../interfaces/EventSelectionChangedListenerIf.md)[]

#### Returns

[`EventSelectionChangedListenerIf`](../interfaces/EventSelectionChangedListenerIf.md)[]

#### Inherited from

[SelectionModel](SelectionModel.md).[getEventSelectionChangedListeners](SelectionModel.md#geteventselectionchangedlisteners)

#### Defined in

[lib/table/selection/selection-model.ts:60](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/selection/selection-model.ts#L60)

___

### getMergedRowIndices

▸ **getMergedRowIndices**(): `number`[]

Retrieves the merged row indices from the given range selection.

#### Returns

`number`[]

Array of merged row indices

#### Inherited from

[SelectionModel](SelectionModel.md).[getMergedRowIndices](SelectionModel.md#getmergedrowindices)

#### Defined in

[lib/table/selection/selection-model.ts:141](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/selection/selection-model.ts#L141)

___

### getRanges

▸ **getRanges**(): [`CellRange`](CellRange.md)[]

Returns an array of CellRange objects representing the selections.

#### Returns

[`CellRange`](CellRange.md)[]

Array of CellRange objects representing the ranges.

#### Inherited from

[SelectionModel](SelectionModel.md).[getRanges](SelectionModel.md#getranges)

#### Defined in

[lib/table/selection/selection-model.ts:117](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/selection/selection-model.ts#L117)

___

### getSelectedRowItems

▸ **getSelectedRowItems**(`allrows`): `T`[]

Retrieves the selected rows from an array of all table rows.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `allrows` | `T`[] | The array of all rows from the table model. |

#### Returns

`T`[]

- The selected rows from the given array.

#### Defined in

[lib/table/selection/multi-rows-selection-model.ts:24](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/selection/multi-rows-selection-model.ts#L24)

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

#### Inherited from

[SelectionModel](SelectionModel.md).[getSelectionCount](SelectionModel.md#getselectioncount)

#### Defined in

[lib/table/selection/selection-model.ts:92](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/selection/selection-model.ts#L92)

___

### hasNoSelection

▸ **hasNoSelection**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[SelectionModel](SelectionModel.md).[hasNoSelection](SelectionModel.md#hasnoselection)

#### Defined in

[lib/table/selection/selection-model.ts:132](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/selection/selection-model.ts#L132)

___

### hasSelection

▸ **hasSelection**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[SelectionModel](SelectionModel.md).[hasSelection](SelectionModel.md#hasselection)

#### Defined in

[lib/table/selection/selection-model.ts:128](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/selection/selection-model.ts#L128)

___

### isAllSelected

▸ **isAllSelected**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[SelectionModel](SelectionModel.md).[isAllSelected](SelectionModel.md#isallselected)

#### Defined in

[lib/table/selection/selection-model.ts:158](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/selection/selection-model.ts#L158)

___

### isInNegativeRange

▸ **isInNegativeRange**(`rowIndex`, `columnIndex`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rowIndex` | `number` |
| `columnIndex` | `number` |

#### Returns

`boolean`

#### Inherited from

[SelectionModel](SelectionModel.md).[isInNegativeRange](SelectionModel.md#isinnegativerange)

#### Defined in

[lib/table/selection/selection-model.ts:108](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/selection/selection-model.ts#L108)

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

#### Inherited from

[SelectionModel](SelectionModel.md).[isSelected](SelectionModel.md#isselected)

#### Defined in

[lib/table/selection/selection-model.ts:189](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/selection/selection-model.ts#L189)

___

### removeEventSelectionChangedListener

▸ **removeEventSelectionChangedListener**(`listener`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | [`EventSelectionChangedListenerIf`](../interfaces/EventSelectionChangedListenerIf.md) |

#### Returns

`void`

#### Inherited from

[SelectionModel](SelectionModel.md).[removeEventSelectionChangedListener](SelectionModel.md#removeeventselectionchangedlistener)

#### Defined in

[lib/table/selection/selection-model.ts:70](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/selection/selection-model.ts#L70)

___

### removeSelection

▸ **removeSelection**(`range`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `range` | [`CellRange`](CellRange.md) |

#### Returns

`void`

#### Inherited from

[SelectionModel](SelectionModel.md).[removeSelection](SelectionModel.md#removeselection)

#### Defined in

[lib/table/selection/selection-model.ts:167](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/selection/selection-model.ts#L167)

___

### selectAll

▸ **selectAll**(): `void`

#### Returns

`void`

#### Inherited from

[SelectionModel](SelectionModel.md).[selectAll](SelectionModel.md#selectall)

#### Defined in

[lib/table/selection/selection-model.ts:153](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/selection/selection-model.ts#L153)

___

### selectRow

▸ **selectRow**(`rowIndex`): `void`

Selects the specified row.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rowIndex` | `number` | The index of the row to be selected. |

#### Returns

`void`

#### Defined in

[lib/table/selection/multi-rows-selection-model.ts:37](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/selection/multi-rows-selection-model.ts#L37)

___

### toggleFilteredRowsSelection

▸ **toggleFilteredRowsSelection**(): `void`

Toggles the selection of filtered rows.
If all rows are currently selected, clears the selection.
If no rows are currently selected, selects all filtered rows.
Otherwise, toggles the selection of all filtered rows.

#### Returns

`void`

#### Defined in

[lib/table/selection/multi-rows-selection-model.ts:80](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/selection/multi-rows-selection-model.ts#L80)

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

#### Inherited from

[SelectionModel](SelectionModel.md).[togglePoint](SelectionModel.md#togglepoint)

#### Defined in

[lib/table/selection/selection-model.ts:181](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/selection/selection-model.ts#L181)

___

### toggleRow

▸ **toggleRow**(`rowIndex`): `void`

Toggles the selection state of a row.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rowIndex` | `number` | The index of the row to toggle. |

#### Returns

`void`

#### Defined in

[lib/table/selection/multi-rows-selection-model.ts:111](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/selection/multi-rows-selection-model.ts#L111)

___

### toggleSelection

▸ **toggleSelection**(): `void`

Toggles the selection of items based on current selection state.

#### Returns

`void`

#### Defined in

[lib/table/selection/multi-rows-selection-model.ts:54](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/selection/multi-rows-selection-model.ts#L54)

___

### unselectRow

▸ **unselectRow**(`rowIndex`): `void`

Unselects the specified row.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rowIndex` | `number` | The index of the row to be unselected. |

#### Returns

`void`

#### Defined in

[lib/table/selection/multi-rows-selection-model.ts:47](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/selection/multi-rows-selection-model.ts#L47)
