import { AreaIdent } from '../../data/tablemodel/area-ident.type';
import { ActionEventIf } from './action-event.if';

export class ActionEvent implements ActionEventIf {


  constructor(
    public action: string,
    public area: AreaIdent,
    public rowIndex: number,
    public columnIndex: number
  ) {
  }

}