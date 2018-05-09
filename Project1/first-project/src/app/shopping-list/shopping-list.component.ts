import { Ingredient } from './../shared/ingredients.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  private ingredients: Ingredient[] = [];

  constructor() { }

  ngOnInit() {
    const ingredient = new Ingredient('Maça', 2);
    const ingredient2 = new Ingredient('Tomate', 5);

    this.ingredients.push(ingredient);
    this.ingredients.push(ingredient2);
  }

  onIngredientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }

}
