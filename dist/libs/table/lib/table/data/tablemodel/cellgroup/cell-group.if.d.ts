export interface CellGroupIf {
    data: any;
    property?: string;
    toggle?: boolean;
    closed?: boolean;
    visibility?: "always" | "inverted" | "normal" | undefined;
    children?: CellGroupIf[] | undefined;
    impl?: string;
}
