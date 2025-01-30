import {
  ArrayPropertyType,
  ObjectPropertyType, PROPERTY_TYPE_KEY_ARRAY, PROPERTY_TYPE_KEY_BOOLEAN, PROPERTY_TYPE_KEY_NUMBER,
  PROPERTY_TYPE_KEY_OBJECT,
  PropertyItem,
  PropertyType,
  UNIMPORTANT_TYPES
} from './domain/property-type';


export class ColumnDefGenerator {

  public rootPropertyType: PropertyType | null = null;

  public renderColumnDefs(
    rootPropertyType: PropertyType
  ) {
    this.rootPropertyType = rootPropertyType;
    const buf: string[] = [];
    if (!this.rootPropertyType) {
      return buf;
    }

    if (rootPropertyType instanceof ArrayPropertyType) {
      const item = rootPropertyType.items.find(pt => pt.type === PROPERTY_TYPE_KEY_OBJECT);
      if (item && item instanceof ObjectPropertyType) {
        const props: PropertyItem[] = item.properties;
        buf.push('  const columnDefs: ColumnDefIf[] = [');
        this.iteratePropertyItems(buf, props, '');
        buf.push('  ];');
      }
    }

    return buf;
  }

  private iteratePropertyItems(buf: string[], props: PropertyItem[], parentProperty: string = '') {
    for (let i = 0; i < props.length; i++) {
      const prop = props[i];
      let propertyTypes = prop.types.filter(t => !UNIMPORTANT_TYPES.includes(t.type));

      if (propertyTypes.length === 1) {
        let propertyType = propertyTypes[0];
        const concatinatedPropertyName = parentProperty
          ? [parentProperty, propertyType.propertyName].join('.')
          : propertyType.propertyName;

        if (propertyType instanceof ObjectPropertyType) {
          this.iteratePropertyItems(buf, propertyType.properties, concatinatedPropertyName);

        } else {

          let arrayItemClassName = '';
          if (propertyType instanceof ArrayPropertyType) {
            const item = propertyType.items.find(pt => pt.type === PROPERTY_TYPE_KEY_OBJECT);
            if (item && item instanceof ObjectPropertyType) {
              const op: ObjectPropertyType = item;
              arrayItemClassName = op.className;
            }
          }

          if (arrayItemClassName) console.info(`*** TODO export class ${arrayItemClassName}ArrayCellRenderer implements CellRendererIf {...`);
          // console.info(concatinatedPropertyName + ' > ' + propertyType.type);
          // TODO render columnDef for  propertyType -> buf

          const headerLabel = this.getReadableColumnLabel(concatinatedPropertyName);
          let width = 100;
          let bodyRenderer = '';
          let cssClass = 'ge-table-text-align-left';
          if (propertyType.type===PROPERTY_TYPE_KEY_ARRAY) {
            if (arrayItemClassName){
              bodyRenderer = `      bodyRenderer: new ${arrayItemClassName}ArrayCellRenderer(),`;
              cssClass = '';
            } else {
              bodyRenderer = '      bodyRenderer: new SimpleArrayCellRenderer(),';
            }
            width = 250;
          } else if (propertyType.type===PROPERTY_TYPE_KEY_NUMBER) {
            bodyRenderer = '      bodyRenderer: new NumberCellRenderer(),';
            cssClass = 'ge-table-text-align-right';
          } else if (propertyType.type===PROPERTY_TYPE_KEY_BOOLEAN) {
            bodyRenderer = '      bodyRenderer: new TrueFalseCellRenderer(),';
            cssClass = 'ge-table-text-align-center';
            width = 80;
          }

          buf.push(`    ColumnDef.create({
      property: "${concatinatedPropertyName}",
      headerLabel: "${headerLabel}",
      width: new Size(${width}, "px"),
      bodyClasses: ["${cssClass}"],
      headerClasses: ["${cssClass}"],`);

          if (bodyRenderer) {
            buf.push(bodyRenderer);
          }
          buf.push(`    }),`);
        }
      }
    }
  }

  private getReadableColumnLabel(columnId: string): string {
    const components = columnId.split('.');
    const labels = components
      .map((component) => {
        const words = component
          .replace(/([a-z])([A-Z])/g, '$1 $2');
        return words.charAt(0).toUpperCase() + words.slice(1);
      });
    return labels.join(' ');
  }


}