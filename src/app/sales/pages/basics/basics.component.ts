import { Component } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent {

  nameLower: string = 'name';
  nameUpper: string = 'NAME';
  fullName: string = 'FUll NamE';

  date: Date = new Date();
}
