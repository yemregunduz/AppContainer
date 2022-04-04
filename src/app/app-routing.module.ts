import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BmiComponent } from './components/bmi-app/bmi/bmi.component';
import { ChartAppComponent } from './components/chart-app/chart-app.component';
import { GithubReposAppComponent } from './components/github-repos-app/github-repos-app.component';
import { HomeComponent } from './components/main-components/home/home.component';
import { MarkdownEditorAppComponent } from './components/markdown-editor-app/markdown-editor-app.component';
import { MovieAppLayoutComponent } from './components/movie-app/movie-app-layout/movie-app-layout.component';
import { NotesAppComponent } from './components/notes-app/notes-app.component';
import { RandomQuotesComponent } from './components/random-quotes/random-quotes.component';
import { TenFingersAppComponent } from './components/ten-fingers-app/ten-fingers-app.component';
import { TodoAppComponent } from './components/todo-app/todo-app/todo-app.component';
import { WeatherAppComponent } from './components/weather-app/weather-app.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"movie-app",component:MovieAppLayoutComponent,children:[
    {path:"popular-movies",loadChildren:()=> import("./components/movie-app/movie-app-components/popular-movies/popular-movies.module")
    .then(module=>module.PopularMoviesModule)},
    {path:"favourite-movies",loadChildren :() => import("./components/movie-app/movie-app-components/favourite-movies/favourite-movies.module")
    .then(module=>module.FavouriteMoviesModule)},
    
  ]},
  {path:"randomquotes-app",component:RandomQuotesComponent},
  {path:"bmicalculator-app",component:BmiComponent},
  {path:"todo-app",component:TodoAppComponent},
  {path:"weather-app",component:WeatherAppComponent},
  {path:"githubrepos-app",component:GithubReposAppComponent},
  {path:"notes-app",component:NotesAppComponent},
  {path:"chart-app",component:ChartAppComponent},
  {path:"markdowneditor-app",component:MarkdownEditorAppComponent},
  {path:"tenfingers-app",component:TenFingersAppComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
