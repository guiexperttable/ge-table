
export class CrudAction {

  constructor(
    public action: string,
    public label: string,
    public icon: string = '',
    public elementClass : string = '',
    public elementType: 'button'|'link' = 'button',
    public enabled: boolean = true
  ) {
  }

}