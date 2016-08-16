import { Component, OnInit, OnDestroy} from '@angular/core';
import { Router } from '@angular/router';

import { ShoppingListAddComponent } from './shopping-list-add.component';
import { Ingredient } from '../shared';
import { ShoppingListService } from './shopping-list.service';
import { ComponentCanDeactivate } from './shopping-list-deactivate.guard';

import { Subscription } from 'rxjs/Rx';

@Component({
  moduleId: module.id,
  selector: 'rb-shopping-list',
  templateUrl: 'shopping-list.component.html',
  styleUrls: ['shopping-list.component.css'],
  directives: [ShoppingListAddComponent]
})
export class ShoppingListComponent implements OnInit, OnDestroy, ComponentCanDeactivate {

  items: Ingredient[] = [];
  private param: string;
  private subscription: Subscription;
  private done: boolean = false;
  selectedItem: Ingredient = null;

  constructor(private shoppingListService: ShoppingListService, private router: Router) { 
    this.subscription = router.routerState.queryParams.subscribe(
      (queryParam: any) => this.param = queryParam['userId']
    );
  }

  onSelected(item: Ingredient){
    this.selectedItem = item;
  }

  goToHomePage(){
    this.router.navigate(['/']);
  }

  canDeactivate(){
    if(!this.done){
      return confirm("Are you sure?");
    }
    return true;
  }

  ngOnInit() {
    console.log("ngDoCheck");
    this.items = this.shoppingListService.getItems();
  }

  ngDoCheck() {
    console.log("ngDoCheck ShoppingListComponent");
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onClear(){
    this.selectedItem = null;
  }
}
