import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public showRecipes = false;
  public showShopping = false;

  constructor() {

  }

  ngOnInit(): void {
    this.setDisplayContent({ showRecipes: true, showShopping: false });
  }

  public setDisplayContent(value: any): void {
    this.showRecipes = value.showRecipes;
    this.showShopping = value.showShopping;
  }

}
