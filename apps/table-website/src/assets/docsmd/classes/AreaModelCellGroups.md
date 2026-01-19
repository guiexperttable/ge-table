[@guiexpert/table](../README.md) / [Exports](../modules.md) / AreaModelCellGroups

# Class: AreaModelCellGroups

This is the model interface for an area model. A table can have three of these models, one for the header,
one for the body , and one for the footer.
An AreaModelIf gives you information about the rows and cell contents.
The column information is given by the TableModelIf.

## Implements

- [`AreaModelIf`](../interfaces/AreaModelIf.md)

## Table of contents

### Constructors

- [constructor](AreaModelCellGroups.md#constructor)

### Properties

- [areaIdent](AreaModelCellGroups.md#areaident)
- [arr](AreaModelCellGroups.md#arr)
- [cellGroupExtCellRenderer](AreaModelCellGroups.md#cellgroupextcellrenderer)
- [columnDefs](AreaModelCellGroups.md#columndefs)
- [defaultRowHeight](AreaModelCellGroups.md#defaultrowheight)
- [gammaCells](AreaModelCellGroups.md#gammacells)
- [groupExts](AreaModelCellGroups.md#groupexts)
- [groups](AreaModelCellGroups.md#groups)
- [headerGroupOptions](AreaModelCellGroups.md#headergroupoptions)
- [rowSelectionModel](AreaModelCellGroups.md#rowselectionmodel)

### Methods

- [buildArray](AreaModelCellGroups.md#buildarray)
- [changeColumnOrder](AreaModelCellGroups.md#changecolumnorder)
- [doSort](AreaModelCellGroups.md#dosort)
- [externalFilterChanged](AreaModelCellGroups.md#externalfilterchanged)
- [getAllLeafs](AreaModelCellGroups.md#getallleafs)
- [getCellRenderer](AreaModelCellGroups.md#getcellrenderer)
- [getColspanAt](AreaModelCellGroups.md#getcolspanat)
- [getCustomClassesAt](AreaModelCellGroups.md#getcustomclassesat)
- [getCustomStyleAt](AreaModelCellGroups.md#getcustomstyleat)
- [getMaxColspan](AreaModelCellGroups.md#getmaxcolspan)
- [getMaxRowCount](AreaModelCellGroups.md#getmaxrowcount)
- [getMaxRowspan](AreaModelCellGroups.md#getmaxrowspan)
- [getRowByIndex](AreaModelCellGroups.md#getrowbyindex)
- [getRowCount](AreaModelCellGroups.md#getrowcount)
- [getRowHeight](AreaModelCellGroups.md#getrowheight)
- [getRowspanAt](AreaModelCellGroups.md#getrowspanat)
- [getTextValueAt](AreaModelCellGroups.md#gettextvalueat)
- [getTooltipAt](AreaModelCellGroups.md#gettooltipat)
- [getValueAt](AreaModelCellGroups.md#getvalueat)
- [getYPosByRowIndex](AreaModelCellGroups.md#getyposbyrowindex)
- [init](AreaModelCellGroups.md#init)
- [isEditable](AreaModelCellGroups.md#iseditable)
- [isFilterable](AreaModelCellGroups.md#isfilterable)
- [isRowCheckable](AreaModelCellGroups.md#isrowcheckable)
- [isRowChecked](AreaModelCellGroups.md#isrowchecked)
- [isSelectable](AreaModelCellGroups.md#isselectable)
- [setRowChecked](AreaModelCellGroups.md#setrowchecked)
- [setValue](AreaModelCellGroups.md#setvalue)
- [sort](AreaModelCellGroups.md#sort)
- [toggleHeaderGroup](AreaModelCellGroups.md#toggleheadergroup)

## Constructors

### constructor

• **new AreaModelCellGroups**(`areaIdent?`, `groups`, `columnDefs?`, `defaultRowHeight`, `headerGroupOptions?`): [`AreaModelCellGroups`](AreaModelCellGroups.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `areaIdent` | [`AreaIdent`](../modules.md#areaident) | `'header'` |
| `groups` | [`CellGroupIf`](../interfaces/CellGroupIf.md)[] | `undefined` |
| `columnDefs` | [`ColumnDefIf`](../interfaces/ColumnDefIf.md)[] | `[]` |
| `defaultRowHeight` | `number` | `undefined` |
| `headerGroupOptions` | `HeaderGroupOptionsIf` | `undefined` |

#### Returns

[`AreaModelCellGroups`](AreaModelCellGroups.md)

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts:28](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts#L28)

## Properties

### areaIdent

• `Readonly` **areaIdent**: [`AreaIdent`](../modules.md#areaident) = `'header'`

The identifier for one of the areas: header, body, footer.

#### Implementation of

[AreaModelIf](../interfaces/AreaModelIf.md).[areaIdent](../interfaces/AreaModelIf.md#areaident)

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts:29](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts#L29)

___

### arr

• **arr**: (`undefined` \| ``null`` \| [`CellGroupExt`](CellGroupExt.md))[][] = `[]`

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts:23](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts#L23)

___

### cellGroupExtCellRenderer

• `Private` **cellGroupExtCellRenderer**: [`CellGroupExtCellRenderer`](CellGroupExtCellRenderer.md)

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts:26](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts#L26)

___

### columnDefs

• **columnDefs**: [`ColumnDefIf`](../interfaces/ColumnDefIf.md)[] = `[]`

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts:31](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts#L31)

___

### defaultRowHeight

• `Readonly` **defaultRowHeight**: `number`

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts:32](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts#L32)

___

### gammaCells

• **gammaCells**: `boolean` = `true`

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts:20](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts#L20)

___

### groupExts

• `Private` **groupExts**: [`CellGroupExt`](CellGroupExt.md)[] = `[]`

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts:25](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts#L25)

___

### groups

• `Readonly` **groups**: [`CellGroupIf`](../interfaces/CellGroupIf.md)[]

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts:30](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts#L30)

___

### headerGroupOptions

• `Private` **headerGroupOptions**: `HeaderGroupOptionsIf`

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts:33](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts#L33)

___

### rowSelectionModel

• **rowSelectionModel**: `undefined` \| [`CheckboxModelIf`](../interfaces/CheckboxModelIf.md)\<`any`\>

A model and controller for a row checkbox selection

#### Implementation of

[AreaModelIf](../interfaces/AreaModelIf.md).[rowSelectionModel](../interfaces/AreaModelIf.md#rowselectionmodel)

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts:22](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts#L22)

## Methods

### buildArray

▸ **buildArray**(): (`undefined` \| ``null`` \| [`CellGroupExt`](CellGroupExt.md))[][]

#### Returns

(`undefined` \| ``null`` \| [`CellGroupExt`](CellGroupExt.md))[][]

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts:73](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts#L73)

___

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

[lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts:100](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts#L100)

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

[lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts:104](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts#L104)

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

[lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts:108](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts#L108)

___

### getAllLeafs

▸ **getAllLeafs**(): [`CellGroupExt`](CellGroupExt.md)[]

#### Returns

[`CellGroupExt`](CellGroupExt.md)[]

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts:60](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts#L60)

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

[lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts:112](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts#L112)

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

#### Implementation of

[AreaModelIf](../interfaces/AreaModelIf.md).[getColspanAt](../interfaces/AreaModelIf.md#getcolspanat)

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts:116](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts#L116)

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

[lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts:134](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts#L134)

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

[lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts:138](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts#L138)

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

[lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts:142](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts#L142)

___

### getMaxRowCount

▸ **getMaxRowCount**(): `number`

#### Returns

`number`

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts:65](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts#L65)

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

[lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts:146](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts#L146)

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

[lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts:150](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts#L150)

___

### getRowCount

▸ **getRowCount**(): `number`

Returns the number of rows of the area

#### Returns

`number`

#### Implementation of

[AreaModelIf](../interfaces/AreaModelIf.md).[getRowCount](../interfaces/AreaModelIf.md#getrowcount)

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts:154](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts#L154)

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

[lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts:191](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts#L191)

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

#### Implementation of

[AreaModelIf](../interfaces/AreaModelIf.md).[getRowspanAt](../interfaces/AreaModelIf.md#getrowspanat)

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts:162](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts#L162)

___

### getTextValueAt

▸ **getTextValueAt**(`rowIndex`, `columnIndex`): `string`

Returns a string value of the cell at position rowIndex/columnIndex.
This function will be called by 'export' or 'copy to clipboard'.

#### Parameters

| Name | Type |
| :------ | :------ |
| `rowIndex` | `number` |
| `columnIndex` | `number` |

#### Returns

`string`

#### Implementation of

[AreaModelIf](../interfaces/AreaModelIf.md).[getTextValueAt](../interfaces/AreaModelIf.md#gettextvalueat)

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts:181](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts#L181)

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

[lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts:172](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts#L172)

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

#### Implementation of

[AreaModelIf](../interfaces/AreaModelIf.md).[getValueAt](../interfaces/AreaModelIf.md#getvalueat)

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts:177](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts#L177)

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

[lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts:185](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts#L185)

___

### init

▸ **init**(): `void`

Internally used by TableModel.

#### Returns

`void`

#### Implementation of

[AreaModelIf](../interfaces/AreaModelIf.md).[init](../interfaces/AreaModelIf.md#init)

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts:44](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts#L44)

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

[lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts:195](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts#L195)

___

### isFilterable

▸ **isFilterable**(): `boolean`

If true, the table is filterable. Rows can be filtered with help of #externalFilterChanged()

#### Returns

`boolean`

#### Implementation of

[AreaModelIf](../interfaces/AreaModelIf.md).[isFilterable](../interfaces/AreaModelIf.md#isfilterable)

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts:199](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts#L199)

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

[lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts:203](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts#L203)

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

[lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts:207](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts#L207)

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

[lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts:211](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts#L211)

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

[lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts:215](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts#L215)

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

[lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts:219](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts#L219)

___

### sort

▸ **sort**\<`T`\>(`_compareFn?`): `void`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `_compareFn?` | (`a`: `T`, `b`: `T`) => `number` |

#### Returns

`void`

#### Implementation of

[AreaModelIf](../interfaces/AreaModelIf.md).[sort](../interfaces/AreaModelIf.md#sort)

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts:40](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts#L40)

___

### toggleHeaderGroup

▸ **toggleHeaderGroup**(`mouseTargetData`): [`ColumnDefIf`](../interfaces/ColumnDefIf.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `mouseTargetData` | [`MouseTargetData`](MouseTargetData.md) |

#### Returns

[`ColumnDefIf`](../interfaces/ColumnDefIf.md)[]

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts:223](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts#L223)
