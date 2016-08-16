import { Component, OnInit } from '@angular/core';
import { RbDropdownDirective } from './rb-dropdown.directive';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'rb-header',
  templateUrl: 'header.component.html',
  directives: [RbDropdownDirective, ROUTER_DIRECTIVES]
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToHomePage(){
    this.router.navigate(['/'],{queryParams : {'userId':1}});
  }
}
