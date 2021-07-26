import { Component, OnInit } from '@angular/core';
import {Recipe} from "./recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("Sample recipe one","\n" +
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ante nibh, accumsan ac dignissim ","https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2015/11/shakshuka-11.jpg"),
    new Recipe("The second sample","\n" +
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ante nibh, accumsan ac dignissim ","https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2015/11/shakshuka-11.jpg")

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
