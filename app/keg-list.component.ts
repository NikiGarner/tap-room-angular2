import { Component, EventEmitter } from 'angular2/core';
import { KegComponent } from './keg.component';
import { Keg } from './keg.model';
import { EditKegDetailsComponent } from './edit-keg-details.component';
import { NewKegComponent } from './new-keg.component';
import {DonePipe} from './tapped.pipe';

@Component({
  selector: 'keg-list',
  inputs: ['kegList'],
  outputs: ['onKegSelect'],
  pipes: [DonePipe],
  directives: [KegComponent, EditKegDetailsComponent, NewKegComponent],
  template: `
  <select (change)="onChange($event.target.value)" class="filter">
    <option value="all">Show All Kegs</option>
    <option value="done">Show all Tapped</option>
    <option value="notDone" selected="selected">Show untapped kegs</option>
  </select>
  <keg-display *ngFor="#currentKeg of kegList | done:filterDone"
    (click)="kegClicked(currentKeg)"
    [class.selected]="currentKeg === selectedKeg"
    [keg]="currentKeg">
  </keg-display>
  <edit-keg-details *ngIf="selectedKeg" [keg]="selectedKeg">
  </edit-keg-details>
  <new-keg (onSubmitNewKeg)="createKeg($event)"></new-keg>
  `
})
export class KegListComponent {
  public kegList: Keg[];
  public onKegSelect: EventEmitter<Keg>;
  public selectedKeg: Keg;
  public filterDone: string = "notDone";
  constructor() {
    this.onKegSelect = new EventEmitter();
  }
  kegClicked(clickedKeg: Keg): void {
    this.selectedKeg = clickedKeg;
    this.onKegSelect.emit(clickedKeg);
  }
  createKeg(description: string, brand: string): void {
      name = description[0];
      brand = description[1];
      this.kegList.push(
        new Keg(name, brand, this.kegList.length)
    );
  }
  onChange(filterOption) {
    this.filterDone = filterOption;
  }
}
