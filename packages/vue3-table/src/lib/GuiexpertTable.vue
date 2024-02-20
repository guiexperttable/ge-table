<template>
  <div
    ref="root"
    class="container-div"
    style="width: 100%; height: 100%; background-color: transparent; padding: 0; margin: 0">
  </div>
</template>

<script lang="ts">
import {
  FocusModelIf,
  GeModelChangeEvent,
  GeMouseEvent,
  LicenseManager, SelectionModelIf,
  SimpleDomService,
  TableOptions,
  TableScope,
  TableModelIf, TableOptionsIf
} from '@guiexpert/table';
import { defineComponent, onMounted, PropType, ref } from 'vue';


export default defineComponent({
  inheritAttrs: false,
  props: {
    tableModel: {
      required: true,
      type: Object as PropType<TableModelIf>
    },
    tableOptions: {
      required: false,
      default: new TableOptions(),
      type: Object as PropType<TableOptionsIf>
    },
    debounceMouseClickDelay: {
      required: false,
      default: 150
    },
    licenseKey: {
      default: '',
      required: false
    }
  },
  emits: [
    "tableReady",
    "mouseClicked",
    "mouseDragging",
    "checkboxChanged",
    "contextmenu",
    "modelChanged",
    "focusChanged",
    "selectionChanged",
    "mouseDraggingEnd",
    "mouseMoved"
  ],

  setup(props, { emit }) {
    const root = ref(null);

    const initTable = (ele: HTMLDivElement) => {

      const listener = {

        onSelectionChanged: (evt: SelectionModelIf) => {
          emit("selectionChanged", evt);
        },

        onFocusChanged: (evt: FocusModelIf) => {
          emit("focusChanged", evt);
        },

        onCheckboxChanged: (evt: any[]) => {
          emit("checkboxChanged", evt);
        },

        onContextmenu: (evt: GeMouseEvent) => {
          emit("contextmenu", evt);
        },

        onModelChanged: (evt: GeModelChangeEvent) => {
          emit("modelChanged", evt);
        },

        onMouseClicked: (evt: GeMouseEvent) => {
          emit("mouseClicked", evt);
        },

        onMouseDragging: (evt: GeMouseEvent) => {
          emit("mouseDragging", evt);
        },

        onMouseDraggingEnd: (evt: GeMouseEvent) => {
          emit("mouseDraggingEnd", evt);
        },

        onMouseMoved: (evt: GeMouseEvent) => {
          emit("mouseMoved", evt);
        }
      };

      const tableScope = new TableScope(
        ele, props.tableModel, new SimpleDomService(), props.tableOptions, listener
      );
      tableScope.firstInit();
      emit("tableReady", tableScope.getApi());
    };


    onMounted(() => {
      if (root.value) {
        initTable(root.value as HTMLDivElement);
      }
    });

    if (props.licenseKey) LicenseManager.getInstance().setLicenseKey(props.licenseKey);

    return {
      root
    };
  }
});

</script>

<style >
@import "../../../table/css/main.css";
</style>