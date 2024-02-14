[@guiexpert/table](../README.md) / [Exports](../modules.md) / GeModelChangeEvent

# Class: GeModelChangeEvent

## Table of contents

### Constructors

- [constructor](GeModelChangeEvent.md#constructor)

### Properties

- [cells](GeModelChangeEvent.md#cells)

### Methods

- [createSingle](GeModelChangeEvent.md#createsingle)

## Constructors

### constructor

• **new GeModelChangeEvent**(`cells`): [`GeModelChangeEvent`](GeModelChangeEvent.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `cells` | [`GeCellIndices`](GeCellIndices.md)[] |

#### Returns

[`GeModelChangeEvent`](GeModelChangeEvent.md)

#### Defined in

[lib/table/data/common/event/ge-model-change-event.ts:5](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/data/common/event/ge-model-change-event.ts#L5)

## Properties

### cells

• **cells**: [`GeCellIndices`](GeCellIndices.md)[]

#### Defined in

[lib/table/data/common/event/ge-model-change-event.ts:6](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/data/common/event/ge-model-change-event.ts#L6)

## Methods

### createSingle

▸ **createSingle**(`rowIndex`, `columnIndex`): [`GeModelChangeEvent`](GeModelChangeEvent.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `rowIndex` | `number` |
| `columnIndex` | `number` |

#### Returns

[`GeModelChangeEvent`](GeModelChangeEvent.md)

#### Defined in

[lib/table/data/common/event/ge-model-change-event.ts:10](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/data/common/event/ge-model-change-event.ts#L10)
