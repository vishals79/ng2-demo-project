import { bootstrap,platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { disableDeprecatedForms, provideForms } from '@angular/forms';

import { AppComponent, environment } from './app/';
import { ShoppingListService } from './app/shopping-list';
import { APP_ROUTES_PROVIDER } from './app/app.route';
import { AppModule } from './app/app.module';
import { ShoppingListGuard } from './app/shopping-list/shopping-list.guard';
import { ShoppingListDeactivateGuard } from './app/shopping-list/shopping-list-deactivate.guard';

if (environment.production) {
  enableProdMode();
}

//platformBrowserDynamic().bootstrapModule(AppModule);

bootstrap(AppComponent, [disableDeprecatedForms(), provideForms(), ShoppingListService, APP_ROUTES_PROVIDER, ShoppingListGuard, ShoppingListDeactivateGuard]);
