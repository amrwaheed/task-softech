import { Component, OnInit, inject } from '@angular/core';
import { ProductApiService } from '@softech/apis';
import { Product } from '@softech/shared-interfaces';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  private productService = inject(ProductApiService);

  products$: Observable<Product[]> | undefined
  constructor() { }

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts(){
    this.products$ =  this.productService.getAllProducts();
  }


}
