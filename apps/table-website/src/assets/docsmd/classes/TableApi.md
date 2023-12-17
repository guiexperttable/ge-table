[@guiexpert/table](../README.md) / [Exports](../modules.md) / TableApi

# Class: TableApi

## Table of contents

### Constructors

- [constructor](TableApi.md#constructor)

### Properties

- [tableScope](TableApi.md#tablescope)

### Methods

- [externalFilterChanged](TableApi.md#externalfilterchanged)
- [isColumnVisible](TableApi.md#iscolumnvisible)
- [isFooterVisible](TableApi.md#isfootervisible)
- [isHeaderVisible](TableApi.md#isheadervisible)
- [repaint](TableApi.md#repaint)
- [scrollToIndex](TableApi.md#scrolltoindex)
- [scrollToPixel](TableApi.md#scrolltopixel)
- [setColumnVisible](TableApi.md#setcolumnvisible)
- [setFooterVisible](TableApi.md#setfootervisible)
- [setHeaderVisible](TableApi.md#setheadervisible)
- [updateCells](TableApi.md#updatecells)

## Constructors

### constructor

• **new TableApi**(`tableScope`): [`TableApi`](TableApi.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `tableScope` | [`TableScope`](TableScope.md) |

#### Returns

[`TableApi`](TableApi.md)

#### Defined in

[lib/table/table-api.ts:8](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/table-api.ts#L8)

## Properties

### tableScope

• `Private` `Readonly` **tableScope**: [`TableScope`](TableScope.md)

#### Defined in

[lib/table/table-api.ts:9](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/table-api.ts#L9)

## Methods

### externalFilterChanged

▸ **externalFilterChanged**(): `void`

Notifies that the external filter has changed.

#### Returns

`void`

#### Defined in

[lib/table/table-api.ts:34](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/table-api.ts#L34)

___

### isColumnVisible

▸ **isColumnVisible**(`_column`): `boolean`

Returns whether a column is visible or not.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_column` | `number` \| [`ColumnDefIf`](../interfaces/ColumnDefIf.md) | The column index or the column definition. |

#### Returns

`boolean`

- True if the column is visible, false otherwise.

#### Defined in

[lib/table/table-api.ts:91](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/table-api.ts#L91)

___

### isFooterVisible

▸ **isFooterVisible**(): `boolean`

Determines if the footer is visible.

#### Returns

`boolean`

True if the footer is visible, false otherwise.

#### Defined in

[lib/table/table-api.ts:121](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/table-api.ts#L121)

___

### isHeaderVisible

▸ **isHeaderVisible**(): `boolean`

Checks if the header is visible.

#### Returns

`boolean`

- Returns true if the header is visible, otherwise returns false.

#### Defined in

[lib/table/table-api.ts:101](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/table-api.ts#L101)

___

### repaint

▸ **repaint**(): `void`

Repaints the table.

This method calls the repaint method of the tableScope object
to update and redraw the table based on the latest data.

#### Returns

`void`

#### Defined in

[lib/table/table-api.ts:131](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/table-api.ts#L131)

___

### scrollToIndex

▸ **scrollToIndex**(`indexX?`, `indexY?`): `void`

Scrolls to the specified index in both horizontal and vertical directions.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `indexX` | `number` | `0` | The index of the column to scroll to in the horizontal direction. Default is 0. |
| `indexY` | `number` | `0` | The index of the row to scroll to in the vertical direction. Default is 0. |

#### Returns

`void`

undefined

#### Defined in

[lib/table/table-api.ts:58](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/table-api.ts#L58)

___

### scrollToPixel

▸ **scrollToPixel**(`px?`, `py?`): `void`

Scrolls the table body to the specified pixel coordinates.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `px` | `number` | `0` | The horizontal pixel coordinate to scroll to. Defaults to 0. |
| `py` | `number` | `0` | The vertical pixel coordinate to scroll to. Defaults to 0. |

#### Returns

`void`

#### Defined in

[lib/table/table-api.ts:45](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/table-api.ts#L45)

___

### setColumnVisible

▸ **setColumnVisible**(`_column`, `_visible?`): `void`

Sets the visibility of a column in the table.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `_column` | `number` \| [`ColumnDefIf`](../interfaces/ColumnDefIf.md) | `undefined` |
| `_visible` | `boolean` | `true` |

#### Returns

`void`

- There is no return value.

#### Defined in

[lib/table/table-api.ts:81](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/table-api.ts#L81)

___

### setFooterVisible

▸ **setFooterVisible**(`_visible?`): `void`

Sets the visibility of the footer.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `_visible` | `boolean` | `true` | Indicates whether the footer should be visible or not. Default value is true. |

#### Returns

`void`

- This method does not return any value.

#### Defined in

[lib/table/table-api.ts:112](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/table-api.ts#L112)

___

### setHeaderVisible

▸ **setHeaderVisible**(`_visible?`): `void`

Sets whether the header is visible or not.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `_visible` | `boolean` | `true` | A boolean value indicating whether the header should be visible. Default value is true. |

#### Returns

`void`

undefined

#### Defined in

[lib/table/table-api.ts:69](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/table-api.ts#L69)

___

### updateCells

▸ **updateCells**(`events`, `repaintAll?`): `void`

Updates the cells in the table based on the provided events.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `events` | [`TableCellUpdateEventIf`](../interfaces/TableCellUpdateEventIf.md)[] | `undefined` | The array of events representing the updates to perform on the cells. |
| `repaintAll?` | `boolean` | `false` | Optional parameter indicating whether to repaint all cells or not. Default value is false. If true, the full table will be rendered. If false, the table cell will be rendered immediately. |

#### Returns

`void`

- This method doesn't return anything.

#### Defined in

[lib/table/table-api.ts:22](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/table-api.ts#L22)
