<template>
  <div class="table-div multi-size-demo">
    <guiexpert-table
      :tableModel="tableModel"
      class="table-div"
    ></guiexpert-table>
  </div>
</template>


<script lang="ts" setup>
import { GuiexpertTable } from "@guiexpert/vue3-table";
import { DefaultRowHeights, TableFactory } from '@guiexpert/table';
import { DemoMultisizeAreaModel } from './demo-multisize-area-model.ts';

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

.table-div.multi-size-demo {
  width: 100%;
  height: calc(100vh - 50px);
}
</style>
