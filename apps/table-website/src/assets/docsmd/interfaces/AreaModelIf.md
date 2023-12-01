[@guiexpert/table](../README.md) / [Exports](../modules.md) / AreaModelIf

# Interface: AreaModelIf

This is the model interface for an area model. A table can have three of these models, one for the header,
one for the body , and one for the footer.
An AreaModelIf gives you information about the rows and cell contents.
The column information is given by the TableModelIf.

## Implemented by

- [`AbstractAreaModel`](../classes/AbstractAreaModel.md)
- [`AreaModel`](../classes/AreaModel.md)
- [`AreaModelCellGroups`](../classes/AreaModelCellGroups.md)
- [`AreaModelHidden`](../classes/AreaModelHidden.md)

## Table of contents

### Properties

- [areaIdent](AreaModelIf.md#areaident)
- [rowSelectionModel](AreaModelIf.md#rowselectionmodel)

### Methods

- [changeColumnOrder](AreaModelIf.md#changecolumnorder)
- [doSort](AreaModelIf.md#dosort)
- [externalFilterChanged](AreaModelIf.md#externalfilterchanged)
- [getCellRenderer](AreaModelIf.md#getcellrenderer)
- [getColspanAt](AreaModelIf.md#getcolspanat)
- [getCustomClassesAt](AreaModelIf.md#getcustomclassesat)
- [getCustomStyleAt](AreaModelIf.md#getcustomstyleat)
- [getMaxColspan](AreaModelIf.md#getmaxcolspan)
- [getMaxRowspan](AreaModelIf.md#getmaxrowspan)
- [getRowByIndex](AreaModelIf.md#getrowbyindex)
- [getRowCount](AreaModelIf.md#getrowcount)
- [getRowHeight](AreaModelIf.md#getrowheight)
- [getRowspanAt](AreaModelIf.md#getrowspanat)
- [getTooltipAt](AreaModelIf.md#gettooltipat)
- [getValueAt](AreaModelIf.md#getvalueat)
- [getYPosByRowIndex](AreaModelIf.md#getyposbyrowindex)
- [init](AreaModelIf.md#init)
- [isEditable](AreaModelIf.md#iseditable)
- [isFilterable](AreaModelIf.md#isfilterable)
- [isRowCheckable](AreaModelIf.md#isrowcheckable)
- [isRowChecked](AreaModelIf.md#isrowchecked)
- [isSelectable](AreaModelIf.md#isselectable)
- [setRowChecked](AreaModelIf.md#setrowchecked)
- [setValue](AreaModelIf.md#setvalue)

## Properties

### areaIdent

• **areaIdent**: [`AreaIdent`](../modules.md#areaident)

The identifier for one of the areas: header, body, footer.

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model.if.ts:20](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/data/tablemodel/areamodel/area-model.if.ts#L20)

___

### rowSelectionModel

• **rowSelectionModel**: `undefined` \| [`CheckboxModelIf`](CheckboxModelIf.md)\<`any`\>

A model and controller for a row checkbox selection

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model.if.ts:25](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/data/tablemodel/areamodel/area-model.if.ts#L25)

## Methods

### changeColumnOrder

▸ **changeColumnOrder**(`sourceColumnIndex`, `targetColumnIndex`): `void`

Method for moving a column from position sourceColumnIndex to targetColumnIndex.

#### Parameters

| Name | Type |
| :------ | :------ |
| `sourceColumnIndex` | `number` |
| `targetColumnIndex` | `number` |

#### Returns

`void`

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model.if.ts:30](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/data/tablemodel/areamodel/area-model.if.ts#L30)

___

### doSort

▸ **doSort**(`sortItems`): `boolean`

If the 'restore sort' option is set (see), this method will be triggered automatically by the table,

#### Parameters

| Name | Type |
| :------ | :------ |
| `sortItems` | [`SortItem`](../classes/SortItem.md)[] |

#### Returns

`boolean`

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model.if.ts:184](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/data/tablemodel/areamodel/area-model.if.ts#L184)

___

### externalFilterChanged

▸ **externalFilterChanged**\<`T`\>(`predictFn`): `void`

Will be called internally, when a filtering is trigger.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predictFn` | [`FilterFunction`](../modules.md#filterfunction)\<`T`\> | Defines, what row are invisible or visible after filtering. |

#### Returns

`void`

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model.if.ts:178](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/data/tablemodel/areamodel/area-model.if.ts#L178)

___

### getCellRenderer

▸ **getCellRenderer**(`rowIndex`, `columnIndex`): `undefined` \| [`CellRendererIf`](CellRendererIf.md)

Returns a cell renderer class for the given cell (rowIndex/columnIndex).
If the return value is undefined, no renderer is used and the model value will be rendered directly in the cell.

#### Parameters

| Name | Type |
| :------ | :------ |
| `rowIndex` | `number` |
| `columnIndex` | `number` |

#### Returns

`undefined` \| [`CellRendererIf`](CellRendererIf.md)

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model.if.ts:115](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/data/tablemodel/areamodel/area-model.if.ts#L115)

___

### getColspanAt

▸ **getColspanAt**(`rowIndex`, `columnIndex`): `number`

Returns the value of a colspan of the cell at position rowIndex/columnIndex.
A value below 2 is ignored.

#### Parameters

| Name | Type |
| :------ | :------ |
| `rowIndex` | `number` |
| `columnIndex` | `number` |

#### Returns

`number`

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model.if.ts:56](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/data/tablemodel/areamodel/area-model.if.ts#L56)

___

### getCustomClassesAt

▸ **getCustomClassesAt**(`rowIndex`, `columnIndex`): `string`[]

This method can be used to return a list of css classes for the given cell

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rowIndex` | `number` | row index of the cell |
| `columnIndex` | `number` | column index of the cell |

#### Returns

`string`[]

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model.if.ts:85](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/data/tablemodel/areamodel/area-model.if.ts#L85)

___

### getCustomStyleAt

▸ **getCustomStyleAt**(`rowIndex`, `columnIndex`): `undefined` \| \{ `[key: string]`: `string`;  }

This method can be used to return an object with css style information for the given cell

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rowIndex` | `number` | row index of the cell |
| `columnIndex` | `number` | column index of the cell |

#### Returns

`undefined` \| \{ `[key: string]`: `string`;  }

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model.if.ts:92](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/data/tablemodel/areamodel/area-model.if.ts#L92)

___

### getMaxColspan

▸ **getMaxColspan**(): `number`

This return value is internally used to optimize the render performance.
Set this value to the lowest possible value. If the model has no colspan,
a value of 0 would be good. The dafault is 32. If your model has a colspan
cell greater 32, don't forget to increase this value.

#### Returns

`number`

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model.if.ts:64](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/data/tablemodel/areamodel/area-model.if.ts#L64)

___

### getMaxRowspan

▸ **getMaxRowspan**(): `number`

This return value is internally used to optimize the render performance.
Set this value to the lowest possible value. If the model has no rowspan,
a value of 0 would be good. The default is 32. If your model has a rowspan
cell greater 32, don't forget to increase this value.

#### Returns

`number`

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model.if.ts:78](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/data/tablemodel/areamodel/area-model.if.ts#L78)

___

### getRowByIndex

▸ **getRowByIndex**(`rowIndex`): `any`

Returns the row of the model, which correspond to the rowIndex.

#### Parameters

| Name | Type |
| :------ | :------ |
| `rowIndex` | `number` |

#### Returns

`any`

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model.if.ts:127](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/data/tablemodel/areamodel/area-model.if.ts#L127)

___

### getRowCount

▸ **getRowCount**(): `number`

Returns the number of rows of the area

#### Returns

`number`

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model.if.ts:45](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/data/tablemodel/areamodel/area-model.if.ts#L45)

___

### getRowHeight

▸ **getRowHeight**(`rowIndex`): `number`

Returns the row height in pixel of the given row (rowIndex).

#### Parameters

| Name | Type |
| :------ | :------ |
| `rowIndex` | `number` |

#### Returns

`number`

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model.if.ts:121](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/data/tablemodel/areamodel/area-model.if.ts#L121)

___

### getRowspanAt

▸ **getRowspanAt**(`rowIndex`, `columnIndex`): `number`

Returns the value of a rowspan of the cell at position rowIndex/columnIndex.
A value below 2 is ignored.

#### Parameters

| Name | Type |
| :------ | :------ |
| `rowIndex` | `number` |
| `columnIndex` | `number` |

#### Returns

`number`

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model.if.ts:70](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/data/tablemodel/areamodel/area-model.if.ts#L70)

___

### getTooltipAt

▸ **getTooltipAt**(`rowIndex`, `columnIndex`): `any`

Returns the value of a tooltip of the given cell (rowIndex/columnIndex).

#### Parameters

| Name | Type |
| :------ | :------ |
| `rowIndex` | `number` |
| `columnIndex` | `number` |

#### Returns

`any`

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model.if.ts:107](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/data/tablemodel/areamodel/area-model.if.ts#L107)

___

### getValueAt

▸ **getValueAt**(`rowIndex`, `columnIndex`): `any`

Returns the value of the cell at position rowIndex/columnIndex.

#### Parameters

| Name | Type |
| :------ | :------ |
| `rowIndex` | `number` |
| `columnIndex` | `number` |

#### Returns

`any`

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model.if.ts:50](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/data/tablemodel/areamodel/area-model.if.ts#L50)

▸ **getValueAt**(`rowIndex`, `columnIndex`): `any`

Returns the cell value of the given cell. This value will be rendered
directly in the cell or rendered by a cell renderer: see [getCellRenderer](AreaModelIf.md#getcellrenderer).

#### Parameters

| Name | Type |
| :------ | :------ |
| `rowIndex` | `number` |
| `columnIndex` | `number` |

#### Returns

`any`

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model.if.ts:100](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/data/tablemodel/areamodel/area-model.if.ts#L100)

___

### getYPosByRowIndex

▸ **getYPosByRowIndex**(`rowIndex`): `number`

Return the y-position in pixel of the top of the row on the scrollpane.
For big tables it can be a big value (greate than the height of the viewport).

#### Parameters

| Name | Type |
| :------ | :------ |
| `rowIndex` | `number` |

#### Returns

`number`

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model.if.ts:134](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/data/tablemodel/areamodel/area-model.if.ts#L134)

___

### init

▸ **init**(): `void`

Internally used by TableModel.

#### Returns

`void`

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model.if.ts:40](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/data/tablemodel/areamodel/area-model.if.ts#L40)

___

### isEditable

▸ **isEditable**(`rowIndex`, `columnIndex`): `boolean`

If this method returns true, the cell can be edited by the user.

#### Parameters

| Name | Type |
| :------ | :------ |
| `rowIndex` | `number` |
| `columnIndex` | `number` |

#### Returns

`boolean`

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model.if.ts:141](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/data/tablemodel/areamodel/area-model.if.ts#L141)

___

### isFilterable

▸ **isFilterable**(): `boolean`

If true, the table is filterable. Rows can be filtered with help of #externalFilterChanged()

#### Returns

`boolean`

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model.if.ts:172](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/data/tablemodel/areamodel/area-model.if.ts#L172)

___

### isRowCheckable

▸ **isRowCheckable**(`rowIndex`): `boolean`

If true, the row is checkable and a checkbox is rendered at the beginning of the row.

#### Parameters

| Name | Type |
| :------ | :------ |
| `rowIndex` | `number` |

#### Returns

`boolean`

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model.if.ts:154](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/data/tablemodel/areamodel/area-model.if.ts#L154)

___

### isRowChecked

▸ **isRowChecked**(`rowIndex`): `undefined` \| [`CheckedType`](../modules.md#checkedtype)

Returns the checked state of an row.

#### Parameters

| Name | Type |
| :------ | :------ |
| `rowIndex` | `number` |

#### Returns

`undefined` \| [`CheckedType`](../modules.md#checkedtype)

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model.if.ts:160](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/data/tablemodel/areamodel/area-model.if.ts#L160)

___

### isSelectable

▸ **isSelectable**(`rowIndex`, `columnIndex`): `boolean`

If true, the cell is selectable.

#### Parameters

| Name | Type |
| :------ | :------ |
| `rowIndex` | `number` |
| `columnIndex` | `number` |

#### Returns

`boolean`

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model.if.ts:148](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/data/tablemodel/areamodel/area-model.if.ts#L148)

___

### setRowChecked

▸ **setRowChecked**(`rowIndex`, `checked`): `void`

Set the checked state of the row (rowIndex) to #checked.

#### Parameters

| Name | Type |
| :------ | :------ |
| `rowIndex` | `number` |
| `checked` | `boolean` |

#### Returns

`void`

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model.if.ts:167](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/data/tablemodel/areamodel/area-model.if.ts#L167)

___

### setValue

▸ **setValue**(`rowIndex`, `columnIndex`, `value`): `boolean`

Method for changing a cell value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `rowIndex` | `number` |
| `columnIndex` | `number` |
| `value` | `any` |

#### Returns

`boolean`

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model.if.ts:35](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/data/tablemodel/areamodel/area-model.if.ts#L35)
