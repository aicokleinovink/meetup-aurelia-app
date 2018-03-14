import { bindable, computedFrom } from 'aurelia-framework';
import { Todo } from '../../../services/todo/todo.model';
import { TodoItem } from './todo-item';

export class TodoWidget {
  @bindable() todos: Todo[];
  @bindable() todoAdded: (todo: Todo) => Function;
  @bindable() todoUpdated: (todo: Todo) => Function;

  public newTodo: Todo;

  @computedFrom('newTodo.text')
  public get todoItemIsValid(): boolean {
    return this.newTodo.text && this.newTodo.text.length > 0;
  }

  constructor() {
    this.todos = [];
    this.newTodo = new TodoItem();
  }

  public submitTodo(): void {
    if (!this.todoItemIsValid) {
      return;
    }
    this.todoAdded(this.newTodo);
    this.newTodo = new TodoItem();
  }

  public todoItemChanged(todo: Todo, isDone: boolean): void {
    todo.done = isDone;
    this.todoUpdated(todo);
  }
}
