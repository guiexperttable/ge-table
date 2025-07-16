<template>
  <a :href="gitUrl"  target="_blank">
    <q-btn class="source-button" round  icon="code" />
  </a>

  <div class="ensure-div">
    ensureRowIsVisible:
    <input type="number" v-model="rowIndex" @input="numberChanged" />
  </div>


  <div class="object-array-demo">
      <guiexpert-table
        v-if="state.tableModel"
        :tableModel="state.tableModel"
        :tableOptions="tableOptions"
        @tableReady="onTableReady"
      ></guiexpert-table>
    </div>
</template>


<script lang="ts" setup>
import { GuiexpertTable } from "@guiexpert/vue3-table";
import { TableApi, TableFactory, TableOptions, TableOptionsIf } from '@guiexpert/table';
import { SimplePersonIf } from './simple-person.if.ts';
import { onMounted, reactive, ref } from 'vue';
import { TableModelState } from '../../../common/table-model-state.ts';

const gitUrl = 'https://github.com/guiexperttable/ge-table/blob/main/apps/vue3-multi-demo/src/components/demos/objectarray/ObjectArray.vue';

const state = reactive<TableModelState>({
  tableModel: undefined,
  tableOptions: new TableOptions(),
});

const rowIndex = ref(0);
const tableApiRef = ref<TableApi | null>(null);

const onTableReady = (api: TableApi) => {
  console.info('tableReady event received, tableApi:', api);
  tableApiRef.value = api;
};

const numberChanged = () => {
  if (state.tableModel && tableApiRef.value && rowIndex.value >= 0) {
    console.info('ensureRowIsVisible  rowIndex:', rowIndex.value);
    tableApiRef.value.ensureRowIsVisible(rowIndex.value);
  }
};

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
  let rows: SimplePersonIf[] = await response.json();
  rows = rows.slice(0, 100);
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
.source-button  {
  position: absolute;
  right: 8px;
  top: 4px;
  z-index: 2001;
  background-color: #12f20280;
  color: #fff;
}
.ensure-div  {
  position: absolute;
  right: 300px;
  top: 4px;
  z-index: 2001;
  color: #fff;
}
</style>

