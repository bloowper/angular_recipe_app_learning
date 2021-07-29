import {Injectable,EventEmitter} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";

@Injectable({
    providedIn: 'root'
})
export class ShoppingListService {
    ingredientsChanged = new EventEmitter<Ingredient[]>();

    private _ingredients: Ingredient[] = [
        new Ingredient("Apple", 5),
        new Ingredient("Tomatoes", 10),
    ];

    get ingredients(): Ingredient[] {
        return this._ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        this._ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients);
    }
}
