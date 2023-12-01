[@guiexpert/table](../README.md) / [Exports](../modules.md) / StoreStateCollapsedExpandService

# Class: StoreStateCollapsedExpandService

## Hierarchy

- `AbstractStoreStateService`

  ↳ **`StoreStateCollapsedExpandService`**

## Table of contents

### Constructors

- [constructor](StoreStateCollapsedExpandService.md#constructor)

### Properties

- [COLLAPSED\_EXPANDED\_STATE](StoreStateCollapsedExpandService.md#collapsed_expanded_state)
- [collapsedExpandedState](StoreStateCollapsedExpandService.md#collapsedexpandedstate)
- [getStorageKeyFn](StoreStateCollapsedExpandService.md#getstoragekeyfn)

### Methods

- [autoConvertMapToObject](StoreStateCollapsedExpandService.md#autoconvertmaptoobject)
- [checkAndPersistItem](StoreStateCollapsedExpandService.md#checkandpersistitem)
- [collapsedExpandedStateGet](StoreStateCollapsedExpandService.md#collapsedexpandedstateget)
- [collapsedExpandedStateIncludes](StoreStateCollapsedExpandService.md#collapsedexpandedstateincludes)
- [collapsedStateAll](StoreStateCollapsedExpandService.md#collapsedstateall)
- [collapsedStateIdsPush](StoreStateCollapsedExpandService.md#collapsedstateidspush)
- [collapsedStateIdsRemove](StoreStateCollapsedExpandService.md#collapsedstateidsremove)
- [load](StoreStateCollapsedExpandService.md#load)
- [loadFromLocalStorage](StoreStateCollapsedExpandService.md#loadfromlocalstorage)
- [persist](StoreStateCollapsedExpandService.md#persist)
- [persistItem](StoreStateCollapsedExpandService.md#persistitem)

## Constructors

### constructor

• **new StoreStateCollapsedExpandService**(`fn`): [`StoreStateCollapsedExpandService`](StoreStateCollapsedExpandService.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | `undefined` \| [`GetStorageKeyFn`](../modules.md#getstoragekeyfn) |

#### Returns

[`StoreStateCollapsedExpandService`](StoreStateCollapsedExpandService.md)

#### Overrides

AbstractStoreStateService.constructor

#### Defined in

[lib/table/service/store-state-collapsed-expand.service.ts:12](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/service/store-state-collapsed-expand.service.ts#L12)

## Properties

### COLLAPSED\_EXPANDED\_STATE

• `Private` `Readonly` **COLLAPSED\_EXPANDED\_STATE**: ``"collapsedExpandedState"``

#### Defined in

[lib/table/service/store-state-collapsed-expand.service.ts:8](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/service/store-state-collapsed-expand.service.ts#L8)

___

### collapsedExpandedState

• `Private` **collapsedExpandedState**: [`CollapsedExpandedData`](CollapsedExpandedData.md)

#### Defined in

[lib/table/service/store-state-collapsed-expand.service.ts:9](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/service/store-state-collapsed-expand.service.ts#L9)

___

### getStorageKeyFn

• `Protected` `Optional` **getStorageKeyFn**: [`GetStorageKeyFn`](../modules.md#getstoragekeyfn)

#### Inherited from

AbstractStoreStateService.getStorageKeyFn

#### Defined in

[lib/table/service/abstract-store-state.service.ts:7](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/service/abstract-store-state.service.ts#L7)

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

[lib/table/service/abstract-store-state.service.ts:14](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/service/abstract-store-state.service.ts#L14)

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

[lib/table/service/abstract-store-state.service.ts:35](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/service/abstract-store-state.service.ts#L35)

___

### collapsedExpandedStateGet

▸ **collapsedExpandedStateGet**(): [`CollapsedExpandedData`](CollapsedExpandedData.md)

#### Returns

[`CollapsedExpandedData`](CollapsedExpandedData.md)

#### Defined in

[lib/table/service/store-state-collapsed-expand.service.ts:19](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/service/store-state-collapsed-expand.service.ts#L19)

___

### collapsedExpandedStateIncludes

▸ **collapsedExpandedStateIncludes**(`rowId`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rowId` | `string` \| `number` |

#### Returns

`boolean`

#### Defined in

[lib/table/service/store-state-collapsed-expand.service.ts:23](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/service/store-state-collapsed-expand.service.ts#L23)

___

### collapsedStateAll

▸ **collapsedStateAll**(`expand`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `expand` | `boolean` |

#### Returns

`void`

#### Defined in

[lib/table/service/store-state-collapsed-expand.service.ts:48](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/service/store-state-collapsed-expand.service.ts#L48)

___

### collapsedStateIdsPush

▸ **collapsedStateIdsPush**(`id`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` \| `number` |

#### Returns

`void`

#### Defined in

[lib/table/service/store-state-collapsed-expand.service.ts:28](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/service/store-state-collapsed-expand.service.ts#L28)

___

### collapsedStateIdsRemove

▸ **collapsedStateIdsRemove**(`id`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` \| `number` |

#### Returns

`void`

#### Defined in

[lib/table/service/store-state-collapsed-expand.service.ts:37](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/service/store-state-collapsed-expand.service.ts#L37)

___

### load

▸ **load**(): `void`

#### Returns

`void`

#### Overrides

AbstractStoreStateService.load

#### Defined in

[lib/table/service/store-state-collapsed-expand.service.ts:57](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/service/store-state-collapsed-expand.service.ts#L57)

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

[lib/table/service/abstract-store-state.service.ts:60](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/service/abstract-store-state.service.ts#L60)

___

### persist

▸ **persist**(): `void`

#### Returns

`void`

#### Defined in

[lib/table/service/store-state-collapsed-expand.service.ts:71](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/service/store-state-collapsed-expand.service.ts#L71)

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

[lib/table/service/abstract-store-state.service.ts:52](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/service/abstract-store-state.service.ts#L52)
