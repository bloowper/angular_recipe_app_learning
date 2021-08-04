import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {RecipeService} from "../recipe.service";

@Component({
    selector: 'app-recipe-edit',
    templateUrl: './recipe-edit.component.html',
    styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
    id: number|undefined;
    editMode = false;
    recipeForm!: FormGroup;

    constructor(private route: ActivatedRoute,private recipeService:RecipeService) {
    }

    ngOnInit(): void {
        this.route.params.subscribe((params) => {
            this.id = Number.parseInt(params['id']);
            this.editMode = params['id'] != null;
            this.initForm();
        })
    }

    private initForm() {
        let recipeName = '';
        let recipeImagePath = '';
        let recipeDescription = '';

        if (this.id !== undefined && this.editMode) {
            const recipe = this.recipeService.getRecipe(this.id);
            if (this.editMode) {
                recipeName = recipe.name;
                recipeImagePath = recipe.imagePath;
                recipeDescription = recipe.description;
            }
        }
        this.recipeForm = new FormGroup({
            'name': new FormControl(recipeName),
            'imagePath': new FormControl(recipeImagePath),
            'description': new FormControl(recipeDescription)
        });
    }

    onSubmit() {
        console.log(this.recipeForm)
    }
}