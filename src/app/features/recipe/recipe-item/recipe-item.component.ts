import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../../../model/recipe.model';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {

  @Input()
  public recipe: Recipe;

  constructor(
    private recipeService: RecipeService
  ) { }

  ngOnInit(): void {
  }

  public selectRecipe(): void {
    this.recipeService.onSelectRecipe.emit(this.recipe);
  }

}
