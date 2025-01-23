import {
  AnyPropertyType,
  ArrayPropertyType,
  BooleanPropertyType,
  NullPropertyType,
  NumberPropertyType,
  ObjectPropertyType,
  PropertyItem,
  PropertyType,
  StringPropertyType,
  UndefinedPropertyType
} from './domain/property-type';
import { ValueInfo } from './domain/value-info';


export class PropertyItemTreeService {

  public entitySuffix = 'Entity';


  /**
   * Converts a json or object structure like this:
   * [
   *   {
   *     id: 1,
   *     name: "Alice",
   *     description: "Lorem ipsum dolor",
   *     isActive: true,
   *     tags: ["typescript", "javascript"],
   *     profile: { age: 30, location: "Berlin" },
   *     preferences: [{ key: "theme", value: "dark" }],
   *   },
   *   {
   *     id: 2,
   *     name: "Marc",
   *     description: "Lorem ipsum dolor",
   *     isActive: false,
   *     tags: ["java", "javascript"],
   *     profile: { age: 55, location: "Frankfurt" },
   *     preferences: [{ key: "theme", value: "light" }],
   *   },
   *   {
   *     id: null,
   *     name: "Bob",
   *     isActive: false,
   *     tags: null,
   *     profile: { age: 25, location: "Frankfurt" },
   *     preferences: [{ key: "language", value: "de" }],
   *   },
   * ]
   *
   * into a PropertyTape tree structure like this:
   *
   *     return new ArrayPropertyType(
   *       [
   *         new ObjectPropertyType('XyzRowEntity', [
   *           new PropertyItem('id', [new NumberPropertyType(), new NullPropertyType()]),
   *           new PropertyItem('name', [new StringPropertyType()]),
   *           new PropertyItem('description', [new StringPropertyType(), new UndefinedPropertyType()]),
   *           new PropertyItem('isActive', [new BooleanPropertyType()]),
   *           new PropertyItem('tags', [
   *             new ArrayPropertyType(
   *               [new StringPropertyType()]
   *             ),
   *             new NullPropertyType()
   *           ]),
   *           new PropertyItem('profile', [
   *             new ObjectPropertyType('profile', [
   *               new PropertyItem('age', [new NumberPropertyType()]),
   *               new PropertyItem('location', [new StringPropertyType()])
   *             ])
   *           ]),
   *           new PropertyItem('preferences', [
   *             new ArrayPropertyType(
   *               [
   *                 new ObjectPropertyType('preference', [
   *                   new PropertyItem('key', [new StringPropertyType()]),
   *                   new PropertyItem('value', [new StringPropertyType()])
   *                 ])
   *               ])
   *           ])
   *         ])
   *       ]);
   *
   * The PropertyTape tree structure can be rendered as TypeScript interface definitions with the SchemeGenerator:
   *
   * export interface XyzRowEntity {
   *   description: string;
   *   id: (null | number);
   *   isActive: boolean;
   *   name: string;
   *   preferences: Array<(PreferenceEntity)>;
   *   profile: ProfileEntity;
   *   tags: (null | Array<()> | string);
   * }
   *
   * export interface PreferencesEntity {
   *   key: string;
   *   value: string;
   * }
   *
   * export interface ProfileEntity {
   *   age: number;
   *   location: string;
   * }
   *
   * @param parsedObject
   * @param rootName
   */
  public object2PropertyType(
    parsedObject: Object,
    rootName: string = ''
  ): PropertyType {

    const valueInfos: ValueInfo[] = this.extractValueInfos(parsedObject, rootName);
    const mergedValueInfos: ValueInfo[] = this.mergeValueInfos(valueInfos);
    if (mergedValueInfos.length > 0) {
      mergedValueInfos[0].propertyItem.name = rootName;
    }
    if (1===1+1) this.logValueInfos(mergedValueInfos);

    return this.valueInfos2PropertyType(mergedValueInfos);
  }

  private valueInfos2PropertyType(valueInfos: ValueInfo[]): PropertyType  {
    const root: PropertyType = valueInfos[0].propertyItem.types[0];
    const map = new Map<string, ValueInfo>();
    for (const valueInfo of valueInfos) {
      map.set(valueInfo.path, valueInfo);
    }

    for (const valueInfo of valueInfos) {
      const parentPath = this.getParentPath(valueInfo.path);
      if (parentPath){
        const parentValueInfo = map.get(parentPath);
        if (parentValueInfo){

          let arrayOrObject = false;
          if (parentValueInfo.propertyItem.types.length===1) {
            const pt = parentValueInfo.propertyItem.types[0];
            if (pt instanceof ArrayPropertyType) {
              arrayOrObject = true;
              for (const type of valueInfo.propertyItem.types) {
                pt.items.push(type);
              }

            } else if (pt instanceof ObjectPropertyType) {
              arrayOrObject = true;
              pt.properties.push(valueInfo.propertyItem);
            }
          }
          if (!arrayOrObject) {
            for (const type of valueInfo.propertyItem.types) {
              parentValueInfo.propertyItem.types.push(type);
            }
          }
        }
      }
    }
    if (root) return root;
    return new AnyPropertyType();
  }

  getParentPath(path: string): string {
    const lastSlashIndex = path.lastIndexOf('/');
    if (lastSlashIndex === -1) {
      return '';
    }
    return path.substring(0, lastSlashIndex);
  }


  private logValueInfos(mergedValueInfos: ValueInfo[]) {
    for (let i = 0; i < mergedValueInfos.length; i++) {
      const valueInfo = mergedValueInfos[i];
      valueInfo.value = null;
      const istr = i.toString().padStart(2, '0');
      console.info(istr + ') ' + valueInfo.toString() + '\t\tparent: ' + this.getParentPath(valueInfo.path));
    }
  }

  private mergeValueInfos(valueInfos: ValueInfo[]): ValueInfo[] {
    const ret: ValueInfo[] = [];
    let index = valueInfos.length - 1;
    ret.push(valueInfos[index]);
    let path: string = valueInfos[index].path;


    for (let i = index - 1; i >= 0; i--) {
      if (valueInfos[i].path === path) {
        let propertyType = valueInfos[i].propertyItem.types[0];
        if (!valueInfos[index].propertyItem.types.some(type => type.type === propertyType.type)) {
          valueInfos[index].propertyItem.types.push(propertyType);
        }
      }
      if (i === 0 || valueInfos[i].path !== path) {
        index = i;
        ret.push(valueInfos[i]);
        path = valueInfos[index].path;
      }
    }
    ret.reverse();
    return ret;
  }


  private extractValueInfos(parsedObject: Object, rootName:string): ValueInfo[] {
    const valueInfos: ValueInfo[] = [];

    const processNode = (node: any, currentPath: string, parentName: string): void => {
      const valueInfo = new ValueInfo();
      let property = currentPath.split('/').pop() || '';
      if (property==='[]') {
        property = parentName + this.entitySuffix;
      } else if (property==='root') {
        property = rootName;
      }
      valueInfo.property = property;
      valueInfo.value = node;
      valueInfo.path = currentPath;
      valueInfo.propertyItem = this.createPropertyItem(node, valueInfo.property);
      valueInfos.push(valueInfo);

      if (node && typeof node === 'object' && !Array.isArray(node)) {
        for (const key in node) {
          if (node.hasOwnProperty(key)) {
            const newPath = currentPath ? `${currentPath}/${key}` : key;
            processNode(node[key], newPath, property); // recursive
          }
        }

      } else if (Array.isArray(node)) {
        node.forEach((item, _index) => {
          const newPath = `${currentPath}/[]`;
          processNode(item, newPath, property); // recursive
        });
      }
    };

    // Start:
    processNode(parsedObject, 'root', rootName);

    return valueInfos.sort((a: ValueInfo, b: ValueInfo) => a.path.localeCompare(b.path));
  }

  private createPropertyItem(
    val: any,
    name: string
  ): PropertyItem {
    return new PropertyItem(name, [
      this.createPropertyType(val, name)
    ]);
  }

  private createPropertyType(
    val: any,
    name: string
  ): PropertyType {
    if (val === null) return new NullPropertyType();
    if (val === undefined) return new UndefinedPropertyType();
    if (typeof val === 'string') return new StringPropertyType();
    if (typeof val === 'number' && !isNaN(val)) return new NumberPropertyType();
    if (typeof val === 'boolean') return new BooleanPropertyType();
    if (Array.isArray(val)) return new ArrayPropertyType();
    if (typeof val === 'object') return new ObjectPropertyType(name);

    return new UndefinedPropertyType();
  }


}