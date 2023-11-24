[@guiexpert/table](../README.md) / [Exports](../modules.md) / ChunkData

# Class: ChunkData\<T\>

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`RequestChunk`](RequestChunk.md)

  ↳ **`ChunkData`**

## Implements

- [`ChunkDataIf`](../interfaces/ChunkDataIf.md)\<`T`\>

## Table of contents

### Constructors

- [constructor](ChunkData.md#constructor)

### Properties

- [emmitCancelKey](ChunkData.md#emmitcancelkey)
- [emmitDataKey](ChunkData.md#emmitdatakey)
- [endIndex](ChunkData.md#endindex)
- [filter](ChunkData.md#filter)
- [queryId](ChunkData.md#queryid)
- [rows](ChunkData.md#rows)
- [sorting](ChunkData.md#sorting)
- [startIndex](ChunkData.md#startindex)

## Constructors

### constructor

• **new ChunkData**\<`T`\>(`emmitDataKey`, `emmitCancelKey`, `queryId`, `filter`, `sorting`, `startIndex`, `endIndex`, `rows`): [`ChunkData`](ChunkData.md)\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `emmitDataKey` | `string` |
| `emmitCancelKey` | `string` |
| `queryId` | `string` |
| `filter` | `string` |
| `sorting` | `string` |
| `startIndex` | `number` |
| `endIndex` | `number` |
| `rows` | `T`[] |

#### Returns

[`ChunkData`](ChunkData.md)\<`T`\>

#### Overrides

[RequestChunk](RequestChunk.md).[constructor](RequestChunk.md#constructor)

#### Defined in

[lib/table/data/chunk/chunk.data-event.ts:6](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/data/chunk/chunk.data-event.ts#L6)

## Properties

### emmitCancelKey

• **emmitCancelKey**: `string`

#### Implementation of

[ChunkDataIf](../interfaces/ChunkDataIf.md).[emmitCancelKey](../interfaces/ChunkDataIf.md#emmitcancelkey)

#### Inherited from

[RequestChunk](RequestChunk.md).[emmitCancelKey](RequestChunk.md#emmitcancelkey)

#### Defined in

[lib/table/data/chunk/request-chunk.ts:7](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/data/chunk/request-chunk.ts#L7)

___

### emmitDataKey

• **emmitDataKey**: `string`

#### Implementation of

[ChunkDataIf](../interfaces/ChunkDataIf.md).[emmitDataKey](../interfaces/ChunkDataIf.md#emmitdatakey)

#### Inherited from

[RequestChunk](RequestChunk.md).[emmitDataKey](RequestChunk.md#emmitdatakey)

#### Defined in

[lib/table/data/chunk/request-chunk.ts:6](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/data/chunk/request-chunk.ts#L6)

___

### endIndex

• **endIndex**: `number`

#### Implementation of

[ChunkDataIf](../interfaces/ChunkDataIf.md).[endIndex](../interfaces/ChunkDataIf.md#endindex)

#### Inherited from

[RequestChunk](RequestChunk.md).[endIndex](RequestChunk.md#endindex)

#### Defined in

[lib/table/data/chunk/request-chunk.ts:12](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/data/chunk/request-chunk.ts#L12)

___

### filter

• **filter**: `string`

#### Implementation of

[ChunkDataIf](../interfaces/ChunkDataIf.md).[filter](../interfaces/ChunkDataIf.md#filter)

#### Inherited from

[RequestChunk](RequestChunk.md).[filter](RequestChunk.md#filter)

#### Defined in

[lib/table/data/chunk/request-chunk.ts:9](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/data/chunk/request-chunk.ts#L9)

___

### queryId

• **queryId**: `string`

#### Implementation of

[ChunkDataIf](../interfaces/ChunkDataIf.md).[queryId](../interfaces/ChunkDataIf.md#queryid)

#### Inherited from

[RequestChunk](RequestChunk.md).[queryId](RequestChunk.md#queryid)

#### Defined in

[lib/table/data/chunk/request-chunk.ts:8](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/data/chunk/request-chunk.ts#L8)

___

### rows

• **rows**: `T`[]

#### Implementation of

[ChunkDataIf](../interfaces/ChunkDataIf.md).[rows](../interfaces/ChunkDataIf.md#rows)

#### Defined in

[lib/table/data/chunk/chunk.data-event.ts:14](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/data/chunk/chunk.data-event.ts#L14)

___

### sorting

• **sorting**: `string`

#### Implementation of

[ChunkDataIf](../interfaces/ChunkDataIf.md).[sorting](../interfaces/ChunkDataIf.md#sorting)

#### Inherited from

[RequestChunk](RequestChunk.md).[sorting](RequestChunk.md#sorting)

#### Defined in

[lib/table/data/chunk/request-chunk.ts:10](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/data/chunk/request-chunk.ts#L10)

___

### startIndex

• **startIndex**: `number`

#### Implementation of

[ChunkDataIf](../interfaces/ChunkDataIf.md).[startIndex](../interfaces/ChunkDataIf.md#startindex)

#### Inherited from

[RequestChunk](RequestChunk.md).[startIndex](RequestChunk.md#startindex)

#### Defined in

[lib/table/data/chunk/request-chunk.ts:11](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/data/chunk/request-chunk.ts#L11)
