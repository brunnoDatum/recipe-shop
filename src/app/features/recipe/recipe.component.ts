import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Recipe } from '../../model/recipe.model';
import { RecipeService } from './services/recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit, OnDestroy {

  public selectedRecipe: Recipe;

  private subscription: Subscription;

  constructor(
    private recipeService: RecipeService
  ) { }

  ngOnInit(): void {
    this.listenToSelectedRecipe();
  }

  private listenToSelectedRecipe(): void {
    this.subscription = this.recipeService.onSelectRecipe.subscribe(value => {
      this.selectedRecipe = value;
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
