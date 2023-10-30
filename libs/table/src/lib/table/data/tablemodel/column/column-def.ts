import { Size } from "../../common/size";
import { SizeIf } from "../../common/size.if";
import { ColumnDefIf } from "./column-def.if";
import { CellRendererIf } from "../../../renderer/cell-render.if";
import { AreaObjectMapType } from "../../common/area-map.type";
import { AreaObjectMap } from "../../common/area-map";
import { BooleanFunction, FalseFn, TrueFn } from "../../common/boolean-function";
import { SortState } from "../../common/sort-state.type";
import { GetEditRenderer } from "../../../renderer/edit/edit-cell-renderer.type";
import { editInputPipe } from "../../../renderer/edit/edit-input-pipe.if";


export class ColumnDef implements ColumnDefIf {

  public visible = true;

  constructor(
    public property: string,
    public headerLabel: string,
    public width: SizeIf = new Size(100, "px"),
    public classes: AreaObjectMapType<string[]> = new AreaObjectMap<string[]>(),
    public rendererMap: AreaObjectMapType<CellRendererIf> = new AreaObjectMap<CellRendererIf>(),
    public minWidth: SizeIf = new Size(100, "px"),
    public maxWidth: SizeIf = new Size(100, "px"),
    public sortable?: BooleanFunction,
    public sortComparator?: <T>(a: T, b: T) => number,
    public sortState?: SortState,
    public sortStatesOrder?: SortState[],
    public sortIconVisible?: BooleanFunction,
    public editable?: BooleanFunction,
    public getEditRenderer?: GetEditRenderer,
    public editInputPipe?: editInputPipe,
    public isVisible: BooleanFunction = ()=>this.visible
  ) {
  }

  static bodyRenderer(bodyRenderer: CellRendererIf) {
    return new AreaObjectMap<CellRendererIf>(
      undefined,
      bodyRenderer,
      undefined
    );
  }

  static create(param: {
    property?: string,
    headerLabel?: string,
    width?: SizeIf,
    minWidth?: SizeIf,
    maxWidth?: SizeIf,
    headerRenderer?: CellRendererIf,
    bodyRenderer?: CellRendererIf,
    footerRenderer?: CellRendererIf,
    headerClasses?: string[]
    bodyClasses?: string[]
    footerClasses?: string[],
    sortable?: BooleanFunction,
    sortIconVisible?: BooleanFunction,
    sortComparator?: <T>(a: T, b: T) => number,
    sortState?: SortState,
    sortStatesOrder?: SortState[],
    editable?: BooleanFunction,
    isVisible?: BooleanFunction,
    getEditRenderer?: GetEditRenderer,
    editInputPipe?: editInputPipe,
  }): ColumnDefIf {

    const am = new AreaObjectMap<CellRendererIf>(
      param.headerRenderer,
      param.bodyRenderer,
      param.footerRenderer
    );

    const cm = new AreaObjectMap<string[]>(
      param.headerClasses,
      param.bodyClasses,
      param.footerClasses
    );

    const sortIconVisible = param.sortIconVisible ?? param.sortable ?? FalseFn;
    const editable = param.editable ?? param.editable ?? FalseFn;
    const isVisible = param.isVisible ?? param.isVisible ?? TrueFn;

    return new ColumnDef(
      param.property ?? "",
      param.headerLabel ?? "",
      param.width ?? new Size(100, "px"),
      cm,
      am,
      param.minWidth ?? new Size(100, "px"),
      param.maxWidth ?? new Size(100, "px"),
      param.sortable,
      param.sortComparator,
      param.sortState,
      param.sortStatesOrder,
      sortIconVisible,
      editable,
      param.getEditRenderer,
      param.editInputPipe,
      isVisible,
    );
  }

}
