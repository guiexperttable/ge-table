import { Component, createRef } from "preact";
import {
  GeModelChangeEvent,
  GeMouseEvent, LicenseManager,
  SimpleDomService, TableApi,
  TableModelIf,
  TableOptions,
  TableScope
} from '@guiexpert/table';

export type GeMouseEventFn = (evt: GeMouseEvent) => {};
export type GeCheckboxEventFn = (evt: any[]) => {};
export type GeTableReadyEventFn = (evt: TableApi) => {};
export type GeModelChangeEventFn = (evt: GeModelChangeEvent) => {};


export interface GuiexpertTableProps {
  tableModel: TableModelIf,
  tableOptions?: TableOptions,
  mouseMoved?: GeMouseEventFn,
  contextmenu?: GeMouseEventFn,
  mouseClicked?: GeMouseEventFn,
  mouseDragging?: GeMouseEventFn,
  mouseDraggingEnd?: GeMouseEventFn,
  checkboxChanged?: GeCheckboxEventFn,
  modelChanged?: GeModelChangeEventFn,
  tableReady?: GeTableReadyEventFn,
  licenseKey?: string,
}


/**
 * GuiexpertTable is a React component that wraps the ExpertTable library.
 * It displays a table with various event listeners and callback functions.
 */
export class GuiexpertTable extends Component<GuiexpertTableProps>  {

  ref = createRef();

  constructor(props: GuiexpertTableProps) {
    super(props);
  }

  componentDidMount() {
    const myContainer: HTMLDivElement = this.ref.current;
    this.initTable(myContainer, this.props as GuiexpertTableProps);
  }

  componentWillUnmount() {
  }

  initTable(ele: HTMLDivElement, props: GuiexpertTableProps) {
    const listener = {
      onCheckboxChanged: (evt: any[]) => {
        if (props.checkboxChanged) {
          props.checkboxChanged(evt);
        }
      },

      onContextmenu: (evt: GeMouseEvent) => {
        if (props.contextmenu) {
          props.contextmenu(evt);
        }
      },

      onModelChanged: (evt: GeModelChangeEvent) => {
        if (props.modelChanged) {
          props.modelChanged(evt);
        }
      },

      onMouseClicked: (evt: GeMouseEvent) => {
        if (props.mouseClicked) {
          props.mouseClicked(evt);
        }
      },

      onMouseDragging: (evt: GeMouseEvent) => {
        if (props.mouseDragging) {
          props.mouseDragging(evt);
        }
      },

      onMouseDraggingEnd: (evt: GeMouseEvent) => {
        if (props.mouseDraggingEnd) {
          props.mouseDraggingEnd(evt);
        }
      },

      onMouseMoved: (evt: GeMouseEvent) => {
        // ignored
      }
    };

    const tableScope = new TableScope(
      ele, props.tableModel, new SimpleDomService(), props.tableOptions ?? new TableOptions(), listener
    );
    tableScope.firstInit();
    if (props.tableReady) {
      props.tableReady(tableScope.getApi());
    }
    if (props.licenseKey) LicenseManager.getInstance().setLicenseKey(props.licenseKey);
  };

  render() {
    return <div
      ref={this.ref}
      className="container-div"
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "transparent",
        padding: "0",
        margin: "0"
      }} />;
  }
}

export default GuiexpertTable;
