import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import { LoginComponent } from './login/login.component';
import {  ViewChild, ViewContainerRef } from '@angular/core';
import {NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Injectable()
export class AuthGuardService implements CanActivate {

  @ViewChild('testOutlet', { read: ViewContainerRef })
  testOutlet!: ViewContainerRef;

  constructor(public auth: AuthService, public router: Router,private modalService: NgbModal) {}

  canActivate(): boolean {
    if (!this.auth.isAuthenticated) {
     this.modalService.open(LoginComponent);
      return false;
    }
    return true;
  }

}



