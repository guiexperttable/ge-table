[@guiexpert/table](../README.md) / [Exports](../modules.md) / FocusModel

# Class: FocusModel

## Implements

- [`FocusModelIf`](../interfaces/FocusModelIf.md)

## Table of contents

### Constructors

- [constructor](FocusModel.md#constructor)

### Properties

- [changed](FocusModel.md#changed)
- [columnIndex](FocusModel.md#columnindex)
- [rowIndex](FocusModel.md#rowindex)
- [selectionType](FocusModel.md#selectiontype)

### Methods

- [clear](FocusModel.md#clear)
- [clearChanged](FocusModel.md#clearchanged)
- [getFocus](FocusModel.md#getfocus)
- [hasChanged](FocusModel.md#haschanged)
- [hasFocus](FocusModel.md#hasfocus)
- [setFocus](FocusModel.md#setfocus)

## Constructors

### constructor

• **new FocusModel**(`selectionType?`): [`FocusModel`](FocusModel.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `selectionType` | [`FocusType`](../modules.md#focustype) | `"none"` |

#### Returns

[`FocusModel`](FocusModel.md)

#### Defined in

[lib/table/focus/focus-model.ts:10](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/focus/focus-model.ts#L10)

## Properties

### changed

• `Protected` **changed**: `boolean` = `false`

#### Defined in

[lib/table/focus/focus-model.ts:8](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/focus/focus-model.ts#L8)

___

### columnIndex

• `Protected` **columnIndex**: `number` = `-1`

#### Defined in

[lib/table/focus/focus-model.ts:7](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/focus/focus-model.ts#L7)

___

### rowIndex

• `Protected` **rowIndex**: `number` = `-1`

#### Defined in

[lib/table/focus/focus-model.ts:6](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/focus/focus-model.ts#L6)

___

### selectionType

• **selectionType**: [`FocusType`](../modules.md#focustype) = `"none"`

#### Defined in

[lib/table/focus/focus-model.ts:11](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/focus/focus-model.ts#L11)

## Methods

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Implementation of

[FocusModelIf](../interfaces/FocusModelIf.md).[clear](../interfaces/FocusModelIf.md#clear)

#### Defined in

[lib/table/focus/focus-model.ts:23](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/focus/focus-model.ts#L23)

___

### clearChanged

▸ **clearChanged**(): `void`

#### Returns

`void`

#### Implementation of

[FocusModelIf](../interfaces/FocusModelIf.md).[clearChanged](../interfaces/FocusModelIf.md#clearchanged)

#### Defined in

[lib/table/focus/focus-model.ts:15](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/focus/focus-model.ts#L15)

___

### getFocus

▸ **getFocus**(): [`number`, `number`]

#### Returns

[`number`, `number`]

#### Implementation of

[FocusModelIf](../interfaces/FocusModelIf.md).[getFocus](../interfaces/FocusModelIf.md#getfocus)

#### Defined in

[lib/table/focus/focus-model.ts:44](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/focus/focus-model.ts#L44)

___

### hasChanged

▸ **hasChanged**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[FocusModelIf](../interfaces/FocusModelIf.md).[hasChanged](../interfaces/FocusModelIf.md#haschanged)

#### Defined in

[lib/table/focus/focus-model.ts:19](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/focus/focus-model.ts#L19)

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

#### Implementation of

[FocusModelIf](../interfaces/FocusModelIf.md).[hasFocus](../interfaces/FocusModelIf.md#hasfocus)

#### Defined in

[lib/table/focus/focus-model.ts:40](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/focus/focus-model.ts#L40)

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

#### Implementation of

[FocusModelIf](../interfaces/FocusModelIf.md).[setFocus](../interfaces/FocusModelIf.md#setfocus)

#### Defined in

[lib/table/focus/focus-model.ts:29](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/focus/focus-model.ts#L29)
