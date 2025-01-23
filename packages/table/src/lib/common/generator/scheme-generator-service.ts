import {
  ArrayPropertyType,
  ObjectPropertyType,
  PropertyItem,
  PropertyType,
  PropertyTypeNamable, UNIMPORTANT_TYPES
} from './domain/property-type';
import { PropertyItemTreeService } from './property-item-tree.service';
import { getEntityName } from './string-util';


/**
 *
 *  Converts a json or object structure like this:
 *    [
 *      {
 *        id: 1,
 *        name: "Alice",
 *        description: "Lorem ipsum dolor",
 *        isActive: true,
 *        tags: ["typescript", "javascript"],
 *        profile: { age: 30, location: "Berlin" },
 *        preferences: [{ key: "theme", value: "dark" }],
 *      },
 *      {
 *        id: 2,
 *        name: "Marc",
 *        description: "Lorem ipsum dolor",
 *        isActive: false,
 *        tags: ["java", "javascript"],
 *        profile: { age: 55, location: "Frankfurt" },
 *        preferences: [{ key: "theme", value: "light" }],
 *      },
 *      {
 *        id: null,
 *        name: "Bob",
 *        isActive: false,
 *        tags: null,
 *        profile: { age: 25, location: "Frankfurt" },
 *        preferences: [{ key: "language", value: "de" }],
 *      },
 *    ]
 *
 *  into a TypeScript interface definitions:
 *
 * export interface XyzRowEntity {
 *   description: string;
 *   id: (number | null);
 *   isActive: boolean;
 *   name: string;
 *   preferences: PreferenceEntity[];
 *   profile: ProfileEntity;
 *   tags: (string[] | null);
 * }
 *
 * export interface PreferenceEntity {
 *   key: string;
 *   value: string;
 * }
 *
 * export interface ProfileEntity {
 *   age: number;
 *   location: string;
 * }
 *
 *
 * const json = JSON.stringify(demoData);
 * const schemeGenerator = new SchemeGenerator(json, 'XyzRow');
 * console.log(schemeGenerator.renderTypeScriptInterfaces().join('\n'));
 *
 */
export class SchemeGenerator {

  public orOperator = ' | ';
  public rootPropertyType: PropertyType | null = null;

  private renderTypeScriptInterfacesFifo: ObjectPropertyType[]=[];
  private renderTypeScriptInterfacesDone: string[] = [];


  /**
   *
   * @param json
   * @param rootName
   */
  constructor(
    json:string|object,
    public rootName:string = ''
  ) {
    if (!this.rootName) {
      this.rootName = 'Row';
    }
    let parsedObject: object;
    if (typeof json === 'string') {
      parsedObject = this.jon2Object(json);
    } else {
      parsedObject = json;
    }
    this.rootPropertyType = this.object2PropertyType(parsedObject);
  }

  public jon2Object(json: string): object {
    return JSON.parse(json);
  }

  public object2PropertyType(parsedObject: Object): PropertyType {
    return new PropertyItemTreeService().object2PropertyType(parsedObject, this.rootName);
  }

  public renderTypeScriptInterfaces(){
    const buf:string[]=[];
    if (!this.rootPropertyType) {
      return buf;
    }
    this.renderTypeScriptInterfacesFifo = [];
    this.renderTypeScriptInterfacesRecursive(this.rootPropertyType, buf);
    this.renderTypeScriptInterfacesFifoNext(buf);

    return buf;
  }

  private renderTypeScriptInterfacesFifoNext(buf:string[]){
    while (this.renderTypeScriptInterfacesFifo?.length){
      const pt:PropertyTypeNamable|undefined = this.renderTypeScriptInterfacesFifo.shift();
      if (pt) {
        this.renderTypeScriptInterfacesRecursive(pt, buf, pt.name);
      }
    }
  }

  private renderTypeScriptInterfacesRecursive(
    pt:PropertyType|null = this.rootPropertyType,
    buf:string[] = [],
    name: string = this.rootName
  ): string[] {

    if (!pt) return buf;

    if (pt instanceof ArrayPropertyType) {
      for (const item of pt.items) {
        this.renderTypeScriptInterfacesRecursive(item, buf, name);
        if (item instanceof ObjectPropertyType) {
          const od: ObjectPropertyType = item;
          if (od !== this.rootPropertyType) {
            this.renderTypeScriptInterfacesFifo.push(od);
          }
        }
      }

    } else if (pt instanceof ObjectPropertyType) {
      const od: ObjectPropertyType = pt;
      const entityName = getEntityName(name);

      if (!this.renderTypeScriptInterfacesDone.includes(entityName)) {
        this.renderTypeScriptInterfacesDone.push(entityName);
        buf.push(`export interface ${entityName} {`);

        for (const property of od.properties) {
          const typeStr = this.propertyItem2InterfaceDateType(property);
          const questionMark: string = this.containsUndefinedPropertyType(property) ? '?' : '';
          buf.push('  ' + property.name + questionMark + ': ' + typeStr + ';');

          for (const type of property.types) {
            if (type instanceof ObjectPropertyType) {
              if (type !== this.rootPropertyType) {
                this.renderTypeScriptInterfacesFifo.push(type);
              }
            } else if (type instanceof ArrayPropertyType) {
              for (const item of type.items) {
                if (item instanceof ObjectPropertyType) {
                  this.renderTypeScriptInterfacesFifo.push(item);
                }
              }
            }
          }
        }
        buf.push('}');
        buf.push('');
      }
    } else {

    }
    return buf;
  }



  private propertyItem2InterfaceDateType(propertyItem: PropertyItem): string {
    if (propertyItem.types?.length === 0) return 'any';
    if (propertyItem.types?.length === 1) return this.renderType(propertyItem.types[0], propertyItem);

    const ts = propertyItem.types
      .map(propertyType => this.renderType(propertyType, propertyItem))
      .filter(f=> f!=='undefined')
      .sort( (a,b) => {
        if (UNIMPORTANT_TYPES.includes(a)) return 100;
        if (UNIMPORTANT_TYPES.includes(b)) return -100;
        return a.localeCompare(b);
      })
      .join(this.orOperator);
    if (ts.includes(this.orOperator)) {
      return '(' + ts + ')';
    }
    return ts;
  }

  private renderType(propertyType:PropertyType, propertyItem: PropertyItem): string {
    if (propertyType instanceof ArrayPropertyType) {
      const s = propertyType.items
        .map(it=>this.renderType(it, propertyItem))
        .join(this.orOperator);
      if (s.includes(this.orOperator)) return `(${s})[]`;
      return `${s}[]`;
    }
    if (propertyType instanceof ObjectPropertyType) {
      return getEntityName(propertyItem.name);
    }
    return propertyType.type;
  }

  private containsUndefinedPropertyType(propertyItem: PropertyItem):boolean{
    for (const type of propertyItem.types) {
      if (type.type==='undefined') return true;
    }
    return false;
  }


}