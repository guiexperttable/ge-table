import { CellGroupIf } from "./cell-group.if";
import { CellGroup } from "./cell-group";

export class CellGroupExt extends CellGroup {

  public override impl = 'CellGroupExt';

  public override children: CellGroupExt[] | undefined = undefined;
  public leftNeighbour: CellGroupExt | undefined = undefined;
  public rightNeighbour: CellGroupExt | undefined = undefined;

  constructor(
    cellGroup: CellGroupIf,
    public rowIndex: number = 0,
    public childIndex: number = 0,
    public parent?: CellGroupExt
  ) {
    super(
      cellGroup.data,
      cellGroup.property,
      cellGroup.toggle,
      cellGroup.closed,
      cellGroup.visibility,
      cellGroup.children
    );
  }

  ownColumn(): boolean {
    return !!this.property;
  }

  override toString(): string {
    return this.data + "";
  }

  // TODO hier gehts weiter!!!!!!!!!!!
  getColumnIndex(): number {
    if (!this.parent) {
      // root level (rowIndex=0)
      if (this.leftNeighbour) {
        // return this.leftNeighbour.getBiggestChildColumnIndex() + 1;
      }
      return 0;
    }
    return this.parent.getColumnIndex() + this.childIndex;
  }

  //
  // getLeftClaimedSpaces(): number{
  //   if (this.leftNeighbour) {
  //
  //   }
  //   return 0;
  // }

  // getSumOfLeafs(cg: CellGroupExt, sum: number = 0): number {
  //   if (cg.children?.length) {
  //     for (let i = 0; i < cg.children.length; i++) {
  //       const child = cg.children[i];
  //       if (child.children?.length) {
  //         sum = this.getSumOfLeafs(child, sum);
  //       } else {
  //         sum++;
  //       }
  //     }
  //   }
  //   if (this.ownColumn()) {
  //     sum++;
  //   }
  //   //console.info(cg.data, sum)
  //   return sum;
  // }
  //
  // getBiggestChildColumnIndex(): number {
  //   if (this.children?.length) {
  //     return Math.max(...this.children.map(c => c.getBiggestChildColumnIndex()));
  //   }
  //   return this.childIndex;
  // }

  isVisible(): boolean {
    if (!this.parent) {
      return true;
    }
    if (this.visibility === "always") {
      return this.parent.isVisible();
    }
    if (this.visibility === "normal" || !this.visibility) {
      return this.parent.isVisible() && !this.parent.closed;
    }
    if (this.visibility === "inverted") {
      return this.parent.isVisible() && this.parent.closed;
    }
    return true;
  }

  // should be rendered
  claimsSpace(): boolean {
    return this.isVisible() && (this.ownColumn() || this.closed);
  }


  getColumnCount(
    cg: CellGroupExt = this,
    ret: number = 0
  ): number {
    if (cg?.claimsSpace()) {
      ret++;
    }
    if (cg?.children?.length) {
      for (const child of cg.children) {
        ret = this.getColumnCount(child, ret);
      }
    }
    return ret;
  }

  getRowSpan(
    cg: CellGroupExt = this,
    maxRowCount: number
  ): number {
    if (cg?.claimsSpace()) {
      return maxRowCount - this.getParentCount(cg, 0);
    }
    return 1;
  }


  getParentCount(
    cg: CellGroupExt = this,
    ret: number = 0
  ): number {
    if (cg.parent) {
      ret = ret + 1 + this.getParentCount(cg.parent, ret);
    }
    return ret;
  }


  log(maxRowCount: number) {
    const tabs = "\t\t\t\t\t\t\t\t\t\t\t\t\t".substring(0, 2 * this.rowIndex);
    const col = `${this.getColumnIndex()}`;
    // const bcol = `${this.getBiggestChildColumnIndex()}`;
    const columnCount = `${this.getColumnCount(this)}`;
    const rowSpan = `${this.getRowSpan(this, maxRowCount)}`;
    const pc = `${this.getParentCount(this)}`;
    console.info(`${tabs + this.data}
      childIndex:${this.childIndex}
      row:${this.rowIndex}
      col:${col}
      vis:${this.visibility}
      closed:${this.closed}
      isVisible:${this.isVisible()}
      ownColumn:${this.ownColumn()}
      claimsSpace:${this.claimsSpace()}
      colCount:${columnCount}
      rowSpan:${rowSpan}
      pc:${pc}`.replace(/[ \n]+/g, " "));
    // console.info(`${tabs + this.data}`);
    if (this.children) {
      for (const child of this.children) {
        child.log(maxRowCount);
      }
    }
  }

}
