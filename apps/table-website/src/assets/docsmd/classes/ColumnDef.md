[@guiexpert/table](../README.md) / [Exports](../modules.md) / ColumnDef

# Class: ColumnDef

Represents a column definition for one column of the table.

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

[lib/table/data/tablemodel/column/column-def.ts:21](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/tablemodel/column/column-def.ts#L21)

## Properties

### classes

• **classes**: [`AreaObjectMapType`](../modules.md#areaobjectmaptype)\<`string`[]\>

Represents an object that maps an area to a collection of objects.

#### Implementation of

[ColumnDefIf](../interfaces/ColumnDefIf.md).[classes](../interfaces/ColumnDefIf.md#classes)

#### Defined in

[lib/table/data/tablemodel/column/column-def.ts:25](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/tablemodel/column/column-def.ts#L25)

___

### editInputPipe

• `Optional` **editInputPipe**: [`editInputPipe`](../interfaces/editInputPipe.md)

Represents an edit input pipe.

#### Implementation of

[ColumnDefIf](../interfaces/ColumnDefIf.md).[editInputPipe](../interfaces/ColumnDefIf.md#editinputpipe)

#### Defined in

[lib/table/data/tablemodel/column/column-def.ts:36](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/tablemodel/column/column-def.ts#L36)

___

### editable

• `Optional` **editable**: [`BooleanFunction`](../modules.md#booleanfunction)

Determines if a column is editable or not.

**`Param`**

The variable to check.

#### Implementation of

[ColumnDefIf](../interfaces/ColumnDefIf.md).[editable](../interfaces/ColumnDefIf.md#editable)

#### Defined in

[lib/table/data/tablemodel/column/column-def.ts:34](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/tablemodel/column/column-def.ts#L34)

___

### getEditRenderer

• `Optional` **getEditRenderer**: [`GetEditRenderer`](../modules.md#geteditrenderer)

Retrieves the edit renderer for the column.

**`Name`**

getEditRenderer

**`Function`**

**`Param`**

The element for which to retrieve the edit renderer.

#### Implementation of

[ColumnDefIf](../interfaces/ColumnDefIf.md).[getEditRenderer](../interfaces/ColumnDefIf.md#geteditrenderer)

#### Defined in

[lib/table/data/tablemodel/column/column-def.ts:35](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/tablemodel/column/column-def.ts#L35)

___

### headerLabel

• **headerLabel**: `string`

Represents the label for a header.

#### Implementation of

[ColumnDefIf](../interfaces/ColumnDefIf.md).[headerLabel](../interfaces/ColumnDefIf.md#headerlabel)

#### Defined in

[lib/table/data/tablemodel/column/column-def.ts:23](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/tablemodel/column/column-def.ts#L23)

___

### isVisible

• **isVisible**: [`BooleanFunction`](../modules.md#booleanfunction)

Determines if the column is visible or not.

#### Implementation of

[ColumnDefIf](../interfaces/ColumnDefIf.md).[isVisible](../interfaces/ColumnDefIf.md#isvisible)

#### Defined in

[lib/table/data/tablemodel/column/column-def.ts:37](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/tablemodel/column/column-def.ts#L37)

___

### maxWidth

• **maxWidth**: [`SizeIf`](../interfaces/SizeIf.md)

Represents the maximum width of a column.

#### Implementation of

[ColumnDefIf](../interfaces/ColumnDefIf.md).[maxWidth](../interfaces/ColumnDefIf.md#maxwidth)

#### Defined in

[lib/table/data/tablemodel/column/column-def.ts:28](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/tablemodel/column/column-def.ts#L28)

___

### minWidth

• **minWidth**: [`SizeIf`](../interfaces/SizeIf.md)

Represents the minimum width of a column.

#### Implementation of

[ColumnDefIf](../interfaces/ColumnDefIf.md).[minWidth](../interfaces/ColumnDefIf.md#minwidth)

#### Defined in

[lib/table/data/tablemodel/column/column-def.ts:27](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/tablemodel/column/column-def.ts#L27)

___

### property

• **property**: `string`

Represents a property name of the table row element.

#### Implementation of

[ColumnDefIf](../interfaces/ColumnDefIf.md).[property](../interfaces/ColumnDefIf.md#property)

#### Defined in

[lib/table/data/tablemodel/column/column-def.ts:22](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/tablemodel/column/column-def.ts#L22)

___

### rendererMap

• **rendererMap**: [`AreaObjectMapType`](../modules.md#areaobjectmaptype)\<[`CellRendererIf`](../interfaces/CellRendererIf.md)\>

**`Template`**

#### Implementation of

[ColumnDefIf](../interfaces/ColumnDefIf.md).[rendererMap](../interfaces/ColumnDefIf.md#renderermap)

#### Defined in

[lib/table/data/tablemodel/column/column-def.ts:26](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/tablemodel/column/column-def.ts#L26)

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

[lib/table/data/tablemodel/column/column-def.ts:30](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/tablemodel/column/column-def.ts#L30)

___

### sortIconVisible

• `Optional` **sortIconVisible**: [`BooleanFunction`](../modules.md#booleanfunction)

Determines if the sort icon is visible.

#### Implementation of

[ColumnDefIf](../interfaces/ColumnDefIf.md).[sortIconVisible](../interfaces/ColumnDefIf.md#sorticonvisible)

#### Defined in

[lib/table/data/tablemodel/column/column-def.ts:33](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/tablemodel/column/column-def.ts#L33)

___

### sortState

• `Optional` **sortState**: [`SortState`](../modules.md#sortstate)

Represents the state of sorting for a list.

#### Implementation of

[ColumnDefIf](../interfaces/ColumnDefIf.md).[sortState](../interfaces/ColumnDefIf.md#sortstate)

#### Defined in

[lib/table/data/tablemodel/column/column-def.ts:31](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/tablemodel/column/column-def.ts#L31)

___

### sortStatesOrder

• `Optional` **sortStatesOrder**: [`SortState`](../modules.md#sortstate)[]

Represents the order of multiple sort states.

#### Implementation of

[ColumnDefIf](../interfaces/ColumnDefIf.md).[sortStatesOrder](../interfaces/ColumnDefIf.md#sortstatesorder)

#### Defined in

[lib/table/data/tablemodel/column/column-def.ts:32](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/tablemodel/column/column-def.ts#L32)

___

### sortable

• `Optional` **sortable**: [`BooleanFunction`](../modules.md#booleanfunction)

Determines whether or not a column can be sorted.

**`Param`**

Specifies if an item is sortable.

#### Implementation of

[ColumnDefIf](../interfaces/ColumnDefIf.md).[sortable](../interfaces/ColumnDefIf.md#sortable)

#### Defined in

[lib/table/data/tablemodel/column/column-def.ts:29](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/tablemodel/column/column-def.ts#L29)

___

### visible

• **visible**: `boolean` = `true`

#### Defined in

[lib/table/data/tablemodel/column/column-def.ts:19](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/tablemodel/column/column-def.ts#L19)

___

### width

• **width**: [`SizeIf`](../interfaces/SizeIf.md)

Represents the size of a column along the width dimension.

#### Implementation of

[ColumnDefIf](../interfaces/ColumnDefIf.md).[width](../interfaces/ColumnDefIf.md#width)

#### Defined in

[lib/table/data/tablemodel/column/column-def.ts:24](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/tablemodel/column/column-def.ts#L24)

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

[lib/table/data/tablemodel/column/column-def.ts:41](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/tablemodel/column/column-def.ts#L41)

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

[lib/table/data/tablemodel/column/column-def.ts:49](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/tablemodel/column/column-def.ts#L49)
