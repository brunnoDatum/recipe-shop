import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Ingredient } from '../../model/ingredient.model';
import { ShoppingService } from './services/shopping.service';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.scss']
})
export class ShoppingComponent implements OnInit {

  public ingredients$: Observable<Ingredient[]>;

  constructor(
    private shoppingService: ShoppingService
  ) { }

  ngOnInit(): void {
    this.loadIngredients();
  }

  private loadIngredients(): void {
    this.ingredients$ = this.shoppingService.getIngredients();
  }

}
