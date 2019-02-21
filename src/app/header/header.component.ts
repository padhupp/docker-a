
import { Component, ViewChild, ViewContainerRef } from '@angular/core'
import { MatDialog } from '@angular/material'
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
//import { ModalComponent } from '../modal/modal.component';

import { LoginComponent } from '../login/login.component'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @ViewChild('testOutlet', { read: ViewContainerRef })
  testOutlet!: ViewContainerRef;

  constructor(
    private modalService: NgbModal
  ) {
  }

 showDialog() {
    //console.log("In showDiaaalog method")
     this.modalService.open(LoginComponent);

  }

}


