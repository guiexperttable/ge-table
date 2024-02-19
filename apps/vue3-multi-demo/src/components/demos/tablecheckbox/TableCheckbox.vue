<template>
  <div class="table-checkbox-demo">
    <guiexpert-table
      @checkboxChanged="onCheckboxChanged($event)"
      :tableModel="tableModel"
      :tableOptions="tableOptions"
      class="table-div"></guiexpert-table>
  </div>
</template>


<script lang="ts" setup async>

import { GuiexpertTable } from "@guiexpert/vue3-table";
import {
  CheckboxColumnDef,
  ColumnDef,
  ColumnDefIf,
  px120,
  px150,
  px250,
  px50,
  TableFactory,
  TableOptions,
  TableOptionsIf
} from "@guiexpert/table";
import { SimplePersonIf } from './simple-person.if.ts';

const fixedLeftColumnCount = 2;
const tableOptions: TableOptionsIf = {
  ...new TableOptions(),
  hoverColumnVisible: false,
  defaultRowHeights: {
    header: 50,
    body: 34,
    footer: 0
  }
};


function onCheckboxChanged(evt: any[]) {
  console.info('onCheckboxChanged  evt:', evt);
}


const response = await fetch('/assets/demodata/persons1000.json');
const rows: SimplePersonIf[] = await response.json();
const columnDefs: ColumnDefIf[] = [
  // ColumnDef.create({
  //   property: "checked",
  //   width: px40,
  //   bodyRenderer: new CheckboxBooleanPropertyCellRenderer<SimplePersonIf>("checked", true)
  // }),
  new CheckboxColumnDef(), //  <--- short, no 'checked' property needed, bodyAreaModel.rowSelectionModel used instead.
  new ColumnDef('firstName', 'First Name', px120),
  new ColumnDef('lastName', 'Last Name'),
  ColumnDef.create({
    property: 'email',
    width: px250,
    bodyClasses: ['ge-table-text-align-left']
  }),
  new ColumnDef('ipAddress', 'IP', px150),
  new ColumnDef('id', 'ID', px50)
];

const tableModel = TableFactory.createTableModel({
  rows,
  columnDefs,
  tableOptions,
  fixedLeftColumnCount
});



</script>

<style lang="postcss" >
.table-checkbox-demo {
  width: 100%;
  height: calc(100vh - 50px);
}

.table-checkbox-demo .ge-table-col-div ,
.table-checkbox-demo .ge-table-header .ge-table-label-div {
  display: grid;
  place-items: center;
}

.table-checkbox-demo .ge-table-row-even .ge-table-col-div {
  background-color: rgba(250, 250, 250, 0.3);
}

.table-checkbox-demo .table-div .ge-table-row-odd .ge-table-col-div {
  background-color: rgba(255, 255, 255, 0.3);;
}
</style>
