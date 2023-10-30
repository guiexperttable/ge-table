import { CellGroupIf } from "./cell-group.if";
import { ColumnDefIf } from "../column/column-def.if";
import { ColumnDef } from "../column/column-def";
import { CellGroupExt } from "./cell-group-ext";

export class CellgroupFactory {


  static buildColumnDefs(
    cellGroups: CellGroupIf[],
    ret: ColumnDefIf[] = []
  ): ColumnDefIf[] {

    for (const cellGroup of cellGroups) {
      if (cellGroup.property) {
        ret.push(ColumnDef.create({
            property: cellGroup.property,
            headerLabel: cellGroup.data ? cellGroup.data : cellGroup.property,
            isVisible: () => {
              // @ts-ignore
              if (typeof cellGroup["isVisible"] === "function") {
                const cge = cellGroup as CellGroupExt;
                return cge.isVisible();
              }
              return true;
            }
          })
        );
      }
      if (cellGroup.children) {
        CellgroupFactory.buildColumnDefs(cellGroup.children, ret);
      }
    }
    return ret;
  }
/*
  static buildDeepMap(
    cellGroups: CellGroupIf[],
    ret: { [key: string]: number } = {},
    deep = 0
  ): { [key: string]: number } {

    for (const cellGroup of cellGroups) {
      //if (cellGroup.property) {
      ret[cellGroup.data] = deep;
      //}
      if (cellGroup.children) {
        CellgroupFactory.buildDeepMap(cellGroup.children, ret, deep + 1);
      }
    }
    return ret;
  }
*/
  static buildGroupExts(
    cellGroups: CellGroupIf[],
    ret: CellGroupExt[] = [],
    deep = 0,
    parent?: CellGroupExt
  ): CellGroupExt[] {

    let last: CellGroupExt | undefined = undefined;
    for (let i = 0; i < cellGroups.length; i++) {
      const cellGroup = cellGroups[i];
      const cge = new CellGroupExt(cellGroup, deep, i, parent);

      if (last) {
        cge.leftNeighbour = last;
        last.rightNeighbour = cge;
      }
      ret.push(cge);
      if (cellGroup.children) {
        cge.children = CellgroupFactory.buildGroupExts(cellGroup.children, [], deep + 1, cge);
      }
      last = cge;
    }
    return ret;
  }


  static flattenGroupExts(
    cellGroups: CellGroupExt[],
    ret: CellGroupExt[] = []
  ): CellGroupExt[] {

    for (const cellGroup of cellGroups) {
      ret.push(cellGroup);
      if (cellGroup.children) {
        CellgroupFactory.flattenGroupExts(cellGroup.children, ret);
      }
    }
    return ret;
  }

  /*

  Gold                                                           Hohenwarte
  Gold AB                         Gold CD                        HOH AB                                  HOH CD
  .          Gold A     Gold B    Gold C   Gold D    Gold Sum    .           HOH Loc    HOH A    HOH B   HOH C    HOH D

  */

  static buildArrayOfArrays(
    flatten: CellGroupExt[],
    arrs: (CellGroupExt | null | undefined)[][]
  ): (CellGroupExt | null | undefined)[][] {

    let col = -1;
    let lastRowIdx = 99999;
    for (const cellGroup of flatten) {
      if (cellGroup.rowIndex <= lastRowIdx) {
        col++;
        for (let r = 0; r < arrs.length; r++) {
          arrs[r][col] = null;
        }
      }

      arrs[cellGroup.rowIndex][col] = cellGroup;
      lastRowIdx = cellGroup.rowIndex;

      if (cellGroup.ownColumn() && cellGroup.children?.length) {
        for (let r = cellGroup.rowIndex + 1; r < arrs.length; r++) {
          arrs[r][col] = undefined;
        }
        col++;
        for (let r = 0; r < arrs.length; r++) {
          arrs[r][col] = null;
        }
      }
    }
    return arrs;
  }


  static iterateThrowColumns(
    sb: string[] = [],
    cellGroups: CellGroupExt[]
  ) {

    for (const cellGroup of cellGroups) {
      sb.push(cellGroup.data + "    rowIndex:" + cellGroup.rowIndex);
      if (cellGroup.children?.length) {
        CellgroupFactory.iterateThrowColumns(sb, cellGroup.children);
      }
    }
  }

}

