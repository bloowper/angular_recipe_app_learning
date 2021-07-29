import {Component, ElementRef, OnInit, ViewChild, EventEmitter, Output} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list.service";

@Component({
    selector: 'app-shooping-edit',
    templateUrl: './shooping-edit.component.html',
    styleUrls: ['./shooping-edit.component.css']
})
export class ShoopingEditComponent implements OnInit {

    @ViewChild('nameInput', {static: false}) nameInputRef: ElementRef | undefined;
    @ViewChild('amountInput', {static: false}) amountInput: ElementRef | undefined;

    constructor(private shoppingListService: ShoppingListService) {

    }

    ngOnInit(): void {
    }

    odAddItem() {
        const ingredient = new Ingredient(
            this.nameInputRef?.nativeElement.value,
            this.amountInput?.nativeElement.value);
        this.shoppingListService.addIngredient(ingredient);
    }
}
