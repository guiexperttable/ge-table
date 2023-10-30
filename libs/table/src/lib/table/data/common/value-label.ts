import { ValueLabelIf } from "./value-label.if";


export class ValueLabel implements ValueLabelIf {


  constructor(
    public value: any,
    public label: string
  ) {
  }

}
