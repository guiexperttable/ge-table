[@guiexpert/table](../README.md) / [Exports](../modules.md) / RenderScope

# Class: RenderScope

Represents a store for HTML elements.

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
- [displayedRowCount](RenderScope.md#displayedrowcount)
- [dom](RenderScope.md#dom)
- [dragging](RenderScope.md#dragging)
- [draggingColumn](RenderScope.md#draggingcolumn)
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
- [storedColumnWidths](RenderScope.md#storedcolumnwidths)
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
- [adjustDraggingColumn](RenderScope.md#adjustdraggingcolumn)
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
- [hideDraggingColumn](RenderScope.md#hidedraggingcolumn)
- [hideHoverColumn](RenderScope.md#hidehovercolumn)
- [hideHoverRow](RenderScope.md#hidehoverrow)
- [initRenderEditor](RenderScope.md#initrendereditor)
- [isEditing](RenderScope.md#isediting)
- [recalcColumnWidths](RenderScope.md#recalccolumnwidths)
- [renderCell](RenderScope.md#rendercell)
- [renderContentOfDraggingColumn](RenderScope.md#rendercontentofdraggingcolumn)
- [renderContentOfDraggingColumnForArea](RenderScope.md#rendercontentofdraggingcolumnforarea)
- [renderDragTargetDiv](RenderScope.md#renderdragtargetdiv)
- [renderHeaderCellResizeHandle](RenderScope.md#renderheadercellresizehandle)
- [renderSelectedBackgroundDiv](RenderScope.md#renderselectedbackgrounddiv)
- [repaint](RenderScope.md#repaint)
- [repaintHard](RenderScope.md#repainthard)
- [rerenderCellContent](RenderScope.md#rerendercellcontent)
- [resetEditorRenderer](RenderScope.md#reseteditorrenderer)
- [resetSizeOfWrapperDiv](RenderScope.md#resetsizeofwrapperdiv)
- [storeColumnWidths](RenderScope.md#storecolumnwidths)
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

[lib/table/render-scope.ts:103](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/render-scope.ts#L103)

## Properties

### areaBodyCenter

• `Protected` **areaBodyCenter**: [`DivScope`](../modules.md#divscope)

#### Inherited from

[EleScope](EleScope.md).[areaBodyCenter](EleScope.md#areabodycenter)

#### Defined in

[lib/table/ele-scope.ts:23](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/ele-scope.ts#L23)

___

### areaBodyCenterGeo

• `Protected` **areaBodyCenterGeo**: [`GeoData`](GeoData.md)

#### Inherited from

[EleScope](EleScope.md).[areaBodyCenterGeo](EleScope.md#areabodycentergeo)

#### Defined in

[lib/table/ele-scope.ts:44](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/ele-scope.ts#L44)

___

### areaBodyEast

• `Protected` **areaBodyEast**: [`DivScope`](../modules.md#divscope)

#### Inherited from

[EleScope](EleScope.md).[areaBodyEast](EleScope.md#areabodyeast)

#### Defined in

[lib/table/ele-scope.ts:25](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/ele-scope.ts#L25)

___

### areaBodyEastGeo

• `Protected` **areaBodyEastGeo**: [`GeoData`](GeoData.md)

#### Inherited from

[EleScope](EleScope.md).[areaBodyEastGeo](EleScope.md#areabodyeastgeo)

#### Defined in

[lib/table/ele-scope.ts:45](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/ele-scope.ts#L45)

___

### areaBodyWest

• `Protected` **areaBodyWest**: [`DivScope`](../modules.md#divscope)

#### Inherited from

[EleScope](EleScope.md).[areaBodyWest](EleScope.md#areabodywest)

#### Defined in

[lib/table/ele-scope.ts:24](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/ele-scope.ts#L24)

___

### areaBodyWestGeo

• `Protected` **areaBodyWestGeo**: [`GeoData`](GeoData.md)

#### Inherited from

[EleScope](EleScope.md).[areaBodyWestGeo](EleScope.md#areabodywestgeo)

#### Defined in

[lib/table/ele-scope.ts:43](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/ele-scope.ts#L43)

___

### areaFooterCenter

• `Protected` **areaFooterCenter**: [`DivScope`](../modules.md#divscope)

#### Inherited from

[EleScope](EleScope.md).[areaFooterCenter](EleScope.md#areafootercenter)

#### Defined in

[lib/table/ele-scope.ts:28](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/ele-scope.ts#L28)

___

### areaFooterEast

• `Protected` **areaFooterEast**: [`DivScope`](../modules.md#divscope)

#### Inherited from

[EleScope](EleScope.md).[areaFooterEast](EleScope.md#areafootereast)

#### Defined in

[lib/table/ele-scope.ts:30](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/ele-scope.ts#L30)

___

### areaFooterWest

• `Protected` **areaFooterWest**: [`DivScope`](../modules.md#divscope)

#### Inherited from

[EleScope](EleScope.md).[areaFooterWest](EleScope.md#areafooterwest)

#### Defined in

[lib/table/ele-scope.ts:29](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/ele-scope.ts#L29)

___

### areaHeaderCenter

• `Protected` **areaHeaderCenter**: [`DivScope`](../modules.md#divscope)

#### Inherited from

[EleScope](EleScope.md).[areaHeaderCenter](EleScope.md#areaheadercenter)

#### Defined in

[lib/table/ele-scope.ts:19](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/ele-scope.ts#L19)

___

### areaHeaderEast

• `Protected` **areaHeaderEast**: [`DivScope`](../modules.md#divscope)

#### Inherited from

[EleScope](EleScope.md).[areaHeaderEast](EleScope.md#areaheadereast)

#### Defined in

[lib/table/ele-scope.ts:21](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/ele-scope.ts#L21)

___

### areaHeaderWest

• `Protected` **areaHeaderWest**: [`DivScope`](../modules.md#divscope)

#### Inherited from

[EleScope](EleScope.md).[areaHeaderWest](EleScope.md#areaheaderwest)

#### Defined in

[lib/table/ele-scope.ts:20](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/ele-scope.ts#L20)

___

### borderFixedEast

• `Protected` **borderFixedEast**: `HTMLDivElement`

#### Inherited from

[EleScope](EleScope.md).[borderFixedEast](EleScope.md#borderfixedeast)

#### Defined in

[lib/table/ele-scope.ts:35](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/ele-scope.ts#L35)

___

### borderFixedWest

• `Protected` **borderFixedWest**: `HTMLDivElement`

#### Inherited from

[EleScope](EleScope.md).[borderFixedWest](EleScope.md#borderfixedwest)

#### Defined in

[lib/table/ele-scope.ts:34](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/ele-scope.ts#L34)

___

### borderFooterTop

• `Protected` **borderFooterTop**: `HTMLDivElement`

#### Inherited from

[EleScope](EleScope.md).[borderFooterTop](EleScope.md#borderfootertop)

#### Defined in

[lib/table/ele-scope.ts:33](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/ele-scope.ts#L33)

___

### borderHeaderBottom

• `Protected` **borderHeaderBottom**: `HTMLDivElement`

#### Inherited from

[EleScope](EleScope.md).[borderHeaderBottom](EleScope.md#borderheaderbottom)

#### Defined in

[lib/table/ele-scope.ts:32](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/ele-scope.ts#L32)

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

[lib/table/render-scope.ts:80](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/render-scope.ts#L80)

___

### colAndRowspanModels

• `Protected` **colAndRowspanModels**: [`AreaObjectMapType`](../modules.md#areaobjectmaptype)\<[`ColAndRowspanModel`](ColAndRowspanModel.md)\>

#### Defined in

[lib/table/render-scope.ts:91](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/render-scope.ts#L91)

___

### contentDiv

• `Protected` **contentDiv**: `HTMLDivElement`

#### Inherited from

[EleScope](EleScope.md).[contentDiv](EleScope.md#contentdiv)

#### Defined in

[lib/table/ele-scope.ts:17](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/ele-scope.ts#L17)

___

### contentWrapperDiv

• `Protected` **contentWrapperDiv**: `HTMLDivElement`

#### Inherited from

[EleScope](EleScope.md).[contentWrapperDiv](EleScope.md#contentwrapperdiv)

#### Defined in

[lib/table/ele-scope.ts:16](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/ele-scope.ts#L16)

___

### debounceTimeout

• `Private` `Optional` **debounceTimeout**: ``null`` \| `Timeout`

#### Defined in

[lib/table/render-scope.ts:97](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/render-scope.ts#L97)

___

### displayedRowCount

• **displayedRowCount**: `number` = `0`

#### Defined in

[lib/table/render-scope.ts:495](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/render-scope.ts#L495)

___

### dom

• `Protected` `Readonly` **dom**: [`ConvenienceDomService`](ConvenienceDomService.md)

#### Inherited from

[EleScope](EleScope.md).[dom](EleScope.md#dom)

#### Defined in

[lib/table/ele-scope.ts:51](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/ele-scope.ts#L51)

___

### dragging

• `Protected` **dragging**: `boolean` = `false`

#### Defined in

[lib/table/render-scope.ts:68](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/render-scope.ts#L68)

___

### draggingColumn

• `Protected` **draggingColumn**: `HTMLDivElement`

#### Inherited from

[EleScope](EleScope.md).[draggingColumn](EleScope.md#draggingcolumn)

#### Defined in

[lib/table/ele-scope.ts:39](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/ele-scope.ts#L39)

___

### draggingTargetColumnIndex

• `Protected` **draggingTargetColumnIndex**: `number` = `-1`

#### Defined in

[lib/table/render-scope.ts:94](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/render-scope.ts#L94)

___

### editing

• `Protected` **editing**: `boolean` = `false`

#### Defined in

[lib/table/render-scope.ts:69](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/render-scope.ts#L69)

___

### editorRenderer

• `Private` `Optional` **editorRenderer**: [`CellRendererIf`](../interfaces/CellRendererIf.md)

#### Defined in

[lib/table/render-scope.ts:98](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/render-scope.ts#L98)

___

### editorRendererColumn

• `Private` `Optional` **editorRendererColumn**: `number`

#### Defined in

[lib/table/render-scope.ts:99](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/render-scope.ts#L99)

___

### editorRendererRow

• `Private` `Optional` **editorRendererRow**: `number`

#### Defined in

[lib/table/render-scope.ts:100](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/render-scope.ts#L100)

___

### firstVisibleRowIndex

• `Protected` **firstVisibleRowIndex**: `number` = `-1`

#### Defined in

[lib/table/render-scope.ts:92](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/render-scope.ts#L92)

___

### getFocusModel

• `Protected` `Optional` **getFocusModel**: [`GetT`](../modules.md#gett)\<[`FocusModelIf`](../interfaces/FocusModelIf.md)\>

#### Defined in

[lib/table/render-scope.ts:74](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/render-scope.ts#L74)

___

### getSelectionModel

• `Protected` `Optional` **getSelectionModel**: [`GetT`](../modules.md#gett)\<[`SelectionModelIf`](../interfaces/SelectionModelIf.md)\>

#### Defined in

[lib/table/render-scope.ts:73](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/render-scope.ts#L73)

___

### hostElement

• `Readonly` **hostElement**: `HTMLDivElement`

#### Inherited from

[EleScope](EleScope.md).[hostElement](EleScope.md#hostelement)

#### Defined in

[lib/table/ele-scope.ts:49](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/ele-scope.ts#L49)

___

### hoverColumn

• `Protected` **hoverColumn**: `HTMLDivElement`

#### Inherited from

[EleScope](EleScope.md).[hoverColumn](EleScope.md#hovercolumn)

#### Defined in

[lib/table/ele-scope.ts:38](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/ele-scope.ts#L38)

___

### hoverRow

• `Protected` **hoverRow**: `HTMLDivElement`

#### Inherited from

[EleScope](EleScope.md).[hoverRow](EleScope.md#hoverrow)

#### Defined in

[lib/table/ele-scope.ts:37](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/ele-scope.ts#L37)

___

### mouseEvent

• `Protected` `Optional` **mouseEvent**: [`GeMouseEvent`](GeMouseEvent.md)

#### Defined in

[lib/table/render-scope.ts:95](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/render-scope.ts#L95)

___

### removables

• `Private` **removables**: `HTMLDivElement`[] = `[]`

#### Defined in

[lib/table/render-scope.ts:101](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/render-scope.ts#L101)

___

### scrollFactorX

• `Protected` **scrollFactorX**: `number` = `0`

#### Defined in

[lib/table/render-scope.ts:78](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/render-scope.ts#L78)

___

### scrollFactorY

• `Protected` **scrollFactorY**: `number` = `0`

#### Defined in

[lib/table/render-scope.ts:77](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/render-scope.ts#L77)

___

### scrollLeft

• `Protected` **scrollLeft**: `number` = `0`

#### Defined in

[lib/table/render-scope.ts:75](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/render-scope.ts#L75)

___

### scrollTop

• `Protected` **scrollTop**: `number` = `0`

#### Inherited from

[EleScope](EleScope.md).[scrollTop](EleScope.md#scrolltop)

#### Defined in

[lib/table/ele-scope.ts:41](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/ele-scope.ts#L41)

___

### scrollViewport

• **scrollViewport**: `HTMLDivElement`

#### Inherited from

[EleScope](EleScope.md).[scrollViewport](EleScope.md#scrollviewport)

#### Defined in

[lib/table/ele-scope.ts:14](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/ele-scope.ts#L14)

___

### scrollViewportLeft

• `Protected` **scrollViewportLeft**: `number` = `0`

#### Defined in

[lib/table/render-scope.ts:76](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/render-scope.ts#L76)

___

### storeScrollPosStateService

• `Protected` `Optional` **storeScrollPosStateService**: [`StoreStateScrollPosService`](StoreStateScrollPosService.md)

#### Defined in

[lib/table/render-scope.ts:72](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/render-scope.ts#L72)

___

### storedColumnWidths

• `Protected` **storedColumnWidths**: `number`[] = `[]`

#### Defined in

[lib/table/render-scope.ts:70](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/render-scope.ts#L70)

___

### tableModel

• `Readonly` **tableModel**: [`TableModelIf`](../interfaces/TableModelIf.md)

#### Inherited from

[EleScope](EleScope.md).[tableModel](EleScope.md#tablemodel)

#### Defined in

[lib/table/ele-scope.ts:50](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/ele-scope.ts#L50)

___

### tableOptions

• `Readonly` **tableOptions**: [`TableOptionsIf`](../interfaces/TableOptionsIf.md)

#### Inherited from

[EleScope](EleScope.md).[tableOptions](EleScope.md#tableoptions)

#### Defined in

[lib/table/ele-scope.ts:52](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/ele-scope.ts#L52)

___

### tree

• `Protected` **tree**: `boolean` = `false`

#### Defined in

[lib/table/render-scope.ts:89](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/render-scope.ts#L89)

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

[lib/table/render-scope.ts:915](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/render-scope.ts#L915)

___

### adjustAfterScrolling

▸ **adjustAfterScrolling**(): `void`

Adjusts the table after scrolling. This method performs various adjustments
to the table's appearance and behavior after a scroll event occurs.

#### Returns

`void`

#### Overrides

[EleScope](EleScope.md).[adjustAfterScrolling](EleScope.md#adjustafterscrolling)

#### Defined in

[lib/table/render-scope.ts:253](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/render-scope.ts#L253)

___

### adjustArea

▸ **adjustArea**(`areaIdent`, `yStart?`): `void`

Adjusts the layout and positioning of the specified area in the table.
This method is used internally and should not be called directly.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `areaIdent` | [`AreaIdent`](../modules.md#areaident) | `undefined` | The identifier of the area to adjust (e.g. header, body, footer). |
| `yStart?` | `number` | `0` | The starting y-position for the layout adjustments. |

#### Returns

`void`

#### Defined in

[lib/table/render-scope.ts:505](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/render-scope.ts#L505)

___

### adjustBody

▸ **adjustBody**(): `void`

Adjusts the body of the table.

#### Returns

`void`

#### Defined in

[lib/table/render-scope.ts:452](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/render-scope.ts#L452)

___

### adjustColumnsToRowParent

▸ **adjustColumnsToRowParent**(`params`): `void`

Adjusts the columns to fit the width of the row's parent element.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`ArgsAdjustColumnsToRowParentParams`](../interfaces/ArgsAdjustColumnsToRowParentParams.md) | The parameters for adjusting the columns. |

#### Returns

`void`

#### Defined in

[lib/table/render-scope.ts:777](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/render-scope.ts#L777)

___

### adjustContainersAndRows

▸ **adjustContainersAndRows**(): `void`

Adjusts the containers and rows of the table based on the current state.

#### Returns

`void`

#### Inherited from

[EleScope](EleScope.md).[adjustContainersAndRows](EleScope.md#adjustcontainersandrows)

#### Defined in

[lib/table/ele-scope.ts:148](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/ele-scope.ts#L148)

___

### adjustDraggingColumn

▸ **adjustDraggingColumn**(`mouseMoveEvent`, `sourceColumnIndex`, `firstDraggingRendering`): `void`

Adjusts the dragging column during a mouse move event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mouseMoveEvent` | [`GeMouseEvent`](GeMouseEvent.md) | The mouse move event. |
| `sourceColumnIndex` | `number` | The index of the source column. |
| `firstDraggingRendering` | `boolean` | Indicates if it's the first rendering of the dragging column. |

#### Returns

`void`

#### Defined in

[lib/table/render-scope.ts:1174](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/render-scope.ts#L1174)

___

### adjustHoverColumns

▸ **adjustHoverColumns**(`mouseMoveEvent`): `void`

Adjusts the position and size of the hover column based on the mouse move event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mouseMoveEvent` | [`GeMouseEvent`](GeMouseEvent.md) | The mouse move event object. |

#### Returns

`void`

#### Defined in

[lib/table/render-scope.ts:1117](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/render-scope.ts#L1117)

___

### adjustHoverRows

▸ **adjustHoverRows**(`mouseMoveEvent`): `void`

Adjusts the position and size of the hover row based on the mouse move event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mouseMoveEvent` | [`GeMouseEvent`](GeMouseEvent.md) | The mouse move event. |

#### Returns

`void`

#### Defined in

[lib/table/render-scope.ts:1079](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/render-scope.ts#L1079)

___

### applyCssClasses

▸ **applyCssClasses**(`ele`, `cssClasses?`): `void`

Applies CSS classes to an HTML element.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ele` | `HTMLDivElement` | The HTML element to which CSS classes will be applied. |
| `cssClasses` | `Object` | An object containing CSS class names as keys and boolean values indicating whether to apply or remove the class. |

#### Returns

`void`

#### Defined in

[lib/table/render-scope.ts:1027](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/render-scope.ts#L1027)

___

### checkForScrollPosSaving

▸ **checkForScrollPosSaving**(): `void`

Checks if the scroll position should be saved and saves it.

#### Returns

`void`

#### Defined in

[lib/table/render-scope.ts:312](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/render-scope.ts#L312)

___

### clearSelection

▸ **clearSelection**(`rerender?`): `void`

Clears the selection in the component.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `rerender` | `boolean` | `false` | Indicates whether to rerender the component after clearing the selection. Default value is false. |

#### Returns

`void`

#### Defined in

[lib/table/render-scope.ts:162](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/render-scope.ts#L162)

___

### debounce

▸ **debounce**(`fn`, `delay?`): `void`

Executes a function after a specified delay, ensuring that the function is called only once within that delay period.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `fn` | () => `void` | `undefined` | The function to be executed. |
| `delay?` | `number` | `1000` | The delay in milliseconds before executing the function. |

#### Returns

`void`

#### Defined in

[lib/table/render-scope.ts:1159](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/render-scope.ts#L1159)

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

[lib/table/render-scope.ts:668](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/render-scope.ts#L668)

___

### findRowOfImportantRowspanCell

▸ **findRowOfImportantRowspanCell**(`areaModel`, `rowIndex`, `colIndex`): `number`

Finds the row index of an important rowspan cell in a given area model.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `areaModel` | [`AreaModelIf`](../interfaces/AreaModelIf.md) | The area model to search in. |
| `rowIndex` | `number` | The current row index. |
| `colIndex` | `number` | The current column index. |

#### Returns

`number`

- The row index of the important rowspan cell, or -1 if not found.

#### Defined in

[lib/table/render-scope.ts:756](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/render-scope.ts#L756)

___

### getArea

▸ **getArea**(`areaIdent`, `sideIdent`): [`DivScope`](../modules.md#divscope)

Retrieves the specified area from the grid layout.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `areaIdent` | [`AreaIdent`](../modules.md#areaident) | The identifier for the area ('header', 'body', or 'footer'). |
| `sideIdent` | [`SideIdent`](../modules.md#sideident) | The identifier for the side of the area ('west', 'center', or 'east'). |

#### Returns

[`DivScope`](../modules.md#divscope)

- The requested area element.

**`Throws`**

- If the area identifier or side identifier is incorrect.

#### Defined in

[lib/table/render-scope.ts:429](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/render-scope.ts#L429)

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

[lib/table/render-scope.ts:409](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/render-scope.ts#L409)

___

### getColumnWidths

▸ **getColumnWidths**(`startIndex`, `endIndex`): `number`[]

Retrieves the column widths of a table within a specified range.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `startIndex` | `number` | The index of the first column to retrieve the width of. |
| `endIndex` | `number` | The index of the last column to retrieve the width of. |

#### Returns

`number`[]

An array containing the widths of the columns within the specified range.

#### Defined in

[lib/table/render-scope.ts:1048](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/render-scope.ts#L1048)

___

### getNumberByAttr

▸ **getNumberByAttr**(`srcElement`, `key`): `number`

Returns a number value extracted from the specified attribute of the source element.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `srcElement` | `HTMLElement` | The source element from which to extract the attribute value. |
| `key` | `string` | The attribute key to extract the value from. |

#### Returns

`number`

- The extracted number value, or -1 if the attribute was not found or not a valid number.

#### Defined in

[lib/table/render-scope.ts:470](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/render-scope.ts#L470)

___

### getRowHeights

▸ **getRowHeights**(`startIndex`, `endIndex`, `areaModel`): `number`[]

Retrieves the heights of rows within a specified range.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `startIndex` | `number` | The index of the first row in the range. |
| `endIndex` | `number` | The index of the last row in the range. |
| `areaModel` | [`AreaModelIf`](../interfaces/AreaModelIf.md) | The area model. |

#### Returns

`number`[]

- An array containing the heights of the rows within the specified range.

#### Defined in

[lib/table/render-scope.ts:1064](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/render-scope.ts#L1064)

___

### getStringByAttr

▸ **getStringByAttr**(`srcElement`, `key`): `string`

Retrieves the value of the specified attribute from the nearest ancestor element that has the attribute.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `srcElement` | `HTMLElement` | The source element from which to start searching for the nearest ancestor element. |
| `key` | `string` | The name of the attribute to retrieve. |

#### Returns

`string`

The value of the specified attribute, or an empty string if the attribute is not found.

#### Defined in

[lib/table/render-scope.ts:487](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/render-scope.ts#L487)

___

### getTreeArrowColumnIndex

▸ **getTreeArrowColumnIndex**(): ``0`` \| ``1``

Retrieves the column index of the tree arrow column in the table.

#### Returns

``0`` \| ``1``

The column index of the tree arrow column.
               Returns 0 if the checkbox is not visible,
               otherwise returns 1.

#### Defined in

[lib/table/render-scope.ts:904](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/render-scope.ts#L904)

___

### hideDraggingColumn

▸ **hideDraggingColumn**(): `void`

Hides the dragging column by applying a 'display: none' style to it.
This method is protected and can only be accessed within the class.

#### Returns

`void`

#### Defined in

[lib/table/render-scope.ts:1295](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/render-scope.ts#L1295)

___

### hideHoverColumn

▸ **hideHoverColumn**(): `void`

Hide hover column.

This method hides the hover column by applying a style of 'display: none'
to the element representing the hover column.

#### Returns

`void`

**`Memberof`**

ClassName

#### Defined in

[lib/table/render-scope.ts:1145](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/render-scope.ts#L1145)

___

### hideHoverRow

▸ **hideHoverRow**(): `void`

Hides the hover row by applying 'display: none' style to it.

#### Returns

`void`

**`Function`**

**`Name`**

hideHoverRow

**`Memberof`**

ClassName

#### Defined in

[lib/table/render-scope.ts:1106](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/render-scope.ts#L1106)

___

### initRenderEditor

▸ **initRenderEditor**(`rowIdx`, `colIdx`): `void`

Initializes and renders the editor for a specified row and column index.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rowIdx` | `number` | The index of the row. |
| `colIdx` | `number` | The index of the column. |

#### Returns

`void`

#### Defined in

[lib/table/render-scope.ts:178](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/render-scope.ts#L178)

___

### isEditing

▸ **isEditing**(): `boolean`

#### Returns

`boolean`

#### Defined in

[lib/table/render-scope.ts:135](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/render-scope.ts#L135)

___

### recalcColumnWidths

▸ **recalcColumnWidths**(`clientWidth?`): `void`

Recalculates the column widths of the table.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `clientWidth?` | `number` | The client width of the table. If not provided, the client width of the scroll viewport will be used. |

#### Returns

`void`

#### Defined in

[lib/table/render-scope.ts:236](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/render-scope.ts#L236)

___

### renderCell

▸ **renderCell**(`args`): `void`

Renders a cell in the grid.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | `ArgsRenderCell` | The arguments for rendering the cell. |

#### Returns

`void`

#### Defined in

[lib/table/render-scope.ts:1392](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/render-scope.ts#L1392)

___

### renderContentOfDraggingColumn

▸ **renderContentOfDraggingColumn**(`columnGeo`): `void`

Renders the content of a dragging column.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `columnGeo` | [`GeoData`](GeoData.md) | The geographic data of the column. |

#### Returns

`void`

The y-coordinate of the rendered content.

#### Defined in

[lib/table/render-scope.ts:1211](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/render-scope.ts#L1211)

___

### renderContentOfDraggingColumnForArea

▸ **renderContentOfDraggingColumnForArea**(`columnGeo`, `areaIdent`, `y?`): `number`

Renders the content of the dragging column for a specific area.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `columnGeo` | [`GeoData`](GeoData.md) | `undefined` | The geometry data of the dragging column. |
| `areaIdent` | [`AreaIdent`](../modules.md#areaident) | `undefined` | The identifier of the area. |
| `y?` | `number` | `0` | The starting y-position. |

#### Returns

`number`

The final y-position after rendering all the content.

#### Defined in

[lib/table/render-scope.ts:1226](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/render-scope.ts#L1226)

___

### renderDragTargetDiv

▸ **renderDragTargetDiv**(`parent`, `left`, `top`, `width`, `height`): `HTMLDivElement`

Renders a draggable target div element.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parent` | `HTMLDivElement` | The parent element where the target div will be appended to. |
| `left` | `number` | The left position of the target div in pixels. |
| `top` | `number` | The top position of the target div in pixels. |
| `width` | `number` | The width of the target div in pixels. |
| `height` | `number` | The height of the target div in pixels. |

#### Returns

`HTMLDivElement`

- The rendered draggable target div element.

#### Defined in

[lib/table/render-scope.ts:1312](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/render-scope.ts#L1312)

___

### renderHeaderCellResizeHandle

▸ **renderHeaderCellResizeHandle**(`args`): `void`

Render the header cell resize handle.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | `ArgsRenderHeaderCellResizeHandle` | The arguments for rendering the handle. |

#### Returns

`void`

#### Defined in

[lib/table/render-scope.ts:1444](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/render-scope.ts#L1444)

___

### renderSelectedBackgroundDiv

▸ **renderSelectedBackgroundDiv**(`skip`, `renderSelection`, `sideIdent`, `areaModel`, `rowIndex`, `index`, `parent`, `left`, `top`, `width`, `height`): `boolean`

Render selected background div.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `skip` | `boolean` | Whether to skip rendering. |
| `renderSelection` | `boolean` | Whether to render the selection. |
| `sideIdent` | [`SideIdent`](../modules.md#sideident) | The side identifier. |
| `areaModel` | [`AreaModelIf`](../interfaces/AreaModelIf.md) | The area model. |
| `rowIndex` | `number` | The row index. |
| `index` | `number` | The index. |
| `parent` | `HTMLDivElement` | The parent div element. |
| `left` | `number` | The left position. |
| `top` | `number` | The top position. |
| `width` | `number` | The width of the div. |
| `height` | `number` | The height of the div. |

#### Returns

`boolean`

- Whether the cell is selected.

#### Defined in

[lib/table/render-scope.ts:1341](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/render-scope.ts#L1341)

___

### repaint

▸ **repaint**(): `void`

Adjusts the content after scrolling and initiates a repaint of the component.

#### Returns

`void`

#### Defined in

[lib/table/render-scope.ts:210](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/render-scope.ts#L210)

___

### repaintHard

▸ **repaintHard**(): `void`

Repaints the UI by resetting the size of the wrapper div,
adjusting the containers and rows, and performing additional adjustments
after scrolling.

#### Returns

`void`

This method does not return any value.

#### Defined in

[lib/table/render-scope.ts:222](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/render-scope.ts#L222)

___

### rerenderCellContent

▸ **rerenderCellContent**(`«destructured»`): `void`

Rerenders the content of a table cell based on the given parameters.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`TableCellUpdateEventIf`](../interfaces/TableCellUpdateEventIf.md) |

#### Returns

`void`

#### Defined in

[lib/table/render-scope.ts:354](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/render-scope.ts#L354)

___

### resetEditorRenderer

▸ **resetEditorRenderer**(): `void`

Resets the editor renderer by clearing its values and state.

#### Returns

`void`

**`Function`**

resetEditorRenderer

**`Memberof`**

ClassName

#### Defined in

[lib/table/render-scope.ts:148](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/render-scope.ts#L148)

___

### resetSizeOfWrapperDiv

▸ **resetSizeOfWrapperDiv**(): `void`

Resets the size of the wrapper div based on the content dimensions.

#### Returns

`void`

Returns nothing.

#### Inherited from

[EleScope](EleScope.md).[resetSizeOfWrapperDiv](EleScope.md#resetsizeofwrapperdiv)

#### Defined in

[lib/table/ele-scope.ts:302](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/ele-scope.ts#L302)

___

### storeColumnWidths

▸ **storeColumnWidths**(): `void`

Stores the widths of all columns in the table.

#### Returns

`void`

**`Function`**

storeColumnWidths

#### Defined in

[lib/table/render-scope.ts:402](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/render-scope.ts#L402)

___

### updateCells

▸ **updateCells**(`events`, `repaintAll?`): `void`

Updates the cells in the table with the provided values and optionally repaints all cells.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `events` | [`TableCellUpdateEventIf`](../interfaces/TableCellUpdateEventIf.md)[] | `undefined` | The array of events containing information about the cells to update. |
| `repaintAll` | `boolean` | `false` | Optional. If true, repaints all cells after updating. Defaults to false. |

#### Returns

`void`

#### Defined in

[lib/table/render-scope.ts:327](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/render-scope.ts#L327)
