import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'degree'
})
export class DegreePipe implements PipeTransform {

  transform(value: number): string {
    value = value-273;
    return value.toFixed(0)
  }

}
