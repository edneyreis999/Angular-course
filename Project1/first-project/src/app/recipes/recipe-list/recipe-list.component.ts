import { Recipe } from './../recipe.model';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  
  private recipes: Recipe[] = [];
  @Output()
  private selectedRecipe = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
    let recipe = new Recipe('Test Recipe', 'It\'s just a recipe test', 'http://br.web.img2.acsta.net/newsv7/18/04/07/02/46/3329411.jpg');
    this.recipes.push(recipe);
    let recipe2 = new Recipe('Test Recipe 2', 'It\'s just a recipe2 test', 'http://br.web.img2.acsta.net/newsv7/18/04/07/02/46/3329411.jpg');
    this.recipes.push(recipe2);
  }

  showRecipeDetail(recipe:Recipe){
    console.log(recipe);
    this.selectedRecipe.emit(recipe);
  }

}
