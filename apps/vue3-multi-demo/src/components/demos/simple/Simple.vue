<template>
  <a :href="gitUrl"  target="_blank">
    <q-btn class="source-button" round  icon="code" />
  </a>


  <div class="simple-demo">
    <guiexpert-table
      :tableModel="tableModel"
      @checkboxChanged="onCheckboxChanged($event)"
      @contextmenu="onContextmenu($event)"
      @modelChanged="onModelChanged($event)"
      @mouseClicked="onMouseClicked($event)"
      @mouseDragging="onMouseDragging($event)"
      @mouseDraggingEnd="onMouseDraggingEnd($event)"
      @mouseMoved="onMouseMoved($event)"
      @tableReady="onTableReady($event)"
    ></guiexpert-table>
  </div>
</template>


<script lang="ts" setup>

import { GuiexpertTable } from "@guiexpert/vue3-table";
import { GeMouseEvent, TableApi } from "@guiexpert/table";
import { generateSimpleModel } from "@guiexpert/demo-table-models";

const gitUrl = 'https://github.com/guiexperttable/ge-table/blob/main/apps/vue3-multi-demo/src/components/demos/simple/Simple.vue';

function onTableReady(api: TableApi) {
  console.info("demo onTableReady", api);
}

function onMouseClicked(evt: GeMouseEvent) {
  console.info("demo onMouseClicked", evt);
}

function onMouseDragging(evt: GeMouseEvent) {
  console.info("demo onMouseDragging", evt);
}

function onCheckboxChanged(evt: GeMouseEvent) {
  console.info("demo onCheckboxChanged", evt);
}

function onContextmenu(evt: GeMouseEvent) {
  console.info("demo onContextmenu", evt);
}

function onModelChanged(evt: GeMouseEvent) {
  console.info("demo onModelChanged", evt);
}

function onMouseDraggingEnd(evt: GeMouseEvent) {
  console.info("demo onMouseDraggingEnd", evt);
}

function onMouseMoved(evt: GeMouseEvent) {
  document.title = evt.rowIndex + "/" + evt.columnIndex + " " + evt.areaIdent;
}


const tableModel = generateSimpleModel(100, 100);

</script>

<style lang="postcss">

.simple-demo {
  width: 100%;
  height: calc(100vh - 50px);
}
.source-button  {
  position: absolute;
  right: 8px;
  top: 4px;
  z-index: 2001;
  background-color: #12f20280;
  color: #fff;
}
</style>
