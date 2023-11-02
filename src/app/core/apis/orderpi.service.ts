import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Order } from '@softech/shared-interfaces';

@Injectable({
  providedIn: 'root'
})
export class OrderApiService {

  private http = inject(HttpClient);

  public getAllOrders(){
    return this.http.get<Order[]>('assets/server/orders.json')
  }
}
