import { RecipeService } from './../../recipe-service';
import { Recipe } from './../../recipe.model';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input()
  private recipe:Recipe;

  constructor(private recipeService:RecipeService) { }

  ngOnInit() {
  }

  onSelectRecipe(){
    this.recipeService.selectedRecipe.emit(this.recipe);
  }

}
