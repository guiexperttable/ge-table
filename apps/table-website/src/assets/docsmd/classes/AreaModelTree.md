[@guiexpert/table](../README.md) / [Exports](../modules.md) / AreaModelTree

# Class: AreaModelTree\<S\>

Represents a  tree-based table model.
Extends the AbstractAreaModel class.

## Type parameters

| Name | Description |
| :------ | :------ |
| `S` | The type of the row data. |

## Hierarchy

- [`AbstractAreaModel`](AbstractAreaModel.md)\<[`TreeRow`](TreeRow.md)\<`S`\>\>

  ↳ **`AreaModelTree`**

## Table of contents

### Constructors

- [constructor](AreaModelTree.md#constructor)

### Properties

- [areaIdent](AreaModelTree.md#areaident)
- [cellRenderers](AreaModelTree.md#cellrenderers)
- [columnDefs](AreaModelTree.md#columndefs)
- [defaultRowHeight](AreaModelTree.md#defaultrowheight)
- [filteredFlattenRows](AreaModelTree.md#filteredflattenrows)
- [flattenRows](AreaModelTree.md#flattenrows)
- [lastPredictFn](AreaModelTree.md#lastpredictfn)
- [properties](AreaModelTree.md#properties)
- [rowSelectionModel](AreaModelTree.md#rowselectionmodel)
- [rows](AreaModelTree.md#rows)
- [service](AreaModelTree.md#service)
- [sorterService](AreaModelTree.md#sorterservice)
- [type](AreaModelTree.md#type)
- [yPositions](AreaModelTree.md#ypositions)

### Methods

- [arrayMove](AreaModelTree.md#arraymove)
- [changeColumnOrder](AreaModelTree.md#changecolumnorder)
- [doFiltering](AreaModelTree.md#dofiltering)
- [doSort](AreaModelTree.md#dosort)
- [expandAllRecursive](AreaModelTree.md#expandallrecursive)
- [externalFilterChanged](AreaModelTree.md#externalfilterchanged)
- [genericTreeTableSortComparator](AreaModelTree.md#generictreetablesortcomparator)
- [getCellRenderer](AreaModelTree.md#getcellrenderer)
- [getColspanAt](AreaModelTree.md#getcolspanat)
- [getCustomClassesAt](AreaModelTree.md#getcustomclassesat)
- [getCustomStyleAt](AreaModelTree.md#getcustomstyleat)
- [getFilteredFlattenRows](AreaModelTree.md#getfilteredflattenrows)
- [getMaxColspan](AreaModelTree.md#getmaxcolspan)
- [getMaxRowspan](AreaModelTree.md#getmaxrowspan)
- [getPropertyValue](AreaModelTree.md#getpropertyvalue)
- [getRowByIndex](AreaModelTree.md#getrowbyindex)
- [getRowCount](AreaModelTree.md#getrowcount)
- [getRowHeight](AreaModelTree.md#getrowheight)
- [getRowspanAt](AreaModelTree.md#getrowspanat)
- [getTextValueAt](AreaModelTree.md#gettextvalueat)
- [getTooltipAt](AreaModelTree.md#gettooltipat)
- [getValueAt](AreaModelTree.md#getvalueat)
- [getValueByT](AreaModelTree.md#getvaluebyt)
- [getYPosByRowIndex](AreaModelTree.md#getyposbyrowindex)
- [init](AreaModelTree.md#init)
- [isEditable](AreaModelTree.md#iseditable)
- [isFilterable](AreaModelTree.md#isfilterable)
- [isRowCheckable](AreaModelTree.md#isrowcheckable)
- [isRowChecked](AreaModelTree.md#isrowchecked)
- [isSelectable](AreaModelTree.md#isselectable)
- [recalcVisibleTreeRows](AreaModelTree.md#recalcvisibletreerows)
- [setAllParentsOk](AreaModelTree.md#setallparentsok)
- [setPropertyValue](AreaModelTree.md#setpropertyvalue)
- [setRowChecked](AreaModelTree.md#setrowchecked)
- [setValue](AreaModelTree.md#setvalue)
- [sort](AreaModelTree.md#sort)
- [toggleExpandCollapseAll](AreaModelTree.md#toggleexpandcollapseall)
- [treeSort](AreaModelTree.md#treesort)

## Constructors

### constructor

• **new AreaModelTree**\<`S`\>(`areaIdent`, `rows`, `defaultRowHeight`, `columnDefs?`): [`AreaModelTree`](AreaModelTree.md)\<`S`\>

#### Type parameters

| Name |
| :------ |
| `S` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `areaIdent` | [`AreaIdent`](../modules.md#areaident) | `undefined` |
| `rows` | [`TreeRowIf`](../interfaces/TreeRowIf.md)\<`S`\>[] | `undefined` |
| `defaultRowHeight` | `number` | `undefined` |
| `columnDefs` | [`ColumnDefIf`](../interfaces/ColumnDefIf.md)[] | `[]` |

#### Returns

[`AreaModelTree`](AreaModelTree.md)\<`S`\>

#### Overrides

[AbstractAreaModel](AbstractAreaModel.md).[constructor](AbstractAreaModel.md#constructor)

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-tree.ts:29](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/area-model-tree.ts#L29)

## Properties

### areaIdent

• **areaIdent**: [`AreaIdent`](../modules.md#areaident)

The identifier for one of the areas: header, body, footer.

#### Inherited from

[AbstractAreaModel](AbstractAreaModel.md).[areaIdent](AbstractAreaModel.md#areaident)

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-tree.ts:30](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/area-model-tree.ts#L30)

___

### cellRenderers

• `Protected` **cellRenderers**: (`undefined` \| [`CellRendererIf`](../interfaces/CellRendererIf.md))[]

#### Inherited from

[AbstractAreaModel](AbstractAreaModel.md).[cellRenderers](AbstractAreaModel.md#cellrenderers)

#### Defined in

[lib/table/data/tablemodel/areamodel/abstract-area-model.ts:15](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/abstract-area-model.ts#L15)

___

### columnDefs

• `Protected` **columnDefs**: [`ColumnDefIf`](../interfaces/ColumnDefIf.md)[] = `[]`

#### Inherited from

[AbstractAreaModel](AbstractAreaModel.md).[columnDefs](AbstractAreaModel.md#columndefs)

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-tree.ts:33](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/area-model-tree.ts#L33)

___

### defaultRowHeight

• **defaultRowHeight**: `number`

#### Inherited from

[AbstractAreaModel](AbstractAreaModel.md).[defaultRowHeight](AbstractAreaModel.md#defaultrowheight)

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-tree.ts:32](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/area-model-tree.ts#L32)

___

### filteredFlattenRows

• `Private` **filteredFlattenRows**: [`TreeRowIf`](../interfaces/TreeRowIf.md)\<`S`\>[]

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-tree.ts:25](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/area-model-tree.ts#L25)

___

### flattenRows

• `Private` **flattenRows**: [`TreeRowIf`](../interfaces/TreeRowIf.md)\<`S`\>[]

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-tree.ts:26](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/area-model-tree.ts#L26)

___

### lastPredictFn

• `Private` `Optional` **lastPredictFn**: [`FilterFunction`](../modules.md#filterfunction)\<`any`\>

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-tree.ts:27](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/area-model-tree.ts#L27)

___

### properties

• `Protected` `Readonly` **properties**: `string`[]

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-tree.ts:21](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/area-model-tree.ts#L21)

___

### rowSelectionModel

• **rowSelectionModel**: `undefined` \| [`CheckboxModelIf`](../interfaces/CheckboxModelIf.md)\<`any`\> = `undefined`

A model and controller for a row checkbox selection

#### Inherited from

[AbstractAreaModel](AbstractAreaModel.md).[rowSelectionModel](AbstractAreaModel.md#rowselectionmodel)

#### Defined in

[lib/table/data/tablemodel/areamodel/abstract-area-model.ts:14](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/abstract-area-model.ts#L14)

___

### rows

• `Readonly` **rows**: [`TreeRowIf`](../interfaces/TreeRowIf.md)\<`S`\>[]

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-tree.ts:31](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/area-model-tree.ts#L31)

___

### service

• `Private` `Readonly` **service**: [`TreeRowService`](TreeRowService.md)

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-tree.ts:24](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/area-model-tree.ts#L24)

___

### sorterService

• `Protected` **sorterService**: `SorterService`

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-tree.ts:22](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/area-model-tree.ts#L22)

___

### type

• **type**: `string` = `'AreaModelTree'`

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-tree.ts:19](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/area-model-tree.ts#L19)

___

### yPositions

• `Protected` **yPositions**: `number`[] = `[]`

#### Inherited from

[AbstractAreaModel](AbstractAreaModel.md).[yPositions](AbstractAreaModel.md#ypositions)

#### Defined in

[lib/table/data/tablemodel/areamodel/abstract-area-model.ts:16](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/abstract-area-model.ts#L16)

## Methods

### arrayMove

▸ **arrayMove**(`arr`, `fromIndex`, `toIndex`): `any`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `arr` | `any`[] |
| `fromIndex` | `number` |
| `toIndex` | `number` |

#### Returns

`any`[]

#### Inherited from

[AbstractAreaModel](AbstractAreaModel.md).[arrayMove](AbstractAreaModel.md#arraymove)

#### Defined in

[lib/table/data/tablemodel/areamodel/abstract-area-model.ts:171](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/abstract-area-model.ts#L171)

___

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

#### Overrides

[AbstractAreaModel](AbstractAreaModel.md).[changeColumnOrder](AbstractAreaModel.md#changecolumnorder)

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-tree.ts:41](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/area-model-tree.ts#L41)

___

### doFiltering

▸ **doFiltering**(): `void`

#### Returns

`void`

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-tree.ts:183](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/area-model-tree.ts#L183)

___

### doSort

▸ **doSort**(`sortItems`): `boolean`

If the 'restore sort' option is set (see), this method will be triggered automatically by the table,

#### Parameters

| Name | Type |
| :------ | :------ |
| `sortItems` | [`SortItem`](SortItem.md)[] |

#### Returns

`boolean`

#### Overrides

[AbstractAreaModel](AbstractAreaModel.md).[doSort](AbstractAreaModel.md#dosort)

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-tree.ts:109](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/area-model-tree.ts#L109)

___

### expandAllRecursive

▸ **expandAllRecursive**(`arr`, `expanded`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `arr` | [`TreeRowIf`](../interfaces/TreeRowIf.md)\<`S`\>[] |
| `expanded` | `boolean` |

#### Returns

`void`

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-tree.ts:174](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/area-model-tree.ts#L174)

___

### externalFilterChanged

▸ **externalFilterChanged**\<`S`\>(`predictFn`): `void`

Will be called internally, when a filtering is trigger.

#### Type parameters

| Name |
| :------ |
| `S` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predictFn` | [`FilterFunction`](../modules.md#filterfunction)\<`S`\> | Defines, what row are invisible or visible after filtering. |

#### Returns

`void`

#### Overrides

[AbstractAreaModel](AbstractAreaModel.md).[externalFilterChanged](AbstractAreaModel.md#externalfilterchanged)

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-tree.ts:104](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/area-model-tree.ts#L104)

___

### genericTreeTableSortComparator

▸ **genericTreeTableSortComparator**(`property`, `f`): (`a`: [`TreeRowIf`](../interfaces/TreeRowIf.md)\<`S`\>, `b`: [`TreeRowIf`](../interfaces/TreeRowIf.md)\<`S`\>) => `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `property` | `string` |
| `f` | `number` |

#### Returns

`fn`

▸ (`a`, `b`): `number`

##### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`TreeRowIf`](../interfaces/TreeRowIf.md)\<`S`\> |
| `b` | [`TreeRowIf`](../interfaces/TreeRowIf.md)\<`S`\> |

##### Returns

`number`

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-tree.ts:156](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/area-model-tree.ts#L156)

___

### getCellRenderer

▸ **getCellRenderer**(`_rowIndex`, `columnIndex`): `undefined` \| [`CellRendererIf`](../interfaces/CellRendererIf.md)

Returns a cell renderer class for the given cell (rowIndex/columnIndex).
If the return value is undefined, no renderer is used and the model value will be rendered directly in the cell.

#### Parameters

| Name | Type |
| :------ | :------ |
| `_rowIndex` | `number` |
| `columnIndex` | `number` |

#### Returns

`undefined` \| [`CellRendererIf`](../interfaces/CellRendererIf.md)

#### Inherited from

[AbstractAreaModel](AbstractAreaModel.md).[getCellRenderer](AbstractAreaModel.md#getcellrenderer)

#### Defined in

[lib/table/data/tablemodel/areamodel/abstract-area-model.ts:42](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/abstract-area-model.ts#L42)

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

#### Inherited from

[AbstractAreaModel](AbstractAreaModel.md).[getColspanAt](AbstractAreaModel.md#getcolspanat)

#### Defined in

[lib/table/data/tablemodel/areamodel/abstract-area-model.ts:49](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/abstract-area-model.ts#L49)

___

### getCustomClassesAt

▸ **getCustomClassesAt**(`rowIndex`, `_columnIndex`): `string`[]

This method can be used to return a list of css classes for the given cell

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rowIndex` | `number` | row index of the cell |
| `_columnIndex` | `number` | column index of the cell |

#### Returns

`string`[]

#### Overrides

[AbstractAreaModel](AbstractAreaModel.md).[getCustomClassesAt](AbstractAreaModel.md#getcustomclassesat)

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-tree.ts:84](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/area-model-tree.ts#L84)

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

#### Inherited from

[AbstractAreaModel](AbstractAreaModel.md).[getCustomStyleAt](AbstractAreaModel.md#getcustomstyleat)

#### Defined in

[lib/table/data/tablemodel/areamodel/abstract-area-model.ts:57](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/abstract-area-model.ts#L57)

___

### getFilteredFlattenRows

▸ **getFilteredFlattenRows**(): [`TreeRowIf`](../interfaces/TreeRowIf.md)\<`S`\>[]

#### Returns

[`TreeRowIf`](../interfaces/TreeRowIf.md)\<`S`\>[]

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-tree.ts:51](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/area-model-tree.ts#L51)

___

### getMaxColspan

▸ **getMaxColspan**(): `number`

This return value is internally used to optimize the render performance.
Set this value to the lowest possible value. If the model has no colspan,
a value of 0 would be good. The dafault is 32. If your model has a colspan
cell greater 32, don't forget to increase this value.

#### Returns

`number`

#### Inherited from

[AbstractAreaModel](AbstractAreaModel.md).[getMaxColspan](AbstractAreaModel.md#getmaxcolspan)

#### Defined in

[lib/table/data/tablemodel/areamodel/abstract-area-model.ts:85](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/abstract-area-model.ts#L85)

___

### getMaxRowspan

▸ **getMaxRowspan**(): `number`

This return value is internally used to optimize the render performance.
Set this value to the lowest possible value. If the model has no rowspan,
a value of 0 would be good. The default is 32. If your model has a rowspan
cell greater 32, don't forget to increase this value.

#### Returns

`number`

#### Inherited from

[AbstractAreaModel](AbstractAreaModel.md).[getMaxRowspan](AbstractAreaModel.md#getmaxrowspan)

#### Defined in

[lib/table/data/tablemodel/areamodel/abstract-area-model.ts:89](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/abstract-area-model.ts#L89)

___

### getPropertyValue

▸ **getPropertyValue**(`o`, `props`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `o` | `any` |
| `props` | `string`[] |

#### Returns

`any`

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-tree.ts:219](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/area-model-tree.ts#L219)

___

### getRowByIndex

▸ **getRowByIndex**(`idx`): `undefined` \| [`TreeRowIf`](../interfaces/TreeRowIf.md)\<`S`\>

Returns the row of the model, which correspond to the rowIndex.

#### Parameters

| Name | Type |
| :------ | :------ |
| `idx` | `number` |

#### Returns

`undefined` \| [`TreeRowIf`](../interfaces/TreeRowIf.md)\<`S`\>

#### Overrides

[AbstractAreaModel](AbstractAreaModel.md).[getRowByIndex](AbstractAreaModel.md#getrowbyindex)

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-tree.ts:89](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/area-model-tree.ts#L89)

___

### getRowCount

▸ **getRowCount**(): `number`

Returns the number of rows of the area

#### Returns

`number`

#### Overrides

[AbstractAreaModel](AbstractAreaModel.md).[getRowCount](AbstractAreaModel.md#getrowcount)

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-tree.ts:55](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/area-model-tree.ts#L55)

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

#### Overrides

[AbstractAreaModel](AbstractAreaModel.md).[getRowHeight](AbstractAreaModel.md#getrowheight)

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-tree.ts:80](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/area-model-tree.ts#L80)

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

#### Inherited from

[AbstractAreaModel](AbstractAreaModel.md).[getRowspanAt](AbstractAreaModel.md#getrowspanat)

#### Defined in

[lib/table/data/tablemodel/areamodel/abstract-area-model.ts:61](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/abstract-area-model.ts#L61)

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

#### Inherited from

[AbstractAreaModel](AbstractAreaModel.md).[getTextValueAt](AbstractAreaModel.md#gettextvalueat)

#### Defined in

[lib/table/data/tablemodel/areamodel/abstract-area-model.ts:31](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/abstract-area-model.ts#L31)

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

#### Inherited from

[AbstractAreaModel](AbstractAreaModel.md).[getTooltipAt](AbstractAreaModel.md#gettooltipat)

#### Defined in

[lib/table/data/tablemodel/areamodel/abstract-area-model.ts:36](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/abstract-area-model.ts#L36)

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

#### Overrides

[AbstractAreaModel](AbstractAreaModel.md).[getValueAt](AbstractAreaModel.md#getvalueat)

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-tree.ts:65](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/area-model-tree.ts#L65)

___

### getValueByT

▸ **getValueByT**(`t`, `property`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `t` | `S` |
| `property` | `string` |

#### Returns

`any`

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-tree.ts:93](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/area-model-tree.ts#L93)

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

#### Inherited from

[AbstractAreaModel](AbstractAreaModel.md).[getYPosByRowIndex](AbstractAreaModel.md#getyposbyrowindex)

#### Defined in

[lib/table/data/tablemodel/areamodel/abstract-area-model.ts:94](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/abstract-area-model.ts#L94)

___

### init

▸ **init**(): `void`

Internally used by TableModel.

#### Returns

`void`

#### Inherited from

[AbstractAreaModel](AbstractAreaModel.md).[init](AbstractAreaModel.md#init)

#### Defined in

[lib/table/data/tablemodel/areamodel/abstract-area-model.ts:102](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/abstract-area-model.ts#L102)

___

### isEditable

▸ **isEditable**(`_rowIndex`, `columnIndex`): `boolean`

If this method returns true, the cell can be edited by the user.

#### Parameters

| Name | Type |
| :------ | :------ |
| `_rowIndex` | `number` |
| `columnIndex` | `number` |

#### Returns

`boolean`

#### Inherited from

[AbstractAreaModel](AbstractAreaModel.md).[isEditable](AbstractAreaModel.md#iseditable)

#### Defined in

[lib/table/data/tablemodel/areamodel/abstract-area-model.ts:126](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/abstract-area-model.ts#L126)

___

### isFilterable

▸ **isFilterable**(): `boolean`

If true, the table is filterable. Rows can be filtered with help of #externalFilterChanged()

#### Returns

`boolean`

#### Inherited from

[AbstractAreaModel](AbstractAreaModel.md).[isFilterable](AbstractAreaModel.md#isfilterable)

#### Defined in

[lib/table/data/tablemodel/areamodel/abstract-area-model.ts:112](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/abstract-area-model.ts#L112)

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

#### Inherited from

[AbstractAreaModel](AbstractAreaModel.md).[isRowCheckable](AbstractAreaModel.md#isrowcheckable)

#### Defined in

[lib/table/data/tablemodel/areamodel/abstract-area-model.ts:69](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/abstract-area-model.ts#L69)

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

#### Inherited from

[AbstractAreaModel](AbstractAreaModel.md).[isRowChecked](AbstractAreaModel.md#isrowchecked)

#### Defined in

[lib/table/data/tablemodel/areamodel/abstract-area-model.ts:73](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/abstract-area-model.ts#L73)

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

#### Inherited from

[AbstractAreaModel](AbstractAreaModel.md).[isSelectable](AbstractAreaModel.md#isselectable)

#### Defined in

[lib/table/data/tablemodel/areamodel/abstract-area-model.ts:147](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/abstract-area-model.ts#L147)

___

### recalcVisibleTreeRows

▸ **recalcVisibleTreeRows**(): `void`

#### Returns

`void`

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-tree.ts:47](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/area-model-tree.ts#L47)

___

### setAllParentsOk

▸ **setAllParentsOk**(`item`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | [`TreeRowIf`](../interfaces/TreeRowIf.md)\<`any`\> |

#### Returns

`boolean`

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-tree.ts:129](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/area-model-tree.ts#L129)

___

### setPropertyValue

▸ **setPropertyValue**(`o`, `props`, `value`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `o` | `any` |
| `props` | `string`[] |
| `value` | `any` |

#### Returns

`boolean`

#### Inherited from

[AbstractAreaModel](AbstractAreaModel.md).[setPropertyValue](AbstractAreaModel.md#setpropertyvalue)

#### Defined in

[lib/table/data/tablemodel/areamodel/abstract-area-model.ts:156](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/abstract-area-model.ts#L156)

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

#### Inherited from

[AbstractAreaModel](AbstractAreaModel.md).[setRowChecked](AbstractAreaModel.md#setrowchecked)

#### Defined in

[lib/table/data/tablemodel/areamodel/abstract-area-model.ts:78](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/abstract-area-model.ts#L78)

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

#### Overrides

[AbstractAreaModel](AbstractAreaModel.md).[setValue](AbstractAreaModel.md#setvalue)

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-tree.ts:137](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/area-model-tree.ts#L137)

___

### sort

▸ **sort**(`_compareFn?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_compareFn?` | (`a`: `any`, `b`: `any`) => `number` |

#### Returns

`void`

#### Inherited from

[AbstractAreaModel](AbstractAreaModel.md).[sort](AbstractAreaModel.md#sort)

#### Defined in

[lib/table/data/tablemodel/areamodel/abstract-area-model.ts:121](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/abstract-area-model.ts#L121)

___

### toggleExpandCollapseAll

▸ **toggleExpandCollapseAll**(`expanded`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `expanded` | `boolean` |

#### Returns

`void`

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-tree.ts:122](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/area-model-tree.ts#L122)

___

### treeSort

▸ **treeSort**(`rows`, `property`, `f`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rows` | [`TreeRowIf`](../interfaces/TreeRowIf.md)\<`S`\>[] |
| `property` | `string` |
| `f` | `number` |

#### Returns

`void`

#### Defined in

[lib/table/data/tablemodel/areamodel/area-model-tree.ts:229](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/areamodel/area-model-tree.ts#L229)
