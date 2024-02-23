<template>
    <div class="object-array-demo">
      <guiexpert-table
        v-if="state.tableModel"
        :tableModel="state.tableModel"
        :tableOptions="tableOptions"
      ></guiexpert-table>
    </div>
</template>


<script lang="ts" setup>
import { GuiexpertTable } from "@guiexpert/vue3-table";
import { TableFactory, TableOptions, TableOptionsIf } from '@guiexpert/table';
import { SimplePersonIf } from './simple-person.if.ts';
import { onMounted, reactive } from 'vue';
import { TableModelState } from '../../../common/table-model-state.ts';

const state = reactive<TableModelState>({
  tableModel: undefined
});

const tableOptions: TableOptionsIf = {
  ...new TableOptions(),
  hoverColumnVisible: false,
  defaultRowHeights: {
    header: 34,
    body: 34,
    footer: 0
  }
};

onMounted(async () => {
  const response = await fetch('/assets/demodata/persons1000.json');
  const rows: SimplePersonIf[] = await response.json();

  const properties = ["id", "firstName", "lastName", "email", "gender", "ipAddress"];
  state.tableModel = TableFactory.createTableModel({
    properties,
    rows,
    defaultRowHeights: tableOptions.defaultRowHeights
  });
});

</script>

<style lang="postcss">
.object-array-demo {
  width: 100%;
  height: calc(100vh - 50px);
}
</style>
