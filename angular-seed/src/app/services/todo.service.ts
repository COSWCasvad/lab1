import { Injectable } from '@angular/core';
import { APIService } from '../common/api.service';
import { Todo } from '../models/todo';


@Injectable()
export class TodoService extends APIService{

    private resourceUrl = 'api/todo';
    private todos: Todo[] = [
      new Todo('todo 1'),
      new Todo('todo 2', 1, true),
      new Todo('todo 3')
    ];
    private apiS: APIService;

    constructor() {
    }
    
    list(): Observable<Todo[]> {
    return this.get(this.resourceUrl);
  }

    create(description: string, priority: Number = 1, completed: boolean = false):void{
        this.todos.push(new Todo(description,priority,completed));
        apiS.post(resourceUrl,new Todo(description,priority,completed));
        
    }


}

