import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateToAge'
})
export class DateToAgePipe implements PipeTransform {

  transform(value: Date): number {
    let y = new Date().getFullYear()
    return y - value.getFullYear()
  }

}
