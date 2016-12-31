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
    todos = [];

    constructor(private _todoService: TodoService) {
        this.todos = [];
    }

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
        
        this._todoService.addTodo(todotext.value)
                .subscribe((response: Response) => {
                    console.log(response.status);
                    this.todos.push(todotext.value);
                    todotext.value = '';
                }, 
                error => console.log(error),
                () => "TODO Posted sucessfully");
    }
}
