import { Component, OnInit } from '@angular/core';
import { Schema }    from '../schema';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.css']
})
export class QueryComponent{

  powers = ['App Dev', 'B2B',
  'Database', 'Innovation'];

model = new Schema('', '','', this.powers[0], '');

submitted = false;

onSubmit() { this.submitted = true; }

newForm() {
this.model = new Schema('','', '', '');
}
showFormControls(form: any) {
return form && form.controls['name'] &&
form.controls['name'].value; 
}
constructor(){

}
}
