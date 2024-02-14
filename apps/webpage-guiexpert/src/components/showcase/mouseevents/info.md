---
layout: ../../../layouts/DemoCodeLayout.astro
---

This page can be found at 
[mouseevents/run.astro](https://github.com/guiexperttable/website-astro/blob/main/src/components/showcase/mouseevents/run.astro).

In this example, we demonstrate how to listen to table events.


If you're using plain JavaScript, implementing an 
[EventListener](https://gui.expert/api/interfaces/EventListenerIf.html) is necessary, 
as demonstrated in this example. 
For frameworks like Angular, events can be directly listened to in the 
framework-specific notation within the table tag.


```html title="angular"
<guiexpert-table
    (contextmenu)="onContextmenu($event)"
    (mouseClicked)="onMouseClick($event)"
    (mouseMoved)="onMouseMoved($event)"
    (tableReady)="onTableReady($event)"
    [tableModel]="tableModel"
    class="table-div"></guiexpert-table>
```

.


```tsx title="react"
return (
  <>
    <GuiexpertTable
      tableModel={tableModel}
      tableOptions={new TableOptions}
      mouseClicked={console.info as GeMouseEventFn}
    />
  </>
);
```

