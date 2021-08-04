import {Component, OnDestroy, OnInit} from '@angular/core';
import {Ingredient} from "../shared/ingredient.model";
import {buildMonths} from "@ng-bootstrap/ng-bootstrap/datepicker/datepicker-tools";
import {ShoppingListService} from "./shopping-list.service";
import {Subscription} from "rxjs";

@Component({
    selector: 'app-shooping-list',
    templateUrl: './shopping-list.component.html',
    styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit,OnDestroy {

    ingredients: Ingredient[] | undefined;
    private subscriptionShoppingList: Subscription | undefined;

    constructor(private shoppingListService: ShoppingListService) {

    }

    ngOnInit(): void {
        this.ingredients = this.shoppingListService.ingredients;
        this.subscriptionShoppingList = this.shoppingListService.ingredientsChanged.subscribe(
            (value : Ingredient[])=>{
                this.ingredients = value;
            }
        );
    }

    ngOnDestroy(): void {
        this.subscriptionShoppingList?.unsubscribe();
    }

    onEditItem(index: number) {
        this.shoppingListService.startedEditing.next(index);
    }
}
