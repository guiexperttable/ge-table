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

[lib/table/service/convenience-dom.service.ts:20](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/service/convenience-dom.service.ts#L20)

## Properties

### domService

• `Readonly` **domService**: [`DomServiceIf`](../interfaces/DomServiceIf.md)

#### Defined in

[lib/table/service/convenience-dom.service.ts:21](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/service/convenience-dom.service.ts#L21)

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

[lib/table/service/convenience-dom.service.ts:360](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/service/convenience-dom.service.ts#L360)

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

[lib/table/service/convenience-dom.service.ts:250](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/service/convenience-dom.service.ts#L250)

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

[lib/table/service/convenience-dom.service.ts:111](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/service/convenience-dom.service.ts#L111)

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

[lib/table/service/convenience-dom.service.ts:120](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/service/convenience-dom.service.ts#L120)

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

[lib/table/service/convenience-dom.service.ts:406](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/service/convenience-dom.service.ts#L406)

___

### addColumnDiv

▸ **addColumnDiv**(`parent`, `geo`, `rowIndex?`, `columnIndex?`, `areaIdent`, `sideIdent`, `text?`, `treeArrow?`, `tableOptions?`, `checkedType?`, `sortState?`): `HTMLDivElement`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `parent` | `HTMLDivElement` | `undefined` |
| `geo` | [`GeoData`](GeoData.md) | `undefined` |
| `rowIndex` | `number` | `-1` |
| `columnIndex` | `number` | `-1` |
| `areaIdent` | [`AreaIdent`](../modules.md#areaident) | `undefined` |
| `sideIdent` | [`SideIdent`](../modules.md#sideident) | `undefined` |
| `text` | `string` | `""` |
| `treeArrow?` | [`TreeArrowType`](../modules.md#treearrowtype) | `undefined` |
| `tableOptions?` | [`TableOptionsIf`](../interfaces/TableOptionsIf.md) | `undefined` |
| `checkedType` | `undefined` \| [`CheckedType`](../modules.md#checkedtype) | `undefined` |
| `sortState?` | [`SortState`](../modules.md#sortstate) | `undefined` |

#### Returns

`HTMLDivElement`

#### Defined in

[lib/table/service/convenience-dom.service.ts:194](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/service/convenience-dom.service.ts#L194)

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

[lib/table/service/convenience-dom.service.ts:514](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/service/convenience-dom.service.ts#L514)

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

[lib/table/service/convenience-dom.service.ts:443](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/service/convenience-dom.service.ts#L443)

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

[lib/table/service/convenience-dom.service.ts:426](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/service/convenience-dom.service.ts#L426)

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

[lib/table/service/convenience-dom.service.ts:274](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/service/convenience-dom.service.ts#L274)

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

[lib/table/service/convenience-dom.service.ts:154](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/service/convenience-dom.service.ts#L154)

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

[lib/table/service/convenience-dom.service.ts:314](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/service/convenience-dom.service.ts#L314)

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

[lib/table/service/convenience-dom.service.ts:496](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/service/convenience-dom.service.ts#L496)

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

[lib/table/service/convenience-dom.service.ts:89](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/service/convenience-dom.service.ts#L89)

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

[lib/table/service/convenience-dom.service.ts:104](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/service/convenience-dom.service.ts#L104)

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

[lib/table/service/convenience-dom.service.ts:44](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/service/convenience-dom.service.ts#L44)

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

[lib/table/service/convenience-dom.service.ts:39](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/service/convenience-dom.service.ts#L39)

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

[lib/table/service/convenience-dom.service.ts:32](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/service/convenience-dom.service.ts#L32)

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

[lib/table/service/convenience-dom.service.ts:66](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/service/convenience-dom.service.ts#L66)

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

[lib/table/service/convenience-dom.service.ts:49](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/service/convenience-dom.service.ts#L49)

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

[lib/table/service/convenience-dom.service.ts:82](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/service/convenience-dom.service.ts#L82)

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

[lib/table/service/convenience-dom.service.ts:72](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/service/convenience-dom.service.ts#L72)

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

[lib/table/service/convenience-dom.service.ts:61](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/service/convenience-dom.service.ts#L61)

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

[lib/table/service/convenience-dom.service.ts:55](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/service/convenience-dom.service.ts#L55)

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

[lib/table/service/convenience-dom.service.ts:529](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/service/convenience-dom.service.ts#L529)

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

[lib/table/service/convenience-dom.service.ts:137](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/service/convenience-dom.service.ts#L137)

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

[lib/table/service/convenience-dom.service.ts:146](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/service/convenience-dom.service.ts#L146)

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

[lib/table/service/convenience-dom.service.ts:538](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/service/convenience-dom.service.ts#L538)

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

[lib/table/service/convenience-dom.service.ts:129](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/service/convenience-dom.service.ts#L129)

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

[lib/table/service/convenience-dom.service.ts:26](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/service/convenience-dom.service.ts#L26)
