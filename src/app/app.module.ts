import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {RecipesComponent} from './recipes/recipes.component';
import {RecipeListComponent} from './recipes/recipe-list/recipe-list.component';
import {RecipeDetailComponent} from './recipes/recipe-detail/recipe-detail.component';
import {RecipeItemComponent} from './recipes/recipe-list/recipe-item/recipe-item.component';
import {ShoppingListComponent} from './shooping-list/shopping-list.component';
import {ShoopingEditComponent} from './shooping-list/shooping-edit/shooping-edit.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {DropdownDirective} from "./shared/dropdown.directive";
import {Dropdownv2Directive} from './shared/dropdownv2.directive';
import {AppRoutingModule} from "./app-routing.module";
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ShoppingListService} from "./shooping-list/shopping-list.service";
import {RecipeService} from "./recipes/recipe.service";
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from "@angular/common/http";
import { AuthComponentComponent } from './auth/auth-component/auth-component.component';
import {InterceptorService} from "./auth/services/interceptor.service";
import { AlertComponent } from './shared/alert/alert.component';
import {PlaceholderDirective} from "./shared/placeholder/placeholder.directive";



@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        RecipesComponent,
        RecipeListComponent,
        RecipeDetailComponent,
        RecipeItemComponent,
        ShoppingListComponent,
        ShoopingEditComponent,
        DropdownDirective,
        Dropdownv2Directive,
        RecipeStartComponent,
        RecipeEditComponent,
        AuthComponentComponent,
        AlertComponent,
        PlaceholderDirective
    ],
    imports: [
        BrowserModule,
        NgbModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,

    ],
    providers: [
        ShoppingListService,
        RecipeService,
        {provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true}
    ],
    bootstrap: [AppComponent],

})
export class AppModule {
}
