import { UrlInfoIf } from './url-info.if';

export interface UrlsIf {
  list: UrlInfoIf;

  create?: UrlInfoIf;
  read?: UrlInfoIf;
  update?: UrlInfoIf;
  delete?: UrlInfoIf;
}