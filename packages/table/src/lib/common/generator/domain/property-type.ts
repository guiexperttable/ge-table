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
}

export interface PropertyTypeNamable extends PropertyType {
  name: string;
}

export class AnyPropertyType implements PropertyType {
  public type: string = PROPERTY_TYPE_KEY_ANY;
}

export class UndefinedPropertyType implements PropertyType {
  public type: string = PROPERTY_TYPE_KEY_UNDEFINED;
}

export class NullPropertyType implements PropertyType {
  public type: string = PROPERTY_TYPE_KEY_NULL;
}

export class StringPropertyType implements PropertyType {
  public type: string = PROPERTY_TYPE_KEY_STRING;
}

export class NumberPropertyType implements PropertyType {
  public type: string = PROPERTY_TYPE_KEY_NUMBER;
}

export class BooleanPropertyType implements PropertyType {
  public type: string = PROPERTY_TYPE_KEY_BOOLEAN;
}

export class ArrayPropertyType implements PropertyType, PropertyTypeNamable {
  public type: string = PROPERTY_TYPE_KEY_ARRAY;
  public name: string = '';

  constructor(
    public items: PropertyType[] = []
  ) {
  }
}

export class PropertyItem {
  constructor(
    public name: string,
    public types: PropertyType[] = []
  ) {
  }

  public toString(): string {
    return `PropertyItem(name: ${this.name}, types: [${this.types.map(type => type.type).join(', ')}])`;
  }
}

export class ObjectPropertyType implements PropertyTypeNamable {
  public type: string = PROPERTY_TYPE_KEY_OBJECT;

  constructor(
    public name: string,
    public properties: PropertyItem[] = []
  ) {
  }
}