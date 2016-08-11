import { Component } from '@angular/core';
import { HeaderComponent } from './header.component';
import { RecipeBookComponent } from './recipe-book.component';
import { ROUTER_DIRECTIVES } from '@angular/router';
@Component({
  moduleId: module.id,
  selector: 'rb-root',
  templateUrl: 'app.component.html',
  directives: [HeaderComponent, RecipeBookComponent, ROUTER_DIRECTIVES]
})
export class AppComponent {
  title = 'app works!';
}
