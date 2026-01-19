[@guiexpert/table](../README.md) / [Exports](../modules.md) / FocusModelIf

# Interface: FocusModelIf

## Implemented by

- [`FocusModel`](../classes/FocusModel.md)

## Table of contents

### Methods

- [addEventFocusChangedListener](FocusModelIf.md#addeventfocuschangedlistener)
- [clear](FocusModelIf.md#clear)
- [clearChanged](FocusModelIf.md#clearchanged)
- [getEventFocusChangedListeners](FocusModelIf.md#geteventfocuschangedlisteners)
- [getFocus](FocusModelIf.md#getfocus)
- [hasChanged](FocusModelIf.md#haschanged)
- [hasFocus](FocusModelIf.md#hasfocus)
- [removeEventFocusChangedListener](FocusModelIf.md#removeeventfocuschangedlistener)
- [setFocus](FocusModelIf.md#setfocus)

## Methods

### addEventFocusChangedListener

▸ **addEventFocusChangedListener**(`listener`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | [`EventFocusChangedListenerIf`](EventFocusChangedListenerIf.md) |

#### Returns

`void`

#### Defined in

[lib/table/focus/focus-model.if.ts:6](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/focus/focus-model.if.ts#L6)

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Defined in

[lib/table/focus/focus-model.if.ts:9](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/focus/focus-model.if.ts#L9)

___

### clearChanged

▸ **clearChanged**(): `void`

#### Returns

`void`

#### Defined in

[lib/table/focus/focus-model.if.ts:19](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/focus/focus-model.if.ts#L19)

___

### getEventFocusChangedListeners

▸ **getEventFocusChangedListeners**(): [`EventFocusChangedListenerIf`](EventFocusChangedListenerIf.md)[]

#### Returns

[`EventFocusChangedListenerIf`](EventFocusChangedListenerIf.md)[]

#### Defined in

[lib/table/focus/focus-model.if.ts:5](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/focus/focus-model.if.ts#L5)

___

### getFocus

▸ **getFocus**(): [`number`, `number`]

#### Returns

[`number`, `number`]

#### Defined in

[lib/table/focus/focus-model.if.ts:15](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/focus/focus-model.if.ts#L15)

___

### hasChanged

▸ **hasChanged**(): `boolean`

#### Returns

`boolean`

#### Defined in

[lib/table/focus/focus-model.if.ts:17](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/focus/focus-model.if.ts#L17)

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

[lib/table/focus/focus-model.if.ts:13](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/focus/focus-model.if.ts#L13)

___

### removeEventFocusChangedListener

▸ **removeEventFocusChangedListener**(`listener`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | [`EventFocusChangedListenerIf`](EventFocusChangedListenerIf.md) |

#### Returns

`void`

#### Defined in

[lib/table/focus/focus-model.if.ts:7](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/focus/focus-model.if.ts#L7)

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

[lib/table/focus/focus-model.if.ts:11](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/focus/focus-model.if.ts#L11)
