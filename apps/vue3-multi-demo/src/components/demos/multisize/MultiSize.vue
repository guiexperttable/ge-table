<template>

  <a :href="gitUrl"  target="_blank">
    <q-btn class="source-button" round  icon="code" />
  </a>


  <div class="multi-size-demo">
    <guiexpert-table
      :tableModel="tableModel"
    ></guiexpert-table>
  </div>

</template>


<script lang="ts" setup>
import { GuiexpertTable } from "@guiexpert/vue3-table";
import { DefaultRowHeights, TableFactory } from '@guiexpert/table';
import { DemoMultisizeAreaModel } from './demo-multisize-area-model.ts';

const gitUrl = 'https://github.com/guiexperttable/ge-table/blob/main/apps/vue3-multi-demo/src/components/demos/multisize/MultiSize.vue';
const rowCount = 50;
const colCount = 50;
const columnSizes: number[] = [colCount];
for (let i = 0; i < colCount; i++) {
  columnSizes[i] = 50 + Math.floor(300 * Math.random());
}

const tableModel = TableFactory.createTableModel({
  headerAreaModel: new DemoMultisizeAreaModel("header", 2, colCount),
  bodyAreaModel: new DemoMultisizeAreaModel("body", rowCount, colCount),
  footerAreaModel: new DemoMultisizeAreaModel("footer", 2, colCount),
  fixedLeftColumnCount: 2,
  fixedRightColumnCount: 1,
  defaultRowHeights: new DefaultRowHeights(0, 0, 0),
  columnSizes
});


</script>

<style lang="postcss">

.multi-size-demo {
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
