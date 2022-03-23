import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BmiComponent } from './bmi-app/bmi/bmi.component';
import { HomeComponent } from './main-components/home/home.component';
import { RandomQuotesComponent } from './random-quotes/random-quotes.component';
import { TodoAppComponent } from './todo-app/todo-app/todo-app.component';
import { WeatherAppComponent } from './weather-app/weather-app.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"randomquotes-app",component:RandomQuotesComponent},
  {path:"bmicalculator-app",component:BmiComponent},
  {path:"todo-app",component:TodoAppComponent},
  {path:"weather-app",component:WeatherAppComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
