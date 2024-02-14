import {
  AreaModelCellGroups,
  AreaModelObjectArrayWithColumndefs,
  CellgroupFactory,
  TableFactory,
  TableModelIf
} from "@guiexpert/table";
import { headerGroups } from "../../demodata/header-groups";

export interface FalconIf {
  "GOLD": number;
  "GOLD_AB": number;
  "GOLD_A": number;
  "GOLD_B": number;
  "GOLD_C": number;
  "GOLD_D": number;
  "GOLD_SUM_CD": number;
  "HOH_AB": number;
  "HOH_LOC": number;
  "HOH_A": number;
  "HOH_B": number;
  "HOH_C": number;
  "HOH_D": number;
}


export function createHeadergroupModel(): TableModelIf {
  const defaultRowHeight = 34;
  const groupExts = CellgroupFactory.buildGroupExts(headerGroups);
  const columnDefs = CellgroupFactory.buildColumnDefs(groupExts); // TODO fix
  const headerAreaModel = new AreaModelCellGroups("header", headerGroups, columnDefs, defaultRowHeight);

  console.info("headerGroups", headerGroups);
  console.info("columnDefs", columnDefs.map(cd => cd.property));
  //console.info(CellgroupFactory.buildDeepMap(headerGroups));

  const arrs = [
    {
      "GOLD": 146,
      "GOLD_AB": 63,
      "GOLD_A": 31,
      "GOLD_B": 32,
      "GOLD_C": 41,
      "GOLD_D": 42,
      "GOLD_SUM_CD": 83,
      "HOH_SUM": 210,
      "HOH_AB": 103,
      "HOH_LOC": 22,
      "HOH_A": 51,
      "HOH_B": 52,
      "HOH_C": 53,
      "HOH_D": 54
    }
  ];
  const bodyAreaModel = new AreaModelObjectArrayWithColumndefs<FalconIf>("body", arrs, columnDefs, 34);

  return TableFactory.createTableModel({
    headerAreaModel,
    bodyAreaModel,
    columnDefs
  });
}
