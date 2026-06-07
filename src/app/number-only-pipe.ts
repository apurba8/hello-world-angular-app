import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberOnly',
})
export class NumberOnlyPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    let tem=value.split('');
    return tem[0].toUpperCase() + tem.splice(1).join('').toLowerCase();
  }

}
