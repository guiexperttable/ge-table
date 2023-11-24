[@guiexpert/table](../README.md) / [Exports](../modules.md) / CellGroup

# Class: CellGroup

## Hierarchy

- **`CellGroup`**

  ↳ [`CellGroupExt`](CellGroupExt.md)

## Implements

- [`CellGroupIf`](../interfaces/CellGroupIf.md)

## Table of contents

### Constructors

- [constructor](CellGroup.md#constructor)

### Properties

- [children](CellGroup.md#children)
- [closed](CellGroup.md#closed)
- [orderData](CellGroup.md#orderData)
- [impl](CellGroup.md#impl)
- [property](CellGroup.md#property)
- [toggle](CellGroup.md#toggle)
- [visibility](CellGroup.md#visibility)

## Constructors

### constructor

• **new CellGroup**(`orderData`, `property?`, `toggle?`, `closed?`, `visibility?`, `children?`): [`CellGroup`](CellGroup.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `orderData` | `any` | `undefined` |
| `property?` | `string` | `undefined` |
| `toggle?` | `boolean` | `undefined` |
| `closed` | `boolean` | `false` |
| `visibility` | `undefined` \| ``"always"`` \| ``"inverted"`` \| ``"normal"`` | `"normal"` |
| `children` | `undefined` \| [`CellGroupIf`](../interfaces/CellGroupIf.md)[] | `undefined` |

#### Returns

[`CellGroup`](CellGroup.md)

#### Defined in

[lib/table/orderData/tablemodel/cellgroup/cell-group.ts:7](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/orderData/tablemodel/cellgroup/cell-group.ts#L7)

## Properties

### children

• **children**: `undefined` \| [`CellGroupIf`](../interfaces/CellGroupIf.md)[] = `undefined`

#### Implementation of

[CellGroupIf](../interfaces/CellGroupIf.md).[children](../interfaces/CellGroupIf.md#children)

#### Defined in

[lib/table/orderData/tablemodel/cellgroup/cell-group.ts:13](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/orderData/tablemodel/cellgroup/cell-group.ts#L13)

___

### closed

• **closed**: `boolean` = `false`

#### Implementation of

[CellGroupIf](../interfaces/CellGroupIf.md).[closed](../interfaces/CellGroupIf.md#closed)

#### Defined in

[lib/table/orderData/tablemodel/cellgroup/cell-group.ts:11](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/orderData/tablemodel/cellgroup/cell-group.ts#L11)

___

### orderData

• **orderData**: `any`

#### Implementation of

[CellGroupIf](../interfaces/CellGroupIf.md).[orderData](../interfaces/CellGroupIf.md#orderData)

#### Defined in

[lib/table/orderData/tablemodel/cellgroup/cell-group.ts:8](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/orderData/tablemodel/cellgroup/cell-group.ts#L8)

___

### impl

• **impl**: `string` = `'CellGroup'`

#### Implementation of

[CellGroupIf](../interfaces/CellGroupIf.md).[impl](../interfaces/CellGroupIf.md#impl)

#### Defined in

[lib/table/orderData/tablemodel/cellgroup/cell-group.ts:5](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/orderData/tablemodel/cellgroup/cell-group.ts#L5)

___

### property

• `Optional` **property**: `string`

#### Implementation of

[CellGroupIf](../interfaces/CellGroupIf.md).[property](../interfaces/CellGroupIf.md#property)

#### Defined in

[lib/table/orderData/tablemodel/cellgroup/cell-group.ts:9](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/orderData/tablemodel/cellgroup/cell-group.ts#L9)

___

### toggle

• `Optional` **toggle**: `boolean`

#### Implementation of

[CellGroupIf](../interfaces/CellGroupIf.md).[toggle](../interfaces/CellGroupIf.md#toggle)

#### Defined in

[lib/table/orderData/tablemodel/cellgroup/cell-group.ts:10](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/orderData/tablemodel/cellgroup/cell-group.ts#L10)

___

### visibility

• **visibility**: `undefined` \| ``"always"`` \| ``"inverted"`` \| ``"normal"`` = `"normal"`

#### Implementation of

[CellGroupIf](../interfaces/CellGroupIf.md).[visibility](../interfaces/CellGroupIf.md#visibility)

#### Defined in

[lib/table/orderData/tablemodel/cellgroup/cell-group.ts:12](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/orderData/tablemodel/cellgroup/cell-group.ts#L12)
