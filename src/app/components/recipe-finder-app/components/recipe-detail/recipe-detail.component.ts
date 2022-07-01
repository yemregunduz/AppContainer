import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Meal } from '../../models/meal';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute,private recipeService:RecipeService) { }
  meal : Meal = new Meal()
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if (params["mealId"]) {
        this.getRecipeById(params["mealId"])
      }
    })
  }

  getRecipeById(idMeal:string){
    console.log(idMeal)
    this.recipeService.getMealById(idMeal).subscribe(response=>{
      this.meal = response;

      console.log(response)
    })
  }

}
