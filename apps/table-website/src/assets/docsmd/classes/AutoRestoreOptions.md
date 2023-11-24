[@guiexpert/table](../README.md) / [Exports](../modules.md) / AutoRestoreOptions

# Class: AutoRestoreOptions\<T\>

See TableOptionsIf#autoRestoreOptions()

## Type parameters

| Name |
| :------ |
| `T` |

## Implements

- [`AutoRestoreOptionsIf`](../interfaces/AutoRestoreOptionsIf.md)\<`T`\>

## Table of contents

### Constructors

- [constructor](AutoRestoreOptions.md#constructor)

### Properties

- [autoRestoreCheckedState](AutoRestoreOptions.md#autorestorecheckedstate)
- [autoRestoreCollapsedExpandedState](AutoRestoreOptions.md#autorestorecollapsedexpandedstate)
- [autoRestoreScrollPosition](AutoRestoreOptions.md#autorestorescrollposition)
- [autoRestoreSelectedState](AutoRestoreOptions.md#autorestoreselectedstate)
- [autoRestoreSortingState](AutoRestoreOptions.md#autorestoresortingstate)
- [getStorageKeyFn](AutoRestoreOptions.md#getstoragekeyfn)

### Methods

- [getRowId](AutoRestoreOptions.md#getrowid)
- [isSame](AutoRestoreOptions.md#issame)

## Constructors

### constructor

• **new AutoRestoreOptions**\<`T`\>(): [`AutoRestoreOptions`](AutoRestoreOptions.md)\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`AutoRestoreOptions`](AutoRestoreOptions.md)\<`T`\>

## Properties

### autoRestoreCheckedState

• **autoRestoreCheckedState**: `boolean` = `false`

#### Implementation of

[AutoRestoreOptionsIf](../interfaces/AutoRestoreOptionsIf.md).[autoRestoreCheckedState](../interfaces/AutoRestoreOptionsIf.md#autorestorecheckedstate)

#### Defined in

[lib/table/data/options/auto-restore-options.ts:10](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/data/options/auto-restore-options.ts#L10)

___

### autoRestoreCollapsedExpandedState

• **autoRestoreCollapsedExpandedState**: `boolean` = `false`

#### Implementation of

[AutoRestoreOptionsIf](../interfaces/AutoRestoreOptionsIf.md).[autoRestoreCollapsedExpandedState](../interfaces/AutoRestoreOptionsIf.md#autorestorecollapsedexpandedstate)

#### Defined in

[lib/table/data/options/auto-restore-options.ts:7](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/data/options/auto-restore-options.ts#L7)

___

### autoRestoreScrollPosition

• **autoRestoreScrollPosition**: `boolean` = `false`

#### Implementation of

[AutoRestoreOptionsIf](../interfaces/AutoRestoreOptionsIf.md).[autoRestoreScrollPosition](../interfaces/AutoRestoreOptionsIf.md#autorestorescrollposition)

#### Defined in

[lib/table/data/options/auto-restore-options.ts:8](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/data/options/auto-restore-options.ts#L8)

___

### autoRestoreSelectedState

• **autoRestoreSelectedState**: `boolean` = `false`

#### Implementation of

[AutoRestoreOptionsIf](../interfaces/AutoRestoreOptionsIf.md).[autoRestoreSelectedState](../interfaces/AutoRestoreOptionsIf.md#autorestoreselectedstate)

#### Defined in

[lib/table/data/options/auto-restore-options.ts:11](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/data/options/auto-restore-options.ts#L11)

___

### autoRestoreSortingState

• **autoRestoreSortingState**: `boolean` = `false`

#### Implementation of

[AutoRestoreOptionsIf](../interfaces/AutoRestoreOptionsIf.md).[autoRestoreSortingState](../interfaces/AutoRestoreOptionsIf.md#autorestoresortingstate)

#### Defined in

[lib/table/data/options/auto-restore-options.ts:6](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/data/options/auto-restore-options.ts#L6)

___

### getStorageKeyFn

• **getStorageKeyFn**: `undefined` = `undefined`

#### Implementation of

[AutoRestoreOptionsIf](../interfaces/AutoRestoreOptionsIf.md).[getStorageKeyFn](../interfaces/AutoRestoreOptionsIf.md#getstoragekeyfn)

#### Defined in

[lib/table/data/options/auto-restore-options.ts:14](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/data/options/auto-restore-options.ts#L14)

## Methods

### getRowId

▸ **getRowId**(`row`): `string` \| `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `row` | `T` |

#### Returns

`string` \| `number`

#### Implementation of

AutoRestoreOptionsIf.getRowId

#### Defined in

[lib/table/data/options/auto-restore-options.ts:28](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/data/options/auto-restore-options.ts#L28)

___

### isSame

▸ **isSame**(`r1`, `r2`, `options`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `r1` | `T` |
| `r2` | `T` |
| `options` | [`AutoRestoreOptionsIf`](../interfaces/AutoRestoreOptionsIf.md)\<`T`\> |

#### Returns

`boolean`

#### Implementation of

AutoRestoreOptionsIf.isSame

#### Defined in

[lib/table/data/options/auto-restore-options.ts:17](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/data/options/auto-restore-options.ts#L17)
