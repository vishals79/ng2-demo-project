import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'rb-recipe-book',
  templateUrl: 'recipe-book.component.html',
  styleUrls: ['recipe-book.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class RecipeBookComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
