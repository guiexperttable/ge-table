import { AreaModelObjectArray } from "./area-model-object-array";
import { ColumnDefIf } from "../column/column-def.if";
import { AreaIdent } from "../area-ident.type";

/**
 * Represents an array of objects with column definitions for an area model.
 *
 * @template T - The type of objects in the array.
 */
export class AreaModelObjectArrayWithColumndefs<T> extends AreaModelObjectArray<T> {


  constructor(
    public override areaIdent: AreaIdent,
    protected override rows: T[],
    protected override readonly columnDefs: ColumnDefIf[],
    public override defaultRowHeight: number
  ) {
    super(
      areaIdent,
      rows,
      defaultRowHeight,
      columnDefs
    );
  }

}

