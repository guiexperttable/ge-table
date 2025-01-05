export class CrudObjectEdit<T extends Record<string, any>> {

  private object: T;

  constructor(
    private idKey: keyof T,
    obj: T,
    public dialogTitle: string = 'Edit Item'
  ) {
    this.object = { ...obj };
  }

  public openDialog(onSave: (updatedObject: T) => void): void {
    const dialog: HTMLDialogElement = document.createElement('dialog');
    dialog.classList.add('ge-table-crud-object-edit');
    dialog.innerHTML = `
      <div class="ge-table-dialog-header">${this.dialogTitle}</div>
      <div class="ge-table-dialog-content">
        ${this.generateForm(this.object)}
      </div>
      <div class="ge-table-dialog-footer">
        <button class="ge-table-dialog-footer-save-button primary">Save</button>
        <button class="ge-table-dialog-footer-cancel-button">Cancel</button>
      </div>
    `;
    document.body.appendChild(dialog);

    const saveButton = dialog.querySelector('.ge-table-dialog-footer-save-button') as HTMLButtonElement;
    const cancelButton = dialog.querySelector('.ge-table-dialog-footer-cancel-button') as HTMLButtonElement;

    saveButton.addEventListener('click', () => {
      const form = dialog.querySelector('form') as HTMLFormElement;
      const formData = new FormData(form);
      // @ts-ignore
      for (const [key, value] of formData) {
        this.setNestedValue(this.object, key, value);
      }
      onSave(this.object);
      dialog.close();
      dialog.remove();
    });

    cancelButton.addEventListener('click', () => {
      dialog.close();
      dialog.remove();
    });

    dialog.showModal();
  }

  private generateForm(obj: any, parentKey: string = ''): string {
    const fields: string[] = [];
    for (const property in obj) {
      if (!obj.hasOwnProperty(property) || this.idKey===property) continue;

      const combinedKey = this.getCombinedKey(parentKey, property);
      const label = this.getLabel(combinedKey);
      const value = obj[property];

      if (typeof value === 'object' && value !== null) {
        // Recursively generate form fields for nested objects
        fields.push(this.generateForm(value, combinedKey));
      } else {
        // Determine input field type based on the value type
        let inputField: string;
        if (typeof value === 'string') {
          inputField = `<input type="text" id="${combinedKey}" name="${combinedKey}" value="${value}" />`;
        } else if (typeof value === 'number') {
          inputField = `<input type="number" id="${combinedKey}" name="${combinedKey}" value="${value}" />`;
        } else if (typeof value === 'boolean') {
          inputField = `<input type="checkbox" id="${combinedKey}" name="${combinedKey}" ${value ? 'checked' : ''} />`;
        } else {
          inputField = `<input type="text" id="${combinedKey}" name="${combinedKey}" value="${value}" />`;
        }

        fields.push(`
        <div class="form-field">
          <label for="${combinedKey}">${label}</label>
          ${inputField}
        </div>
      `);
      }
    }
    return `<form>${fields.join('')}</form>`;
  }

/*
  private generateForm(obj: any, parentKey: string = ''): string {
    const fields: string[] = [];
    for (const property in obj) {
      if (!obj.hasOwnProperty(property)) continue;
      const combinedKey = this.getCombinedKey(parentKey, property);
      const label = this.getLabel(combinedKey);
      const value = obj[property];
      if (typeof value === 'object' && value !== null) {
        fields.push(this.generateForm(value, combinedKey));
      } else {
        fields.push(`
          <div class="form-field">
            <label for="${combinedKey}">${label}</label>
            <input type="text" id="${combinedKey}" name="${combinedKey}" value="${value}" />
          </div>
        `);
      }
    }
    return `<form>${fields.join('')}</form>`;
  }
*/
  private setNestedValue(obj: any, path: string, value: any): void {
    const keys = path.split('.');
    let current = obj;
    for (let i = 0; i < keys.length - 1; i++) {
      if (!current[keys[i]]) current[keys[i]] = {};
      current = current[keys[i]];
    }
    current[keys[keys.length - 1]] = value;
  }

  private getCombinedKey(parentKey: string, property: string): string {
    return parentKey ? `${parentKey}.${property}` : property;
  }

  private getLabel(combinedKey: string): string {
    return combinedKey.replace(/\./g, ' ');
  }
}