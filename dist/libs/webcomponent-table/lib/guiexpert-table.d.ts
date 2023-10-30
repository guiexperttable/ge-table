import { TableModelAndOptionsIf } from "@guiexpert/table";
export declare class GuiexpertTable extends HTMLElement {
    private _data;
    get data(): TableModelAndOptionsIf | undefined;
    set data(value: TableModelAndOptionsIf | undefined);
    setData({ tableModel, tableOptions }: TableModelAndOptionsIf): void;
    connectedCallback(): void;
}
