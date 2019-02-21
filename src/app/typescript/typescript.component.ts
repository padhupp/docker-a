import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-typescript',
  templateUrl: './typescript.component.html',
  styleUrls: ['./typescript.component.css']
})

export class TypescriptComponent implements OnInit {

    

    constructor() { console.log("cunstructor") }

    ngOnInit() {

    console.log("I'm initialised");
    obj.greet();
    }
    greet():void {
    console.log("method")
    function disp_details(id, name, mail_id) {
      console.log("ID:", id);
      console.log("Name", name);
    
      if (mail_id != undefined)
        console.log("Email Id", mail_id);
    }
    disp_details(111, "seshu", "smandava@miraclesoft.com");
    }

}

var customer:IPerson = { 
  firstName:"Miracle",
  lastName:"App Dev", 
  sayHi: ():string =>{return "Hi there"} 
} 

console.log("Customer Object ") 
console.log(customer.firstName) 
console.log(customer.lastName) 
console.log(customer.sayHi())  

 
var obj = new TypescriptComponent();
obj.greet();
var name:string = "John"; 
var score1:number = 50;
var score2:number = 42.50
var sum = score1 + score2 
console.log("name"+name) 
console.log("first score: "+score1) 
console.log("second score: "+score2) 
console.log("sum of the scores: "+sum)
var n:number = 5 
while(n > 5) { 
   console.log("Entered while") 
} 
do { 
   console.log("Entered do…while") 
} 
while(n>5)

interface IPerson { 
  firstName:string, 
  lastName:string, 
  sayHi: ()=>string 
} 



