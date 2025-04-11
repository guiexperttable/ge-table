import { PriorityType, TodoIf } from './todo.if';

export class Todo implements TodoIf {

  constructor(
    public checked: boolean,
    public id: number,
    public title: string,
    public description: string,
    public flagId: number,
    public dueDate: Date,
    public priority: PriorityType
  ) {
  }

}
