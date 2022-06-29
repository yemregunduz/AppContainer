import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Meal } from '../models/meal';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private url = "https://www.themealdb.com/api/json/v1/1/"
  constructor(private httpClient:HttpClient) { }


  getRandomMeal(){
    let url = this.url+"random.php"
    return this.httpClient.get<Meal>(url);
  }
  getMealsByKeyword(keyword:string){
    let url = this.url+"search.php?s="+keyword
    return this.httpClient.get<Meal>(url);
  }
  getMealById(id:string){
    let url = this.url+"lookup.php?i"+id
    return this.httpClient.get<Meal>(url);
  }
}
