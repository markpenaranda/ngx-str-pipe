import { Injectable, PipeTransform, Pipe } from '@angular/core';

/**
 * Transforms any input value
 */
@Pipe({
  name: 'replaceAt'
})
@Injectable()
export class NgxStrReplaceCharsAtPipe implements PipeTransform {
  transform(value: string, from: number, replaceValue): string {
    let newVal = this.replaceAt(value, from, replaceValue);
    return newVal;
  }

  private replaceAt(value: string, from:number, replaceValue: string) {
    return value.substr(0, from) + replaceValue+ value.substr(from + replaceValue.length);
  }
}
