import {TableScope} from "./table-scope";
import {ColumnDefIf} from "./data/tablemodel/column/column-def.if";
import {TableCellUpdateEventIf} from "./data/common/event/input/table-cell-update-event.if";
import { SelectionModel } from './selection/selection-model';
import { ActionId } from './action/action-id.type';
import { ShortcutActionIdMapping } from './action/shortcut-actionid-mapping.type';
import { SelectionModelIf } from './selection/selection-model.if';
import { AreaIdent } from './data/tablemodel/area-ident.type';
import { TableModelIf } from './data/tablemodel/table-model.if';
import { AreaModelIf } from './data/tablemodel/areamodel/area-model.if';
import { AreaModelObjectArray } from './data/tablemodel/areamodel/area-model-object-array';


/**
 * # TableApi
 * 
 * The TableApi class provides a comprehensive interface for programmatically interacting with a table component.
 * After creating a table component, each component gets its own TableApi instance that serves as the primary
 * means for developers to control and interact with the rendered table.
 * 
 * ## Overview
 * 
 * TableApi acts as a facade over the internal table implementation, providing a clean, well-documented API
 * that abstracts away the complexity of the underlying table mechanics. It delegates most operations to the
 * TableScope instance, which contains the actual implementation details.
 * 
 * ## Core Functionality
 * 
 * The TableApi provides methods for:
 * 
 * ### Data Management
 * - Setting, adding, and removing rows
 * - Updating individual cells or ranges of cells
 * - Finding and filtering rows based on criteria
 * - Sorting data with custom comparators
 * 
 * ### Visual Control
 * - Scrolling to specific positions (by pixel or row/column index)
 * - Controlling visibility of header, footer, and columns
 * - Adjusting column widths (manually or automatically)
 * - Repainting the table (normal or hard repaint)
 * 
 * ### Selection and Focus
 * - Managing cell, row, or column selection
 * - Clearing selections
 * - Ensuring specific rows are visible in the viewport
 * 
 * ### Export and Clipboard
 * - Copying selected data to clipboard
 * - Exporting table data to Excel
 * 
 * ### Events and Actions
 * - Triggering specific actions programmatically
 * - Responding to external filter changes
 * 
 * ### Debugging
 * - Enabling/disabling logging for troubleshooting
 * 
 * ## Usage Patterns
 * 
 * The TableApi is designed to be used in several common patterns:
 * 
 * ### 1. Direct Method Calls
 * 
 * The most straightforward usage is to call methods directly on the TableApi instance:
 * 
 * ```typescript
 * // Get the API from your table component
 * const api = tableComponent.api;
 * 
 * // Call methods directly
 * api.setRows(newData);
 * api.scrollToIndex(0, 10);
 * api.repaint();
 * ```
 * 
 * ### 2. Chaining Operations
 * 
 * While the TableApi doesn't support method chaining directly (most methods return void),
 * you can group related operations together:
 * 
 * ```typescript
 * // Perform a sequence of related operations
 * function updateTableSection(api, newRows, startIndex) {
 *   api.addRowsAt(newRows, startIndex);
 *   api.ensureRowIsVisible(startIndex);
 *   api.repaint();
 * }
 * ```
 * 
 * ### 3. Event-Driven Updates
 * 
 * Use the TableApi to respond to external events:
 * 
 * ```typescript
 * // Update table in response to user input
 * searchInput.addEventListener('input', (e) => {
 *   const searchText = e.target.value;
 *   tableOptions.externalFilterFunction = row => row.name.includes(searchText);
 *   tableApi.externalFilterChanged();
 * });
 * ```
 * 
 * ### 4. Integration with Application State
 * 
 * Synchronize table state with application state:
 * 
 * ```typescript
 * // In a state management effect or watcher
 * function onAppStateChanged(newState) {
 *   if (newState.tableData !== currentTableData) {
 *     tableApi.setRows(newState.tableData);
 *     tableApi.repaint();
 *     currentTableData = newState.tableData;
 *   }
 * }
 * ```
 * 
 * ## Performance Considerations
 * 
 * The TableApi provides methods that are optimized for different performance scenarios:
 * 
 * - For frequent small updates: Use `updateCells()` with `repaintAll=false`
 * - For complete data replacement: Use `setRows()`
 * - For structural changes: Follow with `repaintHard()`
 * - For visual-only changes: Use `repaint()`
 * 
 * ## Common Use Cases
 * 
 * ### Real-time Data Updates
 * 
 * ```typescript
 * // Update specific cells with new values from a data stream
 * dataStream.subscribe(update => {
 *   const cellUpdates = update.changes.map(change => ({
 *     area: 'body',
 *     rowIndex: change.rowIndex,
 *     columnIndex: change.columnIndex,
 *     value: change.newValue,
 *     cssClasses: { 'updated': true }
 *   }));
 *   
 *   tableApi.updateCells(cellUpdates);
 * });
 * ```
 * 
 * ### Interactive Filtering
 * 
 * ```typescript
 * // Set up filter controls
 * function applyFilters(filters) {
 *   tableOptions.externalFilterFunction = row => {
 *     return Object.entries(filters).every(([key, value]) => {
 *       if (!value) return true; // Skip empty filters
 *       return row[key].toString().includes(value);
 *     });
 *   };
 *   
 *   tableApi.externalFilterChanged();
 * }
 * ```
 * 
 * ### Custom Sorting
 * 
 * ```typescript
 * // Apply multi-column sorting
 * function sortByMultipleColumns(sortConfig) {
 *   tableApi.sort((a, b) => {
 *     for (const {column, direction} of sortConfig) {
 *       const aValue = a[column];
 *       const bValue = b[column];
 *       const comparison = compare(aValue, bValue);
 *       
 *       if (comparison !== 0) {
 *         return direction === 'asc' ? comparison : -comparison;
 *       }
 *     }
 *     return 0;
 *   });
 * }
 * 
 * function compare(a, b) {
 *   if (typeof a === 'string' && typeof b === 'string') {
 *     return a.localeCompare(b);
 *   }
 *   return a < b ? -1 : a > b ? 1 : 0;
 * }
 * ```
 * 
 * ### Row Management
 * 
 * ```typescript
 * // Add, update, and remove rows based on user interactions
 * function onAddRow(newRow) {
 *   tableApi.addRows([newRow]);
 *   tableApi.ensureRowIsVisible(tableApi.getDisplayedRowCount() - 1);
 * }
 * 
 * function onUpdateRow(updatedRow) {
 *   tableApi.updateRows([updatedRow], (a, b) => a.id === b.id);
 * }
 * 
 * function onDeleteRow(rowToDelete) {
 *   tableApi.removeRows([rowToDelete], (a, b) => a.id === b.id);
 * }
 * ```
 * 
 * ### Export and Reporting
 * 
 * ```typescript
 * // Set up export buttons
 * exportButton.addEventListener('click', () => {
 *   tableApi.downloadExcel('report.xlsx', 'Report Generator');
 * });
 * 
 * copyButton.addEventListener('click', () => {
 *   tableApi.copyToClipboard()
 *     .then(() => showNotification('Data copied to clipboard'))
 *     .catch(err => showError('Failed to copy data', err));
 * });
 * ```
 * 
 * ### Responsive Behavior
 * 
 * ```typescript
 * // Handle window resize events
 * window.addEventListener('resize', () => {
 *   tableApi.autoResizeColumns();
 *   tableApi.repaintHard();
 * });
 * ```
 * 
 * ## Integration with Frameworks
 * 
 * ### React
 * 
 * ```jsx
 * function DataTable({ data, onRowSelect }) {
 *   const tableRef = useRef(null);
 *   
 *   useEffect(() => {
 *     if (tableRef.current && tableRef.current.api) {
 *       tableRef.current.api.setRows(data);
 *       tableRef.current.api.repaint();
 *     }
 *   }, [data]);
 *   
 *   return <div ref={tableRef} className="table-container" />;
 * }
 * ```
 * 
 * ### Vue
 * 
 * ```vue
 * <template>
 *   <div ref="tableContainer"></div>
 * </template>
 * 
 * <script>
 * export default {
 *   props: ['tableData'],
 *   watch: {
 *     tableData(newData) {
 *       if (this.tableApi) {
 *         this.tableApi.setRows(newData);
 *         this.tableApi.repaint();
 *       }
 *     }
 *   },
 *   mounted() {
 *     // Initialize table and get API reference
 *     this.tableApi = initializeTable(this.$refs.tableContainer).api;
 *   }
 * }
 * </script>
 * ```
 * 
 * ### Angular
 * 
 * ```typescript
 * @Component({
 *   selector: 'app-data-table',
 *   template: '<div #tableContainer></div>'
 * })
 * export class DataTableComponent implements OnInit, OnChanges {
 *   @Input() data: any[];
 *   @ViewChild('tableContainer') tableContainer: ElementRef;
 *   
 *   private tableApi: TableApi;
 *   
 *   ngOnInit() {
 *     this.tableApi = initializeTable(this.tableContainer.nativeElement).api;
 *   }
 *   
 *   ngOnChanges(changes) {
 *     if (changes.data && this.tableApi) {
 *       this.tableApi.setRows(this.data);
 *       this.tableApi.repaint();
 *     }
 *   }
 * }
 * ```
 * 
 * ## Error Handling
 * 
 * The TableApi methods generally don't throw exceptions, but instead log warnings to the console
 * when operations cannot be completed (e.g., when trying to use row operations on an incompatible
 * area model type). It's good practice to check console warnings during development.
 * 
 * For asynchronous operations like clipboard access, proper error handling should be used:
 * 
 * ```typescript
 * tableApi.copyToClipboard()
 *   .then(content => {
 *     console.log('Copied to clipboard:', content);
 *   })
 *   .catch(error => {
 *     console.error('Failed to copy to clipboard:', error);
 *     // Show user-friendly error message
 *   });
 * ```
 * 
 * ## Debugging
 * 
 * For troubleshooting complex table behavior, the logging system can be enabled:
 * 
 * ```typescript
 * // Enable detailed logging
 * tableApi.setLoggingActive(true);
 * 
 * // Perform operations that need debugging
 * tableApi.updateCells([...]);
 * tableApi.scrollToIndex(5, 10);
 * 
 * // Check if logging is active
 * const isLogging = tableApi.isLoggingActive();
 * 
 * // Disable logging when done
 * tableApi.setLoggingActive(false);
 * ```
 * 
 * ## Advanced Usage
 * 
 * For advanced scenarios, you can access the underlying TableScope:
 * 
 * ```typescript
 * const tableScope = tableApi.getTableScope();
 * // Now you can access internal implementation details
 * // Note: This is generally not recommended unless absolutely necessary
 * ```
 * 
 * @class TableApi
 */
export class TableApi {


  constructor(
    public readonly tableScope: TableScope
  ) {
  }



  /**
   * Updates the cells in the table with the provided cell update events.
   *
   * This method allows you to update specific cells in the table without requiring a full table repaint,
   * which can significantly improve performance when updating large tables frequently.
   *
   * @param {TableCellUpdateEventIf[]} events - An array of cell update events, each defining a single cell update operation.
   *        Each event must specify:
   *        - area: The table area to update ('header', 'body', or 'footer')
   *        - rowIndex: The row index of the cell to update
   *        - columnIndex: The column index of the cell to update
   *        - value: The new value to set for the cell
   *        - cssClasses: Optional object mapping CSS class names to boolean values
   *          (true to add the class, false to remove it)
   *
   * @param {boolean} [repaintAll=false] - Whether to repaint the entire table after updating cells.
   *        - If true: All cells will be repainted after updating (slower but ensures visual consistency)
   *        - If false: Only the modified cells will be repainted (faster, recommended for frequent updates)
   *
   * @returns {void}
   *
   * @example
   * // Update a single cell with a new value and CSS classes
   * tableApi.updateCells([{
   *   area: 'body',
   *   rowIndex: 3,
   *   columnIndex: 2,
   *   value: 42,
   *   cssClasses: {
   *     'highlight': true,   // Add 'highlight' class
   *     'error': false       // Remove 'error' class if present
   *   }
   * }]);
   *
   * @example
   * // Update multiple cells at once
   * tableApi.updateCells([
   *   {
   *     area: 'body',
   *     rowIndex: 1,
   *     columnIndex: 1,
   *     value: 'New Value 1',
   *     cssClasses: { 'updated': true }
   *   },
   *   {
   *     area: 'body',
   *     rowIndex: 2,
   *     columnIndex: 3,
   *     value: 'New Value 2',
   *     cssClasses: { 'updated': true }
   *   }
   * ]);
   *
   * @example
   * // Update cells and repaint the entire table
   * tableApi.updateCells([
   *   { area: 'body', rowIndex: 0, columnIndex: 0, value: 'Hello', cssClasses: { 'bg-green-0': true } },
   *   { area: 'body', rowIndex: 1, columnIndex: 1, value: 'World', cssClasses: { 'bg-red-0': true } }
   * ], true);
   *
   * @example
   * // High-performance animation example (update without full repaint)
   * function animateCell() {
   *   const value = Math.sin(Date.now() / 1000) * 50;
   *   const cssClasses = {
   *     'positive': value > 0,
   *     'negative': value < 0
   *   };
   *
   *   tableApi.updateCells([{
   *     area: 'body',
   *     rowIndex: 0,
   *     columnIndex: 0,
   *     value: Math.round(value),
   *     cssClasses
   *   }]);
   *
   *   requestAnimationFrame(animateCell);
   * }
   * animateCell();
   */
  updateCells(
    events: TableCellUpdateEventIf[],
    repaintAll: boolean = false): void {
    this.tableScope.updateCells(events, repaintAll);
  }


  /**
   * Notifies the table that an external filter has been changed and needs to be applied.
   *
   * This method is used when an external filter condition (defined by `tableOptions.externalFilterFunction`)
   * has changed and the table needs to refresh its display to reflect the new filtering criteria.
   *
   * When called, this method:
   * 1. Applies the external filter function to all rows
   * 2. Clears the current selection (by default)
   * 3. Scrolls to the top of the table
   * 4. Recalculates table dimensions
   * 5. Repaints the table to display only the filtered rows
   *
   * @example
   * ```typescript
   * // Define an external filter function in your table options
   * const tableOptions = {
   *   externalFilterFunction: (row: MyRowType) => {
   *     // Return true to include the row, false to filter it out
   *     return row.status === 'active';
   *   }
   * };
   *
   * // Initialize your table with these options
   * const tableApi = new TableApi(tableScope);
   *
   * // Later, when filter criteria change (e.g., in a search input handler)
   * function onFilterTextChanged() {
   *   // Update the filter function if needed
   *   tableOptions.externalFilterFunction = (row: MyRowType) => {
   *     return row.name.includes(searchText);
   *   };
   *
   *   // Apply the updated filter
   *   tableApi.externalFilterChanged();
   * }
   * ```
   *
   * @returns {void}
   * @see TableScope.externalFilterChanged
   */
  externalFilterChanged(): void {
    this.tableScope.externalFilterChanged();
  };

  /**
   * Scrolls the table content to the specified pixel coordinates.
   *
   * This method allows programmatic scrolling of the table viewport to exact pixel positions.
   * It delegates the scrolling operation to the underlying TableScope instance.
   *
   * @param {number} px - The horizontal pixel coordinate to scroll to. Defaults to 0 (leftmost position).
   * @param {number} py - The vertical pixel coordinate to scroll to. Defaults to 0 (topmost position).
   * @returns {void}
   *
   * @example
   * // Scroll to the top-left corner of the table
   * tableApi.scrollToPixel(0, 0);
   *
   * @example
   * // Scroll 200 pixels horizontally and 150 pixels vertically
   * tableApi.scrollToPixel(200, 150);
   *
   * @example
   * // Scroll only vertically, keeping the current horizontal position
   * tableApi.scrollToPixel(undefined, 300);
   *
   * @example
   * // Example in a component that needs precise scrolling control
   * class TableScroller {
   *   private tableApi: TableApi;
   *
   *   constructor(tableApi: TableApi) {
   *     this.tableApi = tableApi;
   *   }
   *
   *   scrollToPosition(x: number, y: number) {
   *     // Scroll to exact pixel coordinates
   *     this.tableApi.scrollToPixel(x, y);
   *   }
   *
   *   scrollHalfway() {
   *     const tableModel = this.tableApi.getTableModel();
   *     const totalWidth = tableModel.getContentWidthInPixel();
   *     const totalHeight = tableModel.getContentHeightInPixel();
   *
   *     // Scroll to the middle of the table content
   *     this.tableApi.scrollToPixel(totalWidth / 2, totalHeight / 2);
   *   }
   * }
   *
   * @example
   * // Advanced usage with animated scrolling
   * class SmoothScroller {
   *   private tableApi: TableApi;
   *   private animationFrameId: number | null = null;
   *
   *   constructor(tableApi: TableApi) {
   *     this.tableApi = tableApi;
   *   }
   *
   *   smoothScrollTo(targetX: number, targetY: number, duration: number = 500) {
   *     // Cancel any ongoing animation
   *     if (this.animationFrameId !== null) {
   *       cancelAnimationFrame(this.animationFrameId);
   *     }
   *
   *     const startTime = performance.now();
   *     const startX = this.tableApi.getTableScope().getScrollLeft();
   *     const startY = this.tableApi.getTableScope().getScrollTop();
   *     const distanceX = targetX - startX;
   *     const distanceY = targetY - startY;
   *
   *     const step = (currentTime: number) => {
   *       const elapsed = currentTime - startTime;
   *       const progress = Math.min(elapsed / duration, 1);
   *
   *       // Use easing function for smooth animation
   *       const easeProgress = 1 - Math.pow(1 - progress, 3); // Cubic ease-out
   *
   *       const currentX = startX + distanceX * easeProgress;
   *       const currentY = startY + distanceY * easeProgress;
   *
   *       this.tableApi.scrollToPixel(currentX, currentY);
   *
   *       if (progress < 1) {
   *         this.animationFrameId = requestAnimationFrame(step);
   *       } else {
   *         this.animationFrameId = null;
   *       }
   *     };
   *
   *     this.animationFrameId = requestAnimationFrame(step);
   *   }
   *
   *   cancelAnimation() {
   *     if (this.animationFrameId !== null) {
   *       cancelAnimationFrame(this.animationFrameId);
   *       this.animationFrameId = null;
   *     }
   *   }
   * }
   *
   * @see {@link scrollToIndex} - For scrolling based on row and column indices
   * @see {@link ensureRowIsVisible} - For scrolling to make a specific row visible
   */
  scrollToPixel(px: number = 0, py: number = 0) {
    this.tableScope.scrollToPixel(px, py);
  }



  /**
   * Scrolls the table to display the specified row and column indices at the top-left corner of the viewport.
   *
   * This method allows programmatic scrolling to a specific position in the table grid based on row and column indices.
   * It uses the underlying TableScope's scrolling mechanism to navigate to the target location.
   *
   * @param {number} indexX - The horizontal index (column) to scroll to. Defaults to 0 (leftmost column).
   * @param {number} indexY - The vertical index (row) to scroll to. Defaults to 0 (topmost row).
   * @returns {void}
   *
   * @example
   * // Scroll to the 5th row, keeping the current horizontal scroll position
   * tableApi.scrollToIndex(0, 5);
   *
   * @example
   * // Scroll to column 3, row 10
   * tableApi.scrollToIndex(3, 10);
   *
   * @example
   * // Example in a component that needs to navigate to specific content
   * class TableNavigator {
   *   private tableApi: TableApi;
   *
   *   constructor(tableApi: TableApi) {
   *     this.tableApi = tableApi;
   *   }
   *
   *   goToCell(columnIndex: number, rowIndex: number) {
   *     // Navigate directly to the specified cell position
   *     this.tableApi.scrollToIndex(columnIndex, rowIndex);
   *
   *     // Optional: Select the cell after navigating to it
   *     const selectionModel = this.tableApi.getSelectionModel();
   *     if (selectionModel) {
   *       selectionModel.selectCell(rowIndex, columnIndex);
   *     }
   *   }
   * }
   *
   * @example
   * // Advanced usage with search functionality
   * class TableSearcher {
   *   findAndScrollToMatch(searchTerm: string) {
   *     const tableModel = this.tableApi.getTableModel();
   *     const bodyModel = tableModel.getAreaModel('body');
   *
   *     // Search for the term in the table data
   *     for (let row = 0; row < bodyModel.getRowCount(); row++) {
   *       for (let col = 0; col < tableModel.getColumnCount(); col++) {
   *         const cellContent = bodyModel.getValueAt(row, col)?.toString() || '';
   *
   *         if (cellContent.includes(searchTerm)) {
   *           // Found a match, scroll to it
   *           this.tableApi.scrollToIndex(col, row);
   *           return true;
   *         }
   *       }
   *     }
   *
   *     return false; // No match found
   *   }
   * }
   *
   * @see {@link scrollToPixel} - For scrolling to specific pixel coordinates
   * @see {@link ensureRowIsVisible} - For scrolling to make a specific row visible
   */
  scrollToIndex(indexX: number = 0, indexY: number = 0) {
    this.tableScope.scrollToIndex(indexX, indexY);
  }

  /**
   * Sets whether the header is visible or not.
   *
   * @param _visible - A boolean value indicating whether the header should be visible. Default value is true.
   *
   * @return undefined
   */
  setHeaderVisible(_visible: boolean = true) {
    // TODO setHeaderVisible
  }

  /**
   * Sets the visibility of a column in the table.
   *
   * @param {_column} - The column index or column definition to set visibility for.
   * @param {_visible=true} - The flag to set visibility to. true for visible, false for hidden.
   *
   * @return {void} - There is no return value.
   */
  setColumnVisible(_column: number | ColumnDefIf, _visible: boolean = true) {
    // TODO setColumnVisible
  }

  /**
   * Returns whether a column is visible or not.
   *
   * @param {number | ColumnDefIf} _column - The column index or the column definition.
   * @return {boolean} - True if the column is visible, false otherwise.
   */
  isColumnVisible(_column: number | ColumnDefIf): boolean {
    // TODO isColumnVisible
    return true;
  }

  /**
   * Checks if the header is visible.
   *
   * @return {boolean} - Returns true if the header is visible, otherwise returns false.
   */
  isHeaderVisible(): boolean {
    return true; // TODO isHeaderVisible
  }

  /**
   * Sets the visibility of the footer.
   *
   * @param {boolean} _visible - Indicates whether the footer should be visible or not. Default value is true.
   *
   * @return {void} - This method does not return any value.
   */
  setFooterVisible(_visible: boolean = true) {
    // TODO setFooterVisible
  }

  /**
   * Determines if the footer is visible.
   *
   * @returns {boolean} True if the footer is visible, false otherwise.
   */
  isFooterVisible(): boolean {
    return true; // TODO isFooterVisible
  }


  /**
   * Repaints the table.
   *
   * This method refreshes the visual representation of the table by delegating to the
   * tableScope's repaint functionality. Use this method whenever the table's visual state
   * needs to be updated after data changes, selection changes, or any modifications that
   * affect the rendered output.
   *
   * Repainting the table ensures that all visible cells, rows, and styling reflect the
   * current state of the underlying data model and configuration settings.
   *
   * @example
   * // Update data and repaint the table
   * const tableApi = new TableApi(tableScope);
   * tableApi.setRows(newData);
   * tableApi.repaint();
   *
   * @example
   * // Update selection and repaint to show the visual change
   * tableApi.getSelectionModel().selectCell(2, 3);
   * tableApi.repaint();
   *
   * @example
   * // After changing column visibility, repaint to reflect changes
   * tableApi.setColumnVisible(0, false);
   * tableApi.repaint();
   *
   * @returns {void}
   */
  repaint() {
    this.tableScope.repaint();
  }




  /**
   * Performs a complete repaint of the table by triggering a hard repaint on the underlying table scope.
   *
   * A hard repaint is more thorough than a regular repaint and performs the following operations:
   * - Recalculates the height and padding of the table model
   * - Resets the size of the wrapper div elements
   * - Adjusts containers and rows positioning
   * - Makes additional adjustments after scrolling
   *
   * Use this method when regular repaint isn't sufficient, such as when:
   * - Table dimensions have significantly changed
   * - The structure of data has been modified (rows/columns added or removed)
   * - The table layout needs complete recalculation
   * - After major DOM changes affecting the table's container
   *
   * @example
   * // Example 1: Basic usage
   * tableApi.repaintHard();
   *
   * @example
   * // Example 2: Using after major data changes
   * tableApi.setRows(newDataSet);
   * tableApi.repaintHard();
   *
   * @example
   * // Example 3: Using after resizing a container
   * window.addEventListener('resize', () => {
   *   tableApi.repaintHard();
   * });
   *
   * @example
   * // Example 4: Using after changing column visibility
   * tableApi.setColumnVisible(2, false);
   * tableApi.repaintHard();
   *
   * @returns {void} This method doesn't return a value
   */
  repaintHard() {
    this.tableScope.repaintHard();
  }


  /**
   * Recalculates the column widths of the table.
   *
   * @param {number} clientWidth - The width of the client area.
   *
   * @return {void}
   */
  recalcColumnWidths(clientWidth?: number) {
    this.tableScope.recalcColumnWidths(clientWidth);
  }



  /**
   * Clears the current selection in the table.
   *
   * This method removes any selected cells, rows, or columns in the table.
   * It provides a convenient way to programmatically clear all selections in the table
   * without having to access the underlying selection model directly.
   *
   * When called, this method delegates to the table scope's clearSelection method with
   * a parameter value of true, which ensures the table is automatically repainted after
   * the selection is cleared.
   *
   * @example
   * // Clear all selections in the table
   * tableApi.clearSelection();
   *
   * // Example usage in a component
   * class MyComponent {
   *   @ViewChild('tableComponent') tableComponent: TableComponent;
   *
   *   resetTableSelection(): void {
   *     if (this.tableComponent?.api) {
   *       this.tableComponent.api.clearSelection();
   *     }
   *   }
   * }
   *
   * @returns {void}
   */
  clearSelection() {
    this.tableScope.clearSelection(true);
  }


  /**
   * Sets the selection model for the table.
   *
   * This method allows you to replace the current selection model with a new one,
   * which controls how cells, rows, or columns can be selected in the table.
   *
   * @param {SelectionModel} sm - The new selection model to be set. This model defines
   *                              the selection behavior including selection type (none, cell, row, column),
   *                              selection mode (single, multi), and manages the selected ranges.
   * @param {boolean} [repaint=true] - Whether to repaint the table after changing the selection model.
   *                                   Default is true, which immediately reflects the change visually.
   *                                   Set to false if you want to avoid immediate repainting.
   *
   * @example
   * // Create a new selection model with row selection and multi-select mode
   * const selectionModel = new SelectionModel("row", "multi");
   *
   * // Set the new selection model and repaint the table
   * tableApi.setSelectionModel(selectionModel);
   *
   * // Set a selection model without repainting (if you plan to make more changes)
   * tableApi.setSelectionModel(selectionModel, false);
   * // ... make other changes ...
   * tableApi.repaint(); // Now repaint once
   *
   * @returns {void}
   */
  setSelectionModel(sm: SelectionModel, repaint: boolean = true){
    this.tableScope.setSelectionModel(sm, repaint);
  }


  /**
   * Triggers the action with the given action ID.
   * This function can be invoked programmatically.
   *
   * @param {ActionId} actionId - The ID of the action to trigger.
   * @return {void}
   */
  triggerAction(actionId: ActionId){
    this.tableScope.onActionTriggered(actionId);
  }


  /**
   * Retrieves the shortcut action mapping from the table's shortcut service.
   *
   * This method provides access to the keyboard shortcut configuration that defines
   * which keys trigger specific actions in the table. The mapping contains key-value
   * pairs where:
   * - Keys are string representations of keyboard shortcuts (e.g., "ctrl+c", "shift+arrow_down")
   * - Values are ActionId values representing the corresponding table actions
   *
   * This mapping can be useful for:
   * - Displaying available shortcuts to users
   * - Creating custom shortcut documentation
   * - Dynamically checking which actions are available via keyboard
   * - Extending or integrating with the table's shortcut system
   *
   * @returns {ShortcutActionIdMapping} An object mapping shortcut key combinations to their corresponding action IDs.
   *          For example: { "ctrl+c": "COPY_2_CLIPBOARD", "arrow_down": "NAVIGATE_DOWN" }
   *
   * @example
   * // Get all available shortcuts in the table
   * const shortcuts = tableApi.getShortcutActionMapping();
   *
   * // Check if a specific shortcut exists
   * if (shortcuts["ctrl+c"]) {
   *   console.log("Copy shortcut is available with action:", shortcuts["ctrl+c"]);
   * }
   *
   * // Display available shortcuts in the UI
   * Object.entries(shortcuts).forEach(([key, actionId]) => {
   *   console.log(`${key}: ${actionId}`);
   * });
   */
  getShortcutActionMapping(): ShortcutActionIdMapping {
    return this.tableScope.shortcutService.getShortcutActionMapping();
  }



  /**
   * Copies the selected data from the table to the clipboard.
   *
   * This method leverages the copyService to extract and copy the currently selected data
   * from the table. It works with the current selection state and focus position to determine
   * what content should be copied.
   *
   * The copied data is formatted as tab-separated text that can be pasted into spreadsheet
   * applications like Excel or text editors while maintaining the tabular structure.
   *
   * @example
   * // Copy the currently selected data to clipboard
   * tableApi.copyToClipboard().then(content => {
   *   console.log('Copied to clipboard:', content);
   * });
   *
   * // Using with a button click handler
   * function onCopyButtonClick() {
   *   if (tableApi) {
   *     tableApi.copyToClipboard()
   *       .then(content => {
   *         console.log('Successfully copied data to clipboard');
   *         // Optionally do something with the copied content
   *       })
   *       .catch(error => {
   *         console.error('Failed to copy to clipboard:', error);
   *       });
   *   }
   * }
   *
   * @returns {Promise<string>} A promise that resolves with the copied data as a string.
   *   The string contains the tab-separated representation of the selected table data.
   */
  copyToClipboard() {
    return this.tableScope.copyService.copyToClipboard(
      this.tableScope.tableModel,
      this.tableScope.selectionModel(),
      this.tableScope.focusModel()
    );
  }

  /**
   * Downloads the current table data as an Excel file.
   *
   * This method extracts all visible data from the table (including header, body, and footer areas),
   * converts it into a matrix format, and triggers a download of an Excel file containing this data.
   *
   * The method works by:
   * 1. Creating an empty matrix to hold all table data
   * 2. Iterating through each area of the table (header, body, footer)
   * 3. For each area, iterating through all rows and columns to extract cell values
   * 4. Passing the complete data matrix to the Excel service for file generation and download
   *
   * @param {string} fileName - The name of the Excel file to be downloaded (default: 'table.xlsx')
   * @param {string} author - Optional metadata for the Excel file to specify the author (default: '')
   *
   * @returns {void} The result of the excelService.downloadExcel method call
   *
   * @example
   * // Download table data with default filename
   * tableApi.downloadExcel();
   *
   * @example
   * // Download table data with custom filename and author
   * tableApi.downloadExcel('sales-report.xlsx', 'John Doe');
   *
   * @example
   * // Download table data with custom filename only
   * tableApi.downloadExcel('quarterly-data.xlsx');
   */
  downloadExcel(
    fileName: string = 'table.xlsx',
    author: string = ''
  ) {
    const matrix: Array<Array<any>> = [];
    const columnCount = this.tableScope.tableModel.getColumnCount()

    const areas: AreaIdent[] = ["header" , "body" , "footer"];
    for (const area of areas) {
      const areaModel = this.tableScope.tableModel.getAreaModel(area);
      const rowCount = areaModel?.getRowCount() ?? 0;
      for (let r = 0; r < rowCount; r++) {
        const row: any[] = [];
        matrix.push(row);
        for (let c = 0; c < columnCount; c++) {
          row.push(areaModel.getValueAt(r,c));
        }
      }
    }
    return this.tableScope.excelService.downloadExcel(matrix, fileName, author);
  }


  /**
   * Returns the TableScope instance associated with this TableApi.
   *
   * The TableScope provides access to the core functionality and internal state of the table component,
   * including rendering, event handling, selection, and other low-level operations.
   *
   * This method is useful for advanced customization scenarios where you need direct access
   * to the table's internal structure and behaviors.
   *
   * @returns {TableScope} The TableScope instance that controls this table component
   *
   * @example
   * // Access the TableScope to perform a custom operation
   * const tableApi = new TableApi(myTableScope);
   * const tableScope = tableApi.getTableScope();
   *
   * // Example: Manually trigger a context menu at a specific location
   * const mouseEvent = new MouseEvent('contextmenu');
   * const geMouseEvent = tableScope.createGeMouseEvent(mouseEvent);
   * tableScope.contextmenu(geMouseEvent);
   */
  getTableScope(): TableScope {
    return this.tableScope;
  }


  /**
   * Returns the current selection model for the table.
   *
   * The selection model manages cell selection state, including single cells, ranges, rows, and columns.
   * This method provides access to the selection model instance, allowing operations like:
   * - Checking if cells are selected
   * - Getting selection ranges
   * - Modifying selections
   * - Adding/removing selection event listeners
   *
   * @returns {SelectionModelIf | undefined} The current selection model if available, otherwise undefined.
   *
   * @example
   * // Get the selection model
   * const selectionModel = tableApi.getSelectionModel();
   *
   * // Check if a specific cell is selected
   * if (selectionModel?.isSelected(3, 2)) {
   *   console.log('Cell at row 3, column 2 is selected');
   * }
   *
   * // Get all selected ranges
   * const ranges = selectionModel?.getRanges();
   * console.log('Selected ranges:', ranges);
   *
   * // Clear all selections
   * selectionModel?.clear();
   *
   * // Toggle selection of a cell
   * selectionModel?.togglePoint(5, 1);
   *
   * // Add a selection change listener
   * selectionModel?.addEventSelectionChangedListener({
   *   selectionChanged: () => {
   *     console.log('Selection has changed');
   *   }
   * });
   */
  getSelectionModel(): SelectionModelIf | undefined {
    return this.tableScope.selectionModel();
  }



  /**
   * Automatically resizes all columns to fit their content.
   *
   * @param {boolean} recalcWrappers - Determines whether to recalculate wrapper dimensions after resizing columns.
   *                                   Default value is true.
   * 
   * @return {void} - This method doesn't return anything.
   */
  autoResizeColumns(recalcWrappers: boolean= true) {
    this.tableScope.autoResizeColumns(recalcWrappers);
  }

  /**
   * Recalculates the dimensions of all wrapper elements in the table.
   * 
   * This method is typically called after changes to the table structure or content
   * that might affect the layout, such as resizing columns or changing row heights.
   * It ensures that all wrapper elements are properly sized to match their content.
   *
   * @return {void} - This method doesn't return anything.
   */
  recalcWrappers() {
    this.tableScope.recalcWrappers();
  }

  /**
   * Sets the width of a specific column in the table.
   *
   * @param {number} columnIndex - The index of the column to resize.
   * @param {number} width - The new width to set for the column, in pixels.
   * 
   * @return {void} - This method doesn't return anything.
   */
  setColumnWidth(columnIndex: number, width: number): void{
    this.tableScope.setColumnWidth(columnIndex, width);
  }

  /**
   * Retrieves the table model that contains all data and structure information for the table.
   *
   * @return {TableModelIf} The table model interface that provides access to the table's data structure,
   *                        including header, body, and footer area models.
   */
  getTableModel() :TableModelIf{
    return this.tableScope.tableModel;
  }

  /**
   * Retrieves the area model for the body section of the table.
   *
   * @return {AreaModelIf} The area model interface that provides access to the table's body data,
   *                       including rows, cells, and their values.
   */
  getBodyModel() :AreaModelIf {
    return this.tableScope.tableModel.getBodyModel();
  }

  /**
   * Sets the rows data for the table body, replacing any existing rows.
   *
   * @template T - The type of elements in the rows array
   * @param {T[]} rows - An array of data objects to set as the table's rows
   * 
   * @description
   * This method replaces all existing rows in the table body with the provided array of data objects.
   * It only works with tables that use AreaModelObjectArray as their body model.
   * 
   * @return {void} - This method doesn't return anything.
   * 
   * @throws {Warning} Logs a console warning if the table's body model is not an AreaModelObjectArray
   */
  setRows<T>(rows: T[]){
    const bodyModel = this.getBodyModel();
    if (bodyModel instanceof AreaModelObjectArray){
      // Type assertion with unknown as intermediate step for type safety
      const am = bodyModel as unknown as AreaModelObjectArray<T>;
      am.setRows(rows); 
    } else {
      console.warn('setRows<T>(rows: T[]) only works with AreaModelObjectArray<T>, but this body area model is ', (typeof bodyModel), bodyModel)
    }
  }

  /**
   * Adds new rows to the end of the table body.
   *
   * @template T - The type of elements in the rows array
   * @param {T[]} rows - An array of data objects to append to the table's existing rows
   * 
   * @description
   * This method appends the provided array of data objects to the end of the existing rows in the table body.
   * It only works with tables that use AreaModelObjectArray as their body model.
   * 
   * @return {void} - This method doesn't return anything.
   * 
   * @throws {Warning} Logs a console warning if the table's body model is not an AreaModelObjectArray
   */
  addRows<T>(rows: T[]){
    const bodyModel = this.getBodyModel();
    if (bodyModel instanceof AreaModelObjectArray){
      const am = bodyModel as unknown as AreaModelObjectArray<T>;
      let allRows = am.getAllRows();
      am.setRows([...allRows, ...rows]);
    } else {
      console.warn('addRows<T>(rows: T[]) only works with AreaModelObjectArray<T>, but this body area model is ', (typeof bodyModel), bodyModel)
    }
  }

  /**
   * Inserts new rows at a specific position in the table body.
   *
   * @template T - The type of elements in the rows array
   * @param {T[]} rows - An array of data objects to insert into the table
   * @param {number} rowIndex - The index position where the new rows should be inserted
   * 
   * @description
   * This method inserts the provided array of data objects at the specified index position in the table body.
   * Existing rows at or after the specified index will be shifted down.
   * It only works with tables that use AreaModelObjectArray as their body model.
   * 
   * @return {void} - This method doesn't return anything.
   * 
   * @throws {Warning} Logs a console warning if the table's body model is not an AreaModelObjectArray
   */
  addRowsAt<T>(rows: T[], rowIndex: number){
    const bodyModel = this.getBodyModel();
    if (bodyModel instanceof AreaModelObjectArray){
      const am = bodyModel as unknown as AreaModelObjectArray<T>;
      let allRows = am.getAllRows();
      am.setRows([...allRows.slice(0,rowIndex), ...rows, ...allRows.slice(rowIndex)]);
    }else {
      console.warn('addRowsAt<T>(rows: T[]) only works with AreaModelObjectArray<T>, but this body area model is ', (typeof bodyModel), bodyModel)
    }
  }

  /**
   * Removes specified rows from the table body.
   *
   * @template T - The type of elements in the rows array
   * @param {T[]} rows - An array of data objects to remove from the table
   * @param {(a: T, b: T) => boolean} predicate - A comparison function that determines if two rows match
   *   - Default predicate uses strict equality (===)
   *   - The function should return true if the rows are considered a match
   * 
   * @description
   * This method removes rows from the table body that match any of the provided rows based on the predicate function.
   * It only works with tables that use AreaModelObjectArray as their body model.
   * 
   * @return {void} - This method doesn't return anything.
   * 
   * @throws {Warning} Logs a console warning if the table's body model is not an AreaModelObjectArray
   */
  removeRows<T>(rows: T[], predicate: (a: T, b: T) => boolean = (a, b) => a === b){
    const bodyModel = this.getBodyModel();
    if (bodyModel instanceof AreaModelObjectArray){
      const am = bodyModel as unknown as AreaModelObjectArray<T>;
      const allRows = am.getAllRows().filter(r => !rows.some(rr => predicate(r, rr)));
      am.setRows(allRows);
    } else {
      console.warn('removeRows<T>(rows: T[]) only works with AreaModelObjectArray<T>, but this body area model is ', (typeof bodyModel), bodyModel)
    }
  }

  /**
   * Searches for and returns rows from the table body that match the given criteria.
   *
   * @template T - The type of elements in the rows array
   * 
   * @description
   * This method searches through the table body model for rows that match the provided criteria.
   * It only works with tables that use AreaModelObjectArray as their body model.
   * The method uses a predicate function to determine matches between rows.
   *
   * @param {T[]} rows - An array of rows to search for in the table body
   * @param {(a: T, b: T) => boolean} predicate - A comparison function that determines if two rows match
   *   - Default predicate uses strict equality (===)
   *   - The function should return true if the rows are considered a match
   *   - Parameters:
   *     - a: The row from the table body being checked
   *     - b: The row from the input array being searched for
   *
   * @returns {T[]} An array containing all matching rows found in the table body
   *   - Returns an empty array if:
   *     - The body model is not an instance of AreaModelObjectArray
   *     - No matches are found
   *
   * @example
   * // Find rows with simple equality comparison
   * const matchingRows = table.findRows([row1, row2]);
   *
   * @example
   * // Find rows with custom comparison logic
   * const matchingRows = table.findRows([row1, row2], (a, b) => a.id === b.id);
   *
   * @throws {Warning} Logs a console warning if the table's body model is not an AreaModelObjectArray
   */
  findRows<T>(rows: T[], predicate: (a: T, b: T) => boolean = (a, b) => a === b): T[] {
    const bodyModel = this.getBodyModel();
    if (bodyModel instanceof AreaModelObjectArray){
      const am = bodyModel as unknown as AreaModelObjectArray<T>;
      return am.getAllRows().filter(r => rows.some(rr => predicate(r, rr)));
    } else {
      console.warn('findRows<T>(rows: T[], predicate: (a: T, b: T) => boolean) only works with AreaModelObjectArray<T>, but this body area model is ', (typeof bodyModel), bodyModel)
    }
    return [];
  }

  /**
   * Searches through the filtered rows of the table to find a row that matches specific criteria.
   * This method only works with tables that use AreaModelObjectArray as their body model.
   *
   * @template T - The type of the row objects in the table
   * 
   * @param {Partial<T>} criteria - A partial object containing the search criteria.
   *                               Only needs to include the properties you want to match against.
   * 
   * @param {(criteria: Partial<T>, row: T) => boolean} predicate - A function that defines how to match rows against the criteria.
   *                                                               Returns true if the row matches the criteria, false otherwise.
   * 
   * @returns {T | undefined} The first matching row from the filtered rows, or undefined if no match is found
   *                         or if the body model is not an instance of AreaModelObjectArray.
   * 
   * @example
   * ```typescript
   * interface Person {
   *   id: number;
   *   name: string;
   *   age: number;
   * }
   * 
   * // Find a person by exact match
   * const criteria = { name: "John", age: 30 };
   * const person = tableApi.findRowFromFilteredRowsByAllCriteria<Person>(
   *   criteria,
   *   (criteria, row) => row.name === criteria.name && row.age === criteria.age
   * );
   * 
   * // Find a person by partial name match
   * const searchCriteria = { name: "Jo" };
   * const person2 = tableApi.findRowFromFilteredRowsByAllCriteria<Person>(
   *   searchCriteria,
   *   (criteria, row) => row.name.toLowerCase().includes(criteria.name!.toLowerCase())
   * );
   * 
   * // Find a person within age range
   * const ageCriteria = { minAge: 25, maxAge: 35 };
   * const person3 = tableApi.findRowFromFilteredRowsByAllCriteria<Person>(
   *   ageCriteria,
   *   (criteria, row) => row.age >= criteria.minAge! && row.age <= criteria.maxAge!
   * );
   * ```
   * 
   * @throws {Warning} Logs a warning to console if the body model is not an instance of AreaModelObjectArray
   * 
   * @remarks
   * - This method only searches through filtered rows (rows that are currently visible in the table)
   * - If you need to search through all rows (including filtered out ones), use findRowFromAllRowsByAllCriteria instead
   * - The predicate function gives you full control over how to match rows against your criteria
   * - Returns undefined if either no match is found or if the table's body model is not compatible
   */
  findRowFromFilteredRowsByAllCriteria<T>(
    criteria: Partial<T>,
    predicate: (criteria: Partial<T>, row: T) => boolean): T | undefined {
    const bodyModel = this.getBodyModel();
    if (bodyModel instanceof AreaModelObjectArray){
      const am = bodyModel as unknown as AreaModelObjectArray<T>;
      return am.getFilteredRows().find(row => predicate(criteria, row));
    } else {
      console.warn('findRowFromFilteredRowsByAllCriteria(...) only works with AreaModelObjectArray<T>, but this body area model is ', (typeof bodyModel), bodyModel)
    }
    return undefined;
  }

  /**
   * Searches through all rows in the table's body model to find a row that matches specified criteria.
   * This method works only with AreaModelObjectArray<T> body models.
   *
   * @template T - The type of objects/rows in the table
   * 
   * @param {Partial<T>} criteria - A partial object containing the search criteria.
   *                               Only needs to include the properties you want to match against.
   * 
   * @param {(criteria: Partial<T>, row: T) => boolean} predicate - A function that defines how to match rows against the criteria.
   *                                                               Returns true if the row matches the criteria, false otherwise.
   * 
   * @returns {T | undefined} The first matching row, or undefined if no match is found or if the body model is not AreaModelObjectArray.
   * 
   * @example
   * // Find a user row by id and name
   * const criteria = { id: 1, name: "John" };
   * const user = tableApi.findRowFromAllRowsByAllCriteria(criteria, 
   *   (criteria, row) => row.id === criteria.id && row.name === criteria.name
   * );
   * 
   * @example
   * // Find a product row with partial match on name
   * const criteria = { name: "Phone" };
   * const product = tableApi.findRowFromAllRowsByAllCriteria(criteria,
   *   (criteria, row) => row.name.includes(criteria.name)
   * );
   * 
   * @example
   * // Find an order with complex matching logic
   * const criteria = { total: 100, status: "pending" };
   * const order = tableApi.findRowFromAllRowsByAllCriteria(criteria,
   *   (criteria, row) => {
   *     return row.total > criteria.total && 
   *            row.status === criteria.status &&
   *            row.items.length > 0;
   *   }
   * );
   * 
   * @throws {Warning} Logs a warning to console if the body model is not an instance of AreaModelObjectArray
   */
  findRowFromAllRowsByAllCriteria<T>(
    criteria: Partial<T>,
    predicate: (criteria: Partial<T>, row: T) => boolean): T | undefined {
      const bodyModel = this.getBodyModel();
      if (bodyModel instanceof AreaModelObjectArray){
        const am = bodyModel as unknown as AreaModelObjectArray<T>;
        return am.getAllRows().find(row => predicate(criteria, row));
      } else {
        console.warn('findRowFromAllRowsByAllCriteria(...) only works with AreaModelObjectArray<T>, but this body area model is ', (typeof bodyModel), bodyModel)
      }
    return undefined;
  }

  /**
   * Updates existing rows in the table body with new data.
   *
   * @template T - The type of elements in the rows array
   * @param {T[]} rows - An array of data objects containing the updated values
   * @param {(a: T, b: T) => boolean} predicate - A comparison function that determines which rows to update
   *   - Default predicate uses strict equality (===)
   *   - The function should return true if the row should be updated
   * 
   * @description
   * This method updates existing rows in the table body with new values from the provided rows array.
   * For each row in the table, if the predicate returns true when compared with any row in the provided array,
   * all properties from the provided row will be copied to the existing row.
   * It only works with tables that use AreaModelObjectArray as their body model.
   * 
   * @return {void} - This method doesn't return anything.
   * 
   * @throws {Warning} Logs a console warning if the table's body model is not an AreaModelObjectArray
   */
  updateRows<T>(rows: T[], predicate: (a: T, b: T) => boolean = (a, b) => a === b): void {
    const bodyModel = this.getBodyModel();
    if (bodyModel instanceof AreaModelObjectArray){
      const am = bodyModel as unknown as AreaModelObjectArray<T>;
      let allRows = am.getAllRows();
      for (const allRow of allRows) {
        for (const row of rows) {
          if (predicate(allRow, row)) {
            for (const key of Object.keys(row as any)) {
              (allRow as any)[key] = (row as any)[key];
            }
          }
        }     
      }

    } else {
      console.warn('updateRows<T>(rows: T[], predicate: (a: T, b: T) => boolean) only works with AreaModelObjectArray<T>, but this body area model is ', (typeof bodyModel), bodyModel)
    }
  }

  /**
   * Re-applies the current sorting configuration to the table data.
   *
   * @description
   * This method triggers a re-sort of the table data using the current sorting configuration.
   * It's useful when the underlying data has changed and needs to be re-sorted without changing
   * the sort columns or direction.
   * 
   * @return {void} - This method doesn't return anything.
   */
  reSort(){
    this.tableScope.reSort();
  }

  /**
   * Sorts the table data using a custom comparison function.
   * 
   * This method allows sorting of table rows by providing a custom comparison function. The comparison function
   * should follow the standard JavaScript array sort comparator pattern, returning:
   * - A negative number if the first element should be sorted before the second
   * - A positive number if the first element should be sorted after the second
   * - Zero if the elements are equal
   * 
   * @param compareFn - A function that defines the sort order. The function should accept two arguments
   *                   and return a number indicating their relative order:
   *                   - Negative number: first argument should come before second
   *                   - Positive number: second argument should come before first
   *                   - Zero: elements are equal
   * 
   * @example
   * // Sort table rows by a specific property in ascending order
   * table.api.sort((a, b) => {
   *   if (a.name < b.name) return -1;
   *   if (a.name > b.name) return 1;
   *   return 0;
   * });
   * 
   * @example
   * // Sort numbers in descending order
   * table.api.sort((a, b) => b.value - a.value);
   * 
   * @example
   * // Sort with multiple criteria
   * table.api.sort((a, b) => {
   *   // First sort by status
   *   const statusCompare = a.status.localeCompare(b.status);
   *   if (statusCompare !== 0) return statusCompare;
   *   
   *   // Then sort by name if status is equal
   *   return a.name.localeCompare(b.name);
   * });
   * 
   * @example
   * // Case-insensitive string sorting
   * table.api.sort((a, b) => 
   *   a.name.toLowerCase().localeCompare(b.name.toLowerCase())
   * );
   */
  sort(compareFn: (a: any, b: any) => number): void {
    this.tableScope.sort(compareFn);
  }


  /**
   * Ensures that a specific row is visible in the viewport by scrolling if necessary.
   * This method checks if the target row is within the currently visible range and
   * adjusts the scroll position if it's not visible.
   *
   * The method performs the following:
   * 1. Checks if the row is above the current viewport (before first visible row)
   * 2. Checks if the row is below the current viewport (after last visible row)
   * 3. Scrolls to make the row visible if needed
   *
   * @param {number} rowIndex - The index of the row to make visible
   * @returns {boolean} Returns true if scrolling was needed and performed, false if the row was already visible
   *
   * @example
   * // Ensure row 5 is visible in the viewport
   * tableApi.ensureRowIsVisible(5);
   *
   * @example
   * // Example usage in a component
   * class MyTableComponent {
   *   private tableApi: TableApi;
   *
   *   scrollToSpecificRow(rowIndex: number) {
   *     // This will scroll the row into view if it's not visible
   *     const didScroll = this.tableApi.ensureRowIsVisible(rowIndex);
   *
   *     if (didScroll) {
   *       console.log(`Table scrolled to show row ${rowIndex}`);
   *     } else {
   *       console.log(`Row ${rowIndex} was already visible`);
   *     }
   *   }
   * }
   *
   * @example
   * // Example with row selection
   * class TableHandler {
   *   selectAndShowRow(rowIndex: number) {
   *     // First ensure the row is visible
   *     this.tableApi.ensureRowIsVisible(rowIndex);
   *
   *     // Then perform selection
   *     this.selectionModel.selectRow(rowIndex);
   *   }
   * }
   *
   * @throws {Error} Implicitly may throw if rowIndex is not a number or if required properties are undefined
   *
   * @see {@link scrollToIndex} - The underlying method used for scrolling
   * @see {@link getDisplayedRowCount} - Related method for getting visible row count
   */
  ensureRowIsVisible(rowIndex:number):boolean{
    return this.tableScope.ensureRowIsVisible(rowIndex);
  }

  /**
   * Retrieves the number of rows currently displayed in the table.
   *
   * @description
   * This method returns the count of rows that are currently visible in the table after
   * applying any filtering, pagination, or other visibility constraints.
   * 
   * @return {number} The number of rows currently displayed in the table.
   */
  getDisplayedRowCount():number {
    return this.tableScope.getDisplayedRowCount();
  }


  /**
   * Returns the index of the first visible row in the table's viewport.
   *
   * This method retrieves the first visible row index from the table's scope, which is useful
   * for virtual scrolling and viewport-related calculations. The index represents the topmost
   * visible row in the current scroll position of the table.
   *
   * This value is maintained internally by the table and updated during scrolling operations.
   * It's particularly important for:
   * - Virtual scrolling optimization
   * - Calculating visible range of rows
   * - Viewport-related operations
   * - Scroll position restoration
   *
   * @returns {number} The index of the first visible row in the table's viewport.
   *                   Returns -1 if no rows are visible or if the table is not yet rendered.
   *
   * @example
   * ```typescript
   * // Get the first visible row index
   * const tableApi = new TableApi(tableScope);
   * const firstVisibleIndex = tableApi.getFirstVisibleRowIndex();
   *
   * // Use the index for scroll position calculations
   * if (firstVisibleIndex >= 0) {
   *   // Perform operations with the first visible row
   *   console.log(`First visible row index: ${firstVisibleIndex}`);
   * }
   * ```
   */
  getFirstVisibleRowIndex(): number {
    return this.tableScope.getFirstVisibleRowIndex();
  }

  /**
   * Retrieves the index of the first fully visible row in the table's viewport.
   *
   * A row is considered "fully visible" when it's completely within the visible area of the table.
   * This differs from the regular "visible" row, which might be partially visible at the edges of the viewport.
   *
   * This method is useful for:
   * - Determining which rows are completely in view for operations that require full visibility
   * - Implementing pagination or virtualization logic that needs to know complete row visibility
   * - Supporting keyboard navigation that should skip partially visible rows
   *
   * @returns {number} The index of the first fully visible row, or -1 if no rows are fully visible
   *
   * @example
   * // Get the first fully visible row index
   * const firstFullVisibleRow = tableApi.getFirstFullVisibleRowIndex();
   *
   * // Check if a specific row is fully visible
   * const isRowFullyVisible = (rowIndex) => {
   *   const firstFullVisible = tableApi.getFirstFullVisibleRowIndex();
   *   const lastFullVisible = tableApi.getLastFullVisibleRowIndex();
   *   return rowIndex >= firstFullVisible && rowIndex <= lastFullVisible;
   * };
   */
  getFirstFullVisibleRowIndex(): number {
    return this.tableScope.getFirstFullVisibleRowIndex();
  }


  /**
   * Returns the index of the last row that is visible in the table's viewport.
   *
   * This method retrieves the last visible row index from the table scope, which keeps
   * track of which rows are currently visible as the user scrolls through the table.
   *
   * This can be useful for:
   * - Implementing virtualized scrolling optimizations
   * - Determining if specific rows are currently in view
   * - Implementing features that need to know the visible range of rows
   *
   * @returns {number} The index of the last visible row in the table viewport
   *
   * @example
   * // Check if a specific row is currently visible in the viewport
   * const lastVisibleIndex = tableApi.getLastVisibleRowIndex();
   * const firstVisibleIndex = tableApi.getFirstVisibleRowIndex();
   * const isRowVisible = rowIndex >= firstVisibleIndex && rowIndex <= lastVisibleIndex;
   *
   * @example
   * // Get the range of visible rows
   * const visibleRowsRange = {
   *   first: tableApi.getFirstVisibleRowIndex(),
   *   last: tableApi.getLastVisibleRowIndex()
   * };
   * console.log(`Visible rows: ${visibleRowsRange.first} to ${visibleRowsRange.last}`);
   */
  getLastVisibleRowIndex(): number {
    return this.tableScope.getLastVisibleRowIndex();
  }

  /**
   * Returns the index of the last fully visible row in the table's viewport.
   *
   * This method retrieves the last row that is completely visible within the current
   * viewport of the table. A row is considered "fully visible" when its entire height
   * is visible without any portion being cut off by the viewport boundaries.
   *
   * The distinction between "visible" and "fully visible" is important when scrolling:
   * - A row can be partially visible (some portion is in view)
   * - A row can be fully visible (the entire row is in view)
   *
   * @returns {number} The index of the last fully visible row in the table.
   * If no row is fully visible or the table is empty, the method might return -1.
   *
   * @example
   * ```typescript
   * // Get the index of the last fully visible row
   * const lastVisibleRowIndex = tableApi.getLastFullVisibleRowIndex();
   *
   * // Use this information to determine if a specific row is fully visible
   * const isRowFullyVisible = rowIndex <= lastVisibleRowIndex && rowIndex >= tableApi.getFirstFullVisibleRowIndex();
   *
   * // Can be used with scrolling operations to ensure certain rows are visible
   * if (rowIndex > lastVisibleRowIndex) {
   *   tableApi.ensureRowIsVisible(rowIndex);
   * }
   * ```
   */
  getLastFullVisibleRowIndex(): number {
    return this.tableScope.getLastFullVisibleRowIndex();
  }


  /**
   * Checks whether logging is currently active for the table component.
   *
   * This method returns the current state of logging for the table. When logging is active,
   * the table outputs detailed information about its operations to the console, including:
   *
   * - Rendering processes and lifecycle events
   * - Data modifications and updates
   * - Event handling and user interactions
   * - Performance metrics and state changes
   *
   * Logging can be toggled using the `setLoggingActive(boolean)` method.
   *
   * @returns {boolean} True if logging is currently enabled, false otherwise.
   *
   * @example
   * // Check if logging is enabled
   * if (tableApi.isLoggingActive()) {
   *   console.log("Table logging is currently active");
   * }
   *
   * // Conditionally enable logging only if it's not already active
   * if (!tableApi.isLoggingActive()) {
   *   tableApi.setLoggingActive(true);
   *
   *   // Perform operations that need debugging
   *   tableApi.updateCells([
   *     {
   *       area: "body",
   *       rowIndex: 2,
   *       columnIndex: 3,
   *       value: "New Value",
   *       cssClasses: { "highlight": true }
   *     }
   *   ]);
   *
   *   // Run some additional operations...
   *
   *   // Disable logging when finished
   *   tableApi.setLoggingActive(false);
   * }
   */
  setLoggingActive(active:boolean): void {
    this.tableScope.loggingActive = active;
  }

  /**
   * Checks whether logging is currently active for the table component.
   *
   * This method returns the current state of logging for the table. When logging is active,
   * the table outputs detailed information about its operations to the console, including:
   *
   * - Rendering processes and lifecycle events
   * - Data modifications and updates
   * - Event handling and user interactions
   * - Performance metrics and state changes
   *
   * Logging can be toggled using the `setLoggingActive(boolean)` method.
   *
   * @returns {boolean} True if logging is currently enabled, false otherwise.
   *
   * @example
   * // Check if logging is enabled
   * if (tableApi.isLoggingActive()) {
   *   console.log("Table logging is currently active");
   * }
   *
   * // Conditionally enable logging only if it's not already active
   * if (!tableApi.isLoggingActive()) {
   *   tableApi.setLoggingActive(true);
   *
   *   // Perform operations that need debugging
   *   tableApi.updateCells([
   *     {
   *       area: "body",
   *       rowIndex: 2,
   *       columnIndex: 3,
   *       value: "New Value",
   *       cssClasses: { "highlight": true }
   *     }
   *   ]);
   *
   *   // Run some additional operations...
   *
   *   // Disable logging when finished
   *   tableApi.setLoggingActive(false);
   * }
   */
  isLoggingActive(): boolean {
    return this.tableScope.loggingActive;
  }


}
