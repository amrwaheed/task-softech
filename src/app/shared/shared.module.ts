import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PopulateProductMappedPipe } from './pipes/populate-product-mapped.pipe';
import { GetTotalPriceAllProductsPipe } from './pipes/get-total-price-all-products.pipe';

const COMPONENTS = [
  NotFoundComponent
]
const PIPES_SHARED = [
  PopulateProductMappedPipe
]



@NgModule({
  declarations: [ 
    ...COMPONENTS,
    ...PIPES_SHARED,
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ...COMPONENTS,
    ...PIPES_SHARED
  ]
})
export class SharedModule { }
