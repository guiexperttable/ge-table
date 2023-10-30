
# SolidTable (GuiExpert Table)

This is the Solid component of the GuiExpert Table Project.

## Become a master at creating web applications with large tables

This is the UI-agnostic table component for your next web app. 😊

<img src="https://raw.githubusercontent.com/guiexperttable/ge-table/main/apps/table-website/src/assets/screens/heatmap.png" width="50%">

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

Add the following two NPM packages to your existing react project (run this in your project root directory):

```
npm install --save @guiexpert/table @guiexpert/solid-table
```

Import the following classes in your component:
```
import { SolidTable } from "@guiexpert/solid-table";
import {
  GeMouseEvent,
  TableApi
  TableModelFactory,
  TableModelIf,
  TableOptions,
  TableOptionsIf
} from "@guiexpert/table";
```


Add this code to the component:

```
function App() {
  let ref: any;

  onMount(() => {
    ref.addEventListener("mouseClicked", (e: CustomEvent<GeMouseEvent>) => console.info(e));
    ref.addEventListener("mouseMoved", (e: CustomEvent<GeMouseEvent>) => document.title = e.detail.rowIndex + "/" + e.detail.columnIndex);
    ref.addEventListener("tableReady", handleTableReady);
  });

  return (
    <div ref={ref}>
      <SolidTable
        tableModel={tableModel}
        tableOptions={tableOptions} />
    </div>
  );
}
function handleTableReady(api: any) {
  console.info("Table API:", api.detail);
}
```

There are numerous possibilities to create table models.
Please refer to the [Documentation](https://gui.expert/doc) for further information or the [Demo](https://gui.expert/demos) section for examples.



