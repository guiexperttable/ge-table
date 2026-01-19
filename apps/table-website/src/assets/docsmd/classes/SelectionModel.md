[@guiexpert/table](../README.md) / [Exports](../modules.md) / SelectionModel

# Class: SelectionModel

`SelectionModel` is a class that manages the various modes and types of selections within a grid.
It supports basic modes like single cell, row, column, and range selections, as well as advanced mode like negative ranges.
Events related to selections, such as changes to a selection, are propagated to listeners through the EventSelectionChangedListener interface.

The class extends `SelectionModelIf` interface and defines additional methods and fields specific to its functionality.

**`Method`**

constructor(selectionType?: ExtendedSelectionType, selectionMode?: SelectionMode) - Constructs a new instance of the SelectionModel class.

**`Method`**

getEventSelectionChangedListeners(): EventSelectionChangedListenerIf[] - Returns the array of registered event selection changed listeners.

**`Method`**

addEventSelectionChangedListener(listener: EventSelectionChangedListenerIf): void - Adds an event selection changed listener to the array.

**`Method`**

removeEventSelectionChangedListener(listener: EventSelectionChangedListenerIf): void - Removes a specific event selection changed listener if it exists.

**`Method`**

fireChangeEvent(): void - Fires a change event on each registered listener when a selection change occurs. Does nothing if the silent property is true.

**`Method`**

firstClick(rowIndex: number, columnIndex: number): void - Initiates a selection operation at the specified coordinates. The nature of the operation is determined by the current selection type and mode.

**`Method`**

getSelectionCount(rowIndex: number, columnIndex: number): number - Returns the selection count of current ranges

**`Method`**

isInNegativeRange(rowIndex: number, columnIndex: number): boolean - Verifies if any point (cell) is in negative range or not.

**`Method`**

getRanges() - Returns the selection ranges

**`Method`**

clear(): void - Clears all selections in all ranges and resets allSelected and negativeRanges arrays.

**`Method`**

hasSelection(): boolean - Checks whether there is any selection. Returns true if yes, false if no.

**`Method`**

hasNoSelection(): boolean - Checks whether there is no selection. Returns true if yes, false if no.

**`Method`**

getMergedRowIndices(): number[] - Gets the array of merged row indices.

**`Method`**

selectAll(): void - Selects all selectable entities.

**`Method`**

isAllSelected() - Checks if all selectable entities are selected.

**`Method`**

addSelection(range: CellRange): void - Adds a certain range to the selection.

**`Method`**

removeSelection(range: CellRange): void - Removes a certain range from the selection.

**`Method`**

togglePoint(row: number, col: number): void - Toggles the selection state of a point at the specified row and column in a grid.

**`Method`**

isSelected(row: number, col: number): boolean - Checks if a specific cell in a grid is selected.

**`Method`**

addRange(range: CellRange): void - Adds a range of cells to the selection.

## Hierarchy

- **`SelectionModel`**

  ↳ [`MultiRowsSelectionModel`](MultiRowsSelectionModel.md)

## Implements

- [`SelectionModelIf`](../interfaces/SelectionModelIf.md)

## Table of contents

### Constructors

- [constructor](SelectionModel.md#constructor)

### Properties

- [allSelected](SelectionModel.md#allselected)
- [listenerArr](SelectionModel.md#listenerarr)
- [negativeRanges](SelectionModel.md#negativeranges)
- [ranges](SelectionModel.md#ranges)
- [selectionMode](SelectionModel.md#selectionmode)
- [selectionType](SelectionModel.md#selectiontype)
- [silent](SelectionModel.md#silent)

### Methods

- [addEventSelectionChangedListener](SelectionModel.md#addeventselectionchangedlistener)
- [addRange](SelectionModel.md#addrange)
- [addSelection](SelectionModel.md#addselection)
- [clear](SelectionModel.md#clear)
- [fireChangeEvent](SelectionModel.md#firechangeevent)
- [firstClick](SelectionModel.md#firstclick)
- [getEventSelectionChangedListeners](SelectionModel.md#geteventselectionchangedlisteners)
- [getMergedRowIndices](SelectionModel.md#getmergedrowindices)
- [getRanges](SelectionModel.md#getranges)
- [getSelectionCount](SelectionModel.md#getselectioncount)
- [hasNoSelection](SelectionModel.md#hasnoselection)
- [hasSelection](SelectionModel.md#hasselection)
- [isAllSelected](SelectionModel.md#isallselected)
- [isInNegativeRange](SelectionModel.md#isinnegativerange)
- [isSelected](SelectionModel.md#isselected)
- [removeEventSelectionChangedListener](SelectionModel.md#removeeventselectionchangedlistener)
- [removeSelection](SelectionModel.md#removeselection)
- [selectAll](SelectionModel.md#selectall)
- [togglePoint](SelectionModel.md#togglepoint)

## Constructors

### constructor

• **new SelectionModel**(`selectionType?`, `selectionMode?`): [`SelectionModel`](SelectionModel.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `selectionType` | [`ExtendedSelectionType`](../modules.md#extendedselectiontype) | `"none"` |
| `selectionMode` | [`SelectionMode`](../modules.md#selectionmode) | `"single"` |

#### Returns

[`SelectionModel`](SelectionModel.md)

#### Defined in

[lib/table/selection/selection-model.ts:54](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/selection/selection-model.ts#L54)

## Properties

### allSelected

• `Protected` **allSelected**: `boolean` = `false`

This is a flag to indicate whether all cells in the grid are selected or not.

#### Defined in

[lib/table/selection/selection-model.ts:48](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/selection/selection-model.ts#L48)

___

### listenerArr

• `Private` **listenerArr**: [`EventSelectionChangedListenerIf`](../interfaces/EventSelectionChangedListenerIf.md)[] = `[]`

This contains all the listeners for selection change events.

#### Defined in

[lib/table/selection/selection-model.ts:52](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/selection/selection-model.ts#L52)

___

### negativeRanges

• `Protected` **negativeRanges**: [`CellRange`](CellRange.md)[] = `[]`

This contains all the current negative cell ranges in the grid.

#### Defined in

[lib/table/selection/selection-model.ts:47](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/selection/selection-model.ts#L47)

___

### ranges

• `Protected` **ranges**: [`CellRange`](CellRange.md)[] = `[]`

This contains all the current selected cell ranges in the grid.

#### Defined in

[lib/table/selection/selection-model.ts:46](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/selection/selection-model.ts#L46)

___

### selectionMode

• **selectionMode**: [`SelectionMode`](../modules.md#selectionmode) = `"single"`

The mode of selection being used. It's of type SelectionMode. Default: "single"

#### Defined in

[lib/table/selection/selection-model.ts:56](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/selection/selection-model.ts#L56)

___

### selectionType

• **selectionType**: [`ExtendedSelectionType`](../modules.md#extendedselectiontype) = `"none"`

The type of selection being used. It's of type ExtendedSelectionType. Default: "none"

#### Defined in

[lib/table/selection/selection-model.ts:55](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/selection/selection-model.ts#L55)

___

### silent

• `Protected` **silent**: `boolean` = `false`

This is a flag to suppress the firing of selection change events.

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

#### Implementation of

[SelectionModelIf](../interfaces/SelectionModelIf.md).[addEventSelectionChangedListener](../interfaces/SelectionModelIf.md#addeventselectionchangedlistener)

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

#### Implementation of

[SelectionModelIf](../interfaces/SelectionModelIf.md).[addSelection](../interfaces/SelectionModelIf.md#addselection)

#### Defined in

[lib/table/selection/selection-model.ts:162](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/selection/selection-model.ts#L162)

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Implementation of

[SelectionModelIf](../interfaces/SelectionModelIf.md).[clear](../interfaces/SelectionModelIf.md#clear)

#### Defined in

[lib/table/selection/selection-model.ts:121](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/selection/selection-model.ts#L121)

___

### fireChangeEvent

▸ **fireChangeEvent**(): `void`

#### Returns

`void`

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

#### Implementation of

[SelectionModelIf](../interfaces/SelectionModelIf.md).[firstClick](../interfaces/SelectionModelIf.md#firstclick)

#### Defined in

[lib/table/selection/selection-model.ts:84](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/selection/selection-model.ts#L84)

___

### getEventSelectionChangedListeners

▸ **getEventSelectionChangedListeners**(): [`EventSelectionChangedListenerIf`](../interfaces/EventSelectionChangedListenerIf.md)[]

#### Returns

[`EventSelectionChangedListenerIf`](../interfaces/EventSelectionChangedListenerIf.md)[]

#### Implementation of

[SelectionModelIf](../interfaces/SelectionModelIf.md).[getEventSelectionChangedListeners](../interfaces/SelectionModelIf.md#geteventselectionchangedlisteners)

#### Defined in

[lib/table/selection/selection-model.ts:60](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/selection/selection-model.ts#L60)

___

### getMergedRowIndices

▸ **getMergedRowIndices**(): `number`[]

Retrieves the merged row indices from the given range selection.

#### Returns

`number`[]

Array of merged row indices

#### Implementation of

[SelectionModelIf](../interfaces/SelectionModelIf.md).[getMergedRowIndices](../interfaces/SelectionModelIf.md#getmergedrowindices)

#### Defined in

[lib/table/selection/selection-model.ts:141](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/selection/selection-model.ts#L141)

___

### getRanges

▸ **getRanges**(): [`CellRange`](CellRange.md)[]

Returns an array of CellRange objects representing the selections.

#### Returns

[`CellRange`](CellRange.md)[]

Array of CellRange objects representing the ranges.

#### Implementation of

[SelectionModelIf](../interfaces/SelectionModelIf.md).[getRanges](../interfaces/SelectionModelIf.md#getranges)

#### Defined in

[lib/table/selection/selection-model.ts:117](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/selection/selection-model.ts#L117)

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

#### Implementation of

[SelectionModelIf](../interfaces/SelectionModelIf.md).[getSelectionCount](../interfaces/SelectionModelIf.md#getselectioncount)

#### Defined in

[lib/table/selection/selection-model.ts:92](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/selection/selection-model.ts#L92)

___

### hasNoSelection

▸ **hasNoSelection**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[SelectionModelIf](../interfaces/SelectionModelIf.md).[hasNoSelection](../interfaces/SelectionModelIf.md#hasnoselection)

#### Defined in

[lib/table/selection/selection-model.ts:132](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/selection/selection-model.ts#L132)

___

### hasSelection

▸ **hasSelection**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[SelectionModelIf](../interfaces/SelectionModelIf.md).[hasSelection](../interfaces/SelectionModelIf.md#hasselection)

#### Defined in

[lib/table/selection/selection-model.ts:128](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/selection/selection-model.ts#L128)

___

### isAllSelected

▸ **isAllSelected**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[SelectionModelIf](../interfaces/SelectionModelIf.md).[isAllSelected](../interfaces/SelectionModelIf.md#isallselected)

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

#### Implementation of

[SelectionModelIf](../interfaces/SelectionModelIf.md).[isSelected](../interfaces/SelectionModelIf.md#isselected)

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

#### Implementation of

[SelectionModelIf](../interfaces/SelectionModelIf.md).[removeEventSelectionChangedListener](../interfaces/SelectionModelIf.md#removeeventselectionchangedlistener)

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

#### Implementation of

[SelectionModelIf](../interfaces/SelectionModelIf.md).[removeSelection](../interfaces/SelectionModelIf.md#removeselection)

#### Defined in

[lib/table/selection/selection-model.ts:167](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/selection/selection-model.ts#L167)

___

### selectAll

▸ **selectAll**(): `void`

#### Returns

`void`

#### Implementation of

[SelectionModelIf](../interfaces/SelectionModelIf.md).[selectAll](../interfaces/SelectionModelIf.md#selectall)

#### Defined in

[lib/table/selection/selection-model.ts:153](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/selection/selection-model.ts#L153)

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

#### Implementation of

[SelectionModelIf](../interfaces/SelectionModelIf.md).[togglePoint](../interfaces/SelectionModelIf.md#togglepoint)

#### Defined in

[lib/table/selection/selection-model.ts:181](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/selection/selection-model.ts#L181)
