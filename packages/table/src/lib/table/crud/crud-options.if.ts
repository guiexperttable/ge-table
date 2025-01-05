import { UrlsIf } from './urls.if';
import { CrudAction } from './crud-action';


export interface CrudOptionsIf {

  getHeadersInit?: () => HeadersInit;

  urls: UrlsIf;
  singleRowActions: CrudAction[];
  tableActions: CrudAction[];

  fetchList: <T>(crudOptions: CrudOptionsIf) => Promise<T[]>;
  fetchItem: <T>(crudOptions: CrudOptionsIf, id: any) => Promise<T>;
  updateItem: (crudOptions: CrudOptionsIf, id: any, item:any) => Promise<any>;
  deleteItem: (crudOptions: CrudOptionsIf, id: any) => Promise<any>;

  getIdKey: () => string;
  getIdByObject: <T extends Record<string, unknown>>(o: T) => any;
  getEmptyItem: () => any,
  calcFixedRightColumnCount: (columnCount: number) => number,

  autoAddActionColumn?: boolean;
  isActionDeleteVisible?: boolean;
  isActionDeleteEnabled?: boolean;


}



