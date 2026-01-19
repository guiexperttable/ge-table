[@guiexpert/table](../README.md) / [Exports](../modules.md) / ConvenienceDomService

# Class: ConvenienceDomService

## Table of contents

### Constructors

- [constructor](ConvenienceDomService.md#constructor)

### Properties

- [domService](ConvenienceDomService.md#domservice)

### Methods

- [addArrowDiv](ConvenienceDomService.md#addarrowdiv)
- [addCheckboxToDiv](ConvenienceDomService.md#addcheckboxtodiv)
- [addClass](ConvenienceDomService.md#addclass)
- [addClasses](ConvenienceDomService.md#addclasses)
- [addColumnBorderDivs](ConvenienceDomService.md#addcolumnborderdivs)
- [addColumnDiv](ConvenienceDomService.md#addcolumndiv)
- [addDiv](ConvenienceDomService.md#adddiv)
- [addFocusBorderDivs](ConvenienceDomService.md#addfocusborderdivs)
- [addHorizontalBorder](ConvenienceDomService.md#addhorizontalborder)
- [addLabelDiv](ConvenienceDomService.md#addlabeldiv)
- [addRowDiv](ConvenienceDomService.md#addrowdiv)
- [addSortedIcon](ConvenienceDomService.md#addsortedicon)
- [addVerticalBorder](ConvenienceDomService.md#addverticalborder)
- [appendRelativeChildDiv](ConvenienceDomService.md#appendrelativechilddiv)
- [appendText](ConvenienceDomService.md#appendtext)
- [applyDisplayBlockStyle](ConvenienceDomService.md#applydisplayblockstyle)
- [applyDisplayNoneStyle](ConvenienceDomService.md#applydisplaynonestyle)
- [applyStyle](ConvenienceDomService.md#applystyle)
- [applyStyleFullSize](ConvenienceDomService.md#applystylefullsize)
- [applyStyleInPx](ConvenienceDomService.md#applystyleinpx)
- [applyStyleNoPadding](ConvenienceDomService.md#applystylenopadding)
- [applyStyleOverflowAuto](ConvenienceDomService.md#applystyleoverflowauto)
- [applyStylePosistionAbsolute](ConvenienceDomService.md#applystyleposistionabsolute)
- [applyStylePosistionRelative](ConvenienceDomService.md#applystyleposistionrelative)
- [applyStyleString](ConvenienceDomService.md#applystylestring)
- [createAreaDivWithClass](ConvenienceDomService.md#createareadivwithclass)
- [createDivWithClass](ConvenienceDomService.md#createdivwithclass)
- [getDivOrCreateDiv](ConvenienceDomService.md#getdivorcreatediv)
- [removeClass](ConvenienceDomService.md#removeclass)
- [setAttribute](ConvenienceDomService.md#setattribute)
- [setStyle](ConvenienceDomService.md#setstyle)

## Constructors

### constructor

• **new ConvenienceDomService**(`domService`): [`ConvenienceDomService`](ConvenienceDomService.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `domService` | [`DomServiceIf`](../interfaces/DomServiceIf.md) |

#### Returns

[`ConvenienceDomService`](ConvenienceDomService.md)

#### Defined in

[lib/table/service/convenience-dom.service.ts:34](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/service/convenience-dom.service.ts#L34)

## Properties

### domService

• `Readonly` **domService**: [`DomServiceIf`](../interfaces/DomServiceIf.md)

#### Defined in

[lib/table/service/convenience-dom.service.ts:35](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/service/convenience-dom.service.ts#L35)

## Methods

### addArrowDiv

▸ **addArrowDiv**(`parent`, `arrow?`, `treeOptions?`, `rowIndex?`, `columnIndex?`, `areaIdent?`): `HTMLDivElement`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `parent` | `HTMLDivElement` | `undefined` |
| `arrow` | [`TreeArrowType`](../modules.md#treearrowtype) | `"none"` |
| `treeOptions` | [`TreeOptionsIf`](../interfaces/TreeOptionsIf.md) | `undefined` |
| `rowIndex` | `number` | `-1` |
| `columnIndex` | `number` | `-1` |
| `areaIdent` | [`AreaIdent`](../modules.md#areaident) | `"body"` |

#### Returns

`HTMLDivElement`

#### Defined in

[lib/table/service/convenience-dom.service.ts:384](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/service/convenience-dom.service.ts#L384)

___

### addCheckboxToDiv

▸ **addCheckboxToDiv**(`parent`, `checkedType`, `areaIdent`, `rowIndex`): `HTMLDivElement`

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | `HTMLDivElement` |
| `checkedType` | [`CheckedType`](../modules.md#checkedtype) |
| `areaIdent` | [`AreaIdent`](../modules.md#areaident) |
| `rowIndex` | `number` |

#### Returns

`HTMLDivElement`

#### Defined in

[lib/table/service/convenience-dom.service.ts:274](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/service/convenience-dom.service.ts#L274)

___

### addClass

▸ **addClass**(`clazz`, `div`): `HTMLDivElement`

#### Parameters

| Name | Type |
| :------ | :------ |
| `clazz` | `string` |
| `div` | `HTMLDivElement` |

#### Returns

`HTMLDivElement`

#### Defined in

[lib/table/service/convenience-dom.service.ts:125](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/service/convenience-dom.service.ts#L125)

___

### addClasses

▸ **addClasses**(`classes`, `div`): `HTMLDivElement`

#### Parameters

| Name | Type |
| :------ | :------ |
| `classes` | `undefined` \| `string`[] |
| `div` | `HTMLDivElement` |

#### Returns

`HTMLDivElement`

#### Defined in

[lib/table/service/convenience-dom.service.ts:143](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/service/convenience-dom.service.ts#L143)

___

### addColumnBorderDivs

▸ **addColumnBorderDivs**(`tableOptions`, `parent`, `geo`, `areaIdent`, `sideIdent`): `HTMLDivElement`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tableOptions` | [`TableOptionsIf`](../interfaces/TableOptionsIf.md) |
| `parent` | `HTMLDivElement` |
| `geo` | [`GeoData`](GeoData.md) |
| `areaIdent` | [`AreaIdent`](../modules.md#areaident) |
| `sideIdent` | [`SideIdent`](../modules.md#sideident) |

#### Returns

`HTMLDivElement`

#### Defined in

[lib/table/service/convenience-dom.service.ts:430](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/service/convenience-dom.service.ts#L430)

___

### addColumnDiv

▸ **addColumnDiv**(`para`): `HTMLDivElement`

#### Parameters

| Name | Type |
| :------ | :------ |
| `para` | [`AddColumnDivPara`](../interfaces/AddColumnDivPara.md) |

#### Returns

`HTMLDivElement`

#### Defined in

[lib/table/service/convenience-dom.service.ts:217](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/service/convenience-dom.service.ts#L217)

___

### addDiv

▸ **addDiv**(`parent`, `geo`, `clazz?`): `HTMLDivElement`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `parent` | `HTMLDivElement` | `undefined` |
| `geo` | [`GeoData`](GeoData.md) | `undefined` |
| `clazz` | `string` | `""` |

#### Returns

`HTMLDivElement`

#### Defined in

[lib/table/service/convenience-dom.service.ts:544](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/service/convenience-dom.service.ts#L544)

___

### addFocusBorderDivs

▸ **addFocusBorderDivs**(`parent`, `geo`, `style`): `HTMLDivElement`

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | `HTMLDivElement` |
| `geo` | [`GeoData`](GeoData.md) |
| `style` | [`HtmlStyle`](../modules.md#htmlstyle) |

#### Returns

`HTMLDivElement`

#### Defined in

[lib/table/service/convenience-dom.service.ts:467](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/service/convenience-dom.service.ts#L467)

___

### addHorizontalBorder

▸ **addHorizontalBorder**(`geo`, `parent`, `clazz?`): `HTMLDivElement`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `geo` | [`GeoData`](GeoData.md) | `undefined` |
| `parent` | `HTMLDivElement` | `undefined` |
| `clazz` | `string` | `"ge-table-body-center-horizontal-border"` |

#### Returns

`HTMLDivElement`

#### Defined in

[lib/table/service/convenience-dom.service.ts:450](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/service/convenience-dom.service.ts#L450)

___

### addLabelDiv

▸ **addLabelDiv**(`parent`, `text?`, `firstTreeColumn?`, `rowIndex?`, `columnIndex?`, `areaIdent?`): `HTMLDivElement`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `parent` | `HTMLDivElement` | `undefined` |
| `text` | `string` | `""` |
| `firstTreeColumn` | `boolean` | `false` |
| `rowIndex` | `number` | `-1` |
| `columnIndex` | `number` | `-1` |
| `areaIdent` | [`AreaIdent`](../modules.md#areaident) | `"body"` |

#### Returns

`HTMLDivElement`

#### Defined in

[lib/table/service/convenience-dom.service.ts:298](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/service/convenience-dom.service.ts#L298)

___

### addRowDiv

▸ **addRowDiv**(`divScope`, `geo`, `rowIndex?`, `areaIdent`, `sideIdent`, `text?`): `HTMLDivElement`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `divScope` | [`DivScope`](../modules.md#divscope) | `undefined` |
| `geo` | [`GeoData`](GeoData.md) | `undefined` |
| `rowIndex` | `number` | `-1` |
| `areaIdent` | [`AreaIdent`](../modules.md#areaident) | `undefined` |
| `sideIdent` | [`SideIdent`](../modules.md#sideident) | `undefined` |
| `text` | `string` | `""` |

#### Returns

`HTMLDivElement`

#### Defined in

[lib/table/service/convenience-dom.service.ts:177](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/service/convenience-dom.service.ts#L177)

___

### addSortedIcon

▸ **addSortedIcon**(`parent`, `sorted?`, `sortedOptions?`, `columnIndex?`): `HTMLDivElement`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `parent` | `HTMLDivElement` | `undefined` |
| `sorted` | [`SortState`](../modules.md#sortstate) | `""` |
| `sortedOptions` | [`SortedOptionsIf`](../interfaces/SortedOptionsIf.md) | `undefined` |
| `columnIndex` | `number` | `-1` |

#### Returns

`HTMLDivElement`

#### Defined in

[lib/table/service/convenience-dom.service.ts:338](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/service/convenience-dom.service.ts#L338)

___

### addVerticalBorder

▸ **addVerticalBorder**(`geo`, `parent`, `clazz?`): `HTMLDivElement`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `geo` | [`GeoData`](GeoData.md) | `undefined` |
| `parent` | `HTMLDivElement` | `undefined` |
| `clazz` | `string` | `"ge-table-body-center-vertical-border"` |

#### Returns

`HTMLDivElement`

#### Defined in

[lib/table/service/convenience-dom.service.ts:526](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/service/convenience-dom.service.ts#L526)

___

### appendRelativeChildDiv

▸ **appendRelativeChildDiv**(`parent`): [`DivScope`](../modules.md#divscope)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | `HTMLDivElement` |

#### Returns

[`DivScope`](../modules.md#divscope)

#### Defined in

[lib/table/service/convenience-dom.service.ts:103](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/service/convenience-dom.service.ts#L103)

___

### appendText

▸ **appendText**(`parent`, `text`): `HTMLElement`

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | `HTMLDivElement` |
| `text` | `string` |

#### Returns

`HTMLElement`

#### Defined in

[lib/table/service/convenience-dom.service.ts:118](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/service/convenience-dom.service.ts#L118)

___

### applyDisplayBlockStyle

▸ **applyDisplayBlockStyle**(`ele`): `HTMLDivElement`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ele` | `HTMLDivElement` |

#### Returns

`HTMLDivElement`

#### Defined in

[lib/table/service/convenience-dom.service.ts:58](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/service/convenience-dom.service.ts#L58)

___

### applyDisplayNoneStyle

▸ **applyDisplayNoneStyle**(`ele`): `HTMLDivElement`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ele` | `HTMLDivElement` |

#### Returns

`HTMLDivElement`

#### Defined in

[lib/table/service/convenience-dom.service.ts:53](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/service/convenience-dom.service.ts#L53)

___

### applyStyle

▸ **applyStyle**(`ele`, `style`): `HTMLDivElement`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ele` | `HTMLDivElement` |
| `style` | [`HtmlStyle`](../modules.md#htmlstyle) |

#### Returns

`HTMLDivElement`

#### Defined in

[lib/table/service/convenience-dom.service.ts:46](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/service/convenience-dom.service.ts#L46)

___

### applyStyleFullSize

▸ **applyStyleFullSize**(`ele`): `HTMLDivElement`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ele` | `HTMLDivElement` |

#### Returns

`HTMLDivElement`

#### Defined in

[lib/table/service/convenience-dom.service.ts:80](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/service/convenience-dom.service.ts#L80)

___

### applyStyleInPx

▸ **applyStyleInPx**(`ele`, `geoData`): `HTMLDivElement`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ele` | `HTMLDivElement` |
| `geoData` | [`GeoData`](GeoData.md) |

#### Returns

`HTMLDivElement`

#### Defined in

[lib/table/service/convenience-dom.service.ts:63](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/service/convenience-dom.service.ts#L63)

___

### applyStyleNoPadding

▸ **applyStyleNoPadding**(`ele`): `HTMLDivElement`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ele` | `HTMLDivElement` |

#### Returns

`HTMLDivElement`

#### Defined in

[lib/table/service/convenience-dom.service.ts:96](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/service/convenience-dom.service.ts#L96)

___

### applyStyleOverflowAuto

▸ **applyStyleOverflowAuto**(`overflowX?`, `overflowY?`, `ele`): `HTMLDivElement`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `overflowX` | ``"auto"`` \| ``"scroll"`` | `"auto"` |
| `overflowY` | ``"auto"`` \| ``"scroll"`` | `"auto"` |
| `ele` | `HTMLDivElement` | `undefined` |

#### Returns

`HTMLDivElement`

#### Defined in

[lib/table/service/convenience-dom.service.ts:86](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/service/convenience-dom.service.ts#L86)

___

### applyStylePosistionAbsolute

▸ **applyStylePosistionAbsolute**(`ele`): `HTMLDivElement`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ele` | `HTMLDivElement` |

#### Returns

`HTMLDivElement`

#### Defined in

[lib/table/service/convenience-dom.service.ts:75](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/service/convenience-dom.service.ts#L75)

___

### applyStylePosistionRelative

▸ **applyStylePosistionRelative**(`ele`): `HTMLDivElement`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ele` | `HTMLDivElement` |

#### Returns

`HTMLDivElement`

#### Defined in

[lib/table/service/convenience-dom.service.ts:69](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/service/convenience-dom.service.ts#L69)

___

### applyStyleString

▸ **applyStyleString**(`div`, `style`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `div` | `HTMLDivElement` |
| `style` | `string` |

#### Returns

`void`

#### Defined in

[lib/table/service/convenience-dom.service.ts:559](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/service/convenience-dom.service.ts#L559)

___

### createAreaDivWithClass

▸ **createAreaDivWithClass**(`clazz`, `parent`, `areaIdent`, `sideIdent`): `HTMLDivElement`

#### Parameters

| Name | Type |
| :------ | :------ |
| `clazz` | `string` |
| `parent` | `HTMLDivElement` |
| `areaIdent` | [`AreaIdent`](../modules.md#areaident) |
| `sideIdent` | [`SideIdent`](../modules.md#sideident) |

#### Returns

`HTMLDivElement`

#### Defined in

[lib/table/service/convenience-dom.service.ts:160](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/service/convenience-dom.service.ts#L160)

___

### createDivWithClass

▸ **createDivWithClass**(`clazz`, `parent`): `HTMLDivElement`

#### Parameters

| Name | Type |
| :------ | :------ |
| `clazz` | `string` |
| `parent` | `HTMLDivElement` |

#### Returns

`HTMLDivElement`

#### Defined in

[lib/table/service/convenience-dom.service.ts:169](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/service/convenience-dom.service.ts#L169)

___

### getDivOrCreateDiv

▸ **getDivOrCreateDiv**(`cacheKey`, `divScope`): `HTMLDivElement`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cacheKey` | `number` |
| `divScope` | [`DivScope`](../modules.md#divscope) |

#### Returns

`HTMLDivElement`

#### Defined in

[lib/table/service/convenience-dom.service.ts:568](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/service/convenience-dom.service.ts#L568)

___

### removeClass

▸ **removeClass**(`clazz`, `div`): `HTMLDivElement`

#### Parameters

| Name | Type |
| :------ | :------ |
| `clazz` | `string` |
| `div` | `HTMLDivElement` |

#### Returns

`HTMLDivElement`

#### Defined in

[lib/table/service/convenience-dom.service.ts:134](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/service/convenience-dom.service.ts#L134)

___

### setAttribute

▸ **setAttribute**(`div`, `key`, `value`): `HTMLDivElement`

#### Parameters

| Name | Type |
| :------ | :------ |
| `div` | `HTMLDivElement` |
| `key` | `string` |
| `value` | `string` |

#### Returns

`HTMLDivElement`

#### Defined in

[lib/table/service/convenience-dom.service.ts:152](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/service/convenience-dom.service.ts#L152)

___

### setStyle

▸ **setStyle**(`el`, `style`, `value`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `el` | `any` |
| `style` | `string` |
| `value` | `any` |

#### Returns

`any`

#### Defined in

[lib/table/service/convenience-dom.service.ts:40](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/service/convenience-dom.service.ts#L40)
