import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BmiComponent } from './bmi-app/bmi/bmi.component';
import { GithubReposAppComponent } from './github-repos-app/github-repos-app.component';
import { HomeComponent } from './main-components/home/home.component';
import { MovieAppLayoutComponent } from './movie-app/movie-app-layout/movie-app-layout.component';
import { NotesAppComponent } from './notes-app/notes-app.component';
import { RandomQuotesComponent } from './random-quotes/random-quotes.component';
import { TodoAppComponent } from './todo-app/todo-app/todo-app.component';
import { WeatherAppComponent } from './weather-app/weather-app.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"movie-app",component:MovieAppLayoutComponent,children:[
    {path:"popular-movies",loadChildren:()=> import("./movie-app/movie-app-components/popular-movies/popular-movies.module")
    .then(module=>module.PopularMoviesModule)},
    {path:"favourite-movies",loadChildren :() => import("./movie-app/movie-app-components/favourite-movies/favourite-movies.module")
    .then(module=>module.FavouriteMoviesModule)},
    
  ]},
  {path:"randomquotes-app",component:RandomQuotesComponent},
  {path:"bmicalculator-app",component:BmiComponent},
  {path:"todo-app",component:TodoAppComponent},
  {path:"weather-app",component:WeatherAppComponent},
  {path:"githubrepos-app",component:GithubReposAppComponent},
  {path:"notes-app",component:NotesAppComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
