[@guiexpert/table](../README.md) / [Exports](../modules.md) / GeFilterService

# Class: GeFilterService

## Table of contents

### Constructors

- [constructor](GeFilterService.md#constructor)

### Methods

- [filterPredict](GeFilterService.md#filterpredict)
- [filterRows](GeFilterService.md#filterrows)
- [objectToString](GeFilterService.md#objecttostring)

## Constructors

### constructor

• **new GeFilterService**(): [`GeFilterService`](GeFilterService.md)

#### Returns

[`GeFilterService`](GeFilterService.md)

## Methods

### filterPredict

▸ **filterPredict**\<`T`\>(`item`, `filterString`, `toString?`): `boolean`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `T` |
| `filterString` | `string` |
| `toString` | (`t`: `T`) => `string` |

#### Returns

`boolean`

#### Defined in

[lib/table/service/ge-filter.service.ts:4](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/service/ge-filter.service.ts#L4)

___

### filterRows

▸ **filterRows**\<`T`\>(`rows`, `filterString`, `toString?`): `T`[]

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `rows` | `T`[] |
| `filterString` | `string` |
| `toString` | (`t`: `T`) => `string` |

#### Returns

`T`[]

#### Defined in

[lib/table/service/ge-filter.service.ts:56](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/service/ge-filter.service.ts#L56)

___

### objectToString

▸ **objectToString**\<`T`\>(`o`): `string`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `o` | `T` |

#### Returns

`string`

#### Defined in

[lib/table/service/ge-filter.service.ts:109](https://github.com/guiexperttable/ge-table/blob/6aaca3c/libs/table/src/lib/table/service/ge-filter.service.ts#L109)
