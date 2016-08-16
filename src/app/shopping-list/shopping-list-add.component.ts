import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared';
import { ShoppingListService } from './shopping-list.service';

@Component({
  moduleId: module.id,
  selector: 'rb-shopping-list-add',
  templateUrl: 'shopping-list-add.component.html',
  styleUrls: ['shopping-list-add.component.css']
})
export class ShoppingListAddComponent implements OnChanges {
  @Input() item: Ingredient;
  @Output() clear = new EventEmitter();

  isAdd: boolean = true;

  constructor(private sls: ShoppingListService) { }

  ngOnChanges(changes) {
    if(changes.item.currentValue === null){
      this.isAdd = true;
      this.item = {name: null, amount: null};
    }else{
      this.isAdd = false;
    }
  }

  onSubmit(ingredient: Ingredient){
    const newIngredient = new Ingredient(ingredient.name, ingredient.amount);
    if(this.isAdd){
      this.sls.addItem(ingredient);
    }else{
      this.sls.editItem(this.item, newIngredient);
      this.onClear();
    }
  }

  onDelete(){
    this.sls.deleteItem(this.item);
    this.onClear();
  }

  onClear(){
    this.isAdd = true;
    this.clear.emit(null);
  }
}
