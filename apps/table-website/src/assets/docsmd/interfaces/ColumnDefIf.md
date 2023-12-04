[@guiexpert/table](../README.md) / [Exports](../modules.md) / ColumnDefIf

# Interface: ColumnDefIf

## Implemented by

- [`CheckboxColumnDef`](../classes/CheckboxColumnDef.md)
- [`ColumnDef`](../classes/ColumnDef.md)

## Table of contents

### Properties

- [classes](ColumnDefIf.md#classes)
- [editInputPipe](ColumnDefIf.md#editinputpipe)
- [editable](ColumnDefIf.md#editable)
- [getEditRenderer](ColumnDefIf.md#geteditrenderer)
- [headerLabel](ColumnDefIf.md#headerlabel)
- [isVisible](ColumnDefIf.md#isvisible)
- [maxWidth](ColumnDefIf.md#maxwidth)
- [minWidth](ColumnDefIf.md#minwidth)
- [property](ColumnDefIf.md#property)
- [rendererMap](ColumnDefIf.md#renderermap)
- [sortComparator](ColumnDefIf.md#sortcomparator)
- [sortIconVisible](ColumnDefIf.md#sorticonvisible)
- [sortState](ColumnDefIf.md#sortstate)
- [sortStatesOrder](ColumnDefIf.md#sortstatesorder)
- [sortable](ColumnDefIf.md#sortable)
- [width](ColumnDefIf.md#width)

## Properties

### classes

• **classes**: [`AreaObjectMapType`](../modules.md#areaobjectmaptype)\<`string`[]\>

#### Defined in

[lib/table/data/tablemodel/column/column-def.if.ts:17](https://github.com/guiexperttable/ge-table/blob/7d8ffe2/libs/table/src/lib/table/data/tablemodel/column/column-def.if.ts#L17)

___

### editInputPipe

• `Optional` **editInputPipe**: [`editInputPipe`](editInputPipe.md)

#### Defined in

[lib/table/data/tablemodel/column/column-def.if.ts:26](https://github.com/guiexperttable/ge-table/blob/7d8ffe2/libs/table/src/lib/table/data/tablemodel/column/column-def.if.ts#L26)

___

### editable

• `Optional` **editable**: [`BooleanFunction`](../modules.md#booleanfunction)

#### Defined in

[lib/table/data/tablemodel/column/column-def.if.ts:23](https://github.com/guiexperttable/ge-table/blob/7d8ffe2/libs/table/src/lib/table/data/tablemodel/column/column-def.if.ts#L23)

___

### getEditRenderer

• `Optional` **getEditRenderer**: [`GetEditRenderer`](../modules.md#geteditrenderer)

#### Defined in

[lib/table/data/tablemodel/column/column-def.if.ts:25](https://github.com/guiexperttable/ge-table/blob/7d8ffe2/libs/table/src/lib/table/data/tablemodel/column/column-def.if.ts#L25)

___

### headerLabel

• **headerLabel**: `string`

#### Defined in

[lib/table/data/tablemodel/column/column-def.if.ts:12](https://github.com/guiexperttable/ge-table/blob/7d8ffe2/libs/table/src/lib/table/data/tablemodel/column/column-def.if.ts#L12)

___

### isVisible

• `Optional` **isVisible**: [`BooleanFunction`](../modules.md#booleanfunction)

#### Defined in

[lib/table/data/tablemodel/column/column-def.if.ts:24](https://github.com/guiexperttable/ge-table/blob/7d8ffe2/libs/table/src/lib/table/data/tablemodel/column/column-def.if.ts#L24)

___

### maxWidth

• **maxWidth**: [`SizeIf`](SizeIf.md)

#### Defined in

[lib/table/data/tablemodel/column/column-def.if.ts:15](https://github.com/guiexperttable/ge-table/blob/7d8ffe2/libs/table/src/lib/table/data/tablemodel/column/column-def.if.ts#L15)

___

### minWidth

• **minWidth**: [`SizeIf`](SizeIf.md)

#### Defined in

[lib/table/data/tablemodel/column/column-def.if.ts:14](https://github.com/guiexperttable/ge-table/blob/7d8ffe2/libs/table/src/lib/table/data/tablemodel/column/column-def.if.ts#L14)

___

### property

• **property**: `string`

#### Defined in

[lib/table/data/tablemodel/column/column-def.if.ts:11](https://github.com/guiexperttable/ge-table/blob/7d8ffe2/libs/table/src/lib/table/data/tablemodel/column/column-def.if.ts#L11)

___

### rendererMap

• **rendererMap**: [`AreaObjectMapType`](../modules.md#areaobjectmaptype)\<[`CellRendererIf`](CellRendererIf.md)\>

#### Defined in

[lib/table/data/tablemodel/column/column-def.if.ts:16](https://github.com/guiexperttable/ge-table/blob/7d8ffe2/libs/table/src/lib/table/data/tablemodel/column/column-def.if.ts#L16)

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

#### Defined in

[lib/table/data/tablemodel/column/column-def.if.ts:20](https://github.com/guiexperttable/ge-table/blob/7d8ffe2/libs/table/src/lib/table/data/tablemodel/column/column-def.if.ts#L20)

___

### sortIconVisible

• `Optional` **sortIconVisible**: [`BooleanFunction`](../modules.md#booleanfunction)

#### Defined in

[lib/table/data/tablemodel/column/column-def.if.ts:19](https://github.com/guiexperttable/ge-table/blob/7d8ffe2/libs/table/src/lib/table/data/tablemodel/column/column-def.if.ts#L19)

___

### sortState

• `Optional` **sortState**: [`SortState`](../modules.md#sortstate)

#### Defined in

[lib/table/data/tablemodel/column/column-def.if.ts:21](https://github.com/guiexperttable/ge-table/blob/7d8ffe2/libs/table/src/lib/table/data/tablemodel/column/column-def.if.ts#L21)

___

### sortStatesOrder

• `Optional` **sortStatesOrder**: [`SortState`](../modules.md#sortstate)[]

#### Defined in

[lib/table/data/tablemodel/column/column-def.if.ts:22](https://github.com/guiexperttable/ge-table/blob/7d8ffe2/libs/table/src/lib/table/data/tablemodel/column/column-def.if.ts#L22)

___

### sortable

• `Optional` **sortable**: [`BooleanFunction`](../modules.md#booleanfunction)

#### Defined in

[lib/table/data/tablemodel/column/column-def.if.ts:18](https://github.com/guiexperttable/ge-table/blob/7d8ffe2/libs/table/src/lib/table/data/tablemodel/column/column-def.if.ts#L18)

___

### width

• **width**: [`SizeIf`](SizeIf.md)

#### Defined in

[lib/table/data/tablemodel/column/column-def.if.ts:13](https://github.com/guiexperttable/ge-table/blob/7d8ffe2/libs/table/src/lib/table/data/tablemodel/column/column-def.if.ts#L13)
