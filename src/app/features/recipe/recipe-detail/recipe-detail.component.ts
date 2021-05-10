import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
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

  private subscription: Subscription;

  constructor(
    private actRoute: ActivatedRoute,
    private recipeService: RecipeService,
    private shoppingService: ShoppingService
  ) { }

  ngOnInit(): void {

    this.actRoute.params.subscribe((params: Params) => {
      this.loadRecipe(params.id);
    });

  }

  private loadRecipe(id: string): void {
    this.subscription = this.recipeService.getRecipe(id).subscribe(response => {
      this.selectedRecipe = response;
    });
  }

  public addIngredientsToList(): void {
    this.shoppingService.addIngredientsToList(this.selectedRecipe.ingredients);
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
