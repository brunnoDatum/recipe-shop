import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../model/ingredient.model';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.scss']
})
export class ShoppingComponent implements OnInit {

  public ingredients: Ingredient[] = [];

  constructor() { }

  ngOnInit(): void {
    this.loadIngredients();
  }

  private loadIngredients(): void {
    this.ingredients.push({ name: 'Apple', quantity: 5 });
    this.ingredients.push({ name: 'Tomato', quantity: 10 });
  }

}
