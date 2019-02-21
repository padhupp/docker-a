import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-functions',
  templateUrl: './functions.component.html',
  styleUrls: ['./functions.component.css']
})
export class FunctionsComponent {
  
  myadd:Number;
  constructor(){
    
  }
 x:number;y:number;
 //Named functions
  Named(x,y){
   console.log(x+y);
 }
 //function with declaration types at parameters
 NamedParamDec(s:number=10,z:number=5){
     console.log(s-z); 
 }
 //Anonymous function
 myAdd: (baseValue: number, increment: number) => number =(x, y)=> { return x + y; }
 //optional parameters
  buildName(firstName: string, lastName?: string) {
  if (lastName)
       console.log(firstName + " " + lastName);
  else
      console.log(firstName);
  }
  //predefined with call parameters
  buildNameWithParam(firstName: string, lastName = "company") {
    console.log(firstName + " " + lastName);
  }
  buildRestParam(firstName: string, ...restOfName: string[]) {
    console.log(firstName + " " + restOfName.join(" "));
  }
  //arrow function
  add=(a,b)=>{ return a+b ;}
  
}

var obj =new FunctionsComponent();
obj.Named(2,6);
obj.buildName("seshu","mandava");
obj.buildName("seshgeri");
obj.NamedParamDec();
obj.buildNameWithParam("Miracle",undefined);
obj.buildRestParam("seshu", "mandava", "software", "employee");
console.log(obj.add(1,2));
console.log(obj.myAdd(3,3));
