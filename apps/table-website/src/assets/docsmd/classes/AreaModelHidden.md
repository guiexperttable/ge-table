[@guiexpert/table](../README.md) / [Exports](../modules.md) / AreaModelHidden

# Class: AreaModelHidden

An unvisible model, which is used internally for hiding a header.

## Implements

- [`AreaModelIf`](../interfaces/AreaModelIf.md)

## Table of contents

### Constructors

- [constructor](AreaModelHidden.md#constructor)

### Properties

- [areaIdent](AreaModelHidden.md#areaident)
- [rowSelectionModel](AreaModelHidden.md#rowselectionmodel)

### Methods

- [changeColumnOrder](AreaModelHidden.md#changecolumnorder)
- [doSort](AreaModelHidden.md#dosort)
- [externalFilterChanged](AreaModelHidden.md#externalfilterchanged)
- [getCellRenderer](AreaModelHidden.md#getcellrenderer)
- [getColspanAt](AreaModelHidden.md#getcolspanat)
- [getCustomClassesAt](AreaModelHidden.md#getcustomclassesat)
- [getCustomStyleAt](AreaModelHidden.md#getcustomstyleat)
- [getMaxColspan](AreaModelHidden.md#getmaxcolspan)
- [getMaxRowspan](AreaModelHidden.md#getmaxrowspan)
- [getRowByIndex](AreaModelHidden.md#getrowbyindex)
- [getRowCount](AreaModelHidden.md#getrowcount)
- [getRowHeight](AreaModelHidden.md#getrowheight)
- [getRowspanAt](AreaModelHidden.md#getrowspanat)
- [getTooltipAt](AreaModelHidden.md#gettooltipat)
- [getValueAt](AreaModelHidden.md#getvalueat)
- [getYPosByRowIndex](AreaModelHidden.md#getyposbyrowindex)
- [init](AreaModelHidden.md#init)
- [isEditable](AreaModelHidden.md#iseditable)
- [isFilterable](AreaModelHidden.md#isfilterable)
- [isRowCheckable](AreaModelHidden.md#isrowcheckable)
- [isRowChecked](AreaModelHidden.md#isrowchecked)
- [isSelectable](AreaModelHidden.md#isselectable)
- [setRowChecked](AreaModelHidden.md#setrowchecked)
- [setValue](AreaModelHidden.md#setvalue)

## Constructors

### constructor

• **new AreaModelHidden**(`areaIdent?`): [`AreaModelHidden`](AreaModelHidden.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `areaIdent` | [`AreaIdent`](../modules.md#areaident) | `"body"` |

#### Returns

[`AreaModelHidden`](AreaModelHidden.md)

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-hidden.ts:16](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/data/tablemodel/areamodel/area-model-hidden.ts#L16)

## Properties

### areaIdent

• **areaIdent**: [`AreaIdent`](../modules.md#areaident) = `"body"`

The identifier for one of the areas: header, body, footer.

#### Implementation of

[AreaModelIf](../interfaces/AreaModelIf.md).[areaIdent](../interfaces/AreaModelIf.md#areaident)

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-hidden.ts:17](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/data/tablemodel/areamodel/area-model-hidden.ts#L17)

___

### rowSelectionModel

• **rowSelectionModel**: `undefined` \| [`CheckboxModelIf`](../interfaces/CheckboxModelIf.md)\<`any`\> = `undefined`

A model and controller for a row checkbox selection

#### Implementation of

[AreaModelIf](../interfaces/AreaModelIf.md).[rowSelectionModel](../interfaces/AreaModelIf.md#rowselectionmodel)

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-hidden.ts:14](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/data/tablemodel/areamodel/area-model-hidden.ts#L14)

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

[lib/table/data/tablemodel/areamodel/area-model-hidden.ts:115](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/data/tablemodel/areamodel/area-model-hidden.ts#L115)

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

[lib/table/data/tablemodel/areamodel/area-model-hidden.ts:98](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/data/tablemodel/areamodel/area-model-hidden.ts#L98)

___

### externalFilterChanged

▸ **externalFilterChanged**(`_predictFn`): `void`

Will be called internally, when a filtering is trigger.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_predictFn` | [`FilterFunction`](../modules.md#filterfunction)\<`any`\> | Defines, what row are invisible or visible after filtering. |

#### Returns

`void`

#### Implementation of

[AreaModelIf](../interfaces/AreaModelIf.md).[externalFilterChanged](../interfaces/AreaModelIf.md#externalfilterchanged)

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-hidden.ts:90](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/data/tablemodel/areamodel/area-model-hidden.ts#L90)

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

[lib/table/data/tablemodel/areamodel/area-model-hidden.ts:29](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/data/tablemodel/areamodel/area-model-hidden.ts#L29)

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

[lib/table/data/tablemodel/areamodel/area-model-hidden.ts:37](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/data/tablemodel/areamodel/area-model-hidden.ts#L37)

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

[lib/table/data/tablemodel/areamodel/area-model-hidden.ts:41](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/data/tablemodel/areamodel/area-model-hidden.ts#L41)

___

### getCustomStyleAt

▸ **getCustomStyleAt**(`_rowIndex`, `_columnIndex`): `undefined` \| \{ `[key: string]`: `string`;  }

This method can be used to return an object with css style information for the given cell

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_rowIndex` | `number` | row index of the cell |
| `_columnIndex` | `number` | column index of the cell |

#### Returns

`undefined` \| \{ `[key: string]`: `string`;  }

#### Implementation of

[AreaModelIf](../interfaces/AreaModelIf.md).[getCustomStyleAt](../interfaces/AreaModelIf.md#getcustomstyleat)

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-hidden.ts:45](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/data/tablemodel/areamodel/area-model-hidden.ts#L45)

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

[lib/table/data/tablemodel/areamodel/area-model-hidden.ts:73](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/data/tablemodel/areamodel/area-model-hidden.ts#L73)

___

### getMaxRowspan

▸ **getMaxRowspan**(): `number`

This return value is internally used to optimize the render performance.
Set this value to the lowest possible value. If the model has no rowspan,
a value of 0 would be good. The dafault is 32. If your model has a rowspan
cell greater 32, don't forget to increase this value.

#### Returns

`number`

#### Implementation of

[AreaModelIf](../interfaces/AreaModelIf.md).[getMaxRowspan](../interfaces/AreaModelIf.md#getmaxrowspan)

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-hidden.ts:77](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/data/tablemodel/areamodel/area-model-hidden.ts#L77)

___

### getRowByIndex

▸ **getRowByIndex**(`_idx`): `any`

Returns the row of the model, which correspond to the rowIndex.

#### Parameters

| Name | Type |
| :------ | :------ |
| `_idx` | `number` |

#### Returns

`any`

#### Implementation of

[AreaModelIf](../interfaces/AreaModelIf.md).[getRowByIndex](../interfaces/AreaModelIf.md#getrowbyindex)

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-hidden.ts:53](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/data/tablemodel/areamodel/area-model-hidden.ts#L53)

___

### getRowCount

▸ **getRowCount**(): `number`

Returns the number of rows of the area

#### Returns

`number`

#### Implementation of

[AreaModelIf](../interfaces/AreaModelIf.md).[getRowCount](../interfaces/AreaModelIf.md#getrowcount)

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-hidden.ts:21](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/data/tablemodel/areamodel/area-model-hidden.ts#L21)

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

[lib/table/data/tablemodel/areamodel/area-model-hidden.ts:33](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/data/tablemodel/areamodel/area-model-hidden.ts#L33)

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

[lib/table/data/tablemodel/areamodel/area-model-hidden.ts:49](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/data/tablemodel/areamodel/area-model-hidden.ts#L49)

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

[lib/table/data/tablemodel/areamodel/area-model-hidden.ts:69](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/data/tablemodel/areamodel/area-model-hidden.ts#L69)

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

[lib/table/data/tablemodel/areamodel/area-model-hidden.ts:25](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/data/tablemodel/areamodel/area-model-hidden.ts#L25)

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

[lib/table/data/tablemodel/areamodel/area-model-hidden.ts:82](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/data/tablemodel/areamodel/area-model-hidden.ts#L82)

___

### init

▸ **init**(): `void`

Internally used by TableModel.

#### Returns

`void`

#### Implementation of

[AreaModelIf](../interfaces/AreaModelIf.md).[init](../interfaces/AreaModelIf.md#init)

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-hidden.ts:86](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/data/tablemodel/areamodel/area-model-hidden.ts#L86)

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

[lib/table/data/tablemodel/areamodel/area-model-hidden.ts:103](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/data/tablemodel/areamodel/area-model-hidden.ts#L103)

___

### isFilterable

▸ **isFilterable**(): `boolean`

If true, the table is filterable. Rows can be filtered with help of #externalFilterChanged()

#### Returns

`boolean`

#### Implementation of

[AreaModelIf](../interfaces/AreaModelIf.md).[isFilterable](../interfaces/AreaModelIf.md#isfilterable)

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-hidden.ts:94](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/data/tablemodel/areamodel/area-model-hidden.ts#L94)

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

[lib/table/data/tablemodel/areamodel/area-model-hidden.ts:57](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/data/tablemodel/areamodel/area-model-hidden.ts#L57)

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

[lib/table/data/tablemodel/areamodel/area-model-hidden.ts:61](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/data/tablemodel/areamodel/area-model-hidden.ts#L61)

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

[lib/table/data/tablemodel/areamodel/area-model-hidden.ts:111](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/data/tablemodel/areamodel/area-model-hidden.ts#L111)

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

[lib/table/data/tablemodel/areamodel/area-model-hidden.ts:65](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/data/tablemodel/areamodel/area-model-hidden.ts#L65)

___

### setValue

▸ **setValue**(`_rowIndex`, `_columnIndex`, `_value`): `boolean`

Method for changing a cell value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `_rowIndex` | `number` |
| `_columnIndex` | `number` |
| `_value` | `string` |

#### Returns

`boolean`

#### Implementation of

[AreaModelIf](../interfaces/AreaModelIf.md).[setValue](../interfaces/AreaModelIf.md#setvalue)

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-hidden.ts:107](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/data/tablemodel/areamodel/area-model-hidden.ts#L107)
