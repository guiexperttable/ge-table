<template>
  <a :href="gitUrl"  target="_blank">
    <q-btn class="source-button" round  icon="code" />
  </a>

  <div class="crud-demo" v-if="state.tableModel">
    <guiexpert-table
      @selectionChanged="onSelectionChanged($event)"
      :tableModel="state.tableModel"
      :table-options="state.tableOptions"
    ></guiexpert-table>
  </div>
</template>


<script lang="ts" setup>

import { GuiexpertTable } from "@guiexpert/vue3-table";
import {
  CrudOptions,
  CrudTableModelFactory,
  SelectionModelIf,
  TableModelAndOptionsIf, UrlInfo
} from '@guiexpert/table';
import { onMounted, reactive } from 'vue';
import { TableModelState } from '../../../common/table-model-state.ts';

function onSelectionChanged(_evt: SelectionModelIf) {
  // console.info("crud demo onSelectionChanged", evt);
}

const state = reactive<TableModelState>({
  tableModel: undefined,
  tableOptions: undefined,
});
const gitUrl = 'https://github.com/guiexperttable/ge-table/blob/main/apps/vue3-multi-demo/src/components/demos/crud/Crud.vue';


onMounted(async () => {
  new CrudTableModelFactory().createTableModel(
    {
      ...new CrudOptions(),
      urls: {
        create: new UrlInfo('POST', 'https://jsonplaceholder.typicode.com/todos'),
        read: new UrlInfo('GET', 'https://jsonplaceholder.typicode.com/todos/{id}'),
        update: new UrlInfo('PUT', 'https://jsonplaceholder.typicode.com/todos/{id}'),
        delete: new UrlInfo('DELETE', 'https://jsonplaceholder.typicode.com/todos/{id}'),
        list: new UrlInfo('GET', 'https://jsonplaceholder.typicode.com/todos')
      }
    },
    {},
    (tableModelAndOptions: TableModelAndOptionsIf) => {
      state.tableModel = tableModelAndOptions.tableModel;
      state.tableOptions = tableModelAndOptions.tableOptions;
    }
  );
});

</script>

<style lang="postcss">

.crud-demo {
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
