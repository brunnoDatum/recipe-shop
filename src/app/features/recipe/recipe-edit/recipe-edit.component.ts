import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Recipe } from '../../../model/recipe.model';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss']
})
export class RecipeEditComponent implements OnInit {

  public selectedRecipe: Recipe;

  constructor(
    private actRoute: ActivatedRoute,
    private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.actRoute.params.subscribe((params: Params) => {
      this.loadRecipe(+params.id);
    });
  }

  private loadRecipe(id: number): void {
    this.selectedRecipe = this.recipeService.getRecipe(id);
  }

}
