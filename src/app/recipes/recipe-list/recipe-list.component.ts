import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {Recipe} from "./recipe.model";
import {RecipeItemComponent} from "./recipe-item/recipe-item.component";
import {RecipeService} from "../recipe.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit,OnDestroy {


    @Output() recipeSelected = new EventEmitter<Recipe>();
    subscription: Subscription|undefined;
    recipes: Recipe[] | undefined;

    constructor(private recipeService: RecipeService,private router:Router, private activatedRoute:ActivatedRoute) {

    }

    ngOnInit(): void {
        this.subscription = this.recipeService.recipesChanged$.subscribe((recipes:Recipe[]) => {
            console.log(recipes[0]);
            this.recipes = recipes;
        });
        this.recipes = this.recipeService.getRecipes();
    }

    ngOnDestroy(): void {
        this.subscription?.unsubscribe();
    }

    onRecipeSelected(recipeElement: Recipe) {
        this.recipeSelected.emit(recipeElement);
    }

    onNewRecipe() {
        this.router.navigate(['new'],{relativeTo:this.activatedRoute})
    }
}
