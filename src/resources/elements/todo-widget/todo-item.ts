export class TodoItem {
  public text: string;
  public done: boolean;
  public dateAdded: string;

  constructor(text = '', done = false, dateAdded = new Date().toISOString()) {
    this.text = text;
    this.done = done;
    this.dateAdded = dateAdded;
  }
}
