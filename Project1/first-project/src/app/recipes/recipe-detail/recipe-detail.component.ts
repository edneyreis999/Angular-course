import { RecipeService } from './../recipe-service';
import { Recipe } from './../recipe.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  private id:number;
  private recipe:Recipe;
  
  constructor(private route: ActivatedRoute, private router:Router, private recipeService:RecipeService) { }

  ngOnInit() {
    this.route.params.subscribe((params:Params) =>{
      this.id = +params['id'];
      this.recipe = this.recipeService.getRecipe(this.id);
    })
  }

  onEditRecipe(){
    this.router.navigate(['../', `edit`, this.id], {relativeTo: this.route});
  }

}
