[@guiexpert/table](../README.md) / [Exports](../modules.md) / FocusModel

# Class: FocusModel

The `FocusModel` class is an implementation of the `FocusModelIf` interface.
It provides core functionality to manage focus inside a data grid or spreadsheet-like structure.
The focus can be set to a specific cell or to the whole row.
This class also maintains a list of `EventFocusChangedListenerIf` instances and notifies them
whenever there is a change in focus.

## Instance Properties:
 - `selectionType: FocusType` — Specifies the type of selection that is currently in focus. It could be either a specific cell or the whole row. Defaults to "none".
 - `rowIndex: number` — Specifies the row index of the cell that is currently in focus.
 - `columnIndex: number` — Specifies the column index of the cell that is currently in focus.
 - `listenerArr: EventFocusChangedListenerIf[]` — An array of `EventFocusChangedListenerIf` instances. These instances will be triggered when the focus changes.
 - `changed` — A boolean flag to check if the focus has changed since the last trigger.

## Instance Methods:
 - `getEventFocusChangedListeners` — Returns an array of `EventFocusChangedListenerIf` instances.
 - `addEventFocusChangedListener(listener: EventFocusChangedListenerIf): void` — Adds a listener to the listeners array, if it's not already present.
 - `removeEventFocusChangedListener(listener: EventFocusChangedListenerIf): void` — Removes a listener from the listeners array.
 - `clear`: void  — Clears the current focus.
 - `setFocus(rowIndex: number, columnIndex: number): void` — Sets focus on a given cell.
 - `hasChanged(): boolean` — Checks if the focus has changed.
 - `clearChanged`: void — Clears the `changed` flag.
 - `hasFocus(rowIndex: number, columnIndex: number): boolean` — Checks if a given cell is in focus.
 - `getFocus(): [number, number]` — Returns the row and column indexes of the cell that's currently in focus.

## Usage Example
 ```typescript

class MyFocusChangeListener implements EventFocusChangedListenerIf {
  onFocusChanged(model: FocusModelIf): void {
    console.log('Focus changed: ', model.getFocus());
  }
}
let focusModel = new FocusModel("cell");
focusModel.addEventFocusChangedListener(new MyFocusChangeListener());
focusModel.setFocus(2, 3);
```

**`See`**

 - [FocusType](./FocusType.md)
 - [EventFocusChangedListenerIf](./EventFocusChangedListenerIf.md)

**`Implements`**

## Implements

- [`FocusModelIf`](../interfaces/FocusModelIf.md)

## Table of contents

### Constructors

- [constructor](FocusModel.md#constructor)

### Properties

- [changed](FocusModel.md#changed)
- [columnIndex](FocusModel.md#columnindex)
- [listenerArr](FocusModel.md#listenerarr)
- [rowIndex](FocusModel.md#rowindex)
- [selectionType](FocusModel.md#selectiontype)

### Methods

- [addEventFocusChangedListener](FocusModel.md#addeventfocuschangedlistener)
- [clear](FocusModel.md#clear)
- [clearChanged](FocusModel.md#clearchanged)
- [fireChangeEvent](FocusModel.md#firechangeevent)
- [getEventFocusChangedListeners](FocusModel.md#geteventfocuschangedlisteners)
- [getFocus](FocusModel.md#getfocus)
- [hasChanged](FocusModel.md#haschanged)
- [hasFocus](FocusModel.md#hasfocus)
- [removeEventFocusChangedListener](FocusModel.md#removeeventfocuschangedlistener)
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

[lib/table/focus/focus-model.ts:58](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/focus/focus-model.ts#L58)

## Properties

### changed

• `Protected` **changed**: `boolean` = `false`

#### Defined in

[lib/table/focus/focus-model.ts:54](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/focus/focus-model.ts#L54)

___

### columnIndex

• `Protected` **columnIndex**: `number` = `-1`

#### Defined in

[lib/table/focus/focus-model.ts:53](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/focus/focus-model.ts#L53)

___

### listenerArr

• `Private` **listenerArr**: [`EventFocusChangedListenerIf`](../interfaces/EventFocusChangedListenerIf.md)[] = `[]`

#### Defined in

[lib/table/focus/focus-model.ts:56](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/focus/focus-model.ts#L56)

___

### rowIndex

• `Protected` **rowIndex**: `number` = `-1`

#### Defined in

[lib/table/focus/focus-model.ts:52](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/focus/focus-model.ts#L52)

___

### selectionType

• **selectionType**: [`FocusType`](../modules.md#focustype) = `"none"`

#### Defined in

[lib/table/focus/focus-model.ts:59](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/focus/focus-model.ts#L59)

## Methods

### addEventFocusChangedListener

▸ **addEventFocusChangedListener**(`listener`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | [`EventFocusChangedListenerIf`](../interfaces/EventFocusChangedListenerIf.md) |

#### Returns

`void`

#### Implementation of

[FocusModelIf](../interfaces/FocusModelIf.md).[addEventFocusChangedListener](../interfaces/FocusModelIf.md#addeventfocuschangedlistener)

#### Defined in

[lib/table/focus/focus-model.ts:67](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/focus/focus-model.ts#L67)

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Implementation of

[FocusModelIf](../interfaces/FocusModelIf.md).[clear](../interfaces/FocusModelIf.md#clear)

#### Defined in

[lib/table/focus/focus-model.ts:93](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/focus/focus-model.ts#L93)

___

### clearChanged

▸ **clearChanged**(): `void`

#### Returns

`void`

#### Implementation of

[FocusModelIf](../interfaces/FocusModelIf.md).[clearChanged](../interfaces/FocusModelIf.md#clearchanged)

#### Defined in

[lib/table/focus/focus-model.ts:85](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/focus/focus-model.ts#L85)

___

### fireChangeEvent

▸ **fireChangeEvent**(): `void`

#### Returns

`void`

#### Defined in

[lib/table/focus/focus-model.ts:81](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/focus/focus-model.ts#L81)

___

### getEventFocusChangedListeners

▸ **getEventFocusChangedListeners**(): [`EventFocusChangedListenerIf`](../interfaces/EventFocusChangedListenerIf.md)[]

#### Returns

[`EventFocusChangedListenerIf`](../interfaces/EventFocusChangedListenerIf.md)[]

#### Implementation of

[FocusModelIf](../interfaces/FocusModelIf.md).[getEventFocusChangedListeners](../interfaces/FocusModelIf.md#geteventfocuschangedlisteners)

#### Defined in

[lib/table/focus/focus-model.ts:63](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/focus/focus-model.ts#L63)

___

### getFocus

▸ **getFocus**(): [`number`, `number`]

#### Returns

[`number`, `number`]

#### Implementation of

[FocusModelIf](../interfaces/FocusModelIf.md).[getFocus](../interfaces/FocusModelIf.md#getfocus)

#### Defined in

[lib/table/focus/focus-model.ts:116](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/focus/focus-model.ts#L116)

___

### hasChanged

▸ **hasChanged**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[FocusModelIf](../interfaces/FocusModelIf.md).[hasChanged](../interfaces/FocusModelIf.md#haschanged)

#### Defined in

[lib/table/focus/focus-model.ts:89](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/focus/focus-model.ts#L89)

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

[lib/table/focus/focus-model.ts:112](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/focus/focus-model.ts#L112)

___

### removeEventFocusChangedListener

▸ **removeEventFocusChangedListener**(`listener`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | [`EventFocusChangedListenerIf`](../interfaces/EventFocusChangedListenerIf.md) |

#### Returns

`void`

#### Implementation of

[FocusModelIf](../interfaces/FocusModelIf.md).[removeEventFocusChangedListener](../interfaces/FocusModelIf.md#removeeventfocuschangedlistener)

#### Defined in

[lib/table/focus/focus-model.ts:73](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/focus/focus-model.ts#L73)

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

[lib/table/focus/focus-model.ts:100](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/focus/focus-model.ts#L100)
