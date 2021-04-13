import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../model/recipe.model';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {

  public selectedRecipe: Recipe;

  constructor() { }

  ngOnInit(): void {
  }

  public receiveSelectedRecipe(value: Recipe): void {
    this.selectedRecipe = value;
  }

}
