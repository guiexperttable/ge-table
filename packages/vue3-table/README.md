
# guiexpert-table (Vue)

This is the vue component of the GuiExpert Table Project.

## Become a master at creating web applications with large tables

This is the UI-agnostic table component for your next web app. 😊

<img src="https://raw.githubusercontent.com/guiexperttable/ge-table/main/apps/webpage-guiexpert/src/assets/screens/heatmap.png" width="50%">

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

Add the following two NPM packages to your existing react project (run this in your project root directory):

```
npm install --save @guiexpert/table @guiexpert/vue3-table
```

Add guiexpert-table component to a template:

```
  <guiexpert-table
    :tableModel="tableModel"
    @tableReady="onTableReady($event)"
  ></guiexpert-table>
```

Import the following classes in your component:
```
<script lang="ts" setup>

import { GuiexpertTable } from "@guiexpert/vue3-table";
import {
  GeMouseEvent,
  TableApi
  TableFactory,
  TableModelIf,
  TableOptions,
  TableOptionsIf
} from "@guiexpert/table";
```


Add a tableModel property and a onTableReady method to the component:

```
const headerData = [['Column 1', 'Column 2', 'Column 3']] // array of array!

const bodyData = []
for (let i = 0; i < 100; i++) {
  bodyData.push(['This is a very', 'simple', 'demo.'])
}

const tableModel: TableModelIf = TableFactory.createTableModel({
  headerData,
  bodyData,
  overridingColumnWidth: 110,
});

function onTableReady(api: TableApi) {
  console.info("onTableReady API:", api);
}
```

There are numerous possibilities to create table models.
Please refer to the [Documentation](https://gui.expert/doc) for further information or the [Demo](https://gui.expert/demos) section for examples.



