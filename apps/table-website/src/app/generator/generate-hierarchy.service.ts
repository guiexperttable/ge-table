import { Injectable } from "@angular/core";
import { ClassHierarchy } from "./data/class.hierarchy";
import { PropertyType } from "./data/property.type";
import { ClassScope } from "./data/class.scope";

@Injectable({
  providedIn: "root"
})
export class GenerateHierarchyService {

  json2Hierarchy(json: string): ClassScope {
    const o = JSON.parse(json);
    const classScope = new ClassScope();
    classScope.classHierarchy = this.prop2Hierarchy("root", o, classScope);
    classScope.classesFlat = classScope.classesFlat
      .filter(c => c.name === "root" || c.type.match(/[A-Z]+.*/))
      .filter((value: ClassHierarchy, index: number, self: ClassHierarchy[]) =>
          index === self.findIndex((t) => (
            t.type === value.type && t.name === value.name
          ))
      );
    // TODO remove (filter) opjects with same properties


    classScope.ts = this.classHierarchy2TypeScript(classScope.classesFlat);
    console.info(classScope);
    return classScope;
  }

  prop2Hierarchy(
    propertyName: string,
    propertyValue: any,
    classScope: ClassScope
  ): ClassHierarchy {
    if (Array.isArray(propertyValue)) {
      const ret = new ClassHierarchy(
        propertyName,
        "array",
        undefined,
        this.prop2Hierarchy(propertyName + "Item", propertyValue[0], classScope)
      );
      classScope.classesFlat.push(ret);
      return ret;
    }
    if (typeof propertyValue === "object" && propertyValue !== null) {
      const ret = new ClassHierarchy(propertyName, this.capitalizeFirstLetter(propertyName) + "If",
        Object
          .entries(propertyValue)
          .map(([key, value]) => this.prop2Hierarchy(key, value, classScope))
      );
      classScope.classesFlat.push(ret);
      return ret;
    }
    let propertyType = typeof propertyValue as PropertyType;
    if (propertyType === "undefined" || propertyType === "object") {
      propertyType = "any";
    }
    const ret = new ClassHierarchy(propertyName, propertyType);
    classScope.classesFlat.push(ret);
    return ret;
  }

  classHierarchy2TypeScript(chs: ClassHierarchy[]): string {
    const tsCode: string[] = [];
    for (const ch of chs) {
      if (ch.props) {
        tsCode.push(`export interface ${ch.type} {\n`);
        tsCode.push(ch.props
          .map((property) => {
            if (property.type === "array") {
              return `  ${property.name}: ${property.of?.type}[];`;
            }
            return `  ${property.name}: ${property.type};`;
          })
          .join("\n"));
        tsCode.push("\n}\n\n");
      } else if (ch.of) {
        tsCode.push(`export type Root = RootItemIf[];\n\n`);
      }
    }
    return tsCode.join("");
  }

  private capitalizeFirstLetter(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }


}
