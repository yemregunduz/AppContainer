import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieAppLayoutComponent } from './movie-app-layout.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    MovieAppLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports:[
    MovieAppLayoutComponent,
  ]
})
export class MovieAppLayoutModule { }
