import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavouriteMoviesComponent } from './favourite-movies.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    FavouriteMoviesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:"",component:FavouriteMoviesComponent}
    ])
  ]
})
export class FavouriteMoviesModule { }
