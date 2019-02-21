import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../auth.service';
import { ShowHideInputDirective } from '../show-hide-input.directive';
class User{
  name:String;
  pass:String;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  message: string;
  returnUrl: string;
  // password = "secret";
  show = false;
  public user: User = new User();

  @ViewChild(ShowHideInputDirective) input: ShowHideInputDirective;
  constructor(  private formBuilder: FormBuilder, private router: Router,private service: AuthService,private modalService: NgbActiveModal) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      userid: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.returnUrl = '/about';
  }


  get f() { return this.loginForm.controls; }

  
  login() {
    this.service.doLogin(this.f.userid.value,this.f.password.value);
    //window.location.reload();
    this.modalService.close(LoginComponent);   
  }

  toggleShow()
{
console.log("In toggleshow");
this.show = !this.show;
console.log(this.input); //undefined
if (this.show){
this.input.changeType("text");
}
else {
this.input.changeType("password");
}
}
}
