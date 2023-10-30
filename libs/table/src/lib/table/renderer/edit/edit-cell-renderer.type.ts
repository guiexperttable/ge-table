import { CellRendererIf } from "../cell-render.if";

export type GetEditRenderer = (rowIndex: number, columnIndex: number) => CellRendererIf | undefined;
