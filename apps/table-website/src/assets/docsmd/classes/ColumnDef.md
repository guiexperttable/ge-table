[@guiexpert/table](../README.md) / [Exports](../modules.md) / ColumnDef

# Class: ColumnDef

## Implements

- [`ColumnDefIf`](../interfaces/ColumnDefIf.md)

## Table of contents

### Constructors

- [constructor](ColumnDef.md#constructor)

### Properties

- [classes](ColumnDef.md#classes)
- [editInputPipe](ColumnDef.md#editinputpipe)
- [editable](ColumnDef.md#editable)
- [getEditRenderer](ColumnDef.md#geteditrenderer)
- [headerLabel](ColumnDef.md#headerlabel)
- [isVisible](ColumnDef.md#isvisible)
- [maxWidth](ColumnDef.md#maxwidth)
- [minWidth](ColumnDef.md#minwidth)
- [property](ColumnDef.md#property)
- [rendererMap](ColumnDef.md#renderermap)
- [sortComparator](ColumnDef.md#sortcomparator)
- [sortIconVisible](ColumnDef.md#sorticonvisible)
- [sortState](ColumnDef.md#sortstate)
- [sortStatesOrder](ColumnDef.md#sortstatesorder)
- [sortable](ColumnDef.md#sortable)
- [visible](ColumnDef.md#visible)
- [width](ColumnDef.md#width)

### Methods

- [bodyRenderer](ColumnDef.md#bodyrenderer)
- [create](ColumnDef.md#create)

## Constructors

### constructor

• **new ColumnDef**(`property`, `headerLabel`, `width?`, `classes?`, `rendererMap?`, `minWidth?`, `maxWidth?`, `sortable?`, `sortComparator?`, `sortState?`, `sortStatesOrder?`, `sortIconVisible?`, `editable?`, `getEditRenderer?`, `editInputPipe?`, `isVisible?`): [`ColumnDef`](ColumnDef.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `property` | `string` |
| `headerLabel` | `string` |
| `width` | [`SizeIf`](../interfaces/SizeIf.md) |
| `classes` | [`AreaObjectMapType`](../modules.md#areaobjectmaptype)\<`string`[]\> |
| `rendererMap` | [`AreaObjectMapType`](../modules.md#areaobjectmaptype)\<[`CellRendererIf`](../interfaces/CellRendererIf.md)\> |
| `minWidth` | [`SizeIf`](../interfaces/SizeIf.md) |
| `maxWidth` | [`SizeIf`](../interfaces/SizeIf.md) |
| `sortable?` | [`BooleanFunction`](../modules.md#booleanfunction) |
| `sortComparator?` | \<T\>(`a`: `T`, `b`: `T`) => `number` |
| `sortState?` | [`SortState`](../modules.md#sortstate) |
| `sortStatesOrder?` | [`SortState`](../modules.md#sortstate)[] |
| `sortIconVisible?` | [`BooleanFunction`](../modules.md#booleanfunction) |
| `editable?` | [`BooleanFunction`](../modules.md#booleanfunction) |
| `getEditRenderer?` | [`GetEditRenderer`](../modules.md#geteditrenderer) |
| `editInputPipe?` | [`editInputPipe`](../interfaces/editInputPipe.md) |
| `isVisible` | [`BooleanFunction`](../modules.md#booleanfunction) |

#### Returns

[`ColumnDef`](ColumnDef.md)

#### Defined in

[lib/table/orderData/tablemodel/column/column-def.ts:17](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/orderData/tablemodel/column/column-def.ts#L17)

## Properties

### classes

• **classes**: [`AreaObjectMapType`](../modules.md#areaobjectmaptype)\<`string`[]\>

#### Implementation of

[ColumnDefIf](../interfaces/ColumnDefIf.md).[classes](../interfaces/ColumnDefIf.md#classes)

#### Defined in

[lib/table/orderData/tablemodel/column/column-def.ts:21](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/orderData/tablemodel/column/column-def.ts#L21)

___

### editInputPipe

• `Optional` **editInputPipe**: [`editInputPipe`](../interfaces/editInputPipe.md)

#### Implementation of

[ColumnDefIf](../interfaces/ColumnDefIf.md).[editInputPipe](../interfaces/ColumnDefIf.md#editinputpipe)

#### Defined in

[lib/table/orderData/tablemodel/column/column-def.ts:32](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/orderData/tablemodel/column/column-def.ts#L32)

___

### editable

• `Optional` **editable**: [`BooleanFunction`](../modules.md#booleanfunction)

#### Implementation of

[ColumnDefIf](../interfaces/ColumnDefIf.md).[editable](../interfaces/ColumnDefIf.md#editable)

#### Defined in

[lib/table/orderData/tablemodel/column/column-def.ts:30](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/orderData/tablemodel/column/column-def.ts#L30)

___

### getEditRenderer

• `Optional` **getEditRenderer**: [`GetEditRenderer`](../modules.md#geteditrenderer)

#### Implementation of

[ColumnDefIf](../interfaces/ColumnDefIf.md).[getEditRenderer](../interfaces/ColumnDefIf.md#geteditrenderer)

#### Defined in

[lib/table/orderData/tablemodel/column/column-def.ts:31](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/orderData/tablemodel/column/column-def.ts#L31)

___

### headerLabel

• **headerLabel**: `string`

#### Implementation of

[ColumnDefIf](../interfaces/ColumnDefIf.md).[headerLabel](../interfaces/ColumnDefIf.md#headerlabel)

#### Defined in

[lib/table/orderData/tablemodel/column/column-def.ts:19](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/orderData/tablemodel/column/column-def.ts#L19)

___

### isVisible

• **isVisible**: [`BooleanFunction`](../modules.md#booleanfunction)

#### Implementation of

[ColumnDefIf](../interfaces/ColumnDefIf.md).[isVisible](../interfaces/ColumnDefIf.md#isvisible)

#### Defined in

[lib/table/orderData/tablemodel/column/column-def.ts:33](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/orderData/tablemodel/column/column-def.ts#L33)

___

### maxWidth

• **maxWidth**: [`SizeIf`](../interfaces/SizeIf.md)

#### Implementation of

[ColumnDefIf](../interfaces/ColumnDefIf.md).[maxWidth](../interfaces/ColumnDefIf.md#maxwidth)

#### Defined in

[lib/table/orderData/tablemodel/column/column-def.ts:24](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/orderData/tablemodel/column/column-def.ts#L24)

___

### minWidth

• **minWidth**: [`SizeIf`](../interfaces/SizeIf.md)

#### Implementation of

[ColumnDefIf](../interfaces/ColumnDefIf.md).[minWidth](../interfaces/ColumnDefIf.md#minwidth)

#### Defined in

[lib/table/orderData/tablemodel/column/column-def.ts:23](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/orderData/tablemodel/column/column-def.ts#L23)

___

### property

• **property**: `string`

#### Implementation of

[ColumnDefIf](../interfaces/ColumnDefIf.md).[property](../interfaces/ColumnDefIf.md#property)

#### Defined in

[lib/table/orderData/tablemodel/column/column-def.ts:18](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/orderData/tablemodel/column/column-def.ts#L18)

___

### rendererMap

• **rendererMap**: [`AreaObjectMapType`](../modules.md#areaobjectmaptype)\<[`CellRendererIf`](../interfaces/CellRendererIf.md)\>

#### Implementation of

[ColumnDefIf](../interfaces/ColumnDefIf.md).[rendererMap](../interfaces/ColumnDefIf.md#renderermap)

#### Defined in

[lib/table/orderData/tablemodel/column/column-def.ts:22](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/orderData/tablemodel/column/column-def.ts#L22)

___

### sortComparator

• `Optional` **sortComparator**: \<T\>(`a`: `T`, `b`: `T`) => `number`

#### Type declaration

▸ \<`T`\>(`a`, `b`): `number`

##### Type parameters

| Name |
| :------ |
| `T` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `T` |
| `b` | `T` |

##### Returns

`number`

#### Implementation of

[ColumnDefIf](../interfaces/ColumnDefIf.md).[sortComparator](../interfaces/ColumnDefIf.md#sortcomparator)

#### Defined in

[lib/table/orderData/tablemodel/column/column-def.ts:26](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/orderData/tablemodel/column/column-def.ts#L26)

___

### sortIconVisible

• `Optional` **sortIconVisible**: [`BooleanFunction`](../modules.md#booleanfunction)

#### Implementation of

[ColumnDefIf](../interfaces/ColumnDefIf.md).[sortIconVisible](../interfaces/ColumnDefIf.md#sorticonvisible)

#### Defined in

[lib/table/orderData/tablemodel/column/column-def.ts:29](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/orderData/tablemodel/column/column-def.ts#L29)

___

### sortState

• `Optional` **sortState**: [`SortState`](../modules.md#sortstate)

#### Implementation of

[ColumnDefIf](../interfaces/ColumnDefIf.md).[sortState](../interfaces/ColumnDefIf.md#sortstate)

#### Defined in

[lib/table/orderData/tablemodel/column/column-def.ts:27](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/orderData/tablemodel/column/column-def.ts#L27)

___

### sortStatesOrder

• `Optional` **sortStatesOrder**: [`SortState`](../modules.md#sortstate)[]

#### Implementation of

[ColumnDefIf](../interfaces/ColumnDefIf.md).[sortStatesOrder](../interfaces/ColumnDefIf.md#sortstatesorder)

#### Defined in

[lib/table/orderData/tablemodel/column/column-def.ts:28](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/orderData/tablemodel/column/column-def.ts#L28)

___

### sortable

• `Optional` **sortable**: [`BooleanFunction`](../modules.md#booleanfunction)

#### Implementation of

[ColumnDefIf](../interfaces/ColumnDefIf.md).[sortable](../interfaces/ColumnDefIf.md#sortable)

#### Defined in

[lib/table/orderData/tablemodel/column/column-def.ts:25](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/orderData/tablemodel/column/column-def.ts#L25)

___

### visible

• **visible**: `boolean` = `true`

#### Defined in

[lib/table/orderData/tablemodel/column/column-def.ts:15](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/orderData/tablemodel/column/column-def.ts#L15)

___

### width

• **width**: [`SizeIf`](../interfaces/SizeIf.md)

#### Implementation of

[ColumnDefIf](../interfaces/ColumnDefIf.md).[width](../interfaces/ColumnDefIf.md#width)

#### Defined in

[lib/table/orderData/tablemodel/column/column-def.ts:20](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/orderData/tablemodel/column/column-def.ts#L20)

## Methods

### bodyRenderer

▸ **bodyRenderer**(`bodyRenderer`): [`AreaObjectMap`](AreaObjectMap.md)\<[`CellRendererIf`](../interfaces/CellRendererIf.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `bodyRenderer` | [`CellRendererIf`](../interfaces/CellRendererIf.md) |

#### Returns

[`AreaObjectMap`](AreaObjectMap.md)\<[`CellRendererIf`](../interfaces/CellRendererIf.md)\>

#### Defined in

[lib/table/orderData/tablemodel/column/column-def.ts:37](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/orderData/tablemodel/column/column-def.ts#L37)

___

### create

▸ **create**(`param`): [`ColumnDefIf`](../interfaces/ColumnDefIf.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `param` | `Object` |
| `param.bodyClasses?` | `string`[] |
| `param.bodyRenderer?` | [`CellRendererIf`](../interfaces/CellRendererIf.md) |
| `param.editInputPipe?` | [`editInputPipe`](../interfaces/editInputPipe.md) |
| `param.editable?` | [`BooleanFunction`](../modules.md#booleanfunction) |
| `param.footerClasses?` | `string`[] |
| `param.footerRenderer?` | [`CellRendererIf`](../interfaces/CellRendererIf.md) |
| `param.getEditRenderer?` | [`GetEditRenderer`](../modules.md#geteditrenderer) |
| `param.headerClasses?` | `string`[] |
| `param.headerLabel?` | `string` |
| `param.headerRenderer?` | [`CellRendererIf`](../interfaces/CellRendererIf.md) |
| `param.isVisible?` | [`BooleanFunction`](../modules.md#booleanfunction) |
| `param.maxWidth?` | [`SizeIf`](../interfaces/SizeIf.md) |
| `param.minWidth?` | [`SizeIf`](../interfaces/SizeIf.md) |
| `param.property?` | `string` |
| `param.sortComparator?` | \<T\>(`a`: `T`, `b`: `T`) => `number` |
| `param.sortIconVisible?` | [`BooleanFunction`](../modules.md#booleanfunction) |
| `param.sortState?` | [`SortState`](../modules.md#sortstate) |
| `param.sortStatesOrder?` | [`SortState`](../modules.md#sortstate)[] |
| `param.sortable?` | [`BooleanFunction`](../modules.md#booleanfunction) |
| `param.width?` | [`SizeIf`](../interfaces/SizeIf.md) |

#### Returns

[`ColumnDefIf`](../interfaces/ColumnDefIf.md)

#### Defined in

[lib/table/orderData/tablemodel/column/column-def.ts:45](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/orderData/tablemodel/column/column-def.ts#L45)
