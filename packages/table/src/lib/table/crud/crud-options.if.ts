
import { UrlsIf } from './urls.if';
import { CrudAction } from './crud-action';


export interface CrudOptionsIf {

  getHeadersInit?: ()=>HeadersInit;

  urls: UrlsIf;
  singleRowActions : CrudAction[];
  tableActions : CrudAction[];

  fetchList: <T>(crudOptions: CrudOptionsIf) => Promise<T[]>;

  getIdByObject: <T extends Record<string, unknown>>(o: T) => any;

  autoAddActionColumn?: boolean;
  isActionDeleteVisible?: boolean;
  isActionDeleteEnabled?: boolean;
}



