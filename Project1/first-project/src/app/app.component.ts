import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private loadedFeature = 'recipes';
  
  onNavgate(feature: string){
    this.loadedFeature = feature;
    console.log(this.loadedFeature);
  }
}
