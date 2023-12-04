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

## Constructors

### constructor

• **new AreaModelCellGroups**(`areaIdent?`, `groups`, `columnDefs?`, `defaultRowHeight`): [`AreaModelCellGroups`](AreaModelCellGroups.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `areaIdent` | [`AreaIdent`](../modules.md#areaident) | `"header"` |
| `groups` | [`CellGroupIf`](../interfaces/CellGroupIf.md)[] | `undefined` |
| `columnDefs` | [`ColumnDefIf`](../interfaces/ColumnDefIf.md)[] | `[]` |
| `defaultRowHeight` | `number` | `undefined` |

#### Returns

[`AreaModelCellGroups`](AreaModelCellGroups.md)

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts:25](https://github.com/guiexperttable/ge-table/blob/7d8ffe2/libs/table/src/lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts#L25)

## Properties

### areaIdent

• `Readonly` **areaIdent**: [`AreaIdent`](../modules.md#areaident) = `"header"`

The identifier for one of the areas: header, body, footer.

#### Implementation of

[AreaModelIf](../interfaces/AreaModelIf.md).[areaIdent](../interfaces/AreaModelIf.md#areaident)

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts:26](https://github.com/guiexperttable/ge-table/blob/7d8ffe2/libs/table/src/lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts#L26)

___

### arr

• `Readonly` **arr**: (`undefined` \| ``null`` \| [`CellGroupExt`](CellGroupExt.md))[][]

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts:20](https://github.com/guiexperttable/ge-table/blob/7d8ffe2/libs/table/src/lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts#L20)

___

### cellGroupExtCellRenderer

• `Private` **cellGroupExtCellRenderer**: [`CellGroupExtCellRenderer`](CellGroupExtCellRenderer.md)

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts:23](https://github.com/guiexperttable/ge-table/blob/7d8ffe2/libs/table/src/lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts#L23)

___

### columnDefs

• `Readonly` **columnDefs**: [`ColumnDefIf`](../interfaces/ColumnDefIf.md)[] = `[]`

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts:28](https://github.com/guiexperttable/ge-table/blob/7d8ffe2/libs/table/src/lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts#L28)

___

### defaultRowHeight

• `Readonly` **defaultRowHeight**: `number`

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts:29](https://github.com/guiexperttable/ge-table/blob/7d8ffe2/libs/table/src/lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts#L29)

___

### gammaCells

• **gammaCells**: `boolean` = `true`

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts:17](https://github.com/guiexperttable/ge-table/blob/7d8ffe2/libs/table/src/lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts#L17)

___

### groupExts

• `Private` **groupExts**: [`CellGroupExt`](CellGroupExt.md)[] = `[]`

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts:22](https://github.com/guiexperttable/ge-table/blob/7d8ffe2/libs/table/src/lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts#L22)

___

### groups

• `Readonly` **groups**: [`CellGroupIf`](../interfaces/CellGroupIf.md)[]

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts:27](https://github.com/guiexperttable/ge-table/blob/7d8ffe2/libs/table/src/lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts#L27)

___

### rowSelectionModel

• **rowSelectionModel**: `undefined` \| [`CheckboxModelIf`](../interfaces/CheckboxModelIf.md)\<`any`\>

A model and controller for a row checkbox selection

#### Implementation of

[AreaModelIf](../interfaces/AreaModelIf.md).[rowSelectionModel](../interfaces/AreaModelIf.md#rowselectionmodel)

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts:19](https://github.com/guiexperttable/ge-table/blob/7d8ffe2/libs/table/src/lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts#L19)

## Methods

### buildArray

▸ **buildArray**(): (`undefined` \| ``null`` \| [`CellGroupExt`](CellGroupExt.md))[][]

#### Returns

(`undefined` \| ``null`` \| [`CellGroupExt`](CellGroupExt.md))[][]

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts:61](https://github.com/guiexperttable/ge-table/blob/7d8ffe2/libs/table/src/lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts#L61)

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

[lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts:88](https://github.com/guiexperttable/ge-table/blob/7d8ffe2/libs/table/src/lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts#L88)

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

[lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts:92](https://github.com/guiexperttable/ge-table/blob/7d8ffe2/libs/table/src/lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts#L92)

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

[lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts:96](https://github.com/guiexperttable/ge-table/blob/7d8ffe2/libs/table/src/lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts#L96)

___

### getAllLeafs

▸ **getAllLeafs**(): [`CellGroupExt`](CellGroupExt.md)[]

#### Returns

[`CellGroupExt`](CellGroupExt.md)[]

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts:48](https://github.com/guiexperttable/ge-table/blob/7d8ffe2/libs/table/src/lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts#L48)

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

[lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts:100](https://github.com/guiexperttable/ge-table/blob/7d8ffe2/libs/table/src/lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts#L100)

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

[lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts:104](https://github.com/guiexperttable/ge-table/blob/7d8ffe2/libs/table/src/lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts#L104)

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

[lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts:122](https://github.com/guiexperttable/ge-table/blob/7d8ffe2/libs/table/src/lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts#L122)

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

[lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts:126](https://github.com/guiexperttable/ge-table/blob/7d8ffe2/libs/table/src/lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts#L126)

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

[lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts:130](https://github.com/guiexperttable/ge-table/blob/7d8ffe2/libs/table/src/lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts#L130)

___

### getMaxRowCount

▸ **getMaxRowCount**(): `number`

#### Returns

`number`

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts:53](https://github.com/guiexperttable/ge-table/blob/7d8ffe2/libs/table/src/lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts#L53)

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

[lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts:134](https://github.com/guiexperttable/ge-table/blob/7d8ffe2/libs/table/src/lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts#L134)

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

[lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts:138](https://github.com/guiexperttable/ge-table/blob/7d8ffe2/libs/table/src/lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts#L138)

___

### getRowCount

▸ **getRowCount**(): `number`

Returns the number of rows of the area

#### Returns

`number`

#### Implementation of

[AreaModelIf](../interfaces/AreaModelIf.md).[getRowCount](../interfaces/AreaModelIf.md#getrowcount)

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts:142](https://github.com/guiexperttable/ge-table/blob/7d8ffe2/libs/table/src/lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts#L142)

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

[lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts:178](https://github.com/guiexperttable/ge-table/blob/7d8ffe2/libs/table/src/lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts#L178)

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

[lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts:150](https://github.com/guiexperttable/ge-table/blob/7d8ffe2/libs/table/src/lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts#L150)

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

[lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts:160](https://github.com/guiexperttable/ge-table/blob/7d8ffe2/libs/table/src/lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts#L160)

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

[lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts:165](https://github.com/guiexperttable/ge-table/blob/7d8ffe2/libs/table/src/lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts#L165)

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

[lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts:169](https://github.com/guiexperttable/ge-table/blob/7d8ffe2/libs/table/src/lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts#L169)

___

### init

▸ **init**(): `void`

Internally used by TableModel.

#### Returns

`void`

#### Implementation of

[AreaModelIf](../interfaces/AreaModelIf.md).[init](../interfaces/AreaModelIf.md#init)

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts:175](https://github.com/guiexperttable/ge-table/blob/7d8ffe2/libs/table/src/lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts#L175)

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

[lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts:182](https://github.com/guiexperttable/ge-table/blob/7d8ffe2/libs/table/src/lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts#L182)

___

### isFilterable

▸ **isFilterable**(): `boolean`

If true, the table is filterable. Rows can be filtered with help of #externalFilterChanged()

#### Returns

`boolean`

#### Implementation of

[AreaModelIf](../interfaces/AreaModelIf.md).[isFilterable](../interfaces/AreaModelIf.md#isfilterable)

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts:186](https://github.com/guiexperttable/ge-table/blob/7d8ffe2/libs/table/src/lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts#L186)

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

[lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts:190](https://github.com/guiexperttable/ge-table/blob/7d8ffe2/libs/table/src/lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts#L190)

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

[lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts:194](https://github.com/guiexperttable/ge-table/blob/7d8ffe2/libs/table/src/lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts#L194)

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

[lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts:198](https://github.com/guiexperttable/ge-table/blob/7d8ffe2/libs/table/src/lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts#L198)

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

[lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts:202](https://github.com/guiexperttable/ge-table/blob/7d8ffe2/libs/table/src/lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts#L202)

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

[lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts:206](https://github.com/guiexperttable/ge-table/blob/7d8ffe2/libs/table/src/lib/table/data/tablemodel/areamodel/area-model-cell-groups.ts#L206)
