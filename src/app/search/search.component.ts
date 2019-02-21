import { Component, ViewChild } from '@angular/core';
import { SelectItem} from 'primeng/api';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  public searchText : string;
  public customerData : any;

  cars: SelectItem[];
constructor() {
this.cars = [
{ value: "car"},
{ value: 'audi'},
{ value: 'BMW'},
{ value: 'Fiat'},
{ value: 'Ford'},
{ value: 'Honda'},
{ value: 'Jaguar'},
{ value: 'Mercedes'}
];
} 

  ngOnInit() {
    this.customerData = [
      {"name": 'Anil kumar', "Age": 34},
      {"name": 'Sunil Kumar Singh', "Age": 28},
      {"name": 'Sushil Singh', "Age": 24},
      {"name": 'Aradhya Singh', "Age": 5},
      {"name": 'Reena Singh', "Age": 28},
      {"name": 'Alok Singh', "Age": 35},
      {"name": 'Dilip Singh', "Age": 34}];
  }
}
