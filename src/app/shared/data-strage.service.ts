import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {RecipeService} from "../recipes/recipe.service";
<<<<<<< HEAD
=======
import {Recipe} from "../recipes/recipe-list/recipe.model";
>>>>>>> 56681a0... recipe edit/ afte deleting by git

@Injectable({
    providedIn: 'root'

})
export  class  DataStorageService{



    constructor(private httpClient:HttpClient,
                private recipeService:RecipeService) {
    }

    storeRecipes() {
        const recipes = this.recipeService.getRecipes();
        this.httpClient.put("https://recipe-app-test-ae9dd-default-rtdb.firebaseio.com/recipes.json",recipes).subscribe(value => {
            console.log(value)
        })
    }

    fetchRecipes() {
<<<<<<< HEAD
        this.httpClient.get("https://recipe-app-test-ae9dd-default-rtdb.firebaseio.com/recipes.json").subscribe(value => {
            console.log(value)
        })
=======
        this.httpClient.get<Recipe[]>("https://recipe-app-test-ae9dd-default-rtdb.firebaseio.com/recipes.json").subscribe(value => {
            this.recipeService.setRecipes((value));
        })

>>>>>>> 56681a0... recipe edit/ afte deleting by git
    }
}
