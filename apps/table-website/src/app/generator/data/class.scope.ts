import { ClassHierarchy } from "./class.hierarchy";

export class ClassScope {
  public ts = "";

  constructor(
    public classHierarchy?: ClassHierarchy,
    public classesFlat: ClassHierarchy[] = []
  ) {
  }
}
