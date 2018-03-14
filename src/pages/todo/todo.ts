import { autoinject } from 'aurelia-framework';
import { TodoService } from '../../services/todo/todo.service';
import { Todo } from '../../services/todo/todo.model';

@autoinject()
export class TodoPage {
  public todos: Todo[];
  public error: Error;

  constructor(private todoService: TodoService) {
    this.todos = [];
    this.error = null;
  }

  public attached(): void {
    this.todoService.getTodos()
      .then((todos: Todo[]) => this.todos = todos)
      .catch((error: Error) => {
        this.error = error;
        console.error(error);
      });
  }

  public saveTodo(todo: Todo): void {
    this.todoService.saveTodo(todo)
      .then((newTodo: Todo) => this.todos = [newTodo, ...this.todos])
      .catch(console.error);
  }

  public updateTodo(todo: Todo): void {
    this.todoService.updateTodo(todo)
      .then((updatedTodo: Todo) => {
        const todoIndex = this.todos.findIndex(item => item.id === todo.id);
        if (todoIndex > -1) {
          this.todos[todoIndex] = updatedTodo;
        } else {
          this.todos.push(updatedTodo);
        }
      })
      .catch(console.error);
  }
}
