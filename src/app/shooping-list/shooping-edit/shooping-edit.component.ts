import {Component, ElementRef, OnInit, ViewChild, EventEmitter, Output, OnDestroy} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list.service";
import {NgForm} from "@angular/forms";
import {Subscription} from "rxjs";

@Component({
    selector: 'app-shooping-edit',
    templateUrl: './shooping-edit.component.html',
    styleUrls: ['./shooping-edit.component.css']
})
export class ShoopingEditComponent implements OnInit, OnDestroy {

    @ViewChild('f', {static: false}) sForm: NgForm|undefined;
    subscription: Subscription|undefined;
    editMode = false;
    eidItemIndex: number | undefined;
    editedItem: Ingredient | undefined;

    constructor(private shoppingListService: ShoppingListService) {

    }

    ngOnInit(): void {
         this.subscription = this.shoppingListService.startedEditing.subscribe((index: number) => {
             this.editMode = true;
             this.eidItemIndex = index;
             this.editedItem = this.shoppingListService.getIngredient(index);
             this.sForm?.setValue({
                 name: this.editedItem.name,
                 amount :this.editedItem.amount
             });
        });
    }

    ngOnDestroy(): void {
        this.subscription?.unsubscribe();
    }


    onSubmit(form: NgForm) {
        const value = form.value;
        const ingredient = new Ingredient(value.name, value.amount);
        this.shoppingListService.updateIngredient(ingredient, value);
        if (this.editMode) {
            this.shoppingListService.updateIngredient(ingredient, this.eidItemIndex);
        } else {
            this.shoppingListService.addIngredient(ingredient);
        }
        this.editMode = false;
        this.sForm?.resetForm();
    }

    onClear() {
        this.sForm?.reset();
        this.editMode = false;
    }

    onDelete() {

    }
}
