[@guiexpert/table](../README.md) / [Exports](../modules.md) / SelectionModel

# Class: SelectionModel

## Implements

- [`SelectionModelIf`](../interfaces/SelectionModelIf.md)

## Table of contents

### Constructors

- [constructor](SelectionModel.md#constructor)

### Properties

- [allSelected](SelectionModel.md#allselected)
- [negativeRanges](SelectionModel.md#negativeranges)
- [ranges](SelectionModel.md#ranges)
- [selectionMode](SelectionModel.md#selectionmode)
- [selectionType](SelectionModel.md#selectiontype)

### Methods

- [addRange](SelectionModel.md#addrange)
- [addSelection](SelectionModel.md#addselection)
- [clear](SelectionModel.md#clear)
- [getRanges](SelectionModel.md#getranges)
- [getSelectionCount](SelectionModel.md#getselectioncount)
- [hasSelection](SelectionModel.md#hasselection)
- [isInNegativeRange](SelectionModel.md#isinnegativerange)
- [removeSelection](SelectionModel.md#removeselection)
- [selectAll](SelectionModel.md#selectall)
- [togglePoint](SelectionModel.md#togglepoint)

## Constructors

### constructor

• **new SelectionModel**(`selectionType?`, `selectionMode?`): [`SelectionModel`](SelectionModel.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `selectionType` | [`SelectionType`](../modules.md#selectiontype) | `"none"` |
| `selectionMode` | [`SelectionMode`](../modules.md#selectionmode) | `"single"` |

#### Returns

[`SelectionModel`](SelectionModel.md)

#### Defined in

[lib/table/selection/selection-model.ts:11](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/selection/selection-model.ts#L11)

## Properties

### allSelected

• `Protected` **allSelected**: `boolean` = `false`

#### Defined in

[lib/table/selection/selection-model.ts:9](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/selection/selection-model.ts#L9)

___

### negativeRanges

• `Protected` **negativeRanges**: [`CellRange`](CellRange.md)[] = `[]`

#### Defined in

[lib/table/selection/selection-model.ts:8](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/selection/selection-model.ts#L8)

___

### ranges

• `Protected` **ranges**: [`CellRange`](CellRange.md)[] = `[]`

#### Defined in

[lib/table/selection/selection-model.ts:7](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/selection/selection-model.ts#L7)

___

### selectionMode

• **selectionMode**: [`SelectionMode`](../modules.md#selectionmode) = `"single"`

#### Defined in

[lib/table/selection/selection-model.ts:13](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/selection/selection-model.ts#L13)

___

### selectionType

• **selectionType**: [`SelectionType`](../modules.md#selectiontype) = `"none"`

#### Defined in

[lib/table/selection/selection-model.ts:12](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/selection/selection-model.ts#L12)

## Methods

### addRange

▸ **addRange**(`range`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `range` | [`CellRange`](CellRange.md) |

#### Returns

`void`

#### Defined in

[lib/table/selection/selection-model.ts:86](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/selection/selection-model.ts#L86)

___

### addSelection

▸ **addSelection**(`range`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `range` | [`CellRange`](CellRange.md) |

#### Returns

`void`

#### Implementation of

[SelectionModelIf](../interfaces/SelectionModelIf.md).[addSelection](../interfaces/SelectionModelIf.md#addselection)

#### Defined in

[lib/table/selection/selection-model.ts:60](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/selection/selection-model.ts#L60)

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Implementation of

[SelectionModelIf](../interfaces/SelectionModelIf.md).[clear](../interfaces/SelectionModelIf.md#clear)

#### Defined in

[lib/table/selection/selection-model.ts:46](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/selection/selection-model.ts#L46)

___

### getRanges

▸ **getRanges**(): [`CellRange`](CellRange.md)[]

#### Returns

[`CellRange`](CellRange.md)[]

#### Implementation of

[SelectionModelIf](../interfaces/SelectionModelIf.md).[getRanges](../interfaces/SelectionModelIf.md#getranges)

#### Defined in

[lib/table/selection/selection-model.ts:42](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/selection/selection-model.ts#L42)

___

### getSelectionCount

▸ **getSelectionCount**(`rowIndex`, `columnIndex`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rowIndex` | `number` |
| `columnIndex` | `number` |

#### Returns

`number`

#### Implementation of

[SelectionModelIf](../interfaces/SelectionModelIf.md).[getSelectionCount](../interfaces/SelectionModelIf.md#getselectioncount)

#### Defined in

[lib/table/selection/selection-model.ts:17](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/selection/selection-model.ts#L17)

___

### hasSelection

▸ **hasSelection**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[SelectionModelIf](../interfaces/SelectionModelIf.md).[hasSelection](../interfaces/SelectionModelIf.md#hasselection)

#### Defined in

[lib/table/selection/selection-model.ts:52](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/selection/selection-model.ts#L52)

___

### isInNegativeRange

▸ **isInNegativeRange**(`rowIndex`, `columnIndex`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rowIndex` | `number` |
| `columnIndex` | `number` |

#### Returns

`boolean`

#### Defined in

[lib/table/selection/selection-model.ts:33](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/selection/selection-model.ts#L33)

___

### removeSelection

▸ **removeSelection**(`range`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `range` | [`CellRange`](CellRange.md) |

#### Returns

`void`

#### Implementation of

[SelectionModelIf](../interfaces/SelectionModelIf.md).[removeSelection](../interfaces/SelectionModelIf.md#removeselection)

#### Defined in

[lib/table/selection/selection-model.ts:64](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/selection/selection-model.ts#L64)

___

### selectAll

▸ **selectAll**(): `void`

#### Returns

`void`

#### Implementation of

[SelectionModelIf](../interfaces/SelectionModelIf.md).[selectAll](../interfaces/SelectionModelIf.md#selectall)

#### Defined in

[lib/table/selection/selection-model.ts:56](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/selection/selection-model.ts#L56)

___

### togglePoint

▸ **togglePoint**(`row`, `col`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `row` | `number` |
| `col` | `number` |

#### Returns

`void`

#### Implementation of

[SelectionModelIf](../interfaces/SelectionModelIf.md).[togglePoint](../interfaces/SelectionModelIf.md#togglepoint)

#### Defined in

[lib/table/selection/selection-model.ts:77](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/selection/selection-model.ts#L77)
