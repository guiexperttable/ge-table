export class CellGroup {
    data;
    property;
    toggle;
    closed;
    visibility;
    children;
    impl = 'CellGroup';
    constructor(data, property, toggle, closed = false, visibility = "normal", children = undefined) {
        this.data = data;
        this.property = property;
        this.toggle = toggle;
        this.closed = closed;
        this.visibility = visibility;
        this.children = children;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VsbC1ncm91cC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvdGFibGUvc3JjL2xpYi90YWJsZS9kYXRhL3RhYmxlbW9kZWwvY2VsbGdyb3VwL2NlbGwtZ3JvdXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsTUFBTSxPQUFPLFNBQVM7SUFLWDtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFSRixJQUFJLEdBQUcsV0FBVyxDQUFDO0lBRTFCLFlBQ1MsSUFBUyxFQUNULFFBQWlCLEVBQ2pCLE1BQWdCLEVBQ2hCLFNBQWtCLEtBQUssRUFDdkIsYUFBMkQsUUFBUSxFQUNuRSxXQUFzQyxTQUFTO1FBTC9DLFNBQUksR0FBSixJQUFJLENBQUs7UUFDVCxhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLFdBQU0sR0FBTixNQUFNLENBQVU7UUFDaEIsV0FBTSxHQUFOLE1BQU0sQ0FBaUI7UUFDdkIsZUFBVSxHQUFWLFVBQVUsQ0FBeUQ7UUFDbkUsYUFBUSxHQUFSLFFBQVEsQ0FBdUM7SUFFeEQsQ0FBQztDQUdGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2VsbEdyb3VwSWYgfSBmcm9tIFwiLi9jZWxsLWdyb3VwLmlmXCI7XG5cbmV4cG9ydCBjbGFzcyBDZWxsR3JvdXAgaW1wbGVtZW50cyBDZWxsR3JvdXBJZiB7XG5cbiAgcHVibGljIGltcGwgPSAnQ2VsbEdyb3VwJztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZGF0YTogYW55LFxuICAgIHB1YmxpYyBwcm9wZXJ0eT86IHN0cmluZyxcbiAgICBwdWJsaWMgdG9nZ2xlPzogYm9vbGVhbixcbiAgICBwdWJsaWMgY2xvc2VkOiBib29sZWFuID0gZmFsc2UsXG4gICAgcHVibGljIHZpc2liaWxpdHk6IFwiYWx3YXlzXCIgfCBcImludmVydGVkXCIgfCBcIm5vcm1hbFwiIHwgdW5kZWZpbmVkID0gXCJub3JtYWxcIixcbiAgICBwdWJsaWMgY2hpbGRyZW46IENlbGxHcm91cElmW10gfCB1bmRlZmluZWQgPSB1bmRlZmluZWRcbiAgKSB7XG4gIH1cblxuXG59XG4iXX0=