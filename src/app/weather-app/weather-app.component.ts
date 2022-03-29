import { Component, OnInit } from '@angular/core';
import { WeatherModel } from './models/weather';
import { WeatherAppService } from './services/weather-app.service';

@Component({
  selector: 'app-weather-app',
  templateUrl: './weather-app.component.html',
  styleUrls: ['./weather-app.component.css'],
})
export class WeatherAppComponent implements OnInit {
  mainCities: string[] = ['İstanbul', 'London', 'Berlin', 'Paris'];
  weatherOfMainCities: WeatherModel[] = [];
  city: string = '';
  constructor(private weatherService: WeatherAppService) {}
  weather: WeatherModel = new WeatherModel();
  ngOnInit(): void {
    this.getWeatherOfMainCities();
  }
  getWeatherData(city: string) {
    this.weatherService.getWeatherData(city).subscribe((response) => {
      this.weather = response;
    });
  }
  getWeatherOfMainCities() {
    this.mainCities.forEach((city) => {
      this.weatherService.getWeatherData(city).subscribe((response) => {
        this.weatherOfMainCities.push(response);
      });
    });
  }
}
