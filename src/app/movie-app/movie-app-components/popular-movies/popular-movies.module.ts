import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopularMoviesComponent } from './popular-movies.component';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    PopularMoviesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:"",component:PopularMoviesComponent}
    ])
  ]
})
export class PopularMoviesModule { }
