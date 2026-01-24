<script lang="ts">
  import { createEventDispatcher, onMount } from 'svelte';
  import { EventListenerIf, FocusModelIf, LicenseManager, SelectionModelIf, SimpleDomService, TableOptions, TableScope } from '../../table/src'; // "@guiexpert/table";

  export let tableModel: any;
  export let tableOptions = new TableOptions();
  export let licenseKey: string | undefined;

  let root: any;
  const dispatch = createEventDispatcher();

  onMount(() => {

    const listener: EventListenerIf = {
      onSelectionChanged(model: SelectionModelIf): void {
        dispatch('selectionChanged', model);
      },
      onFocusChanged(model: FocusModelIf): void{
        dispatch('focusChanged', model);
      },
      onCheckboxChanged: (evt: any) => {
        dispatch('checkboxChanged', evt);
      },

      onContextmenu: (evt: any) => {
        dispatch('contextmenu', evt);
      },

      onModelChanged: (evt: any) => {
        dispatch('modelChanged', evt);
      },

      onMouseClicked: (evt: any) => {
        dispatch('mouseClicked', evt);
      },

      onMouseDragging: (evt: any) => {
        dispatch('mouseDragging', evt);
      },

      onMouseDraggingEnd: (evt: any) => {
        dispatch('mouseDraggingEnd', evt);
      },

      onMouseMoved: (evt: any) => {
        dispatch('mouseMoved', evt);
      },

      onScroll: (evt: any) => {
        dispatch('scroll', evt);
      }
    };

    const tableScope = new TableScope(
      root, tableModel, new SimpleDomService(), tableOptions, listener
    );
    tableScope.firstInit();
    dispatch('tableReady', tableScope.getApi());

    if (licenseKey) LicenseManager.getInstance().setLicenseKey(licenseKey);
  });
</script>

<div
  bind:this={root}
  class="ge-table"
  style="width: 100%; height: 100%; background-color: transparent; padding: 0; margin: 0"></div>

<style>

</style>
