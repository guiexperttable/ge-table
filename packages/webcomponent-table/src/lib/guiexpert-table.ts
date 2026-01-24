import {
  EventListenerIf, FocusModelIf,
  GeModelChangeEvent,
  GeMouseEvent, GeScrollEvent, LicenseManager, SelectionModelIf,
  SimpleDomService,
  TableModelAndOptionsIf,
  TableScope
} from '@guiexpert/table';

export class GuiexpertTable extends HTMLElement {


  private _data: TableModelAndOptionsIf | undefined;


  get data(): TableModelAndOptionsIf | undefined {
    return this._data;
  }

  set data(value: TableModelAndOptionsIf | undefined) {
    this._data = value;
    if (value) {
      this.setData(value);
    }
  }

  set licenseKey(key: string){
    LicenseManager.getInstance().setLicenseKey(key);
  }

  public setData({ tableModel, tableOptions }: TableModelAndOptionsIf) {

    this.innerHTML = `
     <div
      class="container-div"
      style="width: 100%; height: 100%; background-color: transparent; padding: 0; margin: 0; display: block"></div>
    `;

    const ele = this.querySelector("div") as HTMLDivElement;

    const domService = new SimpleDomService();
    if (tableModel) {

      const listener: EventListenerIf = {
        onSelectionChanged(model: SelectionModelIf): void {
          const e = new CustomEvent("selectionChanged", { detail: model, bubbles: true });
          ele.dispatchEvent(e);
        },

        onFocusChanged(model: FocusModelIf): void{
          const e = new CustomEvent("focusChanged", { detail: model, bubbles: true });
          ele.dispatchEvent(e);
        },

        onCheckboxChanged: (evt: any[]) => {
          const e = new CustomEvent("checkboxChanged", { detail: evt, bubbles: true });
          ele.dispatchEvent(e);
        },

        onContextmenu: (evt: GeMouseEvent) => {
          const e = new CustomEvent("contextmenu", { detail: evt, bubbles: true });
          ele.dispatchEvent(e);
        },

        onModelChanged: (evt: GeModelChangeEvent) => {
          const e = new CustomEvent("modelChanged", { detail: evt, bubbles: true });
          ele.dispatchEvent(e);
        },

        onMouseClicked: (evt: GeMouseEvent) => {
          const e = new CustomEvent("mouseClicked", { detail: evt, bubbles: true });
          ele.dispatchEvent(e);
        },

        onMouseDragging: (evt: GeMouseEvent) => {
          const e = new CustomEvent("mouseDragging", { detail: evt, bubbles: true });
          ele.dispatchEvent(e);
        },

        onMouseDraggingEnd: (evt: GeMouseEvent) => {
          const e = new CustomEvent("mouseDraggingEnd", { detail: evt, bubbles: true });
          ele.dispatchEvent(e);
        },

        onMouseMoved: (evt: GeMouseEvent) => {
          const e = new CustomEvent("mouseMoved", { detail: evt, bubbles: true });
          ele.dispatchEvent(e);
        },

        onScroll: (evt: GeScrollEvent) => {
          const e = new CustomEvent("scroll", { detail: evt, bubbles: true });
          ele.dispatchEvent(e);
        }
      };

      const tableScope = new TableScope(
        ele, tableModel, domService, tableOptions, listener
      );
      domService.setStyle(ele, "height", "100%");
      domService.setStyle(ele, "width", "100%");
      tableScope.firstInit();

      const e = new CustomEvent("tableReady", { detail: tableScope.getApi(), bubbles: true });
      ele.dispatchEvent(e);
    }
  }

  connectedCallback() {
    //
  }
}


// we do this in the demo app: customElements.define("guiexpert-table", GuiexpertTable);

