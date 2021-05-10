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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeaderInterceptor } from './helpers/header-interceptor';
import { RecipeEditComponent } from './features/recipe/recipe-edit/recipe-edit.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { MenuDropdownDirective } from './shared/menu-dropdown/menu-dropdown.directive';
import { RecipeEmptyComponent } from './features/recipe/recipe-empty/recipe-empty.component';
import { RecipeCreateComponent } from './features/recipe/recipe-create/recipe-create.component';

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
    MenuDropdownDirective,
    RecipeEditComponent,
    NotFoundComponent,
    RecipeEmptyComponent,
    RecipeCreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
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
