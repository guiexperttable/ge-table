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
    ></guiexpert-table>
  </div>
</template>


<script lang="ts" setup>

import { GuiexpertTable } from "@guiexpert/vue3-table";
import {
  ActionEventIf, ColumnDef, ColumnWidths,
  CrudOptions,
  CrudTableModelFactory,
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
const gitUrl = 'https://github.com/guiexperttable/ge-table/blob/main/apps/vue3-multi-demo/src/components/demos/crud/Crud3.vue';

function onCreateClicked(){
  state.crudTableModelFactory?.openDialogForCreate();
}



onMounted(async () => {
  state.crudTableModelFactory = new CrudTableModelFactory();
  state.crudTableModelFactory.createTableModel(
    {
      ...new CrudOptions(),
      columnWidths: {
        ...new ColumnWidths(),
        takeHeaderLabelsIntoAccount: false
      },
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
    },
    {
      columnDefs:[
        ColumnDef.create({"property": "id", "headerLabel": "ID",}),
        ColumnDef.create({"property": "name", "headerLabel": "NAME",}),
        ColumnDef.create({"property": "username", "headerLabel": "USERNAME",}),
        ColumnDef.create({"property": "email", "headerLabel": "EMAIL",}),
        ColumnDef.create({"property": "phone", "headerLabel": "PHONE",}),
        ColumnDef.create({"property": "website", "headerLabel": "WEBSITE",}),

        ColumnDef.create({"property": "company.name", "headerLabel": "COMPANY",}),
        ColumnDef.create({"property": "company.catchPhrase", "headerLabel": "CATCHPHRAS",}),
        ColumnDef.create({"property": "company.bs", "headerLabel": "COMPANY BS",}),

        ColumnDef.create({"property": "address.street", "headerLabel": "STREET",}),
        ColumnDef.create({"property": "address.suite", "headerLabel": "SUITE",}),
        ColumnDef.create({"property": "address.city", "headerLabel": "CITY",}),
        ColumnDef.create({"property": "address.zipcode", "headerLabel": "ZIPCODE",}),
        ColumnDef.create({"property": "address.geo.lat", "headerLabel": "GEO LAT",}),
        ColumnDef.create({"property": "address.geo.lng", "headerLabel": "GEO LNG",}),
      ]
    },
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
