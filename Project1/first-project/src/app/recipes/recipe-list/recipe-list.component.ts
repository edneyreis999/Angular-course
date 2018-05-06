import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  
  private recipes: Recipe[] = [];

  constructor() { }

  ngOnInit() {
    let recipe = new Recipe('Test Recipe', 'It\'s just a recipe test', 'http://br.web.img2.acsta.net/newsv7/18/04/07/02/46/3329411.jpg');
    this.recipes.push(recipe);
  }

}
