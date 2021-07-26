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
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ante nibh, accumsan ac dignissim eu, porttitor et lacus. In eget leo a nunc varius rhoncus. In eget nulla eu lectus bibendum semper. Proin rhoncus vulputate placerat. Etiam nisi metus, pretium non ullamcorper at, auctor eget enim. Quisque dictum, tellus in commodo elementum, ante velit auctor erat, sit amet aliquet metus orci tempus lectus. Donec blandit neque ac dui ultricies iaculis.","https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2015/11/shakshuka-11.jpg"),
    new Recipe("The second sample","\n" +
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ante nibh, accumsan ac dignissim eu, porttitor et lacus. In eget leo a nunc varius rhoncus. In eget nulla eu lectus bibendum semper. Proin rhoncus vulputate placerat. Etiam nisi metus, pretium non ullamcorper at, auctor eget enim. Quisque dictum, tellus in commodo elementum, ante velit auctor erat, sit amet aliquet metus orci tempus lectus. Donec blandit neque ac dui ultricies iaculis.","https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2015/11/shakshuka-11.jpg")

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
