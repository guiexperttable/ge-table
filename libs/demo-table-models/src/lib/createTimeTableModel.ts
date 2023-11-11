import {
  AreaModelArrayOfArrays,
  AreaModelObjectArrayWithColumndefs,
  ColumnDef,
  ColumnDefIf,
  DateToTecCellRenderer,
  Size,
  TableFactory,
  TableModelIf,
  TableOptions,
  TrueFalseCellRenderer
} from "@guiexpert/table";


export interface TeamIf {
  name: string,
  active: boolean
}

export interface TeamDataIf {
  id?: number,
  city?: string,
  location?: string,
  team?: TeamIf,
  data?: [number, number, number, number, number, number, number, number, number, number, number, number],
  updatedAt?: Date,
}

export const data: TeamDataIf[] = (
  [
    {
      id: 1,
      city: "London",
      location: "Building A",
      team: { name: "Team LAA", active: true },
      data: [123, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    {
      id: 2,
      city: "London",
      location: "Building A",
      team: { name: "Team LAB", active: true },
      data: [0, 432, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    {
      id: 3,
      city: "London",
      location: "Building A",
      team: { name: "Team LAC", active: false },
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    {
      id: 4,
      city: "London",
      location: "Building A",
      team: { name: "Team LAD", active: true },
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    {
      id: 5,
      city: "London",
      location: "Building B",
      team: { name: "Team LBA", active: true },
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    {
      id: 6,
      city: "London",
      location: "Building B",
      team: { name: "Team LBB", active: true },
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    {
      id: 7,
      city: "London",
      location: "Building B",
      team: { name: "Team LBC", active: true },
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    {
      id: 8,
      city: "New York",
      location: "Building A",
      team: { name: "Team NAA", active: true },
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    {
      id: 9,
      city: "New York",
      location: "Building A",
      team: { name: "Team NAB", active: false },
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    {
      id: 10,
      city: "New York",
      location: "Building A",
      team: { name: "Team NAC", active: true },
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    {
      id: 11,
      city: "New York",
      location: "Building A",
      team: { name: "Team NAD", active: true },
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    {
      id: 12,
      city: "New York",
      location: "Building B",
      team: { name: "Team NBA", active: true },
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    {
      id: 13,
      city: "New York",
      location: "Building B",
      team: { name: "Team NBB", active: true },
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    {
      id: 14,
      city: "New York",
      location: "Building B",
      team: { name: "Team NBC", active: true },
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    {
      id: 15,
      city: "Tokio",
      location: "Building A",
      team: { name: "Team TAA", active: true },
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    {
      id: 16,
      city: "Tokio",
      location: "Building A",
      team: { name: "Team TAB", active: true },
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    {
      id: 17,
      city: "Tokio",
      location: "Building B",
      team: { name: "Team TBA", active: true },
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    {
      id: 18,
      city: "Tokio",
      location: "Building B",
      team: { name: "Team TBB", active: true },
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    {
      id: 19,
      city: "Tokio",
      location: "Building C",
      team: { name: "Team TCA", active: true },
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    {
      id: 20,
      city: "Tokio",
      location: "Building C",
      team: { name: "Team TCB", active: true },
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    {
      id: 21,
      city: "Tokio",
      location: "Building C",
      team: { name: "Team TCC", active: true },
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }
  ] as TeamDataIf[])
  .map(r => {
    r.updatedAt = new Date();
    return r;
  });

/*
export function createTreeTableRows(): TreeRow<TeamDataIf>[] {
  const rows = data
    .map(r => new TreeRow<TeamDataIf>(r, true, [], undefined));
  const ret: TreeRow<TeamDataIf>[] = [];

  const map = {};
  for (const r of rows) {
    const key = r.data.city;
    // @ts-ignore
    if (!map[key]) map[key] = [];
    // @ts-ignore
    map[key] = r;
  }
  for (const mapKey in map) {
    // @ts-ignore
    const tr = new TreeRow({ city: mapKey }, true, map[mapKey], undefined);
    ret.push(tr);
  }

  return ret;
}
*/
const columnDefs: ColumnDefIf[] = [
  new ColumnDef("city", "City", new Size(90, "px")),
  new ColumnDef("location", "Location", new Size(100, "px")),
  new ColumnDef("team.name", "Team", new Size(100, "px")),
  ColumnDef.create({
    property: "team.active",
    headerLabel: "Active",
    width: new Size(60, "px"),
    bodyRenderer: new TrueFalseCellRenderer()
  }),
  new ColumnDef("data.0", "00", new Size(60, "px")),
  new ColumnDef("data.1", "15", new Size(60, "px")),
  new ColumnDef("data.2", "30", new Size(60, "px")),
  new ColumnDef("data.3", "45", new Size(60, "px")),
  new ColumnDef("data.4", "00", new Size(60, "px")),
  new ColumnDef("data.5", "15", new Size(60, "px")),
  new ColumnDef("data.6", "30", new Size(60, "px")),
  new ColumnDef("data.7", "45", new Size(60, "px")),
  new ColumnDef("data.8", "00", new Size(60, "px")),
  new ColumnDef("data.9", "15", new Size(60, "px")),
  new ColumnDef("data.10", "30", new Size(60, "px")),
  new ColumnDef("data.11", "45", new Size(60, "px")),
  ColumnDef.create({
    property: "updatedAt",
    headerLabel: "Updated at",
    width: new Size(175, "px"),
    bodyRenderer: new DateToTecCellRenderer()
  })
];
export const COL_IDX_UPDATED_AT = columnDefs.length - 1;

export const tableOptions = {
  ...new TableOptions(),
  hoverRowVisible: false,
  hoverColumnVisible: false,
  defaultRowHeights: {
    header: 34,
    body: 34,
    footer: 34
  },
  columnsDraggable: false,
  columnsResizable: true
};

export function createTimeTableModel(): TableModelIf {


  const defaultRowHeights = tableOptions.defaultRowHeights;
  const tm = TableFactory.createTableModel({
    headerAreaModel: new TimeTableHeaderModel(defaultRowHeights.header),
    bodyAreaModel: new TimeTableBodyModel(defaultRowHeights.body),
    footerAreaModel: new TimeTableFooterModel(defaultRowHeights.footer),
    columnDefs,
    fixedLeftColumnCount: 2,
    fixedRightColumnCount: 1,
    defaultRowHeights,
    columnCount: columnDefs.length
  });
  console.info(tm); // TODO del
  return tm;
}

class TimeTableBodyModel extends AreaModelObjectArrayWithColumndefs<TeamDataIf> {
  constructor(rowHeight: number) {
    super("body", data, columnDefs, rowHeight);
  }

  override getRowspanAt(rowIndex: number, columnIndex: number): number {
    if (columnIndex === 0 || columnIndex == 1) {
      const v = this.getValueAt(rowIndex, columnIndex);
      if (rowIndex === 0 || v !== this.getValueAt(rowIndex - 1, columnIndex)) {
        return this.countNextWithValue(rowIndex, columnIndex, v);
      }
    }
    return 1;
  }

  private countNextWithValue(rowIndex: number, columnIndex: number, value: any): number {
    let ret = 1;
    while (value === this.getValueAt(rowIndex + ret, columnIndex)) {
      ret++;
    }
    return ret;
  }
}

class TimeTableHeaderModel extends AreaModelArrayOfArrays<string> {
  constructor(rowHeight: number) {
    super(
      "header",
      [
        ["City", "Location", "Team", "", "08:00 - 09:00", "", "", "", "09:00 - 10:00", "", "", "", "10:00 - 11:00", "", "", "", "Updated At"],
        ["", "", "Name", "Active", "00", "15", "30", "45", "00", "15", "30", "45", "00", "15", "30", "45", ""]
      ],
      rowHeight
    );
  }

  override getColspanAt(rowIndex: number, columnIndex: number): number {
    if (rowIndex === 0) {
      if (columnIndex === 2 || columnIndex === 2) {
        return 2;
      }
      if (columnIndex === 4 || columnIndex === 8 || columnIndex === 12) {
        return 4;
      }
    }
    return 1;
  }

  override getRowspanAt(rowIndex: number, columnIndex: number): number {
    if (rowIndex === 0) {
      if (columnIndex === 0 || columnIndex === 1 || columnIndex === 16) {
        return 2;
      }
    }
    return 1;
  }

  override getCustomClassesAt(_rowIndex: number, _columnIndex: number): string[] {
    return ["ge-font-weight-bold"];
  }
}


class TimeTableFooterModel extends AreaModelArrayOfArrays<string> {
  constructor(rowHeight: number) {
    super(
      "footer",
      [["", "", "Sum of Quarters:", "", "123", "432", "", "", "", "", "", "", "", "", "", "", ""]],
      rowHeight
    );
  }

  override getColspanAt(_rowIndex: number, columnIndex: number): number {
    if (columnIndex == 0 || columnIndex == 2) {
      return 2;
    }
    return 1;
  }


  override getCustomClassesAt(_rowIndex: number, columnIndex: number): string[] {
    if (columnIndex === 2) return ["ge-text-align-right", "ge-font-weight-bold"];
    return [];
  }

}

