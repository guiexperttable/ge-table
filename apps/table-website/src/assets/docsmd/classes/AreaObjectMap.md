[@guiexpert/table](../README.md) / [Exports](../modules.md) / AreaObjectMap

# Class: AreaObjectMap\<T\>

An object map as container for all three areas.

**`Implements`**

## Type parameters

| Name | Description |
| :------ | :------ |
| `T` | The type of objects stored in the map. |

## Implements

- [`AreaObjectMapType`](../modules.md#areaobjectmaptype)\<`T`\>

## Table of contents

### Constructors

- [constructor](AreaObjectMap.md#constructor)

### Properties

- [body](AreaObjectMap.md#body)
- [footer](AreaObjectMap.md#footer)
- [header](AreaObjectMap.md#header)

## Constructors

### constructor

• **new AreaObjectMap**\<`T`\>(`header?`, `body?`, `footer?`): [`AreaObjectMap`](AreaObjectMap.md)\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `header?` | `T` |
| `body?` | `T` |
| `footer?` | `T` |

#### Returns

[`AreaObjectMap`](AreaObjectMap.md)\<`T`\>

#### Defined in

[lib/table/data/common/area-map.ts:12](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/common/area-map.ts#L12)

## Properties

### body

• `Optional` **body**: `T`

#### Implementation of

AreaObjectMapType.body

#### Defined in

[lib/table/data/common/area-map.ts:14](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/common/area-map.ts#L14)

___

### footer

• `Optional` **footer**: `T`

#### Implementation of

AreaObjectMapType.footer

#### Defined in

[lib/table/data/common/area-map.ts:15](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/common/area-map.ts#L15)

___

### header

• `Optional` **header**: `T`

#### Implementation of

AreaObjectMapType.header

#### Defined in

[lib/table/data/common/area-map.ts:13](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/common/area-map.ts#L13)
