---
layout: ../../layouts/GetStartedLayout.astro
---

# Stackblitz

You can find it on stackblitz:
<a href="https://stackblitz.com/edit/stackblitz-guiexpert-vue3-simple?file=README.md" target="_blank">stackblitz-guiexpert-vue3-simple</a>.


# Installation

Add the following NPM package to your existing vue project
(run this in your project root directory):

```shell
npm install --save @guiexpert/table @guiexpert/vue3-table
```


## Add global table CSS

To add the global guiexpert CSS file in your Vue project, 
you can include the file in the header of the `index.html` file.

- Open the `index.html` file of your project.

- Look for the header section and add the link tag. It typically looks like this:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <link href="https://cdn.jsdelivr.net/gh/guiexperttable/ge-table@main/libs/table/css/main.css" rel="stylesheet" />
```

You will also find the `main.css` in the downloaded node module: `node_modules/@guiexpert/table/css/main.css`.


# Create an example component

Create a component and include the guiexpert tag in the template of your component

```html
<guiexpert-table
    :tableModel="tableModel"
    @tableReady="onTableReady($event)"
    class="table-div"
></guiexpert-table>
```

Be sure, that your div container expands. Add this CSS rule to your component's style.

```css
.table-div {
  width: 100%;
  height: 100%;
}
```

## Create a table model

Add a <i>tableModel</i> property and a <i>onTableReady</i> method to the component:

```ts
const tableModel: TableModelIf = TableFactory
  .createTableModel<any>({
    headerData: [
      ['Header 1', 'Header 2']
    ],
    bodyData: [
      ['Text 1a', 'Text 2a'],
      ['Text 1b', 'Text 2b'],
    ]
  };

function onTableReady(api: TableApi) {
  console.info("onTableReady API:", api);
}
```

