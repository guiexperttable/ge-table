import { ColumnDef } from "../column/column-def";
import { CellGroupExt } from "./cell-group-ext";
export class CellgroupFactory {
    static buildColumnDefs(cellGroups, ret = []) {
        for (const cellGroup of cellGroups) {
            if (cellGroup.property) {
                ret.push(ColumnDef.create({
                    property: cellGroup.property,
                    headerLabel: cellGroup.data ? cellGroup.data : cellGroup.property,
                    isVisible: () => {
                        // @ts-ignore
                        if (typeof cellGroup["isVisible"] === "function") {
                            const cge = cellGroup;
                            return cge.isVisible();
                        }
                        return true;
                    }
                }));
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
    static buildGroupExts(cellGroups, ret = [], deep = 0, parent) {
        let last = undefined;
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
    static flattenGroupExts(cellGroups, ret = []) {
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
    static buildArrayOfArrays(flatten, arrs) {
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
    static iterateThrowColumns(sb = [], cellGroups) {
        for (const cellGroup of cellGroups) {
            sb.push(cellGroup.data + "    rowIndex:" + cellGroup.rowIndex);
            if (cellGroup.children?.length) {
                CellgroupFactory.iterateThrowColumns(sb, cellGroup.children);
            }
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VsbGdyb3VwLWZhY3RvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL3RhYmxlL3NyYy9saWIvdGFibGUvZGF0YS90YWJsZW1vZGVsL2NlbGxncm91cC9jZWxsZ3JvdXAtZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDakQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRWhELE1BQU0sT0FBTyxnQkFBZ0I7SUFHM0IsTUFBTSxDQUFDLGVBQWUsQ0FDcEIsVUFBeUIsRUFDekIsTUFBcUIsRUFBRTtRQUd2QixLQUFLLE1BQU0sU0FBUyxJQUFJLFVBQVUsRUFBRTtZQUNsQyxJQUFJLFNBQVMsQ0FBQyxRQUFRLEVBQUU7Z0JBQ3RCLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQztvQkFDdEIsUUFBUSxFQUFFLFNBQVMsQ0FBQyxRQUFRO29CQUM1QixXQUFXLEVBQUUsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFFBQVE7b0JBQ2pFLFNBQVMsRUFBRSxHQUFHLEVBQUU7d0JBQ2QsYUFBYTt3QkFDYixJQUFJLE9BQU8sU0FBUyxDQUFDLFdBQVcsQ0FBQyxLQUFLLFVBQVUsRUFBRTs0QkFDaEQsTUFBTSxHQUFHLEdBQUcsU0FBeUIsQ0FBQzs0QkFDdEMsT0FBTyxHQUFHLENBQUMsU0FBUyxFQUFFLENBQUM7eUJBQ3hCO3dCQUNELE9BQU8sSUFBSSxDQUFDO29CQUNkLENBQUM7aUJBQ0YsQ0FBQyxDQUNILENBQUM7YUFDSDtZQUNELElBQUksU0FBUyxDQUFDLFFBQVEsRUFBRTtnQkFDdEIsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsR0FBRyxD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TUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO29CQUNwQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDO2lCQUNyQjthQUNGO1NBQ0Y7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFHRCxNQUFNLENBQUMsbUJBQW1CLENBQ3hCLEtBQWUsRUFBRSxFQUNqQixVQUEwQjtRQUcxQixLQUFLLE1BQU0sU0FBUyxJQUFJLFVBQVUsRUFBRTtZQUNsQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEdBQUcsZUFBZSxHQUFHLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUMvRCxJQUFJLFNBQVMsQ0FBQyxRQUFRLEVBQUUsTUFBTSxFQUFFO2dCQUM5QixnQkFBZ0IsQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFLEVBQUUsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQzlEO1NBQ0Y7SUFDSCxDQUFDO0NBRUYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDZWxsR3JvdXBJZiB9IGZyb20gXCIuL2NlbGwtZ3JvdXAuaWZcIjtcbmltcG9ydCB7IENvbHVtbkRlZklmIH0gZnJvbSBcIi4uL2NvbHVtbi9jb2x1bW4tZGVmLmlmXCI7XG5pbXBvcnQgeyBDb2x1bW5EZWYgfSBmcm9tIFwiLi4vY29sdW1uL2NvbHVtbi1kZWZcIjtcbmltcG9ydCB7IENlbGxHcm91cEV4dCB9IGZyb20gXCIuL2NlbGwtZ3JvdXAtZXh0XCI7XG5cbmV4cG9ydCBjbGFzcyBDZWxsZ3JvdXBGYWN0b3J5IHtcblxuXG4gIHN0YXRpYyBidWlsZENvbHVtbkRlZnMoXG4gICAgY2VsbEdyb3VwczogQ2VsbEdyb3VwSWZbXSxcbiAgICByZXQ6IENvbHVtbkRlZklmW10gPSBbXVxuICApOiBDb2x1bW5EZWZJZltdIHtcblxuICAgIGZvciAoY29uc3QgY2VsbEdyb3VwIG9mIGNlbGxHcm91cHMpIHtcbiAgICAgIGlmIChjZWxsR3JvdXAucHJvcGVydHkpIHtcbiAgICAgICAgcmV0LnB1c2goQ29sdW1uRGVmLmNyZWF0ZSh7XG4gICAgICAgICAgICBwcm9wZXJ0eTogY2VsbEdyb3VwLnByb3BlcnR5LFxuICAgICAgICAgICAgaGVhZGVyTGFiZWw6IGNlbGxHcm91cC5kYXRhID8gY2VsbEdyb3VwLmRhdGEgOiBjZWxsR3JvdXAucHJvcGVydHksXG4gICAgICAgICAgICBpc1Zpc2libGU6ICgpID0+IHtcbiAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICBpZiAodHlwZW9mIGNlbGxHcm91cFtcImlzVmlzaWJsZVwiXSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2dlID0gY2VsbEdyb3VwIGFzIENlbGxHcm91cEV4dDtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2dlLmlzVmlzaWJsZSgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBpZiAoY2VsbEdyb3VwLmNoaWxkcmVuKSB7XG4gICAgICAgIENlbGxncm91cEZhY3RvcnkuYnVpbGRDb2x1bW5EZWZzKGNlbGxHcm91cC5jaGlsZHJlbiwgcmV0KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuLypcbiAgc3RhdGljIGJ1aWxkRGVlcE1hcChcbiAgICBjZWxsR3JvdXBzOiBDZWxsR3JvdXBJZltdLFxuICAgIHJldDogeyBba2V5OiBzdHJpbmddOiBudW1iZXIgfSA9IHt9LFxuICAgIGRlZXAgPSAwXG4gICk6IHsgW2tleTogc3RyaW5nXTogbnVtYmVyIH0ge1xuXG4gICAgZm9yIChjb25zdCBjZWxsR3JvdXAgb2YgY2VsbEdyb3Vwcykge1xuICAgICAgLy9pZiAoY2VsbEdyb3VwLnByb3BlcnR5KSB7XG4gICAgICByZXRbY2VsbEdyb3VwLmRhdGFdID0gZGVlcDtcbiAgICAgIC8vfVxuICAgICAgaWYgKGNlbGxHcm91cC5jaGlsZHJlbikge1xuICAgICAgICBDZWxsZ3JvdXBGYWN0b3J5LmJ1aWxkRGVlcE1hcChjZWxsR3JvdXAuY2hpbGRyZW4sIHJldCwgZGVlcCArIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmV0O1xuICB9XG4qL1xuICBzdGF0aWMgYnVpbGRHcm91cEV4dHMoXG4gICAgY2VsbEdyb3VwczogQ2VsbEdyb3VwSWZbXSxcbiAgICByZXQ6IENlbGxHcm91cEV4dFtdID0gW10sXG4gICAgZGVlcCA9IDAsXG4gICAgcGFyZW50PzogQ2VsbEdyb3VwRXh0XG4gICk6IENlbGxHcm91cEV4dFtdIHtcblxuICAgIGxldCBsYXN0OiBDZWxsR3JvdXBFeHQgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjZWxsR3JvdXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBjZWxsR3JvdXAgPSBjZWxsR3JvdXBzW2ldO1xuICAgICAgY29uc3QgY2dlID0gbmV3IENlbGxHcm91cEV4dChjZWxsR3JvdXAsIGRlZXAsIGksIHBhcmVudCk7XG5cbiAgICAgIGlmIChsYXN0KSB7XG4gICAgICAgIGNnZS5sZWZ0TmVpZ2hib3VyID0gbGFzdDtcbiAgICAgICAgbGFzdC5yaWdodE5laWdoYm91ciA9IGNnZTtcbiAgICAgIH1cbiAgICAgIHJldC5wdXNoKGNnZSk7XG4gICAgICBpZiAoY2VsbEdyb3VwLmNoaWxkcmVuKSB7XG4gICAgICAgIGNnZS5jaGlsZHJlbiA9IENlbGxncm91cEZhY3RvcnkuYnVpbGRHcm91cEV4dHMoY2VsbEdyb3VwLmNoaWxkcmVuLCBbXSwgZGVlcCArIDEsIGNnZSk7XG4gICAgICB9XG4gICAgICBsYXN0ID0gY2dlO1xuICAgIH1cbiAgICByZXR1cm4gcmV0O1xuICB9XG5cblxuICBzdGF0aWMgZmxhdHRlbkdyb3VwRXh0cyhcbiAgICBjZWxsR3JvdXBzOiBDZWxsR3JvdXBFeHRbXSxcbiAgICByZXQ6IENlbGxHcm91cEV4dFtdID0gW11cbiAgKTogQ2VsbEdyb3VwRXh0W10ge1xuXG4gICAgZm9yIChjb25zdCBjZWxsR3JvdXAgb2YgY2VsbEdyb3Vwcykge1xuICAgICAgcmV0LnB1c2goY2VsbEdyb3VwKTtcbiAgICAgIGlmIChjZWxsR3JvdXAuY2hpbGRyZW4pIHtcbiAgICAgICAgQ2VsbGdyb3VwRmFjdG9yeS5mbGF0dGVuR3JvdXBFeHRzKGNlbGxHcm91cC5jaGlsZHJlbiwgcmV0KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIC8qXG5cbiAgR29sZCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSG9oZW53YXJ0ZVxuICBHb2xkIEFCICAgICAgICAgICAgICAgICAgICAgICAgIEdvbGQgQ0QgICAgICAgICAgICAgICAgICAgICAgICBIT0ggQUIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSE9IIENEXG4gIC4gICAgICAgICAgR29sZCBBICAgICBHb2xkIEIgICAgR29sZCBDICAgR29sZCBEICAgIEdvbGQgU3VtICAgIC4gICAgICAgICAgIEhPSCBMb2MgICAgSE9IIEEgICAgSE9IIEIgICBIT0ggQyAgICBIT0ggRFxuXG4gICovXG5cbiAgc3RhdGljIGJ1aWxkQXJyYXlPZkFycmF5cyhcbiAgICBmbGF0dGVuOiBDZWxsR3JvdXBFeHRbXSxcbiAgICBhcnJzOiAoQ2VsbEdyb3VwRXh0IHwgbnVsbCB8IHVuZGVmaW5lZClbXVtdXG4gICk6IChDZWxsR3JvdXBFeHQgfCBudWxsIHwgdW5kZWZpbmVkKVtdW10ge1xuXG4gICAgbGV0IGNvbCA9IC0xO1xuICAgIGxldCBsYXN0Um93SWR4ID0gOTk5OTk7XG4gICAgZm9yIChjb25zdCBjZWxsR3JvdXAgb2YgZmxhdHRlbikge1xuICAgICAgaWYgKGNlbGxHcm91cC5yb3dJbmRleCA8PSBsYXN0Um93SWR4KSB7XG4gICAgICAgIGNvbCsrO1xuICAgICAgICBmb3IgKGxldCByID0gMDsgciA8IGFycnMubGVuZ3RoOyByKyspIHtcbiAgICAgICAgICBhcnJzW3JdW2NvbF0gPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGFycnNbY2VsbEdyb3VwLnJvd0luZGV4XVtjb2xdID0gY2VsbEdyb3VwO1xuICAgICAgbGFzdFJvd0lkeCA9IGNlbGxHcm91cC5yb3dJbmRleDtcblxuICAgICAgaWYgKGNlbGxHcm91cC5vd25Db2x1bW4oKSAmJiBjZWxsR3JvdXAuY2hpbGRyZW4/Lmxlbmd0aCkge1xuICAgICAgICBmb3IgKGxldCByID0gY2VsbEdyb3VwLnJvd0luZGV4ICsgMTsgciA8IGFycnMubGVuZ3RoOyByKyspIHtcbiAgICAgICAgICBhcnJzW3JdW2NvbF0gPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgY29sKys7XG4gICAgICAgIGZvciAobGV0IHIgPSAwOyByIDwgYXJycy5sZW5ndGg7IHIrKykge1xuICAgICAgICAgIGFycnNbcl1bY29sXSA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGFycnM7XG4gIH1cblxuXG4gIHN0YXRpYyBpdGVyYXRlVGhyb3dDb2x1bW5zKFxuICAgIHNiOiBzdHJpbmdbXSA9IFtdLFxuICAgIGNlbGxHcm91cHM6IENlbGxHcm91cEV4dFtdXG4gICkge1xuXG4gICAgZm9yIChjb25zdCBjZWxsR3JvdXAgb2YgY2VsbEdyb3Vwcykge1xuICAgICAgc2IucHVzaChjZWxsR3JvdXAuZGF0YSArIFwiICAgIHJvd0luZGV4OlwiICsgY2VsbEdyb3VwLnJvd0luZGV4KTtcbiAgICAgIGlmIChjZWxsR3JvdXAuY2hpbGRyZW4/Lmxlbmd0aCkge1xuICAgICAgICBDZWxsZ3JvdXBGYWN0b3J5Lml0ZXJhdGVUaHJvd0NvbHVtbnMoc2IsIGNlbGxHcm91cC5jaGlsZHJlbik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbn1cblxuIl19