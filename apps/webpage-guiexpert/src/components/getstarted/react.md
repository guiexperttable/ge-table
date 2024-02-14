---
layout: ../../layouts/GetStartedLayout.astro
---

# Stackblitz

You can find it on stackblitz:
<a href="https://stackblitz.com/edit/stackblitz-guiexpert-react-table-typescript?file=README.md" target="_blank">stackblitz-guiexpert-react-table-typescript</a>.


# Installation

Add the following NPM package to your existing React project
(run this in your project root directory):

```shell
npm install --save @guiexpert/table @guiexpert/react-table
```


## Add global table CSS

To add the global guiexpert CSS file in your React project, 
you can include the file in the header of the `index.html` file:

```html
<link href="https://cdn.jsdelivr.net/gh/guiexperttable/ge-table@main/libs/table/css/main.css" rel="stylesheet" />
```

You will also find the `main.css` in the downloaded node module: `node_modules/@guiexpert/table/css/main.css`.


# Create an example component

Create a component and include the guiexpert tag in the template of your component

```tsx
import React from 'react';
import { GuiexpertTable } from '@guiexpert/react-table';
import { TableFactory } from '@guiexpert/table';
import { TableOptions} from '@guiexpert/table';

export const App = () => {
    const headerData = [['Column 1', 'Column 2', 'Column 3']]; // array of array!
    
    const bodyData = [];
    for (let i = 0; i < 100; i++) {
      bodyData.push(['This is a very', 'simple', 'demo.']);
    }
    
    const tableModel = TableFactory.createTableModel({
        headerData,
        bodyData,
        overridingColumnWidth: 110,
    });
    
    console.info(tableModel);
    
    return (
        <>
        <GuiexpertTable
            tableModel={tableModel}
            tableOptions={new TableOptions()}
        />
        </>
    );
};
```

Be sure, that your div containers expands. Add this CSS rule to your component's style.

```css
html,
body,
#root {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
}
```

