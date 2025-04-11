import './app.element.css';
import {
  CheckboxBooleanPropertyCellRenderer,
  ColumnDef,
  ColumnDefIf,
  EventAdapter,
  SimpleDomService,
  TableOptions,
  TableOptionsIf,
  TableScope,
  px50, px200, TableFactory, ValueLabel, SelectCellRenderer, DateToLocaleDateCellRenderer, editInputPipeForNumber
} from '@guiexpert/table';
import { Todo } from './todo';
import { TodoIf } from './todo.if';

export class AppElement extends HTMLElement {


  connectedCallback() {

    this.innerHTML = `<div
        class="container-div"
        style="width:1100px;height:400px;background:transparent;margin:0;padding:0;"
        ></div>`;

    const ele = document.querySelector('.container-div') as HTMLDivElement;


    const tableOptions: TableOptionsIf = {
      ...new TableOptions(),
      hoverColumnVisible: false,
      defaultRowHeights: {
        header: 34,
        body: 34,
        footer: 0
      }
    };

    const rows: TodoIf[] = [
      new Todo(false, 1, 'Dentist Appointment', ':-(', 12, new Date(), 'medium'),
      new Todo(true, 2, 'Grocery Shopping', 'Buy milk, eggs, and bread', 24, new Date(), 'high'),
      new Todo(false, 3, 'Team Meeting', 'Discuss project progress', 36, new Date(), 'low'),
      new Todo(true, 4, 'Workout Session', 'Leg day at the gym', 48, new Date(), 'medium'),
      new Todo(false, 5, 'Call Mom', 'Weekly check-in call :)', 60, new Date(), 'high'),
      new Todo(false, 6, 'Pay Bills', 'Electricity and internet bills', 72, new Date(), 'urgent'),
      new Todo(true, 7, 'Doctor Checkup', 'Annual health checkup', 84, new Date(), 'medium'),
      new Todo(false, 8, 'Read a Book', 'Finish reading the current novel', 96, new Date(), 'low'),
      new Todo(true, 9, 'Office Presentation', 'Prepare slides for client meeting', 108, new Date(), 'urgent'),
      new Todo(false, 10, 'Plan Vacation', 'Research and book tickets', 120, new Date(), 'medium')
    ];


    const columnDefs: ColumnDefIf[] = [
      ColumnDef.create({
        property: 'checked',
        headerLabel: ' ',
        width: px50,
        bodyRenderer: new CheckboxBooleanPropertyCellRenderer<TodoIf>('checked')
      }),
      new ColumnDef('id', 'ID', px50),
      ColumnDef.create({ property: 'title', headerLabel: 'Title', width: px200, editable: () => true }),
      ColumnDef.create({ property: 'description', headerLabel: 'Description', width: px200, editable: () => true }),
      ColumnDef.create({
        property: 'flagId',
        headerLabel: 'Flag',
        width: px200,
        editable: () => true,
        editInputPipe: editInputPipeForNumber
      }),
      ColumnDef.create({
        property: 'dueDate',
        headerLabel: 'Due Date',
        width: px200,
        editable: () => true,
        bodyRenderer: new DateToLocaleDateCellRenderer()
      }),
      ColumnDef.create({
        property: 'priority', headerLabel: 'Priority', width: px200, editable: () => true,
        getEditRenderer: (_rowIndex: number, _columnIndex: number) => new SelectCellRenderer([
          new ValueLabel('low', 'Low'),
          new ValueLabel('medium', 'Medium'),
          new ValueLabel('high', 'High'),
          new ValueLabel('urgent', 'Urgent')
        ])
      })
    ];

    const tableModel = TableFactory.createTableModel({
      rows,
      columnDefs: columnDefs,
      tableOptions,
      fixedLeftColumnCount: 1
    });


    const tableScope = new TableScope(
      ele, tableModel, new SimpleDomService(), tableOptions, new EventAdapter()
    );
    tableScope.firstInit();
  }
}

customElements.define('ts-todo-demo-root', AppElement);
