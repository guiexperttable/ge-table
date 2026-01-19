[@guiexpert/table](../README.md) / [Exports](../modules.md) / TableApi

# Class: TableApi

The TableApi class provides a set of methods to interact with a table's functionality.
It enables actions such as updating cells, scrolling, managing visibility, handling selection,
copying to the clipboard, downloading data, and triggering specific actions programmatically.

## Table of contents

### Constructors

- [constructor](TableApi.md#constructor)

### Properties

- [tableScope](TableApi.md#tablescope)

### Methods

- [addRows](TableApi.md#addrows)
- [addRowsAt](TableApi.md#addrowsat)
- [autoResizeColumns](TableApi.md#autoresizecolumns)
- [clearSelection](TableApi.md#clearselection)
- [copyToClipboard](TableApi.md#copytoclipboard)
- [downloadExcel](TableApi.md#downloadexcel)
- [ensureRowIsVisible](TableApi.md#ensurerowisvisible)
- [externalFilterChanged](TableApi.md#externalfilterchanged)
- [findRowFromAllRowsByAllCriteria](TableApi.md#findrowfromallrowsbyallcriteria)
- [findRowFromFilteredRowsByAllCriteria](TableApi.md#findrowfromfilteredrowsbyallcriteria)
- [findRows](TableApi.md#findrows)
- [getBodyModel](TableApi.md#getbodymodel)
- [getDisplayedRowCount](TableApi.md#getdisplayedrowcount)
- [getFirstVisibleRowIndex](TableApi.md#getfirstvisiblerowindex)
- [getSelectionModel](TableApi.md#getselectionmodel)
- [getShortcutActionMapping](TableApi.md#getshortcutactionmapping)
- [getTableModel](TableApi.md#gettablemodel)
- [getTableScope](TableApi.md#gettablescope)
- [isColumnVisible](TableApi.md#iscolumnvisible)
- [isFooterVisible](TableApi.md#isfootervisible)
- [isHeaderVisible](TableApi.md#isheadervisible)
- [reSort](TableApi.md#resort)
- [recalcColumnWidths](TableApi.md#recalccolumnwidths)
- [recalcWrappers](TableApi.md#recalcwrappers)
- [removeRows](TableApi.md#removerows)
- [repaint](TableApi.md#repaint)
- [repaintHard](TableApi.md#repainthard)
- [scrollToIndex](TableApi.md#scrolltoindex)
- [scrollToPixel](TableApi.md#scrolltopixel)
- [setColumnVisible](TableApi.md#setcolumnvisible)
- [setColumnWidth](TableApi.md#setcolumnwidth)
- [setFooterVisible](TableApi.md#setfootervisible)
- [setHeaderVisible](TableApi.md#setheadervisible)
- [setRows](TableApi.md#setrows)
- [setSelectionModel](TableApi.md#setselectionmodel)
- [sort](TableApi.md#sort)
- [triggerAction](TableApi.md#triggeraction)
- [updateCells](TableApi.md#updatecells)
- [updateRows](TableApi.md#updaterows)

## Constructors

### constructor

• **new TableApi**(`tableScope`): [`TableApi`](TableApi.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `tableScope` | [`TableScope`](TableScope.md) |

#### Returns

[`TableApi`](TableApi.md)

#### Defined in

[lib/table/table-api.ts:22](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/table-api.ts#L22)

## Properties

### tableScope

• `Readonly` **tableScope**: [`TableScope`](TableScope.md)

#### Defined in

[lib/table/table-api.ts:23](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/table-api.ts#L23)

## Methods

### addRows

▸ **addRows**\<`T`\>(`rows`): `void`

Adds new rows to the end of the table body.

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | The type of elements in the rows array |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rows` | `T`[] | An array of data objects to append to the table's existing rows |

#### Returns

`void`

- This method doesn't return anything.

**`Description`**

This method appends the provided array of data objects to the end of the existing rows in the table body.
It only works with tables that use AreaModelObjectArray as their body model.

**`Throws`**

Logs a console warning if the table's body model is not an AreaModelObjectArray

#### Defined in

[lib/table/table-api.ts:380](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/table-api.ts#L380)

___

### addRowsAt

▸ **addRowsAt**\<`T`\>(`rows`, `rowIndex`): `void`

Inserts new rows at a specific position in the table body.

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | The type of elements in the rows array |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rows` | `T`[] | An array of data objects to insert into the table |
| `rowIndex` | `number` | The index position where the new rows should be inserted |

#### Returns

`void`

- This method doesn't return anything.

**`Description`**

This method inserts the provided array of data objects at the specified index position in the table body.
Existing rows at or after the specified index will be shifted down.
It only works with tables that use AreaModelObjectArray as their body model.

**`Throws`**

Logs a console warning if the table's body model is not an AreaModelObjectArray

#### Defined in

[lib/table/table-api.ts:407](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/table-api.ts#L407)

___

### autoResizeColumns

▸ **autoResizeColumns**(`recalcWrappers?`): `void`

Automatically resizes all columns to fit their content.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `recalcWrappers` | `boolean` | `true` | Determines whether to recalculate wrapper dimensions after resizing columns. Default value is true. |

#### Returns

`void`

- This method doesn't return anything.

#### Defined in

[lib/table/table-api.ts:292](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/table-api.ts#L292)

___

### clearSelection

▸ **clearSelection**(): `void`

Clears the current selection of the table.
The table will be rendered automatically.

#### Returns

`void`

#### Defined in

[lib/table/table-api.ts:182](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/table-api.ts#L182)

___

### copyToClipboard

▸ **copyToClipboard**(): `Promise`\<`string`\>

Copies the selected data from the table to the clipboard.

#### Returns

`Promise`\<`string`\>

- A promise that resolves with the copied data as a string.

#### Defined in

[lib/table/table-api.ts:227](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/table-api.ts#L227)

___

### downloadExcel

▸ **downloadExcel**(`fileName?`, `author?`): `void`

Generates and downloads an Excel file based on the table data.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `fileName` | `string` | `'table.xlsx'` | The name of the Excel file to be downloaded. Defaults to 'table.xlsx'. |
| `author` | `string` | `''` | The author of the Excel file. If not provided, it will remain empty. |

#### Returns

`void`

No return value. Initiates a file download of the Excel document.

#### Defined in

[lib/table/table-api.ts:242](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/table-api.ts#L242)

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
tableApi.ensureRowIsVisible(5);
```

**`Example`**

```ts
// Example usage in a component
class MyTableComponent {
  private tableApi: TableApi;

  scrollToSpecificRow(rowIndex: number) {
    // This will scroll the row into view if it's not visible
    const didScroll = this.tableApi.ensureRowIsVisible(rowIndex);

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
    this.tableApi.ensureRowIsVisible(rowIndex);

    // Then perform selection
    this.selectionModel.selectRow(rowIndex);
  }
}
```

**`Throws`**

Implicitly may throw if rowIndex is not a number or if required properties are undefined

**`See`**

 - [scrollToIndex](TableApi.md#scrolltoindex) - The underlying method used for scrolling
 - [getDisplayedRowCount](TableApi.md#getdisplayedrowcount) - Related method for getting visible row count

#### Defined in

[lib/table/table-api.ts:763](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/table-api.ts#L763)

___

### externalFilterChanged

▸ **externalFilterChanged**(): `void`

Notifies that the external filter has changed.

#### Returns

`void`

#### Defined in

[lib/table/table-api.ts:48](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/table-api.ts#L48)

___

### findRowFromAllRowsByAllCriteria

▸ **findRowFromAllRowsByAllCriteria**\<`T`\>(`criteria`, `predicate`): `undefined` \| `T`

Searches through all rows in the table's body model to find a row that matches specified criteria.
This method works only with AreaModelObjectArray<T> body models.

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | The type of objects/rows in the table |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `criteria` | `Partial`\<`T`\> | A partial object containing the search criteria. Only needs to include the properties you want to match against. |
| `predicate` | (`criteria`: `Partial`\<`T`\>, `row`: `T`) => `boolean` | A function that defines how to match rows against the criteria. Returns true if the row matches the criteria, false otherwise. |

#### Returns

`undefined` \| `T`

The first matching row, or undefined if no match is found or if the body model is not AreaModelObjectArray.

**`Example`**

```ts
// Find a user row by id and name
const criteria = { id: 1, name: "John" };
const user = tableApi.findRowFromAllRowsByAllCriteria(criteria, 
  (criteria, row) => row.id === criteria.id && row.name === criteria.name
);
```

**`Example`**

```ts
// Find a product row with partial match on name
const criteria = { name: "Phone" };
const product = tableApi.findRowFromAllRowsByAllCriteria(criteria,
  (criteria, row) => row.name.includes(criteria.name)
);
```

**`Example`**

```ts
// Find an order with complex matching logic
const criteria = { total: 100, status: "pending" };
const order = tableApi.findRowFromAllRowsByAllCriteria(criteria,
  (criteria, row) => {
    return row.total > criteria.total && 
           row.status === criteria.status &&
           row.items.length > 0;
  }
);
```

**`Throws`**

Logs a warning to console if the body model is not an instance of AreaModelObjectArray

#### Defined in

[lib/table/table-api.ts:597](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/table-api.ts#L597)

___

### findRowFromFilteredRowsByAllCriteria

▸ **findRowFromFilteredRowsByAllCriteria**\<`T`\>(`criteria`, `predicate`): `undefined` \| `T`

Searches through the filtered rows of the table to find a row that matches specific criteria.
This method only works with tables that use AreaModelObjectArray as their body model.

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | The type of the row objects in the table |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `criteria` | `Partial`\<`T`\> | A partial object containing the search criteria. Only needs to include the properties you want to match against. |
| `predicate` | (`criteria`: `Partial`\<`T`\>, `row`: `T`) => `boolean` | A function that defines how to match rows against the criteria. Returns true if the row matches the criteria, false otherwise. |

#### Returns

`undefined` \| `T`

The first matching row from the filtered rows, or undefined if no match is found
                        or if the body model is not an instance of AreaModelObjectArray.

**`Example`**

```typescript
interface Person {
  id: number;
  name: string;
  age: number;
}

// Find a person by exact match
const criteria = { name: "John", age: 30 };
const person = tableApi.findRowFromFilteredRowsByAllCriteria<Person>(
  criteria,
  (criteria, row) => row.name === criteria.name && row.age === criteria.age
);

// Find a person by partial name match
const searchCriteria = { name: "Jo" };
const person2 = tableApi.findRowFromFilteredRowsByAllCriteria<Person>(
  searchCriteria,
  (criteria, row) => row.name.toLowerCase().includes(criteria.name!.toLowerCase())
);

// Find a person within age range
const ageCriteria = { minAge: 25, maxAge: 35 };
const person3 = tableApi.findRowFromFilteredRowsByAllCriteria<Person>(
  ageCriteria,
  (criteria, row) => row.age >= criteria.minAge! && row.age <= criteria.maxAge!
);
```

**`Throws`**

Logs a warning to console if the body model is not an instance of AreaModelObjectArray

**`Remarks`**

- This method only searches through filtered rows (rows that are currently visible in the table)
- If you need to search through all rows (including filtered out ones), use findRowFromAllRowsByAllCriteria instead
- The predicate function gives you full control over how to match rows against your criteria
- Returns undefined if either no match is found or if the table's body model is not compatible

#### Defined in

[lib/table/table-api.ts:543](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/table-api.ts#L543)

___

### findRows

▸ **findRows**\<`T`\>(`rows`, `predicate?`): `T`[]

Searches for and returns rows from the table body that match the given criteria.

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | The type of elements in the rows array |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rows` | `T`[] | An array of rows to search for in the table body |
| `predicate` | (`a`: `T`, `b`: `T`) => `boolean` | A comparison function that determines if two rows match - Default predicate uses strict equality (===) - The function should return true if the rows are considered a match - Parameters: - a: The row from the table body being checked - b: The row from the input array being searched for |

#### Returns

`T`[]

An array containing all matching rows found in the table body
  - Returns an empty array if:
    - The body model is not an instance of AreaModelObjectArray
    - No matches are found

**`Description`**

This method searches through the table body model for rows that match the provided criteria.
It only works with tables that use AreaModelObjectArray as their body model.
The method uses a predicate function to determine matches between rows.

**`Example`**

```ts
// Find rows with simple equality comparison
const matchingRows = table.findRows([row1, row2]);
```

**`Example`**

```ts
// Find rows with custom comparison logic
const matchingRows = table.findRows([row1, row2], (a, b) => a.id === b.id);
```

**`Throws`**

Logs a console warning if the table's body model is not an AreaModelObjectArray

#### Defined in

[lib/table/table-api.ts:479](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/table-api.ts#L479)

___

### getBodyModel

▸ **getBodyModel**(): [`AreaModelIf`](../interfaces/AreaModelIf.md)

Retrieves the area model for the body section of the table.

#### Returns

[`AreaModelIf`](../interfaces/AreaModelIf.md)

The area model interface that provides access to the table's body data,
                      including rows, cells, and their values.

#### Defined in

[lib/table/table-api.ts:337](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/table-api.ts#L337)

___

### getDisplayedRowCount

▸ **getDisplayedRowCount**(): `number`

Retrieves the number of rows currently displayed in the table.

#### Returns

`number`

The number of rows currently displayed in the table.

**`Description`**

This method returns the count of rows that are currently visible in the table after
applying any filtering, pagination, or other visibility constraints.

#### Defined in

[lib/table/table-api.ts:776](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/table-api.ts#L776)

___

### getFirstVisibleRowIndex

▸ **getFirstVisibleRowIndex**(): `number`

Returns the index of the first visible row in the table's viewport.

This method retrieves the first visible row index from the table's scope, which is useful
for virtual scrolling and viewport-related calculations. The index represents the topmost
visible row in the current scroll position of the table.

This value is maintained internally by the table and updated during scrolling operations.
It's particularly important for:
- Virtual scrolling optimization
- Calculating visible range of rows
- Viewport-related operations
- Scroll position restoration

#### Returns

`number`

The index of the first visible row in the table's viewport.
                  Returns -1 if no rows are visible or if the table is not yet rendered.

**`Example`**

```typescript
// Get the first visible row index
const tableApi = new TableApi(tableScope);
const firstVisibleIndex = tableApi.getFirstVisibleRowIndex();

// Use the index for scroll position calculations
if (firstVisibleIndex >= 0) {
  // Perform operations with the first visible row
  console.log(`First visible row index: ${firstVisibleIndex}`);
}
```

#### Defined in

[lib/table/table-api.ts:811](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/table-api.ts#L811)

___

### getSelectionModel

▸ **getSelectionModel**(): `undefined` \| [`SelectionModelIf`](../interfaces/SelectionModelIf.md)

Retrieves the selection model of the table.

#### Returns

`undefined` \| [`SelectionModelIf`](../interfaces/SelectionModelIf.md)

The selection model of the table,
or undefined if no selection model is available.

#### Defined in

[lib/table/table-api.ts:279](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/table-api.ts#L279)

___

### getShortcutActionMapping

▸ **getShortcutActionMapping**(): [`ShortcutActionIdMapping`](../modules.md#shortcutactionidmapping)

Retrieves the mapping of shortcuts to corresponding action in the current table scope.

#### Returns

[`ShortcutActionIdMapping`](../modules.md#shortcutactionidmapping)

The mapping of shortcuts to corresponding action.

#### Defined in

[lib/table/table-api.ts:216](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/table-api.ts#L216)

___

### getTableModel

▸ **getTableModel**(): [`TableModelIf`](../interfaces/TableModelIf.md)

Retrieves the table model that contains all data and structure information for the table.

#### Returns

[`TableModelIf`](../interfaces/TableModelIf.md)

The table model interface that provides access to the table's data structure,
                       including header, body, and footer area models.

#### Defined in

[lib/table/table-api.ts:327](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/table-api.ts#L327)

___

### getTableScope

▸ **getTableScope**(): [`TableScope`](TableScope.md)

Retrieves the current scope of the table.

#### Returns

[`TableScope`](TableScope.md)

The current scope of the table.

#### Defined in

[lib/table/table-api.ts:269](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/table-api.ts#L269)

___

### isColumnVisible

▸ **isColumnVisible**(`_column`): `boolean`

Returns whether a column is visible or not.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_column` | `number` \| [`ColumnDefIf`](../interfaces/ColumnDefIf.md) | The column index or the column definition. |

#### Returns

`boolean`

- True if the column is visible, false otherwise.

#### Defined in

[lib/table/table-api.ts:105](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/table-api.ts#L105)

___

### isFooterVisible

▸ **isFooterVisible**(): `boolean`

Determines if the footer is visible.

#### Returns

`boolean`

True if the footer is visible, false otherwise.

#### Defined in

[lib/table/table-api.ts:135](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/table-api.ts#L135)

___

### isHeaderVisible

▸ **isHeaderVisible**(): `boolean`

Checks if the header is visible.

#### Returns

`boolean`

- Returns true if the header is visible, otherwise returns false.

#### Defined in

[lib/table/table-api.ts:115](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/table-api.ts#L115)

___

### reSort

▸ **reSort**(): `void`

Re-applies the current sorting configuration to the table data.

#### Returns

`void`

- This method doesn't return anything.

**`Description`**

This method triggers a re-sort of the table data using the current sorting configuration.
It's useful when the underlying data has changed and needs to be re-sorted without changing
the sort columns or direction.

#### Defined in

[lib/table/table-api.ts:659](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/table-api.ts#L659)

___

### recalcColumnWidths

▸ **recalcColumnWidths**(`clientWidth?`): `void`

Recalculates the column widths of the table.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `clientWidth?` | `number` | The width of the client area. |

#### Returns

`void`

#### Defined in

[lib/table/table-api.ts:171](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/table-api.ts#L171)

___

### recalcWrappers

▸ **recalcWrappers**(): `void`

Recalculates the dimensions of all wrapper elements in the table.

This method is typically called after changes to the table structure or content
that might affect the layout, such as resizing columns or changing row heights.
It ensures that all wrapper elements are properly sized to match their content.

#### Returns

`void`

- This method doesn't return anything.

#### Defined in

[lib/table/table-api.ts:305](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/table-api.ts#L305)

___

### removeRows

▸ **removeRows**\<`T`\>(`rows`, `predicate?`): `void`

Removes specified rows from the table body.

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | The type of elements in the rows array |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rows` | `T`[] | An array of data objects to remove from the table |
| `predicate` | (`a`: `T`, `b`: `T`) => `boolean` | A comparison function that determines if two rows match - Default predicate uses strict equality (===) - The function should return true if the rows are considered a match |

#### Returns

`void`

- This method doesn't return anything.

**`Description`**

This method removes rows from the table body that match any of the provided rows based on the predicate function.
It only works with tables that use AreaModelObjectArray as their body model.

**`Throws`**

Logs a console warning if the table's body model is not an AreaModelObjectArray

#### Defined in

[lib/table/table-api.ts:435](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/table-api.ts#L435)

___

### repaint

▸ **repaint**(): `void`

Repaints the table.

This method calls the repaint method of the tableScope object
to update and redraw the table based on the latest data.

#### Returns

`void`

#### Defined in

[lib/table/table-api.ts:145](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/table-api.ts#L145)

___

### repaintHard

▸ **repaintHard**(): `void`

Repaints the table scope with hard repaint.
Repaints the UI by resetting the size of the wrapper div,
adjusting the containers and rows, and performing additional adjustments
after scrolling.

#### Returns

`void`

#### Defined in

[lib/table/table-api.ts:159](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/table-api.ts#L159)

___

### scrollToIndex

▸ **scrollToIndex**(`indexX?`, `indexY?`): `void`

Scrolls to the specified index in both horizontal and vertical directions.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `indexX` | `number` | `0` | The index of the column to scroll to in the horizontal direction. Default is 0. |
| `indexY` | `number` | `0` | The index of the row to scroll to in the vertical direction. Default is 0. |

#### Returns

`void`

undefined

#### Defined in

[lib/table/table-api.ts:72](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/table-api.ts#L72)

___

### scrollToPixel

▸ **scrollToPixel**(`px?`, `py?`): `void`

Scrolls the table body to the specified pixel coordinates.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `px` | `number` | `0` | The horizontal pixel coordinate to scroll to. Defaults to 0. |
| `py` | `number` | `0` | The vertical pixel coordinate to scroll to. Defaults to 0. |

#### Returns

`void`

#### Defined in

[lib/table/table-api.ts:59](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/table-api.ts#L59)

___

### setColumnVisible

▸ **setColumnVisible**(`_column`, `_visible?`): `void`

Sets the visibility of a column in the table.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `_column` | `number` \| [`ColumnDefIf`](../interfaces/ColumnDefIf.md) | `undefined` |
| `_visible` | `boolean` | `true` |

#### Returns

`void`

- There is no return value.

#### Defined in

[lib/table/table-api.ts:95](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/table-api.ts#L95)

___

### setColumnWidth

▸ **setColumnWidth**(`columnIndex`, `width`): `void`

Sets the width of a specific column in the table.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `columnIndex` | `number` | The index of the column to resize. |
| `width` | `number` | The new width to set for the column, in pixels. |

#### Returns

`void`

- This method doesn't return anything.

#### Defined in

[lib/table/table-api.ts:317](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/table-api.ts#L317)

___

### setFooterVisible

▸ **setFooterVisible**(`_visible?`): `void`

Sets the visibility of the footer.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `_visible` | `boolean` | `true` | Indicates whether the footer should be visible or not. Default value is true. |

#### Returns

`void`

- This method does not return any value.

#### Defined in

[lib/table/table-api.ts:126](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/table-api.ts#L126)

___

### setHeaderVisible

▸ **setHeaderVisible**(`_visible?`): `void`

Sets whether the header is visible or not.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `_visible` | `boolean` | `true` | A boolean value indicating whether the header should be visible. Default value is true. |

#### Returns

`void`

undefined

#### Defined in

[lib/table/table-api.ts:83](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/table-api.ts#L83)

___

### setRows

▸ **setRows**\<`T`\>(`rows`): `void`

Sets the rows data for the table body, replacing any existing rows.

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | The type of elements in the rows array |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rows` | `T`[] | An array of data objects to set as the table's rows |

#### Returns

`void`

- This method doesn't return anything.

**`Description`**

This method replaces all existing rows in the table body with the provided array of data objects.
It only works with tables that use AreaModelObjectArray as their body model.

**`Throws`**

Logs a console warning if the table's body model is not an AreaModelObjectArray

#### Defined in

[lib/table/table-api.ts:355](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/table-api.ts#L355)

___

### setSelectionModel

▸ **setSelectionModel**(`sm`, `repaint?`): `void`

Sets the selection model for the table scope.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `sm` | [`SelectionModel`](SelectionModel.md) | `undefined` | The selection model to be set. |
| `repaint?` | `boolean` | `true` | Indicates whether the table should be repainted after setting the selection model. Default value is true. |

#### Returns

`void`

#### Defined in

[lib/table/table-api.ts:194](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/table-api.ts#L194)

___

### sort

▸ **sort**(`compareFn`): `void`

Sorts the table data using a custom comparison function.

This method allows sorting of table rows by providing a custom comparison function. The comparison function
should follow the standard JavaScript array sort comparator pattern, returning:
- A negative number if the first element should be sorted before the second
- A positive number if the first element should be sorted after the second
- Zero if the elements are equal

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `compareFn` | (`a`: `any`, `b`: `any`) => `number` | A function that defines the sort order. The function should accept two arguments and return a number indicating their relative order: - Negative number: first argument should come before second - Positive number: second argument should come before first - Zero: elements are equal |

#### Returns

`void`

**`Example`**

```ts
// Sort table rows by a specific property in ascending order
table.api.sort((a, b) => {
  if (a.name < b.name) return -1;
  if (a.name > b.name) return 1;
  return 0;
});
```

**`Example`**

```ts
// Sort numbers in descending order
table.api.sort((a, b) => b.value - a.value);
```

**`Example`**

```ts
// Sort with multiple criteria
table.api.sort((a, b) => {
  // First sort by status
  const statusCompare = a.status.localeCompare(b.status);
  if (statusCompare !== 0) return statusCompare;
  
  // Then sort by name if status is equal
  return a.name.localeCompare(b.name);
});
```

**`Example`**

```ts
// Case-insensitive string sorting
table.api.sort((a, b) => 
  a.name.toLowerCase().localeCompare(b.name.toLowerCase())
);
```

#### Defined in

[lib/table/table-api.ts:707](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/table-api.ts#L707)

___

### triggerAction

▸ **triggerAction**(`actionId`): `void`

Triggers the action with the given action ID.
This function can be invoked programmatically.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `actionId` | ``"COPY_2_CLIPBOARD"`` \| ``"START_EDITING"`` \| ``"TOGGLE_SELECTION"`` \| ``"SELECT_ALL"`` \| ``"DESELECT_ALL"`` \| ``"NAVIGATE_LEFT"`` \| ``"NAVIGATE_RIGHT"`` \| ``"NAVIGATE_UP"`` \| ``"NAVIGATE_DOWN"`` | The ID of the action to trigger. |

#### Returns

`void`

#### Defined in

[lib/table/table-api.ts:206](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/table-api.ts#L206)

___

### updateCells

▸ **updateCells**(`events`, `repaintAll?`): `void`

Updates the cells in the table based on the provided events.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `events` | [`TableCellUpdateEventIf`](../interfaces/TableCellUpdateEventIf.md)[] | `undefined` | The array of events representing the updates to perform on the cells. |
| `repaintAll?` | `boolean` | `false` | Optional parameter indicating whether to repaint all cells or not. Default value is false. If true, the full table will be rendered. If false, the table cell will be rendered immediately. |

#### Returns

`void`

- This method doesn't return anything.

#### Defined in

[lib/table/table-api.ts:36](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/table-api.ts#L36)

___

### updateRows

▸ **updateRows**\<`T`\>(`rows`, `predicate?`): `void`

Updates existing rows in the table body with new data.

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | The type of elements in the rows array |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rows` | `T`[] | An array of data objects containing the updated values |
| `predicate` | (`a`: `T`, `b`: `T`) => `boolean` | A comparison function that determines which rows to update - Default predicate uses strict equality (===) - The function should return true if the row should be updated |

#### Returns

`void`

- This method doesn't return anything.

**`Description`**

This method updates existing rows in the table body with new values from the provided rows array.
For each row in the table, if the predicate returns true when compared with any row in the provided array,
all properties from the provided row will be copied to the existing row.
It only works with tables that use AreaModelObjectArray as their body model.

**`Throws`**

Logs a console warning if the table's body model is not an AreaModelObjectArray

#### Defined in

[lib/table/table-api.ts:629](https://github.com/guiexperttable/ge-table/blob/1d30aa1/packages/table/src/lib/table/table-api.ts#L629)
