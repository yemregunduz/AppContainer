import { Component, OnInit } from '@angular/core';
import { Meal } from '../models/meal';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-recipe-finder-app',
  templateUrl: './recipe-finder-app.component.html',
  styleUrls: ['./recipe-finder-app.component.css']
})
export class RecipeFinderAppComponent implements OnInit {

  constructor(private recipeService:RecipeService) { }
  keyword:string = ""
  meals :Meal = new Meal();

  ngOnInit(): void {
  }
  getRandomRecipe(){
    this.recipeService.getRandomMeal().subscribe(response=>{
      this.meals = response
      console.log(response)
    })
  }
  getRecipeByKeyword(){
    this.recipeService.getMealsByKeyword(this.keyword).subscribe(response=>{
      this.meals = response
      console.log(this.meals)
    })
  }


}
