import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private apiUrl = 'https://www.themealdb.com/api/json/v1/1/'
  constructor(private httpClient:HttpClient) { }

  async listAllMealCategories(){
    let url = this.apiUrl+"categories.php" 
    return await this.httpClient.get<Category[]>(url).toPromise()
    
  }
  
}
