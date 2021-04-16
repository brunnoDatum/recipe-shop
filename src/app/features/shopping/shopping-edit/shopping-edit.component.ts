import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Ingredient } from '../../../model/ingredient.model';
import { ShoppingService } from '../services/shopping.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {

  public newIngredient: Ingredient;

  constructor(
    private shoppingService: ShoppingService
  ) { }

  ngOnInit(): void {
    this.newIngredient = new Ingredient();
  }

  public onSubmit(): void {
    this.shoppingService.addIngredientToList(this.newIngredient);
    setTimeout(() => {
      this.newIngredient = new Ingredient();
    }, 0);
  }

}
