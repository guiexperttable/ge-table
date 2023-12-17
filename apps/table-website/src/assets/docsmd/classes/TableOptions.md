[@guiexpert/table](../README.md) / [Exports](../modules.md) / TableOptions

# Class: TableOptions

Represents the options for configuring a table.

| Class Property                   | Description                                                                                   |
|----------------------------------|-----------------------------------------------------------------------------------------------|
| headerSeparatorBorderVisible     | Indicates whether the header separator border is visible.                                      |
| footerSeparatorBorderVisible     | Indicates whether the footer separator border is visible or not.                                |
| fixedEastSeparatorBorderVisible  | Determines whether the fixed east separator border is visible.                                  |
| fixedWestSeparatorBorderVisible  | Indicates whether the fixed west separator border should be visible.                            |
| verticalBorderVisible            | Indicates whether the vertical border is visible.                                               |
| horizontalBorderVisible          | Represents the visibility of the horizontal border.                                             |
| overflowX                        | Determines the behavior of horizontal overflow for the table body (scroll port).               |
| overflowY                        | Determines the behavior of vertical overflow for the table body (scroll port).                 |
| tableTopBorderVisible            | Indicates whether the top border of a table is visible or hidden.                                |
| tableBottomBorderVisible         | Specifies whether the bottom border of a table is visible.                                       |
| hoverRowVisible                  | Flag indicating whether the hover color of a row is visible or not in general.                  |
| hoverColumnVisible               | Flag indicating whether the hover color of a column is visible or not in general.               |
| columnsResizable                 | Represents whether the columns are resizable.                                                    |
| columnsDraggable                 | Flag indicating whether the columns are draggable.                                               |
| columnResizeHandleWidthInPx      | The width of the column resize handle in pixels.                                                 |
| headerVerticalSeparator          | Represents whether a vertical separator should be displayed in a header.                        |
| footerVerticalSeparator          | Indicates whether a vertical separator should be displayed in the footer.                       |
| defaultRowHeights                | Represents the default row heights for a given table.                                            |
| headerToggleExpandCollapseIcons  | Indicates whether to show toggle icons in the header.                                            |
| treeOptions                      | Represents the options for configuring a tree.                                                   |
| showCheckboxWihoutExtraColumn    | Indicates whether to show checkbox without an extra column.                                       |
| externalFilterFunction           | Represents the external filter function used to filter table rows.                                |
| sortedOptions                    | Represents a sorted options object.                                                              |
| sortOrder                        | Represents the sort order of the columns.                                                        |
| autoRestoreOptions               | Represents auto restoration options.                                                             |
| getEditRenderer                  | Retrieves the edit renderer for a specific action.                                                |
| getSelectionModel                | Retrieves the selection model for a specific object.                                              |
| getFocusModel                    | Retrieves the focus model of the component.                                                       |
| shortcutActionIdMapping          | Represents a mapping of shortcut action IDs.                                                     |

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

The width of the column resize handle in pixels.

#### Implementation of

[TableOptionsIf](../interfaces/TableOptionsIf.md).[columnResizeHandleWidthInPx](../interfaces/TableOptionsIf.md#columnresizehandlewidthinpx)

#### Defined in

[lib/table/data/options/table-options.ts:40](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/options/table-options.ts#L40)

___

### columnsDraggable

• **columnsDraggable**: `boolean` = `true`

Flag indicating whether the columns are draggable.

#### Implementation of

[TableOptionsIf](../interfaces/TableOptionsIf.md).[columnsDraggable](../interfaces/TableOptionsIf.md#columnsdraggable)

#### Defined in

[lib/table/data/options/table-options.ts:39](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/options/table-options.ts#L39)

___

### columnsResizable

• **columnsResizable**: `boolean` = `true`

Represents whether the columns are resizable.

#### Implementation of

[TableOptionsIf](../interfaces/TableOptionsIf.md).[columnsResizable](../interfaces/TableOptionsIf.md#columnsresizable)

#### Defined in

[lib/table/data/options/table-options.ts:38](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/options/table-options.ts#L38)

___

### defaultRowHeights

• **defaultRowHeights**: [`DefaultRowHeightsIf`](../interfaces/DefaultRowHeightsIf.md)

Represents the default row heights (for header, body and footer) for a given table.

**`Description`**

An array of numbers representing the default height for each row in a table.

#### Implementation of

[TableOptionsIf](../interfaces/TableOptionsIf.md).[defaultRowHeights](../interfaces/TableOptionsIf.md#defaultrowheights)

#### Defined in

[lib/table/data/options/table-options.ts:42](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/options/table-options.ts#L42)

___

### externalFilterFunction

• **externalFilterFunction**: `undefined` \| [`FilterFunction`](../modules.md#filterfunction)\<`any`\> = `undefined`

Represents the external filter function that will be used to filter the table rows.

#### Implementation of

[TableOptionsIf](../interfaces/TableOptionsIf.md).[externalFilterFunction](../interfaces/TableOptionsIf.md#externalfilterfunction)

#### Defined in

[lib/table/data/options/table-options.ts:56](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/options/table-options.ts#L56)

___

### fixedEastSeparatorBorderVisible

• **fixedEastSeparatorBorderVisible**: `boolean` = `true`

Determines whether the fixed east separator border is visible.

#### Implementation of

[TableOptionsIf](../interfaces/TableOptionsIf.md).[fixedEastSeparatorBorderVisible](../interfaces/TableOptionsIf.md#fixedeastseparatorbordervisible)

#### Defined in

[lib/table/data/options/table-options.ts:28](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/options/table-options.ts#L28)

___

### fixedWestSeparatorBorderVisible

• **fixedWestSeparatorBorderVisible**: `boolean` = `true`

Indicates whether the fixed west separator border should be visible.

#### Implementation of

[TableOptionsIf](../interfaces/TableOptionsIf.md).[fixedWestSeparatorBorderVisible](../interfaces/TableOptionsIf.md#fixedwestseparatorbordervisible)

#### Defined in

[lib/table/data/options/table-options.ts:29](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/options/table-options.ts#L29)

___

### footerSeparatorBorderVisible

• **footerSeparatorBorderVisible**: `boolean` = `true`

Indicates whether the footer separator border is visible or not.

#### Implementation of

[TableOptionsIf](../interfaces/TableOptionsIf.md).[footerSeparatorBorderVisible](../interfaces/TableOptionsIf.md#footerseparatorbordervisible)

#### Defined in

[lib/table/data/options/table-options.ts:26](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/options/table-options.ts#L26)

___

### footerVerticalSeparator

• **footerVerticalSeparator**: `boolean` = `false`

Indicates whether a vertical separator should be displayed in the footer.

#### Implementation of

[TableOptionsIf](../interfaces/TableOptionsIf.md).[footerVerticalSeparator](../interfaces/TableOptionsIf.md#footerverticalseparator)

#### Defined in

[lib/table/data/options/table-options.ts:48](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/options/table-options.ts#L48)

___

### getEditRenderer

• `Optional` **getEditRenderer**: [`GetEditRenderer`](../modules.md#geteditrenderer)

Retrieves the edit renderer for a specific action.

**`Function`**

**`Name`**

getEditRenderer

**`Param`**

The action for which to retrieve the edit renderer.

#### Implementation of

[TableOptionsIf](../interfaces/TableOptionsIf.md).[getEditRenderer](../interfaces/TableOptionsIf.md#geteditrenderer)

#### Defined in

[lib/table/data/options/table-options.ts:61](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/options/table-options.ts#L61)

___

### getFocusModel

• `Optional` **getFocusModel**: [`GetT`](../modules.md#gett)\<[`FocusModelIf`](../interfaces/FocusModelIf.md)\>

Retrieves the focus model of the component.

#### Implementation of

[TableOptionsIf](../interfaces/TableOptionsIf.md).[getFocusModel](../interfaces/TableOptionsIf.md#getfocusmodel)

#### Defined in

[lib/table/data/options/table-options.ts:65](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/options/table-options.ts#L65)

___

### getSelectionModel

• `Optional` **getSelectionModel**: [`GetT`](../modules.md#gett)\<[`SelectionModelIf`](../interfaces/SelectionModelIf.md)\>

Retrieves the selection model for a specific object.

**`Param`**

The target object to retrieve the selection model from.

#### Implementation of

[TableOptionsIf](../interfaces/TableOptionsIf.md).[getSelectionModel](../interfaces/TableOptionsIf.md#getselectionmodel)

#### Defined in

[lib/table/data/options/table-options.ts:63](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/options/table-options.ts#L63)

___

### headerSeparatorBorderVisible

• **headerSeparatorBorderVisible**: `boolean` = `true`

Indicates whether the header separator border is visible.

#### Implementation of

[TableOptionsIf](../interfaces/TableOptionsIf.md).[headerSeparatorBorderVisible](../interfaces/TableOptionsIf.md#headerseparatorbordervisible)

#### Defined in

[lib/table/data/options/table-options.ts:27](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/options/table-options.ts#L27)

___

### headerToggleExpandCollapseIcons

• **headerToggleExpandCollapseIcons**: `boolean` = `false`

#### Implementation of

[TableOptionsIf](../interfaces/TableOptionsIf.md).[headerToggleExpandCollapseIcons](../interfaces/TableOptionsIf.md#headertoggleexpandcollapseicons)

#### Defined in

[lib/table/data/options/table-options.ts:50](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/options/table-options.ts#L50)

___

### headerVerticalSeparator

• **headerVerticalSeparator**: `boolean` = `false`

Represents whether a vertical separator should be displayed in a header.

**`Since`**

1.0.0

#### Implementation of

[TableOptionsIf](../interfaces/TableOptionsIf.md).[headerVerticalSeparator](../interfaces/TableOptionsIf.md#headerverticalseparator)

#### Defined in

[lib/table/data/options/table-options.ts:51](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/options/table-options.ts#L51)

___

### horizontalBorderVisible

• **horizontalBorderVisible**: `boolean` = `true`

Represents the visibility of the horizontal border.

#### Implementation of

[TableOptionsIf](../interfaces/TableOptionsIf.md).[horizontalBorderVisible](../interfaces/TableOptionsIf.md#horizontalbordervisible)

#### Defined in

[lib/table/data/options/table-options.ts:24](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/options/table-options.ts#L24)

___

### hoverColumnVisible

• **hoverColumnVisible**: `boolean` = `true`

Flag indicating whether the hover color of a column is visible or not in general.
If true, the column get the hover background color while the mouse is over the column.

#### Implementation of

[TableOptionsIf](../interfaces/TableOptionsIf.md).[hoverColumnVisible](../interfaces/TableOptionsIf.md#hovercolumnvisible)

#### Defined in

[lib/table/data/options/table-options.ts:37](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/options/table-options.ts#L37)

___

### hoverRowVisible

• **hoverRowVisible**: `boolean` = `true`

Flag indicating whether the hover color of a row is visible or not in general.
If true, the row get the hover background color while the mouse is over the row.

#### Implementation of

[TableOptionsIf](../interfaces/TableOptionsIf.md).[hoverRowVisible](../interfaces/TableOptionsIf.md#hoverrowvisible)

#### Defined in

[lib/table/data/options/table-options.ts:36](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/options/table-options.ts#L36)

___

### overflowX

• **overflowX**: ``"auto"`` \| ``"scroll"`` = `"auto"`

The value of the css `overflowX` determines the behavior of horizontal overflow for the table body (scroll port).

#### Implementation of

[TableOptionsIf](../interfaces/TableOptionsIf.md).[overflowX](../interfaces/TableOptionsIf.md#overflowx)

#### Defined in

[lib/table/data/options/table-options.ts:21](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/options/table-options.ts#L21)

___

### overflowY

• **overflowY**: ``"auto"`` \| ``"scroll"`` = `"auto"`

The value of the css `overflowX` determines the behavior of vertical overflow for the table body (scroll port).

#### Implementation of

[TableOptionsIf](../interfaces/TableOptionsIf.md).[overflowY](../interfaces/TableOptionsIf.md#overflowy)

#### Defined in

[lib/table/data/options/table-options.ts:22](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/options/table-options.ts#L22)

___

### shortcutActionIdMapping

• `Optional` **shortcutActionIdMapping**: [`ShortcutActionIdMapping`](../modules.md#shortcutactionidmapping)

Represents a mapping of shortcut action IDs.

#### Implementation of

[TableOptionsIf](../interfaces/TableOptionsIf.md).[shortcutActionIdMapping](../interfaces/TableOptionsIf.md#shortcutactionidmapping)

#### Defined in

[lib/table/data/options/table-options.ts:59](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/options/table-options.ts#L59)

___

### showCheckboxWihoutExtraColumn

• **showCheckboxWihoutExtraColumn**: `boolean` = `false`

Indicates whether to show checkbox without an extra column.
If true and the row is checkable, a checkbox is rendered in the first column.
If false and the row is checkable, a checkbox is rendered in an extra column left to the first column.

#### Implementation of

[TableOptionsIf](../interfaces/TableOptionsIf.md).[showCheckboxWihoutExtraColumn](../interfaces/TableOptionsIf.md#showcheckboxwihoutextracolumn)

#### Defined in

[lib/table/data/options/table-options.ts:54](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/options/table-options.ts#L54)

___

### sortOrder

• **sortOrder**: [`SortState`](../modules.md#sortstate)[]

Represents the sort order of the columns.

#### Implementation of

[TableOptionsIf](../interfaces/TableOptionsIf.md).[sortOrder](../interfaces/TableOptionsIf.md#sortorder)

#### Defined in

[lib/table/data/options/table-options.ts:58](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/options/table-options.ts#L58)

___

### sortedOptions

• **sortedOptions**: [`SortedOptions`](SortedOptions.md)

Represents a sorted options object.

**`Classdesc`**

The SortedOptions represents a class that defines sorted icons, which will displayed in the header (if column is sortable).

#### Implementation of

[TableOptionsIf](../interfaces/TableOptionsIf.md).[sortedOptions](../interfaces/TableOptionsIf.md#sortedoptions)

#### Defined in

[lib/table/data/options/table-options.ts:57](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/options/table-options.ts#L57)

___

### tableBottomBorderVisible

• **tableBottomBorderVisible**: `boolean` = `true`

Specifies whether the bottom border of a table is visible.

#### Implementation of

[TableOptionsIf](../interfaces/TableOptionsIf.md).[tableBottomBorderVisible](../interfaces/TableOptionsIf.md#tablebottombordervisible)

#### Defined in

[lib/table/data/options/table-options.ts:32](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/options/table-options.ts#L32)

___

### tableTopBorderVisible

• **tableTopBorderVisible**: `boolean` = `true`

Indicates whether the top border of a table is visible or hidden.

#### Implementation of

[TableOptionsIf](../interfaces/TableOptionsIf.md).[tableTopBorderVisible](../interfaces/TableOptionsIf.md#tabletopbordervisible)

#### Defined in

[lib/table/data/options/table-options.ts:31](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/options/table-options.ts#L31)

___

### treeOptions

• **treeOptions**: [`TreeOptions`](TreeOptions.md)

Represents the options for configuring a tree.

#### Implementation of

[TableOptionsIf](../interfaces/TableOptionsIf.md).[treeOptions](../interfaces/TableOptionsIf.md#treeoptions)

#### Defined in

[lib/table/data/options/table-options.ts:53](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/options/table-options.ts#L53)

___

### verticalBorderVisible

• **verticalBorderVisible**: `boolean` = `true`

Indicates whether the vertical border is visible.

#### Implementation of

[TableOptionsIf](../interfaces/TableOptionsIf.md).[verticalBorderVisible](../interfaces/TableOptionsIf.md#verticalbordervisible)

#### Defined in

[lib/table/data/options/table-options.ts:25](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/options/table-options.ts#L25)
