import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { Recipe } from '../recipe';
import { RecipeItemComponent } from './recipe-item.component';
import { RecipeService } from './recipe.service';

@Component({
  moduleId: module.id,
  selector: 'rb-recipe-list',
  templateUrl: 'recipe-list.component.html',
  directives: [RecipeItemComponent, ROUTER_DIRECTIVES],
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [];

  @Output() recipeSelected = new EventEmitter<Recipe>();
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    console.log('ngOnInit');
    this.recipes = this.recipeService.getRecipeList();
  }

  onSelected(recipe: Recipe){
    console.log('onSelected: '+Recipe);
    this.recipeSelected.emit(recipe);
  }

}
