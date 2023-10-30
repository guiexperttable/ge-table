import { editInputPipe } from "./edit-input-pipe.if";

export const editInputPipeForNumber: editInputPipe = function(value: any, _rowIndex: number, _columnIndex: number) {
  return value ? Number(value) : "";
}

