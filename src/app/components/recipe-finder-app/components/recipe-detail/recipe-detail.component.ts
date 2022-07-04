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
  meal : any = []
  ingredients:any[] =[];
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if (params["mealId"]) {
        this.getRecipeById(params["mealId"])
      }
    })
  }

  getRecipeById(idMeal:string){
    this.recipeService.getMealById(idMeal).subscribe(response=>{
      this.meal = response;
      for (let i = 1; i <= 20; i++) {
        let ingredient = this.meal.meals[0][`strIngredient${i}`]
        let measure = this.meal.meals[0][`strMeasure${i}`]

        if( ingredient.length>0){
          this.ingredients.push({ingredient,measure})
        }
      }
    })
  }

}
