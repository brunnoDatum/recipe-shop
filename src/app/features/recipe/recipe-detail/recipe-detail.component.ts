import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Recipe } from '../../../model/recipe.model';
import { ShoppingService } from '../../shopping/services/shopping.service';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit, OnDestroy {

  public selectedRecipe: Recipe;

  constructor(
    private actRoute: ActivatedRoute,
    private recipeService: RecipeService,
    private shoppingService: ShoppingService
  ) { }

  ngOnInit(): void {

    this.actRoute.params.subscribe((params: Params) => {
      this.loadRecipe(+params.id);
    });

  }

  private loadRecipe(id: number): void {
    this.selectedRecipe = this.recipeService.getRecipe(id);
  }

  public addIngredientsToList(): void {
    this.shoppingService.addIngredientsToList(this.selectedRecipe.ingredients);
  }

  ngOnDestroy(): void {
  }

}
