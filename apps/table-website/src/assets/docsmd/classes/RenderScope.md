[@guiexpert/table](../README.md) / [Exports](../modules.md) / RenderScope

# Class: RenderScope

Represents an store for HTML elements.

## Hierarchy

- [`EleScope`](EleScope.md)

  ↳ **`RenderScope`**

  ↳↳ [`TableScope`](TableScope.md)

## Table of contents

### Constructors

- [constructor](RenderScope.md#constructor)

### Properties

- [areaBodyCenter](RenderScope.md#areabodycenter)
- [areaBodyCenterGeo](RenderScope.md#areabodycentergeo)
- [areaBodyEast](RenderScope.md#areabodyeast)
- [areaBodyEastGeo](RenderScope.md#areabodyeastgeo)
- [areaBodyWest](RenderScope.md#areabodywest)
- [areaBodyWestGeo](RenderScope.md#areabodywestgeo)
- [areaFooterCenter](RenderScope.md#areafootercenter)
- [areaFooterEast](RenderScope.md#areafootereast)
- [areaFooterWest](RenderScope.md#areafooterwest)
- [areaHeaderCenter](RenderScope.md#areaheadercenter)
- [areaHeaderEast](RenderScope.md#areaheadereast)
- [areaHeaderWest](RenderScope.md#areaheaderwest)
- [borderFixedEast](RenderScope.md#borderfixedeast)
- [borderFixedWest](RenderScope.md#borderfixedwest)
- [borderFooterTop](RenderScope.md#borderfootertop)
- [borderHeaderBottom](RenderScope.md#borderheaderbottom)
- [cleanupFunctions](RenderScope.md#cleanupfunctions)
- [colAndRowspanModels](RenderScope.md#colandrowspanmodels)
- [contentDiv](RenderScope.md#contentdiv)
- [contentWrapperDiv](RenderScope.md#contentwrapperdiv)
- [debounceTimeout](RenderScope.md#debouncetimeout)
- [dom](RenderScope.md#dom)
- [draggingTargetColumnIndex](RenderScope.md#draggingtargetcolumnindex)
- [editing](RenderScope.md#editing)
- [editorRenderer](RenderScope.md#editorrenderer)
- [editorRendererColumn](RenderScope.md#editorrenderercolumn)
- [editorRendererRow](RenderScope.md#editorrendererrow)
- [firstVisibleRowIndex](RenderScope.md#firstvisiblerowindex)
- [getFocusModel](RenderScope.md#getfocusmodel)
- [getSelectionModel](RenderScope.md#getselectionmodel)
- [hostElement](RenderScope.md#hostelement)
- [hoverColumn](RenderScope.md#hovercolumn)
- [hoverRow](RenderScope.md#hoverrow)
- [mouseEvent](RenderScope.md#mouseevent)
- [removables](RenderScope.md#removables)
- [scrollFactorX](RenderScope.md#scrollfactorx)
- [scrollFactorY](RenderScope.md#scrollfactory)
- [scrollLeft](RenderScope.md#scrollleft)
- [scrollTop](RenderScope.md#scrolltop)
- [scrollViewport](RenderScope.md#scrollviewport)
- [scrollViewportLeft](RenderScope.md#scrollviewportleft)
- [storeScrollPosStateService](RenderScope.md#storescrollposstateservice)
- [tableModel](RenderScope.md#tablemodel)
- [tableOptions](RenderScope.md#tableoptions)
- [tree](RenderScope.md#tree)

### Methods

- [addAndRenderCellDiv](RenderScope.md#addandrendercelldiv)
- [adjustAfterScrolling](RenderScope.md#adjustafterscrolling)
- [adjustArea](RenderScope.md#adjustarea)
- [adjustBody](RenderScope.md#adjustbody)
- [adjustColumnsToRowParent](RenderScope.md#adjustcolumnstorowparent)
- [adjustContainersAndRows](RenderScope.md#adjustcontainersandrows)
- [adjustHoverColumns](RenderScope.md#adjusthovercolumns)
- [adjustHoverRows](RenderScope.md#adjusthoverrows)
- [applyCssClasses](RenderScope.md#applycssclasses)
- [checkForScrollPosSaving](RenderScope.md#checkforscrollpossaving)
- [clearSelection](RenderScope.md#clearselection)
- [debounce](RenderScope.md#debounce)
- [drawBigCell](RenderScope.md#drawbigcell)
- [findRowOfImportantRowspanCell](RenderScope.md#findrowofimportantrowspancell)
- [getArea](RenderScope.md#getarea)
- [getAreaAndSideIdentByAttr](RenderScope.md#getareaandsideidentbyattr)
- [getColumnWidths](RenderScope.md#getcolumnwidths)
- [getNumberByAttr](RenderScope.md#getnumberbyattr)
- [getRowHeights](RenderScope.md#getrowheights)
- [getStringByAttr](RenderScope.md#getstringbyattr)
- [getTreeArrowColumnIndex](RenderScope.md#gettreearrowcolumnindex)
- [hideHoverColumn](RenderScope.md#hidehovercolumn)
- [hideHoverRow](RenderScope.md#hidehoverrow)
- [initRenderEditor](RenderScope.md#initrendereditor)
- [isEditing](RenderScope.md#isediting)
- [renderCell](RenderScope.md#rendercell)
- [renderDragTargetDiv](RenderScope.md#renderdragtargetdiv)
- [renderHeaderCellResizeHandle](RenderScope.md#renderheadercellresizehandle)
- [renderSelectedBackgroundDiv](RenderScope.md#renderselectedbackgrounddiv)
- [repaint](RenderScope.md#repaint)
- [rerenderCellContent](RenderScope.md#rerendercellcontent)
- [resetEditorRenderer](RenderScope.md#reseteditorrenderer)
- [resetSizeOfWrapperDiv](RenderScope.md#resetsizeofwrapperdiv)
- [updateCells](RenderScope.md#updatecells)

## Constructors

### constructor

• **new RenderScope**(`hostElement`, `tableModel`, `dom`, `tableOptions`): [`RenderScope`](RenderScope.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `hostElement` | `HTMLDivElement` |
| `tableModel` | [`TableModelIf`](../interfaces/TableModelIf.md) |
| `dom` | [`ConvenienceDomService`](ConvenienceDomService.md) |
| `tableOptions` | [`TableOptionsIf`](../interfaces/TableOptionsIf.md) |

#### Returns

[`RenderScope`](RenderScope.md)

#### Overrides

[EleScope](EleScope.md).[constructor](EleScope.md#constructor)

#### Defined in

[lib/table/render-scope.ts:87](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/render-scope.ts#L87)

## Properties

### areaBodyCenter

• `Protected` **areaBodyCenter**: [`DivScope`](../modules.md#divscope)

#### Inherited from

[EleScope](EleScope.md).[areaBodyCenter](EleScope.md#areabodycenter)

#### Defined in

[lib/table/ele-scope.ts:23](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/ele-scope.ts#L23)

___

### areaBodyCenterGeo

• `Protected` **areaBodyCenterGeo**: [`GeoData`](GeoData.md)

#### Inherited from

[EleScope](EleScope.md).[areaBodyCenterGeo](EleScope.md#areabodycentergeo)

#### Defined in

[lib/table/ele-scope.ts:43](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/ele-scope.ts#L43)

___

### areaBodyEast

• `Protected` **areaBodyEast**: [`DivScope`](../modules.md#divscope)

#### Inherited from

[EleScope](EleScope.md).[areaBodyEast](EleScope.md#areabodyeast)

#### Defined in

[lib/table/ele-scope.ts:25](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/ele-scope.ts#L25)

___

### areaBodyEastGeo

• `Protected` **areaBodyEastGeo**: [`GeoData`](GeoData.md)

#### Inherited from

[EleScope](EleScope.md).[areaBodyEastGeo](EleScope.md#areabodyeastgeo)

#### Defined in

[lib/table/ele-scope.ts:44](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/ele-scope.ts#L44)

___

### areaBodyWest

• `Protected` **areaBodyWest**: [`DivScope`](../modules.md#divscope)

#### Inherited from

[EleScope](EleScope.md).[areaBodyWest](EleScope.md#areabodywest)

#### Defined in

[lib/table/ele-scope.ts:24](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/ele-scope.ts#L24)

___

### areaBodyWestGeo

• `Protected` **areaBodyWestGeo**: [`GeoData`](GeoData.md)

#### Inherited from

[EleScope](EleScope.md).[areaBodyWestGeo](EleScope.md#areabodywestgeo)

#### Defined in

[lib/table/ele-scope.ts:42](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/ele-scope.ts#L42)

___

### areaFooterCenter

• `Protected` **areaFooterCenter**: [`DivScope`](../modules.md#divscope)

#### Inherited from

[EleScope](EleScope.md).[areaFooterCenter](EleScope.md#areafootercenter)

#### Defined in

[lib/table/ele-scope.ts:28](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/ele-scope.ts#L28)

___

### areaFooterEast

• `Protected` **areaFooterEast**: [`DivScope`](../modules.md#divscope)

#### Inherited from

[EleScope](EleScope.md).[areaFooterEast](EleScope.md#areafootereast)

#### Defined in

[lib/table/ele-scope.ts:30](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/ele-scope.ts#L30)

___

### areaFooterWest

• `Protected` **areaFooterWest**: [`DivScope`](../modules.md#divscope)

#### Inherited from

[EleScope](EleScope.md).[areaFooterWest](EleScope.md#areafooterwest)

#### Defined in

[lib/table/ele-scope.ts:29](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/ele-scope.ts#L29)

___

### areaHeaderCenter

• `Protected` **areaHeaderCenter**: [`DivScope`](../modules.md#divscope)

#### Inherited from

[EleScope](EleScope.md).[areaHeaderCenter](EleScope.md#areaheadercenter)

#### Defined in

[lib/table/ele-scope.ts:19](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/ele-scope.ts#L19)

___

### areaHeaderEast

• `Protected` **areaHeaderEast**: [`DivScope`](../modules.md#divscope)

#### Inherited from

[EleScope](EleScope.md).[areaHeaderEast](EleScope.md#areaheadereast)

#### Defined in

[lib/table/ele-scope.ts:21](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/ele-scope.ts#L21)

___

### areaHeaderWest

• `Protected` **areaHeaderWest**: [`DivScope`](../modules.md#divscope)

#### Inherited from

[EleScope](EleScope.md).[areaHeaderWest](EleScope.md#areaheaderwest)

#### Defined in

[lib/table/ele-scope.ts:20](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/ele-scope.ts#L20)

___

### borderFixedEast

• `Protected` **borderFixedEast**: `HTMLDivElement`

#### Inherited from

[EleScope](EleScope.md).[borderFixedEast](EleScope.md#borderfixedeast)

#### Defined in

[lib/table/ele-scope.ts:35](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/ele-scope.ts#L35)

___

### borderFixedWest

• `Protected` **borderFixedWest**: `HTMLDivElement`

#### Inherited from

[EleScope](EleScope.md).[borderFixedWest](EleScope.md#borderfixedwest)

#### Defined in

[lib/table/ele-scope.ts:34](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/ele-scope.ts#L34)

___

### borderFooterTop

• `Protected` **borderFooterTop**: `HTMLDivElement`

#### Inherited from

[EleScope](EleScope.md).[borderFooterTop](EleScope.md#borderfootertop)

#### Defined in

[lib/table/ele-scope.ts:33](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/ele-scope.ts#L33)

___

### borderHeaderBottom

• `Protected` **borderHeaderBottom**: `HTMLDivElement`

#### Inherited from

[EleScope](EleScope.md).[borderHeaderBottom](EleScope.md#borderheaderbottom)

#### Defined in

[lib/table/ele-scope.ts:32](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/ele-scope.ts#L32)

___

### cleanupFunctions

• `Protected` `Readonly` **cleanupFunctions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `body` | `Function`[] |
| `footer` | `Function`[] |
| `header` | `Function`[] |

#### Defined in

[lib/table/render-scope.ts:65](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/render-scope.ts#L65)

___

### colAndRowspanModels

• `Protected` **colAndRowspanModels**: [`AreaObjectMapType`](../modules.md#areaobjectmaptype)\<[`ColAndRowspanModel`](ColAndRowspanModel.md)\>

#### Defined in

[lib/table/render-scope.ts:76](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/render-scope.ts#L76)

___

### contentDiv

• `Protected` **contentDiv**: `HTMLDivElement`

#### Inherited from

[EleScope](EleScope.md).[contentDiv](EleScope.md#contentdiv)

#### Defined in

[lib/table/ele-scope.ts:17](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/ele-scope.ts#L17)

___

### contentWrapperDiv

• `Protected` **contentWrapperDiv**: `HTMLDivElement`

#### Inherited from

[EleScope](EleScope.md).[contentWrapperDiv](EleScope.md#contentwrapperdiv)

#### Defined in

[lib/table/ele-scope.ts:16](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/ele-scope.ts#L16)

___

### debounceTimeout

• `Private` `Optional` **debounceTimeout**: ``null`` \| `Timeout`

#### Defined in

[lib/table/render-scope.ts:81](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/render-scope.ts#L81)

___

### dom

• `Protected` `Readonly` **dom**: [`ConvenienceDomService`](ConvenienceDomService.md)

#### Inherited from

[EleScope](EleScope.md).[dom](EleScope.md#dom)

#### Defined in

[lib/table/ele-scope.ts:50](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/ele-scope.ts#L50)

___

### draggingTargetColumnIndex

• `Protected` **draggingTargetColumnIndex**: `number` = `-1`

#### Defined in

[lib/table/render-scope.ts:79](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/render-scope.ts#L79)

___

### editing

• `Protected` **editing**: `boolean` = `false`

#### Defined in

[lib/table/render-scope.ts:117](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/render-scope.ts#L117)

___

### editorRenderer

• `Private` `Optional` **editorRenderer**: [`CellRendererIf`](../interfaces/CellRendererIf.md)

#### Defined in

[lib/table/render-scope.ts:82](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/render-scope.ts#L82)

___

### editorRendererColumn

• `Private` `Optional` **editorRendererColumn**: `number`

#### Defined in

[lib/table/render-scope.ts:83](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/render-scope.ts#L83)

___

### editorRendererRow

• `Private` `Optional` **editorRendererRow**: `number`

#### Defined in

[lib/table/render-scope.ts:84](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/render-scope.ts#L84)

___

### firstVisibleRowIndex

• `Protected` **firstVisibleRowIndex**: `number` = `-1`

#### Defined in

[lib/table/render-scope.ts:77](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/render-scope.ts#L77)

___

### getFocusModel

• `Protected` `Optional` **getFocusModel**: [`GetT`](../modules.md#gett)\<[`FocusModelIf`](../interfaces/FocusModelIf.md)\>

#### Defined in

[lib/table/render-scope.ts:59](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/render-scope.ts#L59)

___

### getSelectionModel

• `Protected` `Optional` **getSelectionModel**: [`GetT`](../modules.md#gett)\<[`SelectionModelIf`](../interfaces/SelectionModelIf.md)\>

#### Defined in

[lib/table/render-scope.ts:58](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/render-scope.ts#L58)

___

### hostElement

• `Readonly` **hostElement**: `HTMLDivElement`

#### Inherited from

[EleScope](EleScope.md).[hostElement](EleScope.md#hostelement)

#### Defined in

[lib/table/ele-scope.ts:48](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/ele-scope.ts#L48)

___

### hoverColumn

• `Protected` **hoverColumn**: `HTMLDivElement`

#### Inherited from

[EleScope](EleScope.md).[hoverColumn](EleScope.md#hovercolumn)

#### Defined in

[lib/table/ele-scope.ts:38](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/ele-scope.ts#L38)

___

### hoverRow

• `Protected` **hoverRow**: `HTMLDivElement`

#### Inherited from

[EleScope](EleScope.md).[hoverRow](EleScope.md#hoverrow)

#### Defined in

[lib/table/ele-scope.ts:37](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/ele-scope.ts#L37)

___

### mouseEvent

• `Protected` `Optional` **mouseEvent**: [`GeMouseEvent`](GeMouseEvent.md)

#### Defined in

[lib/table/render-scope.ts:80](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/render-scope.ts#L80)

___

### removables

• `Private` **removables**: `HTMLDivElement`[] = `[]`

#### Defined in

[lib/table/render-scope.ts:85](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/render-scope.ts#L85)

___

### scrollFactorX

• `Protected` **scrollFactorX**: `number` = `0`

#### Defined in

[lib/table/render-scope.ts:63](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/render-scope.ts#L63)

___

### scrollFactorY

• `Protected` **scrollFactorY**: `number` = `0`

#### Defined in

[lib/table/render-scope.ts:62](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/render-scope.ts#L62)

___

### scrollLeft

• `Protected` **scrollLeft**: `number` = `0`

#### Defined in

[lib/table/render-scope.ts:60](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/render-scope.ts#L60)

___

### scrollTop

• `Protected` **scrollTop**: `number` = `0`

#### Inherited from

[EleScope](EleScope.md).[scrollTop](EleScope.md#scrolltop)

#### Defined in

[lib/table/ele-scope.ts:40](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/ele-scope.ts#L40)

___

### scrollViewport

• **scrollViewport**: `HTMLDivElement`

#### Inherited from

[EleScope](EleScope.md).[scrollViewport](EleScope.md#scrollviewport)

#### Defined in

[lib/table/ele-scope.ts:14](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/ele-scope.ts#L14)

___

### scrollViewportLeft

• `Protected` **scrollViewportLeft**: `number` = `0`

#### Defined in

[lib/table/render-scope.ts:61](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/render-scope.ts#L61)

___

### storeScrollPosStateService

• `Protected` `Optional` **storeScrollPosStateService**: [`StoreStateScrollPosService`](StoreStateScrollPosService.md)

#### Defined in

[lib/table/render-scope.ts:57](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/render-scope.ts#L57)

___

### tableModel

• `Readonly` **tableModel**: [`TableModelIf`](../interfaces/TableModelIf.md)

#### Inherited from

[EleScope](EleScope.md).[tableModel](EleScope.md#tablemodel)

#### Defined in

[lib/table/ele-scope.ts:49](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/ele-scope.ts#L49)

___

### tableOptions

• `Readonly` **tableOptions**: [`TableOptionsIf`](../interfaces/TableOptionsIf.md)

#### Inherited from

[EleScope](EleScope.md).[tableOptions](EleScope.md#tableoptions)

#### Defined in

[lib/table/ele-scope.ts:51](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/ele-scope.ts#L51)

___

### tree

• `Protected` **tree**: `boolean` = `false`

#### Defined in

[lib/table/render-scope.ts:74](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/render-scope.ts#L74)

## Methods

### addAndRenderCellDiv

▸ **addAndRenderCellDiv**(`«destructured»`): [`HTMLDivElement`, `undefined` \| `Function`]

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`ArgsRenderCellDiv`](../interfaces/ArgsRenderCellDiv.md) |

#### Returns

[`HTMLDivElement`, `undefined` \| `Function`]

#### Defined in

[lib/table/render-scope.ts:672](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/render-scope.ts#L672)

___

### adjustAfterScrolling

▸ **adjustAfterScrolling**(): `void`

#### Returns

`void`

#### Overrides

[EleScope](EleScope.md).[adjustAfterScrolling](EleScope.md#adjustafterscrolling)

#### Defined in

[lib/table/render-scope.ts:166](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/render-scope.ts#L166)

___

### adjustArea

▸ **adjustArea**(`areaIdent`, `yStart?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `areaIdent` | [`AreaIdent`](../modules.md#areaident) | `undefined` |
| `yStart` | `number` | `0` |

#### Returns

`void`

#### Defined in

[lib/table/render-scope.ts:299](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/render-scope.ts#L299)

___

### adjustBody

▸ **adjustBody**(): `void`

#### Returns

`void`

#### Defined in

[lib/table/render-scope.ts:273](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/render-scope.ts#L273)

___

### adjustColumnsToRowParent

▸ **adjustColumnsToRowParent**(`«destructured»`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`ArgsAdjustColumnsToRowParentParams`](../interfaces/ArgsAdjustColumnsToRowParentParams.md) |

#### Returns

`void`

#### Defined in

[lib/table/render-scope.ts:554](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/render-scope.ts#L554)

___

### adjustContainersAndRows

▸ **adjustContainersAndRows**(): `void`

#### Returns

`void`

#### Inherited from

[EleScope](EleScope.md).[adjustContainersAndRows](EleScope.md#adjustcontainersandrows)

#### Defined in

[lib/table/ele-scope.ts:139](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/ele-scope.ts#L139)

___

### adjustHoverColumns

▸ **adjustHoverColumns**(`mouseMoveEvent`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mouseMoveEvent` | [`GeMouseEvent`](GeMouseEvent.md) |

#### Returns

`void`

#### Defined in

[lib/table/render-scope.ts:857](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/render-scope.ts#L857)

___

### adjustHoverRows

▸ **adjustHoverRows**(`mouseMoveEvent`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mouseMoveEvent` | [`GeMouseEvent`](GeMouseEvent.md) |

#### Returns

`void`

#### Defined in

[lib/table/render-scope.ts:834](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/render-scope.ts#L834)

___

### applyCssClasses

▸ **applyCssClasses**(`ele`, `cssClasses?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ele` | `HTMLDivElement` |
| `cssClasses` | `Object` |

#### Returns

`void`

#### Defined in

[lib/table/render-scope.ts:768](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/render-scope.ts#L768)

___

### checkForScrollPosSaving

▸ **checkForScrollPosSaving**(): `void`

#### Returns

`void`

#### Defined in

[lib/table/render-scope.ts:220](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/render-scope.ts#L220)

___

### clearSelection

▸ **clearSelection**(): `void`

#### Returns

`void`

#### Defined in

[lib/table/render-scope.ts:129](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/render-scope.ts#L129)

___

### debounce

▸ **debounce**(`fn`, `delay?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `fn` | `Function` | `undefined` |
| `delay` | `number` | `1000` |

#### Returns

`void`

#### Defined in

[lib/table/render-scope.ts:881](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/render-scope.ts#L881)

___

### drawBigCell

▸ **drawBigCell**(`range`, `xStart`, `yStart`, `areaModel`, `parentDiv`, `sideIdent`): `void`

Draws big cells (rowspan and or colspan) in body/center

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `range` | [`CellRange`](CellRange.md) | CellRange |
| `xStart` | `number` | X position in pixel for top left corner |
| `yStart` | `number` | Y position in pixel for top left corner |
| `areaModel` | [`AreaModelIf`](../interfaces/AreaModelIf.md) | AreaModelIf |
| `parentDiv` | `HTMLDivElement` | Parent div as HTMLDivElement |
| `sideIdent` | [`SideIdent`](../modules.md#sideident) | SideIdent (west,center,east) |

#### Returns

`void`

#### Defined in

[lib/table/render-scope.ts:459](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/render-scope.ts#L459)

___

### findRowOfImportantRowspanCell

▸ **findRowOfImportantRowspanCell**(`areaModel`, `rowIndex`, `colIndex`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `areaModel` | [`AreaModelIf`](../interfaces/AreaModelIf.md) |
| `rowIndex` | `number` |
| `colIndex` | `number` |

#### Returns

`number`

#### Defined in

[lib/table/render-scope.ts:539](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/render-scope.ts#L539)

___

### getArea

▸ **getArea**(`rowIdent`, `sideIdent`): [`DivScope`](../modules.md#divscope)

#### Parameters

| Name | Type |
| :------ | :------ |
| `rowIdent` | [`AreaIdent`](../modules.md#areaident) |
| `sideIdent` | [`SideIdent`](../modules.md#sideident) |

#### Returns

[`DivScope`](../modules.md#divscope)

#### Defined in

[lib/table/render-scope.ts:256](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/render-scope.ts#L256)

___

### getAreaAndSideIdentByAttr

▸ **getAreaAndSideIdentByAttr**(`srcElement`): [`undefined` \| [`AreaIdent`](../modules.md#areaident), `undefined` \| [`SideIdent`](../modules.md#sideident)]

#### Parameters

| Name | Type |
| :------ | :------ |
| `srcElement` | `HTMLElement` |

#### Returns

[`undefined` \| [`AreaIdent`](../modules.md#areaident), `undefined` \| [`SideIdent`](../modules.md#sideident)]

#### Defined in

[lib/table/render-scope.ts:245](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/render-scope.ts#L245)

___

### getColumnWidths

▸ **getColumnWidths**(`startIndex`, `endIndex`): `number`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `startIndex` | `number` |
| `endIndex` | `number` |

#### Returns

`number`[]

#### Defined in

[lib/table/render-scope.ts:818](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/render-scope.ts#L818)

___

### getNumberByAttr

▸ **getNumberByAttr**(`srcElement`, `key`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `srcElement` | `HTMLElement` |
| `key` | `string` |

#### Returns

`number`

#### Defined in

[lib/table/render-scope.ts:283](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/render-scope.ts#L283)

___

### getRowHeights

▸ **getRowHeights**(`startIndex`, `endIndex`, `areaModel`): `number`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `startIndex` | `number` |
| `endIndex` | `number` |
| `areaModel` | [`AreaModelIf`](../interfaces/AreaModelIf.md) |

#### Returns

`number`[]

#### Defined in

[lib/table/render-scope.ts:826](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/render-scope.ts#L826)

___

### getStringByAttr

▸ **getStringByAttr**(`srcElement`, `key`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `srcElement` | `HTMLElement` |
| `key` | `string` |

#### Returns

`string`

#### Defined in

[lib/table/render-scope.ts:291](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/render-scope.ts#L291)

___

### getTreeArrowColumnIndex

▸ **getTreeArrowColumnIndex**(): ``0`` \| ``1``

#### Returns

``0`` \| ``1``

#### Defined in

[lib/table/render-scope.ts:662](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/render-scope.ts#L662)

___

### hideHoverColumn

▸ **hideHoverColumn**(): `void`

#### Returns

`void`

#### Defined in

[lib/table/render-scope.ts:875](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/render-scope.ts#L875)

___

### hideHoverRow

▸ **hideHoverRow**(): `void`

#### Returns

`void`

#### Defined in

[lib/table/render-scope.ts:851](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/render-scope.ts#L851)

___

### initRenderEditor

▸ **initRenderEditor**(`rowIdx`, `colIdx`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rowIdx` | `number` |
| `colIdx` | `number` |

#### Returns

`void`

#### Defined in

[lib/table/render-scope.ts:136](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/render-scope.ts#L136)

___

### isEditing

▸ **isEditing**(): `boolean`

#### Returns

`boolean`

#### Defined in

[lib/table/render-scope.ts:118](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/render-scope.ts#L118)

___

### renderCell

▸ **renderCell**(`«destructured»`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `ArgsRenderCell` |

#### Returns

`void`

#### Defined in

[lib/table/render-scope.ts:932](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/render-scope.ts#L932)

___

### renderDragTargetDiv

▸ **renderDragTargetDiv**(`parent`, `left`, `top`, `width`, `height`): `HTMLDivElement`

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | `HTMLDivElement` |
| `left` | `number` |
| `top` | `number` |
| `width` | `number` |
| `height` | `number` |

#### Returns

`HTMLDivElement`

#### Defined in

[lib/table/render-scope.ts:888](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/render-scope.ts#L888)

___

### renderHeaderCellResizeHandle

▸ **renderHeaderCellResizeHandle**(`«destructured»`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `ArgsRenderHeaderCellResizeHandle` |

#### Returns

`void`

#### Defined in

[lib/table/render-scope.ts:972](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/render-scope.ts#L972)

___

### renderSelectedBackgroundDiv

▸ **renderSelectedBackgroundDiv**(`skip`, `renderSelection`, `sideIdent`, `areaModel`, `rowIndex`, `index`, `parent`, `left`, `top`, `width`, `height`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `skip` | `boolean` |
| `renderSelection` | `boolean` |
| `sideIdent` | [`SideIdent`](../modules.md#sideident) |
| `areaModel` | [`AreaModelIf`](../interfaces/AreaModelIf.md) |
| `rowIndex` | `number` |
| `index` | `number` |
| `parent` | `HTMLDivElement` |
| `left` | `number` |
| `top` | `number` |
| `width` | `number` |
| `height` | `number` |

#### Returns

`boolean`

#### Defined in

[lib/table/render-scope.ts:900](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/render-scope.ts#L900)

___

### repaint

▸ **repaint**(): `void`

#### Returns

`void`

#### Defined in

[lib/table/render-scope.ts:162](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/render-scope.ts#L162)

___

### rerenderCellContent

▸ **rerenderCellContent**(`«destructured»`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`TableCellUpdateEventIf`](../interfaces/TableCellUpdateEventIf.md) |

#### Returns

`void`

#### Defined in

[lib/table/render-scope.ts:782](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/render-scope.ts#L782)

___

### resetEditorRenderer

▸ **resetEditorRenderer**(): `void`

#### Returns

`void`

#### Defined in

[lib/table/render-scope.ts:122](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/render-scope.ts#L122)

___

### resetSizeOfWrapperDiv

▸ **resetSizeOfWrapperDiv**(): `void`

#### Returns

`void`

#### Inherited from

[EleScope](EleScope.md).[resetSizeOfWrapperDiv](EleScope.md#resetsizeofwrapperdiv)

#### Defined in

[lib/table/ele-scope.ts:280](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/ele-scope.ts#L280)

___

### updateCells

▸ **updateCells**(`events`, `repaintAll?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `events` | [`TableCellUpdateEventIf`](../interfaces/TableCellUpdateEventIf.md)[] | `undefined` |
| `repaintAll` | `boolean` | `false` |

#### Returns

`void`

#### Defined in

[lib/table/render-scope.ts:227](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/render-scope.ts#L227)
