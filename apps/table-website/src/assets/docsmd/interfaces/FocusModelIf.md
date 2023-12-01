[@guiexpert/table](../README.md) / [Exports](../modules.md) / FocusModelIf

# Interface: FocusModelIf

## Implemented by

- [`FocusModel`](../classes/FocusModel.md)

## Table of contents

### Methods

- [clear](FocusModelIf.md#clear)
- [clearChanged](FocusModelIf.md#clearchanged)
- [getFocus](FocusModelIf.md#getfocus)
- [hasChanged](FocusModelIf.md#haschanged)
- [hasFocus](FocusModelIf.md#hasfocus)
- [setFocus](FocusModelIf.md#setfocus)

## Methods

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Defined in

[lib/table/focus/focus-model.if.ts:3](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/focus/focus-model.if.ts#L3)

___

### clearChanged

▸ **clearChanged**(): `void`

#### Returns

`void`

#### Defined in

[lib/table/focus/focus-model.if.ts:13](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/focus/focus-model.if.ts#L13)

___

### getFocus

▸ **getFocus**(): [`number`, `number`]

#### Returns

[`number`, `number`]

#### Defined in

[lib/table/focus/focus-model.if.ts:9](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/focus/focus-model.if.ts#L9)

___

### hasChanged

▸ **hasChanged**(): `boolean`

#### Returns

`boolean`

#### Defined in

[lib/table/focus/focus-model.if.ts:11](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/focus/focus-model.if.ts#L11)

___

### hasFocus

▸ **hasFocus**(`rowIndex`, `columnIndex`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rowIndex` | `number` |
| `columnIndex` | `number` |

#### Returns

`boolean`

#### Defined in

[lib/table/focus/focus-model.if.ts:7](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/focus/focus-model.if.ts#L7)

___

### setFocus

▸ **setFocus**(`rowIndex`, `columnIndex`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rowIndex` | `number` |
| `columnIndex` | `number` |

#### Returns

`void`

#### Defined in

[lib/table/focus/focus-model.if.ts:5](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/focus/focus-model.if.ts#L5)
