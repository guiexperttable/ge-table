<template>
  <a :href="gitUrl"  target="_blank">
    <q-btn class="source-button" round  icon="code" />
  </a>


  <WidthResizeBox
    @onResized="onResized"
    style="width: max(calc(100vw - 500px),400px); height: calc(100vh - 50px);">
    <div class="four-rows">
      <template v-for="item in state.tableModels">
        <guiexpert-table
          @tableReady="onTableReady($event)"
          v-if="item"
          :tableModel="item"
          :tableOptions="tableOptions"></guiexpert-table>
      </template>
    </div>
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
  Renderer,
  Size, SizeIf,
  TableApi,
  TableFactory,
  TableOptions,
  TableOptionsIf
} from '@guiexpert/table';
import { onMounted, reactive } from 'vue';
import WidthResizeBox from '../../resizebox/WidthResizeBox.vue';
import { TableModelArrayState } from '../../../common/table-model-array-state.ts';

const gitUrl = 'https://github.com/guiexperttable/ge-table/blob/main/apps/vue3-multi-demo/src/components/demos/columnsizes/ColumnSizes.vue';

const state = reactive<TableModelArrayState>({
  tableModels: [undefined, undefined, undefined, undefined]
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

const tableApis: TableApi[] = [];

// Column model:
const columnDefsArr: Array<ColumnDefIf[]> = [
  createColumnDefs([
    new Size(200, 'px'),
    new Size(120, 'px'),
    new Size(80, 'px'),
    new Size(100, 'px'),
    new Size(50, 'px'),
  ]),
  createColumnDefs([
    new Size(20, '%'),
    new Size(20, '%'),
    new Size(50, 'px'),
    new Size(20, '%'),
    new Size(50, 'px'),
  ]),
  createColumnDefs([
    new Size(20, '%'),
    new Size(20, '%'),
    new Size(20, '%'),
    new Size(20, '%'),
    new Size(20, '%'),
  ]),
  createColumnDefs([
    new Size(1, 'weight'),
    new Size(1.5, 'weight'),
    new Size(50, 'px'),
    new Size(20, '%'),
    new Size(50, 'px'),
  ])
];





onMounted(async () => {
  const response = await fetch('/assets/demodata/tree-persons.json');
  const rows: PersonIf[] = await response.json();
  for (let i = 0; i < state.tableModels.length; i++) {
    state.tableModels[i] = TableFactory.createTableModel({
      rows: rows,
      columnDefs: columnDefsArr[i],
      tableOptions: tableOptions
    });
  }
});

function onResized(width: number) {
  console.info('demo comp onResized', width);
}

function onTableReady($event: TableApi) {
  tableApis.push($event);
}

function createColumnDefs(
  sizes: [SizeIf, SizeIf, SizeIf, SizeIf, SizeIf]
): ColumnDefIf[]{
  return   [
    new ColumnDef(
      'lastName',
      'Last Name',
      sizes[0]
    ),
    new ColumnDef(
      'preName',
      'Pre Name',
      sizes[1]
    ),
    new ColumnDef(
      'age',
      'Age',
      sizes[2],
      undefined,
      ColumnDef.bodyRenderer(new NumberCellRenderer())
    ),
    new ColumnDef(
      'birth',
      'Birthday',
      sizes[3],
      undefined,
      Renderer.bodyRenderer(new DateToIntlDDMMYYYYCellRenderer())
    ),
    ColumnDef.create({
      property: 'gender',
      headerLabel: ' ',
      width: sizes[4],
      bodyRenderer: new MaleFemaleToIconCellRenderer()
    })
  ];
}
</script>

<style lang="postcss">
.column-sizes-demo > * {
  width: 100%;
  height: 100%;
}
.four-rows {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr;
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
