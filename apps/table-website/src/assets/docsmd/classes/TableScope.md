[@guiexpert/table](../README.md) / [Exports](../modules.md) / TableScope

# Class: TableScope

Creates a TableScope instance.

**`Param`**

The host element.

**`Param`**

The table model object.

**`Param`**

Optional table options object.

**`Param`**

Optional event listener object.

**`Param`**

Optional DOM service object.

## Hierarchy

- [`RenderScope`](RenderScope.md)

  ↳ **`TableScope`**

## Implements

- [`OnActionTriggeredIf`](../interfaces/OnActionTriggeredIf.md)

## Table of contents

### Constructors

- [constructor](TableScope.md#constructor)

### Properties

- [api](TableScope.md#api)
- [areaBodyCenter](TableScope.md#areabodycenter)
- [areaBodyCenterGeo](TableScope.md#areabodycentergeo)
- [areaBodyEast](TableScope.md#areabodyeast)
- [areaBodyEastGeo](TableScope.md#areabodyeastgeo)
- [areaBodyWest](TableScope.md#areabodywest)
- [areaBodyWestGeo](TableScope.md#areabodywestgeo)
- [areaFooterCenter](TableScope.md#areafootercenter)
- [areaFooterEast](TableScope.md#areafootereast)
- [areaFooterWest](TableScope.md#areafooterwest)
- [areaHeaderCenter](TableScope.md#areaheadercenter)
- [areaHeaderEast](TableScope.md#areaheadereast)
- [areaHeaderWest](TableScope.md#areaheaderwest)
- [borderFixedEast](TableScope.md#borderfixedeast)
- [borderFixedWest](TableScope.md#borderfixedwest)
- [borderFooterTop](TableScope.md#borderfootertop)
- [borderHeaderBottom](TableScope.md#borderheaderbottom)
- [cleanupFunctions](TableScope.md#cleanupfunctions)
- [colAndRowspanModels](TableScope.md#colandrowspanmodels)
- [contentDiv](TableScope.md#contentdiv)
- [contentWrapperDiv](TableScope.md#contentwrapperdiv)
- [dom](TableScope.md#dom)
- [dragFrom](TableScope.md#dragfrom)
- [dragTo](TableScope.md#dragto)
- [draggingTargetColumnIndex](TableScope.md#draggingtargetcolumnindex)
- [editing](TableScope.md#editing)
- [eventListener](TableScope.md#eventlistener)
- [firstVisibleRowIndex](TableScope.md#firstvisiblerowindex)
- [getFocusModel](TableScope.md#getfocusmodel)
- [getSelectionModel](TableScope.md#getselectionmodel)
- [hostElement](TableScope.md#hostelement)
- [hoverColumn](TableScope.md#hovercolumn)
- [hoverRow](TableScope.md#hoverrow)
- [inputHandler](TableScope.md#inputhandler)
- [keyEvent](TableScope.md#keyevent)
- [licenseManager](TableScope.md#licensemanager)
- [mouseEvent](TableScope.md#mouseevent)
- [mouseHandler](TableScope.md#mousehandler)
- [mouseStartAction](TableScope.md#mousestartaction)
- [mouseStartColumnIndex](TableScope.md#mousestartcolumnindex)
- [mouseStartWidth](TableScope.md#mousestartwidth)
- [scrollFactorX](TableScope.md#scrollfactorx)
- [scrollFactorY](TableScope.md#scrollfactory)
- [scrollLeft](TableScope.md#scrollleft)
- [scrollTop](TableScope.md#scrolltop)
- [scrollViewport](TableScope.md#scrollviewport)
- [scrollViewportLeft](TableScope.md#scrollviewportleft)
- [selectionService](TableScope.md#selectionservice)
- [shortcutService](TableScope.md#shortcutservice)
- [storeScrollPosStateService](TableScope.md#storescrollposstateservice)
- [storeSortingService](TableScope.md#storesortingservice)
- [storeStateCollapsedExpandService](TableScope.md#storestatecollapsedexpandservice)
- [tableModel](TableScope.md#tablemodel)
- [tableOptions](TableScope.md#tableoptions)
- [tree](TableScope.md#tree)

### Methods

- [addAndRenderCellDiv](TableScope.md#addandrendercelldiv)
- [adjustAfterScrolling](TableScope.md#adjustafterscrolling)
- [adjustArea](TableScope.md#adjustarea)
- [adjustBody](TableScope.md#adjustbody)
- [adjustColumnsToRowParent](TableScope.md#adjustcolumnstorowparent)
- [adjustContainersAndRows](TableScope.md#adjustcontainersandrows)
- [adjustHoverColumns](TableScope.md#adjusthovercolumns)
- [adjustHoverRows](TableScope.md#adjusthoverrows)
- [applyCssClasses](TableScope.md#applycssclasses)
- [autoRestoreCollapsedExpandedState](TableScope.md#autorestorecollapsedexpandedstate)
- [autoRestoreScrollPosition](TableScope.md#autorestorescrollposition)
- [autoRestoreSortingState](TableScope.md#autorestoresortingstate)
- [changeFocusCell](TableScope.md#changefocuscell)
- [checkForScrollPosSaving](TableScope.md#checkforscrollpossaving)
- [clearSelection](TableScope.md#clearselection)
- [clearSelectionModel](TableScope.md#clearselectionmodel)
- [contextmenu](TableScope.md#contextmenu)
- [createGeMouseEvent](TableScope.md#creategemouseevent)
- [debounce](TableScope.md#debounce)
- [debugOnce](TableScope.md#debugonce)
- [drawBigCell](TableScope.md#drawbigcell)
- [externalFilterChanged](TableScope.md#externalfilterchanged)
- [findRowOfImportantRowspanCell](TableScope.md#findrowofimportantrowspancell)
- [firstInit](TableScope.md#firstinit)
- [getApi](TableScope.md#getapi)
- [getArea](TableScope.md#getarea)
- [getAreaAndSideIdentByAttr](TableScope.md#getareaandsideidentbyattr)
- [getColumnWidths](TableScope.md#getcolumnwidths)
- [getNumberByAttr](TableScope.md#getnumberbyattr)
- [getRowHeights](TableScope.md#getrowheights)
- [getStringByAttr](TableScope.md#getstringbyattr)
- [getTreeArrowColumnIndex](TableScope.md#gettreearrowcolumnindex)
- [hideHoverColumn](TableScope.md#hidehovercolumn)
- [hideHoverRow](TableScope.md#hidehoverrow)
- [initRenderEditor](TableScope.md#initrendereditor)
- [isEditing](TableScope.md#isediting)
- [mouseDraggingEndOnFrame](TableScope.md#mousedraggingendonframe)
- [mouseDraggingOnFrame](TableScope.md#mousedraggingonframe)
- [mouseMove](TableScope.md#mousemove)
- [onActionTriggered](TableScope.md#onactiontriggered)
- [onHeaderDblClicked](TableScope.md#onheaderdblclicked)
- [onMouseClicked](TableScope.md#onmouseclicked)
- [onMouseDown](TableScope.md#onmousedown)
- [repaint](TableScope.md#repaint)
- [rerenderCellContent](TableScope.md#rerendercellcontent)
- [resetEditorRenderer](TableScope.md#reseteditorrenderer)
- [resetSizeOfWrapperDiv](TableScope.md#resetsizeofwrapperdiv)
- [resizeColumn](TableScope.md#resizecolumn)
- [scrollToIndex](TableScope.md#scrolltoindex)
- [scrollToPixel](TableScope.md#scrolltopixel)
- [toggleExpandCollapseAll](TableScope.md#toggleexpandcollapseall)
- [toggleRowCheckbox](TableScope.md#togglerowcheckbox)
- [updateCells](TableScope.md#updatecells)
- [updateModelValueAfterEdit](TableScope.md#updatemodelvalueafteredit)
- [create](TableScope.md#create)

## Constructors

### constructor

• **new TableScope**(`hostElement`, `tableModel`, `domService`, `tableOptions`, `eventListener`): [`TableScope`](TableScope.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `hostElement` | `HTMLDivElement` |
| `tableModel` | [`TableModelIf`](../interfaces/TableModelIf.md) |
| `domService` | [`DomServiceIf`](../interfaces/DomServiceIf.md) |
| `tableOptions` | [`TableOptionsIf`](../interfaces/TableOptionsIf.md) |
| `eventListener` | [`EventListenerIf`](../interfaces/EventListenerIf.md) |

#### Returns

[`TableScope`](TableScope.md)

#### Overrides

[RenderScope](RenderScope.md).[constructor](RenderScope.md#constructor)

#### Defined in

[lib/table/table-scope.ts:88](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/table-scope.ts#L88)

## Properties

### api

• `Private` **api**: [`TableApi`](TableApi.md)

#### Defined in

[lib/table/table-scope.ts:53](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/table-scope.ts#L53)

___

### areaBodyCenter

• `Protected` **areaBodyCenter**: [`DivScope`](../modules.md#divscope)

#### Inherited from

[RenderScope](RenderScope.md).[areaBodyCenter](RenderScope.md#areabodycenter)

#### Defined in

[lib/table/ele-scope.ts:23](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/ele-scope.ts#L23)

___

### areaBodyCenterGeo

• `Protected` **areaBodyCenterGeo**: [`GeoData`](GeoData.md)

#### Inherited from

[RenderScope](RenderScope.md).[areaBodyCenterGeo](RenderScope.md#areabodycentergeo)

#### Defined in

[lib/table/ele-scope.ts:43](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/ele-scope.ts#L43)

___

### areaBodyEast

• `Protected` **areaBodyEast**: [`DivScope`](../modules.md#divscope)

#### Inherited from

[RenderScope](RenderScope.md).[areaBodyEast](RenderScope.md#areabodyeast)

#### Defined in

[lib/table/ele-scope.ts:25](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/ele-scope.ts#L25)

___

### areaBodyEastGeo

• `Protected` **areaBodyEastGeo**: [`GeoData`](GeoData.md)

#### Inherited from

[RenderScope](RenderScope.md).[areaBodyEastGeo](RenderScope.md#areabodyeastgeo)

#### Defined in

[lib/table/ele-scope.ts:44](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/ele-scope.ts#L44)

___

### areaBodyWest

• `Protected` **areaBodyWest**: [`DivScope`](../modules.md#divscope)

#### Inherited from

[RenderScope](RenderScope.md).[areaBodyWest](RenderScope.md#areabodywest)

#### Defined in

[lib/table/ele-scope.ts:24](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/ele-scope.ts#L24)

___

### areaBodyWestGeo

• `Protected` **areaBodyWestGeo**: [`GeoData`](GeoData.md)

#### Inherited from

[RenderScope](RenderScope.md).[areaBodyWestGeo](RenderScope.md#areabodywestgeo)

#### Defined in

[lib/table/ele-scope.ts:42](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/ele-scope.ts#L42)

___

### areaFooterCenter

• `Protected` **areaFooterCenter**: [`DivScope`](../modules.md#divscope)

#### Inherited from

[RenderScope](RenderScope.md).[areaFooterCenter](RenderScope.md#areafootercenter)

#### Defined in

[lib/table/ele-scope.ts:28](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/ele-scope.ts#L28)

___

### areaFooterEast

• `Protected` **areaFooterEast**: [`DivScope`](../modules.md#divscope)

#### Inherited from

[RenderScope](RenderScope.md).[areaFooterEast](RenderScope.md#areafootereast)

#### Defined in

[lib/table/ele-scope.ts:30](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/ele-scope.ts#L30)

___

### areaFooterWest

• `Protected` **areaFooterWest**: [`DivScope`](../modules.md#divscope)

#### Inherited from

[RenderScope](RenderScope.md).[areaFooterWest](RenderScope.md#areafooterwest)

#### Defined in

[lib/table/ele-scope.ts:29](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/ele-scope.ts#L29)

___

### areaHeaderCenter

• `Protected` **areaHeaderCenter**: [`DivScope`](../modules.md#divscope)

#### Inherited from

[RenderScope](RenderScope.md).[areaHeaderCenter](RenderScope.md#areaheadercenter)

#### Defined in

[lib/table/ele-scope.ts:19](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/ele-scope.ts#L19)

___

### areaHeaderEast

• `Protected` **areaHeaderEast**: [`DivScope`](../modules.md#divscope)

#### Inherited from

[RenderScope](RenderScope.md).[areaHeaderEast](RenderScope.md#areaheadereast)

#### Defined in

[lib/table/ele-scope.ts:21](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/ele-scope.ts#L21)

___

### areaHeaderWest

• `Protected` **areaHeaderWest**: [`DivScope`](../modules.md#divscope)

#### Inherited from

[RenderScope](RenderScope.md).[areaHeaderWest](RenderScope.md#areaheaderwest)

#### Defined in

[lib/table/ele-scope.ts:20](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/ele-scope.ts#L20)

___

### borderFixedEast

• `Protected` **borderFixedEast**: `HTMLDivElement`

#### Inherited from

[RenderScope](RenderScope.md).[borderFixedEast](RenderScope.md#borderfixedeast)

#### Defined in

[lib/table/ele-scope.ts:35](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/ele-scope.ts#L35)

___

### borderFixedWest

• `Protected` **borderFixedWest**: `HTMLDivElement`

#### Inherited from

[RenderScope](RenderScope.md).[borderFixedWest](RenderScope.md#borderfixedwest)

#### Defined in

[lib/table/ele-scope.ts:34](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/ele-scope.ts#L34)

___

### borderFooterTop

• `Protected` **borderFooterTop**: `HTMLDivElement`

#### Inherited from

[RenderScope](RenderScope.md).[borderFooterTop](RenderScope.md#borderfootertop)

#### Defined in

[lib/table/ele-scope.ts:33](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/ele-scope.ts#L33)

___

### borderHeaderBottom

• `Protected` **borderHeaderBottom**: `HTMLDivElement`

#### Inherited from

[RenderScope](RenderScope.md).[borderHeaderBottom](RenderScope.md#borderheaderbottom)

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

#### Inherited from

[RenderScope](RenderScope.md).[cleanupFunctions](RenderScope.md#cleanupfunctions)

#### Defined in

[lib/table/render-scope.ts:65](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/render-scope.ts#L65)

___

### colAndRowspanModels

• `Protected` **colAndRowspanModels**: [`AreaObjectMapType`](../modules.md#areaobjectmaptype)\<[`ColAndRowspanModel`](ColAndRowspanModel.md)\>

#### Inherited from

[RenderScope](RenderScope.md).[colAndRowspanModels](RenderScope.md#colandrowspanmodels)

#### Defined in

[lib/table/render-scope.ts:76](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/render-scope.ts#L76)

___

### contentDiv

• `Protected` **contentDiv**: `HTMLDivElement`

#### Inherited from

[RenderScope](RenderScope.md).[contentDiv](RenderScope.md#contentdiv)

#### Defined in

[lib/table/ele-scope.ts:17](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/ele-scope.ts#L17)

___

### contentWrapperDiv

• `Protected` **contentWrapperDiv**: `HTMLDivElement`

#### Inherited from

[RenderScope](RenderScope.md).[contentWrapperDiv](RenderScope.md#contentwrapperdiv)

#### Defined in

[lib/table/ele-scope.ts:16](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/ele-scope.ts#L16)

___

### dom

• `Protected` `Readonly` **dom**: [`ConvenienceDomService`](ConvenienceDomService.md)

#### Inherited from

[RenderScope](RenderScope.md).[dom](RenderScope.md#dom)

#### Defined in

[lib/table/ele-scope.ts:50](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/ele-scope.ts#L50)

___

### dragFrom

• `Private` **dragFrom**: `number` = `-1`

#### Defined in

[lib/table/table-scope.ts:58](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/table-scope.ts#L58)

___

### dragTo

• `Private` **dragTo**: `number` = `-1`

#### Defined in

[lib/table/table-scope.ts:59](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/table-scope.ts#L59)

___

### draggingTargetColumnIndex

• `Protected` **draggingTargetColumnIndex**: `number` = `-1`

#### Inherited from

[RenderScope](RenderScope.md).[draggingTargetColumnIndex](RenderScope.md#draggingtargetcolumnindex)

#### Defined in

[lib/table/render-scope.ts:79](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/render-scope.ts#L79)

___

### editing

• `Protected` **editing**: `boolean` = `false`

#### Inherited from

[RenderScope](RenderScope.md).[editing](RenderScope.md#editing)

#### Defined in

[lib/table/render-scope.ts:117](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/render-scope.ts#L117)

___

### eventListener

• `Protected` `Readonly` **eventListener**: [`EventListenerIf`](../interfaces/EventListenerIf.md)

#### Defined in

[lib/table/table-scope.ts:93](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/table-scope.ts#L93)

___

### firstVisibleRowIndex

• `Protected` **firstVisibleRowIndex**: `number` = `-1`

#### Inherited from

[RenderScope](RenderScope.md).[firstVisibleRowIndex](RenderScope.md#firstvisiblerowindex)

#### Defined in

[lib/table/render-scope.ts:77](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/render-scope.ts#L77)

___

### getFocusModel

• `Protected` `Optional` **getFocusModel**: [`GetT`](../modules.md#gett)\<[`FocusModelIf`](../interfaces/FocusModelIf.md)\>

#### Inherited from

[RenderScope](RenderScope.md).[getFocusModel](RenderScope.md#getfocusmodel)

#### Defined in

[lib/table/render-scope.ts:59](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/render-scope.ts#L59)

___

### getSelectionModel

• `Protected` `Optional` **getSelectionModel**: [`GetT`](../modules.md#gett)\<[`SelectionModelIf`](../interfaces/SelectionModelIf.md)\>

#### Inherited from

[RenderScope](RenderScope.md).[getSelectionModel](RenderScope.md#getselectionmodel)

#### Defined in

[lib/table/render-scope.ts:58](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/render-scope.ts#L58)

___

### hostElement

• `Readonly` **hostElement**: `HTMLDivElement`

#### Inherited from

[RenderScope](RenderScope.md).[hostElement](RenderScope.md#hostelement)

#### Defined in

[lib/table/ele-scope.ts:48](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/ele-scope.ts#L48)

___

### hoverColumn

• `Protected` **hoverColumn**: `HTMLDivElement`

#### Inherited from

[RenderScope](RenderScope.md).[hoverColumn](RenderScope.md#hovercolumn)

#### Defined in

[lib/table/ele-scope.ts:38](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/ele-scope.ts#L38)

___

### hoverRow

• `Protected` **hoverRow**: `HTMLDivElement`

#### Inherited from

[RenderScope](RenderScope.md).[hoverRow](RenderScope.md#hoverrow)

#### Defined in

[lib/table/ele-scope.ts:37](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/ele-scope.ts#L37)

___

### inputHandler

• **inputHandler**: [`InputHandler`](InputHandler.md)

#### Defined in

[lib/table/table-scope.ts:45](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/table-scope.ts#L45)

___

### keyEvent

• `Protected` `Optional` **keyEvent**: [`GeKeyEvent`](GeKeyEvent.md)

#### Defined in

[lib/table/table-scope.ts:52](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/table-scope.ts#L52)

___

### licenseManager

• **licenseManager**: [`LicenseManager`](LicenseManager.md)

#### Defined in

[lib/table/table-scope.ts:43](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/table-scope.ts#L43)

___

### mouseEvent

• `Protected` `Optional` **mouseEvent**: [`GeMouseEvent`](GeMouseEvent.md)

#### Inherited from

[RenderScope](RenderScope.md).[mouseEvent](RenderScope.md#mouseevent)

#### Defined in

[lib/table/render-scope.ts:80](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/render-scope.ts#L80)

___

### mouseHandler

• **mouseHandler**: [`MouseHandler`](MouseHandler.md)

#### Defined in

[lib/table/table-scope.ts:44](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/table-scope.ts#L44)

___

### mouseStartAction

• `Private` **mouseStartAction**: `string` = `""`

#### Defined in

[lib/table/table-scope.ts:55](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/table-scope.ts#L55)

___

### mouseStartColumnIndex

• `Private` **mouseStartColumnIndex**: `number` = `-1`

#### Defined in

[lib/table/table-scope.ts:57](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/table-scope.ts#L57)

___

### mouseStartWidth

• `Private` **mouseStartWidth**: `number` = `-1`

#### Defined in

[lib/table/table-scope.ts:56](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/table-scope.ts#L56)

___

### scrollFactorX

• `Protected` **scrollFactorX**: `number` = `0`

#### Inherited from

[RenderScope](RenderScope.md).[scrollFactorX](RenderScope.md#scrollfactorx)

#### Defined in

[lib/table/render-scope.ts:63](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/render-scope.ts#L63)

___

### scrollFactorY

• `Protected` **scrollFactorY**: `number` = `0`

#### Inherited from

[RenderScope](RenderScope.md).[scrollFactorY](RenderScope.md#scrollfactory)

#### Defined in

[lib/table/render-scope.ts:62](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/render-scope.ts#L62)

___

### scrollLeft

• `Protected` **scrollLeft**: `number` = `0`

#### Inherited from

[RenderScope](RenderScope.md).[scrollLeft](RenderScope.md#scrollleft)

#### Defined in

[lib/table/render-scope.ts:60](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/render-scope.ts#L60)

___

### scrollTop

• `Protected` **scrollTop**: `number` = `0`

#### Inherited from

[RenderScope](RenderScope.md).[scrollTop](RenderScope.md#scrolltop)

#### Defined in

[lib/table/ele-scope.ts:40](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/ele-scope.ts#L40)

___

### scrollViewport

• **scrollViewport**: `HTMLDivElement`

#### Inherited from

[RenderScope](RenderScope.md).[scrollViewport](RenderScope.md#scrollviewport)

#### Defined in

[lib/table/ele-scope.ts:14](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/ele-scope.ts#L14)

___

### scrollViewportLeft

• `Protected` **scrollViewportLeft**: `number` = `0`

#### Inherited from

[RenderScope](RenderScope.md).[scrollViewportLeft](RenderScope.md#scrollviewportleft)

#### Defined in

[lib/table/render-scope.ts:61](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/render-scope.ts#L61)

___

### selectionService

• `Protected` **selectionService**: [`SelectionService`](SelectionService.md)

#### Defined in

[lib/table/table-scope.ts:51](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/table-scope.ts#L51)

___

### shortcutService

• **shortcutService**: [`ShortcutService`](ShortcutService.md)

#### Defined in

[lib/table/table-scope.ts:46](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/table-scope.ts#L46)

___

### storeScrollPosStateService

• `Protected` `Optional` **storeScrollPosStateService**: [`StoreStateScrollPosService`](StoreStateScrollPosService.md)

#### Inherited from

[RenderScope](RenderScope.md).[storeScrollPosStateService](RenderScope.md#storescrollposstateservice)

#### Defined in

[lib/table/render-scope.ts:57](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/render-scope.ts#L57)

___

### storeSortingService

• `Optional` **storeSortingService**: [`StoreStateSortingService`](StoreStateSortingService.md)

#### Defined in

[lib/table/table-scope.ts:49](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/table-scope.ts#L49)

___

### storeStateCollapsedExpandService

• `Optional` **storeStateCollapsedExpandService**: [`StoreStateCollapsedExpandService`](StoreStateCollapsedExpandService.md)

#### Defined in

[lib/table/table-scope.ts:48](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/table-scope.ts#L48)

___

### tableModel

• `Readonly` **tableModel**: [`TableModelIf`](../interfaces/TableModelIf.md)

#### Inherited from

[RenderScope](RenderScope.md).[tableModel](RenderScope.md#tablemodel)

#### Defined in

[lib/table/ele-scope.ts:49](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/ele-scope.ts#L49)

___

### tableOptions

• `Readonly` **tableOptions**: [`TableOptionsIf`](../interfaces/TableOptionsIf.md)

#### Inherited from

[RenderScope](RenderScope.md).[tableOptions](RenderScope.md#tableoptions)

#### Defined in

[lib/table/ele-scope.ts:51](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/ele-scope.ts#L51)

___

### tree

• `Protected` **tree**: `boolean` = `false`

#### Inherited from

[RenderScope](RenderScope.md).[tree](RenderScope.md#tree)

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

#### Inherited from

[RenderScope](RenderScope.md).[addAndRenderCellDiv](RenderScope.md#addandrendercelldiv)

#### Defined in

[lib/table/render-scope.ts:672](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/render-scope.ts#L672)

___

### adjustAfterScrolling

▸ **adjustAfterScrolling**(): `void`

#### Returns

`void`

#### Inherited from

[RenderScope](RenderScope.md).[adjustAfterScrolling](RenderScope.md#adjustafterscrolling)

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

#### Inherited from

[RenderScope](RenderScope.md).[adjustArea](RenderScope.md#adjustarea)

#### Defined in

[lib/table/render-scope.ts:299](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/render-scope.ts#L299)

___

### adjustBody

▸ **adjustBody**(): `void`

#### Returns

`void`

#### Inherited from

[RenderScope](RenderScope.md).[adjustBody](RenderScope.md#adjustbody)

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

#### Inherited from

[RenderScope](RenderScope.md).[adjustColumnsToRowParent](RenderScope.md#adjustcolumnstorowparent)

#### Defined in

[lib/table/render-scope.ts:554](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/render-scope.ts#L554)

___

### adjustContainersAndRows

▸ **adjustContainersAndRows**(): `void`

#### Returns

`void`

#### Inherited from

[RenderScope](RenderScope.md).[adjustContainersAndRows](RenderScope.md#adjustcontainersandrows)

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

#### Inherited from

[RenderScope](RenderScope.md).[adjustHoverColumns](RenderScope.md#adjusthovercolumns)

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

#### Inherited from

[RenderScope](RenderScope.md).[adjustHoverRows](RenderScope.md#adjusthoverrows)

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

#### Inherited from

[RenderScope](RenderScope.md).[applyCssClasses](RenderScope.md#applycssclasses)

#### Defined in

[lib/table/render-scope.ts:768](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/render-scope.ts#L768)

___

### autoRestoreCollapsedExpandedState

▸ **autoRestoreCollapsedExpandedState**(): `void`

Restores the collapsed/expanded state of the rows in the table based on the autoRestoreOptions
specified in the tableOptions. This method is private and should not be called directly.

#### Returns

`void`

#### Defined in

[lib/table/table-scope.ts:566](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/table-scope.ts#L566)

___

### autoRestoreScrollPosition

▸ **autoRestoreScrollPosition**(): `void`

Restores the scroll position of the table if auto restore options are enabled.

#### Returns

`void`

**`Memberof`**

ClassName

#### Defined in

[lib/table/table-scope.ts:524](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/table-scope.ts#L524)

___

### autoRestoreSortingState

▸ **autoRestoreSortingState**(): `void`

Automatically restores the sorting state of the table.

#### Returns

`void`

**`Function`**

autoRestoreSortingState

**`Memberof`**

ClassName

**`Description`**

This method checks if the autoRestoreSortingState option is enabled in the tableOptions.
If enabled, it uses the storeSortingService to retrieve the sort items array.
If there are sort items present, it applies them to the table's body model using the doSort method.

#### Defined in

[lib/table/table-scope.ts:550](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/table-scope.ts#L550)

___

### changeFocusCell

▸ **changeFocusCell**(`dx`, `dy`): `boolean`

Changes the focus cell using the specified deltas.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dx` | `number` | The delta for the column index. |
| `dy` | `number` | The delta for the row index. |

#### Returns

`boolean`

- True if the focus cell was changed, false otherwise.

#### Defined in

[lib/table/table-scope.ts:460](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/table-scope.ts#L460)

___

### checkForScrollPosSaving

▸ **checkForScrollPosSaving**(): `void`

#### Returns

`void`

#### Inherited from

[RenderScope](RenderScope.md).[checkForScrollPosSaving](RenderScope.md#checkforscrollpossaving)

#### Defined in

[lib/table/render-scope.ts:220](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/render-scope.ts#L220)

___

### clearSelection

▸ **clearSelection**(): `void`

#### Returns

`void`

#### Inherited from

[RenderScope](RenderScope.md).[clearSelection](RenderScope.md#clearselection)

#### Defined in

[lib/table/render-scope.ts:129](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/render-scope.ts#L129)

___

### clearSelectionModel

▸ **clearSelectionModel**(): `void`

Clears the selection model, if available.

#### Returns

`void`

#### Defined in

[lib/table/table-scope.ts:490](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/table-scope.ts#L490)

___

### contextmenu

▸ **contextmenu**(`mouseMoveEvent`): `void`

Triggers the context menu event based on the mouse move event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mouseMoveEvent` | [`GeMouseEvent`](GeMouseEvent.md) | The mouse move event object. |

#### Returns

`void`

#### Defined in

[lib/table/table-scope.ts:338](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/table-scope.ts#L338)

___

### createGeMouseEvent

▸ **createGeMouseEvent**(`mouseEvent`): [`GeMouseEvent`](GeMouseEvent.md)

Creates a GeMouseEvent object based on a MouseEvent.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mouseEvent` | `MouseEvent` | The MouseEvent object to create the GeMouseEvent from. |

#### Returns

[`GeMouseEvent`](GeMouseEvent.md)

- The created GeMouseEvent object.

#### Defined in

[lib/table/table-scope.ts:213](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/table-scope.ts#L213)

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

#### Inherited from

[RenderScope](RenderScope.md).[debounce](RenderScope.md#debounce)

#### Defined in

[lib/table/render-scope.ts:881](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/render-scope.ts#L881)

___

### debugOnce

▸ **debugOnce**(`bodyX`, `bodyY`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bodyX` | `number` |
| `bodyY` | `number` |

#### Returns

`void`

#### Defined in

[lib/table/table-scope.ts:496](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/table-scope.ts#L496)

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

#### Inherited from

[RenderScope](RenderScope.md).[drawBigCell](RenderScope.md#drawbigcell)

#### Defined in

[lib/table/render-scope.ts:459](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/render-scope.ts#L459)

___

### externalFilterChanged

▸ **externalFilterChanged**(`clearSelection?`): `void`

Updates the table (repaint) when an external filter is changed.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `clearSelection` | `boolean` | `true` | Indicates whether to clear the selection model or not. Default value is true. |

#### Returns

`void`

#### Defined in

[lib/table/table-scope.ts:409](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/table-scope.ts#L409)

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

#### Inherited from

[RenderScope](RenderScope.md).[findRowOfImportantRowspanCell](RenderScope.md#findrowofimportantrowspancell)

#### Defined in

[lib/table/render-scope.ts:539](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/render-scope.ts#L539)

___

### firstInit

▸ **firstInit**(): [`TableScope`](TableScope.md)

Initializes the table. Called by the table component.

#### Returns

[`TableScope`](TableScope.md)

This instance of the table scope.

**`Function`**

firstInit

**`Memberof`**

TableScope

#### Defined in

[lib/table/table-scope.ts:194](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/table-scope.ts#L194)

___

### getApi

▸ **getApi**(): [`TableApi`](TableApi.md)

Retrieves the TableApi object.

#### Returns

[`TableApi`](TableApi.md)

The TableApi object.

#### Defined in

[lib/table/table-scope.ts:181](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/table-scope.ts#L181)

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

#### Inherited from

[RenderScope](RenderScope.md).[getArea](RenderScope.md#getarea)

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

#### Inherited from

[RenderScope](RenderScope.md).[getAreaAndSideIdentByAttr](RenderScope.md#getareaandsideidentbyattr)

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

#### Inherited from

[RenderScope](RenderScope.md).[getColumnWidths](RenderScope.md#getcolumnwidths)

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

#### Inherited from

[RenderScope](RenderScope.md).[getNumberByAttr](RenderScope.md#getnumberbyattr)

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

#### Inherited from

[RenderScope](RenderScope.md).[getRowHeights](RenderScope.md#getrowheights)

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

#### Inherited from

[RenderScope](RenderScope.md).[getStringByAttr](RenderScope.md#getstringbyattr)

#### Defined in

[lib/table/render-scope.ts:291](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/render-scope.ts#L291)

___

### getTreeArrowColumnIndex

▸ **getTreeArrowColumnIndex**(): ``0`` \| ``1``

#### Returns

``0`` \| ``1``

#### Inherited from

[RenderScope](RenderScope.md).[getTreeArrowColumnIndex](RenderScope.md#gettreearrowcolumnindex)

#### Defined in

[lib/table/render-scope.ts:662](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/render-scope.ts#L662)

___

### hideHoverColumn

▸ **hideHoverColumn**(): `void`

#### Returns

`void`

#### Inherited from

[RenderScope](RenderScope.md).[hideHoverColumn](RenderScope.md#hidehovercolumn)

#### Defined in

[lib/table/render-scope.ts:875](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/render-scope.ts#L875)

___

### hideHoverRow

▸ **hideHoverRow**(): `void`

#### Returns

`void`

#### Inherited from

[RenderScope](RenderScope.md).[hideHoverRow](RenderScope.md#hidehoverrow)

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

#### Inherited from

[RenderScope](RenderScope.md).[initRenderEditor](RenderScope.md#initrendereditor)

#### Defined in

[lib/table/render-scope.ts:136](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/render-scope.ts#L136)

___

### isEditing

▸ **isEditing**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[RenderScope](RenderScope.md).[isEditing](RenderScope.md#isediting)

#### Defined in

[lib/table/render-scope.ts:118](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/render-scope.ts#L118)

___

### mouseDraggingEndOnFrame

▸ **mouseDraggingEndOnFrame**(`mouseEvent`): `void`

Handles the end of mouse dragging event on a frame.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mouseEvent` | [`GeMouseEvent`](GeMouseEvent.md) | The mouse event object. |

#### Returns

`void`

#### Defined in

[lib/table/table-scope.ts:303](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/table-scope.ts#L303)

___

### mouseDraggingOnFrame

▸ **mouseDraggingOnFrame**(`mouseEvent`): `void`

Handles mouse dragging on the frame.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mouseEvent` | [`GeMouseEvent`](GeMouseEvent.md) | The mouse event object. |

#### Returns

`void`

#### Defined in

[lib/table/table-scope.ts:268](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/table-scope.ts#L268)

___

### mouseMove

▸ **mouseMove**(`mouseMoveEvent`): `void`

Handles the mouse move event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mouseMoveEvent` | [`GeMouseEvent`](GeMouseEvent.md) | The mouse move event object. |

#### Returns

`void`

#### Defined in

[lib/table/table-scope.ts:326](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/table-scope.ts#L326)

___

### onActionTriggered

▸ **onActionTriggered**(`actionId`): `boolean`

Triggers an action based on the provided action ID.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `actionId` | ``"START_EDITING"`` \| ``"TOGGLE_SELECTION"`` \| ``"SELECT_ALL"`` \| ``"DESELECT_ALL"`` \| ``"NAVIGATE_LEFT"`` \| ``"NAVIGATE_RIGHT"`` \| ``"NAVIGATE_UP"`` \| ``"NAVIGATE_DOWN"`` | The ID of the action to be triggered. |

#### Returns

`boolean`

- Returns true if the action was successfully triggered; otherwise, false.

#### Implementation of

[OnActionTriggeredIf](../interfaces/OnActionTriggeredIf.md).[onActionTriggered](../interfaces/OnActionTriggeredIf.md#onactiontriggered)

#### Defined in

[lib/table/table-scope.ts:126](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/table-scope.ts#L126)

___

### onHeaderDblClicked

▸ **onHeaderDblClicked**(`event`, `_rowIdx`, `colIdx`): `void`

Handle the double click event on the table header.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `MouseEvent` | The mouse event that triggered the double click. |
| `_rowIdx` | `number` | The row index of the header. |
| `colIdx` | `number` | The column index of the header. |

#### Returns

`void`

#### Defined in

[lib/table/table-scope.ts:432](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/table-scope.ts#L432)

___

### onMouseClicked

▸ **onMouseClicked**(`evt`, `previousEvt`): `void`

Handle mouse click events.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `evt` | [`GeMouseEvent`](GeMouseEvent.md) | The mouse click event. |
| `previousEvt` | `undefined` \| [`GeMouseEvent`](GeMouseEvent.md) | The previous mouse click event, if any. |

#### Returns

`void`

#### Defined in

[lib/table/table-scope.ts:385](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/table-scope.ts#L385)

___

### onMouseDown

▸ **onMouseDown**(`mouseEvent`): `void`

Handles the mouse down event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mouseEvent` | [`GeMouseEvent`](GeMouseEvent.md) | The mouse event object. |

#### Returns

`void`

#### Defined in

[lib/table/table-scope.ts:248](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/table-scope.ts#L248)

___

### repaint

▸ **repaint**(): `void`

#### Returns

`void`

#### Inherited from

[RenderScope](RenderScope.md).[repaint](RenderScope.md#repaint)

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

#### Inherited from

[RenderScope](RenderScope.md).[rerenderCellContent](RenderScope.md#rerendercellcontent)

#### Defined in

[lib/table/render-scope.ts:782](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/render-scope.ts#L782)

___

### resetEditorRenderer

▸ **resetEditorRenderer**(): `void`

#### Returns

`void`

#### Inherited from

[RenderScope](RenderScope.md).[resetEditorRenderer](RenderScope.md#reseteditorrenderer)

#### Defined in

[lib/table/render-scope.ts:122](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/render-scope.ts#L122)

___

### resetSizeOfWrapperDiv

▸ **resetSizeOfWrapperDiv**(): `void`

#### Returns

`void`

#### Inherited from

[RenderScope](RenderScope.md).[resetSizeOfWrapperDiv](RenderScope.md#resetsizeofwrapperdiv)

#### Defined in

[lib/table/ele-scope.ts:280](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/ele-scope.ts#L280)

___

### resizeColumn

▸ **resizeColumn**(`mouseEvent`): `void`

Resizes the column based on the mouse event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mouseEvent` | [`GeMouseEvent`](GeMouseEvent.md) | The mouse event that triggered the resize. |

#### Returns

`void`

#### Defined in

[lib/table/table-scope.ts:478](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/table-scope.ts#L478)

___

### scrollToIndex

▸ **scrollToIndex**(`_indexX`, `indexY`): `void`

Scrolls to the specified index in the table.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_indexX` | `number` | The horizontal index of the table where scrolling is needed. |
| `indexY` | `number` | The vertical index of the table where scrolling is needed. |

#### Returns

`void`

#### Defined in

[lib/table/table-scope.ts:623](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/table-scope.ts#L623)

___

### scrollToPixel

▸ **scrollToPixel**(`px`, `py`): `void`

Scrolls the viewport to the specified pixel coordinates.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `px` | `number` | The horizontal pixel coordinate to scroll to. |
| `py` | `number` | The vertical pixel coordinate to scroll to. |

#### Returns

`void`

#### Defined in

[lib/table/table-scope.ts:612](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/table-scope.ts#L612)

___

### toggleExpandCollapseAll

▸ **toggleExpandCollapseAll**(`expand?`): `void`

Toggles the expand or collapse state of all items in the body area model.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `expand?` | `boolean` | `true` | Whether to expand or collapse all items. Default is true. |

#### Returns

`void`

#### Defined in

[lib/table/table-scope.ts:349](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/table-scope.ts#L349)

___

### toggleRowCheckbox

▸ **toggleRowCheckbox**(`rowIdx`, `_colIdx`, `areaIdent`): `void`

Toggles the checkbox state of a specific row in a table.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rowIdx` | `number` | The index of the row to toggle the checkbox state. |
| `_colIdx` | `number` | The index of the column. This parameter is unused. |
| `areaIdent` | [`AreaIdent`](../modules.md#areaident) | The identifier of the table area. |

#### Returns

`void`

- This method does not return anything.

#### Defined in

[lib/table/table-scope.ts:368](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/table-scope.ts#L368)

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

#### Inherited from

[RenderScope](RenderScope.md).[updateCells](RenderScope.md#updatecells)

#### Defined in

[lib/table/render-scope.ts:227](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/render-scope.ts#L227)

___

### updateModelValueAfterEdit

▸ **updateModelValueAfterEdit**(`areaIdent`, `rowIndex`, `columnIndex`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `areaIdent` | [`AreaIdent`](../modules.md#areaident) |
| `rowIndex` | `number` |
| `columnIndex` | `number` |
| `value` | `string` |

#### Returns

`void`

#### Defined in

[lib/table/table-scope.ts:163](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/table-scope.ts#L163)

___

### create

▸ **create**(`hostElement`, `tableModel`, `tableOptions?`, `eventListener?`, `domService?`): [`TableScope`](TableScope.md)

Creates a TableScope instance.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `hostElement` | `HTMLDivElement` | The HTML div element that will contain the table. |
| `tableModel` | [`TableModelIf`](../interfaces/TableModelIf.md) | The table model object. |
| `tableOptions?` | [`TableOptionsIf`](../interfaces/TableOptionsIf.md) | The optional table options object. |
| `eventListener?` | [`EventListenerIf`](../interfaces/EventListenerIf.md) | The optional event listener object. |
| `domService?` | [`DomServiceIf`](../interfaces/DomServiceIf.md) | The optional DOM service object. |

#### Returns

[`TableScope`](TableScope.md)

- The newly created TableScope instance.

#### Defined in

[lib/table/table-scope.ts:72](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/table-scope.ts#L72)
