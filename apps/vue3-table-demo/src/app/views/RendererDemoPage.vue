<template>
  <div class="header-div">
    <strong>Custom Render</strong>
    <a href="/">Simple Demo</a>
  </div>
  <div class="table-div">
    <guiexpert-table
      :tableModel="tableModel"
      @tableReady="onTableReady($event)"
    ></guiexpert-table>
  </div>
</template>


<script lang="ts" setup>

import { ComponentRendererWrapper, GuiexpertTable } from "@guiexpert/vue3-table";
import { ColumnDefIf, TableApi, TableFactory, TreeFactory } from "@guiexpert/table";
import {
  applyBodyRenderer,
  createColumnDefs,
  createTableOptions,
  createTableRows,
  SimplePersonIf
} from "@guiexpert/demo-table-models";
import { default as GenderRendererComponent } from "../components/GenderRendererComponent.vue";
import { default as EmailRendererComponent } from "../components/EmailRendererComponent.vue";
import { getCurrentInstance } from "vue";

function onTableReady(api: TableApi) {
  console.info("demo onTableReady", api);
}


const internalInstance = getCurrentInstance();
const appContext = internalInstance !== null ? internalInstance.appContext : null;

const tableOptions = createTableOptions();
const rows: SimplePersonIf[] = createTableRows();
const columnDefs: ColumnDefIf[] = createColumnDefs();
applyBodyRenderer(columnDefs[2], new ComponentRendererWrapper(GenderRendererComponent, appContext));
applyBodyRenderer(columnDefs[3], new ComponentRendererWrapper(EmailRendererComponent, appContext));
const tableModel = TableFactory.buildByTypedRowsParam({
  rows,
  columnDefs,
  tableOptions,
  fixedLeftColumnCount: 0
});


</script>

<style lang="postcss">
@import '../../assets/css/global.css';

.header-div {
  height: 100px;
  overflow: clip;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;
}

.table-div {
  height: calc(100vh - 100px);
}

guiexpert-table {
  height: 100%;
}
</style>
