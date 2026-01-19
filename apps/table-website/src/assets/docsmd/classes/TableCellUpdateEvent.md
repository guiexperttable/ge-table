[@guiexpert/table](../README.md) / [Exports](../modules.md) / TableCellUpdateEvent

# Class: TableCellUpdateEvent

Represents an event that occurs when a table cell is updated.

**`Implements`**

TableCellUpdateEventIf

**`Param`**

The identification of the area where the cell belongs.

**`Param`**

The index of the row where the cell is located.

**`Param`**

The index of the column where the cell is located.

**`Param`**

The new value for the cell.

**`Param`**

An object containing CSS classes to be applied to the cell.

## Implements

- [`TableCellUpdateEventIf`](../interfaces/TableCellUpdateEventIf.md)

## Table of contents

### Constructors

- [constructor](TableCellUpdateEvent.md#constructor)

### Properties

- [area](TableCellUpdateEvent.md#area)
- [columnIndex](TableCellUpdateEvent.md#columnindex)
- [cssClasses](TableCellUpdateEvent.md#cssclasses)
- [rowIndex](TableCellUpdateEvent.md#rowindex)
- [value](TableCellUpdateEvent.md#value)

## Constructors

### constructor

• **new TableCellUpdateEvent**(`area`, `rowIndex`, `columnIndex`, `value`, `cssClasses?`): [`TableCellUpdateEvent`](TableCellUpdateEvent.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `area` | [`AreaIdent`](../modules.md#areaident) |
| `rowIndex` | `number` |
| `columnIndex` | `number` |
| `value` | `any` |
| `cssClasses` | `Object` |

#### Returns

[`TableCellUpdateEvent`](TableCellUpdateEvent.md)

#### Defined in

[lib/table/data/common/event/input/table-cell-update-event.ts:18](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/common/event/input/table-cell-update-event.ts#L18)

## Properties

### area

• **area**: [`AreaIdent`](../modules.md#areaident)

Represents an area identifier ("header" | "body" | "footer"), which defines the part of the table.

#### Implementation of

[TableCellUpdateEventIf](../interfaces/TableCellUpdateEventIf.md).[area](../interfaces/TableCellUpdateEventIf.md#area)

#### Defined in

[lib/table/data/common/event/input/table-cell-update-event.ts:19](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/common/event/input/table-cell-update-event.ts#L19)

___

### columnIndex

• **columnIndex**: `number`

Represents the index of a column in a data table.

#### Implementation of

[TableCellUpdateEventIf](../interfaces/TableCellUpdateEventIf.md).[columnIndex](../interfaces/TableCellUpdateEventIf.md#columnindex)

#### Defined in

[lib/table/data/common/event/input/table-cell-update-event.ts:21](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/common/event/input/table-cell-update-event.ts#L21)

___

### cssClasses

• **cssClasses**: `Object` = `{}`

Represents a collection of CSS classes with their corresponding boolean values.
For each key-value pair of the object with a truthy value the corresponding key is used as a class name.
For each key-value pair of the object with a falsy value the corresponding key will be removed from the class list of the cell div (dom node).
Example:
   {
      low: val >= 0 && val <=5,
      medium: val > 5 && val <= 10,
      high: val > 10
   }

#### Index signature

▪ [key: `string`]: `boolean`

#### Implementation of

[TableCellUpdateEventIf](../interfaces/TableCellUpdateEventIf.md).[cssClasses](../interfaces/TableCellUpdateEventIf.md#cssclasses)

#### Defined in

[lib/table/data/common/event/input/table-cell-update-event.ts:23](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/common/event/input/table-cell-update-event.ts#L23)

___

### rowIndex

• **rowIndex**: `number`

Represents the index of a row of the table.

#### Implementation of

[TableCellUpdateEventIf](../interfaces/TableCellUpdateEventIf.md).[rowIndex](../interfaces/TableCellUpdateEventIf.md#rowindex)

#### Defined in

[lib/table/data/common/event/input/table-cell-update-event.ts:20](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/common/event/input/table-cell-update-event.ts#L20)

___

### value

• **value**: `any`

The value can be any data type.
It can store a string, number, boolean, object, function, or null.
It is a flexible variable that can hold any value.

This valie will be set to the area model for the cell (rowIndex, columnIndex).

#### Implementation of

[TableCellUpdateEventIf](../interfaces/TableCellUpdateEventIf.md).[value](../interfaces/TableCellUpdateEventIf.md#value)

#### Defined in

[lib/table/data/common/event/input/table-cell-update-event.ts:22](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/common/event/input/table-cell-update-event.ts#L22)
