import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input()
  public showRecipes: boolean;

  @Input()
  public showShopping: boolean;

  @Output()
  public sendMenuDisplay: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  public enableRecipes(): void {
    this.showRecipes = true;
    this.showShopping = false;
    this.sendMenuDisplay.emit({ showRecipes: this.showRecipes, showShopping: this.showShopping });
  }

  public enableShopping(): void {
    this.showRecipes = false;
    this.showShopping = true;
    this.sendMenuDisplay.emit({ showRecipes: this.showRecipes, showShopping: this.showShopping });
  }

}
