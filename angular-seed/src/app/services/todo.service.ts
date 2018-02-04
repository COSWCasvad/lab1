import { Injectable } from '@angular/core';
import { APIService } from '../common/api.service';
import { Todo } from '../models/todo';

import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { AuthService } from '../common/auth.service';
import { AppConfiguration } from '../common/config/app-configuration.service';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class TodoService extends APIService{

    private resourceUrl: string = 'api/todo';
    private todos: Todo[] = [
      new Todo('todo 1'),
      new Todo('todo 2', 1, true),
      new Todo('todo 3')
    ];
    private apiS: APIService;

    constructor(
        public config: AppConfiguration,
        public authService: AuthService,
        public http: Http
    ) {
        super(config,authService,http);
    }

    list(): Observable<Todo[]> {
    return this.get(this.resourceUrl);
  }

    create(description: string, priority: Number = 1, completed: boolean = false):void{
        this.todos.push(new Todo(description,priority,completed));
        this.apiS.post(this.resourceUrl,new Todo(description,priority,completed));

    }


}

