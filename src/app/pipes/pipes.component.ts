import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {

  gender: string = 'male';
  inviteMap: any = {'male': 'Invite him.', 'female': 'Invite her.', 'other': 'Invite them.'};
  object: Object = {foo: 'bar', baz: 'qux', nested: {xyz: 3, numbers: [1, 2, 3, 4, 5]}};
  a: number = 0.259;
  e: number = 2.718281828459045;
  birthday = new Date(2019,1,7);
  greeting: Promise<string>|null = null;
  arrived: boolean = false;
 
  private resolve: Function|null = null;
 
  constructor() { this.reset(); }
 
  reset() {
    this.arrived = false;
    this.greeting = new Promise<string>((resolve, reject) => { this.resolve = resolve; });
  }
 
  clicked() {
    if (this.arrived) {
      this.reset();
    } else {
      this.resolve !('hi there!');
      this.arrived = true;
    }
  }
  
}
