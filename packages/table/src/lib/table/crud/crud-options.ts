import { CrudOptionsIf } from './crud-options.if';
import { UrlsIf } from './urls.if';
import { CrudAction } from './crud-action';


export class CrudOptions implements CrudOptionsIf {

  urls: UrlsIf = {
    list: {
      url: '',
      method: 'GET'
    }
  };
  singleRowActions: CrudAction[] = [
    new CrudAction('VIEW', 'View', '', '', 'link'),
    new CrudAction('EDIT', 'Edit', '', '', 'link'),
    new CrudAction('CLONE', 'Clone', '', '', 'link'),
    new CrudAction('DELETE', 'Delete', '', '', 'link')
  ];
  tableActions: CrudAction[] = [
    new CrudAction('CREATE', 'Create', '', '', 'button'),
    new CrudAction('DELETE_SELECTED', 'Delete Selected', '', '', 'button')
  ];
  autoAddActionColumn: boolean = true;

  getHeadersInit: (() => HeadersInit) = () => {
    return {};
  };

  getIdByObject = <T extends Record<string, unknown>>(o: T) => {
    const id = 'id';
    if (id in o) {
      return (o as Record<string, any>)['id'];
    }
    return o;
  };

  fetchList = <T>(crudOptions: CrudOptionsIf) => {
    const headers: HeadersInit = crudOptions.getHeadersInit ? crudOptions.getHeadersInit() : {};
    let listUrl = crudOptions.urls.list.url;
    let method = crudOptions.urls.list.method ?? 'GET';

    return fetch(listUrl, {
      headers,
      method
    }).then(response => response.json() as Promise<T[]>);
  };

  fetchItem = <T>(crudOptions: CrudOptionsIf, id:any) => {
    const headers: HeadersInit = crudOptions.getHeadersInit ? crudOptions.getHeadersInit() : {};
    let url = crudOptions.urls.read?.url ?? '';
    url = url.replace('{id}', id);
    let method = crudOptions.urls.read?.method ?? 'GET';

    return fetch(url, {
      headers,
      method
    })
      .then(response => response.json() as Promise<T>);
  };


  deleteItem = (crudOptions: CrudOptionsIf, id:any) => {
    const headers: HeadersInit = crudOptions.getHeadersInit ? crudOptions.getHeadersInit() : {};
    let url = crudOptions.urls.delete?.url ?? '';
    url = url.replace('{id}', id);
    let method = crudOptions.urls.delete?.method ?? 'GET';

    return fetch(url, {
      headers,
      method
    })
      .then(response => response.json() as Promise<any>);
  };

  getId = <T>(item: T) => {
    // @ts-ignore
    return item['id'];
  };
}