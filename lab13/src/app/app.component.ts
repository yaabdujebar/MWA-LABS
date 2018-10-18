import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-newComp [items]="arrayItems"></app-newComp>
  `,
  styles: []
})
export class AppComponent {

  private arrayItems: Array<object>;

  constructor() {
    this.arrayItems = [{ name: 'eti', color: 'red' }, 
    { name: 'mamie', color: 'yellow' }, 
    { name: 'semi', color: 'green' }, 
    { name: 'yah', color: 'blue' }];
  }

}
