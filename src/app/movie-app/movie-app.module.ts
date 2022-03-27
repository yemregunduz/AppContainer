import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieAppLayoutModule } from './movie-app-layout/movie-app-layout.module';
import { MovieAppComponentsModule } from './movie-app-components/movie-app-components.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MovieAppLayoutModule,
  ],
  exports:[
    MovieAppLayoutModule, 
  ]
})
export class MovieAppModule { }
