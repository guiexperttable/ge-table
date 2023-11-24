[@guiexpert/table](../README.md) / [Exports](../modules.md) / StoreStateScrollPosService

# Class: StoreStateScrollPosService

## Hierarchy

- `AbstractStoreStateService`

  ↳ **`StoreStateScrollPosService`**

## Table of contents

### Constructors

- [constructor](StoreStateScrollPosService.md#constructor)

### Properties

- [SCROLL\_STATE](StoreStateScrollPosService.md#scroll_state)
- [getStorageKeyFn](StoreStateScrollPosService.md#getstoragekeyfn)
- [scrollOffset](StoreStateScrollPosService.md#scrolloffset)

### Methods

- [autoConvertMapToObject](StoreStateScrollPosService.md#autoconvertmaptoobject)
- [checkAndPersistItem](StoreStateScrollPosService.md#checkandpersistitem)
- [getScrollOffset](StoreStateScrollPosService.md#getscrolloffset)
- [load](StoreStateScrollPosService.md#load)
- [loadFromLocalStorage](StoreStateScrollPosService.md#loadfromlocalstorage)
- [persistItem](StoreStateScrollPosService.md#persistitem)
- [updateScrollOffset](StoreStateScrollPosService.md#updatescrolloffset)

## Constructors

### constructor

• **new StoreStateScrollPosService**(`fn`): [`StoreStateScrollPosService`](StoreStateScrollPosService.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | `undefined` \| [`GetStorageKeyFn`](../modules.md#getstoragekeyfn) |

#### Returns

[`StoreStateScrollPosService`](StoreStateScrollPosService.md)

#### Overrides

AbstractStoreStateService.constructor

#### Defined in

[lib/table/service/store-state-scroll-pos.service.ts:11](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/service/store-state-scroll-pos.service.ts#L11)

## Properties

### SCROLL\_STATE

• `Private` `Readonly` **SCROLL\_STATE**: ``"scrollState"``

#### Defined in

[lib/table/service/store-state-scroll-pos.service.ts:7](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/service/store-state-scroll-pos.service.ts#L7)

___

### getStorageKeyFn

• `Protected` `Optional` **getStorageKeyFn**: [`GetStorageKeyFn`](../modules.md#getstoragekeyfn)

#### Inherited from

AbstractStoreStateService.getStorageKeyFn

#### Defined in

[lib/table/service/abstract-store-state.service.ts:7](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/service/abstract-store-state.service.ts#L7)

___

### scrollOffset

• `Private` **scrollOffset**: [`number`, `number`]

#### Defined in

[lib/table/service/store-state-scroll-pos.service.ts:8](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/service/store-state-scroll-pos.service.ts#L8)

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

[lib/table/service/abstract-store-state.service.ts:14](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/service/abstract-store-state.service.ts#L14)

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

[lib/table/service/abstract-store-state.service.ts:35](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/service/abstract-store-state.service.ts#L35)

___

### getScrollOffset

▸ **getScrollOffset**(): [`number`, `number`]

#### Returns

[`number`, `number`]

#### Defined in

[lib/table/service/store-state-scroll-pos.service.ts:16](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/service/store-state-scroll-pos.service.ts#L16)

___

### load

▸ **load**(): `void`

#### Returns

`void`

#### Overrides

AbstractStoreStateService.load

#### Defined in

[lib/table/service/store-state-scroll-pos.service.ts:26](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/service/store-state-scroll-pos.service.ts#L26)

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

[lib/table/service/abstract-store-state.service.ts:60](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/service/abstract-store-state.service.ts#L60)

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

[lib/table/service/abstract-store-state.service.ts:52](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/service/abstract-store-state.service.ts#L52)

___

### updateScrollOffset

▸ **updateScrollOffset**(`xy`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `xy` | [`number`, `number`] |

#### Returns

`void`

#### Defined in

[lib/table/service/store-state-scroll-pos.service.ts:20](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/service/store-state-scroll-pos.service.ts#L20)
