import { Injectable, PipeTransform, Pipe } from '@angular/core';

/**
 * Transforms any input value
 */
@Pipe({
  name: 'replaceAt'
})
@Injectable()
export class NgxStrReplaceCharsAtPipe implements PipeTransform {
  transform(value: string, from: number, replaceValue, reverse: boolean = false): string {
    let newVal = this.replaceAt(value, from, replaceValue, reverse);
    return newVal;
  }

  private replaceAt(value: string, from:number, replaceValue: string, reverse:boolean =false) {
    if (reverse) {
      let index = (from < 0) ? value.length - Math.abs(from) : from;
      // return  (index - replaceValue.length).toString();
      // return value.substr(0, (from - replaceValue.length));
      return value.substr(0, (index - replaceValue.length)) + replaceValue+ value.substr(from);
    } else {
      return value.substr(0, from) + replaceValue+ value.substr(from + replaceValue.length);
    }
  }
}
