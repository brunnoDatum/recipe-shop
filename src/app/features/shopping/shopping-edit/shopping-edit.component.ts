import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Ingredient } from '../../../model/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {

  @Output()
  public sendNewIngredient: EventEmitter<Ingredient> = new EventEmitter<Ingredient>();

  public newIngredient: Ingredient;

  constructor() { }

  ngOnInit(): void {
    this.newIngredient = new Ingredient();
  }

  public onSubmit(): void {
    this.sendNewIngredient.emit(this.newIngredient);
    setTimeout(() => {
      this.newIngredient = new Ingredient();
    }, 0);
  }

}
