import { Component } from '@angular/core';
import { RecipeListComponent } from './recipe-list';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { RecipeService } from './recipe-list/recipe.service';

@Component({
  moduleId: module.id,
  selector: 'rb-recipe',
  templateUrl: 'recipe.component.html',
  styleUrls: ['recipe.component.css'],
  directives: [RecipeListComponent, ROUTER_DIRECTIVES],
  providers: [RecipeService]
})
export class RecipeComponent {
}
