<template>
  <a :href="gitUrl"  target="_blank">
    <q-btn class="source-button" round  icon="code" />
  </a>


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

import { onMounted, reactive } from 'vue';
import { TableModelState } from '../../../common/table-model-state.ts';

const gitUrl = 'https://github.com/guiexperttable/ge-table/blob/main/apps/vue3-multi-demo/src/components/demos/autotable/AutoTable1.vue';

const state = reactive<TableModelState>({
  tableModel: undefined,
  tableOptions: new TableOptions(),
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

  const rows: any[] = [
    {
      id: 1,
      name: 'Alice',
      description: 'Lorem ipsum dolor',
      isActive: true,
      tags: ['typescript', 'javascript'],
      scripts: [],
      profile: { age: 30, location: 'Berlin' },
      preferences: [{ key: 'theme', value: 'dark' }]
    },
    {
      id: 2,
      name: 'Marc',
      description: 'Lorem ipsum dolor 2',
      isActive: false,
      tags: ['java', 'javascript'],
      scripts: [],
      profile: { age: 55, location: 'Frankfurt' },
      preferences: [{ key: 'theme', value: 'light' }]
    },
    {
      id: null,
      name: 'Bob',
      isActive: false,
      tags: null,
      scripts: [],
      profile: { age: 25, location: 'Frankfurt' },
      preferences: [{ key: 'language', value: 'de' }]
    }
  ];

  const properties = ["id", "name", "description", "isActive", "tags", "profile.age", "profile.location", "preferences"];
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
</style>
