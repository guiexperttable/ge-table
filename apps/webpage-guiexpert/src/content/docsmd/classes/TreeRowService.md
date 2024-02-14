[@guiexpert/table](../README.md) / [Exports](../modules.md) / TreeRowService

# Class: TreeRowService

## Table of contents

### Constructors

- [constructor](TreeRowService.md#constructor)

### Methods

- [flattenTree](TreeRowService.md#flattentree)
- [isVisible](TreeRowService.md#isvisible)

## Constructors

### constructor

• **new TreeRowService**(): [`TreeRowService`](TreeRowService.md)

#### Returns

[`TreeRowService`](TreeRowService.md)

## Methods

### flattenTree

▸ **flattenTree**\<`T`\>(`rows`, `ret?`): [`TreeRow`](TreeRow.md)\<`T`\>[]

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `rows` | [`TreeRow`](TreeRow.md)\<`T`\>[] | `undefined` |
| `ret` | [`TreeRow`](TreeRow.md)\<`T`\>[] | `[]` |

#### Returns

[`TreeRow`](TreeRow.md)\<`T`\>[]

#### Defined in

[lib/table/service/tree-row.service.ts:5](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/service/tree-row.service.ts#L5)

___

### isVisible

▸ **isVisible**(`row`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `row` | [`TreeRow`](TreeRow.md)\<`any`\> |

#### Returns

`boolean`

#### Defined in

[lib/table/service/tree-row.service.ts:21](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/service/tree-row.service.ts#L21)
