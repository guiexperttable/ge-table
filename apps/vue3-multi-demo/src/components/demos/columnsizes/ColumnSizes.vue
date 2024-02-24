<template>
  <WidthResizeBox
    @onResized="onResized"
    style="width: 400px; height: calc(100vh - 50px);">

    <guiexpert-table
      @tableReady="onTableReady($event)"
      v-if="state.tableModel"
      :tableModel="state.tableModel"
      :tableOptions="tableOptions"></guiexpert-table>
  </WidthResizeBox>
</template>


<script lang="ts" setup>
import { GuiexpertTable } from '@guiexpert/vue3-table';
import { PersonIf } from './data/person.if.ts';
import {
  ColumnDef,
  ColumnDefIf,
  DateToIntlDDMMYYYYCellRenderer,
  MaleFemaleToIconCellRenderer,
  NumberCellRenderer,
  px50,
  Renderer,
  Size,
  TableApi,
  TableFactory,
  TableOptions,
  TableOptionsIf
} from '@guiexpert/table';
import { onMounted, reactive } from 'vue';
import { TableModelState } from '../../../common/table-model-state.ts';
import WidthResizeBox from '../../resizebox/WidthResizeBox.vue';

const state = reactive<TableModelState>({
  tableModel: undefined
});

const tableOptions: TableOptionsIf = {
  ...new TableOptions(),
  hoverColumnVisible: false,
  defaultRowHeights: {
    header: 50,
    body: 34,
    footer: 0
  }
};

let tableApi: TableApi | undefined;

// Column model:
let columnDefs: ColumnDefIf[] = [
  new ColumnDef(
    'lastName',
    'Last Name',
    new Size(20, '%')
  ),
  new ColumnDef(
    'preName',
    'Pre Name',
    new Size(20, '%') /*px120*/
  ),
  new ColumnDef(
    'age',
    'Age',
    new Size(20, '%')/*px80*/,
    undefined,
    ColumnDef.bodyRenderer(new NumberCellRenderer())
  ),
  new ColumnDef('birth', 'Birthday', /*px100*/ new Size(20, '%'),
    undefined,
    Renderer.bodyRenderer(new DateToIntlDDMMYYYYCellRenderer())
  ),
  ColumnDef.create({
    property: 'gender',
    headerLabel: ' ',
    width: px50,
    bodyRenderer: new MaleFemaleToIconCellRenderer()
  })
];


onMounted(async () => {
  const response = await fetch('/assets/demodata/tree-persons.json');
  const rows: PersonIf[] = await response.json();
  state.tableModel = TableFactory.createTableModel({
    rows: rows,
    columnDefs: columnDefs,
    tableOptions: tableOptions
  });
});

function onResized(width: number) {
  if (tableApi) {
    console.info('onDivResized...', width);
    tableApi.recalcColumnWidths(width); // TODO this must be the job of the table lib
    tableApi.repaintHard(); // TODO this must be the job of the table lib
  }
}

function onTableReady($event: TableApi) {
  tableApi = $event;
}
</script>

<style lang="postcss">
.column-sizes-demo > * {
  width: 100%;
  height: 100%;
}
</style>
