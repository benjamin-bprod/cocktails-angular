import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ActiveDirective } from './shared/directives/active.directive';
import { PanierService } from './shared/services/panier.service';
import { CocktailModule } from './cocktails/cocktail.module';
import { SharedModule } from './shared/modules/shared.module';
import { AppRoutingModule } from './app-rooting.module';

@NgModule({
  declarations: [
    AppComponent,
    ActiveDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CocktailModule,
    SharedModule,
  ],
  providers: [PanierService],
  bootstrap: [AppComponent]
})
export class AppModule { }
