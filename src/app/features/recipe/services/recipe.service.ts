import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Recipe } from '../../../model/recipe.model';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private recipesSubject: BehaviorSubject<Recipe[]> = new BehaviorSubject<Recipe[]>([]);
  private recipes: Recipe[] = [
    {
      id: uuidv4(),
      name: 'Recipe One',
      description: 'Recipe One description',
      imagePath: 'https://static.onecms.io/wp-content/uploads/sites/9/2020/03/19/birria-tacos-FT-RECIPE0420-1.jpg',
      ingredients: [
        { id: uuidv4(), name: 'Cheese', quantity: 2 },
        { id: uuidv4(), name: 'Flour', quantity: 1 },
      ]
    },
    {
      id: uuidv4(),
      name: 'Recipe Two',
      description: 'Recipe Two description',
      imagePath: 'https://d1e3z2jco40k3v.cloudfront.net/-/media/mccormick-us/recipes/mccormick/q/2000/quick_and_easy_french_toast_new_2000x1125.jpg?rev=9b2607d0dece40daa4b102d5d07a1880&vd=20200628T070902Z&hash=C5615934E26A451872F4DC1C9E10718A',
      ingredients: [
        { id: uuidv4(), name: 'White Rice', quantity: 1 },
        { id: uuidv4(), name: 'Corn Syrup', quantity: 1 },
      ]
    }
  ];

  constructor() {
    this.loadRecipes();
  }

  private loadRecipes(): void {
    this.recipesSubject.next(this.recipes);
  }

  public getRecipe(id: string): BehaviorSubject<Recipe> {
    const recipe = this.recipes.find(rec => rec.id === id);
    return new BehaviorSubject<Recipe>(recipe);
  }

  public getRecipes(): BehaviorSubject<Recipe[]> {
    return this.recipesSubject;
  }

  public editRecipe(value: Recipe): void {
    const existingIngr = this.recipes.find(rec => rec.id === value.id);
    if (existingIngr) {
      existingIngr.name = value.name;
      existingIngr.description = value.description;
      existingIngr.imagePath = value.imagePath;
      existingIngr.ingredients = value.ingredients;
    }
    this.recipesSubject.next(this.recipes);
  }

  public addRecipe(value: Recipe): void {
    this.recipes.push(value);
    this.recipesSubject.next(this.recipes);
  }

  public deleteRecipe(value: Recipe): void {
    const index = this.recipes.findIndex(rec => rec.id === value.id);
    if (index >= 0) {
      this.recipes.splice(index, 1);
    }
    this.recipesSubject.next(this.recipes);
  }

}
