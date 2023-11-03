import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { OrderComponent } from './order.component';
import { SharedModule } from 'src/app/shared';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { CalculateTotalPricePipe, GetUserNamePipe } from '@softech/pipes';
 

@NgModule({
  declarations: [
    OrderComponent,
    OrderDetailsComponent,
    GetUserNamePipe,
    CalculateTotalPricePipe
  ],
  imports: [
    CommonModule,
    OrderRoutingModule,
    SharedModule
  ]
})
export class OrderModule { }
