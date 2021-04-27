import { EventEmitter, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Recipe } from '../../../model/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private recipes: Recipe[] = [];

  constructor() {
    this.loadRecipes();
  }

  private loadRecipes(): void {
    this.recipes.push({
      id: 1,
      name: 'Recipe One',
      description: 'Recipe One description',
      imagePath: 'https://static.onecms.io/wp-content/uploads/sites/9/2020/03/19/birria-tacos-FT-RECIPE0420-1.jpg',
      ingredients: [
        { name: 'Cheese', quantity: 2 },
        { name: 'Flour', quantity: 1 },
      ]
    });
    this.recipes.push({
      id: 2,
      name: 'Recipe Two',
      description: 'Recipe Two description',
      imagePath: 'https://d1e3z2jco40k3v.cloudfront.net/-/media/mccormick-us/recipes/mccormick/q/2000/quick_and_easy_french_toast_new_2000x1125.jpg?rev=9b2607d0dece40daa4b102d5d07a1880&vd=20200628T070902Z&hash=C5615934E26A451872F4DC1C9E10718A',
      ingredients: [
        { name: 'White Rice', quantity: 1 },
        { name: 'Corn Syrup', quantity: 1 },
      ]
    });
  }

  public getRecipes(): Observable<Recipe[]> {
    return of(this.recipes);
  }

  public getRecipe(id: number): Recipe {
    return this.recipes.find(rec => rec.id === id);
  }

}
