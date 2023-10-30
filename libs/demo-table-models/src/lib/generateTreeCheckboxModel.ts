import {
  AreaObjectMap,
  CellRendererIf,
  ColumnDef,
  ColumnDefIf,
  DateToIntlDDMMYYYYCellRenderer,
  MaleFemaleToIconCellRenderer,
  Size,
  TableFactory,
  TableModelIf,
  TableOptions,
  TableOptionsIf,
  TreeFactory
} from "@guiexpert/table";
import { PersonIf } from "../model/person.if";
import data from "../demodata/tree-persons";


export function generateTreeCheckboxModel(): TableModelIf {

  const tableOptions: TableOptionsIf = {
    ...new TableOptions(),
    hoverColumnVisible: false,
    defaultRowHeights: {
      header: 50,
      body: 34,
      footer: 0
    },
    showCheckboxWihoutExtraColumn: true // <-- true: we will see the checkbox IN the first column after the arrow
  };

  const columnDefs: ColumnDefIf[] = [
    // new CheckboxColumn(), //  <--- not needed, because we have 'showCheckboxWihoutExtraColumn:true'
    new ColumnDef("lastName", "Last Name", new Size(250, "px")),
    new ColumnDef("preName", "Pre Name", new Size(120, "px")),
    new ColumnDef("birth", "Birthday", new Size(100, "px"), new AreaObjectMap<string[]>(), new AreaObjectMap<CellRendererIf>(undefined, new DateToIntlDDMMYYYYCellRenderer(), undefined), undefined, undefined),
    new ColumnDef("gender", " ", new Size(50, "px"), new AreaObjectMap<string[]>(), new AreaObjectMap<CellRendererIf>(undefined, new MaleFemaleToIconCellRenderer(), undefined), undefined, undefined),
    new ColumnDef("address.street", "Strasse", new Size(150, "px")),
    new ColumnDef("address.number", "Nr", new Size(70, "px")),
    new ColumnDef("address.zip", "Zip", new Size(60, "px")),
    new ColumnDef("address.city", "City", new Size(120, "px")),
    new ColumnDef("id", "ID", new Size(60, "px"))
  ];

  const tree = TreeFactory.buildTreeRows<PersonIf>(data, "friends");
  return TableFactory.createTableModel({
    rows: tree,
    columnDefs,
    tableOptions,
    fixedLeftColumnCount: 2,
    fixedRightColumnCount: 0
  });
}

