import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { TodoService } from './services/todo.service';

@Component({
    selector: 'todo-app',
    templateUrl: 'client/app.component.html',
    providers: [TodoService]
})
export class AppComponent implements OnInit {
    todos = [];

    constructor(private _todoService: TodoService) {}

    ngOnInit() {
        this._todoService.getListOfTodos()
            .subscribe((response: Response) => {
                this.todos = this.todos.concat(response);
            },
             error => console.log(error));
    }

    private addTodo(todotext) {
        this._todoService.addTodo(todotext.value)
            .subscribe((response: Response) => {
                this.todos.push(response);
                todotext.value = '';
            }, 
            error => console.log(error),
            () => "TODO Posted sucessfully");
    }

    private onDelete(todo) {
        this._todoService.deleteTodo(todo)
            .subscribe((response:Response) => {
                this.todos = [];
                this.ngOnInit();
            },
            error => console.log(error));
    }
}
