---
layout: ../../layouts/GetStartedLayout.astro
---

# Stackblitz


You can find it on stackblitz:
<a href="https://stackblitz.com/edit/stackblitz-guiexpert-tableplain-js-simple" target="_blank">stackblitz-guiexpert-tableplain-js-simple</a>.


# Installation

## Via npm
Add the following NPM package to your existing plain js project
(run this in your project root directory):

```shell
npm install --save @guiexpert/table
```

## Without npm

If you have a project without NPM, you can directly include the guiexpert module by manually downloading the necessary 
files and adding them to your project directory. 
Typically, you can download the required files from the official website or the repository of the guiexpert module.

After downloading, you can copy the files into your project directory and then use appropriate script 
tags in your HTML file to utilize the guiexpert module.


Here’s a basic example:

- Download the required guiexpert files and save them in your project folder.
- Use &lt;script> tags in your HTML file to include the guiexpert files.

```html
<!DOCTYPE html>
<html>
<head>
    <title>My GUIExpert Project</title>
    <!-- Add other meta tags, CSS files, etc. here -->
</head>
<body>
    <!-- The rest of your HTML structure -->

    <!-- Script tags to include guiexpert -->
    <script src="Path/To/guiexpert.js"></script>
    <link
        href="Path/To/guiexpert.css"
        rel="stylesheet"
    />
    <!-- Alternate: use a CDN: 
    <link
        href="https://cdn.jsdelivr.net/gh/guiexperttable/ge-table@main/libs/table/css/main.css"
        rel="stylesheet"
    />
    -->
    <!-- Other script tags for your application logic -->


</body>
</html>
```

Replace "Path/To/guiexpert.js" with the actual path to your downloaded guiexpert.js file.

Keep in mind that this may depend on any dependencies that guiexpert itself might have. 
You might also need to manually download and include other files or libraries if they are required by guiexpert.

Also, note that using NPM typically makes managing dependencies easier and simplifies integrating modules into projects. 
Manual inclusion might require more effort to ensure everything works correctly and stays up to date.


# Template

Add an empty <b>&lt;div></b> element to your html code:

```html
<div
    class="container-div"
    style="width:100%;height:100%;margin:0;padding:0;"></div>
```


Be sure, that your div container expands. Add this CSS rule to your parent component's style.

```css
.content {
  width: 100%;
  height: 100%;
  padding: 0;
  border: 0;
}
```


Include (from a CDN) the predefined &#64;guiexpert/table CSS rules to your project. 
You can do it by adding this tag in your index.html...
```html
<link 
    crossorigin="anonymous" media="all" rel="stylesheet" 
    href="https://cdn.jsdelivr.net/gh/guiexperttable/ge-table@main/libs/table/css/main.css" />
```

If you are working with plain JS, you don't need to do this.
If you are using TypeScript as a language, please import the following classes:

```ts
import {
  EventAdapter,
  SimpleDomService,
  TableFactory,
  TableModelIf,
  TableOptions,
      TableScope } from "@guiexpert/table";
```



Create a table model. Select ('querySelector') the <b>&lt;div></b> element and create a table scope.
Finally, call <b>firstInit()</b> at least once.
Below, you will see the plain TS version.
For plain JS, remove <b>': TableModelIf'</b>.

```ts
const headerData = [ ["Column 1", "Column 2", "Column 3"] ]; // array of array!

const bodyData = [];
for (let i=0; i<100; i++) {
  bodyData.push(["This is a very", "simple", "demo."]);
}

const tableModel: TableModelIf = TableFactory.createTableModel({
  headerData,
  bodyData,
  overridingColumnWidth: 110
});

const ele = document.querySelector(".container-div") as HTMLDivElement;

const tableScope = new TableScope(
  ele, tableModel, new SimpleDomService(), new TableOptions(), new EventAdapter()
);
tableScope.firstInit();
```


