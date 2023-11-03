import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderApiService } from '@softech/apis';
import { Order } from '@softech/shared-interfaces';
import { Observable, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {
  private orderService = inject(OrderApiService);
  private activeRoute = inject(ActivatedRoute);
  order$: Observable<Order |undefined> | undefined ;
  constructor() { }

  ngOnInit(): void {
  this.getOrder();
  
  }

  getOrder(){
    this.order$ = this.orderService.getOrderById(this.activeRoute.snapshot.params['id']).pipe(tap(e=>{console.log({e});
    }))
  }
}
