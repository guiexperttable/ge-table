<template>
    <div class="table-div object-array-demo">
      <guiexpert-table
        :tableModel="tableModel"
        :tableOptions="tableOptions"
      ></guiexpert-table>
    </div>
</template>


<script lang="ts" setup async>
import { GuiexpertTable } from "@guiexpert/vue3-table";
import { TableFactory, TableOptions, TableOptionsIf } from '@guiexpert/table';
import { SimplePersonIf } from './simple-person.if.ts';


const tableOptions: TableOptionsIf = {
  ...new TableOptions(),
  hoverColumnVisible: false,
  defaultRowHeights: {
    header: 34,
    body: 34,
    footer: 0
  }
};

const response = await fetch('/assets/demodata/persons1000.json');
const rows: SimplePersonIf[] = await response.json();

const properties = ["id", "firstName", "lastName", "email", "gender", "ipAddress"];
const tableModel = TableFactory.createTableModel({
  properties,
  rows,
  defaultRowHeights: tableOptions.defaultRowHeights
});

</script>

<style lang="postcss">
.table-div.object-array-demo {
  width: 100%;
  height: calc(100vh - 50px);
}
</style>
