System.register(['@angular/core', './services/todo.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, todo_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (todo_service_1_1) {
                todo_service_1 = todo_service_1_1;
            }],
        execute: function() {
            let AppComponent = class AppComponent {
                constructor(_todoService) {
                    this._todoService = _todoService;
                    this.todos = [];
                }
                ngOnInit() {
                    this._todoService.getListOfTodos()
                        .subscribe((response) => {
                        this.todos = this.todos.concat(response);
                    }, error => console.log(error));
                }
                addTodo(todotext) {
                    this._todoService.addTodo(todotext.value)
                        .subscribe((response) => {
                        this.todos.push(todotext.value);
                        todotext.value = '';
                    }, error => console.log(error), () => "TODO Posted sucessfully");
                }
            };
            AppComponent = __decorate([
                core_1.Component({
                    selector: 'todo-app',
                    templateUrl: 'client/app.component.html',
                    providers: [todo_service_1.TodoService]
                }), 
                __metadata('design:paramtypes', [todo_service_1.TodoService])
            ], AppComponent);
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map