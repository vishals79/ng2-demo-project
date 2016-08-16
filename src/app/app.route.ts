import {  provideRouter } from "@angular/router";
import { RecipeComponent } from './recipe/recipe.component';
import { ShoppingListComponent } from './shopping-list';
import { RECIPES_ROUTE } from './recipe/recipes.route';
import { ShoppingListGuard } from './shopping-list/shopping-list.guard';
import { ShoppingListDeactivateGuard } from './shopping-list/shopping-list-deactivate.guard';

export const APP_ROUTES_PROVIDER = [
    provideRouter([
    { path: '', redirectTo: '/recipes', pathMatch: 'full' },
    { path: 'recipes', component: RecipeComponent, children: RECIPES_ROUTE},
    { path: 'shopping-list', component: ShoppingListComponent},
    //{ path: 'shopping-list', component: ShoppingListComponent, canActivate: [ShoppingListGuard], canDeactivate: [ShoppingListDeactivateGuard]},
    { path: '**', redirectTo: '/recipes', pathMatch: 'full' },
])
];