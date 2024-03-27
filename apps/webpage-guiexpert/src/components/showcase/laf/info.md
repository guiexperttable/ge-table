---
layout: ../../../layouts/DemoCodeLayout.astro
---


Source of demo: [laf/run.astro](https://github.com/guiexperttable/website-astro/blob/main/src/components/showcase/laf/run.astro).

This demo shows how to switch the style (colors) dynamically at runtime.
The colors of the GuiExpert table are defined by CSS classes that use 
intensive CSS variables.
```ts
tableEle.style.setProperty('--ge-table-bg', '#101010');
```

This demo is only good for demonstration purposes.

For a real-world application in a productive environment, 
the better approach would be as follows:
One can create a new (or additional) theme by redefining these 
variables (as shown in the example here),
or by defining different CSS variable values using CSS selectors.
Two predefined sets can be found here: 
[table-color-vars.css](https://github.com/guiexperttable/ge-table/blob/main/packages/table/css/table-color-vars.css).




