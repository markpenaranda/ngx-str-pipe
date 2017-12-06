import { Injectable, PipeTransform, Pipe } from '@angular/core';

/**
 * Transforms any input value
 */
@Pipe({
  name: 'replace'
})
@Injectable()
export class NgxStrReplacePipe implements PipeTransform {
  transform(value: string, searchValue: string, replaceValue: string): string {
    let newVal = value.replace(searchValue, replaceValue);
    return newVal;
  }
}
