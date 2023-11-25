import {
  AutoRestoreOptions, CellRange,
  ColumnDef,
  ColumnDefIf,
  DateToIntlDDMMYYYYCellRenderer,
  editInputPipeForNumber, FalseFn,
  MaleFemaleToIconCellRenderer,
  NumberCellRenderer,
  px100,
  px120,
  px150,
  px200,
  px50,
  px60,
  px70,
  px80,
  Renderer,
  SelectCellRenderer,
  SelectionModel,
  TableFactory,
  TableModelAndOptions,
  TableModelAndOptionsIf,
  TableOptions,
  TreeFactory,
  TreeRow,
  TrueFn,
  ValueLabel
} from "@guiexpert/table";
import {PersonIf} from "./person.if";
import {TREE_PEOPLE_DATA} from "./treePeopleData";




export function createTreePeopleTableOptions(addDemoSelection: boolean = false) {
  const selectionModel = new SelectionModel("range", "multi");

  if (addDemoSelection) {
    selectionModel.addSelection(new CellRange(0, 0, 0, 2));
    selectionModel.addSelection(new CellRange(2, 1, 2, 2));
    selectionModel.addSelection(new CellRange(1, 5, 6, 7));
    selectionModel.addSelection(new CellRange(0, 8, 0, 8));
    selectionModel.addSelection(new CellRange(5, 6, 10, 10));
  }
  return {
    ...new TableOptions(),
    hoverColumnVisible: false,
    defaultRowHeights: {
      header: 50,
      body: 34,
      footer: 0
    },
    autoRestoreOptions: {
      ...new AutoRestoreOptions<PersonIf>(),
      getStorageKeyFn: () => "TreetablePeopleComponent",
      autoRestoreCollapsedExpandedState: true,
      autoRestoreScrollPosition: true,
      autoRestoreSortingState: true
    },
    externalFilterFunction: (_value: TreeRow<PersonIf>, _index: number, _array: PersonIf[]) => true,
    getSelectionModel: () => selectionModel
  };
}

export function createTreePeopleColumnDefs(): ColumnDefIf[] {
  return [
    new ColumnDef("lastName", "Last Name", px200),
    new ColumnDef("preName", "Pre Name", px120),
    ColumnDef.create({
      property: "age",
      headerLabel: "Age",
      width: px80,
      bodyRenderer: new NumberCellRenderer(),
      editable: TrueFn,
      // editInputPipe: (value: any) => value ? Number(value) : ""
      editInputPipe: editInputPipeForNumber
    }),
    new ColumnDef("birth", "Birthday", px100,
      undefined,
      Renderer.bodyRenderer(new DateToIntlDDMMYYYYCellRenderer())),

    ColumnDef.create({
      property: "gender",
      headerLabel: " ",
      width: px50,
      bodyRenderer: new MaleFemaleToIconCellRenderer(),
      editable: TrueFn,
      getEditRenderer: () => new SelectCellRenderer([
        new ValueLabel("female", "♀"),
        new ValueLabel("male", "♂")
      ])
    }),

    new ColumnDef("address.street", "Strasse", px150),
    new ColumnDef("address.number", "Nr", px70),
    new ColumnDef("address.zip", "Zip", px60),
    new ColumnDef("address.city", "City", px120),
    new ColumnDef("address.country", "Country", px120),
    new ColumnDef("id", "ID", px60)
  ];
}


export function createTreePeopleModelAndOptions(
  addDemoSelection: boolean = false
): TableModelAndOptionsIf {
  const tableOptions = createTreePeopleTableOptions(addDemoSelection);
  const columnDefs = createTreePeopleColumnDefs();
  for (const columnDef of columnDefs) {
    columnDef.sortable = TrueFn;
    columnDef.editable = TrueFn;
  }
  columnDefs[0].editable = FalseFn;


  const tree = TreeFactory.buildTreeRows<PersonIf>(TREE_PEOPLE_DATA, "friends");
  const tableModel = TableFactory.createTableModel({
    rows: tree,
    columnDefs,
    tableOptions,
    fixedLeftColumnCount: 1,
    fixedRightColumnCount: 1
  });



  return new TableModelAndOptions(
    tableModel, tableOptions
  );
}