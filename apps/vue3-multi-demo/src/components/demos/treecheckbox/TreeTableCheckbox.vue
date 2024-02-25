<template>
  <a :href="gitUrl"  target="_blank">
    <q-btn class="source-button" round  icon="code" />
  </a>


  <div class="treetable-checkbox-demo">
    <guiexpert-table
      @checkboxChanged="onCheckboxChanged($event)"
      :tableModel="tableModel"
      :tableOptions="tableOptions"></guiexpert-table>
  </div>
</template>


<script lang="ts" setup>

import { GuiexpertTable } from "@guiexpert/vue3-table";
import {
  TableOptions,
  TableOptionsIf
} from "@guiexpert/table";
import { generateTreeCheckboxModel } from '@guiexpert/demo-table-models';

const gitUrl = 'https://github.com/guiexperttable/ge-table/blob/main/apps/vue3-multi-demo/src/components/demos/treecheckbox/TreeTableCheckbox.vue';
const tableOptions: TableOptionsIf = {
  ...new TableOptions(),
  hoverColumnVisible: false,
  defaultRowHeights: {
    header: 50,
    body: 34,
    footer: 0
  },
  showCheckboxWihoutExtraColumn: true // <-- true: we will see the checkbox IN the first column after the arrow
};

const tableModel = generateTreeCheckboxModel();


function onCheckboxChanged(evt: any[]) {
  console.info('onCheckboxChanged  evt:', evt);
}

</script>

<style lang="postcss" >
.treetable-checkbox-demo {
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
