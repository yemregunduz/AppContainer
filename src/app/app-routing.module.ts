import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BmiComponent } from './bmi-app/bmi/bmi.component';
import { HomeComponent } from './main-components/home/home.component';
import { TodoAppComponent } from './todo-app/todo-app/todo-app.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"bmicalculator-app",component:BmiComponent},
  {path:"todo-app",component:TodoAppComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
