[@guiexpert/table](../README.md) / [Exports](../modules.md) / TableOptions

# Class: TableOptions

## Implements

- [`TableOptionsIf`](../interfaces/TableOptionsIf.md)

## Table of contents

### Constructors

- [constructor](TableOptions.md#constructor)

### Properties

- [columnResizeHandleWidthInPx](TableOptions.md#columnresizehandlewidthinpx)
- [columnsDraggable](TableOptions.md#columnsdraggable)
- [columnsResizable](TableOptions.md#columnsresizable)
- [defaultRowHeights](TableOptions.md#defaultrowheights)
- [externalFilterFunction](TableOptions.md#externalfilterfunction)
- [fixedEastSeparatorBorderVisible](TableOptions.md#fixedeastseparatorbordervisible)
- [fixedWestSeparatorBorderVisible](TableOptions.md#fixedwestseparatorbordervisible)
- [footerSeparatorBorderVisible](TableOptions.md#footerseparatorbordervisible)
- [footerVerticalSeparator](TableOptions.md#footerverticalseparator)
- [getEditRenderer](TableOptions.md#geteditrenderer)
- [getFocusModel](TableOptions.md#getfocusmodel)
- [getSelectionModel](TableOptions.md#getselectionmodel)
- [headerSeparatorBorderVisible](TableOptions.md#headerseparatorbordervisible)
- [headerToggleExpandCollapseIcons](TableOptions.md#headertoggleexpandcollapseicons)
- [headerVerticalSeparator](TableOptions.md#headerverticalseparator)
- [horizontalBorderVisible](TableOptions.md#horizontalbordervisible)
- [hoverColumnVisible](TableOptions.md#hovercolumnvisible)
- [hoverRowVisible](TableOptions.md#hoverrowvisible)
- [overflowX](TableOptions.md#overflowx)
- [overflowY](TableOptions.md#overflowy)
- [shortcutActionIdMapping](TableOptions.md#shortcutactionidmapping)
- [showCheckboxWihoutExtraColumn](TableOptions.md#showcheckboxwihoutextracolumn)
- [sortOrder](TableOptions.md#sortorder)
- [sortedOptions](TableOptions.md#sortedoptions)
- [tableBottomBorderVisible](TableOptions.md#tablebottombordervisible)
- [tableTopBorderVisible](TableOptions.md#tabletopbordervisible)
- [treeOptions](TableOptions.md#treeoptions)
- [verticalBorderVisible](TableOptions.md#verticalbordervisible)

## Constructors

### constructor

• **new TableOptions**(): [`TableOptions`](TableOptions.md)

#### Returns

[`TableOptions`](TableOptions.md)

## Properties

### columnResizeHandleWidthInPx

• **columnResizeHandleWidthInPx**: `number` = `4`

#### Implementation of

[TableOptionsIf](../interfaces/TableOptionsIf.md).[columnResizeHandleWidthInPx](../interfaces/TableOptionsIf.md#columnresizehandlewidthinpx)

#### Defined in

[lib/table/data/options/table-options.ts:40](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/data/options/table-options.ts#L40)

___

### columnsDraggable

• **columnsDraggable**: `boolean` = `true`

#### Implementation of

[TableOptionsIf](../interfaces/TableOptionsIf.md).[columnsDraggable](../interfaces/TableOptionsIf.md#columnsdraggable)

#### Defined in

[lib/table/data/options/table-options.ts:39](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/data/options/table-options.ts#L39)

___

### columnsResizable

• **columnsResizable**: `boolean` = `true`

#### Implementation of

[TableOptionsIf](../interfaces/TableOptionsIf.md).[columnsResizable](../interfaces/TableOptionsIf.md#columnsresizable)

#### Defined in

[lib/table/data/options/table-options.ts:38](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/data/options/table-options.ts#L38)

___

### defaultRowHeights

• **defaultRowHeights**: [`DefaultRowHeightsIf`](../interfaces/DefaultRowHeightsIf.md)

#### Implementation of

[TableOptionsIf](../interfaces/TableOptionsIf.md).[defaultRowHeights](../interfaces/TableOptionsIf.md#defaultrowheights)

#### Defined in

[lib/table/data/options/table-options.ts:42](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/data/options/table-options.ts#L42)

___

### externalFilterFunction

• **externalFilterFunction**: `undefined` \| [`FilterFunction`](../modules.md#filterfunction)\<`any`\> = `undefined`

#### Implementation of

[TableOptionsIf](../interfaces/TableOptionsIf.md).[externalFilterFunction](../interfaces/TableOptionsIf.md#externalfilterfunction)

#### Defined in

[lib/table/data/options/table-options.ts:56](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/data/options/table-options.ts#L56)

___

### fixedEastSeparatorBorderVisible

• **fixedEastSeparatorBorderVisible**: `boolean` = `true`

#### Implementation of

[TableOptionsIf](../interfaces/TableOptionsIf.md).[fixedEastSeparatorBorderVisible](../interfaces/TableOptionsIf.md#fixedeastseparatorbordervisible)

#### Defined in

[lib/table/data/options/table-options.ts:28](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/data/options/table-options.ts#L28)

___

### fixedWestSeparatorBorderVisible

• **fixedWestSeparatorBorderVisible**: `boolean` = `true`

#### Implementation of

[TableOptionsIf](../interfaces/TableOptionsIf.md).[fixedWestSeparatorBorderVisible](../interfaces/TableOptionsIf.md#fixedwestseparatorbordervisible)

#### Defined in

[lib/table/data/options/table-options.ts:29](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/data/options/table-options.ts#L29)

___

### footerSeparatorBorderVisible

• **footerSeparatorBorderVisible**: `boolean` = `true`

#### Implementation of

[TableOptionsIf](../interfaces/TableOptionsIf.md).[footerSeparatorBorderVisible](../interfaces/TableOptionsIf.md#footerseparatorbordervisible)

#### Defined in

[lib/table/data/options/table-options.ts:26](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/data/options/table-options.ts#L26)

___

### footerVerticalSeparator

• **footerVerticalSeparator**: `boolean` = `false`

#### Implementation of

[TableOptionsIf](../interfaces/TableOptionsIf.md).[footerVerticalSeparator](../interfaces/TableOptionsIf.md#footerverticalseparator)

#### Defined in

[lib/table/data/options/table-options.ts:48](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/data/options/table-options.ts#L48)

___

### getEditRenderer

• `Optional` **getEditRenderer**: [`GetEditRenderer`](../modules.md#geteditrenderer)

#### Implementation of

[TableOptionsIf](../interfaces/TableOptionsIf.md).[getEditRenderer](../interfaces/TableOptionsIf.md#geteditrenderer)

#### Defined in

[lib/table/data/options/table-options.ts:61](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/data/options/table-options.ts#L61)

___

### getFocusModel

• `Optional` **getFocusModel**: [`GetT`](../modules.md#gett)\<[`FocusModelIf`](../interfaces/FocusModelIf.md)\>

#### Implementation of

[TableOptionsIf](../interfaces/TableOptionsIf.md).[getFocusModel](../interfaces/TableOptionsIf.md#getfocusmodel)

#### Defined in

[lib/table/data/options/table-options.ts:65](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/data/options/table-options.ts#L65)

___

### getSelectionModel

• `Optional` **getSelectionModel**: [`GetT`](../modules.md#gett)\<[`SelectionModelIf`](../interfaces/SelectionModelIf.md)\>

#### Implementation of

[TableOptionsIf](../interfaces/TableOptionsIf.md).[getSelectionModel](../interfaces/TableOptionsIf.md#getselectionmodel)

#### Defined in

[lib/table/data/options/table-options.ts:63](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/data/options/table-options.ts#L63)

___

### headerSeparatorBorderVisible

• **headerSeparatorBorderVisible**: `boolean` = `true`

#### Implementation of

[TableOptionsIf](../interfaces/TableOptionsIf.md).[headerSeparatorBorderVisible](../interfaces/TableOptionsIf.md#headerseparatorbordervisible)

#### Defined in

[lib/table/data/options/table-options.ts:27](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/data/options/table-options.ts#L27)

___

### headerToggleExpandCollapseIcons

• **headerToggleExpandCollapseIcons**: `boolean` = `false`

#### Implementation of

[TableOptionsIf](../interfaces/TableOptionsIf.md).[headerToggleExpandCollapseIcons](../interfaces/TableOptionsIf.md#headertoggleexpandcollapseicons)

#### Defined in

[lib/table/data/options/table-options.ts:50](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/data/options/table-options.ts#L50)

___

### headerVerticalSeparator

• **headerVerticalSeparator**: `boolean` = `false`

#### Implementation of

[TableOptionsIf](../interfaces/TableOptionsIf.md).[headerVerticalSeparator](../interfaces/TableOptionsIf.md#headerverticalseparator)

#### Defined in

[lib/table/data/options/table-options.ts:51](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/data/options/table-options.ts#L51)

___

### horizontalBorderVisible

• **horizontalBorderVisible**: `boolean` = `true`

#### Implementation of

[TableOptionsIf](../interfaces/TableOptionsIf.md).[horizontalBorderVisible](../interfaces/TableOptionsIf.md#horizontalbordervisible)

#### Defined in

[lib/table/data/options/table-options.ts:24](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/data/options/table-options.ts#L24)

___

### hoverColumnVisible

• **hoverColumnVisible**: `boolean` = `true`

#### Implementation of

[TableOptionsIf](../interfaces/TableOptionsIf.md).[hoverColumnVisible](../interfaces/TableOptionsIf.md#hovercolumnvisible)

#### Defined in

[lib/table/data/options/table-options.ts:37](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/data/options/table-options.ts#L37)

___

### hoverRowVisible

• **hoverRowVisible**: `boolean` = `true`

#### Implementation of

[TableOptionsIf](../interfaces/TableOptionsIf.md).[hoverRowVisible](../interfaces/TableOptionsIf.md#hoverrowvisible)

#### Defined in

[lib/table/data/options/table-options.ts:36](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/data/options/table-options.ts#L36)

___

### overflowX

• **overflowX**: ``"auto"`` \| ``"scroll"`` = `"auto"`

#### Implementation of

[TableOptionsIf](../interfaces/TableOptionsIf.md).[overflowX](../interfaces/TableOptionsIf.md#overflowx)

#### Defined in

[lib/table/data/options/table-options.ts:21](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/data/options/table-options.ts#L21)

___

### overflowY

• **overflowY**: ``"auto"`` \| ``"scroll"`` = `"auto"`

#### Implementation of

[TableOptionsIf](../interfaces/TableOptionsIf.md).[overflowY](../interfaces/TableOptionsIf.md#overflowy)

#### Defined in

[lib/table/data/options/table-options.ts:22](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/data/options/table-options.ts#L22)

___

### shortcutActionIdMapping

• `Optional` **shortcutActionIdMapping**: [`ShortcutActionIdMapping`](../modules.md#shortcutactionidmapping)

#### Implementation of

[TableOptionsIf](../interfaces/TableOptionsIf.md).[shortcutActionIdMapping](../interfaces/TableOptionsIf.md#shortcutactionidmapping)

#### Defined in

[lib/table/data/options/table-options.ts:59](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/data/options/table-options.ts#L59)

___

### showCheckboxWihoutExtraColumn

• **showCheckboxWihoutExtraColumn**: `boolean` = `false`

#### Implementation of

[TableOptionsIf](../interfaces/TableOptionsIf.md).[showCheckboxWihoutExtraColumn](../interfaces/TableOptionsIf.md#showcheckboxwihoutextracolumn)

#### Defined in

[lib/table/data/options/table-options.ts:54](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/data/options/table-options.ts#L54)

___

### sortOrder

• **sortOrder**: [`SortState`](../modules.md#sortstate)[]

#### Implementation of

[TableOptionsIf](../interfaces/TableOptionsIf.md).[sortOrder](../interfaces/TableOptionsIf.md#sortorder)

#### Defined in

[lib/table/data/options/table-options.ts:58](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/data/options/table-options.ts#L58)

___

### sortedOptions

• **sortedOptions**: [`SortedOptions`](SortedOptions.md)

#### Implementation of

[TableOptionsIf](../interfaces/TableOptionsIf.md).[sortedOptions](../interfaces/TableOptionsIf.md#sortedoptions)

#### Defined in

[lib/table/data/options/table-options.ts:57](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/data/options/table-options.ts#L57)

___

### tableBottomBorderVisible

• **tableBottomBorderVisible**: `boolean` = `true`

#### Implementation of

[TableOptionsIf](../interfaces/TableOptionsIf.md).[tableBottomBorderVisible](../interfaces/TableOptionsIf.md#tablebottombordervisible)

#### Defined in

[lib/table/data/options/table-options.ts:32](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/data/options/table-options.ts#L32)

___

### tableTopBorderVisible

• **tableTopBorderVisible**: `boolean` = `true`

#### Implementation of

[TableOptionsIf](../interfaces/TableOptionsIf.md).[tableTopBorderVisible](../interfaces/TableOptionsIf.md#tabletopbordervisible)

#### Defined in

[lib/table/data/options/table-options.ts:31](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/data/options/table-options.ts#L31)

___

### treeOptions

• **treeOptions**: [`TreeOptions`](TreeOptions.md)

#### Implementation of

[TableOptionsIf](../interfaces/TableOptionsIf.md).[treeOptions](../interfaces/TableOptionsIf.md#treeoptions)

#### Defined in

[lib/table/data/options/table-options.ts:53](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/data/options/table-options.ts#L53)

___

### verticalBorderVisible

• **verticalBorderVisible**: `boolean` = `true`

#### Implementation of

[TableOptionsIf](../interfaces/TableOptionsIf.md).[verticalBorderVisible](../interfaces/TableOptionsIf.md#verticalbordervisible)

#### Defined in

[lib/table/data/options/table-options.ts:25](https://github.com/guiexperttable/ge-table/blob/a7cb25d/libs/table/src/lib/table/data/options/table-options.ts#L25)
