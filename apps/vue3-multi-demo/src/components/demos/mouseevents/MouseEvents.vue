<template>
  <div class="mouse-events-demo">
    <div class="filter-div">
      {{ debugText }}
    </div>
    <div class="table-div">
      <guiexpert-table
        :tableModel="tableModel"
        @contextmenu="onContextmenu"
        @mouseClicked="onMouseClick"
        @mouseMoved="onMouseMoved"
        :debounceMouseClickDelay="166"
      ></guiexpert-table>
    </div>
  </div>
</template>


<script lang="ts" setup async>
import { GuiexpertTable } from "@guiexpert/vue3-table";
import { GeMouseEvent, TableFactory } from '@guiexpert/table';
import { DemoMouseeventAreaModel } from './demo-mouseevent-area-model.ts';
import { ref } from 'vue';

function onContextmenu(evt: GeMouseEvent) {
  debugEvent(evt, 'onContextmenu');
}

function onMouseMoved(evt: GeMouseEvent) {
  debugEvent(evt);
  document.title = `${evt.rowIndex}/${evt.columnIndex} (${evt.areaIdent})`;
}

function onMouseClick(evt: GeMouseEvent) {
  debugEvent(evt);
}

function debugEvent(evt: GeMouseEvent, text: string = '') {
  debugText.value = `row index : ${evt.rowIndex}, col index : ${evt.columnIndex}, click count: ${evt.clickCount}, ${text}`;
}

const colCount = 40;
let debugText = ref('');

const columnSizes: number[] = [];
for (let i = 0; i < colCount; i++) {
  columnSizes.push(60 + (4 * i) % 60);
}
const tableModel = TableFactory.createTableModel({
  headerAreaModel: new DemoMouseeventAreaModel(2, columnSizes.length),
  bodyAreaModel: new DemoMouseeventAreaModel(200, columnSizes.length),
  footerAreaModel: new DemoMouseeventAreaModel(2, columnSizes.length),
  columnCount: columnSizes.length,
  overridingColumnWidth: -1,
  columnSizes
});

</script>

<style lang="postcss">
.mouse-events-demo {
  width: 100%;
  height: calc(100vh - 50px);
  display: grid;
  grid-template-rows: 50px 1fr;
}
.mouse-events-demo .filter-div {
  height: 50px;
  padding: 16px;
}
</style>
