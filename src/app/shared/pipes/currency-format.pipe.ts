import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyFormat',
})
export class CurrencyFormatPipe implements PipeTransform {
  transform(value: number, currency = 'ARS'): string {
    if (currency === 'ARS') {
      return `$${value.toLocaleString('es-AR')}`;
    }
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency,
    }).format(value);
  }
}
