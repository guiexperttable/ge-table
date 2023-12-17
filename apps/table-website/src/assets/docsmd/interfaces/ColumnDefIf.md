[@guiexpert/table](../README.md) / [Exports](../modules.md) / ColumnDefIf

# Interface: ColumnDefIf

Represents a column definition of one table column.

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

Represents an object that maps an area to a collection of objects.

#### Defined in

[lib/table/data/tablemodel/column/column-def.if.ts:57](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/tablemodel/column/column-def.if.ts#L57)

___

### editInputPipe

• `Optional` **editInputPipe**: [`editInputPipe`](editInputPipe.md)

Represents an edit input pipe.

#### Defined in

[lib/table/data/tablemodel/column/column-def.if.ts:139](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/tablemodel/column/column-def.if.ts#L139)

___

### editable

• `Optional` **editable**: [`BooleanFunction`](../modules.md#booleanfunction)

Determines if a column is editable or not.

**`Param`**

The variable to check.

#### Defined in

[lib/table/data/tablemodel/column/column-def.if.ts:108](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/tablemodel/column/column-def.if.ts#L108)

___

### getEditRenderer

• `Optional` **getEditRenderer**: [`GetEditRenderer`](../modules.md#geteditrenderer)

Retrieves the edit renderer for the column.

**`Name`**

getEditRenderer

**`Function`**

**`Param`**

The element for which to retrieve the edit renderer.

#### Defined in

[lib/table/data/tablemodel/column/column-def.if.ts:124](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/tablemodel/column/column-def.if.ts#L124)

___

### headerLabel

• **headerLabel**: `string`

Represents the label for a header.

#### Defined in

[lib/table/data/tablemodel/column/column-def.if.ts:24](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/tablemodel/column/column-def.if.ts#L24)

___

### isVisible

• `Optional` **isVisible**: [`BooleanFunction`](../modules.md#booleanfunction)

Determines if the column is visible or not.

#### Defined in

[lib/table/data/tablemodel/column/column-def.if.ts:115](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/tablemodel/column/column-def.if.ts#L115)

___

### maxWidth

• **maxWidth**: [`SizeIf`](SizeIf.md)

Represents the maximum width of a column.

#### Defined in

[lib/table/data/tablemodel/column/column-def.if.ts:45](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/tablemodel/column/column-def.if.ts#L45)

___

### minWidth

• **minWidth**: [`SizeIf`](SizeIf.md)

Represents the minimum width of a column.

#### Defined in

[lib/table/data/tablemodel/column/column-def.if.ts:39](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/tablemodel/column/column-def.if.ts#L39)

___

### property

• **property**: `string`

Represents a property name of the table row element.

#### Defined in

[lib/table/data/tablemodel/column/column-def.if.ts:18](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/tablemodel/column/column-def.if.ts#L18)

___

### rendererMap

• **rendererMap**: [`AreaObjectMapType`](../modules.md#areaobjectmaptype)\<[`CellRendererIf`](CellRendererIf.md)\>

**`Template`**

#### Defined in

[lib/table/data/tablemodel/column/column-def.if.ts:51](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/tablemodel/column/column-def.if.ts#L51)

___

### sortComparator

• `Optional` **sortComparator**: \<T\>(`a`: `T`, `b`: `T`) => `number`

#### Type declaration

▸ \<`T`\>(`a`, `b`): `number`

Represents a function that compares two values for sorting purposes.
The function takes two arguments of type T, compares them, and returns a number.
If the result is negative, it means 'a' comes before 'b' in the sorted order.
If the result is positive, it means 'b' comes before 'a' in the sorted order.
If the result is zero, it means the two values are considered equal for sorting purposes.

##### Type parameters

| Name |
| :------ |
| `T` |

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `T` | The first value to be compared. |
| `b` | `T` | The second value to be compared. |

##### Returns

`number`

A number indicating the relative order of 'a' and 'b'.

**`Typeparam`**

T The type of values being compared.

#### Defined in

[lib/table/data/tablemodel/column/column-def.if.ts:86](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/tablemodel/column/column-def.if.ts#L86)

___

### sortIconVisible

• `Optional` **sortIconVisible**: [`BooleanFunction`](../modules.md#booleanfunction)

Determines if the sort icon is visible.

#### Defined in

[lib/table/data/tablemodel/column/column-def.if.ts:71](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/tablemodel/column/column-def.if.ts#L71)

___

### sortState

• `Optional` **sortState**: [`SortState`](../modules.md#sortstate)

Represents the state of sorting for a list.

#### Defined in

[lib/table/data/tablemodel/column/column-def.if.ts:95](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/tablemodel/column/column-def.if.ts#L95)

___

### sortStatesOrder

• `Optional` **sortStatesOrder**: [`SortState`](../modules.md#sortstate)[]

Represents the order of multiple sort states.

#### Defined in

[lib/table/data/tablemodel/column/column-def.if.ts:101](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/tablemodel/column/column-def.if.ts#L101)

___

### sortable

• `Optional` **sortable**: [`BooleanFunction`](../modules.md#booleanfunction)

Determines whether or not a column can be sorted.

**`Param`**

Specifies if an item is sortable.

#### Defined in

[lib/table/data/tablemodel/column/column-def.if.ts:64](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/tablemodel/column/column-def.if.ts#L64)

___

### width

• **width**: [`SizeIf`](SizeIf.md)

Represents the size of a column along the width dimension.

#### Defined in

[lib/table/data/tablemodel/column/column-def.if.ts:30](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/tablemodel/column/column-def.if.ts#L30)
