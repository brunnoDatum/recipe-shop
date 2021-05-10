import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';
import { Recipe } from '../../../model/recipe.model';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit, OnDestroy {

  public recipes: Recipe[];

  private subscription: Subscription;

  constructor(
    private recipeService: RecipeService
  ) { }

  ngOnInit(): void {
    this.loadRecipes();
  }

  private loadRecipes(): void {
    this.subscription = this.recipeService.getRecipes().subscribe(resp => {
      this.recipes = resp;
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }


}
