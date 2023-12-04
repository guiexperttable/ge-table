[@guiexpert/table](../README.md) / [Exports](../modules.md) / TableCellUpdateEvent

# Class: TableCellUpdateEvent

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

[lib/table/data/common/event/input/table-cell-update-event.ts:6](https://github.com/guiexperttable/ge-table/blob/7d8ffe2/libs/table/src/lib/table/data/common/event/input/table-cell-update-event.ts#L6)

## Properties

### area

• **area**: [`AreaIdent`](../modules.md#areaident)

#### Implementation of

[TableCellUpdateEventIf](../interfaces/TableCellUpdateEventIf.md).[area](../interfaces/TableCellUpdateEventIf.md#area)

#### Defined in

[lib/table/data/common/event/input/table-cell-update-event.ts:7](https://github.com/guiexperttable/ge-table/blob/7d8ffe2/libs/table/src/lib/table/data/common/event/input/table-cell-update-event.ts#L7)

___

### columnIndex

• **columnIndex**: `number`

#### Implementation of

[TableCellUpdateEventIf](../interfaces/TableCellUpdateEventIf.md).[columnIndex](../interfaces/TableCellUpdateEventIf.md#columnindex)

#### Defined in

[lib/table/data/common/event/input/table-cell-update-event.ts:9](https://github.com/guiexperttable/ge-table/blob/7d8ffe2/libs/table/src/lib/table/data/common/event/input/table-cell-update-event.ts#L9)

___

### cssClasses

• **cssClasses**: `Object` = `{}`

#### Index signature

▪ [key: `string`]: `boolean`

#### Implementation of

[TableCellUpdateEventIf](../interfaces/TableCellUpdateEventIf.md).[cssClasses](../interfaces/TableCellUpdateEventIf.md#cssclasses)

#### Defined in

[lib/table/data/common/event/input/table-cell-update-event.ts:11](https://github.com/guiexperttable/ge-table/blob/7d8ffe2/libs/table/src/lib/table/data/common/event/input/table-cell-update-event.ts#L11)

___

### rowIndex

• **rowIndex**: `number`

#### Implementation of

[TableCellUpdateEventIf](../interfaces/TableCellUpdateEventIf.md).[rowIndex](../interfaces/TableCellUpdateEventIf.md#rowindex)

#### Defined in

[lib/table/data/common/event/input/table-cell-update-event.ts:8](https://github.com/guiexperttable/ge-table/blob/7d8ffe2/libs/table/src/lib/table/data/common/event/input/table-cell-update-event.ts#L8)

___

### value

• **value**: `any`

#### Implementation of

[TableCellUpdateEventIf](../interfaces/TableCellUpdateEventIf.md).[value](../interfaces/TableCellUpdateEventIf.md#value)

#### Defined in

[lib/table/data/common/event/input/table-cell-update-event.ts:10](https://github.com/guiexperttable/ge-table/blob/7d8ffe2/libs/table/src/lib/table/data/common/event/input/table-cell-update-event.ts#L10)
