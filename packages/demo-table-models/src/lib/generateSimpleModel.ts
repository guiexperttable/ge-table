import { TableFactory, TableModelIf } from "@guiexpert/table";

export function generateSimpleModel(
  rowCount: number = 1000,
  columnCount: number = 1000
): TableModelIf {

  const bodyData: string[][] =
    Array.from(Array(rowCount).keys()).map((r) =>
      Array.from(Array(columnCount).keys()).map((c) => `${r}/${c}`)
    );

  const headerData: string[][] =
    Array.from(Array(2).keys()).map((r) =>
      Array.from(Array(columnCount).keys()).map((c) => `H${r}/${c}`)
    );

  const footerData: string[][] =
    Array.from(Array(2).keys()).map((r) =>
      Array.from(Array(columnCount).keys()).map((c) => `F${r}/${c}`)
    );

  return TableFactory.createTableModel({
    headerData,
    bodyData,
    footerData,
    overridingColumnWidth: 110,
    fixedLeftColumnCount: 2,
    fixedRightColumnCount: 2
  });
}
