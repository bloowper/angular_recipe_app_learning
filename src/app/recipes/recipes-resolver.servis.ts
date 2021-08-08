import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {Recipe} from "./recipe-list/recipe.model";
import {DataStorageService} from "../shared/data-strage.service";
import {RecipeService} from "./recipe.service";

@Injectable({
    providedIn: 'root'
})
export class RecipesResolverService implements Resolve<Recipe[]>{

    constructor(private storageService: DataStorageService, private recipeService: RecipeService) {


    }


    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        let recipes = this.recipeService.getRecipes();
        if (recipes.length === 0) {
            return this.storageService.fetchRecipes();
        }else {
            return  recipes;
        }
    }


    
}
