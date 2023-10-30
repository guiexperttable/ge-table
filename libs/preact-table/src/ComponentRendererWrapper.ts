import { AreaIdent, AreaModelIf, CellRendererIf, DomServiceIf, RendererCleanupFnType } from "@guiexpert/table";
import { createRoot } from "react-dom/client";


export class ComponentRendererWrapper implements CellRendererIf {

  constructor(
    private readonly Component: any
    //private readonly appContext: AppContext | null
  ) {
    console.info(Component);
  }

  render(
    cellDiv: HTMLDivElement,
    rowIndex: number,
    columnIndex: number,
    areaIdent: AreaIdent,
    areaModel: AreaModelIf,
    cellValue: any,
    domService: DomServiceIf): RendererCleanupFnType | undefined {

    const props = {
      cellDiv,
      rowIndex,
      columnIndex,
      areaIdent,
      areaModel,
      cellValue
    };
    const root = createRoot(cellDiv, {});
    root.render(this.Component(props));

    return () => {
      root.unmount();
    };
  }


  // private mount(
  //   component: any,
  //   props: (Data & VNodeProps) | null,
  //   appContext: AppContext | null,
  //   cellDiv: HTMLDivElement
  // ) {
  //   let vNode: VNode = createVNode(component, props);
  //
  //   vNode.appContext = appContext;
  //   render(vNode, cellDiv);
  //
  //   const cleanupFn = () => {
  //     if (cellDiv) {
  //       render(null, cellDiv);
  //     }
  //   };
  //
  //   return cleanupFn;
  // }

}
