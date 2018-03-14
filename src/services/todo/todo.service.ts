import { autoinject } from 'aurelia-framework';
import { HttpClient, json } from 'aurelia-fetch-client';
import { Todo } from './todo.model';

const endpoints = {
  todos: '/todos'
};

@autoinject()
export class TodoService {
  constructor(private http: HttpClient) {
  }

  public getTodos(): Promise<any> {
    return this.http.fetch(endpoints.todos).then((response: Response) => response.json());
  }

  public saveTodo(todo: Todo): Promise<any> {
    return this.http.fetch(endpoints.todos, {
      method: 'POST',
      body: json(todo)
    }).then((response: Response) => response.json());
  }

  public updateTodo(todo: Todo): Promise<any> {
    return this.http.fetch(`${endpoints.todos}/${todo.id}`, {
      method: 'PUT',
      body: json(todo)
    }).then((response: Response) => response.json());
  }
}
