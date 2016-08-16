import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { RecipeListComponent } from './recipe-list';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { RecipeService } from './recipe-list/recipe.service';

import { Subscription } from 'rxjs/Rx'

@Component({
  moduleId: module.id,
  selector: 'rb-recipe',
  templateUrl: 'recipe.component.html',
  styleUrls: ['recipe.component.css'],
  directives: [RecipeListComponent, ROUTER_DIRECTIVES],
  providers: [RecipeService]
})
export class RecipeComponent implements OnDestroy {

  private param: string;
  private subscription: Subscription

  constructor(private router: Router) { 
    this.subscription = router.routerState.queryParams.subscribe(
      (queryParam: any) => this.param = queryParam['userId']
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }  
}
