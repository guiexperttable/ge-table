export interface CellGroupIf {

  data: any;
  property?: string; // if a property is set, then this element has its own column
  toggle?: boolean; // toggle control will be displayed
  closed?: boolean; // current state
  visibility?: "always" | "inverted" | "normal" | undefined;
  children?: CellGroupIf[] | undefined;

  impl?:string;

}
