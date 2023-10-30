<template>
  <div class="ge-table-label-div">
    <div
      :class="{
        'blue-color': cellValue === 'Male',
        'red-color': cellValue === 'Female'
      }"
      class="ge-table-label">
      {{ label }}
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
      label: (() => {
        if (this.cellValue === "Male" || this.cellValue === "m") {
          return "♂";
        }
        if (this.cellValue === "Female" || this.cellValue === "f") {
          return "♀";
        }
        if (this.cellValue === "Genderfluid") {
          return ".";
        }
        return "";
      })()
    };
  }
});


</script>

<style lang="postcss">
.blue-color {
  color: #0085db;
}

.red-color {
  color: #e00034;
}
</style>
