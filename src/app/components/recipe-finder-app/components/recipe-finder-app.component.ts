import { Component, OnInit } from '@angular/core';
import { Meal } from '../models/meal';
import { RecipeService } from '../services/recipe.service';
import { SessionStorageService } from '../services/session-storage.service';

@Component({
  selector: 'app-recipe-finder-app',
  templateUrl: './recipe-finder-app.component.html',
  styleUrls: ['./recipe-finder-app.component.css']
})
export class RecipeFinderAppComponent implements OnInit {

  constructor(private recipeService:RecipeService,private sessionStorageService:SessionStorageService) { }
  keyword:string = ""
  meals :Meal = new Meal();

  ngOnInit(): void {
    this.getDataFromStorage();
  }
  getRandomRecipe(){
    this.recipeService.getRandomMeal().subscribe(response=>{
      this.meals = response
      this.keyword=""
      this.setItemToSessionStorage();
    })
  }
  getRecipeByKeyword(){
    this.recipeService.getMealsByKeyword(this.keyword).subscribe(response=>{
      this.meals = response
      this.setItemToSessionStorage();
    })
  }
  getDataFromStorage(){
    if(sessionStorage.getItem("meals")!=null){
      this.meals = this.sessionStorageService.getItem("meals") as Meal
    }
    if(sessionStorage.getItem("keyword")!=null){
      this.keyword = this.sessionStorageService.getItem("keyword")
    }
  }
  setItemToSessionStorage(){
    this.sessionStorageService.setItem("meals",this.meals)
    this.sessionStorageService.setItem("keyword",this.keyword)
  }


}
