<template>
  <div class="tree-table-demo" v-if="state.tableModel">
    <div class="filter-div">
      <input v-model="filterText"  maxlength="20" @keyup="onFilterTextChanged" @change="onFilterTextChanged">
      <button @click="onCopyClicked" title="See console out">Copy</button>
    </div>

    <guiexpert-table
      :tableModel="state.tableModel"
      :tableOptions="tableOptions"
      @tableReady="onTableReady($event)"
      @modelChanged="onModelChanged($event)"
    ></guiexpert-table>
  </div>
</template>


<script lang="ts" setup>
import { GuiexpertTable } from "@guiexpert/vue3-table";
import { PersonIf } from './data/person.if.ts';
import {
  AutoRestoreOptions,
  CellRange,
  ColumnDef,
  ColumnDefIf,
  DateToIntlDDMMYYYYCellRenderer,
  TableFactory,
  FalseFn,
  GeModelChangeEvent,
  MaleFemaleToIconCellRenderer,
  NumberCellRenderer,
  px100,
  px120,
  px150,
  px200,
  px50,
  px60,
  px70,
  px80,
  Renderer,
  SelectCellRenderer,
  SelectionModel,
  TableApi,
  TreeFactory,
  TableOptions,
  TableOptionsIf,
  TreeRow,
  TrueFn,
  ValueLabel,
} from '@guiexpert/table';
import { onMounted, reactive } from "vue";
import { TableModelState } from '../../../common/table-model-state.ts';

const state = reactive<TableModelState>({
  tableModel: undefined
});

const selectionModel = new SelectionModel("range", "multi");
let filterText = "";

function filterFn(value: TreeRow<PersonIf>, _index: number, _array: PersonIf[]) {
  return !filterText || value.data.address.city.includes(filterText);
}

function onTableReady($event: TableApi) {
  tableApi = $event;
}

function onModelChanged(evt: GeModelChangeEvent) {
  console.info(evt);
}

function onFilterTextChanged() {
  console.info('onFilterTextChanged', tableApi);
  if (tableApi) {
    tableApi.externalFilterChanged();
  }
}

function onCopyClicked() {
  if (tableApi) {
    tableApi.copyToClipboard().then(console.info);
  }
}

// Table options:
const tableOptions: TableOptionsIf = {
  ...new TableOptions(),
  hoverColumnVisible: false,
  defaultRowHeights: {
    header: 50,
    body: 34,
    footer: 0
  },
  autoRestoreOptions: {
    ...new AutoRestoreOptions<PersonIf>(),
    getStorageKeyFn: () => "demoColumndefComponent",
    autoRestoreCollapsedExpandedState: true,
    autoRestoreScrollPosition: true,
    autoRestoreSortingState: true,
    autoRestoreSelectedState: false
  },
  externalFilterFunction: filterFn.bind(this),
  getSelectionModel: () => selectionModel
};


// Column model:
let columnDefs: ColumnDefIf[] = [
  new ColumnDef("lastName", "Last Name", px200),
  new ColumnDef("preName", "Pre Name", px120),
  new ColumnDef("age", "Age", px80, undefined, ColumnDef.bodyRenderer(new NumberCellRenderer())),
  new ColumnDef("birth", "Birthday", px100,
    undefined,
    Renderer.bodyRenderer(new DateToIntlDDMMYYYYCellRenderer())),

  ColumnDef.create({
    property: "gender",
    headerLabel: " ",
    width: px50,
    bodyRenderer: new MaleFemaleToIconCellRenderer(),
    editable: TrueFn,
    getEditRenderer: () => new SelectCellRenderer([
      new ValueLabel("female", "♀"),
      new ValueLabel("male", "♂")
    ])
  }),

  new ColumnDef("address.street", "Strasse", px150),
  new ColumnDef("address.number", "Nr", px70),
  new ColumnDef("address.zip", "Zip", px60),
  new ColumnDef("address.city", "City", px120),
  new ColumnDef("address.country", "Country", px120),
  new ColumnDef("id", "ID", px60)
];
let tableApi: TableApi | undefined;


for (const columnDef of columnDefs) {
  columnDef.sortable = TrueFn;
  columnDef.editable = TrueFn;
}
columnDefs[0].editable = FalseFn;
selectionModel.addSelection(new CellRange(0, 0, 0, 2));
selectionModel.addSelection(new CellRange(2, 1, 2, 2));
selectionModel.addSelection(new CellRange(1, 5, 6, 7));
selectionModel.addSelection(new CellRange(0, 8, 0, 8));
selectionModel.addSelection(new CellRange(5, 6, 10, 10));


onMounted(async () => {
  const response = await fetch('/assets/demodata/tree-persons.json');
  const rows: PersonIf[] = await response.json();
  const tree = TreeFactory.buildTreeRows<PersonIf>(rows, "friends");
  state.tableModel = TableFactory.createTableModel({
    rows: tree,
    columnDefs: columnDefs,
    tableOptions: tableOptions,
    fixedLeftColumnCount: 1,
    fixedRightColumnCount: 1
  });
});


</script>

<style lang="postcss">
.tree-table-demo {
  width: 100%;
  height: calc(100vh - 50px);
  display: grid;
  grid-template-rows: 70px 1fr;
}
.tree-table-demo .filter-div {
  display: grid;
  align-items: center;
  align-content: center;
  grid-template-columns: 200px 100px;
  grid-gap: 20px;
  height: 70px;
  overflow-y: clip;
}
</style>
