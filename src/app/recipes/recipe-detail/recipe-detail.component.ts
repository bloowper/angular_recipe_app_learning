import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from "../recipe-list/recipe.model";
import {RecipeService} from "../recipe.service";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
    selector: 'app-recipe-detail',
    templateUrl: './recipe-detail.component.html',
    styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

    recipe: Recipe | undefined;
    id: number | undefined;

    constructor(private recipeService:RecipeService, private route:ActivatedRoute, private router:Router) {
    }

    ngOnInit(): void {
        this.route.params.subscribe(
            (params: Params) => {
                this.id = +params["id"];
                this.recipe = this.recipeService.getRecipe(this.id);
            }
        )
    }

    onAddToShoppingList() {
        this.recipeService.addIngredientsToShoppingList(this.recipe?.ingredients);
    }

    onDeleteRecipe() {
        if (this.id !== undefined) {
            this.recipeService.deleteRecipe(this.id);
        }else {
            console.log("id undefined");
        }
        this.router.navigate(["../"],{relativeTo: this.route})
    }
}
