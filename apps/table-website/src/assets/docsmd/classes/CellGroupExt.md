[@guiexpert/table](../README.md) / [Exports](../modules.md) / CellGroupExt

# Class: CellGroupExt

## Hierarchy

- [`CellGroup`](CellGroup.md)

  ↳ **`CellGroupExt`**

## Table of contents

### Constructors

- [constructor](CellGroupExt.md#constructor)

### Properties

- [childIndex](CellGroupExt.md#childindex)
- [children](CellGroupExt.md#children)
- [closed](CellGroupExt.md#closed)
- [data](CellGroupExt.md#data)
- [impl](CellGroupExt.md#impl)
- [leftNeighbour](CellGroupExt.md#leftneighbour)
- [parent](CellGroupExt.md#parent)
- [property](CellGroupExt.md#property)
- [rightNeighbour](CellGroupExt.md#rightneighbour)
- [rowIndex](CellGroupExt.md#rowindex)
- [toggle](CellGroupExt.md#toggle)
- [visibility](CellGroupExt.md#visibility)

### Methods

- [claimsSpace](CellGroupExt.md#claimsspace)
- [getColumnCount](CellGroupExt.md#getcolumncount)
- [getColumnIndex](CellGroupExt.md#getcolumnindex)
- [getParentCount](CellGroupExt.md#getparentcount)
- [getRowSpan](CellGroupExt.md#getrowspan)
- [isVisible](CellGroupExt.md#isvisible)
- [log](CellGroupExt.md#log)
- [ownColumn](CellGroupExt.md#owncolumn)
- [toString](CellGroupExt.md#tostring)

## Constructors

### constructor

• **new CellGroupExt**(`cellGroup`, `rowIndex?`, `childIndex?`, `parent?`): [`CellGroupExt`](CellGroupExt.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `cellGroup` | [`CellGroupIf`](../interfaces/CellGroupIf.md) | `undefined` |
| `rowIndex` | `number` | `0` |
| `childIndex` | `number` | `0` |
| `parent?` | [`CellGroupExt`](CellGroupExt.md) | `undefined` |

#### Returns

[`CellGroupExt`](CellGroupExt.md)

#### Overrides

[CellGroup](CellGroup.md).[constructor](CellGroup.md#constructor)

#### Defined in

[lib/table/data/tablemodel/cellgroup/cell-group-ext.ts:12](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/data/tablemodel/cellgroup/cell-group-ext.ts#L12)

## Properties

### childIndex

• **childIndex**: `number` = `0`

#### Defined in

[lib/table/data/tablemodel/cellgroup/cell-group-ext.ts:15](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/data/tablemodel/cellgroup/cell-group-ext.ts#L15)

___

### children

• **children**: `undefined` \| [`CellGroupExt`](CellGroupExt.md)[] = `undefined`

#### Overrides

[CellGroup](CellGroup.md).[children](CellGroup.md#children)

#### Defined in

[lib/table/data/tablemodel/cellgroup/cell-group-ext.ts:8](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/data/tablemodel/cellgroup/cell-group-ext.ts#L8)

___

### closed

• **closed**: `boolean` = `false`

#### Inherited from

[CellGroup](CellGroup.md).[closed](CellGroup.md#closed)

#### Defined in

[lib/table/data/tablemodel/cellgroup/cell-group.ts:11](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/data/tablemodel/cellgroup/cell-group.ts#L11)

___

### data

• **data**: `any`

#### Inherited from

[CellGroup](CellGroup.md).[data](CellGroup.md#data)

#### Defined in

[lib/table/data/tablemodel/cellgroup/cell-group.ts:8](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/data/tablemodel/cellgroup/cell-group.ts#L8)

___

### impl

• **impl**: `string` = `'CellGroupExt'`

#### Overrides

[CellGroup](CellGroup.md).[impl](CellGroup.md#impl)

#### Defined in

[lib/table/data/tablemodel/cellgroup/cell-group-ext.ts:6](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/data/tablemodel/cellgroup/cell-group-ext.ts#L6)

___

### leftNeighbour

• **leftNeighbour**: `undefined` \| [`CellGroupExt`](CellGroupExt.md) = `undefined`

#### Defined in

[lib/table/data/tablemodel/cellgroup/cell-group-ext.ts:9](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/data/tablemodel/cellgroup/cell-group-ext.ts#L9)

___

### parent

• `Optional` **parent**: [`CellGroupExt`](CellGroupExt.md)

#### Defined in

[lib/table/data/tablemodel/cellgroup/cell-group-ext.ts:16](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/data/tablemodel/cellgroup/cell-group-ext.ts#L16)

___

### property

• `Optional` **property**: `string`

#### Inherited from

[CellGroup](CellGroup.md).[property](CellGroup.md#property)

#### Defined in

[lib/table/data/tablemodel/cellgroup/cell-group.ts:9](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/data/tablemodel/cellgroup/cell-group.ts#L9)

___

### rightNeighbour

• **rightNeighbour**: `undefined` \| [`CellGroupExt`](CellGroupExt.md) = `undefined`

#### Defined in

[lib/table/data/tablemodel/cellgroup/cell-group-ext.ts:10](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/data/tablemodel/cellgroup/cell-group-ext.ts#L10)

___

### rowIndex

• **rowIndex**: `number` = `0`

#### Defined in

[lib/table/data/tablemodel/cellgroup/cell-group-ext.ts:14](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/data/tablemodel/cellgroup/cell-group-ext.ts#L14)

___

### toggle

• `Optional` **toggle**: `boolean`

#### Inherited from

[CellGroup](CellGroup.md).[toggle](CellGroup.md#toggle)

#### Defined in

[lib/table/data/tablemodel/cellgroup/cell-group.ts:10](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/data/tablemodel/cellgroup/cell-group.ts#L10)

___

### visibility

• **visibility**: `undefined` \| ``"always"`` \| ``"inverted"`` \| ``"normal"`` = `"normal"`

#### Inherited from

[CellGroup](CellGroup.md).[visibility](CellGroup.md#visibility)

#### Defined in

[lib/table/data/tablemodel/cellgroup/cell-group.ts:12](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/data/tablemodel/cellgroup/cell-group.ts#L12)

## Methods

### claimsSpace

▸ **claimsSpace**(): `boolean`

#### Returns

`boolean`

#### Defined in

[lib/table/data/tablemodel/cellgroup/cell-group-ext.ts:98](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/data/tablemodel/cellgroup/cell-group-ext.ts#L98)

___

### getColumnCount

▸ **getColumnCount**(`cg?`, `ret?`): `number`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `cg` | [`CellGroupExt`](CellGroupExt.md) | `undefined` |
| `ret` | `number` | `0` |

#### Returns

`number`

#### Defined in

[lib/table/data/tablemodel/cellgroup/cell-group-ext.ts:103](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/data/tablemodel/cellgroup/cell-group-ext.ts#L103)

___

### getColumnIndex

▸ **getColumnIndex**(): `number`

#### Returns

`number`

#### Defined in

[lib/table/data/tablemodel/cellgroup/cell-group-ext.ts:37](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/data/tablemodel/cellgroup/cell-group-ext.ts#L37)

___

### getParentCount

▸ **getParentCount**(`cg?`, `ret?`): `number`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `cg` | [`CellGroupExt`](CellGroupExt.md) | `undefined` |
| `ret` | `number` | `0` |

#### Returns

`number`

#### Defined in

[lib/table/data/tablemodel/cellgroup/cell-group-ext.ts:129](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/data/tablemodel/cellgroup/cell-group-ext.ts#L129)

___

### getRowSpan

▸ **getRowSpan**(`cg?`, `maxRowCount`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cg` | [`CellGroupExt`](CellGroupExt.md) |
| `maxRowCount` | `number` |

#### Returns

`number`

#### Defined in

[lib/table/data/tablemodel/cellgroup/cell-group-ext.ts:118](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/data/tablemodel/cellgroup/cell-group-ext.ts#L118)

___

### isVisible

▸ **isVisible**(): `boolean`

#### Returns

`boolean`

#### Defined in

[lib/table/data/tablemodel/cellgroup/cell-group-ext.ts:81](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/data/tablemodel/cellgroup/cell-group-ext.ts#L81)

___

### log

▸ **log**(`maxRowCount`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `maxRowCount` | `number` |

#### Returns

`void`

#### Defined in

[lib/table/data/tablemodel/cellgroup/cell-group-ext.ts:140](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/data/tablemodel/cellgroup/cell-group-ext.ts#L140)

___

### ownColumn

▸ **ownColumn**(): `boolean`

#### Returns

`boolean`

#### Defined in

[lib/table/data/tablemodel/cellgroup/cell-group-ext.ts:28](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/data/tablemodel/cellgroup/cell-group-ext.ts#L28)

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

[lib/table/data/tablemodel/cellgroup/cell-group-ext.ts:32](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/data/tablemodel/cellgroup/cell-group-ext.ts#L32)
