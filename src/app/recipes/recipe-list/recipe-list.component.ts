import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from "./recipe.model";
import {RecipeItemComponent} from "./recipe-item/recipe-item.component";

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

    @Output() recipeSelected = new EventEmitter<Recipe>();

    recipes: Recipe[] = [
        new Recipe("Sample recipe one", "\n" +
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ante nibh, accumsan ac dignissim ",
            "https://images.wallpaperscraft.com/image/pie_baking_recipe_173786_1600x900.jpg"),
        new Recipe("The second sample", "\n" +
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ante nibh, accumsan ac dignissim ",
            "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2015/11/shakshuka-11.jpg")

    ];

    constructor() {
    }

    ngOnInit(): void {
    }

    onRecipeSelected(recipeElement: Recipe) {
        this.recipeSelected.emit(recipeElement);
    }
}
