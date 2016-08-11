import { Component, OnInit, Input } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { Recipe } from '../recipe';

@Component({
  moduleId: module.id,
  selector: 'rb-recipe-item',
  templateUrl: 'recipe-item.component.html',
  directives: [ROUTER_DIRECTIVES]
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe: Recipe;
  @Input() recipeId: number;
  constructor() { }

  ngOnInit() {
  }

}
