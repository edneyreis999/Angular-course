import { Recipe } from './recipe.model';
import { Injectable, OnInit, EventEmitter } from '@angular/core';

@Injectable()
export class RecipeService{
    public selectedRecipe = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [];

    constructor() { 
        let recipe = new Recipe('Test Recipe', 'It\'s just a recipe test', 'http://br.web.img2.acsta.net/newsv7/18/04/07/02/46/3329411.jpg');
        this.recipes.push(recipe);
        let recipe2 = new Recipe('Test Recipe 2', 'It\'s just a recipe2 test', 'http://br.web.img2.acsta.net/newsv7/18/04/07/02/46/3329411.jpg');
        this.recipes.push(recipe2);
    }

    public getRecipes(): Recipe[] {
        console.log(this.recipes);
        return this.recipes.slice();
    }

    public getRecipe(index:number){
        return this.recipes[index];
    }
}