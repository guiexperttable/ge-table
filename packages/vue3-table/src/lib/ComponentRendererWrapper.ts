import { AreaIdent, AreaModelIf, CellRendererIf, DomServiceIf, RendererCleanupFnType } from "@guiexpert/table";
import { createVNode, render } from "vue";
import { AppContext, VNode, VNodeProps } from "@vue/runtime-core";

declare type Data = Record<string, unknown>;

export class ComponentRendererWrapper implements CellRendererIf {

  constructor(
    private readonly component: any,
    private readonly appContext: AppContext | null
  ) {
  }

  render(
    cellDiv: HTMLDivElement,
    rowIndex: number,
    columnIndex: number,
    areaIdent: AreaIdent,
    areaModel: AreaModelIf,
    cellValue: any,
    _domService: DomServiceIf): RendererCleanupFnType | undefined {

    const cleanupFn = this.mount(
      this.component,
      {
        cellDiv,
        rowIndex,
        columnIndex,
        areaIdent,
        areaModel,
        cellValue
      },
      this.appContext,
      cellDiv
    );
    return cleanupFn;
  }


  private mount(
    component: any,
    props: (Data & VNodeProps) | null,
    appContext: AppContext | null,
    cellDiv: HTMLDivElement
  ) {
    let vNode: VNode = createVNode(component, props);

    vNode.appContext = appContext;
    render(vNode, cellDiv);

    const cleanupFn = () => {
      if (cellDiv) {
        render(null, cellDiv);
      }
    };

    return cleanupFn;
  }

}
