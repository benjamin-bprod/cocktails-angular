import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CocktailsListComponent } from './cocktails/cocktails-list/cocktails-list.component';
import { CocktailDetailComponent } from './cocktails/cocktail-detail/cocktail-detail.component';
import { CocktailsComponent } from './cocktails/cocktails.component';
import { ActiveDirective } from './shared/directives/active.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CocktailsListComponent,
    CocktailDetailComponent,
    CocktailsComponent,
    ActiveDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
