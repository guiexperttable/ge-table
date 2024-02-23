<template>
    <div class="row-and-colspan-demo">
      <guiexpert-table
        :tableModel="tableModel"
      ></guiexpert-table>
    </div>
</template>


<script lang="ts" setup async>
import { GuiexpertTable } from "@guiexpert/vue3-table";
import {
  AreaModelArrayOfArrays,
  ColumnDef,
  ColumnDefIf,
  Size,
  TableFactory
} from '@guiexpert/table';
import { DemoRowAndColspanAreaModel } from './demo-row-and-colspan-area-model.ts';



const rowCount = 100;
const columnCount = 100;

const buf: string[][] = [];
for (let r = 0; r < rowCount; r++) {
  const row: string[] = [];
  buf.push(row);
  for (let c = 0; c < columnCount; c++) {
    row.push(`${r}/${c}`);
  }
}

const columnDefs: ColumnDefIf[] = [];
const labels: string[] = [];
for (let c = 0; c < columnCount; c++) {
  labels.push(`col ${c}`);
  columnDefs.push(new ColumnDef("", "", new Size(60, "px")));
}

const footer: string[][] = [];
for (let r = 0; r < 2; r++) {
  const row: string[] = [];
  footer.push(row);
  for (let c = 0; c < columnCount; c++) {
    row.push(`F${r}/${c}`);
  }
}

const tableModel = TableFactory.createTableModel({
  headerAreaModel: new AreaModelArrayOfArrays("header", [labels], 34),
  bodyAreaModel: new DemoRowAndColspanAreaModel("body", buf),
  footerAreaModel: new AreaModelArrayOfArrays("footer", footer, 34),
  columnDefs
});

</script>

<style lang="postcss">
.row-and-colspan-demo {
  width: 100%;
  height: calc(100vh - 50px);
}
.row-and-colspan-demo .bg-cyan {
  background-color: rgba(0, 255, 255, 0.20) !important;
}
.row-and-colspan-demo .bg-yellow {
  background-color: rgba(255, 255, 0, 0.70) !important;
}
.row-and-colspan-demo .bg-red {
  background-color: rgba(255, 0, 0, 0.40) !important;
}
</style>
