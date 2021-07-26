import { Component, OnInit } from '@angular/core';
import {Recipe} from "./recipe-list/recipe.model";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  selectedRecipe: Recipe | undefined;

  constructor() { }

  ngOnInit(): void {
  }

    setSelectedRecipe($event: Recipe) {
      this.selectedRecipe = $event;
      console.log($event);
    }
}
