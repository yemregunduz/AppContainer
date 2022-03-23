import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WeatherModel } from '../models/weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherAppService {
  private apiUrl = 'http://api.openweathermap.org/data/2.5/weather'
  private apiKey = '3ea96a7555748ffb22671d9269aeaa8f'
  iconUrl = 'http://openweathermap.org/img/wn/{}@2x.png'
  constructor(private httpClient:HttpClient) { }

  getWeatherData(cityName:string){
    let newPath = this.apiUrl+'?q='+cityName+'&&appid='+this.apiKey
    return this.httpClient.get<WeatherModel>(newPath)
  }
}
