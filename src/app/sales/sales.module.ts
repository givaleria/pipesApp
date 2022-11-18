import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumbersComponent } from './pages/numbers/numbers.component';
import { NotCommonComponent } from './pages/not-common/not-common.component';
import { BasicsComponent } from './pages/basics/basics.component';
import { OrderComponent } from './pages/order/order.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { UppercasesPipe } from './pipes/uppercases.pipe';
import { FlyPipe } from './pipes/fly.pipe';
import { OrderPipe } from './pipes/order.pipe';



@NgModule({
  declarations: [
    NumbersComponent,
    NotCommonComponent,
    BasicsComponent,
    OrderComponent,
    UppercasesPipe,
    FlyPipe,
    OrderPipe
  ],
  exports: [
    NumbersComponent,
    NotCommonComponent,
    BasicsComponent,
    OrderComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ]
})
export class SalesModule { }
