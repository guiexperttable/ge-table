import { UrlInfoIf } from './url-info.if';

export class UrlInfo implements UrlInfoIf {
  constructor(public method: 'GET' | 'PUT' | 'POST' | 'DELETE' | 'PATCH', public url: string) {
  }
}