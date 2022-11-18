import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  items: MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Angular Pipes',
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'Texts and dates',
            icon: 'pi pi-book',
            routerLink: ['']
          },
          {
            label: 'Numbers',
            icon: 'pi pi-dollar',
            routerLink: ['numbers']
          },
          {
            label: 'Not common',
            icon: 'pi pi-globe',
            routerLink: ['not-common']
          }
        ]
      },
      {
        label: 'Custom Pipes',
        icon: 'pi pi-cog',
        routerLink: ['order']
      }
    ];
  }

}
