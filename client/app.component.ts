import { Component, OnInit } from '@angular/core';
import { HTTP_PROVIDERS, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { TodoService } from './services/todo.service';

@Component({
    selector: 'todo-app',
    templateUrl: 'client/app.component.html',
    providers: [TodoService, HTTP_PROVIDERS]
})
export class AppComponent implements OnInit {
    pageTitle: string = 'My ToDo List';

    constructor(private _todoService: TodoService) {}

    ngOnInit() {
        this._todoService.getListOfTodos()
            .subscribe((response: Response) => {
                console.log(response);
                this.pageTitle = JSON.stringify(response);
            },
             error => console.log(error),
             () => console.log("Finished obtaining list of todos") );
    }

    private addTodo(todotext) {
        console.log("TODO: " + todotext.value);
        todotext.value = '';
    }
}
