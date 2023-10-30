<script>
  import { createEventDispatcher, onMount } from "svelte";
  import { SimpleDomService, TableOptions, TableScope } from "@guiexpert/table";

  export let tableModel;
  export let tableOptions = new TableOptions();

  let root;
  const dispatch = createEventDispatcher();

  onMount(() => {

    const listener = {
      onCheckboxChanged: (evt) => {
        dispatch("checkboxChanged", evt);
      },

      onContextmenu: (evt) => {
        dispatch("contextmenu", evt);
      },

      onModelChanged: (evt) => {
        dispatch("modelChanged", evt);
      },

      onMouseClicked: (evt) => {
        dispatch("mouseClicked", evt);
      },

      onMouseDragging: (evt) => {
        dispatch("mouseDragging", evt);
      },

      onMouseDraggingEnd: (evt) => {
        dispatch("mouseDraggingEnd", evt);
      },

      onMouseMoved: (evt) => {
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
