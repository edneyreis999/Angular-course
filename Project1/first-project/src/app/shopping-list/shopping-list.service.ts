import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';

@Injectable()
export class ShoppingListService {
    private ingredientsEmitter = new EventEmitter<Ingredient[]>();
    private ingredients: Ingredient[] = [];

    constructor() {
        const ingredient = new Ingredient('Maça', 2);
        const ingredient2 = new Ingredient('Tomate', 5);

        this.ingredients.push(ingredient);
        this.ingredients.push(ingredient2);
    }

    
    public getIngredientsEmitter():EventEmitter<Ingredient[]> {
        return this.ingredientsEmitter;
    }
    public getIngredients():Ingredient[] {
        return this.ingredients.slice();
    }
    public addIngredient(ingredient:Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientsEmitter.emit(this.ingredients);
    }
    public removeIngredient(ingredient:Ingredient){
        let index = this.ingredients.indexOf(ingredient);

        this.ingredients.splice(index,1);
    }
}