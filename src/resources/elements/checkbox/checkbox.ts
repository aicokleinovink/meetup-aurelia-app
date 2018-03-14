import { bindable } from 'aurelia-framework';

export class Checkbox {
  @bindable() checked: boolean;
  @bindable() changed: (value: boolean) => Function;

  constructor() {
    this.checked = false;
  }

  public check(): void {
    this.checked = !this.checked;
    this.changed(this.checked);
  }
}
