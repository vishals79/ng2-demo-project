import { Recipe } from '../recipe';
import { Ingredient } from '../../shared';

export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe("Grilled Cheese","Grilled Cheese","http://images.agoramedia.com/everydayhealth/gcms/4-steps-to-healthier-grilled-cheese-722x406.jpg?width=726",[
      new Ingredient("Bread",10),
      new Ingredient("Cheese",20)
    ]),
    new Recipe("Rosh Hashanah Chicken","Rosh Hashanah Chicken","http://s345780157.onlinehome.us/wp-content/uploads/2011/03/Rosh-Hashanah-chicken-with-apples.jpg",[])
  ]

  constructor() { }

  getRecipeList(){
    return this.recipes;
  }

  getRecipe(recipeIndex: number){
    return this.recipes[recipeIndex];
  }

  deleteRecipe(recipe: Recipe){
    this.recipes.splice(this.recipes.indexOf(recipe),1);
  }

}
