import { Component } from '@angular/core';
import { rejects } from 'assert';
import { interval } from 'rxjs';

@Component({
  selector: 'app-not-common',
  templateUrl: './not-common.component.html',
  styles: [
  ]
})
export class NotCommonComponent {

  // i18nSelect
  name: string = 'Faye';
  genre: string = 'female';

  inviteMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  }

  // i18nPlural
  customers: string[] = ['Atreus', 'Faye', 'Skoll', 'Freya', 'Fenrir', 'Hati'];

  customersMap = {
    '=0': 'have no customers',
    '=1': 'have 1 customer',
    'other': 'have # customers'
  }


  changeCustomer() {
    this.name = 'Atreus';
    this.genre = 'male'
  }

  deleteCustomer() {
    this.customers.pop();
  }

  // KeyValue
  person = {
    name: 'Loki',
    age: 17,
    address: 'Los Angeles, USA'
  }

  // Json
  heroes = [
    {
      name: 'Dr. Strange',
      fly: true
    },
    {
      name: 'Spiderman',
      fly: false
    },
    {
      name: 'Ironman',
      fly: true
    }
  ];

  // Async
  myObservable = interval(1000);

  valuePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('End of Promise')
    }, 3500);
  });

}
