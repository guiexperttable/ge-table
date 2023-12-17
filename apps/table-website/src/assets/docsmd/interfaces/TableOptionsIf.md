[@guiexpert/table](../README.md) / [Exports](../modules.md) / TableOptionsIf

# Interface: TableOptionsIf

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

## Implemented by

- [`TableOptions`](../classes/TableOptions.md)

## Table of contents

### Properties

- [autoRestoreOptions](TableOptionsIf.md#autorestoreoptions)
- [columnResizeHandleWidthInPx](TableOptionsIf.md#columnresizehandlewidthinpx)
- [columnsDraggable](TableOptionsIf.md#columnsdraggable)
- [columnsResizable](TableOptionsIf.md#columnsresizable)
- [defaultRowHeights](TableOptionsIf.md#defaultrowheights)
- [externalFilterFunction](TableOptionsIf.md#externalfilterfunction)
- [fixedEastSeparatorBorderVisible](TableOptionsIf.md#fixedeastseparatorbordervisible)
- [fixedWestSeparatorBorderVisible](TableOptionsIf.md#fixedwestseparatorbordervisible)
- [footerSeparatorBorderVisible](TableOptionsIf.md#footerseparatorbordervisible)
- [footerVerticalSeparator](TableOptionsIf.md#footerverticalseparator)
- [getEditRenderer](TableOptionsIf.md#geteditrenderer)
- [getFocusModel](TableOptionsIf.md#getfocusmodel)
- [getSelectionModel](TableOptionsIf.md#getselectionmodel)
- [headerSeparatorBorderVisible](TableOptionsIf.md#headerseparatorbordervisible)
- [headerToggleExpandCollapseIcons](TableOptionsIf.md#headertoggleexpandcollapseicons)
- [headerVerticalSeparator](TableOptionsIf.md#headerverticalseparator)
- [horizontalBorderVisible](TableOptionsIf.md#horizontalbordervisible)
- [hoverColumnVisible](TableOptionsIf.md#hovercolumnvisible)
- [hoverRowVisible](TableOptionsIf.md#hoverrowvisible)
- [overflowX](TableOptionsIf.md#overflowx)
- [overflowY](TableOptionsIf.md#overflowy)
- [shortcutActionIdMapping](TableOptionsIf.md#shortcutactionidmapping)
- [showCheckboxWihoutExtraColumn](TableOptionsIf.md#showcheckboxwihoutextracolumn)
- [sortOrder](TableOptionsIf.md#sortorder)
- [sortedOptions](TableOptionsIf.md#sortedoptions)
- [tableBottomBorderVisible](TableOptionsIf.md#tablebottombordervisible)
- [tableTopBorderVisible](TableOptionsIf.md#tabletopbordervisible)
- [treeOptions](TableOptionsIf.md#treeoptions)
- [verticalBorderVisible](TableOptionsIf.md#verticalbordervisible)

## Properties

### autoRestoreOptions

• `Optional` **autoRestoreOptions**: [`AutoRestoreOptionsIf`](AutoRestoreOptionsIf.md)\<`any`\>

#### Defined in

[lib/table/data/options/table-options.if.ts:208](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/options/table-options.if.ts#L208)

___

### columnResizeHandleWidthInPx

• **columnResizeHandleWidthInPx**: `number`

The width of the column resize handle in pixels.

#### Defined in

[lib/table/data/options/table-options.if.ts:142](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/options/table-options.if.ts#L142)

___

### columnsDraggable

• **columnsDraggable**: `boolean`

Flag indicating whether the columns are draggable.

#### Defined in

[lib/table/data/options/table-options.if.ts:136](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/options/table-options.if.ts#L136)

___

### columnsResizable

• **columnsResizable**: `boolean`

Represents whether the columns are resizable.

#### Defined in

[lib/table/data/options/table-options.if.ts:130](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/options/table-options.if.ts#L130)

___

### defaultRowHeights

• **defaultRowHeights**: [`DefaultRowHeightsIf`](DefaultRowHeightsIf.md)

Represents the default row heights (for header, body and footer) for a given table.

**`Description`**

An array of numbers representing the default height for each row in a table.

#### Defined in

[lib/table/data/options/table-options.if.ts:164](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/options/table-options.if.ts#L164)

___

### externalFilterFunction

• **externalFilterFunction**: `undefined` \| [`FilterFunction`](../modules.md#filterfunction)\<`any`\>

Represents the external filter function that will be used to filter the table rows.

#### Defined in

[lib/table/data/options/table-options.if.ts:192](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/options/table-options.if.ts#L192)

___

### fixedEastSeparatorBorderVisible

• **fixedEastSeparatorBorderVisible**: `boolean`

Determines whether the fixed east separator border is visible.

#### Defined in

[lib/table/data/options/table-options.if.ts:66](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/options/table-options.if.ts#L66)

___

### fixedWestSeparatorBorderVisible

• **fixedWestSeparatorBorderVisible**: `boolean`

Indicates whether the fixed west separator border should be visible.

#### Defined in

[lib/table/data/options/table-options.if.ts:72](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/options/table-options.if.ts#L72)

___

### footerSeparatorBorderVisible

• **footerSeparatorBorderVisible**: `boolean`

Indicates whether the footer separator border is visible or not.

#### Defined in

[lib/table/data/options/table-options.if.ts:60](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/options/table-options.if.ts#L60)

___

### footerVerticalSeparator

• **footerVerticalSeparator**: `boolean`

Indicates whether a vertical separator should be displayed in the footer.

#### Defined in

[lib/table/data/options/table-options.if.ts:156](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/options/table-options.if.ts#L156)

___

### getEditRenderer

• `Optional` **getEditRenderer**: [`GetEditRenderer`](../modules.md#geteditrenderer)

Retrieves the edit renderer for a specific action.

**`Function`**

**`Name`**

getEditRenderer

**`Param`**

The action for which to retrieve the edit renderer.

#### Defined in

[lib/table/data/options/table-options.if.ts:218](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/options/table-options.if.ts#L218)

___

### getFocusModel

• `Optional` **getFocusModel**: [`GetT`](../modules.md#gett)\<[`FocusModelIf`](FocusModelIf.md)\>

Retrieves the focus model of the component.

#### Defined in

[lib/table/data/options/table-options.if.ts:231](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/options/table-options.if.ts#L231)

___

### getSelectionModel

• `Optional` **getSelectionModel**: [`GetT`](../modules.md#gett)\<[`SelectionModelIf`](SelectionModelIf.md)\>

Retrieves the selection model for a specific object.

**`Param`**

The target object to retrieve the selection model from.

#### Defined in

[lib/table/data/options/table-options.if.ts:225](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/options/table-options.if.ts#L225)

___

### headerSeparatorBorderVisible

• **headerSeparatorBorderVisible**: `boolean`

Indicates whether the header separator border is visible.

#### Defined in

[lib/table/data/options/table-options.if.ts:54](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/options/table-options.if.ts#L54)

___

### headerToggleExpandCollapseIcons

• **headerToggleExpandCollapseIcons**: `boolean`

#### Defined in

[lib/table/data/options/table-options.if.ts:166](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/options/table-options.if.ts#L166)

___

### headerVerticalSeparator

• **headerVerticalSeparator**: `boolean`

Represents whether a vertical separator should be displayed in a header.

**`Since`**

1.0.0

#### Defined in

[lib/table/data/options/table-options.if.ts:150](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/options/table-options.if.ts#L150)

___

### horizontalBorderVisible

• **horizontalBorderVisible**: `boolean`

Represents the visibility of the horizontal border.

#### Defined in

[lib/table/data/options/table-options.if.ts:84](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/options/table-options.if.ts#L84)

___

### hoverColumnVisible

• **hoverColumnVisible**: `boolean`

Flag indicating whether the hover color of a column is visible or not in general.
If true, the column get the hover background color while the mouse is over the column.

#### Defined in

[lib/table/data/options/table-options.if.ts:124](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/options/table-options.if.ts#L124)

___

### hoverRowVisible

• **hoverRowVisible**: `boolean`

Flag indicating whether the hover color of a row is visible or not in general.
If true, the row get the hover background color while the mouse is over the row.

#### Defined in

[lib/table/data/options/table-options.if.ts:117](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/options/table-options.if.ts#L117)

___

### overflowX

• **overflowX**: ``"auto"`` \| ``"scroll"``

The value of the css `overflowX` determines the behavior of horizontal overflow for the table body (scroll port).

#### Defined in

[lib/table/data/options/table-options.if.ts:91](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/options/table-options.if.ts#L91)

___

### overflowY

• **overflowY**: ``"auto"`` \| ``"scroll"``

The value of the css `overflowX` determines the behavior of vertical overflow for the table body (scroll port).

#### Defined in

[lib/table/data/options/table-options.if.ts:97](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/options/table-options.if.ts#L97)

___

### shortcutActionIdMapping

• `Optional` **shortcutActionIdMapping**: [`ShortcutActionIdMapping`](../modules.md#shortcutactionidmapping)

Represents a mapping of shortcut action IDs.

#### Defined in

[lib/table/data/options/table-options.if.ts:240](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/options/table-options.if.ts#L240)

___

### showCheckboxWihoutExtraColumn

• **showCheckboxWihoutExtraColumn**: `boolean`

Indicates whether to show checkbox without an extra column.
If true and the row is checkable, a checkbox is rendered in the first column.
If false and the row is checkable, a checkbox is rendered in an extra column left to the first column.

#### Defined in

[lib/table/data/options/table-options.if.ts:185](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/options/table-options.if.ts#L185)

___

### sortOrder

• **sortOrder**: [`SortState`](../modules.md#sortstate)[]

Represents the sort order of the columns.

#### Defined in

[lib/table/data/options/table-options.if.ts:206](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/options/table-options.if.ts#L206)

___

### sortedOptions

• **sortedOptions**: [`SortedOptionsIf`](SortedOptionsIf.md)

Represents a sorted options object.

**`Classdesc`**

The SortedOptions represents a class that defines sorted icons, which will displayed in the header (if column is sortable).

#### Defined in

[lib/table/data/options/table-options.if.ts:200](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/options/table-options.if.ts#L200)

___

### tableBottomBorderVisible

• **tableBottomBorderVisible**: `boolean`

Specifies whether the bottom border of a table is visible.

#### Defined in

[lib/table/data/options/table-options.if.ts:110](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/options/table-options.if.ts#L110)

___

### tableTopBorderVisible

• **tableTopBorderVisible**: `boolean`

Indicates whether the top border of a table is visible or hidden.

#### Defined in

[lib/table/data/options/table-options.if.ts:104](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/options/table-options.if.ts#L104)

___

### treeOptions

• **treeOptions**: [`TreeOptionsIf`](TreeOptionsIf.md)

Represents the options for configuring a tree.

#### Defined in

[lib/table/data/options/table-options.if.ts:176](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/options/table-options.if.ts#L176)

___

### verticalBorderVisible

• **verticalBorderVisible**: `boolean`

Indicates whether the vertical border is visible.

#### Defined in

[lib/table/data/options/table-options.if.ts:78](https://github.com/guiexperttable/ge-table/blob/65066c0/libs/table/src/lib/table/data/options/table-options.if.ts#L78)
