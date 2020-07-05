import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toInt'
})
export class ToIntPipe implements PipeTransform {

  transform(value:string): number {
    
    let x = parseInt(value)
    console.log('ToIntPipe - ' + value, x);

    if (isNaN(x)) {
      return -1
    } else {
      return x
    }
  }

}
