<template>
  <div class="ge-table-label-div">
    <div class="ge-table-label red-color">
      <b>{{ label1 }}</b> @{{ label2 }}
    </div>
  </div>
</template>


<script lang="ts">
import { defineComponent } from "vue";


export default defineComponent({
  inheritAttrs: false,
  props: {
    rowIndex: {
      required: true,
      type: Number
    },
    columnIndex: {
      required: true,
      type: Number
    },
    areaIdent: {
      required: true,
      default: "body"
    },
    areaModel: {
      required: true
    },
    cellValue: {
      required: false,
      default: ""
    }
  },
  data() {
    return {
      label1: (() => {
        if (this.cellValue) {
          return this.cellValue.split("@")[0];
        }
        return "";
      })(),
      label2: (() => {
        if (this.cellValue) {
          return this.cellValue.split("@")[1];
        }
        return "";
      })()
    };
  }
});


</script>

<style lang="postcss">
.red-color {
  color: red;
}
</style>
