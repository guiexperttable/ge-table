<script lang="ts">
  import { createEventDispatcher, onMount } from "svelte";
  // import { SimpleDomService, TableOptions, TableScope } from "@guiexpert/table";
  import { SimpleDomService, TableOptions, TableScope } from "../../table/src";

  export let tableModel:any;
  export let tableOptions = new TableOptions();

  let root:any;
  const dispatch = createEventDispatcher();

  onMount(() => {

    const listener = {
      onCheckboxChanged: (evt: any) => {
        dispatch("checkboxChanged", evt);
      },

      onContextmenu: (evt: any) => {
        dispatch("contextmenu", evt);
      },

      onModelChanged: (evt: any) => {
        dispatch("modelChanged", evt);
      },

      onMouseClicked: (evt: any) => {
        dispatch("mouseClicked", evt);
      },

      onMouseDragging: (evt: any) => {
        dispatch("mouseDragging", evt);
      },

      onMouseDraggingEnd: (evt: any) => {
        dispatch("mouseDraggingEnd", evt);
      },

      onMouseMoved: (evt: any) => {
        dispatch("mouseMoved", evt);
      }
    };

    const tableScope = new TableScope(
      root, tableModel, new SimpleDomService(), tableOptions, listener
    );
    tableScope.firstInit();
    dispatch("tableReady", tableScope.getApi());
  });
</script>

<div
  bind:this={root}
  class="ge-table"
  style="width: 100%; height: 100%; background-color: transparent; padding: 0; margin: 0">
</div>

<style>

</style>
