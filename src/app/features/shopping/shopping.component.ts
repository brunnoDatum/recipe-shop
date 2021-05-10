import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Ingredient } from '../../model/ingredient.model';
import { ShoppingService } from './services/shopping.service';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.scss']
})
export class ShoppingComponent implements OnInit, OnDestroy {

  public ingredients: Ingredient[];

  private subscription: Subscription;

  constructor(
    private shoppingService: ShoppingService
  ) { }

  ngOnInit(): void {
    this.loadIngredients();
  }

  private loadIngredients(): void {
    this.subscription = this.shoppingService.getIngredients().subscribe(response => {
      this.ingredients = response;
    });
  }

  public editItem(item: Ingredient): void {
    this.shoppingService.setSelectedIngredient(item);
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
