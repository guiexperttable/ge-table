import {
  ArrayPropertyType,
  ObjectPropertyType,
  PROPERTY_TYPE_KEY_UNDEFINED,
  PropertyItem,
  PropertyType,
  UNIMPORTANT_TYPES
} from './domain/property-type';

/**
 *
 *  Converts a json or object structure like this:
 *  [
 *   {
 *     id: 1,
 *     name: 'Alice',
 *     description: 'Lorem ipsum dolor',
 *     isActive: true,
 *     tags: ['typescript', 'javascript'],
 *     scripts: [],
 *     profile: { age: 30, location: 'Berlin' },
 *     preferences: [{ key: 'theme', value: 'dark' }]
 *   },
 *   {
 *     id: 2,
 *     name: 'Marc',
 *     description: 'Lorem ipsum dolor',
 *     isActive: false,
 *     tags: ['java', 'javascript'],
 *     scripts: [],
 *     profile: { age: 55, location: 'Frankfurt' },
 *     preferences: [{ key: 'theme', value: 'light' }]
 *   },
 *   {
 *     id: null,
 *     name: 'Bob',
 *     isActive: false,
 *     tags: null,
 *     scripts: [],
 *     profile: { age: 25, location: 'Frankfurt' },
 *     preferences: [{ key: 'language', value: 'de' }]
 *   }
 * ]
 *
 *  into a TypeScript interface definitions:
 *
 * export interface XyzRowEntity {
 *   description?: string;
 *   id: number|null;
 *   isActive: boolean;
 *   name: string;
 *   preferences: PreferenceEntity[];
 *   profile: ProfileEntity;
 *   scripts: any[];
 *   tags: string[]|null;
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
 * const rootPropertyType: PropertyType = new PropertyTypeService().object2PropertyType(demoData, 'XyzRows');
 * console.log(new SchemeGenerator().renderTypeScriptInterfaces(rootPropertyType).join('\n'));
 *
 */
export class SchemeGenerator {

  public orOperator = '|';
  public rootPropertyType: PropertyType | null = null;

  private rootName = 'Root';
  private renderTypeScriptInterfacesFifo: ObjectPropertyType[] = [];
  private renderTypeScriptInterfacesDone: string[] = [];


  public renderTypeScriptInterfaces(rootPropertyType: PropertyType) {
    if ('name' in rootPropertyType) {
      this.rootName = rootPropertyType['name'] + '';
    }
    this.rootPropertyType = rootPropertyType;
    const buf: string[] = [];
    if (!this.rootPropertyType) {
      return buf;
    }

    this.renderTypeScriptInterfacesFifo = [];
    this.renderTypeScriptInterfacesRecursive(this.rootPropertyType, buf);
    this.renderTypeScriptInterfacesFifoNext(buf);

    return buf;
  }


  private renderTypeScriptInterfacesFifoNext(buf: string[]) {
    while (this.renderTypeScriptInterfacesFifo?.length) {
      const pt: ObjectPropertyType | undefined = this.renderTypeScriptInterfacesFifo.shift();
      if (pt) {
        this.renderTypeScriptInterfacesRecursive(pt, buf, pt.propertyName);
      }
    }
  }

  private renderTypeScriptInterfacesRecursive(
    pt: PropertyType | null = this.rootPropertyType,
    buf: string[] = [],
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
      const entityName = od.className;

      if (!this.renderTypeScriptInterfacesDone.includes(entityName)) {
        this.renderTypeScriptInterfacesDone.push(entityName);
        buf.push(`export interface ${entityName} {`);

        for (const property of od.properties) {
          let typeStr = this.propertyItem2InterfaceDateType(property);
          if (typeStr === '[]') {
            typeStr = 'any[]';
          } else if (typeStr.startsWith('(') && typeStr.endsWith(')')) {
            typeStr = typeStr.substring(1, typeStr.length - 1);
          }
          const questionMark: string = this.containsUndefinedPropertyType(property) ? '?' : '';

          buf.push('  ' + property.propertyName + questionMark + ': ' + typeStr + ';');

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
      .filter(f => f !== PROPERTY_TYPE_KEY_UNDEFINED)
      .sort((a, b) => {
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

  private renderType(propertyType: PropertyType, propertyItem: PropertyItem): string {
    if (propertyType instanceof ArrayPropertyType) {
      const s = propertyType.items
        .map(it => this.renderType(it, propertyItem))
        .join(this.orOperator);
      if (s.includes(this.orOperator)) return `(${s})[]`;
      return `${s}[]`;
    }
    if (propertyType instanceof ObjectPropertyType) {
      const ot: ObjectPropertyType = propertyType;
      return ot.className;
    }
    return propertyType.type;
  }

  private containsUndefinedPropertyType(propertyItem: PropertyItem): boolean {
    for (const type of propertyItem.types) {
      if (type.type === PROPERTY_TYPE_KEY_UNDEFINED) return true;
    }
    return false;
  }


}