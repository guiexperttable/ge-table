[@guiexpert/table](../README.md) / [Exports](../modules.md) / StoreStateSortingService

# Class: StoreStateSortingService

## Hierarchy

- `AbstractStoreStateService`

  ↳ **`StoreStateSortingService`**

## Table of contents

### Constructors

- [constructor](StoreStateSortingService.md#constructor)

### Properties

- [SORTING\_STATE](StoreStateSortingService.md#sorting_state)
- [getStorageKeyFn](StoreStateSortingService.md#getstoragekeyfn)
- [sortItems](StoreStateSortingService.md#sortitems)

### Methods

- [autoConvertMapToObject](StoreStateSortingService.md#autoconvertmaptoobject)
- [checkAndPersistItem](StoreStateSortingService.md#checkandpersistitem)
- [getSortItems](StoreStateSortingService.md#getsortitems)
- [load](StoreStateSortingService.md#load)
- [loadFromLocalStorage](StoreStateSortingService.md#loadfromlocalstorage)
- [persistItem](StoreStateSortingService.md#persistitem)
- [setSortItems](StoreStateSortingService.md#setsortitems)

## Constructors

### constructor

• **new StoreStateSortingService**(`fn`): [`StoreStateSortingService`](StoreStateSortingService.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | `undefined` \| [`GetStorageKeyFn`](../modules.md#getstoragekeyfn) |

#### Returns

[`StoreStateSortingService`](StoreStateSortingService.md)

#### Overrides

AbstractStoreStateService.constructor

#### Defined in

[lib/table/service/store-state-sorting.service.ts:12](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/service/store-state-sorting.service.ts#L12)

## Properties

### SORTING\_STATE

• `Private` `Readonly` **SORTING\_STATE**: ``"sortingState"``

#### Defined in

[lib/table/service/store-state-sorting.service.ts:8](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/service/store-state-sorting.service.ts#L8)

___

### getStorageKeyFn

• `Protected` `Optional` **getStorageKeyFn**: [`GetStorageKeyFn`](../modules.md#getstoragekeyfn)

#### Inherited from

AbstractStoreStateService.getStorageKeyFn

#### Defined in

[lib/table/service/abstract-store-state.service.ts:7](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/service/abstract-store-state.service.ts#L7)

___

### sortItems

• `Private` **sortItems**: [`SortItem`](SortItem.md)[] = `[]`

#### Defined in

[lib/table/service/store-state-sorting.service.ts:9](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/service/store-state-sorting.service.ts#L9)

## Methods

### autoConvertMapToObject

▸ **autoConvertMapToObject**(`item`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `any` |

#### Returns

`Object`

#### Inherited from

AbstractStoreStateService.autoConvertMapToObject

#### Defined in

[lib/table/service/abstract-store-state.service.ts:14](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/service/abstract-store-state.service.ts#L14)

___

### checkAndPersistItem

▸ **checkAndPersistItem**(`keySuffix`, `item`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `keySuffix` | `string` |
| `item` | `any` |

#### Returns

`void`

#### Inherited from

AbstractStoreStateService.checkAndPersistItem

#### Defined in

[lib/table/service/abstract-store-state.service.ts:35](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/service/abstract-store-state.service.ts#L35)

___

### getSortItems

▸ **getSortItems**(): [`SortItem`](SortItem.md)[]

#### Returns

[`SortItem`](SortItem.md)[]

#### Defined in

[lib/table/service/store-state-sorting.service.ts:17](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/service/store-state-sorting.service.ts#L17)

___

### load

▸ **load**(): `void`

#### Returns

`void`

#### Overrides

AbstractStoreStateService.load

#### Defined in

[lib/table/service/store-state-sorting.service.ts:27](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/service/store-state-sorting.service.ts#L27)

___

### loadFromLocalStorage

▸ **loadFromLocalStorage**\<`U`\>(`subKey`): ``null`` \| `U`

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `subKey` | `string` |

#### Returns

``null`` \| `U`

#### Inherited from

AbstractStoreStateService.loadFromLocalStorage

#### Defined in

[lib/table/service/abstract-store-state.service.ts:60](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/service/abstract-store-state.service.ts#L60)

___

### persistItem

▸ **persistItem**(`subKey`, `item`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `subKey` | `string` |
| `item` | `string` \| `object` |

#### Returns

`void`

#### Inherited from

AbstractStoreStateService.persistItem

#### Defined in

[lib/table/service/abstract-store-state.service.ts:52](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/service/abstract-store-state.service.ts#L52)

___

### setSortItems

▸ **setSortItems**(`sortItems`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `sortItems` | [`SortItem`](SortItem.md)[] |

#### Returns

`void`

#### Defined in

[lib/table/service/store-state-sorting.service.ts:21](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/service/store-state-sorting.service.ts#L21)
