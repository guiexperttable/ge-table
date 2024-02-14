import {
  AreaModelCellGroups,
  AreaModelObjectArrayWithColumndefs,
  CellgroupFactory, CellGroupIf,
  TableFactory,
  TableModelIf
} from '@guiexpert/table';


export interface HeaderTeamIf {
  "team_a": number;
  "sum_a": number;
  "peter": number;
  "paul": number;
}

export const teamHeaderGroups: CellGroupIf[] = [
  {
    data: "Team A",
    toggle: true,
    property:'team_a',
    children: [
      {
        data: "Sum",
        property: "sum_a"
      },
      {
        data: "Peter",
        property: "peter"
      },
      {
        data: "Paul",
        property: "paul"
      }
    ]
  },

];


export function createTeamHeadergroupModel(cellGroups: CellGroupIf[] = teamHeaderGroups): TableModelIf {
  const defaultRowHeight = 34;
  const groupExts = CellgroupFactory.buildGroupExts(cellGroups);
  const columnDefs = CellgroupFactory.buildColumnDefs(groupExts);
  const headerAreaModel = new AreaModelCellGroups("header", cellGroups, columnDefs, defaultRowHeight);

  console.info("headerGroups", cellGroups);
  console.info("columnDefs", columnDefs.map(cd => cd.property));
  console.info("columnDefs", columnDefs);

  const arrs = [
    {
      "team_a": 0,
      "sum_a": 9,
      "peter": 5,
      "paul": 4,
    }
  ];
  const bodyAreaModel = new AreaModelObjectArrayWithColumndefs<HeaderTeamIf>("body", arrs, columnDefs, 34);

  return TableFactory.createTableModel({
    headerAreaModel,
    bodyAreaModel,
    columnDefs
  });
}
