import { Component, OnInit, inject } from '@angular/core';
import { OrderApiService, ProductApiService } from '@softech/apis';
import { Order, Product } from '@softech/shared-interfaces';
import { Observable, forkJoin, map, share, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  private orderService = inject(OrderApiService);
  private productService = inject(ProductApiService);

  orders$: Observable<Order[]> | undefined;
  products: Product[] = [];

  constructor() { }

  ngOnInit(): void {
    this.getOrders()
  }

  getOrders(){
    this.orders$ =  forkJoin([this.productService.getAllProducts(),this.orderService.getAllOrders()]).pipe(
      tap (e=>console.log(e)  ),
      map((value)=>{
        this.products = value[0]; 
        return value[1]
      }),
      share()
    )
  }

}
