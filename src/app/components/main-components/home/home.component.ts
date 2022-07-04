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
    {name:"Recipe Finder App",primaryColor:'#ddd',secondaryColor:"#1f6781",description:"A simple application where you can access the recipes of various regions", srcImage:"./assets/images/recipe-app.png",routerLink:"recipe-app"},
    {name:"Todo App",primaryColor:'#ff6793',secondaryColor:"rgba(0, 0, 0, .8)",description:"A basic todo app",srcImage:"./assets/images/todo-app.png",routerLink:"todo-app"},
    {name:"Weather App",primaryColor:'white',secondaryColor:"#4B515D",description:"You can get weather information from this application.", srcImage:"./assets/images/weather-app.png",routerLink:"weather-app"},
    {name:"Pair Of Photos",primaryColor:'#ddd',secondaryColor:"crimson",description:"A simple photo matching game. Have fun!", srcImage:"./assets/images/pair-of-photos-app.png",routerLink:"pair-of-photos-app"},
    {name:"Chart App",primaryColor:'#79c2d0',secondaryColor:"#393e46",description:"You can create dynamic charts with the column names in the excel you have uploaded.", srcImage:"./assets/images/chart-app.png",routerLink:"chart-app"},
    {name:"BMI Calculator",primaryColor:'#a9c25d',secondaryColor:"#AAAAAA",description:"You can calculate your body mass index.", srcImage:"./assets/images/bmiCalculator-app.png",routerLink:"bmicalculator-app"},
    {name:"YEG Calculator",primaryColor:'white',secondaryColor:"#92a8d1",description:"Basic calculator app. (will continue to be developed)", srcImage:"./assets/images/yeg-calculator-app.png",routerLink:"calculator-app"},
    {name:"Notes App",primaryColor:'white',secondaryColor:"#f4aeba",description:"You can save and delete notes.", srcImage:"./assets/images/notes-app.png",routerLink:"notes-app"},
    {name:"Random Quotes",primaryColor:'#8d9db6',secondaryColor:"#b6bcc2cb",description:"You can generate a random quote for sharing", srcImage:"./assets/images/randomQuotes-app.png",routerLink:"randomquotes-app"},
    {name:"Markdown Editor App",primaryColor:'  #ffcbcb',secondaryColor:"#347474 ",description:"A basic markdown previewer and downloader", srcImage:"./assets/images/markdownEditor-app.png",routerLink:"markdowneditor-app"},
    {name:"GitRepos App",primaryColor:'#ff5000',secondaryColor:"#1379bb",description:"You can list users' public repositories on github.", srcImage:"./assets/images/github-repos-app.png",routerLink:"githubrepos-app"},
    {name:"Love App",primaryColor:'white',secondaryColor:"violet",description:"A simple photo album application that I made to celebrate our anniversary with my girlfriend.", srcImage:"./assets/images/photoGallery-app.png",routerLink:"love-app"},
  
  ]
  ngOnInit(): void {
  }

} 
