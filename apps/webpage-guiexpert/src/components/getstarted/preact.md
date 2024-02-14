---
layout: ../../layouts/GetStartedLayout.astro
---

# Stackblitz

You can find it on stackblitz:
<a href="https://stackblitz.com/edit/stackblitz-guiexpert-preact-table-simple?file=README.md" target="_blank">stackblitz-guiexpert-preact-table-simple</a>.


# Installation

Add the following NPM package to your existing Preact project
(run this in your project root directory):

```shell
npm install --save @guiexpert/table @guiexpert/preact-table
```


## Add global table CSS

To add the global guiexpert CSS file in your Preact project, 
you can include the file in the header of the `index.html` file:

```html
<link href="https://cdn.jsdelivr.net/gh/guiexperttable/ge-table@main/libs/table/css/main.css" rel="stylesheet" />
```

You will also find the `main.css` in the downloaded node module: `node_modules/@guiexpert/table/css/main.css`.


# Create an example component

Create a component and include the guiexpert tag in the template of your component

```tsx
/** @jsx h */
import { h } from 'preact';
import { GuiexpertTable } from '@guiexpert/preact-table';
import {
  createColumnDefs,
  createTableOptions,
  createTableRows,
} from '@guiexpert/demo-table-models';
import { TableFactory } from '@guiexpert/table';


export const App = () => {
  const tableOptions = createTableOptions();
  const rows = createTableRows();
  const columnDefs = createColumnDefs();

  const tableModel = TableFactory.buildByTypedRowsParam({
    rows,
    columnDefs,
    tableOptions,
    fixedLeftColumnCount: 1,
  });

  const tableReady = (api) => {
    console.info('Table API:', api);
  };

  const onMouseClicked = (evt) => {
    console.info('Mouse:', evt);
  };

  const onChildClicked = (e) => {
    console.warn('callback from parent triggered', e);
  };

  return (
    <GuiexpertTable
      tableModel={tableModel}
      tableOptions={tableOptions}
      mouseClicked={onMouseClicked}
      tableReady={tableReady}
    />
  );
};
```

Be sure, that your div containers expands. Add this CSS rule to your component's style.

```css
html,
body,
#app {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
}
```

