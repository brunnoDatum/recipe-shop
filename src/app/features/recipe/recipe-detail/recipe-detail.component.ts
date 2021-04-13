import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../../../model/recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {

  @Input()
  public selectedRecipe: Recipe;

  constructor() { }

  ngOnInit(): void {
  }

}
