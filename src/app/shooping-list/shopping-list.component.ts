import {Component, OnInit} from '@angular/core';
import {Ingredient} from "../shared/ingredient.model";
import {buildMonths} from "@ng-bootstrap/ng-bootstrap/datepicker/datepicker-tools";
import {ShooppingListService} from "./shoopping-list.service";

@Component({
    selector: 'app-shooping-list',
    templateUrl: './shopping-list.component.html',
    styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

    ingredients: Ingredient[] | undefined;

    constructor(private shooping: ShooppingListService) {

    }

    ngOnInit(): void {
    }

    onIngredientAdded(ingredient: Ingredient) {
        this.ingredients?.push(ingredient);
    }
}
