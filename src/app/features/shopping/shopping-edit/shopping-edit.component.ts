import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from '../../../model/ingredient.model';
import { ShoppingService } from '../services/shopping.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  public ingredientForm: FormGroup;
  public editMode = false;

  private subscription: Subscription;

  constructor(
    private fb: FormBuilder,
    private shoppingService: ShoppingService
  ) { }

  ngOnInit(): void {
    this.createIngredientForm();
    this.listenToEditIngredient();
  }

  private createIngredientForm(): void {
    this.ingredientForm = this.fb.group({
      id: [null],
      name: [null, Validators.required],
      quantity: [null, [Validators.required, Validators.min(1)]]
    });
  }

  private listenToEditIngredient(): void {
    this.subscription = this.shoppingService.selectedIngredient.subscribe(value => {
      this.editMode = true;
      this.ingredientForm.patchValue(value);
    });
  }

  public onSubmit(): void {

    if (this.editMode) {
      this.shoppingService.editIngredient(this.ingredientForm.getRawValue());
    } else {
      this.shoppingService.addIngredientToList(this.ingredientForm.getRawValue());
    }

    setTimeout(() => {
      this.clearForm();
    }, 0);
  }

  public checkValidity(control: FormControl): boolean {
    return control.invalid && (control.touched || control.dirty);
  }

  public clearForm(): void {
    this.editMode = false;
    this.ingredientForm.reset();
  }

  public deleteIngredient(): void {
    this.shoppingService.deleteIngredient(this.ingredientForm.getRawValue());
    this.clearForm();
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
