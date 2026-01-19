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

[lib/table/data/tablemodel/column/column-def.if.ts:75](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/column/column-def.if.ts#L75)

___

### editInputPipe

• `Optional` **editInputPipe**: [`editInputPipe`](editInputPipe.md)

Represents an edit input pipe.

#### Defined in

[lib/table/data/tablemodel/column/column-def.if.ts:153](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/column/column-def.if.ts#L153)

___

### editable

• `Optional` **editable**: [`BooleanFunction`](../modules.md#booleanfunction)

Determines if a column is editable or not.

**`Param`**

The variable to check.

#### Defined in

[lib/table/data/tablemodel/column/column-def.if.ts:122](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/column/column-def.if.ts#L122)

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

[lib/table/data/tablemodel/column/column-def.if.ts:138](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/column/column-def.if.ts#L138)

___

### headerLabel

• **headerLabel**: `string`

Represents the label for a header.

#### Defined in

[lib/table/data/tablemodel/column/column-def.if.ts:42](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/column/column-def.if.ts#L42)

___

### isVisible

• `Optional` **isVisible**: [`BooleanFunction`](../modules.md#booleanfunction)

Determines if the column is visible or not.

#### Defined in

[lib/table/data/tablemodel/column/column-def.if.ts:129](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/column/column-def.if.ts#L129)

___

### maxWidth

• **maxWidth**: [`SizeIf`](SizeIf.md)

Represents the maximum width of a column.

#### Defined in

[lib/table/data/tablemodel/column/column-def.if.ts:63](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/column/column-def.if.ts#L63)

___

### minWidth

• **minWidth**: [`SizeIf`](SizeIf.md)

Represents the minimum width of a column.

#### Defined in

[lib/table/data/tablemodel/column/column-def.if.ts:57](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/column/column-def.if.ts#L57)

___

### property

• **property**: `string`

Represents a property name of the table row element.

#### Defined in

[lib/table/data/tablemodel/column/column-def.if.ts:36](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/column/column-def.if.ts#L36)

___

### rendererMap

• **rendererMap**: [`AreaObjectMapType`](../modules.md#areaobjectmaptype)\<[`CellRendererIf`](CellRendererIf.md)\>

**`Template`**

#### Defined in

[lib/table/data/tablemodel/column/column-def.if.ts:69](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/column/column-def.if.ts#L69)

___

### sortComparator

• `Optional` **sortComparator**: [`ValueRowSortComparator`](../modules.md#valuerowsortcomparator)

Represents a function that compares two values for sorting purposes.
The function takes two values and optionally their corresponding row objects,
compares them, and returns a number.
If the result is negative, it means 'valueA' comes before 'valueB' in the sorted order.
If the result is positive, it means 'valueB' comes before 'valueA' in the sorted order.
If the result is zero, it means the two values are considered equal for sorting purposes.

**`See`**

ValueRowSortComparator

#### Defined in

[lib/table/data/tablemodel/column/column-def.if.ts:100](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/column/column-def.if.ts#L100)

___

### sortIconVisible

• `Optional` **sortIconVisible**: [`BooleanFunction`](../modules.md#booleanfunction)

Determines if the sort icon is visible.

#### Defined in

[lib/table/data/tablemodel/column/column-def.if.ts:89](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/column/column-def.if.ts#L89)

___

### sortState

• `Optional` **sortState**: [`SortState`](../modules.md#sortstate)

Represents the state of sorting for a list.

#### Defined in

[lib/table/data/tablemodel/column/column-def.if.ts:109](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/column/column-def.if.ts#L109)

___

### sortStatesOrder

• `Optional` **sortStatesOrder**: [`SortState`](../modules.md#sortstate)[]

Represents the order of multiple sort states.

#### Defined in

[lib/table/data/tablemodel/column/column-def.if.ts:115](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/column/column-def.if.ts#L115)

___

### sortable

• `Optional` **sortable**: [`BooleanFunction`](../modules.md#booleanfunction)

Determines whether or not a column can be sorted.

**`Param`**

Specifies if an item is sortable.

#### Defined in

[lib/table/data/tablemodel/column/column-def.if.ts:82](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/column/column-def.if.ts#L82)

___

### width

• **width**: [`SizeIf`](SizeIf.md)

Represents the size of a column along the width dimension.

#### Defined in

[lib/table/data/tablemodel/column/column-def.if.ts:48](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/tablemodel/column/column-def.if.ts#L48)
