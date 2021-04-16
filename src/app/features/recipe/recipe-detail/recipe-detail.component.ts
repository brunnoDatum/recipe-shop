import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../../../model/recipe.model';
import { ShoppingService } from '../../shopping/services/shopping.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {

  @Input()
  public selectedRecipe: Recipe;

  constructor(
    private shoppingService: ShoppingService
  ) { }

  ngOnInit(): void {
  }

  public addIngredientsToList(): void {
    this.shoppingService.addIngredientsToList(this.selectedRecipe.ingredients);
  }

}
