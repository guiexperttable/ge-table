import { PropertyType } from "./property.type";

export class ClassHierarchy {
  constructor(
    public name: string,
    public type: PropertyType,
    public props: ClassHierarchy[] | undefined = undefined,
    public of: ClassHierarchy | undefined = undefined
  ) {
  }
}
