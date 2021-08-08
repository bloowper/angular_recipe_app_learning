import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {RecipeService} from "../recipes/recipe.service";
import { Recipe } from "../recipes/recipe-list/recipe.model";
import {map, tap} from "rxjs/operators";

@Injectable({
    providedIn: 'root'

})
export  class  DataStorageService{



    constructor(private httpClient:HttpClient,
                private recipeService:RecipeService) {
    }

    storeRecipes() {
        const recipes = this.recipeService.getRecipes();
        this.httpClient.put("https://recipe-app-test-ae9dd-default-rtdb.firebaseio.com/recipes.json",recipes).subscribe(value => {
            console.log(value)
        })
    }

    fetchRecipes() {
        return this.httpClient
            .get<Recipe[]>("https://recipe-app-test-ae9dd-default-rtdb.firebaseio.com/recipes.json")
            .pipe(
                map(recipes =>{
                    console.log("Map :",recipes);
                    var map1 =  recipes.map(
                        recipe=>{
                            return {...recipe, ingredients: recipe.ingredients?  recipe.ingredients:[]}
                        }
                    )
                    this.recipeService.setRecipes(map1);
                    return map1;
                }
            ))
    }
}
