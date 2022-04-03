import { Component, OnInit } from '@angular/core';
import { AppModel } from 'src/app/models/appModel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  apps:AppModel[]= [
    {name:"Ten Fingers App",primaryColor:'white',secondaryColor:" #bb7171",description:"Improve your typing speed.", srcImage:"./assets/images/tenFingers-app.png",routerLink:"tenfingers-app"},
    {name:"Todo App",primaryColor:'#ff6793',secondaryColor:"rgba(0, 0, 0, .8)",description:"A basic todo app",srcImage:"./assets/images/todo-app.png",routerLink:"todo-app"},
    {name:"Weather App",primaryColor:'white',secondaryColor:"#4B515D",description:"You can get weather information from this application.", srcImage:"./assets/images/weather-app.png",routerLink:"weather-app"},
    {name:"Chart App",primaryColor:'#79c2d0',secondaryColor:"#393e46",description:"You can create dynamic charts with the column names in the excel you have uploaded.", srcImage:"./assets/images/chart-app.png",routerLink:"chart-app"},
    {name:"BMI Calculator",primaryColor:'#a9c25d',secondaryColor:"#AAAAAA",description:"You can calculate your body mass index.", srcImage:"./assets/images/bmiCalculator-app.png",routerLink:"bmicalculator-app"},
    {name:"Notes App",primaryColor:'white',secondaryColor:"#f4aeba",description:"You can save and delete notes.", srcImage:"./assets/images/notes-app.png",routerLink:"notes-app"},
    {name:"Random Quotes",primaryColor:'#8d9db6',secondaryColor:"#b6bcc2cb",description:"You can generate a random quote for sharing", srcImage:"./assets/images/randomQuotes-app.png",routerLink:"randomquotes-app"},
    {name:"Markdown Editor App",primaryColor:'#347474',secondaryColor:" #ffcbcb",description:"A basic markdown previewer and downloader", srcImage:"./assets/images/markdownEditor-app.png",routerLink:"markdowneditor-app"},
    {name:"GitRepos App",primaryColor:'#ff5000',secondaryColor:"#1379bb",description:"You can list users' public repositories on github.", srcImage:"./assets/images/github-repos-app.png",routerLink:"githubrepos-app"},

  ]
  ngOnInit(): void {
  }

} 
