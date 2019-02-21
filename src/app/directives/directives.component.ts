import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {

  name: string = " Component ";
  Id: string = " 1234 ";

  isBold: boolean = true;    
    fontSize: number = 30;    
    isItalic: boolean = true;    
    
    MyStyle() {    
        let mystyles = {    
            'font-weight': this.isBold ? 'bold' : 'normal',    
            'font-style': this.isItalic ? 'italic' : 'normal',    
            'font-size.px': this.fontSize    
        };    
    
        return mystyles;    
    } 
    inpvalue: number = 3; 

}
