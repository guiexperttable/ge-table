export class TreeRow {
    data;
    expanded;
    children;
    parent;
    deep;
    checked;
    keep;
    constructor(data, expanded = true, children, parent, deep = 0, checked = false, keep = false) {
        this.data = data;
        this.expanded = expanded;
        this.children = children;
        this.parent = parent;
        this.deep = deep;
        this.checked = checked;
        this.keep = keep;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1yb3cuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL3RhYmxlL3NyYy9saWIvdGFibGUvZGF0YS9jb21tb24vdHJlZS1yb3cudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsTUFBTSxPQUFPLE9BQU87SUFHVDtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQVBULFlBQ1MsSUFBTyxFQUNQLFdBQW9CLElBQUksRUFDeEIsUUFBb0MsRUFDcEMsTUFBZ0MsRUFDaEMsT0FBZSxDQUFDLEVBQ2hCLFVBQW1CLEtBQUssRUFDeEIsT0FBZ0IsS0FBSztRQU5yQixTQUFJLEdBQUosSUFBSSxDQUFHO1FBQ1AsYUFBUSxHQUFSLFFBQVEsQ0FBZ0I7UUFDeEIsYUFBUSxHQUFSLFFBQVEsQ0FBNEI7UUFDcEMsV0FBTSxHQUFOLE1BQU0sQ0FBMEI7UUFDaEMsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQixZQUFPLEdBQVAsT0FBTyxDQUFpQjtRQUN4QixTQUFJLEdBQUosSUFBSSxDQUFpQjtJQUU5QixDQUFDO0NBRUYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUcmVlUm93SWYgfSBmcm9tIFwiLi90cmVlLXJvdy1pZlwiO1xuXG5leHBvcnQgY2xhc3MgVHJlZVJvdzxUPiBpbXBsZW1lbnRzIFRyZWVSb3dJZjxUPiB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGRhdGE6IFQsXG4gICAgcHVibGljIGV4cGFuZGVkOiBib29sZWFuID0gdHJ1ZSxcbiAgICBwdWJsaWMgY2hpbGRyZW46IFRyZWVSb3dJZjxUPltdIHwgdW5kZWZpbmVkLFxuICAgIHB1YmxpYyBwYXJlbnQ6IFRyZWVSb3dJZjxUPiB8IHVuZGVmaW5lZCxcbiAgICBwdWJsaWMgZGVlcDogbnVtYmVyID0gMCxcbiAgICBwdWJsaWMgY2hlY2tlZDogYm9vbGVhbiA9IGZhbHNlLFxuICAgIHB1YmxpYyBrZWVwOiBib29sZWFuID0gZmFsc2VcbiAgKSB7XG4gIH1cblxufVxuIl19