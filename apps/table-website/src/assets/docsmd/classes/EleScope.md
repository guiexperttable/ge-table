[@guiexpert/table](../README.md) / [Exports](../modules.md) / EleScope

# Class: EleScope

Represents an store for HTML elements.

## Hierarchy

- **`EleScope`**

  ↳ [`RenderScope`](RenderScope.md)

## Table of contents

### Constructors

- [constructor](EleScope.md#constructor)

### Properties

- [areaBodyCenter](EleScope.md#areabodycenter)
- [areaBodyCenterGeo](EleScope.md#areabodycentergeo)
- [areaBodyEast](EleScope.md#areabodyeast)
- [areaBodyEastGeo](EleScope.md#areabodyeastgeo)
- [areaBodyWest](EleScope.md#areabodywest)
- [areaBodyWestGeo](EleScope.md#areabodywestgeo)
- [areaFooterCenter](EleScope.md#areafootercenter)
- [areaFooterEast](EleScope.md#areafootereast)
- [areaFooterWest](EleScope.md#areafooterwest)
- [areaHeaderCenter](EleScope.md#areaheadercenter)
- [areaHeaderEast](EleScope.md#areaheadereast)
- [areaHeaderWest](EleScope.md#areaheaderwest)
- [borderFixedEast](EleScope.md#borderfixedeast)
- [borderFixedWest](EleScope.md#borderfixedwest)
- [borderFooterTop](EleScope.md#borderfootertop)
- [borderHeaderBottom](EleScope.md#borderheaderbottom)
- [contentDiv](EleScope.md#contentdiv)
- [contentWrapperDiv](EleScope.md#contentwrapperdiv)
- [dom](EleScope.md#dom)
- [hostElement](EleScope.md#hostelement)
- [hoverColumn](EleScope.md#hovercolumn)
- [hoverRow](EleScope.md#hoverrow)
- [scrollTop](EleScope.md#scrolltop)
- [scrollViewport](EleScope.md#scrollviewport)
- [tableModel](EleScope.md#tablemodel)
- [tableOptions](EleScope.md#tableoptions)

### Methods

- [adjustAfterScrolling](EleScope.md#adjustafterscrolling)
- [adjustContainersAndRows](EleScope.md#adjustcontainersandrows)
- [resetSizeOfWrapperDiv](EleScope.md#resetsizeofwrapperdiv)

## Constructors

### constructor

• **new EleScope**(`hostElement`, `tableModel`, `dom`, `tableOptions`): [`EleScope`](EleScope.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `hostElement` | `HTMLDivElement` |
| `tableModel` | [`TableModelIf`](../interfaces/TableModelIf.md) |
| `dom` | [`ConvenienceDomService`](ConvenienceDomService.md) |
| `tableOptions` | [`TableOptionsIf`](../interfaces/TableOptionsIf.md) |

#### Returns

[`EleScope`](EleScope.md)

#### Defined in

[lib/table/ele-scope.ts:47](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/ele-scope.ts#L47)

## Properties

### areaBodyCenter

• `Protected` **areaBodyCenter**: [`DivScope`](../modules.md#divscope)

#### Defined in

[lib/table/ele-scope.ts:23](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/ele-scope.ts#L23)

___

### areaBodyCenterGeo

• `Protected` **areaBodyCenterGeo**: [`GeoData`](GeoData.md)

#### Defined in

[lib/table/ele-scope.ts:43](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/ele-scope.ts#L43)

___

### areaBodyEast

• `Protected` **areaBodyEast**: [`DivScope`](../modules.md#divscope)

#### Defined in

[lib/table/ele-scope.ts:25](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/ele-scope.ts#L25)

___

### areaBodyEastGeo

• `Protected` **areaBodyEastGeo**: [`GeoData`](GeoData.md)

#### Defined in

[lib/table/ele-scope.ts:44](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/ele-scope.ts#L44)

___

### areaBodyWest

• `Protected` **areaBodyWest**: [`DivScope`](../modules.md#divscope)

#### Defined in

[lib/table/ele-scope.ts:24](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/ele-scope.ts#L24)

___

### areaBodyWestGeo

• `Protected` **areaBodyWestGeo**: [`GeoData`](GeoData.md)

#### Defined in

[lib/table/ele-scope.ts:42](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/ele-scope.ts#L42)

___

### areaFooterCenter

• `Protected` **areaFooterCenter**: [`DivScope`](../modules.md#divscope)

#### Defined in

[lib/table/ele-scope.ts:28](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/ele-scope.ts#L28)

___

### areaFooterEast

• `Protected` **areaFooterEast**: [`DivScope`](../modules.md#divscope)

#### Defined in

[lib/table/ele-scope.ts:30](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/ele-scope.ts#L30)

___

### areaFooterWest

• `Protected` **areaFooterWest**: [`DivScope`](../modules.md#divscope)

#### Defined in

[lib/table/ele-scope.ts:29](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/ele-scope.ts#L29)

___

### areaHeaderCenter

• `Protected` **areaHeaderCenter**: [`DivScope`](../modules.md#divscope)

#### Defined in

[lib/table/ele-scope.ts:19](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/ele-scope.ts#L19)

___

### areaHeaderEast

• `Protected` **areaHeaderEast**: [`DivScope`](../modules.md#divscope)

#### Defined in

[lib/table/ele-scope.ts:21](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/ele-scope.ts#L21)

___

### areaHeaderWest

• `Protected` **areaHeaderWest**: [`DivScope`](../modules.md#divscope)

#### Defined in

[lib/table/ele-scope.ts:20](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/ele-scope.ts#L20)

___

### borderFixedEast

• `Protected` **borderFixedEast**: `HTMLDivElement`

#### Defined in

[lib/table/ele-scope.ts:35](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/ele-scope.ts#L35)

___

### borderFixedWest

• `Protected` **borderFixedWest**: `HTMLDivElement`

#### Defined in

[lib/table/ele-scope.ts:34](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/ele-scope.ts#L34)

___

### borderFooterTop

• `Protected` **borderFooterTop**: `HTMLDivElement`

#### Defined in

[lib/table/ele-scope.ts:33](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/ele-scope.ts#L33)

___

### borderHeaderBottom

• `Protected` **borderHeaderBottom**: `HTMLDivElement`

#### Defined in

[lib/table/ele-scope.ts:32](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/ele-scope.ts#L32)

___

### contentDiv

• `Protected` **contentDiv**: `HTMLDivElement`

#### Defined in

[lib/table/ele-scope.ts:17](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/ele-scope.ts#L17)

___

### contentWrapperDiv

• `Protected` **contentWrapperDiv**: `HTMLDivElement`

#### Defined in

[lib/table/ele-scope.ts:16](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/ele-scope.ts#L16)

___

### dom

• `Protected` `Readonly` **dom**: [`ConvenienceDomService`](ConvenienceDomService.md)

#### Defined in

[lib/table/ele-scope.ts:50](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/ele-scope.ts#L50)

___

### hostElement

• `Readonly` **hostElement**: `HTMLDivElement`

#### Defined in

[lib/table/ele-scope.ts:48](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/ele-scope.ts#L48)

___

### hoverColumn

• `Protected` **hoverColumn**: `HTMLDivElement`

#### Defined in

[lib/table/ele-scope.ts:38](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/ele-scope.ts#L38)

___

### hoverRow

• `Protected` **hoverRow**: `HTMLDivElement`

#### Defined in

[lib/table/ele-scope.ts:37](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/ele-scope.ts#L37)

___

### scrollTop

• `Protected` **scrollTop**: `number` = `0`

#### Defined in

[lib/table/ele-scope.ts:40](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/ele-scope.ts#L40)

___

### scrollViewport

• **scrollViewport**: `HTMLDivElement`

#### Defined in

[lib/table/ele-scope.ts:14](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/ele-scope.ts#L14)

___

### tableModel

• `Readonly` **tableModel**: [`TableModelIf`](../interfaces/TableModelIf.md)

#### Defined in

[lib/table/ele-scope.ts:49](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/ele-scope.ts#L49)

___

### tableOptions

• `Readonly` **tableOptions**: [`TableOptionsIf`](../interfaces/TableOptionsIf.md)

#### Defined in

[lib/table/ele-scope.ts:51](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/ele-scope.ts#L51)

## Methods

### adjustAfterScrolling

▸ **adjustAfterScrolling**(): `void`

#### Returns

`void`

#### Defined in

[lib/table/ele-scope.ts:276](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/ele-scope.ts#L276)

___

### adjustContainersAndRows

▸ **adjustContainersAndRows**(): `void`

#### Returns

`void`

#### Defined in

[lib/table/ele-scope.ts:139](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/ele-scope.ts#L139)

___

### resetSizeOfWrapperDiv

▸ **resetSizeOfWrapperDiv**(): `void`

#### Returns

`void`

#### Defined in

[lib/table/ele-scope.ts:280](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/ele-scope.ts#L280)
