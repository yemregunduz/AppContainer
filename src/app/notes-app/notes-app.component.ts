import { Component, OnInit } from '@angular/core';
import { NoteModel } from './models/noteModel';

@Component({
  selector: 'app-notes-app',
  templateUrl: './notes-app.component.html',
  styleUrls: ['./notes-app.component.css']
})
export class NotesAppComponent implements OnInit {

  constructor() { }
  colors=["#b6e1e0","#cbf078","#ff9c6d","#dcb5ff","#DDDD"]
  notes:NoteModel[]=[]
  selectedColor:string='white';
  noteContent:string=""
  filterText:string=""
  ngOnInit(): void {
    this.getNotesFromStorage();
  }
  changeSelectedColor(color:string){
    this.selectedColor = color;
    console.log(this.selectedColor)
  }
  getNotesFromStorage(){
    let notesFromStorage = localStorage.getItem("notes");
    if(notesFromStorage)
    this.notes = JSON.parse(notesFromStorage || "");
  }
  createNote(){
    if(this.noteContent.length>0){
      this.notes.push({color:this.selectedColor,content:this.noteContent})
    }
    localStorage.setItem("notes",JSON.stringify(this.notes))
    this.noteContent=""
    this.selectedColor="white";
  }
  setItemToStorage(){
    localStorage.setItem("notes",JSON.stringify(this.notes))
  }
  deleteNote(index:number){
    this.notes.splice(index,1)
    this.setItemToStorage();
    if(this.notes.length==0){
      localStorage.removeItem("notes")
    }
  }


}
