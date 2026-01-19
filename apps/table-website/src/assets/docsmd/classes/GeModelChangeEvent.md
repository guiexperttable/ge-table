[@guiexpert/table](../README.md) / [Exports](../modules.md) / GeModelChangeEvent

# Class: GeModelChangeEvent

Indicates that changes have occurred in the given cells.

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

[lib/table/data/common/event/ge-model-change-event.ts:8](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/common/event/ge-model-change-event.ts#L8)

## Properties

### cells

• **cells**: [`GeCellIndices`](GeCellIndices.md)[]

#### Defined in

[lib/table/data/common/event/ge-model-change-event.ts:9](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/common/event/ge-model-change-event.ts#L9)

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

[lib/table/data/common/event/ge-model-change-event.ts:13](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/common/event/ge-model-change-event.ts#L13)
