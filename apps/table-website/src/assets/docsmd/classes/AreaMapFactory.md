[@guiexpert/table](../README.md) / [Exports](../modules.md) / AreaMapFactory

# Class: AreaMapFactory

## Table of contents

### Constructors

- [constructor](AreaMapFactory.md#constructor)

### Methods

- [body](AreaMapFactory.md#body)

## Constructors

### constructor

• **new AreaMapFactory**(): [`AreaMapFactory`](AreaMapFactory.md)

#### Returns

[`AreaMapFactory`](AreaMapFactory.md)

## Methods

### body

▸ **body**(`bodyRenderer`): [`AreaObjectMap`](AreaObjectMap.md)\<[`CellRendererIf`](../interfaces/CellRendererIf.md)\>

A factory that creates a new AreaObjectMap with the given body renderer.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `bodyRenderer` | [`CellRendererIf`](../interfaces/CellRendererIf.md) | The renderer for the body of the map. |

#### Returns

[`AreaObjectMap`](AreaObjectMap.md)\<[`CellRendererIf`](../interfaces/CellRendererIf.md)\>

The newly created AreaObjectMap.

#### Defined in

[lib/table/data/common/area-map-factory.ts:12](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/common/area-map-factory.ts#L12)
