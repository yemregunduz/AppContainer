import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavouriteMoviesModule } from './favourite-movies/favourite-movies.module';
import { PopularMoviesModule } from './popular-movies/popular-movies.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FavouriteMoviesModule,
    PopularMoviesModule
  ]
})
export class MovieAppComponentsModule { }
