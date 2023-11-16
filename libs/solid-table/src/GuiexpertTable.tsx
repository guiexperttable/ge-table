import {GuiexpertTableProps} from "./GuiexpertTableProps";
import {mergeProps, onMount} from "solid-js";
import {SimpleDomService, TableOptions, TableScope} from "@guiexpert/table";



export default (props: GuiexpertTableProps) => {

  let ref:any;

  const merged = mergeProps({
    tableModel: null,
    tableOptions: new TableOptions()
  }, props);


  onMount(() => {
    const listener = {
      onCheckboxChanged: (evt: any) => {
        const e = new CustomEvent("checkboxChanged", { detail: evt, bubbles: true });
        if (ref) ref.dispatchEvent(e);
      },

      onContextmenu: (evt: any) => {
        const e = new CustomEvent("contextmenu", { detail: evt, bubbles: true });
        if (ref) ref.dispatchEvent(e);
      },

      onModelChanged: (evt: any) => {
        const e = new CustomEvent("modelChanged", { detail: evt, bubbles: true });
        if (ref) ref.dispatchEvent(e);
      },

      onMouseClicked: (evt: any) => {
        const e = new CustomEvent("mouseClicked", { detail: evt, bubbles: true });
        if (ref) ref.dispatchEvent(e);
      },

      onMouseDragging: (evt: any) => {
        const e = new CustomEvent("mouseDragging", { detail: evt, bubbles: true });
        if (ref) ref.dispatchEvent(e);
      },

      onMouseDraggingEnd: (evt: any) => {
        const e = new CustomEvent("mouseDraggingEnd", { detail: evt, bubbles: true });
        if (ref) ref.dispatchEvent(e);
      },

      onMouseMoved: (evt: any) => {
        const e = new CustomEvent("mouseMoved", { detail: evt, bubbles: true });
        if (ref) ref.dispatchEvent(e);
      }
    };

    const tableScope = new TableScope(
      ref, merged.tableModel, new SimpleDomService(), merged.tableOptions, listener
    );
    tableScope.firstInit();
    const e = new CustomEvent("tableReady", { detail: tableScope.getApi(), bubbles: true });
    if (ref) ref.dispatchEvent(e);
  });

  return (
    <div ref={ref} />
  );
}