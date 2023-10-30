import { CellGroup } from "./cell-group";
export class CellGroupExt extends CellGroup {
    rowIndex;
    childIndex;
    parent;
    impl = 'CellGroupExt';
    children = undefined;
    leftNeighbour = undefined;
    rightNeighbour = undefined;
    constructor(cellGroup, rowIndex = 0, childIndex = 0, parent) {
        super(cellGroup.data, cellGroup.property, cellGroup.toggle, cellGroup.closed, cellGroup.visibility, cellGroup.children);
        this.rowIndex = rowIndex;
        this.childIndex = childIndex;
        this.parent = parent;
    }
    ownColumn() {
        return !!this.property;
    }
    toString() {
        return this.data + "";
    }
    // TODO hier gehts weiter!!!!!!!!!!!
    getColumnIndex() {
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
    isVisible() {
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
    claimsSpace() {
        return this.isVisible() && (this.ownColumn() || this.closed);
    }
    getColumnCount(cg = this, ret = 0) {
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
    getRowSpan(cg = this, maxRowCount) {
        if (cg?.claimsSpace()) {
            return maxRowCount - this.getParentCount(cg, 0);
        }
        return 1;
    }
    getParentCount(cg = this, ret = 0) {
        if (cg.parent) {
            ret = ret + 1 + this.getParentCount(cg.parent, ret);
        }
        return ret;
    }
    log(maxRowCount) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VsbC1ncm91cC1leHQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL3RhYmxlL3NyYy9saWIvdGFibGUvZGF0YS90YWJsZW1vZGVsL2NlbGxncm91cC9jZWxsLWdyb3VwLWV4dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBRXpDLE1BQU0sT0FBTyxZQUFhLFNBQVEsU0FBUztJQVVoQztJQUNBO0lBQ0E7SUFWTyxJQUFJLEdBQUcsY0FBYyxDQUFDO0lBRXRCLFFBQVEsR0FBK0IsU0FBUyxDQUFDO0lBQzFELGFBQWEsR0FBNkIsU0FBUyxDQUFDO0lBQ3BELGNBQWMsR0FBNkIsU0FBUyxDQUFDO0lBRTVELFlBQ0UsU0FBc0IsRUFDZixXQUFtQixDQUFDLEVBQ3BCLGFBQXFCLENBQUMsRUFDdEIsTUFBcUI7UUFFNUIsS0FBSyxDQUNILFNBQVMsQ0FBQyxJQUFJLEVBQ2QsU0FBUyxDQUFDLFFBQVEsRUFDbEIsU0FBUyxDQUFDLE1BQU0sRUFDaEIsU0FBUyxDQUFDLE1BQU0sRUFDaEIsU0FBUyxDQUFDLFVBQVUsRUFDcEIsU0FBUyxDQUFDLFFBQVEsQ0FDbkIsQ0FBQztRQVhLLGFBQVEsR0FBUixRQUFRLENBQVk7UUFDcEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixXQUFNLEdBQU4sTUFBTSxDQUFlO0lBVTlCLENBQUM7SUFFRCxTQUFTO1FBQ1AsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN6QixDQUFDO0lBRVEsUUFBUTtRQUNmLE9BQU8sSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVELG9DQUFvQztJQUNwQyxjQUFjO1FBQ1osSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDaEIsMEJBQTBCO1lBQzFCLElBQUksSUFBSSxDQUFDLGFBQWEsRUFB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Q0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMxRSxNQUFNLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUUsRUFBRSxDQUFDO1FBQ3ZDLHVEQUF1RDtRQUN2RCxNQUFNLFdBQVcsR0FBRyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUNuRCxNQUFNLE9BQU8sR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLFdBQVcsQ0FBQyxFQUFFLENBQUM7UUFDeEQsTUFBTSxFQUFFLEdBQUcsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7UUFDMUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSTttQkFDakIsSUFBSSxDQUFDLFVBQVU7WUFDdEIsSUFBSSxDQUFDLFFBQVE7WUFDYixHQUFHO1lBQ0gsSUFBSSxDQUFDLFVBQVU7ZUFDWixJQUFJLENBQUMsTUFBTTtrQkFDUixJQUFJLENBQUMsU0FBUyxFQUFFO2tCQUNoQixJQUFJLENBQUMsU0FBUyxFQUFFO29CQUNkLElBQUksQ0FBQyxXQUFXLEVBQUU7aUJBQ3JCLFdBQVc7Z0JBQ1osT0FBTztXQUNaLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNyQyx1Q0FBdUM7UUFDdkMsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLEtBQUssTUFBTSxLQUFLLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDakMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQzthQUN4QjtTQUNGO0lBQ0gsQ0FBQztDQUVGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2VsbEdyb3VwSWYgfSBmcm9tIFwiLi9jZWxsLWdyb3VwLmlmXCI7XG5pbXBvcnQgeyBDZWxsR3JvdXAgfSBmcm9tIFwiLi9jZWxsLWdyb3VwXCI7XG5cbmV4cG9ydCBjbGFzcyBDZWxsR3JvdXBFeHQgZXh0ZW5kcyBDZWxsR3JvdXAge1xuXG4gIHB1YmxpYyBvdmVycmlkZSBpbXBsID0gJ0NlbGxHcm91cEV4dCc7XG5cbiAgcHVibGljIG92ZXJyaWRlIGNoaWxkcmVuOiBDZWxsR3JvdXBFeHRbXSB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgcHVibGljIGxlZnROZWlnaGJvdXI6IENlbGxHcm91cEV4dCB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgcHVibGljIHJpZ2h0TmVpZ2hib3VyOiBDZWxsR3JvdXBFeHQgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgY2VsbEdyb3VwOiBDZWxsR3JvdXBJZixcbiAgICBwdWJsaWMgcm93SW5kZXg6IG51bWJlciA9IDAsXG4gICAgcHVibGljIGNoaWxkSW5kZXg6IG51bWJlciA9IDAsXG4gICAgcHVibGljIHBhcmVudD86IENlbGxHcm91cEV4dFxuICApIHtcbiAgICBzdXBlcihcbiAgICAgIGNlbGxHcm91cC5kYXRhLFxuICAgICAgY2VsbEdyb3VwLnByb3BlcnR5LFxuICAgICAgY2VsbEdyb3VwLnRvZ2dsZSxcbiAgICAgIGNlbGxHcm91cC5jbG9zZWQsXG4gICAgICBjZWxsR3JvdXAudmlzaWJpbGl0eSxcbiAgICAgIGNlbGxHcm91cC5jaGlsZHJlblxuICAgICk7XG4gIH1cblxuICBvd25Db2x1bW4oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEhdGhpcy5wcm9wZXJ0eTtcbiAgfVxuXG4gIG92ZXJyaWRlIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YSArIFwiXCI7XG4gIH1cblxuICAvLyBUT0RPIGhpZXIgZ2VodHMgd2VpdGVyISEhISEhISEhISFcbiAgZ2V0Q29sdW1uSW5kZXgoKTogbnVtYmVyIHtcbiAgICBpZiAoIXRoaXMucGFyZW50KSB7XG4gICAgICAvLyByb290IGxldmVsIChyb3dJbmRleD0wKVxuICAgICAgaWYgKHRoaXMubGVmdE5laWdoYm91cikge1xuICAgICAgICAvLyByZXR1cm4gdGhpcy5sZWZ0TmVpZ2hib3VyLmdldEJpZ2dlc3RDaGlsZENvbHVtbkluZGV4KCkgKyAxO1xuICAgICAgfVxuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnBhcmVudC5nZXRDb2x1bW5JbmRleCgpICsgdGhpcy5jaGlsZEluZGV4O1xuICB9XG5cbiAgLy9cbiAgLy8gZ2V0TGVmdENsYWltZWRTcGFjZXMoKTogbnVtYmVye1xuICAvLyAgIGlmICh0aGlzLmxlZnROZWlnaGJvdXIpIHtcbiAgLy9cbiAgLy8gICB9XG4gIC8vICAgcmV0dXJuIDA7XG4gIC8vIH1cblxuICAvLyBnZXRTdW1PZkxlYWZzKGNnOiBDZWxsR3JvdXBFeHQsIHN1bTogbnVtYmVyID0gMCk6IG51bWJlciB7XG4gIC8vICAgaWYgKGNnLmNoaWxkcmVuPy5sZW5ndGgpIHtcbiAgLy8gICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2cuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgLy8gICAgICAgY29uc3QgY2hpbGQgPSBjZy5jaGlsZHJlbltpXTtcbiAgLy8gICAgICAgaWYgKGNoaWxkLmNoaWxkcmVuPy5sZW5ndGgpIHtcbiAgLy8gICAgICAgICBzdW0gPSB0aGlzLmdldFN1bU9mTGVhZnMoY2hpbGQsIHN1bSk7XG4gIC8vICAgICAgIH0gZWxzZSB7XG4gIC8vICAgICAgICAgc3VtKys7XG4gIC8vICAgICAgIH1cbiAgLy8gICAgIH1cbiAgLy8gICB9XG4gIC8vICAgaWYgKHRoaXMub3duQ29sdW1uKCkpIHtcbiAgLy8gICAgIHN1bSsrO1xuICAvLyAgIH1cbiAgLy8gICAvL2NvbnNvbGUuaW5mbyhjZy5kYXRhLCBzdW0pXG4gIC8vICAgcmV0dXJuIHN1bTtcbiAgLy8gfVxuICAvL1xuICAvLyBnZXRCaWdnZXN0Q2hpbGRDb2x1bW5JbmRleCgpOiBudW1iZXIge1xuICAvLyAgIGlmICh0aGlzLmNoaWxkcmVuPy5sZW5ndGgpIHtcbiAgLy8gICAgIHJldHVybiBNYXRoLm1heCguLi50aGlzLmNoaWxkcmVuLm1hcChjID0+IGMuZ2V0QmlnZ2VzdENoaWxkQ29sdW1uSW5kZXgoKSkpO1xuICAvLyAgIH1cbiAgLy8gICByZXR1cm4gdGhpcy5jaGlsZEluZGV4O1xuICAvLyB9XG5cbiAgaXNWaXNpYmxlKCk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5wYXJlbnQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAodGhpcy52aXNpYmlsaXR5ID09PSBcImFsd2F5c1wiKSB7XG4gICAgICByZXR1cm4gdGhpcy5wYXJlbnQuaXNWaXNpYmxlKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLnZpc2liaWxpdHkgPT09IFwibm9ybWFsXCIgfHwgIXRoaXMudmlzaWJpbGl0eSkge1xuICAgICAgcmV0dXJuIHRoaXMucGFyZW50LmlzVmlzaWJsZSgpICYmICF0aGlzLnBhcmVudC5jbG9zZWQ7XG4gICAgfVxuICAgIGlmICh0aGlzLnZpc2liaWxpdHkgPT09IFwiaW52ZXJ0ZWRcIikge1xuICAgICAgcmV0dXJuIHRoaXMucGFyZW50LmlzVmlzaWJsZSgpICYmIHRoaXMucGFyZW50LmNsb3NlZDtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvLyBzaG91bGQgYmUgcmVuZGVyZWRcbiAgY2xhaW1zU3BhY2UoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuaXNWaXNpYmxlKCkgJiYgKHRoaXMub3duQ29sdW1uKCkgfHwgdGhpcy5jbG9zZWQpO1xuICB9XG5cblxuICBnZXRDb2x1bW5Db3VudChcbiAgICBjZzogQ2VsbEdyb3VwRXh0ID0gdGhpcyxcbiAgICByZXQ6IG51bWJlciA9IDBcbiAgKTogbnVtYmVyIHtcbiAgICBpZiAoY2c/LmNsYWltc1NwYWNlKCkpIHtcbiAgICAgIHJldCsrO1xuICAgIH1cbiAgICBpZiAoY2c/LmNoaWxkcmVuPy5sZW5ndGgpIHtcbiAgICAgIGZvciAoY29uc3QgY2hpbGQgb2YgY2cuY2hpbGRyZW4pIHtcbiAgICAgICAgcmV0ID0gdGhpcy5nZXRDb2x1bW5Db3VudChjaGlsZCwgcmV0KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIGdldFJvd1NwYW4oXG4gICAgY2c6IENlbGxHcm91cEV4dCA9IHRoaXMsXG4gICAgbWF4Um93Q291bnQ6IG51bWJlclxuICApOiBudW1iZXIge1xuICAgIGlmIChjZz8uY2xhaW1zU3BhY2UoKSkge1xuICAgICAgcmV0dXJuIG1heFJvd0NvdW50IC0gdGhpcy5nZXRQYXJlbnRDb3VudChjZywgMCk7XG4gICAgfVxuICAgIHJldHVybiAxO1xuICB9XG5cblxuICBnZXRQYXJlbnRDb3VudChcbiAgICBjZzogQ2VsbEdyb3VwRXh0ID0gdGhpcyxcbiAgICByZXQ6IG51bWJlciA9IDBcbiAgKTogbnVtYmVyIHtcbiAgICBpZiAoY2cucGFyZW50KSB7XG4gICAgICByZXQgPSByZXQgKyAxICsgdGhpcy5nZXRQYXJlbnRDb3VudChjZy5wYXJlbnQsIHJldCk7XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG4gIH1cblxuXG4gIGxvZyhtYXhSb3dDb3VudDogbnVtYmVyKSB7XG4gICAgY29uc3QgdGFicyA9IFwiXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XCIuc3Vic3RyaW5nKDAsIDIgKiB0aGlzLnJvd0luZGV4KTtcbiAgICBjb25zdCBjb2wgPSBgJHt0aGlzLmdldENvbHVtbkluZGV4KCl9YDtcbiAgICAvLyBjb25zdCBiY29sID0gYCR7dGhpcy5nZXRCaWdnZXN0Q2hpbGRDb2x1bW5JbmRleCgpfWA7XG4gICAgY29uc3QgY29sdW1uQ291bnQgPSBgJHt0aGlzLmdldENvbHVtbkNvdW50KHRoaXMpfWA7XG4gICAgY29uc3Qgcm93U3BhbiA9IGAke3RoaXMuZ2V0Um93U3Bhbih0aGlzLCBtYXhSb3dDb3VudCl9YDtcbiAgICBjb25zdCBwYyA9IGAke3RoaXMuZ2V0UGFyZW50Q291bnQodGhpcyl9YDtcbiAgICBjb25zb2xlLmluZm8oYCR7dGFicyArIHRoaXMuZGF0YX1cbiAgICAgIGNoaWxkSW5kZXg6JHt0aGlzLmNoaWxkSW5kZXh9XG4gICAgICByb3c6JHt0aGlzLnJvd0luZGV4fVxuICAgICAgY29sOiR7Y29sfVxuICAgICAgdmlzOiR7dGhpcy52aXNpYmlsaXR5fVxuICAgICAgY2xvc2VkOiR7dGhpcy5jbG9zZWR9XG4gICAgICBpc1Zpc2libGU6JHt0aGlzLmlzVmlzaWJsZSgpfVxuICAgICAgb3duQ29sdW1uOiR7dGhpcy5vd25Db2x1bW4oKX1cbiAgICAgIGNsYWltc1NwYWNlOiR7dGhpcy5jbGFpbXNTcGFjZSgpfVxuICAgICAgY29sQ291bnQ6JHtjb2x1bW5Db3VudH1cbiAgICAgIHJvd1NwYW46JHtyb3dTcGFufVxuICAgICAgcGM6JHtwY31gLnJlcGxhY2UoL1sgXFxuXSsvZywgXCIgXCIpKTtcbiAgICAvLyBjb25zb2xlLmluZm8oYCR7dGFicyArIHRoaXMuZGF0YX1gKTtcbiAgICBpZiAodGhpcy5jaGlsZHJlbikge1xuICAgICAgZm9yIChjb25zdCBjaGlsZCBvZiB0aGlzLmNoaWxkcmVuKSB7XG4gICAgICAgIGNoaWxkLmxvZyhtYXhSb3dDb3VudCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbn1cbiJdfQ==