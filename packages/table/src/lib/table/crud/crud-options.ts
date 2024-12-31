import { CrudOptionsIf } from './crud-options.if';
import { UrlsIf } from './urls.if';
import { CrudAction } from './crud-action';


export class CrudOptions implements CrudOptionsIf {

  getHeadersInit: (()=>HeadersInit)  = ()=> {
    return {};
  };

  urls: UrlsIf = {
    list: {
      url: '',
      method: 'GET',
    },
  };

  singleRowActions : CrudAction[] = [
    new CrudAction('EDIT', 'Edit ', '', '', 'button'),
    new CrudAction('CLONE', 'Clone', '', '', 'button', false),
    new CrudAction('DELETE', 'Delete', '', '', 'link'),
  ];
  tableActions : CrudAction[] = [
    new CrudAction('CREATE', 'Create', '', '', 'button'),
    new CrudAction('DELETE_SELECTED', 'Delete Selected', '', '', 'button'),
  ];

  getIdByObject = <T extends Record<string, unknown>>(o: T) => {
    const id = 'id';
    if (id in o) {
      return (o as Record<string, any>)['id'];
    }
    return o;
  };

  autoAddActionColumn:boolean = true;

  fetchList = <T>(crudOptions: CrudOptionsIf) => {
    const headers: HeadersInit = crudOptions.getHeadersInit? crudOptions.getHeadersInit() : {};
    let listUrl = crudOptions.urls.list.url;
    let method = crudOptions.urls.list.method ?? 'GET';

    return fetch(listUrl, {
      headers,
      method
    }).then(response => response.json() as Promise<T[]>);
  }

}