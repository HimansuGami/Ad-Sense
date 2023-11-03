import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncatePipe',
})
export class TruncatePipePipe implements PipeTransform {
  transform(value: string, maxLength: number): string {
    if (value.length <= maxLength) return value;
    else return value.slice(0, maxLength) + '...';
  }
}
