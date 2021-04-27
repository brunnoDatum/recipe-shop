import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeCreateComponent } from './features/recipe/recipe-create/recipe-create.component';
import { RecipeDetailComponent } from './features/recipe/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './features/recipe/recipe-edit/recipe-edit.component';
import { RecipeEmptyComponent } from './features/recipe/recipe-empty/recipe-empty.component';
import { RecipeComponent } from './features/recipe/recipe.component';
import { ShoppingComponent } from './features/shopping/shopping.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';

const routes: Routes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full' },
    {
        path: 'recipes', component: RecipeComponent, children: [
            { path: '', component: RecipeEmptyComponent },
            { path: 'create', component: RecipeCreateComponent },
            { path: ':id', component: RecipeDetailComponent },
            { path: ':id/edit', component: RecipeEditComponent },
        ]
    },
    { path: 'shopping', component: ShoppingComponent },
    { path: 'not-found', component: NotFoundComponent },
    { path: '**', component: NotFoundComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
