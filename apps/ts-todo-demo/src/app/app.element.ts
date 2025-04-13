import './app.element.css';
import {
  AreaModelObjectArray,
  CheckboxBooleanPropertyCellRenderer,
  ColumnDef,
  ColumnDefIf,
  DateToLocaleDateCellRenderer,
  editInputPipeForNumber,
  EventAdapter,
  EventListenerIf,
  px200,
  px50,
  SelectCellRenderer,
  SimpleDomService,
  TableFactory,
  TableOptions,
  TableOptionsIf,
  TableScope,
  ValueLabel
} from '@guiexpert/table';
import { Todo } from './todo';
import { TodoIf } from './todo.if';

export class AppElement extends HTMLElement {


  connectedCallback() {

    this.innerHTML = `
      <div class="button-div">
        <button class="add-btn">Add</button>
        <button class="delete-btn">Delete</button>
        <label class="rowcount-label"></label>
      </div>
      <div class="container-div"></div>`;

    const ele = document.querySelector('.container-div') as HTMLDivElement;
    const deleteBtnEle = document.querySelector('.delete-btn') as HTMLDivElement;
    const addBtnEle = document.querySelector('.add-btn') as HTMLDivElement;
    const rowCountEle = document.querySelector('.rowcount-label') as HTMLDivElement;

    deleteBtnEle.addEventListener('click', (_e) => {
      if (confirm('Are you sure you want to delete?')) {
        const rows = bodyModel.getAllRows();
        // Get array of checked rows:
        const checkedRows = rows.filter(row => row.checked);
        // Remove checked rows from rows:
        const rows2 = rows.filter(row => !checkedRows.includes(row));
        // update the model
        bodyModel.setRows(rows2);
        // trigger repaint:
        tableScope.repaintHard();
        syncRowCountLabel();
      }
    });

    addBtnEle.addEventListener('click', (_e) => {
      const rows = bodyModel.getAllRows();
      const id = 1 + rows.reduce((id, todo)=> Math.max(id, todo.id), 0);
      const todo = new Todo(false, id, 'Title ' + id, 'Lorem ipsum', 0, new Date(), 'medium');

      bodyModel.setRows([todo, ...rows]);
      tableScope.repaintHard();
      syncRowCountLabel();
    });


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
    columnDefs.forEach(cd => {
      cd.sortable = () => true;
      cd.sortIconVisible = () => true;
    });


    const tableOptions: TableOptionsIf = {
      ...new TableOptions(),
      //getSelectionModel: ()=> multiRowsSelectionModel, // don't use 'new instance' here! It must be a fixed reference!
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
    const tableModel = TableFactory.createTableModel({
      rows,
      columnDefs,
      tableOptions
    });


    const eventListener: EventListenerIf = new EventAdapter();
    eventListener.onCheckboxChanged = (_sm: any[]) => {
      syncDeleteBtnLabel();
    };


    //const multiRowsSelectionModel = new MultiRowsSelectionModel(tableModel.getBodyModel() as AreaModelObjectArray<TodoIf>);


    const tableScope = new TableScope(
      ele,
      tableModel,
      new SimpleDomService(),
      tableOptions,
      eventListener
    );
    tableScope.firstInit();
    const bodyModel: AreaModelObjectArray<TodoIf> = tableScope.getApi().getTableModel().getBodyModel() as AreaModelObjectArray<TodoIf>;

    syncDeleteBtnLabel();
    syncRowCountLabel();

    function syncDeleteBtnLabel() {
      const checkedCount = bodyModel.getAllRows().filter(row => row.checked).length;
      deleteBtnEle.innerText = `Delete (${checkedCount})`;
    }
    function syncRowCountLabel() {
      const count = bodyModel.getAllRows().length;
      rowCountEle.innerText = `Rows: ${count}`;
    }

  }


}

customElements.define('ts-todo-demo-root', AppElement);
