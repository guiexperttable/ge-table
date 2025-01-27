<!--see https://stackblitz.com/edit/vite-b6pgsmwh?file=src%2FApp.vue -->

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
import {
  ColumnDef,
  ColumnDefIf, NumberCellRenderer, px100,
  px120, px200, px300,
  px60, Size,
  TableFactory,
  TableOptions,
  TableOptionsIf,
  TrueFalseCellRenderer
} from '@guiexpert/table';

import { onMounted, reactive } from 'vue';
import { TableModelState } from '../../../common/table-model-state.ts';

const gitUrl = 'https://github.com/guiexperttable/ge-table/blob/main/apps/vue3-multi-demo/src/components/demos/autotable/AutoTable2.vue';

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

export interface XyzRowEntity {
  description?: string;
  id: number|null;
  isActive: boolean;
  name: string;
  preferences: PreferenceEntity[];
  profile: ProfileEntity;
  scripts: any[];
  tags: string[]|null;
}

export interface PreferenceEntity {
  key: string;
  value: string;
}

export interface ProfileEntity {
  age: number;
  location: string;
}


onMounted(async () => {

  const rows: XyzRowEntity[] = [
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

  const columnDefs: ColumnDefIf[] = [
    ColumnDef.create({
      property: "id",
      headerLabel: "ID",
      width: px60,
      bodyClasses: ["ge-table-text-align-left"],
      headerClasses: ["ge-table-text-align-left"],
    }),
    ColumnDef.create({
      property: "name",
      headerLabel: "Name",
      width: px120,
      bodyClasses: ["ge-table-text-align-left"],
      headerClasses: ["ge-table-text-align-left"],
    }),
    ColumnDef.create({
      property: "description",
      headerLabel: "Description",
      width: px200,
      bodyClasses: ["ge-table-text-align-left"],
      headerClasses: ["ge-table-text-align-left"],
    }),
    ColumnDef.create({
      property: "isActive",
      headerLabel: "Active",
      width: px100,
      bodyRenderer: new TrueFalseCellRenderer()
    }),
    ColumnDef.create({
      property: "tags",
      headerLabel: "Tags",
      width: px300,
      bodyClasses: ["ge-table-text-align-left"],
      headerClasses: ["ge-table-text-align-left"],
    }),
    ColumnDef.create({
      property: "profile.age",
      headerLabel: "Profile Age",
      width: new Size(200, "px"),
      bodyClasses: ["ge-table-text-align-right"],
      headerClasses: ["ge-table-text-align-right"],
      bodyRenderer: new NumberCellRenderer()
    }),
    ColumnDef.create({
      property: "profile.location",
      headerLabel: "Profile Location",
      width: px300,
      bodyClasses: ["ge-table-text-align-left"],
      headerClasses: ["ge-table-text-align-left"],
    }),
    ColumnDef.create({
      property: "preferences",
      headerLabel: "Preferences",
      width: px300,
      bodyClasses: ["ge-table-text-align-left"],
      headerClasses: ["ge-table-text-align-left"],
    }),
  ];

  const tableOptions: TableOptionsIf = {
    ...new TableOptions(),
    hoverColumnVisible: false,
    verticalBorderVisible: false,
    defaultRowHeights: {
      header: 34, body: 34, footer: 0
    },
  };

  state.tableModel = TableFactory.createTableModel({
    rows,
    columnDefs,
    tableOptions
  })
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
