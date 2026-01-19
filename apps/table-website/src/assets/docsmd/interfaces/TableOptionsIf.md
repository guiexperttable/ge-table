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
| headerGroupOptions               | Represents the options for expnded/collapsed icons of the header groups.                                                   |
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
- [headerGroupOptions](TableOptionsIf.md#headergroupoptions)
- [headerSeparatorBorderVisible](TableOptionsIf.md#headerseparatorbordervisible)
- [headerToggleExpandCollapseIcons](TableOptionsIf.md#headertoggleexpandcollapseicons)
- [headerVerticalSeparator](TableOptionsIf.md#headerverticalseparator)
- [horizontalBorderVisible](TableOptionsIf.md#horizontalbordervisible)
- [hoverColumnVisible](TableOptionsIf.md#hovercolumnvisible)
- [hoverRowVisible](TableOptionsIf.md#hoverrowvisible)
- [overflowX](TableOptionsIf.md#overflowx)
- [overflowY](TableOptionsIf.md#overflowy)
- [resizeEventDebounceDelay](TableOptionsIf.md#resizeeventdebouncedelay)
- [shortcutActionIdMapping](TableOptionsIf.md#shortcutactionidmapping)
- [shortcutActionsDisabled](TableOptionsIf.md#shortcutactionsdisabled)
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

[lib/table/data/options/table-options.if.ts:216](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/options/table-options.if.ts#L216)

___

### columnResizeHandleWidthInPx

• **columnResizeHandleWidthInPx**: `number`

The width of the column resize handle in pixels.

#### Defined in

[lib/table/data/options/table-options.if.ts:153](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/options/table-options.if.ts#L153)

___

### columnsDraggable

• **columnsDraggable**: `boolean`

Flag indicating whether the columns are draggable.

#### Defined in

[lib/table/data/options/table-options.if.ts:147](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/options/table-options.if.ts#L147)

___

### columnsResizable

• **columnsResizable**: `boolean`

Represents whether the columns are resizable.

#### Defined in

[lib/table/data/options/table-options.if.ts:141](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/options/table-options.if.ts#L141)

___

### defaultRowHeights

• **defaultRowHeights**: [`DefaultRowHeightsIf`](DefaultRowHeightsIf.md)

Represents the default row heights (for header, body and footer) for a given table.

**`Description`**

An array of numbers representing the default height for each row in a table.

#### Defined in

[lib/table/data/options/table-options.if.ts:175](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/options/table-options.if.ts#L175)

___

### externalFilterFunction

• **externalFilterFunction**: `undefined` \| [`FilterFunction`](../modules.md#filterfunction)\<`any`\>

Represents the external filter function that will be used to filter the table rows.

#### Defined in

[lib/table/data/options/table-options.if.ts:200](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/options/table-options.if.ts#L200)

___

### fixedEastSeparatorBorderVisible

• **fixedEastSeparatorBorderVisible**: `boolean`

Determines whether the fixed east separator border is visible.

#### Defined in

[lib/table/data/options/table-options.if.ts:77](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/options/table-options.if.ts#L77)

___

### fixedWestSeparatorBorderVisible

• **fixedWestSeparatorBorderVisible**: `boolean`

Indicates whether the fixed west separator border should be visible.

#### Defined in

[lib/table/data/options/table-options.if.ts:83](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/options/table-options.if.ts#L83)

___

### footerSeparatorBorderVisible

• **footerSeparatorBorderVisible**: `boolean`

Indicates whether the footer separator border is visible or not.

#### Defined in

[lib/table/data/options/table-options.if.ts:71](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/options/table-options.if.ts#L71)

___

### footerVerticalSeparator

• **footerVerticalSeparator**: `boolean`

Indicates whether a vertical separator should be displayed in the footer.

#### Defined in

[lib/table/data/options/table-options.if.ts:167](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/options/table-options.if.ts#L167)

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

[lib/table/data/options/table-options.if.ts:226](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/options/table-options.if.ts#L226)

___

### getFocusModel

• `Optional` **getFocusModel**: [`GetT`](../modules.md#gett)\<[`FocusModelIf`](FocusModelIf.md)\>

Retrieves the focus model of the component.

#### Defined in

[lib/table/data/options/table-options.if.ts:239](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/options/table-options.if.ts#L239)

___

### getSelectionModel

• `Optional` **getSelectionModel**: [`GetT`](../modules.md#gett)\<[`SelectionModelIf`](SelectionModelIf.md)\>

Retrieves the selection model for a specific object.

**`Param`**

The target object to retrieve the selection model from.

#### Defined in

[lib/table/data/options/table-options.if.ts:233](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/options/table-options.if.ts#L233)

___

### headerGroupOptions

• **headerGroupOptions**: `HeaderGroupOptionsIf`

#### Defined in

[lib/table/data/options/table-options.if.ts:184](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/options/table-options.if.ts#L184)

___

### headerSeparatorBorderVisible

• **headerSeparatorBorderVisible**: `boolean`

Indicates whether the header separator border is visible.

#### Defined in

[lib/table/data/options/table-options.if.ts:65](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/options/table-options.if.ts#L65)

___

### headerToggleExpandCollapseIcons

• **headerToggleExpandCollapseIcons**: `boolean`

#### Defined in

[lib/table/data/options/table-options.if.ts:177](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/options/table-options.if.ts#L177)

___

### headerVerticalSeparator

• **headerVerticalSeparator**: `boolean`

Represents whether a vertical separator should be displayed in a header.

**`Since`**

1.0.0

#### Defined in

[lib/table/data/options/table-options.if.ts:161](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/options/table-options.if.ts#L161)

___

### horizontalBorderVisible

• **horizontalBorderVisible**: `boolean`

Represents the visibility of the horizontal border.

#### Defined in

[lib/table/data/options/table-options.if.ts:95](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/options/table-options.if.ts#L95)

___

### hoverColumnVisible

• **hoverColumnVisible**: `boolean`

Flag indicating whether the hover color of a column is visible or not in general.
If true, the column get the hover background color while the mouse is over the column.

#### Defined in

[lib/table/data/options/table-options.if.ts:135](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/options/table-options.if.ts#L135)

___

### hoverRowVisible

• **hoverRowVisible**: `boolean`

Flag indicating whether the hover color of a row is visible or not in general.
If true, the row get the hover background color while the mouse is over the row.

#### Defined in

[lib/table/data/options/table-options.if.ts:128](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/options/table-options.if.ts#L128)

___

### overflowX

• **overflowX**: ``"auto"`` \| ``"scroll"``

The value of the css `overflowX` determines the behavior of horizontal overflow for the table body (scroll port).

#### Defined in

[lib/table/data/options/table-options.if.ts:102](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/options/table-options.if.ts#L102)

___

### overflowY

• **overflowY**: ``"auto"`` \| ``"scroll"``

The value of the css `overflowX` determines the behavior of vertical overflow for the table body (scroll port).

#### Defined in

[lib/table/data/options/table-options.if.ts:108](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/options/table-options.if.ts#L108)

___

### resizeEventDebounceDelay

• **resizeEventDebounceDelay**: `number`

The delay in milliseconds used for debouncing the resize event.

#### Defined in

[lib/table/data/options/table-options.if.ts:58](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/options/table-options.if.ts#L58)

___

### shortcutActionIdMapping

• `Optional` **shortcutActionIdMapping**: [`ShortcutActionIdMapping`](../modules.md#shortcutactionidmapping)

Represents a mapping of shortcut action IDs.

#### Defined in

[lib/table/data/options/table-options.if.ts:248](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/options/table-options.if.ts#L248)

___

### shortcutActionsDisabled

• **shortcutActionsDisabled**: `boolean`

#### Defined in

[lib/table/data/options/table-options.if.ts:250](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/options/table-options.if.ts#L250)

___

### showCheckboxWihoutExtraColumn

• **showCheckboxWihoutExtraColumn**: `boolean`

Indicates whether to show checkbox without an extra column.
If true and the row is checkable, a checkbox is rendered in the first column.
If false and the row is checkable, a checkbox is rendered in an extra column left to the first column.

#### Defined in

[lib/table/data/options/table-options.if.ts:193](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/options/table-options.if.ts#L193)

___

### sortOrder

• **sortOrder**: [`SortState`](../modules.md#sortstate)[]

Represents the sort order of the columns.

#### Defined in

[lib/table/data/options/table-options.if.ts:214](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/options/table-options.if.ts#L214)

___

### sortedOptions

• **sortedOptions**: [`SortedOptionsIf`](SortedOptionsIf.md)

Represents a sorted options object.

**`Classdesc`**

The SortedOptions represents a class that defines sorted icons, which will displayed in the header (if column is sortable).

#### Defined in

[lib/table/data/options/table-options.if.ts:208](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/options/table-options.if.ts#L208)

___

### tableBottomBorderVisible

• **tableBottomBorderVisible**: `boolean`

Specifies whether the bottom border of a table is visible.

#### Defined in

[lib/table/data/options/table-options.if.ts:121](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/options/table-options.if.ts#L121)

___

### tableTopBorderVisible

• **tableTopBorderVisible**: `boolean`

Indicates whether the top border of a table is visible or hidden.

#### Defined in

[lib/table/data/options/table-options.if.ts:115](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/options/table-options.if.ts#L115)

___

### treeOptions

• **treeOptions**: [`TreeOptionsIf`](TreeOptionsIf.md)

#### Defined in

[lib/table/data/options/table-options.if.ts:180](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/options/table-options.if.ts#L180)

___

### verticalBorderVisible

• **verticalBorderVisible**: `boolean`

Indicates whether the vertical border is visible.

#### Defined in

[lib/table/data/options/table-options.if.ts:89](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/data/options/table-options.if.ts#L89)
