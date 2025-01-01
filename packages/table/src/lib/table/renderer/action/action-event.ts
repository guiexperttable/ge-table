import { AreaIdent } from '../../data/tablemodel/area-ident.type';
import { ActionEventIf } from './action-event.if';
import { AreaModelIf } from '../../data/tablemodel/areamodel/area-model.if';

export class ActionEvent implements ActionEventIf {


  constructor(
    public action: string,
    public area: AreaIdent,
    public areaModel: AreaModelIf,
    public rowIndex: number,
    public columnIndex: number,
    public id: any
  ) {
  }

}