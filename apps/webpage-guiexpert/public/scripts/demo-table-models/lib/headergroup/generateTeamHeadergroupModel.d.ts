import { CellGroupIf, TableModelIf } from '../../../../table/src';
export interface HeaderTeamIf {
    "team_a": number;
    "sum_a": number;
    "peter": number;
    "paul": number;
}
export declare const teamHeaderGroups: CellGroupIf[];
export declare function createTeamHeadergroupModel(cellGroups?: CellGroupIf[]): TableModelIf;
