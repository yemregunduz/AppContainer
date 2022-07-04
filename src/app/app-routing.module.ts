import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BmiComponent } from './components/bmi-app/bmi/bmi.component';
import { CalculatorAppComponent } from './components/calculator-app/calculator-app.component';
import { ChartAppComponent } from './components/chart-app/chart-app.component';
import { GithubReposAppComponent } from './components/github-repos-app/github-repos-app.component';
import { HomeComponent } from './components/main-components/home/home.component';
import { MarkdownEditorAppComponent } from './components/markdown-editor-app/markdown-editor-app.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NotesAppComponent } from './components/notes-app/notes-app.component';
import { PairOfPhotosAppComponent } from './components/pair-of-photos-app/pair-of-photos-app.component';
import { PhotoGalleryAppComponent } from './components/photo-gallery-app/photo-gallery-app.component';
import { RandomQuotesComponent } from './components/random-quotes/random-quotes.component';
import { RecipeDetailComponent } from './components/recipe-finder-app/components/recipe-detail/recipe-detail.component';
import { RecipeFinderAppComponent } from './components/recipe-finder-app/components/recipe-finder-app.component';
import { TenFingersAppComponent } from './components/ten-fingers-app/ten-fingers-app.component';
import { TodoAppComponent } from './components/todo-app/todo-app/todo-app.component';
import { WeatherAppComponent } from './components/weather-app/weather-app.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"recipe-app",component:RecipeFinderAppComponent},
  {path:"recipe-app/recipeDetails/:mealId",component:RecipeDetailComponent},
  {path:"calculator-app",component:CalculatorAppComponent},
  {path:"randomquotes-app",component:RandomQuotesComponent},
  {path:"bmicalculator-app",component:BmiComponent},
  {path:"todo-app",component:TodoAppComponent},
  {path:"weather-app",component:WeatherAppComponent},
  {path:"githubrepos-app",component:GithubReposAppComponent},
  {path:"notes-app",component:NotesAppComponent},
  {path:"chart-app",component:ChartAppComponent},
  {path:"markdowneditor-app",component:MarkdownEditorAppComponent},
  {path:"tenfingers-app",component:TenFingersAppComponent},
  {path:"pair-of-photos-app",component: PairOfPhotosAppComponent},
  {path:"love-app",component:PhotoGalleryAppComponent},
  {path: '**', component:NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
