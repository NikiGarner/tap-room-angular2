import {Component, EventEmitter} from 'angular2/core';
import {Keg} from './keg.model';

@Component({
  selector: 'new-keg',
  outputs: ['onSubmitNewKeg'],
  template: `
  <div class="keg-form">
    <span class="kegInput">
    <h3>Create Keg:</h3>
    <input placeholder="Description" class="col-sm-8 input-lg" #newDescription>
    </span>
    <span class="brandInput">
    <h3>Create Brand:</h3>
    <input placeholder="Brand" class="col-sm-8 input-lg" #newBrand>
    </span>
    <span class="button">
    <button (click)="addKeg(newDescription, newBrand)" class="btn-success btn-lg add-button">Add</button>
    </span>
  </div>
  `
})
export class NewKegComponent {
  public onSubmitNewKeg: EventEmitter<String[]>;
  constructor(){
    this.onSubmitNewKeg = new EventEmitter();
  }
  addKeg(userDescription: HTMLInputElement, userBrand: HTMLInputElement){
    this.onSubmitNewKeg.emit([userDescription.value, userBrand.value]);
    userDescription.value = "";
    userBrand.value="";
  }
}
