# @guiexpert/angular-table

This is the angular component of the GuiExpert Table Project.

## Become a master at creating web applications with large tables

This is the UI-agnostic table component for your next web app. 😊

<img src="https://raw.githubusercontent.com/guiexperttable/table-website/main/src/assets/screens/heatmap.png" width="50%">

### Features
- Handle large datasets easily
- Excellent performance for large tables by vertical and horizontal virtual scrolling
- Fully-featured (advanced sorting and filtering)
- Highly customizable data grid
- Outstanding performance
- No third-party dependencies
- UI-agnostic
- Column Interactions (resize, reorder)
- Sorting Rows
- Row, Column, and Range Selection
- Single and Multi Selection
- UI-agnostic
- Row and Column Spanning
- Fixed Columns (Left and Right)
- Tree table (Hierarchical View)
- Accessibility support: Keyboard Shortcuts
- Custom Filtering
- In-place Cell Editing
- Userdefined Key and Mouse Events
- Customizable Look & Feel (via CSS variables)
- Row sorting
- Column Reordering (Drag and Drop)
- State Persistence (Row Sorting, Column Order, Selection)
- Customizable Cell Contents via Renderer for Header, Body and Footer
- Full control over the HTML structure and style


## Links

- [Demos](https://gui.expert/demos)
- [Documentation](https://gui.expert/doc)
- [API](https://gui.expert/api)

## Get Started

Add the following two NPM packages to your existing angular project (run this in your project root directory):

```
npm install --save @guiexpert/table @guiexpert/angular-table
```

Import the (standalone) TableComponent in your angular module:

```
@NgModule({
    imports: [
      CommonModule,
      TableComponent, ...
```

Add guiexpert-table component to a template:

```
<guiexpert-table
  [tableModel]="tableModel"
  [tableOptions]="tableOptions"
  class="table-div"
></guiexpert-table>
```
    

Add two properties (tableModel and tableOptions) to the component:

```
import {
  TableModelFactory,
  TableModelIf,
  TableOptions,
  TableOptionsIf
} from "@guiexpert/table";

tableModel = TableModelFactory.createByArrayOfArraysParams<any>({
  columnLabels: [
    ['Header 1', 'Header 2']
  ],
  data: [
    ['Text 1a', 'Text 2a'],
    ['Text 1b', 'Text 2b'],
  ]
};

tableOptions = {
  ...new TableOptions(),
  hoverColumnVisible: false,
  defaultRowHeights: {
  header: 40,
  body: 34,
  footer: 0
}

```

There are numerous possibilities to create table models. 
Please refer to the [Documentation](https://gui.expert/doc) for further information or the [Demo](https://gui.expert/demos) section for examples.
