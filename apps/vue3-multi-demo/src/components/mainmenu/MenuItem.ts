
export class MenuItem {
  constructor(
    public name: string,
    public path: string,
    public icon: string = 'home',
    public caption: string = '',
  ) {
  }
}