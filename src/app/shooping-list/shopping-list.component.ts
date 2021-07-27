import {Component, OnInit} from '@angular/core';
import {Ingredient} from "../shared/ingredient.model";
import {buildMonths} from "@ng-bootstrap/ng-bootstrap/datepicker/datepicker-tools";

@Component({
    selector: 'app-shooping-list',
    templateUrl: './shopping-list.component.html',
    styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

    ingredients: Ingredient[] = [
        new Ingredient("Apple", 5),
        new Ingredient("Tomatoes", 10),
    ];

    constructor() {
    }

    ngOnInit(): void {
    }

    onIngredientAdded(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
    }
}
