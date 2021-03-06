import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {RecipeService} from "../recipe.service";
import {Recipe} from "../recipe-list/recipe.model";

@Component({
    selector: 'app-recipe-edit',
    templateUrl: './recipe-edit.component.html',
    styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
    id: number|undefined;
    editMode = false;
    recipeForm!: FormGroup;

    constructor(private route: ActivatedRoute,
                private recipeService:RecipeService,
                private  router:Router) {
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
        let recipeIngredients = new FormArray([]);

        if (this.id !== undefined && this.editMode) {
            const recipe = this.recipeService.getRecipe(this.id);
            if (this.editMode) {
                recipeName = recipe.name;
                recipeImagePath = recipe.imagePath;
                recipeDescription = recipe.description;
                if (recipe['ingredients']) {
                    for (let ingredient of recipe.ingredients) {
                        recipeIngredients.push(
                            new FormGroup({
                                'name': new FormControl(ingredient.name,[Validators.required]),
                                'amount': new FormControl(ingredient.amount,[Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)])
                            })
                        );
                    }
                }
            }
        }
        this.recipeForm = new FormGroup({
            'name': new FormControl(recipeName,Validators.required),
            'imagePath': new FormControl(recipeImagePath,[Validators.required]),
            'description': new FormControl(recipeDescription,[Validators.required]),
            'ingredients': recipeIngredients
        });
    }

    get controls() { // a getter!
        return (<FormArray>this.recipeForm.get('ingredients')).controls;
    }

    onSubmit() {
        const recipe = new Recipe(
                this.recipeForm.value['name'],
                this.recipeForm.value['description'],
                this.recipeForm.value['imagePath'],
                this.recipeForm.value['ingredients']
            );
        if (this.editMode) {
            if (this.id !== undefined) {
                this.recipeService.updateRecipe(recipe, this.id);
            }else {
                console.log("Error with updating recipe, id not exist in recipe-edit.component")
            }
        }else {
            this.recipeService.addRecipe(recipe);
        }
        this.onCancel();
    }

    onAddIngredient() {
        (<FormArray>this.recipeForm.get('ingredients')).push(new FormGroup({
            'name': new FormControl(null,[Validators.required]),
            'amount': new FormControl(null,[Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)])
        }))
    }

    onCancel() {
        console.log("Routing out")
        this.router.navigate(["../"],{relativeTo: this.route})
    }

    onDeleteItem(i: number) {
        (<FormArray>this.recipeForm.get('ingredients')).removeAt(i);
    }
}
