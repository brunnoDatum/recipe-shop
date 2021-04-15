import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Recipe } from '../../../model/recipe.model';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit, OnDestroy {

  @Output()
  public sendSelectedRecipe: EventEmitter<Recipe> = new EventEmitter<Recipe>();

  public recipes: Recipe[];

  private subscription: Subscription;

  constructor(
    private recipeService: RecipeService
  ) { }

  ngOnInit(): void {
    this.loadRecipes();
  }

  private loadRecipes(): void {

    this.subscription = this.recipeService.loadRandomRecipes().subscribe(response => {
      this.recipes = response?.recipes ? response.recipes : [];
    }, error => {

    });

  }

  public receiveSelectedRecipe(value: Recipe): void {
    this.sendSelectedRecipe.emit(value);
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }


}
