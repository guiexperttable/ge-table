[@guiexpert/table](../README.md) / [Exports](../modules.md) / TableScope

# Class: TableScope

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
- [resetEditorRenderer](TableScope.md#reseteditorrenderer)
- [resetSizeOfWrapperDiv](TableScope.md#resetsizeofwrapperdiv)
- [resizeColumn](TableScope.md#resizecolumn)
- [toggleExpandCollapseAll](TableScope.md#toggleexpandcollapseall)
- [toggleRowCheckbox](TableScope.md#togglerowcheckbox)
- [updateCells](TableScope.md#updatecells)
- [updateModelValueAfterEdit](TableScope.md#updatemodelvalueafteredit)

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

[lib/table/table-scope.ts:48](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/table-scope.ts#L48)

## Properties

### api

• `Private` **api**: [`TableApi`](TableApi.md)

#### Defined in

[lib/table/table-scope.ts:40](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/table-scope.ts#L40)

___

### areaBodyCenter

• `Protected` **areaBodyCenter**: [`DivScope`](../modules.md#divscope)

#### Inherited from

[RenderScope](RenderScope.md).[areaBodyCenter](RenderScope.md#areabodycenter)

#### Defined in

[lib/table/ele-scope.ts:19](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/ele-scope.ts#L19)

___

### areaBodyCenterGeo

• `Protected` **areaBodyCenterGeo**: [`GeoData`](GeoData.md)

#### Inherited from

[RenderScope](RenderScope.md).[areaBodyCenterGeo](RenderScope.md#areabodycentergeo)

#### Defined in

[lib/table/ele-scope.ts:39](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/ele-scope.ts#L39)

___

### areaBodyEast

• `Protected` **areaBodyEast**: [`DivScope`](../modules.md#divscope)

#### Inherited from

[RenderScope](RenderScope.md).[areaBodyEast](RenderScope.md#areabodyeast)

#### Defined in

[lib/table/ele-scope.ts:21](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/ele-scope.ts#L21)

___

### areaBodyEastGeo

• `Protected` **areaBodyEastGeo**: [`GeoData`](GeoData.md)

#### Inherited from

[RenderScope](RenderScope.md).[areaBodyEastGeo](RenderScope.md#areabodyeastgeo)

#### Defined in

[lib/table/ele-scope.ts:40](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/ele-scope.ts#L40)

___

### areaBodyWest

• `Protected` **areaBodyWest**: [`DivScope`](../modules.md#divscope)

#### Inherited from

[RenderScope](RenderScope.md).[areaBodyWest](RenderScope.md#areabodywest)

#### Defined in

[lib/table/ele-scope.ts:20](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/ele-scope.ts#L20)

___

### areaBodyWestGeo

• `Protected` **areaBodyWestGeo**: [`GeoData`](GeoData.md)

#### Inherited from

[RenderScope](RenderScope.md).[areaBodyWestGeo](RenderScope.md#areabodywestgeo)

#### Defined in

[lib/table/ele-scope.ts:38](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/ele-scope.ts#L38)

___

### areaFooterCenter

• `Protected` **areaFooterCenter**: [`DivScope`](../modules.md#divscope)

#### Inherited from

[RenderScope](RenderScope.md).[areaFooterCenter](RenderScope.md#areafootercenter)

#### Defined in

[lib/table/ele-scope.ts:24](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/ele-scope.ts#L24)

___

### areaFooterEast

• `Protected` **areaFooterEast**: [`DivScope`](../modules.md#divscope)

#### Inherited from

[RenderScope](RenderScope.md).[areaFooterEast](RenderScope.md#areafootereast)

#### Defined in

[lib/table/ele-scope.ts:26](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/ele-scope.ts#L26)

___

### areaFooterWest

• `Protected` **areaFooterWest**: [`DivScope`](../modules.md#divscope)

#### Inherited from

[RenderScope](RenderScope.md).[areaFooterWest](RenderScope.md#areafooterwest)

#### Defined in

[lib/table/ele-scope.ts:25](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/ele-scope.ts#L25)

___

### areaHeaderCenter

• `Protected` **areaHeaderCenter**: [`DivScope`](../modules.md#divscope)

#### Inherited from

[RenderScope](RenderScope.md).[areaHeaderCenter](RenderScope.md#areaheadercenter)

#### Defined in

[lib/table/ele-scope.ts:15](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/ele-scope.ts#L15)

___

### areaHeaderEast

• `Protected` **areaHeaderEast**: [`DivScope`](../modules.md#divscope)

#### Inherited from

[RenderScope](RenderScope.md).[areaHeaderEast](RenderScope.md#areaheadereast)

#### Defined in

[lib/table/ele-scope.ts:17](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/ele-scope.ts#L17)

___

### areaHeaderWest

• `Protected` **areaHeaderWest**: [`DivScope`](../modules.md#divscope)

#### Inherited from

[RenderScope](RenderScope.md).[areaHeaderWest](RenderScope.md#areaheaderwest)

#### Defined in

[lib/table/ele-scope.ts:16](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/ele-scope.ts#L16)

___

### borderFixedEast

• `Protected` **borderFixedEast**: `HTMLDivElement`

#### Inherited from

[RenderScope](RenderScope.md).[borderFixedEast](RenderScope.md#borderfixedeast)

#### Defined in

[lib/table/ele-scope.ts:31](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/ele-scope.ts#L31)

___

### borderFixedWest

• `Protected` **borderFixedWest**: `HTMLDivElement`

#### Inherited from

[RenderScope](RenderScope.md).[borderFixedWest](RenderScope.md#borderfixedwest)

#### Defined in

[lib/table/ele-scope.ts:30](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/ele-scope.ts#L30)

___

### borderFooterTop

• `Protected` **borderFooterTop**: `HTMLDivElement`

#### Inherited from

[RenderScope](RenderScope.md).[borderFooterTop](RenderScope.md#borderfootertop)

#### Defined in

[lib/table/ele-scope.ts:29](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/ele-scope.ts#L29)

___

### borderHeaderBottom

• `Protected` **borderHeaderBottom**: `HTMLDivElement`

#### Inherited from

[RenderScope](RenderScope.md).[borderHeaderBottom](RenderScope.md#borderheaderbottom)

#### Defined in

[lib/table/ele-scope.ts:28](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/ele-scope.ts#L28)

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

[lib/table/render-scope.ts:65](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/render-scope.ts#L65)

___

### colAndRowspanModels

• `Protected` **colAndRowspanModels**: [`AreaObjectMapType`](../modules.md#areaobjectmaptype)\<[`ColAndRowspanModel`](ColAndRowspanModel.md)\>

#### Inherited from

[RenderScope](RenderScope.md).[colAndRowspanModels](RenderScope.md#colandrowspanmodels)

#### Defined in

[lib/table/render-scope.ts:76](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/render-scope.ts#L76)

___

### contentDiv

• `Protected` **contentDiv**: `HTMLDivElement`

#### Inherited from

[RenderScope](RenderScope.md).[contentDiv](RenderScope.md#contentdiv)

#### Defined in

[lib/table/ele-scope.ts:13](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/ele-scope.ts#L13)

___

### contentWrapperDiv

• `Protected` **contentWrapperDiv**: `HTMLDivElement`

#### Inherited from

[RenderScope](RenderScope.md).[contentWrapperDiv](RenderScope.md#contentwrapperdiv)

#### Defined in

[lib/table/ele-scope.ts:12](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/ele-scope.ts#L12)

___

### dom

• `Protected` `Readonly` **dom**: [`ConvenienceDomService`](ConvenienceDomService.md)

#### Inherited from

[RenderScope](RenderScope.md).[dom](RenderScope.md#dom)

#### Defined in

[lib/table/ele-scope.ts:46](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/ele-scope.ts#L46)

___

### dragFrom

• `Private` **dragFrom**: `number` = `-1`

#### Defined in

[lib/table/table-scope.ts:45](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/table-scope.ts#L45)

___

### dragTo

• `Private` **dragTo**: `number` = `-1`

#### Defined in

[lib/table/table-scope.ts:46](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/table-scope.ts#L46)

___

### draggingTargetColumnIndex

• `Protected` **draggingTargetColumnIndex**: `number` = `-1`

#### Inherited from

[RenderScope](RenderScope.md).[draggingTargetColumnIndex](RenderScope.md#draggingtargetcolumnindex)

#### Defined in

[lib/table/render-scope.ts:79](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/render-scope.ts#L79)

___

### editing

• `Protected` **editing**: `boolean` = `false`

#### Inherited from

[RenderScope](RenderScope.md).[editing](RenderScope.md#editing)

#### Defined in

[lib/table/render-scope.ts:117](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/render-scope.ts#L117)

___

### eventListener

• `Protected` `Readonly` **eventListener**: [`EventListenerIf`](../interfaces/EventListenerIf.md)

#### Defined in

[lib/table/table-scope.ts:53](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/table-scope.ts#L53)

___

### firstVisibleRowIndex

• `Protected` **firstVisibleRowIndex**: `number` = `-1`

#### Inherited from

[RenderScope](RenderScope.md).[firstVisibleRowIndex](RenderScope.md#firstvisiblerowindex)

#### Defined in

[lib/table/render-scope.ts:77](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/render-scope.ts#L77)

___

### getFocusModel

• `Protected` `Optional` **getFocusModel**: [`GetT`](../modules.md#gett)\<[`FocusModelIf`](../interfaces/FocusModelIf.md)\>

#### Inherited from

[RenderScope](RenderScope.md).[getFocusModel](RenderScope.md#getfocusmodel)

#### Defined in

[lib/table/render-scope.ts:59](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/render-scope.ts#L59)

___

### getSelectionModel

• `Protected` `Optional` **getSelectionModel**: [`GetT`](../modules.md#gett)\<[`SelectionModelIf`](../interfaces/SelectionModelIf.md)\>

#### Inherited from

[RenderScope](RenderScope.md).[getSelectionModel](RenderScope.md#getselectionmodel)

#### Defined in

[lib/table/render-scope.ts:58](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/render-scope.ts#L58)

___

### hostElement

• `Readonly` **hostElement**: `HTMLDivElement`

#### Inherited from

[RenderScope](RenderScope.md).[hostElement](RenderScope.md#hostelement)

#### Defined in

[lib/table/ele-scope.ts:44](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/ele-scope.ts#L44)

___

### hoverColumn

• `Protected` **hoverColumn**: `HTMLDivElement`

#### Inherited from

[RenderScope](RenderScope.md).[hoverColumn](RenderScope.md#hovercolumn)

#### Defined in

[lib/table/ele-scope.ts:34](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/ele-scope.ts#L34)

___

### hoverRow

• `Protected` **hoverRow**: `HTMLDivElement`

#### Inherited from

[RenderScope](RenderScope.md).[hoverRow](RenderScope.md#hoverrow)

#### Defined in

[lib/table/ele-scope.ts:33](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/ele-scope.ts#L33)

___

### inputHandler

• **inputHandler**: [`InputHandler`](InputHandler.md)

#### Defined in

[lib/table/table-scope.ts:32](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/table-scope.ts#L32)

___

### keyEvent

• `Protected` `Optional` **keyEvent**: [`GeKeyEvent`](GeKeyEvent.md)

#### Defined in

[lib/table/table-scope.ts:39](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/table-scope.ts#L39)

___

### mouseEvent

• `Protected` `Optional` **mouseEvent**: [`GeMouseEvent`](GeMouseEvent.md)

#### Inherited from

[RenderScope](RenderScope.md).[mouseEvent](RenderScope.md#mouseevent)

#### Defined in

[lib/table/render-scope.ts:80](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/render-scope.ts#L80)

___

### mouseHandler

• **mouseHandler**: [`MouseHandler`](MouseHandler.md)

#### Defined in

[lib/table/table-scope.ts:31](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/table-scope.ts#L31)

___

### mouseStartAction

• `Private` **mouseStartAction**: `string` = `""`

#### Defined in

[lib/table/table-scope.ts:42](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/table-scope.ts#L42)

___

### mouseStartColumnIndex

• `Private` **mouseStartColumnIndex**: `number` = `-1`

#### Defined in

[lib/table/table-scope.ts:44](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/table-scope.ts#L44)

___

### mouseStartWidth

• `Private` **mouseStartWidth**: `number` = `-1`

#### Defined in

[lib/table/table-scope.ts:43](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/table-scope.ts#L43)

___

### scrollFactorX

• `Protected` **scrollFactorX**: `number` = `0`

#### Inherited from

[RenderScope](RenderScope.md).[scrollFactorX](RenderScope.md#scrollfactorx)

#### Defined in

[lib/table/render-scope.ts:63](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/render-scope.ts#L63)

___

### scrollFactorY

• `Protected` **scrollFactorY**: `number` = `0`

#### Inherited from

[RenderScope](RenderScope.md).[scrollFactorY](RenderScope.md#scrollfactory)

#### Defined in

[lib/table/render-scope.ts:62](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/render-scope.ts#L62)

___

### scrollLeft

• `Protected` **scrollLeft**: `number` = `0`

#### Inherited from

[RenderScope](RenderScope.md).[scrollLeft](RenderScope.md#scrollleft)

#### Defined in

[lib/table/render-scope.ts:60](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/render-scope.ts#L60)

___

### scrollTop

• `Protected` **scrollTop**: `number` = `0`

#### Inherited from

[RenderScope](RenderScope.md).[scrollTop](RenderScope.md#scrolltop)

#### Defined in

[lib/table/ele-scope.ts:36](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/ele-scope.ts#L36)

___

### scrollViewport

• **scrollViewport**: `HTMLDivElement`

#### Inherited from

[RenderScope](RenderScope.md).[scrollViewport](RenderScope.md#scrollviewport)

#### Defined in

[lib/table/ele-scope.ts:10](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/ele-scope.ts#L10)

___

### scrollViewportLeft

• `Protected` **scrollViewportLeft**: `number` = `0`

#### Inherited from

[RenderScope](RenderScope.md).[scrollViewportLeft](RenderScope.md#scrollviewportleft)

#### Defined in

[lib/table/render-scope.ts:61](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/render-scope.ts#L61)

___

### selectionService

• `Protected` **selectionService**: [`SelectionService`](SelectionService.md)

#### Defined in

[lib/table/table-scope.ts:38](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/table-scope.ts#L38)

___

### shortcutService

• **shortcutService**: [`ShortcutService`](ShortcutService.md)

#### Defined in

[lib/table/table-scope.ts:33](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/table-scope.ts#L33)

___

### storeScrollPosStateService

• `Protected` `Optional` **storeScrollPosStateService**: [`StoreStateScrollPosService`](StoreStateScrollPosService.md)

#### Inherited from

[RenderScope](RenderScope.md).[storeScrollPosStateService](RenderScope.md#storescrollposstateservice)

#### Defined in

[lib/table/render-scope.ts:57](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/render-scope.ts#L57)

___

### storeSortingService

• `Optional` **storeSortingService**: [`StoreStateSortingService`](StoreStateSortingService.md)

#### Defined in

[lib/table/table-scope.ts:36](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/table-scope.ts#L36)

___

### storeStateCollapsedExpandService

• `Optional` **storeStateCollapsedExpandService**: [`StoreStateCollapsedExpandService`](StoreStateCollapsedExpandService.md)

#### Defined in

[lib/table/table-scope.ts:35](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/table-scope.ts#L35)

___

### tableModel

• `Readonly` **tableModel**: [`TableModelIf`](../interfaces/TableModelIf.md)

#### Inherited from

[RenderScope](RenderScope.md).[tableModel](RenderScope.md#tablemodel)

#### Defined in

[lib/table/ele-scope.ts:45](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/ele-scope.ts#L45)

___

### tableOptions

• `Readonly` **tableOptions**: [`TableOptionsIf`](../interfaces/TableOptionsIf.md)

#### Inherited from

[RenderScope](RenderScope.md).[tableOptions](RenderScope.md#tableoptions)

#### Defined in

[lib/table/ele-scope.ts:47](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/ele-scope.ts#L47)

___

### tree

• `Protected` **tree**: `boolean` = `false`

#### Inherited from

[RenderScope](RenderScope.md).[tree](RenderScope.md#tree)

#### Defined in

[lib/table/render-scope.ts:74](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/render-scope.ts#L74)

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

[lib/table/render-scope.ts:661](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/render-scope.ts#L661)

___

### adjustAfterScrolling

▸ **adjustAfterScrolling**(): `void`

#### Returns

`void`

#### Inherited from

[RenderScope](RenderScope.md).[adjustAfterScrolling](RenderScope.md#adjustafterscrolling)

#### Defined in

[lib/table/render-scope.ts:166](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/render-scope.ts#L166)

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

[lib/table/render-scope.ts:289](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/render-scope.ts#L289)

___

### adjustBody

▸ **adjustBody**(): `void`

#### Returns

`void`

#### Inherited from

[RenderScope](RenderScope.md).[adjustBody](RenderScope.md#adjustbody)

#### Defined in

[lib/table/render-scope.ts:263](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/render-scope.ts#L263)

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

[lib/table/render-scope.ts:543](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/render-scope.ts#L543)

___

### adjustContainersAndRows

▸ **adjustContainersAndRows**(): `void`

#### Returns

`void`

#### Inherited from

[RenderScope](RenderScope.md).[adjustContainersAndRows](RenderScope.md#adjustcontainersandrows)

#### Defined in

[lib/table/ele-scope.ts:135](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/ele-scope.ts#L135)

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

[lib/table/render-scope.ts:795](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/render-scope.ts#L795)

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

[lib/table/render-scope.ts:772](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/render-scope.ts#L772)

___

### autoRestoreCollapsedExpandedState

▸ **autoRestoreCollapsedExpandedState**(): `void`

#### Returns

`void`

#### Defined in

[lib/table/table-scope.ts:395](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/table-scope.ts#L395)

___

### autoRestoreScrollPosition

▸ **autoRestoreScrollPosition**(): `void`

#### Returns

`void`

#### Defined in

[lib/table/table-scope.ts:373](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/table-scope.ts#L373)

___

### autoRestoreSortingState

▸ **autoRestoreSortingState**(): `void`

#### Returns

`void`

#### Defined in

[lib/table/table-scope.ts:385](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/table-scope.ts#L385)

___

### changeFocusCell

▸ **changeFocusCell**(`dx`, `dy`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `dx` | `number` |
| `dy` | `number` |

#### Returns

`boolean`

#### Defined in

[lib/table/table-scope.ts:327](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/table-scope.ts#L327)

___

### checkForScrollPosSaving

▸ **checkForScrollPosSaving**(): `void`

#### Returns

`void`

#### Inherited from

[RenderScope](RenderScope.md).[checkForScrollPosSaving](RenderScope.md#checkforscrollpossaving)

#### Defined in

[lib/table/render-scope.ts:220](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/render-scope.ts#L220)

___

### clearSelection

▸ **clearSelection**(): `void`

#### Returns

`void`

#### Inherited from

[RenderScope](RenderScope.md).[clearSelection](RenderScope.md#clearselection)

#### Defined in

[lib/table/render-scope.ts:129](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/render-scope.ts#L129)

___

### clearSelectionModel

▸ **clearSelectionModel**(): `void`

#### Returns

`void`

#### Defined in

[lib/table/table-scope.ts:347](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/table-scope.ts#L347)

___

### contextmenu

▸ **contextmenu**(`mouseMoveEvent`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mouseMoveEvent` | [`GeMouseEvent`](GeMouseEvent.md) |

#### Returns

`void`

#### Defined in

[lib/table/table-scope.ts:250](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/table-scope.ts#L250)

___

### createGeMouseEvent

▸ **createGeMouseEvent**(`mouseEvent`): [`GeMouseEvent`](GeMouseEvent.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `mouseEvent` | `MouseEvent` |

#### Returns

[`GeMouseEvent`](GeMouseEvent.md)

#### Defined in

[lib/table/table-scope.ts:155](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/table-scope.ts#L155)

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

[lib/table/render-scope.ts:819](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/render-scope.ts#L819)

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

[lib/table/table-scope.ts:353](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/table-scope.ts#L353)

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

[lib/table/render-scope.ts:449](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/render-scope.ts#L449)

___

### externalFilterChanged

▸ **externalFilterChanged**(`clearSelection?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `clearSelection` | `boolean` | `true` |

#### Returns

`void`

#### Defined in

[lib/table/table-scope.ts:292](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/table-scope.ts#L292)

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

[lib/table/render-scope.ts:528](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/render-scope.ts#L528)

___

### firstInit

▸ **firstInit**(): `void`

#### Returns

`void`

#### Defined in

[lib/table/table-scope.ts:143](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/table-scope.ts#L143)

___

### getApi

▸ **getApi**(): [`TableApi`](TableApi.md)

#### Returns

[`TableApi`](TableApi.md)

#### Defined in

[lib/table/table-scope.ts:136](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/table-scope.ts#L136)

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

[lib/table/render-scope.ts:246](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/render-scope.ts#L246)

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

[lib/table/render-scope.ts:235](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/render-scope.ts#L235)

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

[lib/table/render-scope.ts:756](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/render-scope.ts#L756)

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

[lib/table/render-scope.ts:273](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/render-scope.ts#L273)

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

[lib/table/render-scope.ts:764](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/render-scope.ts#L764)

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

[lib/table/render-scope.ts:281](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/render-scope.ts#L281)

___

### getTreeArrowColumnIndex

▸ **getTreeArrowColumnIndex**(): ``0`` \| ``1``

#### Returns

``0`` \| ``1``

#### Inherited from

[RenderScope](RenderScope.md).[getTreeArrowColumnIndex](RenderScope.md#gettreearrowcolumnindex)

#### Defined in

[lib/table/render-scope.ts:651](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/render-scope.ts#L651)

___

### hideHoverColumn

▸ **hideHoverColumn**(): `void`

#### Returns

`void`

#### Inherited from

[RenderScope](RenderScope.md).[hideHoverColumn](RenderScope.md#hidehovercolumn)

#### Defined in

[lib/table/render-scope.ts:813](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/render-scope.ts#L813)

___

### hideHoverRow

▸ **hideHoverRow**(): `void`

#### Returns

`void`

#### Inherited from

[RenderScope](RenderScope.md).[hideHoverRow](RenderScope.md#hidehoverrow)

#### Defined in

[lib/table/render-scope.ts:789](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/render-scope.ts#L789)

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

[lib/table/render-scope.ts:136](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/render-scope.ts#L136)

___

### isEditing

▸ **isEditing**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[RenderScope](RenderScope.md).[isEditing](RenderScope.md#isediting)

#### Defined in

[lib/table/render-scope.ts:118](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/render-scope.ts#L118)

___

### mouseDraggingEndOnFrame

▸ **mouseDraggingEndOnFrame**(`mouseEvent`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mouseEvent` | [`GeMouseEvent`](GeMouseEvent.md) |

#### Returns

`void`

#### Defined in

[lib/table/table-scope.ts:227](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/table-scope.ts#L227)

___

### mouseDraggingOnFrame

▸ **mouseDraggingOnFrame**(`mouseEvent`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mouseEvent` | [`GeMouseEvent`](GeMouseEvent.md) |

#### Returns

`void`

#### Defined in

[lib/table/table-scope.ts:199](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/table-scope.ts#L199)

___

### mouseMove

▸ **mouseMove**(`mouseMoveEvent`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mouseMoveEvent` | [`GeMouseEvent`](GeMouseEvent.md) |

#### Returns

`void`

#### Defined in

[lib/table/table-scope.ts:244](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/table-scope.ts#L244)

___

### onActionTriggered

▸ **onActionTriggered**(`actionId`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `actionId` | ``"START_EDITING"`` \| ``"TOGGLE_SELECTION"`` \| ``"SELECT_ALL"`` \| ``"DESELECT_ALL"`` \| ``"NAVIGATE_LEFT"`` \| ``"NAVIGATE_RIGHT"`` \| ``"NAVIGATE_UP"`` \| ``"NAVIGATE_DOWN"`` |

#### Returns

`boolean`

#### Implementation of

[OnActionTriggeredIf](../interfaces/OnActionTriggeredIf.md).[onActionTriggered](../interfaces/OnActionTriggeredIf.md#onactiontriggered)

#### Defined in

[lib/table/table-scope.ts:86](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/table-scope.ts#L86)

___

### onHeaderDblClicked

▸ **onHeaderDblClicked**(`event`, `_rowIdx`, `colIdx`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `MouseEvent` |
| `_rowIdx` | `number` |
| `colIdx` | `number` |

#### Returns

`void`

#### Defined in

[lib/table/table-scope.ts:306](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/table-scope.ts#L306)

___

### onMouseClicked

▸ **onMouseClicked**(`evt`, `previousEvt`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `evt` | [`GeMouseEvent`](GeMouseEvent.md) |
| `previousEvt` | `undefined` \| [`GeMouseEvent`](GeMouseEvent.md) |

#### Returns

`void`

#### Defined in

[lib/table/table-scope.ts:274](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/table-scope.ts#L274)

___

### onMouseDown

▸ **onMouseDown**(`mouseEvent`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mouseEvent` | [`GeMouseEvent`](GeMouseEvent.md) |

#### Returns

`void`

#### Defined in

[lib/table/table-scope.ts:184](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/table-scope.ts#L184)

___

### repaint

▸ **repaint**(): `void`

#### Returns

`void`

#### Inherited from

[RenderScope](RenderScope.md).[repaint](RenderScope.md#repaint)

#### Defined in

[lib/table/render-scope.ts:162](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/render-scope.ts#L162)

___

### resetEditorRenderer

▸ **resetEditorRenderer**(): `void`

#### Returns

`void`

#### Inherited from

[RenderScope](RenderScope.md).[resetEditorRenderer](RenderScope.md#reseteditorrenderer)

#### Defined in

[lib/table/render-scope.ts:122](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/render-scope.ts#L122)

___

### resetSizeOfWrapperDiv

▸ **resetSizeOfWrapperDiv**(): `void`

#### Returns

`void`

#### Inherited from

[RenderScope](RenderScope.md).[resetSizeOfWrapperDiv](RenderScope.md#resetsizeofwrapperdiv)

#### Defined in

[lib/table/ele-scope.ts:276](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/ele-scope.ts#L276)

___

### resizeColumn

▸ **resizeColumn**(`mouseEvent`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mouseEvent` | [`GeMouseEvent`](GeMouseEvent.md) |

#### Returns

`void`

#### Defined in

[lib/table/table-scope.ts:340](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/table-scope.ts#L340)

___

### toggleExpandCollapseAll

▸ **toggleExpandCollapseAll**(`expand?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `expand` | `boolean` | `true` |

#### Returns

`void`

#### Defined in

[lib/table/table-scope.ts:254](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/table-scope.ts#L254)

___

### toggleRowCheckbox

▸ **toggleRowCheckbox**(`rowIdx`, `_colIdx`, `areaIdent`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rowIdx` | `number` |
| `_colIdx` | `number` |
| `areaIdent` | [`AreaIdent`](../modules.md#areaident) |

#### Returns

`void`

#### Defined in

[lib/table/table-scope.ts:264](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/table-scope.ts#L264)

___

### updateCells

▸ **updateCells**(`events`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | [`TableCellUpdateEventIf`](../interfaces/TableCellUpdateEventIf.md)[] |

#### Returns

`void`

#### Inherited from

[RenderScope](RenderScope.md).[updateCells](RenderScope.md#updatecells)

#### Defined in

[lib/table/render-scope.ts:227](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/render-scope.ts#L227)

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

[lib/table/table-scope.ts:123](https://github.com/guiexperttable/ge-table/blob/65d38fc/libs/table/src/lib/table/table-scope.ts#L123)
