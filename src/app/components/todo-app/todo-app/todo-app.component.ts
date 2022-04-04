import { Component, HostListener, OnInit } from '@angular/core';
import { Todo } from './models/todoModel';
import {
  trigger,state,style,animate,transition
} from '@angular/animations'

@Component({
  selector: 'app-todo-app',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.css'],
  animations:[

  ]
})
export class TodoAppComponent implements OnInit {

  // @HostListener('window:keydown.enter') enterEvent(){
  //   this.addToDo();
  // }
  todos:Todo[]=[];
  inputTodo:string=""
  isDone:boolean = false
  constructor() { }

  ngOnInit(): void {
    this. getTodosFromStorage()
    this.checkAllTodosStatus()
  }

  addToDo(){
    if(this.inputTodo.length>0){
      this.todos.push({
        content: this.inputTodo,
        isDone :false
      })
      this.setItemToStorage();
      this.checkAllTodosStatus()
      this.inputTodo=""
    }
    
  }
  getTodosFromStorage(){
    let todosFromStorage = localStorage.getItem("todos")
    if(todosFromStorage)
    this.todos = JSON.parse(todosFromStorage || '')
  }
  deleteTodo(index:number){
    this.todos.splice(index,1)
    this.setItemToStorage();
    this.checkAllTodosStatus()
    if(this.todos.length==0){
      localStorage.removeItem("todos")
    }
  }
  changeStatusTodoItem(todo:Todo){
    todo.isDone = !todo.isDone;
    this.setItemToStorage();
    this.checkAllTodosStatus()

  }
  setItemToStorage(){
    localStorage.setItem("todos",JSON.stringify(this.todos))
  }
  changeStatusAllTodos(){
    this.isDone=!this.isDone
    this.todos.filter(t=>t.isDone =this.isDone)
    this.setItemToStorage()
  }
  checkAllTodosStatus(){
    if(this.todos.find(t=>t.isDone==false)==null){
      this.isDone=true
    }
    else{
      this.isDone=false
    }
  }
}
