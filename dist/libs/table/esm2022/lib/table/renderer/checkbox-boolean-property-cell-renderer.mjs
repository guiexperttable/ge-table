/**
 * Works with AreaModelObjectArray only
 */
export class CheckboxBooleanPropertyCellRenderer {
    property;
    skipCheckableCheck;
    readonly;
    constructor(property, skipCheckableCheck = true, readonly = false) {
        this.property = property;
        this.skipCheckableCheck = skipCheckableCheck;
        this.readonly = readonly;
    }
    render(cellDiv, rowIndex, columnIndex, areaIdent, areaModel, _cellValue, domService) {
        if (this.readonly || this.skipCheckableCheck || areaModel.isRowCheckable(rowIndex)) {
            domService.addClass(cellDiv, "ge-table-row-checkbox-div");
            const row = areaModel.getRowByIndex(rowIndex);
            const boxChecked = areaModel.getValueByT(row, this.property) === true;
            const checked = boxChecked ? "checked" : "";
            const readonly = this.readonly ? " readonly " : "";
            domService.addClass(cellDiv, "ge-padding-property-checkbox");
            cellDiv.innerHTML = `
        <input
          type="checkbox"
          data-area="${areaIdent}"
          data-row-index="${rowIndex}"
          data-col-index="${columnIndex}"
          data-property-index="${this.property}"
          data-input-type="checkbox"
          ${checked}
          ${readonly}
          class="ge-input-checkbox">`;
            if (!this.readonly) {
                const inputEle = cellDiv.querySelector(".ge-input-checkbox");
                if (inputEle) {
                    // @ts-ignore
                    inputEle.addEventListener("click", (_ele, _evt) => {
                        // @ts-ignore
                        row[this.property] = !row[this.property];
                        return true;
                    });
                }
            }
        }
        return undefined;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3gtYm9vbGVhbi1wcm9wZXJ0eS1jZWxsLXJlbmRlcmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy90YWJsZS9zcmMvbGliL3RhYmxlL3JlbmRlcmVyL2NoZWNrYm94LWJvb2xlYW4tcHJvcGVydHktY2VsbC1yZW5kZXJlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNQTs7R0FFRztBQUNILE1BQU0sT0FBTyxtQ0FBbUM7SUFHckM7SUFDQTtJQUNBO0lBSFQsWUFDUyxRQUFnQixFQUNoQixxQkFBOEIsSUFBSSxFQUNsQyxXQUFvQixLQUFLO1FBRnpCLGFBQVEsR0FBUixRQUFRLENBQVE7UUFDaEIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFnQjtRQUNsQyxhQUFRLEdBQVIsUUFBUSxDQUFpQjtJQUVsQyxDQUFDO0lBRUQsTUFBTSxDQUNKLE9BQXVCLEVBQ3ZCLFFBQWdCLEVBQ2hCLFdBQW1CLEVBQ25CLFNBQW9CLEVBQ3BCLFNBQW1DLEVBQ25DLFVBQWUsRUFDZixVQUF3QjtRQUV4QixJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLGtCQUFrQixJQUFJLFNBQVMsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDbEYsVUFBVSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsMkJBQTJCLENBQUMsQ0FBQztZQUMxRCxNQUFNLEdBQUcsR0FBRyxTQUFTLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzlDLE1BQU0sVUFBVSxHQUFHLFNBQVMsQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxJQUFJLENBQUM7WUFDdEUsTUFBTSxPQUFPLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUM1QyxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUVuRCxVQUFVLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSw4QkFBOEIsQ0FBQyxDQUFDO1lBQzdELE9BQU8sQ0FBQyxTQUFTLEdBQUc7Ozt1QkFHSCxTQUFTOzRCQUNKLFFBQVE7NEJBQ1IsV0FBVztpQ0FDTixJQUFJLENBQUMsUUFBUTs7WUFFbEMsT0FBTztZQUNQLFFBQVE7cUNBQ2lCLENBQUM7WUFFaEMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ2xCLE1BQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQW1CLG9CQUFvQixDQUFDLENBQUM7Z0JBQy9FLElBQUksUUFBUSxFQUFFO29CQUNaLGFBQWE7b0JBQ2IsUUFBUSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxDQUFDLElBQXNCLEVBQUUsSUFBZ0IsRUFBRSxFQUFFO3dCQUM5RSxhQUFhO3dCQUNiLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO3dCQUN6QyxPQUFPLElBQUksQ0FBQztvQkFDZCxDQUFDLENBQUMsQ0FBQztpQkFDSjthQUNGO1NBQ0Y7UUFDRCxPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDO0NBRUYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDZWxsUmVuZGVyZXJJZiB9IGZyb20gXCIuL2NlbGwtcmVuZGVyLmlmXCI7XG5pbXBvcnQgeyBEb21TZXJ2aWNlSWYgfSBmcm9tIFwiLi4vc2VydmljZS9kb20tc2VydmljZS5pZlwiO1xuaW1wb3J0IHsgQXJlYUlkZW50IH0gZnJvbSBcIi4uL2RhdGEvdGFibGVtb2RlbC9hcmVhLWlkZW50LnR5cGVcIjtcbmltcG9ydCB7IFJlbmRlcmVyQ2xlYW51cEZuVHlwZSB9IGZyb20gXCIuL3JlbmRlcmVyLWNsZWFudXAtZm4udHlwZVwiO1xuaW1wb3J0IHsgQXJlYU1vZGVsT2JqZWN0eUFycmF5IH0gZnJvbSBcIi4uL2RhdGEvdGFibGVtb2RlbC9hcmVhbW9kZWwvYXJlYS1tb2RlbC1vYmplY3QtYXJyYXlcIjtcblxuLyoqXG4gKiBXb3JrcyB3aXRoIEFyZWFNb2RlbE9iamVjdEFycmF5IG9ubHlcbiAqL1xuZXhwb3J0IGNsYXNzIENoZWNrYm94Qm9vbGVhblByb3BlcnR5Q2VsbFJlbmRlcmVyPFQ+IGltcGxlbWVudHMgQ2VsbFJlbmRlcmVySWYge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBwcm9wZXJ0eTogc3RyaW5nLFxuICAgIHB1YmxpYyBza2lwQ2hlY2thYmxlQ2hlY2s6IGJvb2xlYW4gPSB0cnVlLFxuICAgIHB1YmxpYyByZWFkb25seTogYm9vbGVhbiA9IGZhbHNlXG4gICkge1xuICB9XG5cbiAgcmVuZGVyKFxuICAgIGNlbGxEaXY6IEhUTUxEaXZFbGVtZW50LFxuICAgIHJvd0luZGV4OiBudW1iZXIsXG4gICAgY29sdW1uSW5kZXg6IG51bWJlcixcbiAgICBhcmVhSWRlbnQ6IEFyZWFJZGVudCxcbiAgICBhcmVhTW9kZWw6IEFyZWFNb2RlbE9iamVjdHlBcnJheTxUPixcbiAgICBfY2VsbFZhbHVlOiBhbnksXG4gICAgZG9tU2VydmljZTogRG9tU2VydmljZUlmKTogUmVuZGVyZXJDbGVhbnVwRm5UeXBlIHwgdW5kZWZpbmVkIHtcblxuICAgIGlmICh0aGlzLnJlYWRvbmx5IHx8IHRoaXMuc2tpcENoZWNrYWJsZUNoZWNrIHx8IGFyZWFNb2RlbC5pc1Jvd0NoZWNrYWJsZShyb3dJbmRleCkpIHtcbiAgICAgIGRvbVNlcnZpY2UuYWRkQ2xhc3MoY2VsbERpdiwgXCJnZS10YWJsZS1yb3ctY2hlY2tib3gtZGl2XCIpO1xuICAgICAgY29uc3Qgcm93ID0gYXJlYU1vZGVsLmdldFJvd0J5SW5kZXgocm93SW5kZXgpO1xuICAgICAgY29uc3QgYm94Q2hlY2tlZCA9IGFyZWFNb2RlbC5nZXRWYWx1ZUJ5VChyb3csIHRoaXMucHJvcGVydHkpID09PSB0cnVlO1xuICAgICAgY29uc3QgY2hlY2tlZCA9IGJveENoZWNrZWQgPyBcImNoZWNrZWRcIiA6IFwiXCI7XG4gICAgICBjb25zdCByZWFkb25seSA9IHRoaXMucmVhZG9ubHkgPyBcIiByZWFkb25seSBcIiA6IFwiXCI7XG5cbiAgICAgIGRvbVNlcnZpY2UuYWRkQ2xhc3MoY2VsbERpdiwgXCJnZS1wYWRkaW5nLXByb3BlcnR5LWNoZWNrYm94XCIpO1xuICAgICAgY2VsbERpdi5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgZGF0YS1hcmVhPVwiJHthcmVhSWRlbnR9XCJcbiAgICAgICAgICBkYXRhLXJvdy1pbmRleD1cIiR7cm93SW5kZXh9XCJcbiAgICAgICAgICBkYXRhLWNvbC1pbmRleD1cIiR7Y29sdW1uSW5kZXh9XCJcbiAgICAgICAgICBkYXRhLXByb3BlcnR5LWluZGV4PVwiJHt0aGlzLnByb3BlcnR5fVwiXG4gICAgICAgICAgZGF0YS1pbnB1dC10eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICR7Y2hlY2tlZH1cbiAgICAgICAgICAke3JlYWRvbmx5fVxuICAgICAgICAgIGNsYXNzPVwiZ2UtaW5wdXQtY2hlY2tib3hcIj5gO1xuXG4gICAgICBpZiAoIXRoaXMucmVhZG9ubHkpIHtcbiAgICAgICAgY29uc3QgaW5wdXRFbGUgPSBjZWxsRGl2LnF1ZXJ5U2VsZWN0b3I8SFRNTElucHV0RWxlbWVudD4oXCIuZ2UtaW5wdXQtY2hlY2tib3hcIik7XG4gICAgICAgIGlmIChpbnB1dEVsZSkge1xuICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICBpbnB1dEVsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKF9lbGU6IEhUTUxJbnB1dEVsZW1lbnQsIF9ldnQ6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIHJvd1t0aGlzLnByb3BlcnR5XSA9ICFyb3dbdGhpcy5wcm9wZXJ0eV07XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbn1cbiJdfQ==