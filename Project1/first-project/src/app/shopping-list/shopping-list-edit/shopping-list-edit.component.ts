import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {

  @ViewChild('inputName')
  private nameInputRef:ElementRef;
  @ViewChild('inputAmount')
  private amountInputRef:ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onAddItem(inputName, inputAmount){
    console.log(this.nameInputRef.nativeElement.value);
    console.log(this.amountInputRef.nativeElement.value);
  }
}
