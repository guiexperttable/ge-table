export class DateToIntlDDMMYYYYCellRenderer {
    formatter = new Intl.DateTimeFormat("de-DE", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
    });
    render(cellDiv, rowIndex, columnIndex, areaIdent, _areaModel, cellValue, _domService) {
        if (cellValue) {
            let dateStr = '';
            try {
                dateStr = this.formatter.format(new Date(cellValue));
            }
            catch (e) {
                dateStr = cellValue;
            }
            cellDiv.innerHTML = `
          <div class="ge-table-label-div" data-row-index="${rowIndex}" data-col-index="${columnIndex}" data-area="${areaIdent}" style="position: relative; background: transparent; width: 100%; height: 100%;">
            <div class="ge-table-label" data-row-index="${rowIndex}" data-col-index="${columnIndex}" data-area="${areaIdent}">${dateStr}</div>
          </div>`;
        }
        return undefined;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS10by1pbnQtZGF0ZS1jZWxsLXJlbmRlcmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy90YWJsZS9zcmMvbGliL3RhYmxlL3JlbmRlcmVyL2RhdGUtdG8taW50LWRhdGUtY2VsbC1yZW5kZXJlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPQSxNQUFNLE9BQU8sOEJBQThCO0lBRWhDLFNBQVMsR0FBRyxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFO1FBQ3BELElBQUksRUFBRSxTQUFTO1FBQ2YsS0FBSyxFQUFFLFNBQVM7UUFDaEIsR0FBRyxFQUFFLFNBQVM7S0FDZixDQUFDLENBQUM7SUFFSCxNQUFNLENBQ0osT0FBdUIsRUFDdkIsUUFBZ0IsRUFDaEIsV0FBbUIsRUFDbkIsU0FBb0IsRUFDcEIsVUFBdUIsRUFDdkIsU0FBYyxFQUNkLFdBQXlCO1FBQ3pCLElBQUksU0FBUyxFQUFFO1lBQ2IsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDO1lBQ2pCLElBQUk7Z0JBQ0YsT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7YUFDdEQ7WUFBQyxPQUFPLENBQUMsRUFBRTtnQkFDVixPQUFPLEdBQUcsU0FBUyxDQUFDO2FBQ3JCO1lBQ0QsT0FBTyxDQUFDLFNBQVMsR0FBRzs0REFDa0MsUUFBUSxxQkFBcUIsV0FBVyxnQkFBZ0IsU0FBUzswREFDbkUsUUFBUSxxQkFBcUIsV0FBVyxnQkFBZ0IsU0FBUyxLQUFLLE9BQU87aUJBQ3RILENBQUM7U0FDYjtRQUNELE9BQU8sU0FBUyxDQUFDO0lBQ25CLENBQUM7Q0FFRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENlbGxSZW5kZXJlcklmIH0gZnJvbSBcIi4vY2VsbC1yZW5kZXIuaWZcIjtcbmltcG9ydCB7IEFyZWFNb2RlbElmIH0gZnJvbSBcIi4uL2RhdGEvdGFibGVtb2RlbC9hcmVhbW9kZWwvYXJlYS1tb2RlbC5pZlwiO1xuaW1wb3J0IHsgRG9tU2VydmljZUlmIH0gZnJvbSBcIi4uL3NlcnZpY2UvZG9tLXNlcnZpY2UuaWZcIjtcbmltcG9ydCB7IEFyZWFJZGVudCB9IGZyb20gXCIuLi9kYXRhL3RhYmxlbW9kZWwvYXJlYS1pZGVudC50eXBlXCI7XG5pbXBvcnQgeyBSZW5kZXJlckNsZWFudXBGblR5cGUgfSBmcm9tIFwiLi9yZW5kZXJlci1jbGVhbnVwLWZuLnR5cGVcIjtcblxuXG5leHBvcnQgY2xhc3MgRGF0ZVRvSW50bERETU1ZWVlZQ2VsbFJlbmRlcmVyIGltcGxlbWVudHMgQ2VsbFJlbmRlcmVySWYge1xuXG4gIHJlYWRvbmx5IGZvcm1hdHRlciA9IG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KFwiZGUtREVcIiwge1xuICAgIHllYXI6IFwibnVtZXJpY1wiLFxuICAgIG1vbnRoOiBcIjItZGlnaXRcIixcbiAgICBkYXk6IFwiMi1kaWdpdFwiXG4gIH0pO1xuXG4gIHJlbmRlcihcbiAgICBjZWxsRGl2OiBIVE1MRGl2RWxlbWVudCxcbiAgICByb3dJbmRleDogbnVtYmVyLFxuICAgIGNvbHVtbkluZGV4OiBudW1iZXIsXG4gICAgYXJlYUlkZW50OiBBcmVhSWRlbnQsXG4gICAgX2FyZWFNb2RlbDogQXJlYU1vZGVsSWYsXG4gICAgY2VsbFZhbHVlOiBhbnksXG4gICAgX2RvbVNlcnZpY2U6IERvbVNlcnZpY2VJZik6IFJlbmRlcmVyQ2xlYW51cEZuVHlwZSB8IHVuZGVmaW5lZCB7XG4gICAgaWYgKGNlbGxWYWx1ZSkge1xuICAgICAgbGV0IGRhdGVTdHIgPSAnJztcbiAgICAgIHRyeSB7XG4gICAgICAgIGRhdGVTdHIgPSB0aGlzLmZvcm1hdHRlci5mb3JtYXQobmV3IERhdGUoY2VsbFZhbHVlKSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGRhdGVTdHIgPSBjZWxsVmFsdWU7XG4gICAgICB9XG4gICAgICBjZWxsRGl2LmlubmVySFRNTCA9IGBcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ2UtdGFibGUtbGFiZWwtZGl2XCIgZGF0YS1yb3ctaW5kZXg9XCIke3Jvd0luZGV4fVwiIGRhdGEtY29sLWluZGV4PVwiJHtjb2x1bW5JbmRleH1cIiBkYXRhLWFyZWE9XCIke2FyZWFJZGVudH1cIiBzdHlsZT1cInBvc2l0aW9uOiByZWxhdGl2ZTsgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDEwMCU7XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ2UtdGFibGUtbGFiZWxcIiBkYXRhLXJvdy1pbmRleD1cIiR7cm93SW5kZXh9XCIgZGF0YS1jb2wtaW5kZXg9XCIke2NvbHVtbkluZGV4fVwiIGRhdGEtYXJlYT1cIiR7YXJlYUlkZW50fVwiPiR7ZGF0ZVN0cn08L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5gO1xuICAgIH1cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbn1cbiJdfQ==