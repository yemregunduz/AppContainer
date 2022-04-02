import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoAppComponent } from './todo-app/todo-app/todo-app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HomeComponent } from './main-components/home/home.component';
import { BmiComponent } from './bmi-app/bmi/bmi.component';
import { RandomQuotesComponent } from './random-quotes/random-quotes.component';
import { HttpClientModule } from '@angular/common/http';
import { WeatherAppComponent } from './weather-app/weather-app.component';
import { DegreePipe } from './weather-app/pipes/degree.pipe';
import { DateFormat } from './weather-app/pipes/date.pipe';
import { MovieAppModule } from './movie-app/movie-app.module';
import { GithubReposAppComponent } from './github-repos-app/github-repos-app.component';
import { NotesAppComponent } from './notes-app/notes-app.component';
import { FilterPipe } from './notes-app/pipes/filter.pipe';
import { ChartAppComponent } from './chart-app/chart-app.component';
import { ReadExcelDirective } from './chart-app/directives/read-excel.directive';
import { ToastrModule } from 'ngx-toastr';
import { MarkdownEditorAppComponent } from './markdown-editor-app/markdown-editor-app.component';
import { SanitizeHtmlPipe } from './markdown-editor-app/pipes/sanitize-html.pipe';


@NgModule({
  declarations: [
    AppComponent,
    TodoAppComponent,
    HomeComponent,
    BmiComponent,
    RandomQuotesComponent,
    WeatherAppComponent,
    DegreePipe,
    DateFormat,
    GithubReposAppComponent,
    NotesAppComponent,
    FilterPipe,
    ChartAppComponent,
    ReadExcelDirective,
    MarkdownEditorAppComponent,
    SanitizeHtmlPipe,

  ],
  imports: [
    BrowserModule,
    MovieAppModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right",
      closeButton:true,
      timeOut:2000,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
