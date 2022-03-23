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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
