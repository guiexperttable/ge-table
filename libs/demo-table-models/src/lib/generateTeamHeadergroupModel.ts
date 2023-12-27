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

// TODO hier gehts weiter
export function createTeamHeadergroupModel(): TableModelIf {
  const defaultRowHeight = 34;
  const groupExts = CellgroupFactory.buildGroupExts(teamHeaderGroups);
  const columnDefs = CellgroupFactory.buildColumnDefs(groupExts); // TODO fix
  const headerAreaModel = new AreaModelCellGroups("header", teamHeaderGroups, columnDefs, defaultRowHeight);

  console.info("headerGroups", teamHeaderGroups);
  console.info("columnDefs", columnDefs.map(cd => cd.property));
  console.info("columnDefs", columnDefs);
  //console.info(CellgroupFactory.buildDeepMap(headerGroups));

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
