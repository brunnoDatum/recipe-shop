import { EventEmitter, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Ingredient } from '../../../model/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  private ingredients: Ingredient[] = [];

  constructor() {
    this.loadIngredients();
  }

  private loadIngredients(): void {
    this.ingredients.push({ name: 'Apple', quantity: 5 });
    this.ingredients.push({ name: 'Tomato', quantity: 10 });
  }

  public getIngredients(): Observable<Ingredient[]> {
    return of(this.ingredients);
  }

  public addIngredientToList(value: Ingredient): void {
    const existingIngr = this.ingredients.find(ingr => ingr.name === value.name);
    if (existingIngr) {
      existingIngr.quantity += value.quantity;
    } else {
      this.ingredients.push(JSON.parse(JSON.stringify(value)));
    }
  }

  public addIngredientsToList(value: Ingredient[]): void {
    value.forEach(newIngr => {
      const existingIngr = this.ingredients.find(ingr => ingr.name === newIngr.name);
      if (existingIngr) {
        existingIngr.quantity += newIngr.quantity;
      } else {
        this.ingredients.push(JSON.parse(JSON.stringify(newIngr)));
      }
    });
  }

}
