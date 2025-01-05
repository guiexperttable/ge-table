<template>
  <a :href="gitUrl"  target="_blank">
    <q-btn class="source-button" round  icon="code" />
  </a>

  <div class="crud-demo" v-if="state.tableModel">
    <div class="crud-action-div">
      <button @click="onCreateClicked">Create</button>
    </div>
    <guiexpert-table
      :tableModel="state.tableModel"
      :tableOptions="state.tableOptions"
      @tableReady="onTableReady($event)"
    ></guiexpert-table>
  </div>
</template>


<script lang="ts" setup>

import { GuiexpertTable } from "@guiexpert/vue3-table";
import {
  ActionEventIf,
  CrudOptions,
  CrudTableModelFactory, TableApi,
  TableModelAndOptionsIf,
  UrlInfo
} from '@guiexpert/table';
import { onMounted, reactive } from 'vue';
import { CrudTableModelState } from '../../../common/crud-table-model-state.ts';


const state = reactive<CrudTableModelState>({
  tableModel: undefined,
  tableOptions: undefined,
  crudTableModelFactory: undefined,
});
const gitUrl = 'https://github.com/guiexperttable/ge-table/blob/main/apps/vue3-multi-demo/src/components/demos/crud/Crud.vue';

function onCreateClicked(){
  state.crudTableModelFactory?.openDialogForCreate();
}

function onTableReady(_tableApi: TableApi) {

  // setTimeout(() => {
  //   tableApi.autoResizeColumns(false);
  //   tableApi.setColumnWidth(tableApi.getTableModel().getColumnCount() - 1, 400);
  //   tableApi.recalcWrappers();
  // }, 1000);

}

onMounted(async () => {
  state.crudTableModelFactory = new CrudTableModelFactory();
  state.crudTableModelFactory.createTableModel(
    {
      ...new CrudOptions(),
      urls: {
        create: new UrlInfo('POST', 'https://jsonplaceholder.typicode.com/users'),
        read: new UrlInfo('GET', 'https://jsonplaceholder.typicode.com/users/{id}'),
        update: new UrlInfo('PUT', 'https://jsonplaceholder.typicode.com/users/{id}'),
        delete: new UrlInfo('DELETE', 'https://jsonplaceholder.typicode.com/users/{id}'),
        list: new UrlInfo('GET', 'https://jsonplaceholder.typicode.com/users')
      },
      getIdKey: () => 'id',
      getEmptyItem: () => {
        return {
          id: null,
          name: "",
          username: "",
          email: "",
          address: {
            street: "",
            suite: "",
            city: "",
            zipcode: "",
            geo: {
              lat: "",
              lng: ""
            }
          },
          phone: "",
          website: "",
          company: {
            name: "",
            catchPhrase: "",
            bs: ""
          }
        };
      },
      // columnWidths: {
      //   ...new ColumnWidths(),
      //   autoCalc:false
      // }
    },
    {},
    (tableModelAndOptions: TableModelAndOptionsIf) => {
      state.tableModel = tableModelAndOptions.tableModel;
      state.tableOptions = tableModelAndOptions.tableOptions;
    },
    (actionEvent: ActionEventIf) => {
      console.log(actionEvent);
    }
  );
});

</script>

<style lang="postcss">

.crud-demo {
  width: 100%;
  height: calc(100vh - 50px);
  display: grid;
  grid-template-rows: auto 1fr;
}
.crud-action-div {
  display: flex;
  gap: 12px;
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
