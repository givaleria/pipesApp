import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/sales.interfaces';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styles: [
  ]
})
export class OrderComponent {

  onUppercases: boolean = true;

  orderBy: string = '';

  heroes: Heroe[] = [
    {
      name: 'Dr. Strange',
      fly: true,
      color: Color.green
    },
    {
      name: 'Spiderman',
      fly: false,
      color: Color.blue
    },
    {
      name: 'Ironman',
      fly: true,
      color: Color.red
    },
    {
      name: 'Deadpool',
      fly: false,
      color: Color.black
    },
    {
      name: 'Thor',
      fly: true,
      color: Color.red
    }
  ];

  change() {
    this.onUppercases = !this.onUppercases;
  }

  changeOrder(value: string) {
    this.orderBy = value;
  }

}
