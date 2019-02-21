import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import decode from 'jwt-decode';
import { LoginComponent } from './login/login.component';


@Injectable()
export class AuthService {
  static Login(): void {
    localStorage.setItem('token', `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE1MzMyNzM5NjksImV4cCI6MTU2NDgxMDAwNSwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoiVGVzdCBHdWFyZCIsInVzZXJuYW1lIjoic2VzaHUiLCJwYXNzIjoic2VzaHUxMjMifQ.XER9F0f0n8jC9i9wQVXY224LFRiJtyk9YtNw11mZRGw`);
  }
  constructor(private http: HttpClient,private router: Router) {
    AuthService.Login();
   }

  isAuthenticated = false;

  /*doLogin(name:string,pass:String) {

    if (name === 'seshu' && pass === '12345') {
      this.isAuthenticated = true;
      console.log('sucess');
    //  this.router.navigate(['/form']);

    } else {
      console.log('Auth Failed');
    }
  }*/

  doLogin(name:string,pass:String){
    if (decode(localStorage.getItem('token')).username == name && decode(localStorage.getItem('token')).pass == pass) {
      this.isAuthenticated = true;
      console.log('sucess');
    }
    else{
    console.log('failed');
    this.isAuthenticated = false;
    }
  }

}
