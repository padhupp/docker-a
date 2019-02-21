import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent{

  public filterFlag = "P";
  counter: number = 0;
  data = [
    {
      name: 'John',
      age: 35,
      job: 'teacher',
      location: 'MO'
    },
    {
      name: 'Steve',
      age: 21,
      job: 'driver',
      location: 'LA'
    },
    {
      name: 'Mary',
      age: 50,
      job: 'developer',
      location: 'NC'
    },
    {
      name: 'James',
      age: 25,
      job: 'unemployed',
      location: 'NY'
    },
    {
      name: 'Josh',
      age: 30,
      job: 'teacher',
      location: 'MO'
    },
    {
      name: 'Stella',
      age: 22,
      job: 'dev',
      location: 'LA'
    },
    {
      name: 'Maya',
      age: 119,
      job: 'db',
      location: 'No'
    },
    {
      name: 'Jasmine',
      age: 25,
      job: 'employed',
      location: 'Np'
    }
   ];
   isFiltered: boolean = false;

   categoryChange(e) {
       this.filterFlag = "F";
   }
  onClick() {
     this.counter++;
  }

}
