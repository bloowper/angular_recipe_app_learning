import {Injectable} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";

@Injectable({
    providedIn: 'root'
})
export class ShooppingListService {



    private _ingredients: Ingredient[] = [
        new Ingredient("Apple", 5),
        new Ingredient("Tomatoes", 10),
    ];

    get ingredients(): Ingredient[] {
        return this._ingredients.slice();
    }

}
