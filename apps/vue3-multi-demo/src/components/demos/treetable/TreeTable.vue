<template>
  <div class="table-div tree-table-demo">
    <div class="filter-div">
      <q-input bottom-slots v-model="filterText" label="Filter" counter maxlength="22" :dense="dense"
               @update:modelValue="onFilterTextChanged">
        <template v-slot:before>
          <q-icon name="search"></q-icon>
        </template>

        <template v-slot:append>
          <q-icon v-if="filterText !== ''" name="close" @click="filterText = ''" class="cursor-pointer"></q-icon>
        </template>

        <template v-slot:hint>
          Field hint
        </template>
      </q-input>

      <!--button mat-flat-button (click)="onCopyClicked()">Copy</button-->
    </div>
    <guiexpert-table
      :tableModel="tableModel"
      :tableOptions="tableOptions"
      @tableReady="onTableReady($event)"
      @modelChanged="onModelChanged($event)"
    ></guiexpert-table>
  </div>


</template>


<script lang="ts" setup async>
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
  TableModelIf,
  TableOptions,
  TableOptionsIf,
  TreeRow,
  TrueFn,
  ValueLabel
} from "@guiexpert/table";
import { ref } from 'vue';

let dense = ref(true);
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
  if (tableApi) {
    tableApi.externalFilterChanged();
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

const response = await fetch('/assets/demodata/tree-persons.json');
const rows: PersonIf[] = await response.json();

const tree = TreeFactory.buildTreeRows<PersonIf>(rows, "friends");
const tableModel: TableModelIf = TableFactory.createTableModel({
  rows: tree,
  columnDefs: columnDefs,
  tableOptions: tableOptions,
  fixedLeftColumnCount: 1,
  fixedRightColumnCount: 1
});
console.info('tree', tree);
</script>

<style lang="postcss">
.table-div {
  width: 100%;
  height: calc(100vh - 50px);
  display: grid;
  grid-template-rows: 50px 1fr;
}
.tree-table-demo .filter-div {
  display: grid;
  grid-template-columns: 200px 100px;
  grid-gap: 20px;
  //position: absolute;
  //top: 4px;
  //left: 226px;
  //width: 350px;
  height: 50px;
  overflow-y: clip;
  //opacity: 0.5;
}
</style>
