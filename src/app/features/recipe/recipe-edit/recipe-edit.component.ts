import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../../../model/recipe.model';
import { RecipeService } from '../services/recipe.service';
import { v4 as uuidv4 } from 'uuid';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss']
})
export class RecipeEditComponent implements OnInit, OnDestroy {

  public selectedRecipe: Recipe;
  public recipeForm: FormGroup;

  private subscription: Subscription;

  constructor(
    private fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private recipeService: RecipeService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.actRoute.params.subscribe((params: Params) => {
      this.loadRecipe(params.id);
    });
  }

  private createRecipeForm(): void {
    this.recipeForm = this.fb.group({
      id: [null],
      name: [null, Validators.required],
      description: [null, Validators.required],
      imagePath: [null, Validators.required],
      ingredients: this.fb.array([])
    });
  }

  private loadRecipe(id: string): void {
    this.createRecipeForm();

    this.subscription = this.recipeService.getRecipe(id).subscribe(response => {

      this.selectedRecipe = response;

      this.recipeForm.patchValue(this.selectedRecipe);

      if (this.selectedRecipe?.ingredients) {

        this.selectedRecipe?.ingredients.forEach(ing => {
          (this.recipeForm.get('ingredients') as FormArray).push(
            this.fb.group({
              id: [ing.id, Validators.required],
              name: [ing.name, Validators.required],
              quantity: [ing.quantity, [Validators.required, Validators.min(1)]]
            })
          );
        });

      }
    });

  }

  public addIngredient(): void {
    (this.recipeForm.get('ingredients') as FormArray).push(
      this.fb.group({
        id: [uuidv4(), Validators.required],
        name: [null, Validators.required],
        quantity: [null, [Validators.required, Validators.min(1)]]
      })
    );
  }

  public removeItem(index: number): void {
    (this.recipeForm.get('ingredients') as FormArray).removeAt(index);
  }

  public checkValidity(control: FormControl): boolean {
    return control.invalid && (control.touched || control.dirty);
  }

  public clearForm(): void {
    this.recipeForm.reset();
  }

  public onSubmit(): void {
    this.recipeService.editRecipe(this.recipeForm.getRawValue());

    setTimeout(() => {
      this.clearForm();
      this.router.navigate([`/recipes/${this.selectedRecipe.id}`]);
    }, 0);
  }

  public deleteRecipe(): void {
    this.recipeService.deleteRecipe(this.selectedRecipe);
  }

  public getControlsAt(index: number): AbstractControl {
    return (this.recipeForm.get('ingredients') as FormArray).controls[index];
  }

  get controls(): AbstractControl[] {
    return (this.recipeForm.get('ingredients') as FormArray).controls;
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
