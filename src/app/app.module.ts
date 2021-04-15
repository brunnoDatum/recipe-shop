import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RecipeComponent } from './features/recipe/recipe.component';
import { RecipeItemComponent } from './features/recipe/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './features/recipe/recipe-detail/recipe-detail.component';
import { HeaderComponent } from './features/header/header.component';
import { ShoppingComponent } from './features/shopping/shopping.component';
import { ShoppingEditComponent } from './features/shopping/shopping-edit/shopping-edit.component';
import { RecipeListComponent } from './features/recipe/recipe-list/recipe-list.component';
import { FormsModule } from '@angular/forms';
import { MenuDropdownDirective } from './shared/menu-dropdown.directive';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeaderInterceptor } from './helpers/header-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingComponent,
    RecipeComponent,
    ShoppingEditComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    RecipeListComponent,
    MenuDropdownDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HeaderInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }