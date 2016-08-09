import { Component, EventEmitter } from 'angular2/core';
import { KegListComponent } from './keg-list.component';
import { Keg } from './keg.model';

@Component({
  selector: 'my-app',
  directives: [KegListComponent],
  template: `
    <div class="container">
      <h1>Keg List</h1>
      <keg-list
        [kegList]="kegs"
        (onKegSelect)="kegWasSelected($event)">
      </keg-list>
    <div>
  `
})
export class AppComponent {
  public kegs: Keg[];
  constructor(){
    this.kegs = [
      new Keg("Uinta Pils Small Batch Pilsner", "Pilsner", 0),
      new Keg("Knee Deep Lupulin River IIPA", "IPA", 1),
      new Keg("Alameda Eccentric Crank Belgian-Style Pale Ale", "Pale Ale", 2),
      new Keg("Fremont Coffee Cinnamon BBomb 2015 Strong Ale", "Strong Ale", 3)
    ];
  }
  kegWasSelected(clickedKeg: Keg): void {
    console.log('parent', clickedKeg);
  }
}
