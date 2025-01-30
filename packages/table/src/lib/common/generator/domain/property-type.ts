export const PROPERTY_TYPE_KEY_ANY = 'any';
export const PROPERTY_TYPE_KEY_UNDEFINED = 'undefined';
export const PROPERTY_TYPE_KEY_NULL = 'null';
export const PROPERTY_TYPE_KEY_STRING = 'string';
export const PROPERTY_TYPE_KEY_NUMBER = 'number';
export const PROPERTY_TYPE_KEY_BOOLEAN = 'boolean';
export const PROPERTY_TYPE_KEY_ARRAY = 'Array';
export const PROPERTY_TYPE_KEY_OBJECT = 'object';

export const UNIMPORTANT_TYPES = [PROPERTY_TYPE_KEY_NULL, PROPERTY_TYPE_KEY_UNDEFINED, PROPERTY_TYPE_KEY_ANY];

export interface PropertyType {
  type: string;
  propertyName: string;
}



export class AnyPropertyType implements PropertyType {
  public type: string = PROPERTY_TYPE_KEY_ANY;
  constructor(public propertyName:string) {}
}

export class UndefinedPropertyType implements PropertyType {
  public type: string = PROPERTY_TYPE_KEY_UNDEFINED;
  constructor(public propertyName:string) {}
}

export class NullPropertyType implements PropertyType {
  public type: string = PROPERTY_TYPE_KEY_NULL;
  constructor(public propertyName:string) {}
}

export class StringPropertyType implements PropertyType {
  public type: string = PROPERTY_TYPE_KEY_STRING;
  constructor(public propertyName:string) {}
}

export class NumberPropertyType implements PropertyType {
  public type: string = PROPERTY_TYPE_KEY_NUMBER;
  constructor(public propertyName:string) {}
}

export class BooleanPropertyType implements PropertyType {
  public type: string = PROPERTY_TYPE_KEY_BOOLEAN;
  constructor(public propertyName:string) {}
}

export class ArrayPropertyType implements PropertyType {
  public type: string = PROPERTY_TYPE_KEY_ARRAY;

  constructor(
    public propertyName:string,
    public items: PropertyType[] = []
  ) {
  }
}

export class PropertyItem {
  constructor(
    public propertyName: string,
    public types: PropertyType[] = []
  ) {
  }

  public toString(): string {
    return `PropertyItem(propertyName: ${this.propertyName}, types: [${this.types.map(type => type.type).join(', ')}])`;
  }
}

export class ObjectPropertyType implements PropertyType{
  public type: string = PROPERTY_TYPE_KEY_OBJECT;

  constructor(
    public propertyName:string,
    public className: string,
    public properties: PropertyItem[] = []
  ) {
  }
}