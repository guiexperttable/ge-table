import { AreaIdent, AreaModelIf, CellRendererIf, DomServiceIf, RendererCleanupFnType } from "@guiexpert/table";


export class ComponentRendererWrapper implements CellRendererIf {

  constructor(
    private readonly Component:any
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


    const c = new this.Component({
      target: cellDiv,
      props: {
        cellDiv,
        rowIndex,
        columnIndex,
        areaIdent,
        areaModel,
        cellValue
      }
    });
    return () => {
      c.$destroy();
    };
  }


}
