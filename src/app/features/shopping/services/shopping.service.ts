import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Ingredient } from '../../../model/ingredient.model';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  public selectedIngredient: Subject<Ingredient> = new Subject<Ingredient>();

  private ingredientsSubject: BehaviorSubject<Ingredient[]> = new BehaviorSubject<Ingredient[]>([]);
  private ingredients: Ingredient[] = [
    { id: uuidv4(), name: 'Apple', quantity: 5 },
    { id: uuidv4(), name: 'Tomato', quantity: 10 }
  ];

  constructor() {
    this.loadIngredients();
  }

  private loadIngredients(): void {
    this.ingredientsSubject.next(this.ingredients);
  }

  public getIngredients(): BehaviorSubject<Ingredient[]> {
    return this.ingredientsSubject;
  }

  public setSelectedIngredient(value: Ingredient): void {
    this.selectedIngredient.next(value);
  }

  public editIngredient(value: Ingredient): void {
    const existingIngr = this.ingredients.find(ingr => ingr.id === value.id);
    if (existingIngr) {
      existingIngr.name = value.name;
      existingIngr.quantity = value.quantity;
    }
    this.ingredientsSubject.next(this.ingredients);
  }

  public addIngredientToList(value: Ingredient): void {
    const existingIngr = this.ingredients.find(ingr => ingr.id === value.id);
    if (existingIngr) {
      existingIngr.quantity += value.quantity;
    } else {
      value.id = uuidv4();
      this.ingredients.push(JSON.parse(JSON.stringify(value)));
    }
    this.ingredientsSubject.next(this.ingredients);
  }

  public addIngredientsToList(value: Ingredient[]): void {
    value.forEach(newIngr => {
      const existingIngr = this.ingredients.find(ingr => ingr.id === newIngr.id);
      if (existingIngr) {
        existingIngr.quantity += newIngr.quantity;
      } else {
        newIngr.id = uuidv4();
        this.ingredients.push(JSON.parse(JSON.stringify(newIngr)));
      }
    });
    this.ingredientsSubject.next(this.ingredients);
  }

  public deleteIngredient(value: Ingredient): void {
    const index = this.ingredients.findIndex(ingr => ingr.id === value.id);
    if (index >= 0) {
      this.ingredients.splice(index, 1);
    }
    this.ingredientsSubject.next(this.ingredients);
  }

}
