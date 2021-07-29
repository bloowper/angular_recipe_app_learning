import {Recipe} from "./recipe-list/recipe.model";
import {EventEmitter, Injectable} from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class RecipeService {
    public recipeSelected = new EventEmitter<Recipe>();


    private _recipes: Recipe[] = [
        new Recipe("Sample recipe one", "\n" +
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ante nibh, accumsan ac dignissim ",
            "https://images.wallpaperscraft.com/image/pie_baking_recipe_173786_1600x900.jpg"),
        new Recipe("The second sample", "\n" +
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ante nibh, accumsan ac dignissim ",
            "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2015/11/shakshuka-11.jpg")

    ];

    get recipes(): Recipe[] {
        return this._recipes.slice();
    }




}
