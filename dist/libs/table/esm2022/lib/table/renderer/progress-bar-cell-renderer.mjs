/**
 * Works with AreaModelObjectArray only
 */
export class ProgressBarCellRenderer {
    property;
    maxValue;
    labelVisible;
    constructor(property, maxValue = 100, labelVisible = false) {
        this.property = property;
        this.maxValue = maxValue;
        this.labelVisible = labelVisible;
    }
    render(cellDiv, rowIndex, columnIndex, areaIdent, areaModel, _cellValue, domService) {
        domService.addClass(cellDiv, "ge-star-rating-div");
        const row = areaModel.getRowByIndex(rowIndex);
        const count = Number('' + areaModel.getValueByT(row, this.property));
        if (!isNaN(count)) {
            const per = count * 100 / this.maxValue;
            const label = this.labelVisible ? (Math.round(per) + '%') : '';
            cellDiv.innerHTML = `
          <div class="ge-table-label-div"
          data-row-index="${rowIndex}"
          data-col-index="${columnIndex}"
          data-area="${areaIdent}"
          title="${label}"
          style="position: relative; background: transparent; width: 100%; height: 100%;">
              <div class="ge-table-progress-container"
                  style="width:100%;height:50%;padding:0;margin-top:6px;"
                  data-row-index="${rowIndex}"
                  data-col-index="${columnIndex}"
                  data-area="${areaIdent}">
                  <div class="ge-table-progress-bar"
                      style="width:${per}%;height:100%;padding:0;margin:0;"
                      data-row-index="${rowIndex}"
                      data-col-index="${columnIndex}"
                      data-area="${areaIdent}">&nbsp;
                  </div>
              </div>
          </div>`;
        }
        return undefined;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3MtYmFyLWNlbGwtcmVuZGVyZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL3RhYmxlL3NyYy9saWIvdGFibGUvcmVuZGVyZXIvcHJvZ3Jlc3MtYmFyLWNlbGwtcmVuZGVyZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUE7O0dBRUc7QUFDSCxNQUFNLE9BQU8sdUJBQXVCO0lBR3pCO0lBQ0E7SUFDQTtJQUhULFlBQ1MsUUFBZ0IsRUFDaEIsV0FBaUIsR0FBRyxFQUNwQixlQUFlLEtBQUs7UUFGcEIsYUFBUSxHQUFSLFFBQVEsQ0FBUTtRQUNoQixhQUFRLEdBQVIsUUFBUSxDQUFZO1FBQ3BCLGlCQUFZLEdBQVosWUFBWSxDQUFRO0lBRTdCLENBQUM7SUFFRCxNQUFNLENBQ0osT0FBdUIsRUFDdkIsUUFBZ0IsRUFDaEIsV0FBbUIsRUFDbkIsU0FBb0IsRUFDcEIsU0FBbUMsRUFDbkMsVUFBZSxFQUNmLFVBQXdCO1FBRXhCLFVBQVUsQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLG9CQUFvQixDQUFDLENBQUM7UUFDbkQsTUFBTSxHQUFHLEdBQUcsU0FBUyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM5QyxNQUFNLEtBQUssR0FBVyxNQUFNLENBQUMsRUFBRSxHQUFHLFNBQVMsQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBRTdFLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDakIsTUFBTSxHQUFHLEdBQUcsS0FBSyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ3hDLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQSxDQUFDLENBQUEsRUFBRSxDQUFDO1lBQzVELE9BQU8sQ0FBQyxTQUFTLEdBQUc7OzRCQUVFLFFBQVE7NEJBQ1IsV0FBVzt1QkFDaEIsU0FBUzttQkFDYixLQUFLOzs7O29DQUlZLFFBQVE7b0NBQ1IsV0FBVzsrQkFDaEIsU0FBUzs7cUNBRUgsR0FBRzt3Q0FDQSxRQUFRO3dDQUNSLFdBQVc7bUNBQ2hCLFNBQVM7OztpQkFHM0IsQ0FBQztTQUNiO1FBRUQsT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQztDQUVGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDZWxsUmVuZGVyZXJJZn0gZnJvbSBcIi4vY2VsbC1yZW5kZXIuaWZcIjtcbmltcG9ydCB7RG9tU2VydmljZUlmfSBmcm9tIFwiLi4vc2VydmljZS9kb20tc2VydmljZS5pZlwiO1xuaW1wb3J0IHtBcmVhSWRlbnR9IGZyb20gXCIuLi9kYXRhL3RhYmxlbW9kZWwvYXJlYS1pZGVudC50eXBlXCI7XG5pbXBvcnQge1JlbmRlcmVyQ2xlYW51cEZuVHlwZX0gZnJvbSBcIi4vcmVuZGVyZXItY2xlYW51cC1mbi50eXBlXCI7XG5pbXBvcnQge0FyZWFNb2RlbE9iamVjdHlBcnJheX0gZnJvbSBcIi4uL2RhdGEvdGFibGVtb2RlbC9hcmVhbW9kZWwvYXJlYS1tb2RlbC1vYmplY3QtYXJyYXlcIjtcblxuLyoqXG4gKiBXb3JrcyB3aXRoIEFyZWFNb2RlbE9iamVjdEFycmF5IG9ubHlcbiAqL1xuZXhwb3J0IGNsYXNzIFByb2dyZXNzQmFyQ2VsbFJlbmRlcmVyPFQ+IGltcGxlbWVudHMgQ2VsbFJlbmRlcmVySWYge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBwcm9wZXJ0eTogc3RyaW5nLFxuICAgIHB1YmxpYyBtYXhWYWx1ZTogbnVtYmVyPTEwMCxcbiAgICBwdWJsaWMgbGFiZWxWaXNpYmxlID0gZmFsc2VcbiAgKSB7XG4gIH1cblxuICByZW5kZXIoXG4gICAgY2VsbERpdjogSFRNTERpdkVsZW1lbnQsXG4gICAgcm93SW5kZXg6IG51bWJlcixcbiAgICBjb2x1bW5JbmRleDogbnVtYmVyLFxuICAgIGFyZWFJZGVudDogQXJlYUlkZW50LFxuICAgIGFyZWFNb2RlbDogQXJlYU1vZGVsT2JqZWN0eUFycmF5PFQ+LFxuICAgIF9jZWxsVmFsdWU6IGFueSxcbiAgICBkb21TZXJ2aWNlOiBEb21TZXJ2aWNlSWYpOiBSZW5kZXJlckNsZWFudXBGblR5cGUgfCB1bmRlZmluZWQge1xuXG4gICAgZG9tU2VydmljZS5hZGRDbGFzcyhjZWxsRGl2LCBcImdlLXN0YXItcmF0aW5nLWRpdlwiKTtcbiAgICBjb25zdCByb3cgPSBhcmVhTW9kZWwuZ2V0Um93QnlJbmRleChyb3dJbmRleCk7XG4gICAgY29uc3QgY291bnQ6IG51bWJlciA9IE51bWJlcignJyArIGFyZWFNb2RlbC5nZXRWYWx1ZUJ5VChyb3csIHRoaXMucHJvcGVydHkpKTtcblxuICAgIGlmICghaXNOYU4oY291bnQpKSB7XG4gICAgICBjb25zdCBwZXIgPSBjb3VudCAqIDEwMCAvIHRoaXMubWF4VmFsdWU7XG4gICAgICBjb25zdCBsYWJlbCA9IHRoaXMubGFiZWxWaXNpYmxlPyAoTWF0aC5yb3VuZChwZXIpICsgJyUnKTonJztcbiAgICAgIGNlbGxEaXYuaW5uZXJIVE1MID0gYFxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJnZS10YWJsZS1sYWJlbC1kaXZcIlxuICAgICAgICAgIGRhdGEtcm93LWluZGV4PVwiJHtyb3dJbmRleH1cIlxuICAgICAgICAgIGRhdGEtY29sLWluZGV4PVwiJHtjb2x1bW5JbmRleH1cIlxuICAgICAgICAgIGRhdGEtYXJlYT1cIiR7YXJlYUlkZW50fVwiXG4gICAgICAgICAgdGl0bGU9XCIke2xhYmVsfVwiXG4gICAgICAgICAgc3R5bGU9XCJwb3NpdGlvbjogcmVsYXRpdmU7IGJhY2tncm91bmQ6IHRyYW5zcGFyZW50OyB3aWR0aDogMTAwJTsgaGVpZ2h0OiAxMDAlO1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ2UtdGFibGUtcHJvZ3Jlc3MtY29udGFpbmVyXCJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPVwid2lkdGg6MTAwJTtoZWlnaHQ6NTAlO3BhZGRpbmc6MDttYXJnaW4tdG9wOjZweDtcIlxuICAgICAgICAgICAgICAgICAgZGF0YS1yb3ctaW5kZXg9XCIke3Jvd0luZGV4fVwiXG4gICAgICAgICAgICAgICAgICBkYXRhLWNvbC1pbmRleD1cIiR7Y29sdW1uSW5kZXh9XCJcbiAgICAgICAgICAgICAgICAgIGRhdGEtYXJlYT1cIiR7YXJlYUlkZW50fVwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdlLXRhYmxlLXByb2dyZXNzLWJhclwiXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJ3aWR0aDoke3Blcn0lO2hlaWdodDoxMDAlO3BhZGRpbmc6MDttYXJnaW46MDtcIlxuICAgICAgICAgICAgICAgICAgICAgIGRhdGEtcm93LWluZGV4PVwiJHtyb3dJbmRleH1cIlxuICAgICAgICAgICAgICAgICAgICAgIGRhdGEtY29sLWluZGV4PVwiJHtjb2x1bW5JbmRleH1cIlxuICAgICAgICAgICAgICAgICAgICAgIGRhdGEtYXJlYT1cIiR7YXJlYUlkZW50fVwiPiZuYnNwO1xuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PmA7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG59XG4iXX0=