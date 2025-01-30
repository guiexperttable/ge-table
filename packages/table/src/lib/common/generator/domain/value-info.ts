import { AnyPropertyType, PropertyItem } from './property-type';

export class ValueInfo {
  public property: string = '';
  public value: any = '';
  public path = '';
  public propertyItem: PropertyItem = new PropertyItem('', [new AnyPropertyType('')]);

  public toString() {
    return `${this.path} -> : ${this.propertyItem?.toString()??''}`;
  }
}