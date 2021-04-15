import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Recipe, RecipeListResponse } from '../../../model/recipe.model';
import { environment } from '../../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(
    private http: HttpClient
  ) {
  }

  public loadRandomRecipes(): Observable<RecipeListResponse> {
    return this.http.get<RecipeListResponse>(`${environment.apiUrl}/recipes/random?number=1&tags=vegetarian%2Cdessert`);
  }

}
