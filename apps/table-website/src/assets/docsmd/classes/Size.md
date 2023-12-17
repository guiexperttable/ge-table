[@guiexpert/table](../README.md) / [Exports](../modules.md) / Size

# Class: Size

Represents a size with a value and unit. At the moment only unit 'px' is implemented in the calculations.

## Implements

- [`SizeIf`](../interfaces/SizeIf.md)

## Table of contents

### Constructors

- [constructor](Size.md#constructor)

### Properties

- [unit](Size.md#unit)
- [value](Size.md#value)

## Constructors

### constructor

• **new Size**(`value?`, `unit?`): [`Size`](Size.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `value` | `number` | `100` |
| `unit` | ``"px"`` \| ``"%"`` | `"px"` |

#### Returns

[`Size`](Size.md)

#### Defined in

[lib/table/data/common/size.ts:4](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/common/size.ts#L4)

## Properties

### unit

• **unit**: ``"px"`` \| ``"%"`` = `"px"`

#### Implementation of

[SizeIf](../interfaces/SizeIf.md).[unit](../interfaces/SizeIf.md#unit)

#### Defined in

[lib/table/data/common/size.ts:6](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/common/size.ts#L6)

___

### value

• **value**: `number` = `100`

#### Implementation of

[SizeIf](../interfaces/SizeIf.md).[value](../interfaces/SizeIf.md#value)

#### Defined in

[lib/table/data/common/size.ts:5](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/common/size.ts#L5)
