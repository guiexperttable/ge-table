[@guiexpert/table](../README.md) / [Exports](../modules.md) / TableModel

# Class: TableModel

This is a default implementation of TableModelIf.
Ths TableModel is on one hand a container for the header, body, and footer models
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
 +----------------+-------------------+--------------+ </pre>

## Implements

- [`TableModelIf`](../interfaces/TableModelIf.md)

## Table of contents

### Constructors

- [constructor](TableModel.md#constructor)

### Properties

- [bodyAreaModel](TableModel.md#bodyareamodel)
- [columnCount](TableModel.md#columncount)
- [columnDefs](TableModel.md#columndefs)
- [columnSizes](TableModel.md#columnsizes)
- [contentHeightInPx](TableModel.md#contentheightinpx)
- [contentWidthInPx](TableModel.md#contentwidthinpx)
- [defaultRowHeights](TableModel.md#defaultrowheights)
- [fixedLeftColumnCount](TableModel.md#fixedleftcolumncount)
- [fixedRightColumnCount](TableModel.md#fixedrightcolumncount)
- [footerAreaModel](TableModel.md#footerareamodel)
- [getSelectionModel](TableModel.md#getselectionmodel)
- [headerAreaModel](TableModel.md#headerareamodel)
- [overridingColumnWidth](TableModel.md#overridingcolumnwidth)
- [padding](TableModel.md#padding)
- [parentSize](TableModel.md#parentsize)
- [rowCheckboxVisible](TableModel.md#rowcheckboxvisible)
- [rowCount](TableModel.md#rowcount)
- [xPositions](TableModel.md#xpositions)

### Methods

- [arrayMove](TableModel.md#arraymove)
- [calcXPositions](TableModel.md#calcxpositions)
- [changeColumnOrder](TableModel.md#changecolumnorder)
- [doSort](TableModel.md#dosort)
- [externalFilterChanged](TableModel.md#externalfilterchanged)
- [getAreaHeight](TableModel.md#getareaheight)
- [getAreaModel](TableModel.md#getareamodel)
- [getBodyModel](TableModel.md#getbodymodel)
- [getBodyRowByIndex](TableModel.md#getbodyrowbyindex)
- [getColumnCount](TableModel.md#getcolumncount)
- [getColumnDef](TableModel.md#getcolumndef)
- [getColumnDefs](TableModel.md#getcolumndefs)
- [getColumnProperty](TableModel.md#getcolumnproperty)
- [getColumnWidth](TableModel.md#getcolumnwidth)
- [getContentHeightInPixel](TableModel.md#getcontentheightinpixel)
- [getContentWidthInPixel](TableModel.md#getcontentwidthinpixel)
- [getFixedLeftColumnCount](TableModel.md#getfixedleftcolumncount)
- [getFixedRightColumnCount](TableModel.md#getfixedrightcolumncount)
- [getModel](TableModel.md#getmodel)
- [getPadding](TableModel.md#getpadding)
- [getRowHeight](TableModel.md#getrowheight)
- [getSideAreaWidth](TableModel.md#getsideareawidth)
- [getSideStartAndEndColumnIndex](TableModel.md#getsidestartandendcolumnindex)
- [getXPosByColumnIndex](TableModel.md#getxposbycolumnindex)
- [init](TableModel.md#init)
- [isFooterVisibe](TableModel.md#isfootervisibe)
- [isHeaderVisibe](TableModel.md#isheadervisibe)
- [isRowCheckboxVisible](TableModel.md#isrowcheckboxvisible)
- [isSortable](TableModel.md#issortable)
- [recalcColumnWidthes](TableModel.md#recalccolumnwidthes)
- [recalcContentWidthInPx](TableModel.md#recalccontentwidthinpx)
- [recalcHeightAndPadding](TableModel.md#recalcheightandpadding)
- [recalcPadding](TableModel.md#recalcpadding)
- [recalcSize](TableModel.md#recalcsize)
- [setColumnWidth](TableModel.md#setcolumnwidth)

## Constructors

### constructor

• **new TableModel**(`headerAreaModel`, `bodyAreaModel`, `footerAreaModel`, `fixedLeftColumnCount?`, `fixedRightColumnCount?`, `rowCheckboxVisible?`, `defaultRowHeights?`, `columnDefs?`, `columnSizes?`, `overridingColumnWidth?`, `columnCount?`, `parentSize?`, `getSelectionModel?`): [`TableModel`](TableModel.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `headerAreaModel` | [`AreaModelIf`](../interfaces/AreaModelIf.md) | `undefined` |
| `bodyAreaModel` | [`AreaModelIf`](../interfaces/AreaModelIf.md) | `undefined` |
| `footerAreaModel` | [`AreaModelIf`](../interfaces/AreaModelIf.md) | `undefined` |
| `fixedLeftColumnCount` | `number` | `0` |
| `fixedRightColumnCount` | `number` | `0` |
| `rowCheckboxVisible` | `boolean` | `false` |
| `defaultRowHeights` | [`DefaultRowHeightsIf`](../interfaces/DefaultRowHeightsIf.md) | `undefined` |
| `columnDefs` | [`ColumnDefIf`](../interfaces/ColumnDefIf.md)[] | `[]` |
| `columnSizes` | `number`[] | `[]` |
| `overridingColumnWidth` | `number` | `-1` |
| `columnCount` | `number` | `0` |
| `parentSize` | `number` | `400` |
| `getSelectionModel` | [`GetT`](../modules.md#gett)\<[`SelectionModelIf`](../interfaces/SelectionModelIf.md)\> | `undefined` |

#### Returns

[`TableModel`](TableModel.md)

#### Defined in

[lib/table/orderData/tablemodel/table-model.ts:47](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/orderData/tablemodel/table-model.ts#L47)

## Properties

### bodyAreaModel

• `Readonly` **bodyAreaModel**: [`AreaModelIf`](../interfaces/AreaModelIf.md)

#### Defined in

[lib/table/orderData/tablemodel/table-model.ts:49](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/orderData/tablemodel/table-model.ts#L49)

___

### columnCount

• `Protected` **columnCount**: `number` = `0`

#### Defined in

[lib/table/orderData/tablemodel/table-model.ts:58](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/orderData/tablemodel/table-model.ts#L58)

___

### columnDefs

• **columnDefs**: [`ColumnDefIf`](../interfaces/ColumnDefIf.md)[] = `[]`

#### Defined in

[lib/table/orderData/tablemodel/table-model.ts:55](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/orderData/tablemodel/table-model.ts#L55)

___

### columnSizes

• **columnSizes**: `number`[] = `[]`

#### Defined in

[lib/table/orderData/tablemodel/table-model.ts:56](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/orderData/tablemodel/table-model.ts#L56)

___

### contentHeightInPx

• `Protected` **contentHeightInPx**: `number` = `0`

#### Defined in

[lib/table/orderData/tablemodel/table-model.ts:40](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/orderData/tablemodel/table-model.ts#L40)

___

### contentWidthInPx

• `Protected` **contentWidthInPx**: `number` = `0`

#### Defined in

[lib/table/orderData/tablemodel/table-model.ts:41](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/orderData/tablemodel/table-model.ts#L41)

___

### defaultRowHeights

• `Readonly` **defaultRowHeights**: [`DefaultRowHeightsIf`](../interfaces/DefaultRowHeightsIf.md)

#### Defined in

[lib/table/orderData/tablemodel/table-model.ts:54](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/orderData/tablemodel/table-model.ts#L54)

___

### fixedLeftColumnCount

• `Readonly` **fixedLeftColumnCount**: `number` = `0`

#### Defined in

[lib/table/orderData/tablemodel/table-model.ts:51](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/orderData/tablemodel/table-model.ts#L51)

___

### fixedRightColumnCount

• `Readonly` **fixedRightColumnCount**: `number` = `0`

#### Defined in

[lib/table/orderData/tablemodel/table-model.ts:52](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/orderData/tablemodel/table-model.ts#L52)

___

### footerAreaModel

• `Readonly` **footerAreaModel**: [`AreaModelIf`](../interfaces/AreaModelIf.md)

#### Defined in

[lib/table/orderData/tablemodel/table-model.ts:50](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/orderData/tablemodel/table-model.ts#L50)

___

### getSelectionModel

• `Readonly` **getSelectionModel**: [`GetT`](../modules.md#gett)\<[`SelectionModelIf`](../interfaces/SelectionModelIf.md)\>

#### Implementation of

[TableModelIf](../interfaces/TableModelIf.md).[getSelectionModel](../interfaces/TableModelIf.md#getselectionmodel)

#### Defined in

[lib/table/orderData/tablemodel/table-model.ts:60](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/orderData/tablemodel/table-model.ts#L60)

___

### headerAreaModel

• `Readonly` **headerAreaModel**: [`AreaModelIf`](../interfaces/AreaModelIf.md)

#### Defined in

[lib/table/orderData/tablemodel/table-model.ts:48](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/orderData/tablemodel/table-model.ts#L48)

___

### overridingColumnWidth

• `Protected` **overridingColumnWidth**: `number` = `-1`

#### Defined in

[lib/table/orderData/tablemodel/table-model.ts:57](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/orderData/tablemodel/table-model.ts#L57)

___

### padding

• `Protected` **padding**: [`Padding`](Padding.md)

#### Defined in

[lib/table/orderData/tablemodel/table-model.ts:44](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/orderData/tablemodel/table-model.ts#L44)

___

### parentSize

• `Protected` **parentSize**: `number` = `400`

#### Defined in

[lib/table/orderData/tablemodel/table-model.ts:59](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/orderData/tablemodel/table-model.ts#L59)

___

### rowCheckboxVisible

• `Readonly` **rowCheckboxVisible**: `boolean` = `false`

#### Defined in

[lib/table/orderData/tablemodel/table-model.ts:53](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/orderData/tablemodel/table-model.ts#L53)

___

### rowCount

• `Protected` **rowCount**: `number` = `0`

#### Defined in

[lib/table/orderData/tablemodel/table-model.ts:39](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/orderData/tablemodel/table-model.ts#L39)

___

### xPositions

• `Protected` **xPositions**: `number`[] = `[]`

#### Defined in

[lib/table/orderData/tablemodel/table-model.ts:45](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/orderData/tablemodel/table-model.ts#L45)

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

#### Defined in

[lib/table/orderData/tablemodel/table-model.ts:330](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/orderData/tablemodel/table-model.ts#L330)

___

### calcXPositions

▸ **calcXPositions**(): `void`

#### Returns

`void`

#### Defined in

[lib/table/orderData/tablemodel/table-model.ts:340](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/orderData/tablemodel/table-model.ts#L340)

___

### changeColumnOrder

▸ **changeColumnOrder**(`sourceColumnIndex`, `targetColumnIndex`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `sourceColumnIndex` | `number` |
| `targetColumnIndex` | `number` |

#### Returns

`void`

#### Implementation of

[TableModelIf](../interfaces/TableModelIf.md).[changeColumnOrder](../interfaces/TableModelIf.md#changecolumnorder)

#### Defined in

[lib/table/orderData/tablemodel/table-model.ts:296](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/orderData/tablemodel/table-model.ts#L296)

___

### doSort

▸ **doSort**(`sortItems`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `sortItems` | [`SortItem`](SortItem.md)[] |

#### Returns

`boolean`

#### Implementation of

[TableModelIf](../interfaces/TableModelIf.md).[doSort](../interfaces/TableModelIf.md#dosort)

#### Defined in

[lib/table/orderData/tablemodel/table-model.ts:270](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/orderData/tablemodel/table-model.ts#L270)

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

#### Implementation of

[TableModelIf](../interfaces/TableModelIf.md).[externalFilterChanged](../interfaces/TableModelIf.md#externalfilterchanged)

#### Defined in

[lib/table/orderData/tablemodel/table-model.ts:266](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/orderData/tablemodel/table-model.ts#L266)

___

### getAreaHeight

▸ **getAreaHeight**(`areaIdent`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `areaIdent` | [`AreaIdent`](../modules.md#areaident) |

#### Returns

`number`

#### Defined in

[lib/table/orderData/tablemodel/table-model.ts:181](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/orderData/tablemodel/table-model.ts#L181)

___

### getAreaModel

▸ **getAreaModel**(`area`): [`AreaModelIf`](../interfaces/AreaModelIf.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `area` | [`AreaIdent`](../modules.md#areaident) |

#### Returns

[`AreaModelIf`](../interfaces/AreaModelIf.md)

#### Implementation of

[TableModelIf](../interfaces/TableModelIf.md).[getAreaModel](../interfaces/TableModelIf.md#getareamodel)

#### Defined in

[lib/table/orderData/tablemodel/table-model.ts:237](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/orderData/tablemodel/table-model.ts#L237)

___

### getBodyModel

▸ **getBodyModel**(): [`AreaModelIf`](../interfaces/AreaModelIf.md)

#### Returns

[`AreaModelIf`](../interfaces/AreaModelIf.md)

#### Implementation of

[TableModelIf](../interfaces/TableModelIf.md).[getBodyModel](../interfaces/TableModelIf.md#getbodymodel)

#### Defined in

[lib/table/orderData/tablemodel/table-model.ts:250](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/orderData/tablemodel/table-model.ts#L250)

___

### getBodyRowByIndex

▸ **getBodyRowByIndex**(`rowIndex`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rowIndex` | `number` |

#### Returns

`any`

#### Implementation of

[TableModelIf](../interfaces/TableModelIf.md).[getBodyRowByIndex](../interfaces/TableModelIf.md#getbodyrowbyindex)

#### Defined in

[lib/table/orderData/tablemodel/table-model.ts:282](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/orderData/tablemodel/table-model.ts#L282)

___

### getColumnCount

▸ **getColumnCount**(): `number`

#### Returns

`number`

#### Implementation of

[TableModelIf](../interfaces/TableModelIf.md).[getColumnCount](../interfaces/TableModelIf.md#getcolumncount)

#### Defined in

[lib/table/orderData/tablemodel/table-model.ts:95](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/orderData/tablemodel/table-model.ts#L95)

___

### getColumnDef

▸ **getColumnDef**(`index`): `undefined` \| [`ColumnDefIf`](../interfaces/ColumnDefIf.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

`undefined` \| [`ColumnDefIf`](../interfaces/ColumnDefIf.md)

#### Implementation of

[TableModelIf](../interfaces/TableModelIf.md).[getColumnDef](../interfaces/TableModelIf.md#getcolumndef)

#### Defined in

[lib/table/orderData/tablemodel/table-model.ts:222](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/orderData/tablemodel/table-model.ts#L222)

___

### getColumnDefs

▸ **getColumnDefs**(): `undefined` \| [`ColumnDefIf`](../interfaces/ColumnDefIf.md)[]

#### Returns

`undefined` \| [`ColumnDefIf`](../interfaces/ColumnDefIf.md)[]

#### Implementation of

[TableModelIf](../interfaces/TableModelIf.md).[getColumnDefs](../interfaces/TableModelIf.md#getcolumndefs)

#### Defined in

[lib/table/orderData/tablemodel/table-model.ts:274](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/orderData/tablemodel/table-model.ts#L274)

___

### getColumnProperty

▸ **getColumnProperty**(`columnIndex`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `columnIndex` | `number` |

#### Returns

`string`

#### Implementation of

[TableModelIf](../interfaces/TableModelIf.md).[getColumnProperty](../interfaces/TableModelIf.md#getcolumnproperty)

#### Defined in

[lib/table/orderData/tablemodel/table-model.ts:278](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/orderData/tablemodel/table-model.ts#L278)

___

### getColumnWidth

▸ **getColumnWidth**(`columnIndex`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `columnIndex` | `number` |

#### Returns

`number`

#### Implementation of

[TableModelIf](../interfaces/TableModelIf.md).[getColumnWidth](../interfaces/TableModelIf.md#getcolumnwidth)

#### Defined in

[lib/table/orderData/tablemodel/table-model.ts:110](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/orderData/tablemodel/table-model.ts#L110)

___

### getContentHeightInPixel

▸ **getContentHeightInPixel**(): `number`

#### Returns

`number`

#### Implementation of

[TableModelIf](../interfaces/TableModelIf.md).[getContentHeightInPixel](../interfaces/TableModelIf.md#getcontentheightinpixel)

#### Defined in

[lib/table/orderData/tablemodel/table-model.ts:165](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/orderData/tablemodel/table-model.ts#L165)

___

### getContentWidthInPixel

▸ **getContentWidthInPixel**(): `number`

#### Returns

`number`

#### Implementation of

[TableModelIf](../interfaces/TableModelIf.md).[getContentWidthInPixel](../interfaces/TableModelIf.md#getcontentwidthinpixel)

#### Defined in

[lib/table/orderData/tablemodel/table-model.ts:169](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/orderData/tablemodel/table-model.ts#L169)

___

### getFixedLeftColumnCount

▸ **getFixedLeftColumnCount**(): `number`

#### Returns

`number`

#### Implementation of

[TableModelIf](../interfaces/TableModelIf.md).[getFixedLeftColumnCount](../interfaces/TableModelIf.md#getfixedleftcolumncount)

#### Defined in

[lib/table/orderData/tablemodel/table-model.ts:229](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/orderData/tablemodel/table-model.ts#L229)

___

### getFixedRightColumnCount

▸ **getFixedRightColumnCount**(): `number`

#### Returns

`number`

#### Implementation of

[TableModelIf](../interfaces/TableModelIf.md).[getFixedRightColumnCount](../interfaces/TableModelIf.md#getfixedrightcolumncount)

#### Defined in

[lib/table/orderData/tablemodel/table-model.ts:233](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/orderData/tablemodel/table-model.ts#L233)

___

### getModel

▸ **getModel**(`rowAreaIdent`): [`AreaModelIf`](../interfaces/AreaModelIf.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `rowAreaIdent` | [`AreaIdent`](../modules.md#areaident) |

#### Returns

[`AreaModelIf`](../interfaces/AreaModelIf.md)

#### Defined in

[lib/table/orderData/tablemodel/table-model.ts:177](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/orderData/tablemodel/table-model.ts#L177)

___

### getPadding

▸ **getPadding**(): [`Padding`](Padding.md)

#### Returns

[`Padding`](Padding.md)

#### Implementation of

[TableModelIf](../interfaces/TableModelIf.md).[getPadding](../interfaces/TableModelIf.md#getpadding)

#### Defined in

[lib/table/orderData/tablemodel/table-model.ts:161](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/orderData/tablemodel/table-model.ts#L161)

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

#### Implementation of

[TableModelIf](../interfaces/TableModelIf.md).[getRowHeight](../interfaces/TableModelIf.md#getrowheight)

#### Defined in

[lib/table/orderData/tablemodel/table-model.ts:173](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/orderData/tablemodel/table-model.ts#L173)

___

### getSideAreaWidth

▸ **getSideAreaWidth**(`sideIdent`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `sideIdent` | [`SideIdent`](../modules.md#sideident) |

#### Returns

`number`

#### Defined in

[lib/table/orderData/tablemodel/table-model.ts:195](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/orderData/tablemodel/table-model.ts#L195)

___

### getSideStartAndEndColumnIndex

▸ **getSideStartAndEndColumnIndex**(`sideIdent`): [`number`, `number`]

#### Parameters

| Name | Type |
| :------ | :------ |
| `sideIdent` | [`SideIdent`](../modules.md#sideident) |

#### Returns

[`number`, `number`]

#### Defined in

[lib/table/orderData/tablemodel/table-model.ts:204](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/orderData/tablemodel/table-model.ts#L204)

___

### getXPosByColumnIndex

▸ **getXPosByColumnIndex**(`columnIndex`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `columnIndex` | `number` |

#### Returns

`number`

#### Implementation of

[TableModelIf](../interfaces/TableModelIf.md).[getXPosByColumnIndex](../interfaces/TableModelIf.md#getxposbycolumnindex)

#### Defined in

[lib/table/orderData/tablemodel/table-model.ts:124](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/orderData/tablemodel/table-model.ts#L124)

___

### init

▸ **init**(): `void`

#### Returns

`void`

#### Implementation of

[TableModelIf](../interfaces/TableModelIf.md).[init](../interfaces/TableModelIf.md#init)

#### Defined in

[lib/table/orderData/tablemodel/table-model.ts:79](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/orderData/tablemodel/table-model.ts#L79)

___

### isFooterVisibe

▸ **isFooterVisibe**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[TableModelIf](../interfaces/TableModelIf.md).[isFooterVisibe](../interfaces/TableModelIf.md#isfootervisibe)

#### Defined in

[lib/table/orderData/tablemodel/table-model.ts:254](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/orderData/tablemodel/table-model.ts#L254)

___

### isHeaderVisibe

▸ **isHeaderVisibe**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[TableModelIf](../interfaces/TableModelIf.md).[isHeaderVisibe](../interfaces/TableModelIf.md#isheadervisibe)

#### Defined in

[lib/table/orderData/tablemodel/table-model.ts:258](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/orderData/tablemodel/table-model.ts#L258)

___

### isRowCheckboxVisible

▸ **isRowCheckboxVisible**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[TableModelIf](../interfaces/TableModelIf.md).[isRowCheckboxVisible](../interfaces/TableModelIf.md#isrowcheckboxvisible)

#### Defined in

[lib/table/orderData/tablemodel/table-model.ts:262](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/orderData/tablemodel/table-model.ts#L262)

___

### isSortable

▸ **isSortable**(`columnIndex`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `columnIndex` | `number` |

#### Returns

`boolean`

#### Implementation of

[TableModelIf](../interfaces/TableModelIf.md).[isSortable](../interfaces/TableModelIf.md#issortable)

#### Defined in

[lib/table/orderData/tablemodel/table-model.ts:286](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/orderData/tablemodel/table-model.ts#L286)

___

### recalcColumnWidthes

▸ **recalcColumnWidthes**(`clientWidth`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `clientWidth` | `number` |

#### Returns

`void`

#### Defined in

[lib/table/orderData/tablemodel/table-model.ts:306](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/orderData/tablemodel/table-model.ts#L306)

___

### recalcContentWidthInPx

▸ **recalcContentWidthInPx**(): `void`

#### Returns

`void`

#### Defined in

[lib/table/orderData/tablemodel/table-model.ts:336](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/orderData/tablemodel/table-model.ts#L336)

___

### recalcHeightAndPadding

▸ **recalcHeightAndPadding**(): `void`

#### Returns

`void`

#### Implementation of

[TableModelIf](../interfaces/TableModelIf.md).[recalcHeightAndPadding](../interfaces/TableModelIf.md#recalcheightandpadding)

#### Defined in

[lib/table/orderData/tablemodel/table-model.ts:139](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/orderData/tablemodel/table-model.ts#L139)

___

### recalcPadding

▸ **recalcPadding**(): `void`

#### Returns

`void`

#### Implementation of

[TableModelIf](../interfaces/TableModelIf.md).[recalcPadding](../interfaces/TableModelIf.md#recalcpadding)

#### Defined in

[lib/table/orderData/tablemodel/table-model.ts:148](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/orderData/tablemodel/table-model.ts#L148)

___

### recalcSize

▸ **recalcSize**(`clientWidth`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `clientWidth` | `number` |

#### Returns

`void`

#### Implementation of

[TableModelIf](../interfaces/TableModelIf.md).[recalcSize](../interfaces/TableModelIf.md#recalcsize)

#### Defined in

[lib/table/orderData/tablemodel/table-model.ts:134](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/orderData/tablemodel/table-model.ts#L134)

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

#### Implementation of

[TableModelIf](../interfaces/TableModelIf.md).[setColumnWidth](../interfaces/TableModelIf.md#setcolumnwidth)

#### Defined in

[lib/table/orderData/tablemodel/table-model.ts:99](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/orderData/tablemodel/table-model.ts#L99)
