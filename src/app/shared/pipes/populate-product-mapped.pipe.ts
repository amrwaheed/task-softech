import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'populateProductMapped'
})
export class PopulateProductMappedPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
