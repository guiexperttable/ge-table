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

#### Parameters

| Name | Type |
| :------ | :------ |
| `sourceColumnIndex` | `number` |
| `targetColumnIndex` | `number` |

#### Returns

`void`

#### Defined in

[lib/table/data/tablemodel/table-model.if.ts:29](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/data/tablemodel/table-model.if.ts#L29)

___

### doSort

▸ **doSort**(`sortItems`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `sortItems` | [`SortItem`](../classes/SortItem.md)[] |

#### Returns

`boolean`

#### Defined in

[lib/table/data/tablemodel/table-model.if.ts:87](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/data/tablemodel/table-model.if.ts#L87)

___

### externalFilterChanged

▸ **externalFilterChanged**\<`T`\>(`predictFn`): `void`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predictFn` | [`FilterFunction`](../modules.md#filterfunction)\<`T`\> |

#### Returns

`void`

#### Defined in

[lib/table/data/tablemodel/table-model.if.ts:85](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/data/tablemodel/table-model.if.ts#L85)

___

### getAreaModel

▸ **getAreaModel**(`rowAreaIdent`): [`AreaModelIf`](AreaModelIf.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `rowAreaIdent` | [`AreaIdent`](../modules.md#areaident) |

#### Returns

[`AreaModelIf`](AreaModelIf.md)

#### Defined in

[lib/table/data/tablemodel/table-model.if.ts:41](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/data/tablemodel/table-model.if.ts#L41)

___

### getBodyModel

▸ **getBodyModel**(): [`AreaModelIf`](AreaModelIf.md)

#### Returns

[`AreaModelIf`](AreaModelIf.md)

#### Defined in

[lib/table/data/tablemodel/table-model.if.ts:43](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/data/tablemodel/table-model.if.ts#L43)

___

### getBodyRowByIndex

▸ **getBodyRowByIndex**(`rowIndex`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rowIndex` | `number` |

#### Returns

`any`

#### Defined in

[lib/table/data/tablemodel/table-model.if.ts:63](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/data/tablemodel/table-model.if.ts#L63)

___

### getColumnCount

▸ **getColumnCount**(): `number`

#### Returns

`number`

#### Defined in

[lib/table/data/tablemodel/table-model.if.ts:35](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/data/tablemodel/table-model.if.ts#L35)

___

### getColumnDef

▸ **getColumnDef**(`index`): `undefined` \| [`ColumnDefIf`](ColumnDefIf.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

`undefined` \| [`ColumnDefIf`](ColumnDefIf.md)

#### Defined in

[lib/table/data/tablemodel/table-model.if.ts:57](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/data/tablemodel/table-model.if.ts#L57)

___

### getColumnDefs

▸ **getColumnDefs**(): `undefined` \| [`ColumnDefIf`](ColumnDefIf.md)[]

#### Returns

`undefined` \| [`ColumnDefIf`](ColumnDefIf.md)[]

#### Defined in

[lib/table/data/tablemodel/table-model.if.ts:59](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/data/tablemodel/table-model.if.ts#L59)

___

### getColumnProperty

▸ **getColumnProperty**(`columnIndex`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `columnIndex` | `number` |

#### Returns

`string`

#### Defined in

[lib/table/data/tablemodel/table-model.if.ts:61](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/data/tablemodel/table-model.if.ts#L61)

___

### getColumnWidth

▸ **getColumnWidth**(`columnIndex`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `columnIndex` | `number` |

#### Returns

`number`

#### Defined in

[lib/table/data/tablemodel/table-model.if.ts:37](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/data/tablemodel/table-model.if.ts#L37)

▸ **getColumnWidth**(`columnIndex`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `columnIndex` | `number` |

#### Returns

`number`

#### Defined in

[lib/table/data/tablemodel/table-model.if.ts:65](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/data/tablemodel/table-model.if.ts#L65)

___

### getContentHeightInPixel

▸ **getContentHeightInPixel**(): `number`

#### Returns

`number`

#### Defined in

[lib/table/data/tablemodel/table-model.if.ts:79](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/data/tablemodel/table-model.if.ts#L79)

___

### getContentWidthInPixel

▸ **getContentWidthInPixel**(): `number`

#### Returns

`number`

#### Defined in

[lib/table/data/tablemodel/table-model.if.ts:81](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/data/tablemodel/table-model.if.ts#L81)

___

### getFixedLeftColumnCount

▸ **getFixedLeftColumnCount**(): `number`

#### Returns

`number`

#### Defined in

[lib/table/data/tablemodel/table-model.if.ts:45](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/data/tablemodel/table-model.if.ts#L45)

___

### getFixedRightColumnCount

▸ **getFixedRightColumnCount**(): `number`

#### Returns

`number`

#### Defined in

[lib/table/data/tablemodel/table-model.if.ts:47](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/data/tablemodel/table-model.if.ts#L47)

___

### getPadding

▸ **getPadding**(): [`Padding`](../classes/Padding.md)

#### Returns

[`Padding`](../classes/Padding.md)

#### Defined in

[lib/table/data/tablemodel/table-model.if.ts:77](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/data/tablemodel/table-model.if.ts#L77)

___

### getRowHeight

▸ **getRowHeight**(`rowAreaIdent`, `rowIndex`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rowAreaIdent` | [`AreaIdent`](../modules.md#areaident) |
| `rowIndex` | `number` |

#### Returns

`number`

#### Defined in

[lib/table/data/tablemodel/table-model.if.ts:55](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/data/tablemodel/table-model.if.ts#L55)

___

### getSelectionModel

▸ **getSelectionModel**(): `undefined` \| [`SelectionModelIf`](SelectionModelIf.md)

#### Returns

`undefined` \| [`SelectionModelIf`](SelectionModelIf.md)

#### Defined in

[lib/table/data/tablemodel/table-model.if.ts:89](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/data/tablemodel/table-model.if.ts#L89)

___

### getXPosByColumnIndex

▸ **getXPosByColumnIndex**(`columnIndex`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `columnIndex` | `number` |

#### Returns

`number`

#### Defined in

[lib/table/data/tablemodel/table-model.if.ts:39](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/data/tablemodel/table-model.if.ts#L39)

___

### init

▸ **init**(): `void`

#### Returns

`void`

#### Defined in

[lib/table/data/tablemodel/table-model.if.ts:33](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/data/tablemodel/table-model.if.ts#L33)

___

### isFooterVisibe

▸ **isFooterVisibe**(): `boolean`

#### Returns

`boolean`

#### Defined in

[lib/table/data/tablemodel/table-model.if.ts:51](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/data/tablemodel/table-model.if.ts#L51)

___

### isHeaderVisibe

▸ **isHeaderVisibe**(): `boolean`

#### Returns

`boolean`

#### Defined in

[lib/table/data/tablemodel/table-model.if.ts:49](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/data/tablemodel/table-model.if.ts#L49)

___

### isRowCheckboxVisible

▸ **isRowCheckboxVisible**(): `boolean`

#### Returns

`boolean`

#### Defined in

[lib/table/data/tablemodel/table-model.if.ts:53](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/data/tablemodel/table-model.if.ts#L53)

___

### isSortable

▸ **isSortable**(`colIdx`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `colIdx` | `number` |

#### Returns

`boolean`

#### Defined in

[lib/table/data/tablemodel/table-model.if.ts:31](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/data/tablemodel/table-model.if.ts#L31)

___

### recalcHeightAndPadding

▸ **recalcHeightAndPadding**(): `void`

#### Returns

`void`

#### Defined in

[lib/table/data/tablemodel/table-model.if.ts:75](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/data/tablemodel/table-model.if.ts#L75)

___

### recalcPadding

▸ **recalcPadding**(): `void`

#### Returns

`void`

#### Defined in

[lib/table/data/tablemodel/table-model.if.ts:73](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/data/tablemodel/table-model.if.ts#L73)

___

### recalcSize

▸ **recalcSize**(`clientWidth`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `clientWidth` | `number` |

#### Returns

`void`

#### Defined in

[lib/table/data/tablemodel/table-model.if.ts:71](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/data/tablemodel/table-model.if.ts#L71)

___

### setColumnWidth

▸ **setColumnWidth**(`columnIndex`, `width`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `columnIndex` | `number` |
| `width` | `number` |

#### Returns

`void`

#### Defined in

[lib/table/data/tablemodel/table-model.if.ts:67](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/data/tablemodel/table-model.if.ts#L67)
