import { PropertyType } from './domain/property-type';


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
 *  TODO
 *
 */
export class ColumnDefGenerator {

  public rootPropertyType: PropertyType | null = null;

  private rootName = 'Root';
  // private renderTypeScriptInterfacesFifo: ObjectPropertyType[] = [];
  // private renderTypeScriptInterfacesDone: string[] = [];




  /**
   * Converts a PropertyType tree like this:
   *
   * renderColumnDefs(
   *   new ArrayPropertyType(
   *       [
   *         new ObjectPropertyType('XyzRowEntity', [
   *         new PropertyItem('id', [new NumberPropertyType(), new NullPropertyType()]),
   *         new PropertyItem('name', [new StringPropertyType()]),
   *         new PropertyItem('description', [new StringPropertyType(), new UndefinedPropertyType()]),
   *         new PropertyItem('isActive', [new BooleanPropertyType()]),
   *         new PropertyItem('tags', [
   *           new ArrayPropertyType(
   *           [new StringPropertyType()]
   *           ),
   *           new NullPropertyType()
   *         ]),
   *         new PropertyItem('scripts', [
   *           new ArrayPropertyType(
   *           [new AnyPropertyType()]
   *           ),
   *         ]),
   *         new PropertyItem('profile', [
   *           new ObjectPropertyType('profile', [
   *             new PropertyItem('age', [new NumberPropertyType()]),
   *             new PropertyItem('location', [new StringPropertyType()])
   *           ])
   *         ]),
   *         new PropertyItem('preferences', [
   *           new ArrayPropertyType(
   *           [
   *             new ObjectPropertyType('preference', [
   *             new PropertyItem('key', [new StringPropertyType()]),
   *             new PropertyItem('value', [new StringPropertyType()])
   *           ])
   *           ])
   *         ])
   *       ])
   *     ]);
   * )
   *
   * into a ColumnDefIf Array like this:
   *
   *   [
   *     ColumnDef.create({
   *       property: "id",
   *       headerLabel: "ID",
   *       width: px60,
   *       bodyClasses: ["ge-table-text-align-left"],
   *       headerClasses: ["ge-table-text-align-left"],
   *     }),
   *     ColumnDef.create({
   *       property: "name",
   *       headerLabel: "Name",
   *       width: px120,
   *       bodyClasses: ["ge-table-text-align-left"],
   *       headerClasses: ["ge-table-text-align-left"],
   *     }),
   *     ColumnDef.create({
   *       property: "description",
   *       headerLabel: "Description",
   *       width: px200,
   *       bodyClasses: ["ge-table-text-align-left"],
   *       headerClasses: ["ge-table-text-align-left"],
   *     }),
   *     ColumnDef.create({
   *       property: "isActive",
   *       headerLabel: "Active",
   *       width: px100,
   *       bodyRenderer: new TrueFalseCellRenderer()
   *     }),
   *     ColumnDef.create({
   *       property: "tags",
   *       headerLabel: "Tags",
   *       width: px300,
   *       bodyClasses: ["ge-table-text-align-left"],
   *       headerClasses: ["ge-table-text-align-left"],
   *     }),
   *     ColumnDef.create({
   *       property: "profile.age",
   *       headerLabel: "Profile Age",
   *       width: new Size(200, "px"),
   *       bodyClasses: ["ge-table-text-align-right"],
   *       headerClasses: ["ge-table-text-align-right"],
   *       bodyRenderer: new NumberCellRenderer()
   *     }),
   *     ColumnDef.create({
   *       property: "profile.location",
   *       headerLabel: "Profile Location",
   *       width: px300,
   *       bodyClasses: ["ge-table-text-align-left"],
   *       headerClasses: ["ge-table-text-align-left"],
   *     }),
   *     ColumnDef.create({
   *       property: "preferences",
   *       headerLabel: "Preferences",
   *       width: px300,
   *       bodyClasses: ["ge-table-text-align-left"],
   *       headerClasses: ["ge-table-text-align-left"],
   *     }),
   *   ];
   *
   *
   *
   * @param rootPropertyType
   */
  public renderColumnDefs(
    rootPropertyType: PropertyType
  ) {
    if ('name' in rootPropertyType) {
      this.rootName = rootPropertyType['name'] + '';
    }
    this.rootPropertyType = rootPropertyType;
    const buf: string[] = [];
    if (!this.rootPropertyType) {
      return buf;
    }
    // this.renderTypeScriptInterfacesFifo = [];
    // this.renderTypeScriptInterfacesRecursive(this.rootPropertyType, buf);
    // this.renderTypeScriptInterfacesFifoNext(buf);

    return buf;
  }

  /*
  private renderTypeScriptInterfacesFifoNext(buf: string[]) {
    while (this.renderTypeScriptInterfacesFifo?.length) {
      const pt: PropertyTypeNamable | undefined = this.renderTypeScriptInterfacesFifo.shift();
      if (pt) {
        this.renderTypeScriptInterfacesRecursive(pt, buf, pt.name);
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
      const entityName = getEntityName(name);

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
      return getEntityName(propertyItem.name);
    }
    return propertyType.type;
  }

  private containsUndefinedPropertyType(propertyItem: PropertyItem): boolean {
    for (const type of propertyItem.types) {
      if (type.type === PROPERTY_TYPE_KEY_UNDEFINED) return true;
    }
    return false;
  }

*/
}