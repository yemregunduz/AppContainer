import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoAppComponent } from './components/todo-app/todo-app/todo-app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HomeComponent } from './components/main-components/home/home.component';
import { BmiComponent } from './components/bmi-app/bmi/bmi.component';
import { RandomQuotesComponent } from './components/random-quotes/random-quotes.component';
import { HttpClientModule } from '@angular/common/http';
import { WeatherAppComponent } from './components/weather-app/weather-app.component';
import { DegreePipe } from './components/weather-app/pipes/degree.pipe';
import { DateFormat } from './components/weather-app/pipes/date.pipe';
import { GithubReposAppComponent } from './components/github-repos-app/github-repos-app.component';
import { NotesAppComponent } from './components/notes-app/notes-app.component';
import { FilterPipe } from './components/notes-app/pipes/filter.pipe';
import { ChartAppComponent } from './components/chart-app/chart-app.component';
import { ReadExcelDirective } from './components/chart-app/directives/read-excel.directive';
import { ToastrModule } from 'ngx-toastr';
import { MarkdownEditorAppComponent } from './components/markdown-editor-app/markdown-editor-app.component';
import { SanitizeHtmlPipe } from './components/markdown-editor-app/pipes/sanitize-html.pipe';
import { TenFingersAppComponent } from './components/ten-fingers-app/ten-fingers-app.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { CalculatorAppComponent } from './components/calculator-app/calculator-app.component';


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
    TenFingersAppComponent,
    CalculatorAppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right",
      closeButton:true,
      timeOut:2000,
    }),
    NgxSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
