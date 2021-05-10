import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RecipeService } from '../services/recipe.service';
import { v4 as uuidv4 } from 'uuid';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-create',
  templateUrl: './recipe-create.component.html',
  styleUrls: ['./recipe-create.component.scss']
})
export class RecipeCreateComponent implements OnInit {

  public recipeForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private recipeService: RecipeService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.createRecipeForm();
  }

  private createRecipeForm(): void {
    this.recipeForm = this.fb.group({
      id: [uuidv4(), Validators.required],
      name: [null, Validators.required],
      description: [null, Validators.required],
      imagePath: [null, Validators.required],
      ingredients: this.fb.array([])
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
    this.recipeService.addRecipe(this.recipeForm.getRawValue());

    setTimeout(() => {
      this.clearForm();
      this.router.navigate([`/recipes`]);
    }, 0);
  }

  public getControlsAt(index: number): AbstractControl {
    return (this.recipeForm.get('ingredients') as FormArray).controls[index];
  }

  get controls(): AbstractControl[] {
    return (this.recipeForm.get('ingredients') as FormArray).controls;
  }

}
