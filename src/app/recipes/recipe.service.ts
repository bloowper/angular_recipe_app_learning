import {Recipe} from "./recipe-list/recipe.model";
import {EventEmitter, Injectable} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shooping-list/shopping-list.service";

@Injectable({
    providedIn: 'root'
})
export class RecipeService {
    public recipeSelected = new EventEmitter<Recipe>();


    constructor(private shoppingListService:ShoppingListService) {
    }

    private _recipes: Recipe[] = [
        new Recipe(
            "Tasty burger",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ante nibh, accumsan ac dignissim ",
            "https://images.wallpaperscraft.com/image/pie_baking_recipe_173786_1600x900.jpg",
            [new Ingredient("Met", 1),
                new Ingredient("French Fries", 20)
            ]
        ),

        new Recipe(
            "Salade",
            "Lorem ipsum dolor ipsum sit ipsum amet, consectetur adipiscing  consectetur elit. Morbi ante nibh  consectetur, accumsan ac dignissim ",
            "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2015/11/shakshuka-11.jpg",
            [new Ingredient("Tomatoes", 10),
                new Ingredient("Paprika", 2),
                new Ingredient("Bread", 1)
            ]
        )
    ];

    get recipes(): Recipe[] {
        return this._recipes.slice();
    }


    addIngredientsToShoppingList(ingredients: Ingredient[] | undefined) {
        if (ingredients !== undefined) {
            this.shoppingListService.addIngredients(ingredients);
        }
    }
}
