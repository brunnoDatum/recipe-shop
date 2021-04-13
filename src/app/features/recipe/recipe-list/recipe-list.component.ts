import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../../../model/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  @Output()
  public sendSelectedRecipe: EventEmitter<Recipe> = new EventEmitter<Recipe>();

  public recipes: Recipe[] = [];

  constructor() { }

  ngOnInit(): void {
    this.loadRecipes();
  }

  private loadRecipes(): void {
    this.recipes.push({ name: 'Recipe One', description: 'Recipe One description', imagePath: 'https://static.onecms.io/wp-content/uploads/sites/9/2020/03/19/birria-tacos-FT-RECIPE0420-1.jpg' });
    this.recipes.push({ name: 'Recipe Two', description: 'Recipe Two description', imagePath: 'https://d1e3z2jco40k3v.cloudfront.net/-/media/mccormick-us/recipes/mccormick/q/2000/quick_and_easy_french_toast_new_2000x1125.jpg?rev=9b2607d0dece40daa4b102d5d07a1880&vd=20200628T070902Z&hash=C5615934E26A451872F4DC1C9E10718A' });
  }

  public receiveSelectedRecipe(value: Recipe): void {
    this.sendSelectedRecipe.emit(value);
  }

}
