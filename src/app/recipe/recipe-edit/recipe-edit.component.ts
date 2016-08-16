import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormArray, FormGroup, FormControl, Validators, FormBuilder,
   REACTIVE_FORM_DIRECTIVES } from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from '../recipe-list';
import { Subscription } from 'rxjs/Rx';
import { Recipe } from '../recipe';

@Component({
  moduleId: module.id,
  selector: 'rb-recipe-edit',
  templateUrl: 'recipe-edit.component.html',
  styles: [],
  directives: [REACTIVE_FORM_DIRECTIVES]
})
export class RecipeEditComponent implements OnInit {

  private subscription: Subscription;
  private recipeIndex: number;
  private recipe: Recipe;
  private isNew = true;
  private recipeForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private recipeService: RecipeService,
              private formBuilder: FormBuilder,
              private router: Router) { }

  ngOnInit() { 
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        if(params.hasOwnProperty('id')){
          this.isNew = false;
          this.recipeIndex = +params['id'];
          this.recipe = this.recipeService.getRecipe(this.recipeIndex);
        }else{
          this.isNew = true;
          this.recipe = null;
        }
        this.initForm();
      }
    );
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  onSubmit(){
    const recipe = this.recipeForm.value;
    if(this.isNew){
      this.recipeService.addRecipe(recipe);
    }else{
      this.recipeService.editItem(this.recipe, recipe);
    }
    this.navigateBack();
  }

  onCancel(){
    this.navigateBack();
  }

  navigateBack(){
    this.router.navigate(['../']);
  }

  onAddItem(itemName: string, amount: string){
    (<FormArray>this.recipeForm.controls['ingredients']).push(
      new FormGroup({
        name: new FormControl(itemName, Validators.required),
        amount: new FormControl(amount,
            [Validators.required,
            Validators.pattern("\\d+")
            ])
      })
    );
  }

  onRemoveItem(index: number){
    (<FormArray>this.recipeForm.controls['ingredients']).removeAt(index);
  }


  initForm(){
    let name = '';
    let description = '';
    let imagePath = '';
    let ingredients = new FormArray([]);

    if(!this.isNew){
      for(let i = 0; i < this.recipe.ingredients.length; i++){
        ingredients.push(
          new FormGroup({
            name: new FormControl(this.recipe.ingredients[i].name, Validators.required),
            amount: new FormControl(this.recipe.ingredients[i].amount,
            [Validators.required,
            Validators.pattern("\\d+")
            ])
          })
        );
      }
      name = this.recipe.name;
      description = this.recipe.description;
      imagePath = this.recipe.imagePath;
    }

    this.recipeForm = this.formBuilder.group({
      name: [name, Validators.required],
      description: [description, Validators.required],
      imagePath: [imagePath, Validators.required],
      ingredients: ingredients
    })


  }

}