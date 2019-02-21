import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';

@Component({
  selector: 'app-jsonmodel',
  templateUrl: './jsonmodel.component.html',
  styleUrls: ['./jsonmodel.component.css']
})
export class JsonmodelComponent{

  myForm: FormGroup;
  constructor(private fb: FormBuilder) { 
      this.myForm = fb.group({
          'name' : [null, Validators.compose([Validators.required])],
          'pass':[null, Validators.compose([Validators.required])],
          'area' : [],
          'surname':[],
          'gender':[],
          items:this.fb.array([this.buildItem('')])
      });
      
  }
  submit() {
    console.log("Reactive Form submitted: ", this.myForm)
  }

  buildItem(val: string) {
    return new FormGroup({
      empno: new FormControl(val),
      fullname: new FormControl()
    })
  }


}
