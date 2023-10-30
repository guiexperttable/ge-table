export class InputCellRenderer {
    render(cellDiv, rowIndex, columnIndex, areaIdent, areaModel, _cellValue, domService) {
        if (areaModel.isEditable(rowIndex, columnIndex)) {
            domService.addClass(cellDiv, "ge-table-row-input-div");
            const val = areaModel.getValueAt(rowIndex, columnIndex);
            cellDiv.innerHTML = `
            <input
                type="text"
                value="${val}"
                autofocus
                onfocus="this.setSelectionRange(0, this.value.length)"
                data-listen="change"
                data-area="${areaIdent}"
                data-row-index="${rowIndex}"
                data-col-index="${columnIndex}"
                data-input-type="text"
                style="width:calc(100% - 8px);height:100%;border:0;padding:0 0 0 8px;"
                class="ge-table-cell-editor-input">`;
        }
        return undefined;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtY2VsbC1yZW5kZXJlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvdGFibGUvc3JjL2xpYi90YWJsZS9yZW5kZXJlci9lZGl0L2lucHV0LWNlbGwtcmVuZGVyZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT0EsTUFBTSxPQUFPLGlCQUFpQjtJQUc1QixNQUFNLENBQ0osT0FBdUIsRUFDdkIsUUFBZ0IsRUFDaEIsV0FBbUIsRUFDbkIsU0FBb0IsRUFDcEIsU0FBc0IsRUFDdEIsVUFBZSxFQUNmLFVBQXdCO1FBRXhCLElBQUksU0FBUyxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsV0FBVyxDQUFDLEVBQUU7WUFDL0MsVUFBVSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsd0JBQXdCLENBQUMsQ0FBQztZQUV2RCxNQUFNLEdBQUcsR0FBRyxTQUFTLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxXQUFXLENBQUMsQ0FBQztZQUN4RCxPQUFPLENBQUMsU0FBUyxHQUFHOzs7eUJBR0QsR0FBRzs7Ozs2QkFJQyxTQUFTO2tDQUNKLFFBQVE7a0NBQ1IsV0FBVzs7O29EQUdPLENBQUM7U0FDaEQ7UUFDRCxPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDO0NBRUYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDZWxsUmVuZGVyZXJJZiB9IGZyb20gXCIuLi9jZWxsLXJlbmRlci5pZlwiO1xuaW1wb3J0IHsgQXJlYUlkZW50IH0gZnJvbSBcIi4uLy4uL2RhdGEvdGFibGVtb2RlbC9hcmVhLWlkZW50LnR5cGVcIjtcbmltcG9ydCB7IEFyZWFNb2RlbElmIH0gZnJvbSBcIi4uLy4uL2RhdGEvdGFibGVtb2RlbC9hcmVhbW9kZWwvYXJlYS1tb2RlbC5pZlwiO1xuaW1wb3J0IHsgRG9tU2VydmljZUlmIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2UvZG9tLXNlcnZpY2UuaWZcIjtcbmltcG9ydCB7IFJlbmRlcmVyQ2xlYW51cEZuVHlwZSB9IGZyb20gXCIuLi9yZW5kZXJlci1jbGVhbnVwLWZuLnR5cGVcIjtcblxuXG5leHBvcnQgY2xhc3MgSW5wdXRDZWxsUmVuZGVyZXIgaW1wbGVtZW50cyBDZWxsUmVuZGVyZXJJZiB7XG5cblxuICByZW5kZXIoXG4gICAgY2VsbERpdjogSFRNTERpdkVsZW1lbnQsXG4gICAgcm93SW5kZXg6IG51bWJlcixcbiAgICBjb2x1bW5JbmRleDogbnVtYmVyLFxuICAgIGFyZWFJZGVudDogQXJlYUlkZW50LFxuICAgIGFyZWFNb2RlbDogQXJlYU1vZGVsSWYsXG4gICAgX2NlbGxWYWx1ZTogYW55LFxuICAgIGRvbVNlcnZpY2U6IERvbVNlcnZpY2VJZik6IFJlbmRlcmVyQ2xlYW51cEZuVHlwZSB8IHVuZGVmaW5lZCB7XG5cbiAgICBpZiAoYXJlYU1vZGVsLmlzRWRpdGFibGUocm93SW5kZXgsIGNvbHVtbkluZGV4KSkge1xuICAgICAgZG9tU2VydmljZS5hZGRDbGFzcyhjZWxsRGl2LCBcImdlLXRhYmxlLXJvdy1pbnB1dC1kaXZcIik7XG5cbiAgICAgIGNvbnN0IHZhbCA9IGFyZWFNb2RlbC5nZXRWYWx1ZUF0KHJvd0luZGV4LCBjb2x1bW5JbmRleCk7XG4gICAgICBjZWxsRGl2LmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICB2YWx1ZT1cIiR7dmFsfVwiXG4gICAgICAgICAgICAgICAgYXV0b2ZvY3VzXG4gICAgICAgICAgICAgICAgb25mb2N1cz1cInRoaXMuc2V0U2VsZWN0aW9uUmFuZ2UoMCwgdGhpcy52YWx1ZS5sZW5ndGgpXCJcbiAgICAgICAgICAgICAgICBkYXRhLWxpc3Rlbj1cImNoYW5nZVwiXG4gICAgICAgICAgICAgICAgZGF0YS1hcmVhPVwiJHthcmVhSWRlbnR9XCJcbiAgICAgICAgICAgICAgICBkYXRhLXJvdy1pbmRleD1cIiR7cm93SW5kZXh9XCJcbiAgICAgICAgICAgICAgICBkYXRhLWNvbC1pbmRleD1cIiR7Y29sdW1uSW5kZXh9XCJcbiAgICAgICAgICAgICAgICBkYXRhLWlucHV0LXR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICBzdHlsZT1cIndpZHRoOmNhbGMoMTAwJSAtIDhweCk7aGVpZ2h0OjEwMCU7Ym9yZGVyOjA7cGFkZGluZzowIDAgMCA4cHg7XCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImdlLXRhYmxlLWNlbGwtZWRpdG9yLWlucHV0XCI+YDtcbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG59XG4iXX0=