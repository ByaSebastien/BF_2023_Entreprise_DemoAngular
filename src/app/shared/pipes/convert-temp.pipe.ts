import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertTemp'
})
export class ConvertTempPipe implements PipeTransform {

  transform(value: number, unit: string = 'C'): string {

    switch (unit.toLowerCase()) {
      case 'c':
        return (value - 32) * 5 / 9 + ' C°';
      case 'f':
        return (value * 9 / 5) + 32 + ' F°';
      default:
        return value + unit;
    }
  }

}
