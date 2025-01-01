
import { UrlsIf } from './urls.if';
import { CrudAction } from './crud-action';


export interface CrudOptionsIf {

  getHeadersInit?: ()=>HeadersInit;

  urls: UrlsIf;
  singleRowActions : CrudAction[];
  tableActions : CrudAction[];

  fetchList: <T>(crudOptions: CrudOptionsIf) => Promise<T[]>;
  fetchItem: <T>(crudOptions: CrudOptionsIf, id:any) => Promise<T>;
  deleteItem: (crudOptions: CrudOptionsIf, id:any) => Promise<any>;

  getIdByObject: <T extends Record<string, unknown>>(o: T) => any;

  autoAddActionColumn?: boolean;
  isActionDeleteVisible?: boolean;
  isActionDeleteEnabled?: boolean;

  getId: <T>(item:T)=>any;
}



