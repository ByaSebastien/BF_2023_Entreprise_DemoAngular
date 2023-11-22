import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertTime'
})
export class ConvertTimePipe implements PipeTransform {

  transform(seconds: number): string {

    let minutes = Math.floor(seconds / 60);
    seconds = seconds % 60;

    return `${minutes} : ${seconds}`;
  }

}
