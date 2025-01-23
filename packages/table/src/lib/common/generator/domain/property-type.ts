
export const UNIMPORTANT_TYPES = ['null', 'undefined', 'any'];

export interface PropertyType {
  type: string;
}
export interface PropertyTypeNamable extends PropertyType {
  name: string;
}

export class AnyPropertyType implements PropertyType {
  public type: string = "any";
}
export class UndefinedPropertyType implements PropertyType {
  public type: string = "undefined";
}
export class NullPropertyType implements PropertyType {
  public type: string = "null";
}
export class StringPropertyType implements PropertyType {
  public type: string = "string";
}
export class NumberPropertyType implements PropertyType  {
  public type: string = "number";
}
export class BooleanPropertyType  implements PropertyType {
  public type: string = "boolean";
}

export class ArrayPropertyType  implements PropertyType {
  public type: string = "Array";
  constructor(
    public items: PropertyType[] = []
  ) {
  }
}

export class PropertyItem  {
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
  public type: string = "object";

  constructor(
    public name: string,
    public properties: PropertyItem[] = []
  ) {
  }
}