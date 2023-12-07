[@guiexpert/table](../README.md) / [Exports](../modules.md) / AreaModel

# Class: AreaModel

Represents the area model (header, boder or footer) for the table.

## Implements

- [`AreaModelIf`](../interfaces/AreaModelIf.md)

## Table of contents

### Constructors

- [constructor](AreaModel.md#constructor)

### Properties

- [areaIdent](AreaModel.md#areaident)
- [rowSelectionModel](AreaModel.md#rowselectionmodel)

### Methods

- [changeColumnOrder](AreaModel.md#changecolumnorder)
- [doSort](AreaModel.md#dosort)
- [externalFilterChanged](AreaModel.md#externalfilterchanged)
- [getCellRenderer](AreaModel.md#getcellrenderer)
- [getColspanAt](AreaModel.md#getcolspanat)
- [getCustomClassesAt](AreaModel.md#getcustomclassesat)
- [getCustomStyleAt](AreaModel.md#getcustomstyleat)
- [getMaxColspan](AreaModel.md#getmaxcolspan)
- [getMaxRowspan](AreaModel.md#getmaxrowspan)
- [getRowByIndex](AreaModel.md#getrowbyindex)
- [getRowCount](AreaModel.md#getrowcount)
- [getRowHeight](AreaModel.md#getrowheight)
- [getRowspanAt](AreaModel.md#getrowspanat)
- [getTooltipAt](AreaModel.md#gettooltipat)
- [getValueAt](AreaModel.md#getvalueat)
- [getYPosByRowIndex](AreaModel.md#getyposbyrowindex)
- [init](AreaModel.md#init)
- [isEditable](AreaModel.md#iseditable)
- [isFilterable](AreaModel.md#isfilterable)
- [isRowCheckable](AreaModel.md#isrowcheckable)
- [isRowChecked](AreaModel.md#isrowchecked)
- [isSelectable](AreaModel.md#isselectable)
- [setRowChecked](AreaModel.md#setrowchecked)
- [setValue](AreaModel.md#setvalue)

## Constructors

### constructor

• **new AreaModel**(): [`AreaModel`](AreaModel.md)

#### Returns

[`AreaModel`](AreaModel.md)

## Properties

### areaIdent

• **areaIdent**: [`AreaIdent`](../modules.md#areaident) = `"body"`

The identifier for one of the areas: header, body, footer.

#### Implementation of

[AreaModelIf](../interfaces/AreaModelIf.md).[areaIdent](../interfaces/AreaModelIf.md#areaident)

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model.ts:15](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/data/tablemodel/areamodel/area-model.ts#L15)

___

### rowSelectionModel

• **rowSelectionModel**: `undefined` \| [`CheckboxModelIf`](../interfaces/CheckboxModelIf.md)\<`any`\> = `undefined`

A model and controller for a row checkbox selection

#### Implementation of

[AreaModelIf](../interfaces/AreaModelIf.md).[rowSelectionModel](../interfaces/AreaModelIf.md#rowselectionmodel)

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model.ts:16](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/data/tablemodel/areamodel/area-model.ts#L16)

## Methods

### changeColumnOrder

▸ **changeColumnOrder**(`_sourceColumnIndex`, `_targetColumnIndex`): `void`

Method for moving a column from position sourceColumnIndex to targetColumnIndex.

#### Parameters

| Name | Type |
| :------ | :------ |
| `_sourceColumnIndex` | `number` |
| `_targetColumnIndex` | `number` |

#### Returns

`void`

#### Implementation of

[AreaModelIf](../interfaces/AreaModelIf.md).[changeColumnOrder](../interfaces/AreaModelIf.md#changecolumnorder)

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model.ts:18](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/data/tablemodel/areamodel/area-model.ts#L18)

___

### doSort

▸ **doSort**(`_sortItems`): `boolean`

If the 'restore sort' option is set (see), this method will be triggered automatically by the table,

#### Parameters

| Name | Type |
| :------ | :------ |
| `_sortItems` | [`SortItem`](SortItem.md)[] |

#### Returns

`boolean`

#### Implementation of

[AreaModelIf](../interfaces/AreaModelIf.md).[doSort](../interfaces/AreaModelIf.md#dosort)

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model.ts:22](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/data/tablemodel/areamodel/area-model.ts#L22)

___

### externalFilterChanged

▸ **externalFilterChanged**\<`T`\>(`_predictFn`): `void`

Will be called internally, when a filtering is trigger.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_predictFn` | [`FilterFunction`](../modules.md#filterfunction)\<`T`\> | Defines, what row are invisible or visible after filtering. |

#### Returns

`void`

#### Implementation of

[AreaModelIf](../interfaces/AreaModelIf.md).[externalFilterChanged](../interfaces/AreaModelIf.md#externalfilterchanged)

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model.ts:26](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/data/tablemodel/areamodel/area-model.ts#L26)

___

### getCellRenderer

▸ **getCellRenderer**(`_rowIndex`, `_columnIndex`): `undefined` \| [`CellRendererIf`](../interfaces/CellRendererIf.md)

Returns a cell renderer class for the given cell (rowIndex/columnIndex).
If the return value is undefined, no renderer is used and the model value will be rendered directly in the cell.

#### Parameters

| Name | Type |
| :------ | :------ |
| `_rowIndex` | `number` |
| `_columnIndex` | `number` |

#### Returns

`undefined` \| [`CellRendererIf`](../interfaces/CellRendererIf.md)

#### Implementation of

[AreaModelIf](../interfaces/AreaModelIf.md).[getCellRenderer](../interfaces/AreaModelIf.md#getcellrenderer)

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model.ts:30](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/data/tablemodel/areamodel/area-model.ts#L30)

___

### getColspanAt

▸ **getColspanAt**(`_rowIndex`, `_columnIndex`): `number`

Returns the value of a colspan of the cell at position rowIndex/columnIndex.
A value below 2 is ignored.

#### Parameters

| Name | Type |
| :------ | :------ |
| `_rowIndex` | `number` |
| `_columnIndex` | `number` |

#### Returns

`number`

#### Implementation of

[AreaModelIf](../interfaces/AreaModelIf.md).[getColspanAt](../interfaces/AreaModelIf.md#getcolspanat)

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model.ts:34](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/data/tablemodel/areamodel/area-model.ts#L34)

___

### getCustomClassesAt

▸ **getCustomClassesAt**(`_rowIndex`, `_columnIndex`): `string`[]

This method can be used to return a list of css classes for the given cell

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_rowIndex` | `number` | row index of the cell |
| `_columnIndex` | `number` | column index of the cell |

#### Returns

`string`[]

#### Implementation of

[AreaModelIf](../interfaces/AreaModelIf.md).[getCustomClassesAt](../interfaces/AreaModelIf.md#getcustomclassesat)

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model.ts:38](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/data/tablemodel/areamodel/area-model.ts#L38)

___

### getCustomStyleAt

▸ **getCustomStyleAt**(`_rowIndex`, `_columnIndex`): `undefined` \| \{ `[p: string]`: `string`;  }

This method can be used to return an object with css style information for the given cell

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_rowIndex` | `number` | row index of the cell |
| `_columnIndex` | `number` | column index of the cell |

#### Returns

`undefined` \| \{ `[p: string]`: `string`;  }

#### Implementation of

[AreaModelIf](../interfaces/AreaModelIf.md).[getCustomStyleAt](../interfaces/AreaModelIf.md#getcustomstyleat)

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model.ts:42](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/data/tablemodel/areamodel/area-model.ts#L42)

___

### getMaxColspan

▸ **getMaxColspan**(): `number`

This return value is internally used to optimize the render performance.
Set this value to the lowest possible value. If the model has no colspan,
a value of 0 would be good. The dafault is 32. If your model has a colspan
cell greater 32, don't forget to increase this value.

#### Returns

`number`

#### Implementation of

[AreaModelIf](../interfaces/AreaModelIf.md).[getMaxColspan](../interfaces/AreaModelIf.md#getmaxcolspan)

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model.ts:46](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/data/tablemodel/areamodel/area-model.ts#L46)

___

### getMaxRowspan

▸ **getMaxRowspan**(): `number`

This return value is internally used to optimize the render performance.
Set this value to the lowest possible value. If the model has no rowspan,
a value of 0 would be good. The default is 32. If your model has a rowspan
cell greater 32, don't forget to increase this value.

#### Returns

`number`

#### Implementation of

[AreaModelIf](../interfaces/AreaModelIf.md).[getMaxRowspan](../interfaces/AreaModelIf.md#getmaxrowspan)

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model.ts:50](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/data/tablemodel/areamodel/area-model.ts#L50)

___

### getRowByIndex

▸ **getRowByIndex**(`_rowIndex`): `any`

Returns the row of the model, which correspond to the rowIndex.

#### Parameters

| Name | Type |
| :------ | :------ |
| `_rowIndex` | `number` |

#### Returns

`any`

#### Implementation of

[AreaModelIf](../interfaces/AreaModelIf.md).[getRowByIndex](../interfaces/AreaModelIf.md#getrowbyindex)

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model.ts:54](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/data/tablemodel/areamodel/area-model.ts#L54)

___

### getRowCount

▸ **getRowCount**(): `number`

Returns the number of rows of the area

#### Returns

`number`

#### Implementation of

[AreaModelIf](../interfaces/AreaModelIf.md).[getRowCount](../interfaces/AreaModelIf.md#getrowcount)

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model.ts:57](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/data/tablemodel/areamodel/area-model.ts#L57)

___

### getRowHeight

▸ **getRowHeight**(`_rowIndex`): `number`

Returns the row height in pixel of the given row (rowIndex).

#### Parameters

| Name | Type |
| :------ | :------ |
| `_rowIndex` | `number` |

#### Returns

`number`

#### Implementation of

[AreaModelIf](../interfaces/AreaModelIf.md).[getRowHeight](../interfaces/AreaModelIf.md#getrowheight)

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model.ts:61](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/data/tablemodel/areamodel/area-model.ts#L61)

___

### getRowspanAt

▸ **getRowspanAt**(`_rowIndex`, `_columnIndex`): `number`

Returns the value of a rowspan of the cell at position rowIndex/columnIndex.
A value below 2 is ignored.

#### Parameters

| Name | Type |
| :------ | :------ |
| `_rowIndex` | `number` |
| `_columnIndex` | `number` |

#### Returns

`number`

#### Implementation of

[AreaModelIf](../interfaces/AreaModelIf.md).[getRowspanAt](../interfaces/AreaModelIf.md#getrowspanat)

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model.ts:65](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/data/tablemodel/areamodel/area-model.ts#L65)

___

### getTooltipAt

▸ **getTooltipAt**(`_rowIndex`, `_columnIndex`): `any`

Returns the value of a tooltip of the given cell (rowIndex/columnIndex).

#### Parameters

| Name | Type |
| :------ | :------ |
| `_rowIndex` | `number` |
| `_columnIndex` | `number` |

#### Returns

`any`

#### Implementation of

[AreaModelIf](../interfaces/AreaModelIf.md).[getTooltipAt](../interfaces/AreaModelIf.md#gettooltipat)

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model.ts:69](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/data/tablemodel/areamodel/area-model.ts#L69)

___

### getValueAt

▸ **getValueAt**(`_rowIndex`, `_columnIndex`): `any`

Returns the value of the cell at position rowIndex/columnIndex.

#### Parameters

| Name | Type |
| :------ | :------ |
| `_rowIndex` | `number` |
| `_columnIndex` | `number` |

#### Returns

`any`

#### Implementation of

[AreaModelIf](../interfaces/AreaModelIf.md).[getValueAt](../interfaces/AreaModelIf.md#getvalueat)

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model.ts:73](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/data/tablemodel/areamodel/area-model.ts#L73)

___

### getYPosByRowIndex

▸ **getYPosByRowIndex**(`_rowIndex`): `number`

Return the y-position in pixel of the top of the row on the scrollpane.
For big tables it can be a big value (greate than the height of the viewport).

#### Parameters

| Name | Type |
| :------ | :------ |
| `_rowIndex` | `number` |

#### Returns

`number`

#### Implementation of

[AreaModelIf](../interfaces/AreaModelIf.md).[getYPosByRowIndex](../interfaces/AreaModelIf.md#getyposbyrowindex)

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model.ts:77](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/data/tablemodel/areamodel/area-model.ts#L77)

___

### init

▸ **init**(): `void`

Internally used by TableModel.

#### Returns

`void`

#### Implementation of

[AreaModelIf](../interfaces/AreaModelIf.md).[init](../interfaces/AreaModelIf.md#init)

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model.ts:81](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/data/tablemodel/areamodel/area-model.ts#L81)

___

### isEditable

▸ **isEditable**(`_rowIndex`, `_columnIndex`): `boolean`

If this method returns true, the cell can be edited by the user.

#### Parameters

| Name | Type |
| :------ | :------ |
| `_rowIndex` | `number` |
| `_columnIndex` | `number` |

#### Returns

`boolean`

#### Implementation of

[AreaModelIf](../interfaces/AreaModelIf.md).[isEditable](../interfaces/AreaModelIf.md#iseditable)

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model.ts:85](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/data/tablemodel/areamodel/area-model.ts#L85)

___

### isFilterable

▸ **isFilterable**(): `boolean`

If true, the table is filterable. Rows can be filtered with help of #externalFilterChanged()

#### Returns

`boolean`

#### Implementation of

[AreaModelIf](../interfaces/AreaModelIf.md).[isFilterable](../interfaces/AreaModelIf.md#isfilterable)

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model.ts:89](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/data/tablemodel/areamodel/area-model.ts#L89)

___

### isRowCheckable

▸ **isRowCheckable**(`_rowIndex`): `boolean`

If true, the row is checkable and a checkbox is rendered at the beginning of the row.

#### Parameters

| Name | Type |
| :------ | :------ |
| `_rowIndex` | `number` |

#### Returns

`boolean`

#### Implementation of

[AreaModelIf](../interfaces/AreaModelIf.md).[isRowCheckable](../interfaces/AreaModelIf.md#isrowcheckable)

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model.ts:93](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/data/tablemodel/areamodel/area-model.ts#L93)

___

### isRowChecked

▸ **isRowChecked**(`_rowIndex`): `undefined` \| [`CheckedType`](../modules.md#checkedtype)

Returns the checked state of an row.

#### Parameters

| Name | Type |
| :------ | :------ |
| `_rowIndex` | `number` |

#### Returns

`undefined` \| [`CheckedType`](../modules.md#checkedtype)

#### Implementation of

[AreaModelIf](../interfaces/AreaModelIf.md).[isRowChecked](../interfaces/AreaModelIf.md#isrowchecked)

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model.ts:97](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/data/tablemodel/areamodel/area-model.ts#L97)

___

### isSelectable

▸ **isSelectable**(`_rowIndex`, `_columnIndex`): `boolean`

If true, the cell is selectable.

#### Parameters

| Name | Type |
| :------ | :------ |
| `_rowIndex` | `number` |
| `_columnIndex` | `number` |

#### Returns

`boolean`

#### Implementation of

[AreaModelIf](../interfaces/AreaModelIf.md).[isSelectable](../interfaces/AreaModelIf.md#isselectable)

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model.ts:101](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/data/tablemodel/areamodel/area-model.ts#L101)

___

### setRowChecked

▸ **setRowChecked**(`_rowIndex`, `_checked`): `void`

Set the checked state of the row (rowIndex) to #checked.

#### Parameters

| Name | Type |
| :------ | :------ |
| `_rowIndex` | `number` |
| `_checked` | `boolean` |

#### Returns

`void`

#### Implementation of

[AreaModelIf](../interfaces/AreaModelIf.md).[setRowChecked](../interfaces/AreaModelIf.md#setrowchecked)

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model.ts:105](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/data/tablemodel/areamodel/area-model.ts#L105)

___

### setValue

▸ **setValue**(`_rowIndex`, `_columnIndex`, `_value`): `boolean`

Method for changing a cell value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `_rowIndex` | `number` |
| `_columnIndex` | `number` |
| `_value` | `any` |

#### Returns

`boolean`

#### Implementation of

[AreaModelIf](../interfaces/AreaModelIf.md).[setValue](../interfaces/AreaModelIf.md#setvalue)

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model.ts:109](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/data/tablemodel/areamodel/area-model.ts#L109)
