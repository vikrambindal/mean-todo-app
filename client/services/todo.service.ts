import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class TodoService {

    constructor(private _http: Http) {}

    public getListOfTodos() : Observable<Response> {
        return this._http.get("http://localhost:8000/api/v1/")
                    .map((response: Response) => response.json())
                    .catch(this.handleError);
    }

    public addTodo(todotext:String) : Observable<Response> {
        return this._http.post("http://localhost:8000/api/v1/todo", {"todoitem": todotext})
                    .map((response:Response) => response.json())
                    .catch(this.handleError);
    }

    public deleteTodo(todo) : Observable<Response> {
        return this._http.delete("http://localhost:8000/api/v1/todo/" + todo._id)
                    .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.log("ERROR: " + error);
        return Observable.throw(error);
    }
}