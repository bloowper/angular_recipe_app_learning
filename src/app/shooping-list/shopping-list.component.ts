import {Component, OnInit} from '@angular/core';
import {Ingredient} from "../shared/ingredient.model";
import {buildMonths} from "@ng-bootstrap/ng-bootstrap/datepicker/datepicker-tools";
import {ShoppingListService} from "./shopping-list.service";

@Component({
    selector: 'app-shooping-list',
    templateUrl: './shopping-list.component.html',
    styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

    ingredients: Ingredient[] | undefined;

    constructor(private shoppingListService: ShoppingListService) {

    }

    ngOnInit(): void {
        this.ingredients = this.shoppingListService.ingredients;
        this.shoppingListService.ingredientsChanged.subscribe(
            (value : Ingredient[])=>{
                this.ingredients = value;
            }
        );
    }

}
