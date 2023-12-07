[@guiexpert/table](../README.md) / [Exports](../modules.md) / TableModelIf

# Interface: TableModelIf

The TableModelIf is on one hand a container for the header, body, and footer models
(see : #getAreaModel, and #AreaModelIf), and on the other hand the master of
the column information (#getColumnCount(), #getColumnWidth(columnIndex: number)).

If getFixedLeftColumnCount() returns a value greater than 0, a fixed west area will be rendered in the
header, body, and footer. A value greater than 0 for getFixedLeftColumnCount()
will result in the presence of an east area.
<pre>
 +----------------+-------------------+--------------+
 |  header/west   |  header/center    | header/east  |
 +----------------+-------------------+--------------+
 |  body/west     |  body/center      | body/east    |
 +----------------+-------------------+--------------+
 |  footer/west   |  footer/center    | footer/east  |
 +----------------+-------------------+--------------+</pre>

## Implemented by

- [`TableModel`](../classes/TableModel.md)

## Table of contents

### Methods

- [changeColumnOrder](TableModelIf.md#changecolumnorder)
- [doSort](TableModelIf.md#dosort)
- [externalFilterChanged](TableModelIf.md#externalfilterchanged)
- [getAreaModel](TableModelIf.md#getareamodel)
- [getBodyModel](TableModelIf.md#getbodymodel)
- [getBodyRowByIndex](TableModelIf.md#getbodyrowbyindex)
- [getColumnCount](TableModelIf.md#getcolumncount)
- [getColumnDef](TableModelIf.md#getcolumndef)
- [getColumnDefs](TableModelIf.md#getcolumndefs)
- [getColumnProperty](TableModelIf.md#getcolumnproperty)
- [getColumnWidth](TableModelIf.md#getcolumnwidth)
- [getContentHeightInPixel](TableModelIf.md#getcontentheightinpixel)
- [getContentWidthInPixel](TableModelIf.md#getcontentwidthinpixel)
- [getFixedLeftColumnCount](TableModelIf.md#getfixedleftcolumncount)
- [getFixedRightColumnCount](TableModelIf.md#getfixedrightcolumncount)
- [getPadding](TableModelIf.md#getpadding)
- [getRowHeight](TableModelIf.md#getrowheight)
- [getSelectionModel](TableModelIf.md#getselectionmodel)
- [getXPosByColumnIndex](TableModelIf.md#getxposbycolumnindex)
- [init](TableModelIf.md#init)
- [isFooterVisibe](TableModelIf.md#isfootervisibe)
- [isHeaderVisibe](TableModelIf.md#isheadervisibe)
- [isRowCheckboxVisible](TableModelIf.md#isrowcheckboxvisible)
- [isSortable](TableModelIf.md#issortable)
- [recalcHeightAndPadding](TableModelIf.md#recalcheightandpadding)
- [recalcPadding](TableModelIf.md#recalcpadding)
- [recalcSize](TableModelIf.md#recalcsize)
- [setColumnWidth](TableModelIf.md#setcolumnwidth)

## Methods

### changeColumnOrder

▸ **changeColumnOrder**(`sourceColumnIndex`, `targetColumnIndex`): `void`

Moves a column from the source column index to the target column index.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `sourceColumnIndex` | `number` | The index of the column to be moved. |
| `targetColumnIndex` | `number` | The index where the column will be moved to. |

#### Returns

`void`

- This method does not return anything.

#### Defined in

[lib/table/data/tablemodel/table-model.if.ts:37](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/data/tablemodel/table-model.if.ts#L37)

___

### doSort

▸ **doSort**(`sortItems`): `boolean`

Sorts an array of SortItem objects based on a predetermined sorting algorithm.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `sortItems` | [`SortItem`](../classes/SortItem.md)[] | An array of SortItem objects to be sorted. |

#### Returns

`boolean`

- Returns true if the sorting was successful, false otherwise.

#### Defined in

[lib/table/data/tablemodel/table-model.if.ts:248](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/data/tablemodel/table-model.if.ts#L248)

___

### externalFilterChanged

▸ **externalFilterChanged**\<`T`\>(`predictFn`): `void`

This is triggered when an external filter has changed.

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | The type of elements being filtered. |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predictFn` | [`FilterFunction`](../modules.md#filterfunction)\<`T`\> | A function that takes an element of type T and returns a boolean indicating whether the element satisfies the filter conditions. |

#### Returns

`void`

#### Defined in

[lib/table/data/tablemodel/table-model.if.ts:240](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/data/tablemodel/table-model.if.ts#L240)

___

### getAreaModel

▸ **getAreaModel**(`rowAreaIdent`): [`AreaModelIf`](AreaModelIf.md)

Retrieves the area model based on the given row area identifier.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rowAreaIdent` | [`AreaIdent`](../modules.md#areaident) | The identifier of the row area. |

#### Returns

[`AreaModelIf`](AreaModelIf.md)

The area model corresponding to the provided row area identifier.

#### Defined in

[lib/table/data/tablemodel/table-model.if.ts:82](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/data/tablemodel/table-model.if.ts#L82)

___

### getBodyModel

▸ **getBodyModel**(): [`AreaModelIf`](AreaModelIf.md)

Retrieves the body model.

#### Returns

[`AreaModelIf`](AreaModelIf.md)

The body model representing an area.

#### Defined in

[lib/table/data/tablemodel/table-model.if.ts:89](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/data/tablemodel/table-model.if.ts#L89)

___

### getBodyRowByIndex

▸ **getBodyRowByIndex**(`rowIndex`): `any`

Retrieves the body row at the specified index.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rowIndex` | `number` | The index of the desired body row. |

#### Returns

`any`

- The body row object at the specified index.

#### Defined in

[lib/table/data/tablemodel/table-model.if.ts:164](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/data/tablemodel/table-model.if.ts#L164)

___

### getColumnCount

▸ **getColumnCount**(): `number`

Returns the number of columns in a dataset.

#### Returns

`number`

The number of columns in the dataset.

#### Defined in

[lib/table/data/tablemodel/table-model.if.ts:58](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/data/tablemodel/table-model.if.ts#L58)

___

### getColumnDef

▸ **getColumnDef**(`index`): `undefined` \| [`ColumnDefIf`](ColumnDefIf.md)

Retrieves the column definition for the specified index.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | The index of the column to retrieve the definition for. |

#### Returns

`undefined` \| [`ColumnDefIf`](ColumnDefIf.md)

- The column definition for the specified index, or undefined if not found.

#### Defined in

[lib/table/data/tablemodel/table-model.if.ts:141](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/data/tablemodel/table-model.if.ts#L141)

___

### getColumnDefs

▸ **getColumnDefs**(): `undefined` \| [`ColumnDefIf`](ColumnDefIf.md)[]

Retrieves the column definitions for a table.

#### Returns

`undefined` \| [`ColumnDefIf`](ColumnDefIf.md)[]

An array of column definitions or undefined if there are no column definitions.

#### Defined in

[lib/table/data/tablemodel/table-model.if.ts:148](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/data/tablemodel/table-model.if.ts#L148)

___

### getColumnProperty

▸ **getColumnProperty**(`columnIndex`): `string`

Retrieves the property of a specific column.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `columnIndex` | `number` | The index of the column. |

#### Returns

`string`

The property of the column.

#### Defined in

[lib/table/data/tablemodel/table-model.if.ts:156](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/data/tablemodel/table-model.if.ts#L156)

___

### getColumnWidth

▸ **getColumnWidth**(`columnIndex`): `number`

Retrieves the width (in pixels) of a specific column.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `columnIndex` | `number` | The index of the column to get the width of. |

#### Returns

`number`

The width of the specified column.

#### Defined in

[lib/table/data/tablemodel/table-model.if.ts:66](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/data/tablemodel/table-model.if.ts#L66)

▸ **getColumnWidth**(`columnIndex`): `number`

Retrieves the width of a given column in the table.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `columnIndex` | `number` | The index of the column for which to get the width. |

#### Returns

`number`

The width of the column in pixels.

#### Defined in

[lib/table/data/tablemodel/table-model.if.ts:172](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/data/tablemodel/table-model.if.ts#L172)

___

### getContentHeightInPixel

▸ **getContentHeightInPixel**(): `number`

Retrieves the content height in pixels.

#### Returns

`number`

The height of the content in pixels.

#### Defined in

[lib/table/data/tablemodel/table-model.if.ts:221](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/data/tablemodel/table-model.if.ts#L221)

___

### getContentWidthInPixel

▸ **getContentWidthInPixel**(): `number`

Returns the content width in pixels.

#### Returns

`number`

The width of the content in pixels.

#### Defined in

[lib/table/data/tablemodel/table-model.if.ts:228](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/data/tablemodel/table-model.if.ts#L228)

___

### getFixedLeftColumnCount

▸ **getFixedLeftColumnCount**(): `number`

Retrieves the number of fixed left columns.

#### Returns

`number`

The count of fixed left columns.

#### Defined in

[lib/table/data/tablemodel/table-model.if.ts:96](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/data/tablemodel/table-model.if.ts#L96)

___

### getFixedRightColumnCount

▸ **getFixedRightColumnCount**(): `number`

Retrieves the count of fixed right columns.

#### Returns

`number`

The count of fixed right columns.

#### Defined in

[lib/table/data/tablemodel/table-model.if.ts:103](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/data/tablemodel/table-model.if.ts#L103)

___

### getPadding

▸ **getPadding**(): [`Padding`](../classes/Padding.md)

Retrieves the padding value of the element.

#### Returns

[`Padding`](../classes/Padding.md)

The padding value of the element.

#### Defined in

[lib/table/data/tablemodel/table-model.if.ts:214](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/data/tablemodel/table-model.if.ts#L214)

___

### getRowHeight

▸ **getRowHeight**(`rowAreaIdent`, `rowIndex`): `number`

Retrieves the height of a specific row in the provided row area.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rowAreaIdent` | [`AreaIdent`](../modules.md#areaident) | The identifier of the row area. |
| `rowIndex` | `number` | The index of the row for which to retrieve the height. |

#### Returns

`number`

The height of the specified row in pixels.

#### Defined in

[lib/table/data/tablemodel/table-model.if.ts:133](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/data/tablemodel/table-model.if.ts#L133)

___

### getSelectionModel

▸ **getSelectionModel**(): `undefined` \| [`SelectionModelIf`](SelectionModelIf.md)

Retrieves the selection model associated with the component.

#### Returns

`undefined` \| [`SelectionModelIf`](SelectionModelIf.md)

The selection model instance if available, or undefined if none is found.

#### Defined in

[lib/table/data/tablemodel/table-model.if.ts:255](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/data/tablemodel/table-model.if.ts#L255)

___

### getXPosByColumnIndex

▸ **getXPosByColumnIndex**(`columnIndex`): `number`

Returns the x position corresponding to the given column index.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `columnIndex` | `number` | The index of the column. |

#### Returns

`number`

- The x position corresponding to the given column index.

#### Defined in

[lib/table/data/tablemodel/table-model.if.ts:74](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/data/tablemodel/table-model.if.ts#L74)

___

### init

▸ **init**(): `void`

Triggered by TableScope.firstInit() after the table tag is attached to the dom.

#### Returns

`void`

#### Defined in

[lib/table/data/tablemodel/table-model.if.ts:51](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/data/tablemodel/table-model.if.ts#L51)

___

### isFooterVisibe

▸ **isFooterVisibe**(): `boolean`

Checks if the footer is visible.

#### Returns

`boolean`

Returns true if the footer is visible, otherwise returns false.

#### Defined in

[lib/table/data/tablemodel/table-model.if.ts:117](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/data/tablemodel/table-model.if.ts#L117)

___

### isHeaderVisibe

▸ **isHeaderVisibe**(): `boolean`

Checks if the header is visible.

#### Returns

`boolean`

- Returns true if the header is visible, false otherwise.

#### Defined in

[lib/table/data/tablemodel/table-model.if.ts:110](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/data/tablemodel/table-model.if.ts#L110)

___

### isRowCheckboxVisible

▸ **isRowCheckboxVisible**(): `boolean`

Determines if the row checkbox is visible.

#### Returns

`boolean`

True if the row checkbox is visible, false otherwise.

#### Defined in

[lib/table/data/tablemodel/table-model.if.ts:124](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/data/tablemodel/table-model.if.ts#L124)

___

### isSortable

▸ **isSortable**(`colIdx`): `boolean`

Checks if a column at the specified index is sortable.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `colIdx` | `number` | The index of the column to check. |

#### Returns

`boolean`

- true if the column is sortable, false otherwise.

#### Defined in

[lib/table/data/tablemodel/table-model.if.ts:45](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/data/tablemodel/table-model.if.ts#L45)

___

### recalcHeightAndPadding

▸ **recalcHeightAndPadding**(): `void`

Recalculates the height and padding of an element.

#### Returns

`void`

#### Defined in

[lib/table/data/tablemodel/table-model.if.ts:207](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/data/tablemodel/table-model.if.ts#L207)

___

### recalcPadding

▸ **recalcPadding**(): `void`

Recalculates the padding of the element based on its content.
This method updates the padding of the element to ensure that its content
is properly aligned and displayed.

#### Returns

`void`

#### Defined in

[lib/table/data/tablemodel/table-model.if.ts:200](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/data/tablemodel/table-model.if.ts#L200)

___

### recalcSize

▸ **recalcSize**(`clientWidth`): `void`

Recalculates the size of the element based on the provided client width.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `clientWidth` | `number` | The current client width of the element. |

#### Returns

`void`

#### Defined in

[lib/table/data/tablemodel/table-model.if.ts:191](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/data/tablemodel/table-model.if.ts#L191)

___

### setColumnWidth

▸ **setColumnWidth**(`columnIndex`, `width`): `void`

Sets the width of a column in the table.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `columnIndex` | `number` | The index of the column to set the width for. |
| `width` | `number` | The width to set for the column, in pixels. |

#### Returns

`void`

#### Defined in

[lib/table/data/tablemodel/table-model.if.ts:181](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/data/tablemodel/table-model.if.ts#L181)
