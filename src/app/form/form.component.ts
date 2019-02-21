import { Component, OnInit } from '@angular/core';
import { Schema }    from '../schema';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
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
  constructor(private http: HttpClient){
  }
}
