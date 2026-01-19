[@guiexpert/table](../README.md) / [Exports](../modules.md) / AutoRestoreOptionsIf

# Interface: AutoRestoreOptionsIf\<T\>

The AutoRestoreOptionsIf interface is utilized to encapsulate options
for managing auto-restoring settings across different states of the application.
This interface is generic and can be used with any type.

**`Typeparam`**

T - Any type that this interface is going to use.

## Type parameters

| Name |
| :------ |
| `T` |

## Implemented by

- [`AutoRestoreOptions`](../classes/AutoRestoreOptions.md)

## Table of contents

### Properties

- [autoRestoreCheckedState](AutoRestoreOptionsIf.md#autorestorecheckedstate)
- [autoRestoreCollapsedExpandedState](AutoRestoreOptionsIf.md#autorestorecollapsedexpandedstate)
- [autoRestoreScrollPosition](AutoRestoreOptionsIf.md#autorestorescrollposition)
- [autoRestoreSelectedState](AutoRestoreOptionsIf.md#autorestoreselectedstate)
- [autoRestoreSortingState](AutoRestoreOptionsIf.md#autorestoresortingstate)
- [getRowId](AutoRestoreOptionsIf.md#getrowid)
- [getStorageKeyFn](AutoRestoreOptionsIf.md#getstoragekeyfn)
- [isSame](AutoRestoreOptionsIf.md#issame)

## Properties

### autoRestoreCheckedState

• `Optional` **autoRestoreCheckedState**: `boolean`

Optional. If true, the checked state of
T elements will be preserved after changes in the application state.

#### Defined in

[lib/table/data/options/auto-restore-options.if.ts:76](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/options/auto-restore-options.if.ts#L76)

___

### autoRestoreCollapsedExpandedState

• `Optional` **autoRestoreCollapsedExpandedState**: `boolean`

Optional. If true,
the expanded/collapsed state of T elements will be preserved after changes in the application state.

#### Defined in

[lib/table/data/options/auto-restore-options.if.ts:73](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/options/auto-restore-options.if.ts#L73)

___

### autoRestoreScrollPosition

• `Optional` **autoRestoreScrollPosition**: `boolean`

Optional. If true, the scroll position
in the list of T elements will be preserved after changes in the application state.

#### Defined in

[lib/table/data/options/auto-restore-options.if.ts:74](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/options/auto-restore-options.if.ts#L74)

___

### autoRestoreSelectedState

• `Optional` **autoRestoreSelectedState**: `boolean`

Optional. If true, the selected state of
T elements will be preserved after changes in the application state.

#### Defined in

[lib/table/data/options/auto-restore-options.if.ts:77](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/options/auto-restore-options.if.ts#L77)

___

### autoRestoreSortingState

• **autoRestoreSortingState**: `boolean`

If true, the sorting state of
T elements will be preserved after changes in the application state.

#### Defined in

[lib/table/data/options/auto-restore-options.if.ts:72](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/options/auto-restore-options.if.ts#L72)

___

### getRowId

• `Optional` **getRowId**: [`GetRowIdFn`](../modules.md#getrowidfn)\<`T`\>

Function for generating a unique identifier
for an instance of T. If not provided, each instance of T will create a new entry every time state is saved.

#### Defined in

[lib/table/data/options/auto-restore-options.if.ts:79](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/options/auto-restore-options.if.ts#L79)

___

### getStorageKeyFn

• `Optional` **getStorageKeyFn**: [`GetStorageKeyFn`](../modules.md#getstoragekeyfn)

Function for generating a unique key used for storage.
If not provided, a constant key 'autorestoreoptionsif' will be used.

#### Defined in

[lib/table/data/options/auto-restore-options.if.ts:80](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/options/auto-restore-options.if.ts#L80)

___

### isSame

• `Optional` **isSame**: [`IsSameFn`](../modules.md#issamefn)\<`T`\>

Function for checking
if two instances of T are considered the same when restoring state. If not provided, strict equality check (===) will be used.

#### Defined in

[lib/table/data/options/auto-restore-options.if.ts:81](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/options/auto-restore-options.if.ts#L81)
