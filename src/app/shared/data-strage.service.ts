import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {RecipeService} from "../recipes/recipe.service";
import { Recipe } from "../recipes/recipe-list/recipe.model";
import {exhaustMap, map, take, tap} from "rxjs/operators";
import {AuthService} from "../auth/services/auth.service";

@Injectable({
    providedIn: 'root'

})
export  class  DataStorageService{


    constructor(private httpClient: HttpClient,
                private recipeService: RecipeService,
                private authService: AuthService) {
    }

    storeRecipes() {
        const recipes = this.recipeService.getRecipes();
        this.httpClient.put("https://recipe-app-test-ae9dd-default-rtdb.firebaseio.com/recipes.json",recipes).subscribe(value => {
            console.log(value)
        })
    }

    fetchRecipes() {

        // return this.authService.user$.pipe
        // (
        //     take(1),
        //     exhaustMap(user =>{
        //         return this.httpClient.get<Recipe[]>(
        //             "https://recipe-app-test-ae9dd-default-rtdb.firebaseio.com/recipes.json",
        //             {
        //                 params: new HttpParams().set('auth', user.token ? user.token : '')
        //             }
        //         )
        //     }),
        //     map(recipes =>{
        //         return recipes.map(recipe =>{
        //             return {...recipe, ingredients: recipe.ingredients ? recipe.ingredients : []}
        //         })
        //     }),
        //     tap(recipes =>{
        //         this.recipeService.setRecipes(recipes);
        //     })
        // )

        //interceptor in use
        return this.httpClient.get<Recipe[]>(
            "https://recipe-app-test-ae9dd-default-rtdb.firebaseio.com/recipes.json"
        )
            .pipe(
                map(recipes =>{
                    return recipes.map(recipe=>{
                        return{
                            ...recipe,
                            ingredients: recipe.ingredients ? recipe.ingredients : []
                        }
                    })
                }),
                tap(recipes =>{
                    this.recipeService.setRecipes(recipes);
                })
            )

    }
}
