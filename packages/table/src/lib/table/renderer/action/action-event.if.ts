import { AreaIdent } from '../../data/tablemodel/area-ident.type';

export interface ActionEventIf {
  action: string;
  area: AreaIdent;
  rowIndex: number;
  columnIndex: number;
}