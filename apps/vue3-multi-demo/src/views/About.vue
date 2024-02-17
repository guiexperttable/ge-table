<template>
  <div class="table-div">
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

.table-div {
  width: 100%;
  height: calc(100vh - 50px);
}
</style>
