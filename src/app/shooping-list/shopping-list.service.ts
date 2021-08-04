import {Injectable,EventEmitter} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";
import {Subject} from "rxjs"
import {resetTempProgramHandlerForTest} from "@angular/compiler-cli/src/transformers/program";

@Injectable({
    providedIn: 'root'
})
export class ShoppingListService {
    ingredientsChanged = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();

    private _ingredients: Ingredient[] = [
        new Ingredient("Apple", 5),
        new Ingredient("Tomatoes", 10),
    ];

    get ingredients(): Ingredient[] {
        return this._ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        this._ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients);
    }

    addIngredients(ingredients: Ingredient[]) {
        this._ingredients.push(...ingredients);
        this.ingredientsChanged.next(this.ingredients);
    }

    getIngredient(index: number) {
        return this.ingredients[index];
    }

    updateIngredient(ingredient: Ingredient, index: number|undefined) {
        if (index !== undefined) {
            this._ingredients[index] = ingredient;
            this.ingredientsChanged.next(this._ingredients);
        }
    }

    deleteIngredient(index: number) {
        this.ingredients.splice(index, 1);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
}
