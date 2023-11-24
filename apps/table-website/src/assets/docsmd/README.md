@guiexpert/table / [Exports](modules.md)

# GuiExpert Table with plain JS

This is the base component of the GuiExpert Table Project. One can use this in a plain JS project.

## Become a master at creating web applications with large tables

This is the UI-agnostic table component for your next web app. 😊

<img src="https://raw.githubusercontent.com/guiexperttable/ge-table/main/apps/table-website/src/assets/screens/heatmap.png" width="50%">

### Features
- Handle large datasets easily
- Excellent performance for large tables by vertical and horizontal virtual scrolling
- Fully-featured (advanced sorting and filtering)
- Highly customizable orderData grid
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

Add the following NPM package to your existing plain JS project (run this in your project root directory):

```
npm install --save @guiexpert/table
```

Add an empty <div> element to your html code:

```
<div
    class="container-div"
    style="width:100%;height:100%;background:transparent;margin:0;padding:0;"
    ></div>
```

If you are working with plain JS, you don't need to do this. If you are using TypeScript as a language, please import the following classes:
```
import {
  EventAdapter,
  SimpleDomService,
  TableModelIf,
  TableOptions,
  TableScope } from "@guiexpert/table";
```

Create a table model.
Select ('querySelector') the <div> element and create a table scope.
Finally, call firstInit() at least once.
In this example, you will see the plain TS version. For plain JS, remove ': TableModelIf'.

```
const tableModel: TableModelIf = TableFactory.createTableModel({
  headerData: [
    ['Header 1', 'Header 2']
  ],
  bodyData: [
    ['Text 1a', 'Text 2a'],
    ['Text 1b', 'Text 2b'],
  ]
});  

const ele = document.querySelector(".container-div") as HTMLDivElement;

const tableScope = new TableScope(
  ele, tableModel, new SimpleDomService(), new TableOptions(), new EventAdapter()
);
tableScope.firstInit();
```

There are numerous possibilities to create table models.
Please refer to the [Documentation](https://gui.expert/doc) for further information or the [Demo](https://gui.expert/demos) section for examples.
