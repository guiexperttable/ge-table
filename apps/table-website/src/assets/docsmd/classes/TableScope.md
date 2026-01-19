[@guiexpert/table](../README.md) / [Exports](../modules.md) / TableScope

# Class: TableScope

The TableScope class extends the RenderScope class and provides functionality for rendering and interacting with a table.

## Hierarchy

- [`RenderScope`](RenderScope.md)

  ↳ **`TableScope`**

## Implements

- [`OnActionTriggeredIf`](../interfaces/OnActionTriggeredIf.md)
- [`EventFocusChangedListenerIf`](../interfaces/EventFocusChangedListenerIf.md)
- [`EventSelectionChangedListenerIf`](../interfaces/EventSelectionChangedListenerIf.md)

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
- [copyService](TableScope.md#copyservice)
- [displayedRowCount](TableScope.md#displayedrowcount)
- [dom](TableScope.md#dom)
- [dragFrom](TableScope.md#dragfrom)
- [dragTo](TableScope.md#dragto)
- [dragging](TableScope.md#dragging)
- [draggingColumn](TableScope.md#draggingcolumn)
- [draggingTargetColumnIndex](TableScope.md#draggingtargetcolumnindex)
- [editing](TableScope.md#editing)
- [eventListener](TableScope.md#eventlistener)
- [excelService](TableScope.md#excelservice)
- [firstDraggingRendering](TableScope.md#firstdraggingrendering)
- [firstVisibleRowIndex](TableScope.md#firstvisiblerowindex)
- [getFocusModel](TableScope.md#getfocusmodel)
- [getSelectionModel](TableScope.md#getselectionmodel)
- [hostElement](TableScope.md#hostelement)
- [hoverColumn](TableScope.md#hovercolumn)
- [hoverRow](TableScope.md#hoverrow)
- [inputHandler](TableScope.md#inputhandler)
- [keyEvent](TableScope.md#keyevent)
- [lastContextmenu](TableScope.md#lastcontextmenu)
- [lastDragFrom](TableScope.md#lastdragfrom)
- [lastDragTo](TableScope.md#lastdragto)
- [licenseManager](TableScope.md#licensemanager)
- [mouseEvent](TableScope.md#mouseevent)
- [mouseHandler](TableScope.md#mousehandler)
- [mouseStartAction](TableScope.md#mousestartaction)
- [mouseStartColumnIndex](TableScope.md#mousestartcolumnindex)
- [mouseStartWidth](TableScope.md#mousestartwidth)
- [resizeHandler](TableScope.md#resizehandler)
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
- [storedColumnWidths](TableScope.md#storedcolumnwidths)
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
- [adjustDraggingColumn](TableScope.md#adjustdraggingcolumn)
- [adjustHoverColumns](TableScope.md#adjusthovercolumns)
- [adjustHoverRows](TableScope.md#adjusthoverrows)
- [applyCssClasses](TableScope.md#applycssclasses)
- [autoResizeColumns](TableScope.md#autoresizecolumns)
- [autoRestoreCollapsedExpandedState](TableScope.md#autorestorecollapsedexpandedstate)
- [autoRestoreScrollPosition](TableScope.md#autorestorescrollposition)
- [autoRestoreSortingState](TableScope.md#autorestoresortingstate)
- [calcAutoColumnWidths](TableScope.md#calcautocolumnwidths)
- [changeFocusCell](TableScope.md#changefocuscell)
- [checkForScrollPosSaving](TableScope.md#checkforscrollpossaving)
- [clearSelection](TableScope.md#clearselection)
- [clearSelectionModel](TableScope.md#clearselectionmodel)
- [contextmenu](TableScope.md#contextmenu)
- [createGeMouseEvent](TableScope.md#creategemouseevent)
- [debounce](TableScope.md#debounce)
- [debounceRepaint](TableScope.md#debouncerepaint)
- [debugOnce](TableScope.md#debugonce)
- [drawBigCell](TableScope.md#drawbigcell)
- [ensureRowIsVisible](TableScope.md#ensurerowisvisible)
- [externalFilterChanged](TableScope.md#externalfilterchanged)
- [findRowOfImportantRowspanCell](TableScope.md#findrowofimportantrowspancell)
- [firstInit](TableScope.md#firstinit)
- [focusModel](TableScope.md#focusmodel)
- [getApi](TableScope.md#getapi)
- [getArea](TableScope.md#getarea)
- [getAreaAndSideIdentByAttr](TableScope.md#getareaandsideidentbyattr)
- [getColumnWidths](TableScope.md#getcolumnwidths)
- [getDisplayedRowCount](TableScope.md#getdisplayedrowcount)
- [getFirstVisibleRowIndex](TableScope.md#getfirstvisiblerowindex)
- [getNumberByAttr](TableScope.md#getnumberbyattr)
- [getRowHeights](TableScope.md#getrowheights)
- [getStringByAttr](TableScope.md#getstringbyattr)
- [getTreeArrowColumnIndex](TableScope.md#gettreearrowcolumnindex)
- [hideDraggingColumn](TableScope.md#hidedraggingcolumn)
- [hideHoverColumn](TableScope.md#hidehovercolumn)
- [hideHoverRow](TableScope.md#hidehoverrow)
- [initRenderEditor](TableScope.md#initrendereditor)
- [isEditing](TableScope.md#isediting)
- [mouseDraggingEndOnFrame](TableScope.md#mousedraggingendonframe)
- [mouseDraggingOnFrame](TableScope.md#mousedraggingonframe)
- [mouseMove](TableScope.md#mousemove)
- [onActionTriggered](TableScope.md#onactiontriggered)
- [onFocusChanged](TableScope.md#onfocuschanged)
- [onHeaderDblClicked](TableScope.md#onheaderdblclicked)
- [onMouseClicked](TableScope.md#onmouseclicked)
- [onMouseDown](TableScope.md#onmousedown)
- [onSelectionChanged](TableScope.md#onselectionchanged)
- [publishGeMouseEvent](TableScope.md#publishgemouseevent)
- [reSort](TableScope.md#resort)
- [recalcColumnWidths](TableScope.md#recalccolumnwidths)
- [recalcWrappers](TableScope.md#recalcwrappers)
- [renderContentOfDraggingColumn](TableScope.md#rendercontentofdraggingcolumn)
- [renderContentOfDraggingColumnForArea](TableScope.md#rendercontentofdraggingcolumnforarea)
- [repaint](TableScope.md#repaint)
- [repaintHard](TableScope.md#repainthard)
- [rerenderCellContent](TableScope.md#rerendercellcontent)
- [resetEditorRenderer](TableScope.md#reseteditorrenderer)
- [resetSizeOfWrapperDiv](TableScope.md#resetsizeofwrapperdiv)
- [resizeColumn](TableScope.md#resizecolumn)
- [scrollToIndex](TableScope.md#scrolltoindex)
- [scrollToPixel](TableScope.md#scrolltopixel)
- [selectionModel](TableScope.md#selectionmodel)
- [setColumnWidth](TableScope.md#setcolumnwidth)
- [setDragging](TableScope.md#setdragging)
- [setSelectionModel](TableScope.md#setselectionmodel)
- [sort](TableScope.md#sort)
- [storeColumnWidths](TableScope.md#storecolumnwidths)
- [toggleExpandCollapseAll](TableScope.md#toggleexpandcollapseall)
- [toggleHeaderGroup](TableScope.md#toggleheadergroup)
- [toggleRowCheckbox](TableScope.md#togglerowcheckbox)
- [updateCells](TableScope.md#updatecells)
- [updateModelValueAfterEdit](TableScope.md#updatemodelvalueafteredit)
- [create](TableScope.md#create)

## Constructors

### constructor

• **new TableScope**(`hostElement`, `tableModel`, `domService`, `tableOptions`, `eventListener`, `copyService?`, `excelService?`): [`TableScope`](TableScope.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `hostElement` | `HTMLDivElement` |
| `tableModel` | [`TableModelIf`](../interfaces/TableModelIf.md) |
| `domService` | [`DomServiceIf`](../interfaces/DomServiceIf.md) |
| `tableOptions` | [`TableOptionsIf`](../interfaces/TableOptionsIf.md) |
| `eventListener` | [`EventListenerIf`](../interfaces/EventListenerIf.md) |
| `copyService` | [`CopyServiceIf`](../interfaces/CopyServiceIf.md) |
| `excelService` | `ExcelServiceIf` |

#### Returns

[`TableScope`](TableScope.md)

#### Overrides

[RenderScope](RenderScope.md).[constructor](RenderScope.md#constructor)

#### Defined in

[lib/table/table-scope.ts:97](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/table-scope.ts#L97)

## Properties

### api

• `Private` **api**: [`TableApi`](TableApi.md)

An instance of TableApi, providing an API for table interactions.

Additional properties related to the dragging state of the table:
- mouseStartAction: The action performed at the start of a mouse drag operation.
- mouseStartWidth: The initial width of an element at the start of a resizing drag operation.
- mouseStartColumnIndex: The index of the column at the start of a resizing drag operation.
- dragFrom: The initial cell index of a drag operation.
- dragTo: The current cell index of a drag operation.
- lastDragFrom: The previous initial cell index of a drag operation.
- lastDragTo: The previous current cell index of a drag operation.
- firstDraggingRendering: A boolean indicating if this is the first render during the current drag operation.

Methods: Please refer to the documentation of the superclass RenderScope for the inherited methods.
The TableScope class introduces additional methods not listed here. Please refer to the source code for further details.

#### Defined in

[lib/table/table-scope.ts:85](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/table-scope.ts#L85)

___

### areaBodyCenter

• `Protected` **areaBodyCenter**: [`DivScope`](../modules.md#divscope)

#### Inherited from

[RenderScope](RenderScope.md).[areaBodyCenter](RenderScope.md#areabodycenter)

#### Defined in

[lib/table/ele-scope.ts:23](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/ele-scope.ts#L23)

___

### areaBodyCenterGeo

• `Protected` **areaBodyCenterGeo**: [`GeoData`](GeoData.md)

#### Inherited from

[RenderScope](RenderScope.md).[areaBodyCenterGeo](RenderScope.md#areabodycentergeo)

#### Defined in

[lib/table/ele-scope.ts:44](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/ele-scope.ts#L44)

___

### areaBodyEast

• `Protected` **areaBodyEast**: [`DivScope`](../modules.md#divscope)

#### Inherited from

[RenderScope](RenderScope.md).[areaBodyEast](RenderScope.md#areabodyeast)

#### Defined in

[lib/table/ele-scope.ts:25](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/ele-scope.ts#L25)

___

### areaBodyEastGeo

• `Protected` **areaBodyEastGeo**: [`GeoData`](GeoData.md)

#### Inherited from

[RenderScope](RenderScope.md).[areaBodyEastGeo](RenderScope.md#areabodyeastgeo)

#### Defined in

[lib/table/ele-scope.ts:45](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/ele-scope.ts#L45)

___

### areaBodyWest

• `Protected` **areaBodyWest**: [`DivScope`](../modules.md#divscope)

#### Inherited from

[RenderScope](RenderScope.md).[areaBodyWest](RenderScope.md#areabodywest)

#### Defined in

[lib/table/ele-scope.ts:24](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/ele-scope.ts#L24)

___

### areaBodyWestGeo

• `Protected` **areaBodyWestGeo**: [`GeoData`](GeoData.md)

#### Inherited from

[RenderScope](RenderScope.md).[areaBodyWestGeo](RenderScope.md#areabodywestgeo)

#### Defined in

[lib/table/ele-scope.ts:43](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/ele-scope.ts#L43)

___

### areaFooterCenter

• `Protected` **areaFooterCenter**: [`DivScope`](../modules.md#divscope)

#### Inherited from

[RenderScope](RenderScope.md).[areaFooterCenter](RenderScope.md#areafootercenter)

#### Defined in

[lib/table/ele-scope.ts:28](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/ele-scope.ts#L28)

___

### areaFooterEast

• `Protected` **areaFooterEast**: [`DivScope`](../modules.md#divscope)

#### Inherited from

[RenderScope](RenderScope.md).[areaFooterEast](RenderScope.md#areafootereast)

#### Defined in

[lib/table/ele-scope.ts:30](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/ele-scope.ts#L30)

___

### areaFooterWest

• `Protected` **areaFooterWest**: [`DivScope`](../modules.md#divscope)

#### Inherited from

[RenderScope](RenderScope.md).[areaFooterWest](RenderScope.md#areafooterwest)

#### Defined in

[lib/table/ele-scope.ts:29](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/ele-scope.ts#L29)

___

### areaHeaderCenter

• `Protected` **areaHeaderCenter**: [`DivScope`](../modules.md#divscope)

#### Inherited from

[RenderScope](RenderScope.md).[areaHeaderCenter](RenderScope.md#areaheadercenter)

#### Defined in

[lib/table/ele-scope.ts:19](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/ele-scope.ts#L19)

___

### areaHeaderEast

• `Protected` **areaHeaderEast**: [`DivScope`](../modules.md#divscope)

#### Inherited from

[RenderScope](RenderScope.md).[areaHeaderEast](RenderScope.md#areaheadereast)

#### Defined in

[lib/table/ele-scope.ts:21](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/ele-scope.ts#L21)

___

### areaHeaderWest

• `Protected` **areaHeaderWest**: [`DivScope`](../modules.md#divscope)

#### Inherited from

[RenderScope](RenderScope.md).[areaHeaderWest](RenderScope.md#areaheaderwest)

#### Defined in

[lib/table/ele-scope.ts:20](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/ele-scope.ts#L20)

___

### borderFixedEast

• `Protected` **borderFixedEast**: `HTMLDivElement`

#### Inherited from

[RenderScope](RenderScope.md).[borderFixedEast](RenderScope.md#borderfixedeast)

#### Defined in

[lib/table/ele-scope.ts:35](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/ele-scope.ts#L35)

___

### borderFixedWest

• `Protected` **borderFixedWest**: `HTMLDivElement`

#### Inherited from

[RenderScope](RenderScope.md).[borderFixedWest](RenderScope.md#borderfixedwest)

#### Defined in

[lib/table/ele-scope.ts:34](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/ele-scope.ts#L34)

___

### borderFooterTop

• `Protected` **borderFooterTop**: `HTMLDivElement`

#### Inherited from

[RenderScope](RenderScope.md).[borderFooterTop](RenderScope.md#borderfootertop)

#### Defined in

[lib/table/ele-scope.ts:33](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/ele-scope.ts#L33)

___

### borderHeaderBottom

• `Protected` **borderHeaderBottom**: `HTMLDivElement`

#### Inherited from

[RenderScope](RenderScope.md).[borderHeaderBottom](RenderScope.md#borderheaderbottom)

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

#### Inherited from

[RenderScope](RenderScope.md).[cleanupFunctions](RenderScope.md#cleanupfunctions)

#### Defined in

[lib/table/render-scope.ts:80](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/render-scope.ts#L80)

___

### colAndRowspanModels

• `Protected` **colAndRowspanModels**: [`AreaObjectMapType`](../modules.md#areaobjectmaptype)\<[`ColAndRowspanModel`](ColAndRowspanModel.md)\>

#### Inherited from

[RenderScope](RenderScope.md).[colAndRowspanModels](RenderScope.md#colandrowspanmodels)

#### Defined in

[lib/table/render-scope.ts:91](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/render-scope.ts#L91)

___

### contentDiv

• `Protected` **contentDiv**: `HTMLDivElement`

#### Inherited from

[RenderScope](RenderScope.md).[contentDiv](RenderScope.md#contentdiv)

#### Defined in

[lib/table/ele-scope.ts:17](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/ele-scope.ts#L17)

___

### contentWrapperDiv

• `Protected` **contentWrapperDiv**: `HTMLDivElement`

#### Inherited from

[RenderScope](RenderScope.md).[contentWrapperDiv](RenderScope.md#contentwrapperdiv)

#### Defined in

[lib/table/ele-scope.ts:16](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/ele-scope.ts#L16)

___

### copyService

• `Readonly` **copyService**: [`CopyServiceIf`](../interfaces/CopyServiceIf.md)

#### Defined in

[lib/table/table-scope.ts:103](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/table-scope.ts#L103)

___

### displayedRowCount

• **displayedRowCount**: `number` = `0`

#### Inherited from

[RenderScope](RenderScope.md).[displayedRowCount](RenderScope.md#displayedrowcount)

#### Defined in

[lib/table/render-scope.ts:495](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/render-scope.ts#L495)

___

### dom

• `Protected` `Readonly` **dom**: [`ConvenienceDomService`](ConvenienceDomService.md)

#### Inherited from

[RenderScope](RenderScope.md).[dom](RenderScope.md#dom)

#### Defined in

[lib/table/ele-scope.ts:51](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/ele-scope.ts#L51)

___

### dragFrom

• `Private` **dragFrom**: `number` = `-1`

#### Defined in

[lib/table/table-scope.ts:91](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/table-scope.ts#L91)

___

### dragTo

• `Private` **dragTo**: `number` = `-1`

#### Defined in

[lib/table/table-scope.ts:92](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/table-scope.ts#L92)

___

### dragging

• `Protected` **dragging**: `boolean` = `false`

#### Inherited from

[RenderScope](RenderScope.md).[dragging](RenderScope.md#dragging)

#### Defined in

[lib/table/render-scope.ts:68](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/render-scope.ts#L68)

___

### draggingColumn

• `Protected` **draggingColumn**: `HTMLDivElement`

#### Inherited from

[RenderScope](RenderScope.md).[draggingColumn](RenderScope.md#draggingcolumn)

#### Defined in

[lib/table/ele-scope.ts:39](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/ele-scope.ts#L39)

___

### draggingTargetColumnIndex

• `Protected` **draggingTargetColumnIndex**: `number` = `-1`

#### Inherited from

[RenderScope](RenderScope.md).[draggingTargetColumnIndex](RenderScope.md#draggingtargetcolumnindex)

#### Defined in

[lib/table/render-scope.ts:94](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/render-scope.ts#L94)

___

### editing

• `Protected` **editing**: `boolean` = `false`

#### Inherited from

[RenderScope](RenderScope.md).[editing](RenderScope.md#editing)

#### Defined in

[lib/table/render-scope.ts:69](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/render-scope.ts#L69)

___

### eventListener

• `Protected` `Readonly` **eventListener**: [`EventListenerIf`](../interfaces/EventListenerIf.md)

#### Defined in

[lib/table/table-scope.ts:102](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/table-scope.ts#L102)

___

### excelService

• `Readonly` **excelService**: `ExcelServiceIf`

#### Defined in

[lib/table/table-scope.ts:104](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/table-scope.ts#L104)

___

### firstDraggingRendering

• `Private` **firstDraggingRendering**: `boolean` = `true`

#### Defined in

[lib/table/table-scope.ts:95](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/table-scope.ts#L95)

___

### firstVisibleRowIndex

• `Protected` **firstVisibleRowIndex**: `number` = `-1`

#### Inherited from

[RenderScope](RenderScope.md).[firstVisibleRowIndex](RenderScope.md#firstvisiblerowindex)

#### Defined in

[lib/table/render-scope.ts:92](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/render-scope.ts#L92)

___

### getFocusModel

• `Protected` `Optional` **getFocusModel**: [`GetT`](../modules.md#gett)\<[`FocusModelIf`](../interfaces/FocusModelIf.md)\>

#### Inherited from

[RenderScope](RenderScope.md).[getFocusModel](RenderScope.md#getfocusmodel)

#### Defined in

[lib/table/render-scope.ts:74](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/render-scope.ts#L74)

___

### getSelectionModel

• `Protected` `Optional` **getSelectionModel**: [`GetT`](../modules.md#gett)\<[`SelectionModelIf`](../interfaces/SelectionModelIf.md)\>

#### Inherited from

[RenderScope](RenderScope.md).[getSelectionModel](RenderScope.md#getselectionmodel)

#### Defined in

[lib/table/render-scope.ts:73](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/render-scope.ts#L73)

___

### hostElement

• `Readonly` **hostElement**: `HTMLDivElement`

#### Inherited from

[RenderScope](RenderScope.md).[hostElement](RenderScope.md#hostelement)

#### Defined in

[lib/table/ele-scope.ts:49](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/ele-scope.ts#L49)

___

### hoverColumn

• `Protected` **hoverColumn**: `HTMLDivElement`

#### Inherited from

[RenderScope](RenderScope.md).[hoverColumn](RenderScope.md#hovercolumn)

#### Defined in

[lib/table/ele-scope.ts:38](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/ele-scope.ts#L38)

___

### hoverRow

• `Protected` **hoverRow**: `HTMLDivElement`

#### Inherited from

[RenderScope](RenderScope.md).[hoverRow](RenderScope.md#hoverrow)

#### Defined in

[lib/table/ele-scope.ts:37](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/ele-scope.ts#L37)

___

### inputHandler

• **inputHandler**: [`InputHandler`](InputHandler.md)

An instance of InputHandler to handle keyboard inputs.

#### Defined in

[lib/table/table-scope.ts:76](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/table-scope.ts#L76)

___

### keyEvent

• `Protected` `Optional` **keyEvent**: [`GeKeyEvent`](GeKeyEvent.md)

An object representing the last processed keyboard event.

#### Defined in

[lib/table/table-scope.ts:84](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/table-scope.ts#L84)

___

### lastContextmenu

• `Private` **lastContextmenu**: `number`

#### Defined in

[lib/table/table-scope.ts:386](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/table-scope.ts#L386)

___

### lastDragFrom

• `Private` **lastDragFrom**: `number` = `-1`

#### Defined in

[lib/table/table-scope.ts:93](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/table-scope.ts#L93)

___

### lastDragTo

• `Private` **lastDragTo**: `number` = `-1`

#### Defined in

[lib/table/table-scope.ts:94](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/table-scope.ts#L94)

___

### licenseManager

• **licenseManager**: [`LicenseManager`](LicenseManager.md)

An instance of LicenseManager.

#### Defined in

[lib/table/table-scope.ts:74](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/table-scope.ts#L74)

___

### mouseEvent

• `Protected` `Optional` **mouseEvent**: [`GeMouseEvent`](GeMouseEvent.md)

#### Inherited from

[RenderScope](RenderScope.md).[mouseEvent](RenderScope.md#mouseevent)

#### Defined in

[lib/table/render-scope.ts:95](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/render-scope.ts#L95)

___

### mouseHandler

• **mouseHandler**: [`MouseHandler`](MouseHandler.md)

An instance of MouseHandler to handle mouse events.

#### Defined in

[lib/table/table-scope.ts:75](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/table-scope.ts#L75)

___

### mouseStartAction

• `Private` **mouseStartAction**: `string` = `''`

#### Defined in

[lib/table/table-scope.ts:87](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/table-scope.ts#L87)

___

### mouseStartColumnIndex

• `Private` **mouseStartColumnIndex**: `number` = `-1`

#### Defined in

[lib/table/table-scope.ts:89](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/table-scope.ts#L89)

___

### mouseStartWidth

• `Private` **mouseStartWidth**: `number` = `-1`

#### Defined in

[lib/table/table-scope.ts:88](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/table-scope.ts#L88)

___

### resizeHandler

• **resizeHandler**: [`ResizeHandler`](ResizeHandler.md)

#### Defined in

[lib/table/table-scope.ts:77](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/table-scope.ts#L77)

___

### scrollFactorX

• `Protected` **scrollFactorX**: `number` = `0`

#### Inherited from

[RenderScope](RenderScope.md).[scrollFactorX](RenderScope.md#scrollfactorx)

#### Defined in

[lib/table/render-scope.ts:78](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/render-scope.ts#L78)

___

### scrollFactorY

• `Protected` **scrollFactorY**: `number` = `0`

#### Inherited from

[RenderScope](RenderScope.md).[scrollFactorY](RenderScope.md#scrollfactory)

#### Defined in

[lib/table/render-scope.ts:77](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/render-scope.ts#L77)

___

### scrollLeft

• `Protected` **scrollLeft**: `number` = `0`

#### Inherited from

[RenderScope](RenderScope.md).[scrollLeft](RenderScope.md#scrollleft)

#### Defined in

[lib/table/render-scope.ts:75](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/render-scope.ts#L75)

___

### scrollTop

• `Protected` **scrollTop**: `number` = `0`

#### Inherited from

[RenderScope](RenderScope.md).[scrollTop](RenderScope.md#scrolltop)

#### Defined in

[lib/table/ele-scope.ts:41](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/ele-scope.ts#L41)

___

### scrollViewport

• **scrollViewport**: `HTMLDivElement`

#### Inherited from

[RenderScope](RenderScope.md).[scrollViewport](RenderScope.md#scrollviewport)

#### Defined in

[lib/table/ele-scope.ts:14](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/ele-scope.ts#L14)

___

### scrollViewportLeft

• `Protected` **scrollViewportLeft**: `number` = `0`

#### Inherited from

[RenderScope](RenderScope.md).[scrollViewportLeft](RenderScope.md#scrollviewportleft)

#### Defined in

[lib/table/render-scope.ts:76](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/render-scope.ts#L76)

___

### selectionService

• `Protected` **selectionService**: [`SelectionService`](SelectionService.md)

An instance of SelectionService to manage cell selection in the table.

#### Defined in

[lib/table/table-scope.ts:83](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/table-scope.ts#L83)

___

### shortcutService

• **shortcutService**: [`ShortcutService`](ShortcutService.md)

An instance of ShortcutService to register and handle shortcuts.

#### Defined in

[lib/table/table-scope.ts:78](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/table-scope.ts#L78)

___

### storeScrollPosStateService

• `Protected` `Optional` **storeScrollPosStateService**: [`StoreStateScrollPosService`](StoreStateScrollPosService.md)

#### Inherited from

[RenderScope](RenderScope.md).[storeScrollPosStateService](RenderScope.md#storescrollposstateservice)

#### Defined in

[lib/table/render-scope.ts:72](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/render-scope.ts#L72)

___

### storeSortingService

• `Optional` **storeSortingService**: [`StoreStateSortingService`](StoreStateSortingService.md)

A service to manage and restore the sort state of the table's columns.

#### Defined in

[lib/table/table-scope.ts:81](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/table-scope.ts#L81)

___

### storeStateCollapsedExpandService

• `Optional` **storeStateCollapsedExpandService**: [`StoreStateCollapsedExpandService`](StoreStateCollapsedExpandService.md)

A service to manage and restore the collapsed or expanded state of the table's rows.

#### Defined in

[lib/table/table-scope.ts:80](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/table-scope.ts#L80)

___

### storedColumnWidths

• `Protected` **storedColumnWidths**: `number`[] = `[]`

#### Inherited from

[RenderScope](RenderScope.md).[storedColumnWidths](RenderScope.md#storedcolumnwidths)

#### Defined in

[lib/table/render-scope.ts:70](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/render-scope.ts#L70)

___

### tableModel

• `Readonly` **tableModel**: [`TableModelIf`](../interfaces/TableModelIf.md)

#### Inherited from

[RenderScope](RenderScope.md).[tableModel](RenderScope.md#tablemodel)

#### Defined in

[lib/table/ele-scope.ts:50](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/ele-scope.ts#L50)

___

### tableOptions

• `Readonly` **tableOptions**: [`TableOptionsIf`](../interfaces/TableOptionsIf.md)

#### Inherited from

[RenderScope](RenderScope.md).[tableOptions](RenderScope.md#tableoptions)

#### Defined in

[lib/table/ele-scope.ts:52](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/ele-scope.ts#L52)

___

### tree

• `Protected` **tree**: `boolean` = `false`

#### Inherited from

[RenderScope](RenderScope.md).[tree](RenderScope.md#tree)

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

#### Inherited from

[RenderScope](RenderScope.md).[addAndRenderCellDiv](RenderScope.md#addandrendercelldiv)

#### Defined in

[lib/table/render-scope.ts:915](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/render-scope.ts#L915)

___

### adjustAfterScrolling

▸ **adjustAfterScrolling**(): `void`

Adjusts the table after scrolling. This method performs various adjustments
to the table's appearance and behavior after a scroll event occurs.

#### Returns

`void`

#### Inherited from

[RenderScope](RenderScope.md).[adjustAfterScrolling](RenderScope.md#adjustafterscrolling)

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

#### Inherited from

[RenderScope](RenderScope.md).[adjustArea](RenderScope.md#adjustarea)

#### Defined in

[lib/table/render-scope.ts:505](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/render-scope.ts#L505)

___

### adjustBody

▸ **adjustBody**(): `void`

Adjusts the body of the table.

#### Returns

`void`

#### Inherited from

[RenderScope](RenderScope.md).[adjustBody](RenderScope.md#adjustbody)

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

#### Inherited from

[RenderScope](RenderScope.md).[adjustColumnsToRowParent](RenderScope.md#adjustcolumnstorowparent)

#### Defined in

[lib/table/render-scope.ts:777](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/render-scope.ts#L777)

___

### adjustContainersAndRows

▸ **adjustContainersAndRows**(): `void`

Adjusts the containers and rows of the table based on the current state.

#### Returns

`void`

#### Inherited from

[RenderScope](RenderScope.md).[adjustContainersAndRows](RenderScope.md#adjustcontainersandrows)

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

#### Inherited from

[RenderScope](RenderScope.md).[adjustDraggingColumn](RenderScope.md#adjustdraggingcolumn)

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

#### Inherited from

[RenderScope](RenderScope.md).[adjustHoverColumns](RenderScope.md#adjusthovercolumns)

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

#### Inherited from

[RenderScope](RenderScope.md).[adjustHoverRows](RenderScope.md#adjusthoverrows)

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

#### Inherited from

[RenderScope](RenderScope.md).[applyCssClasses](RenderScope.md#applycssclasses)

#### Defined in

[lib/table/render-scope.ts:1027](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/render-scope.ts#L1027)

___

### autoResizeColumns

▸ **autoResizeColumns**(`recalcWrappers?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `recalcWrappers` | `boolean` | `true` |

#### Returns

`void`

#### Defined in

[lib/table/table-scope.ts:824](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/table-scope.ts#L824)

___

### autoRestoreCollapsedExpandedState

▸ **autoRestoreCollapsedExpandedState**(): `void`

Restores the collapsed/expanded state of the rows in the table based on the autoRestoreOptions
specified in the tableOptions. This method is private and should not be called directly.

#### Returns

`void`

#### Defined in

[lib/table/table-scope.ts:756](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/table-scope.ts#L756)

___

### autoRestoreScrollPosition

▸ **autoRestoreScrollPosition**(): `void`

Restores the scroll position of the table if auto restore options are enabled.

#### Returns

`void`

#### Defined in

[lib/table/table-scope.ts:714](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/table-scope.ts#L714)

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

[lib/table/table-scope.ts:740](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/table-scope.ts#L740)

___

### calcAutoColumnWidths

▸ **calcAutoColumnWidths**(): `number`[]

#### Returns

`number`[]

#### Defined in

[lib/table/table-scope.ts:795](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/table-scope.ts#L795)

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

[lib/table/table-scope.ts:655](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/table-scope.ts#L655)

___

### checkForScrollPosSaving

▸ **checkForScrollPosSaving**(): `void`

Checks if the scroll position should be saved and saves it.

#### Returns

`void`

#### Inherited from

[RenderScope](RenderScope.md).[checkForScrollPosSaving](RenderScope.md#checkforscrollpossaving)

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

#### Inherited from

[RenderScope](RenderScope.md).[clearSelection](RenderScope.md#clearselection)

#### Defined in

[lib/table/render-scope.ts:162](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/render-scope.ts#L162)

___

### clearSelectionModel

▸ **clearSelectionModel**(): `void`

Clears the selection model, if available.

#### Returns

`void`

#### Defined in

[lib/table/table-scope.ts:685](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/table-scope.ts#L685)

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

[lib/table/table-scope.ts:393](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/table-scope.ts#L393)

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

[lib/table/table-scope.ts:263](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/table-scope.ts#L263)

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

#### Inherited from

[RenderScope](RenderScope.md).[debounce](RenderScope.md#debounce)

#### Defined in

[lib/table/render-scope.ts:1159](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/render-scope.ts#L1159)

___

### debounceRepaint

▸ **debounceRepaint**(): `void`

#### Returns

`void`

#### Defined in

[lib/table/table-scope.ts:465](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/table-scope.ts#L465)

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

[lib/table/table-scope.ts:691](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/table-scope.ts#L691)

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

[lib/table/render-scope.ts:668](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/render-scope.ts#L668)

___

### ensureRowIsVisible

▸ **ensureRowIsVisible**(`rowIndex`): `boolean`

Ensures that a specific row is visible in the viewport by scrolling if necessary.
This method checks if the target row is within the currently visible range and
adjusts the scroll position if it's not visible.

The method performs the following:
1. Checks if the row is above the current viewport (before first visible row)
2. Checks if the row is below the current viewport (after last visible row)
3. Scrolls to make the row visible if needed

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rowIndex` | `number` | The index of the row to make visible |

#### Returns

`boolean`

Returns true if scrolling was needed and performed, false if the row was already visible

**`Example`**

```ts
// Ensure row 5 is visible in the viewport
tableScope.ensureRowIsVisible(5);
```

**`Example`**

```ts
// Example usage in a component
class MyTableComponent {
  private tableScope: TableScope;

  scrollToSpecificRow(rowIndex: number) {
    // This will scroll the row into view if it's not visible
    const didScroll = this.tableScope.ensureRowIsVisible(rowIndex);

    if (didScroll) {
      console.log(`Table scrolled to show row ${rowIndex}`);
    } else {
      console.log(`Row ${rowIndex} was already visible`);
    }
  }
}
```

**`Example`**

```ts
// Example with row selection
class TableHandler {
  selectAndShowRow(rowIndex: number) {
    // First ensure the row is visible
    this.tableScope.ensureRowIsVisible(rowIndex);

    // Then perform selection
    this.selectionModel.selectRow(rowIndex);
  }
}
```

**`Throws`**

Implicitly may throw if rowIndex is not a number or if required properties are undefined

**`See`**

 - [scrollToIndex](TableScope.md#scrolltoindex) - The underlying method used for scrolling
 - [getDisplayedRowCount](TableScope.md#getdisplayedrowcount) - Related method for getting visible row count

#### Defined in

[lib/table/table-scope.ts:905](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/table-scope.ts#L905)

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

[lib/table/table-scope.ts:489](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/table-scope.ts#L489)

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

#### Inherited from

[RenderScope](RenderScope.md).[findRowOfImportantRowspanCell](RenderScope.md#findrowofimportantrowspancell)

#### Defined in

[lib/table/render-scope.ts:756](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/render-scope.ts#L756)

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

[lib/table/table-scope.ts:243](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/table-scope.ts#L243)

___

### focusModel

▸ **focusModel**(): `undefined` \| [`FocusModelIf`](../interfaces/FocusModelIf.md)

Retrieves the focus model.

#### Returns

`undefined` \| [`FocusModelIf`](../interfaces/FocusModelIf.md)

The focus model if it exists, or undefined otherwise.

#### Defined in

[lib/table/table-scope.ts:630](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/table-scope.ts#L630)

___

### getApi

▸ **getApi**(): [`TableApi`](TableApi.md)

Retrieves the TableApi object.

#### Returns

[`TableApi`](TableApi.md)

The TableApi object.

#### Defined in

[lib/table/table-scope.ts:230](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/table-scope.ts#L230)

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

#### Inherited from

[RenderScope](RenderScope.md).[getArea](RenderScope.md#getarea)

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

#### Inherited from

[RenderScope](RenderScope.md).[getAreaAndSideIdentByAttr](RenderScope.md#getareaandsideidentbyattr)

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

#### Inherited from

[RenderScope](RenderScope.md).[getColumnWidths](RenderScope.md#getcolumnwidths)

#### Defined in

[lib/table/render-scope.ts:1048](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/render-scope.ts#L1048)

___

### getDisplayedRowCount

▸ **getDisplayedRowCount**(): `number`

#### Returns

`number`

#### Defined in

[lib/table/table-scope.ts:849](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/table-scope.ts#L849)

___

### getFirstVisibleRowIndex

▸ **getFirstVisibleRowIndex**(): `number`

#### Returns

`number`

#### Defined in

[lib/table/table-scope.ts:919](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/table-scope.ts#L919)

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

#### Inherited from

[RenderScope](RenderScope.md).[getNumberByAttr](RenderScope.md#getnumberbyattr)

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

#### Inherited from

[RenderScope](RenderScope.md).[getRowHeights](RenderScope.md#getrowheights)

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

#### Inherited from

[RenderScope](RenderScope.md).[getStringByAttr](RenderScope.md#getstringbyattr)

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

#### Inherited from

[RenderScope](RenderScope.md).[getTreeArrowColumnIndex](RenderScope.md#gettreearrowcolumnindex)

#### Defined in

[lib/table/render-scope.ts:904](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/render-scope.ts#L904)

___

### hideDraggingColumn

▸ **hideDraggingColumn**(): `void`

Hides the dragging column by applying a 'display: none' style to it.
This method is protected and can only be accessed within the class.

#### Returns

`void`

#### Inherited from

[RenderScope](RenderScope.md).[hideDraggingColumn](RenderScope.md#hidedraggingcolumn)

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

#### Inherited from

[RenderScope](RenderScope.md).[hideHoverColumn](RenderScope.md#hidehovercolumn)

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

#### Inherited from

[RenderScope](RenderScope.md).[hideHoverRow](RenderScope.md#hidehoverrow)

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

#### Inherited from

[RenderScope](RenderScope.md).[initRenderEditor](RenderScope.md#initrendereditor)

#### Defined in

[lib/table/render-scope.ts:178](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/render-scope.ts#L178)

___

### isEditing

▸ **isEditing**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[RenderScope](RenderScope.md).[isEditing](RenderScope.md#isediting)

#### Defined in

[lib/table/render-scope.ts:135](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/render-scope.ts#L135)

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

[lib/table/table-scope.ts:355](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/table-scope.ts#L355)

___

### mouseDraggingOnFrame

▸ **mouseDraggingOnFrame**(`mouseEvent`, `startMouseEvent`): `void`

Handles mouse dragging on the frame.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mouseEvent` | [`GeMouseEvent`](GeMouseEvent.md) | The mouse event object. |
| `startMouseEvent` | `undefined` \| [`GeMouseEvent`](GeMouseEvent.md) |  |

#### Returns

`void`

#### Defined in

[lib/table/table-scope.ts:318](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/table-scope.ts#L318)

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

[lib/table/table-scope.ts:380](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/table-scope.ts#L380)

___

### onActionTriggered

▸ **onActionTriggered**(`actionId`): `boolean`

Triggers an action based on the provided actionId.

This function can be invoked manually via the table API or by keyboard shortcuts.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `actionId` | ``"COPY_2_CLIPBOARD"`` \| ``"START_EDITING"`` \| ``"TOGGLE_SELECTION"`` \| ``"SELECT_ALL"`` \| ``"DESELECT_ALL"`` \| ``"NAVIGATE_LEFT"`` \| ``"NAVIGATE_RIGHT"`` \| ``"NAVIGATE_UP"`` \| ``"NAVIGATE_DOWN"`` | The identifier of the action to be triggered. |

#### Returns

`boolean`

- Returns true if the action was triggered successfully, false otherwise.

#### Implementation of

[OnActionTriggeredIf](../interfaces/OnActionTriggeredIf.md).[onActionTriggered](../interfaces/OnActionTriggeredIf.md#onactiontriggered)

#### Defined in

[lib/table/table-scope.ts:168](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/table-scope.ts#L168)

___

### onFocusChanged

▸ **onFocusChanged**(`sm`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `sm` | [`FocusModelIf`](../interfaces/FocusModelIf.md) |

#### Returns

`void`

#### Implementation of

[EventFocusChangedListenerIf](../interfaces/EventFocusChangedListenerIf.md).[onFocusChanged](../interfaces/EventFocusChangedListenerIf.md#onfocuschanged)

#### Defined in

[lib/table/table-scope.ts:473](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/table-scope.ts#L473)

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

[lib/table/table-scope.ts:512](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/table-scope.ts#L512)

___

### onMouseClicked

▸ **onMouseClicked**(`evt`, `previousEvt`): `boolean`

Handle mouse click events.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `evt` | [`GeMouseEvent`](GeMouseEvent.md) | The mouse click event. |
| `previousEvt` | `undefined` \| [`GeMouseEvent`](GeMouseEvent.md) | The previous mouse click event, if any. |

#### Returns

`boolean`

#### Defined in

[lib/table/table-scope.ts:450](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/table-scope.ts#L450)

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

[lib/table/table-scope.ts:298](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/table-scope.ts#L298)

___

### onSelectionChanged

▸ **onSelectionChanged**(`sm`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `sm` | [`SelectionModelIf`](../interfaces/SelectionModelIf.md) |

#### Returns

`void`

#### Implementation of

[EventSelectionChangedListenerIf](../interfaces/EventSelectionChangedListenerIf.md).[onSelectionChanged](../interfaces/EventSelectionChangedListenerIf.md#onselectionchanged)

#### Defined in

[lib/table/table-scope.ts:477](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/table-scope.ts#L477)

___

### publishGeMouseEvent

▸ **publishGeMouseEvent**(`evt`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `evt` | [`GeMouseEvent`](GeMouseEvent.md) |

#### Returns

`void`

#### Defined in

[lib/table/table-scope.ts:469](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/table-scope.ts#L469)

___

### reSort

▸ **reSort**(): `void`

#### Returns

`void`

#### Defined in

[lib/table/table-scope.ts:840](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/table-scope.ts#L840)

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

#### Inherited from

[RenderScope](RenderScope.md).[recalcColumnWidths](RenderScope.md#recalccolumnwidths)

#### Defined in

[lib/table/render-scope.ts:236](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/render-scope.ts#L236)

___

### recalcWrappers

▸ **recalcWrappers**(): `void`

#### Returns

`void`

#### Defined in

[lib/table/table-scope.ts:834](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/table-scope.ts#L834)

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

#### Inherited from

[RenderScope](RenderScope.md).[renderContentOfDraggingColumn](RenderScope.md#rendercontentofdraggingcolumn)

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

#### Inherited from

[RenderScope](RenderScope.md).[renderContentOfDraggingColumnForArea](RenderScope.md#rendercontentofdraggingcolumnforarea)

#### Defined in

[lib/table/render-scope.ts:1226](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/render-scope.ts#L1226)

___

### repaint

▸ **repaint**(): `void`

Adjusts the content after scrolling and initiates a repaint of the component.

#### Returns

`void`

#### Inherited from

[RenderScope](RenderScope.md).[repaint](RenderScope.md#repaint)

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

#### Inherited from

[RenderScope](RenderScope.md).[repaintHard](RenderScope.md#repainthard)

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

#### Inherited from

[RenderScope](RenderScope.md).[rerenderCellContent](RenderScope.md#rerendercellcontent)

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

#### Inherited from

[RenderScope](RenderScope.md).[resetEditorRenderer](RenderScope.md#reseteditorrenderer)

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

[RenderScope](RenderScope.md).[resetSizeOfWrapperDiv](RenderScope.md#resetsizeofwrapperdiv)

#### Defined in

[lib/table/ele-scope.ts:302](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/ele-scope.ts#L302)

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

[lib/table/table-scope.ts:673](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/table-scope.ts#L673)

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

[lib/table/table-scope.ts:551](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/table-scope.ts#L551)

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

[lib/table/table-scope.ts:540](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/table-scope.ts#L540)

___

### selectionModel

▸ **selectionModel**(): `undefined` \| [`SelectionModelIf`](../interfaces/SelectionModelIf.md)

Retrieves the selection model.

#### Returns

`undefined` \| [`SelectionModelIf`](../interfaces/SelectionModelIf.md)

The selection model if available, otherwise undefined.

#### Defined in

[lib/table/table-scope.ts:618](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/table-scope.ts#L618)

___

### setColumnWidth

▸ **setColumnWidth**(`columnIndex`, `width`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `columnIndex` | `number` |
| `width` | `number` |

#### Returns

`void`

#### Defined in

[lib/table/table-scope.ts:821](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/table-scope.ts#L821)

___

### setDragging

▸ **setDragging**(`dragging`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `dragging` | `boolean` |

#### Returns

`void`

#### Defined in

[lib/table/table-scope.ts:637](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/table-scope.ts#L637)

___

### setSelectionModel

▸ **setSelectionModel**(`sm`, `rerender?`): `void`

Sets the selection model for the table.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `sm` | [`SelectionModel`](SelectionModel.md) | `undefined` | The selection model to be set. |
| `rerender` | `boolean` | `false` | Optional parameter indicating whether to rerender the table after setting the selection model. Default value is false. |

#### Returns

`void`

- This method does not return any value.

#### Defined in

[lib/table/table-scope.ts:565](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/table-scope.ts#L565)

___

### sort

▸ **sort**(`compareFn`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `compareFn` | (`a`: `any`, `b`: `any`) => `number` |

#### Returns

`void`

#### Defined in

[lib/table/table-scope.ts:845](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/table-scope.ts#L845)

___

### storeColumnWidths

▸ **storeColumnWidths**(): `void`

Stores the widths of all columns in the table.

#### Returns

`void`

**`Function`**

storeColumnWidths

#### Inherited from

[RenderScope](RenderScope.md).[storeColumnWidths](RenderScope.md#storecolumnwidths)

#### Defined in

[lib/table/render-scope.ts:402](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/render-scope.ts#L402)

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

[lib/table/table-scope.ts:414](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/table-scope.ts#L414)

___

### toggleHeaderGroup

▸ **toggleHeaderGroup**(`mouseTargetData`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mouseTargetData` | [`MouseTargetData`](MouseTargetData.md) |

#### Returns

`void`

#### Defined in

[lib/table/table-scope.ts:575](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/table-scope.ts#L575)

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

[lib/table/table-scope.ts:433](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/table-scope.ts#L433)

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

#### Inherited from

[RenderScope](RenderScope.md).[updateCells](RenderScope.md#updatecells)

#### Defined in

[lib/table/render-scope.ts:327](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/render-scope.ts#L327)

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

[lib/table/table-scope.ts:212](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/table-scope.ts#L212)

___

### create

▸ **create**(`hostElement`, `tableModel`, `tableOptions?`, `eventListener?`, `domService?`, `copyService?`): [`TableScope`](TableScope.md)

Creates a TableScope instance.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `hostElement` | `HTMLDivElement` | The HTML div element that will contain the table. |
| `tableModel` | [`TableModelIf`](../interfaces/TableModelIf.md) | The table model object. |
| `tableOptions?` | [`TableOptionsIf`](../interfaces/TableOptionsIf.md) | The optional table options object. |
| `eventListener?` | [`EventListenerIf`](../interfaces/EventListenerIf.md) | The optional event listener object. |
| `domService?` | [`DomServiceIf`](../interfaces/DomServiceIf.md) | The optional DOM service object. |
| `copyService?` | [`CopyServiceIf`](../interfaces/CopyServiceIf.md) | The optional copy service object. |

#### Returns

[`TableScope`](TableScope.md)

- The newly created TableScope instance.

#### Defined in

[lib/table/table-scope.ts:156](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/table-scope.ts#L156)
