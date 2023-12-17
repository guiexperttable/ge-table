[@guiexpert/table](../README.md) / [Exports](../modules.md) / MouseTargetData

# Class: MouseTargetData

Represents data about a mouse target. It's a helper class to extract all information from the target HTMLElement.

## Table of contents

### Constructors

- [constructor](MouseTargetData.md#constructor)

### Properties

- [action](MouseTargetData.md#action)
- [areaIdent](MouseTargetData.md#areaident)
- [areaModel](MouseTargetData.md#areamodel)
- [className](MouseTargetData.md#classname)
- [colIdx](MouseTargetData.md#colidx)
- [inputType](MouseTargetData.md#inputtype)
- [row](MouseTargetData.md#row)
- [rowIdx](MouseTargetData.md#rowidx)
- [value](MouseTargetData.md#value)

## Constructors

### constructor

• **new MouseTargetData**(`eventTarget`, `tableScope`): [`MouseTargetData`](MouseTargetData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventTarget` | ``null`` \| `EventTarget` |
| `tableScope` | [`TableScope`](TableScope.md) |

#### Returns

[`MouseTargetData`](MouseTargetData.md)

#### Defined in

[lib/table/data/event/mouse-target-data.ts:21](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/event/mouse-target-data.ts#L21)

## Properties

### action

• **action**: ``null`` \| `string` = `null`

#### Defined in

[lib/table/data/event/mouse-target-data.ts:16](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/event/mouse-target-data.ts#L16)

___

### areaIdent

• `Optional` **areaIdent**: [`AreaIdent`](../modules.md#areaident)

#### Defined in

[lib/table/data/event/mouse-target-data.ts:12](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/event/mouse-target-data.ts#L12)

___

### areaModel

• `Optional` **areaModel**: [`AreaModelIf`](../interfaces/AreaModelIf.md)

#### Defined in

[lib/table/data/event/mouse-target-data.ts:13](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/event/mouse-target-data.ts#L13)

___

### className

• **className**: `string` = `""`

#### Defined in

[lib/table/data/event/mouse-target-data.ts:18](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/event/mouse-target-data.ts#L18)

___

### colIdx

• **colIdx**: `number` = `-1`

#### Defined in

[lib/table/data/event/mouse-target-data.ts:11](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/event/mouse-target-data.ts#L11)

___

### inputType

• **inputType**: ``null`` \| `string` = `null`

#### Defined in

[lib/table/data/event/mouse-target-data.ts:17](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/event/mouse-target-data.ts#L17)

___

### row

• `Optional` **row**: `any`

#### Defined in

[lib/table/data/event/mouse-target-data.ts:14](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/event/mouse-target-data.ts#L14)

___

### rowIdx

• **rowIdx**: `number` = `-1`

#### Defined in

[lib/table/data/event/mouse-target-data.ts:10](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/event/mouse-target-data.ts#L10)

___

### value

• `Optional` **value**: `any`

#### Defined in

[lib/table/data/event/mouse-target-data.ts:15](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/event/mouse-target-data.ts#L15)
