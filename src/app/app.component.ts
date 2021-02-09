import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';

  public todos: any;
  public done: boolean;
  public newTodoObj:any;
  public newToDo: string;
  
  constructor(){
    this.todos=[];
    this.newToDo="";
  }

  clearAll(){
    this.todos=[];
  }

  addMore(){
    this.newTodoObj = {
      item: this.newToDo,
      done: false
    };
    this.todos.push(this.newTodoObj);
  }
}
