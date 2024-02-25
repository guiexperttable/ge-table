<template>
  <a :href="gitUrl"  target="_blank">
    <q-btn class="source-button" round  icon="code" />
  </a>


  <div class="style-demo">
    <guiexpert-table
      :tableModel="tableModel"
      class="table-div"
    ></guiexpert-table>
  </div>
</template>


<script lang="ts" setup>
import { GuiexpertTable } from "@guiexpert/vue3-table";
import { DefaultRowHeights, TableFactory } from '@guiexpert/table';
import { DemoStyleAreaModel } from './demo-style-area-model.ts';
import { DemoStyleColorCellRenderer } from './demo-style-color-cell-renderer.ts';

const gitUrl = 'https://github.com/guiexperttable/ge-table/blob/main/apps/vue3-multi-demo/src/components/demos/style/CssStyle.vue';
const size = 40

const tableModel = TableFactory.createTableModel({
  bodyAreaModel: new DemoStyleAreaModel(1024, 1024, size, new DemoStyleColorCellRenderer()),
  defaultRowHeights: new DefaultRowHeights(0, size, 0),
  columnSizes: new Array(1024).fill(size)
});
</script>

<style lang="postcss">
.style-demo {
  width: 100%;
  height: calc(100vh - 50px);
}

.style-demo .ge-table-col-div {
  line-height: 1.3 !important;
  color: #fff;
  display: grid;
  place-items: center;
}

.style-demo .ge-table-row-border,
.style-demo .ge-table-column-border {
  display: none;
}

.style-demo .ge-table-col-div.text-color-red {
  color: #ff3400;
}

.style-demo .ge-table-col-div.text-color-yellow {
  color: yellow;
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
